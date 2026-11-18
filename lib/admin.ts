import { createHmac, timingSafeEqual } from "node:crypto";
import { industries, products, services } from "./content";
import { posts, slugify } from "./blogs";
import { posts as made } from "./blogs/generated";
import type { Post } from "./blogs/types";

// Admin = one shared password (ADMIN_PASSWORD, 12+ characters). A login sets an httpOnly cookie holding an expiry signed with that password.
export const COOKIE = "admin";
const TTL = 12 * 3600;

const mac = (v: string) => createHmac("sha256", process.env.ADMIN_PASSWORD ?? "").update(v).digest("base64url");
const same = (a: string, b: string) => a.length === b.length && timingSafeEqual(Buffer.from(a), Buffer.from(b));

export const adminReady = () => (process.env.ADMIN_PASSWORD?.length ?? 0) >= 12;
export const passwordOk = (given: unknown) => adminReady() && typeof given === "string" && same(mac(given), mac(process.env.ADMIN_PASSWORD!));
export const makeSession = () => { const exp = String(Math.floor(Date.now() / 1000) + TTL); return `${exp}.${mac(exp)}`; };
export const sessionMaxAge = TTL;
/** Signature only, no clock: for deciding which UI to render (Next forbids reading the time while rendering). Real checks use sessionOk. */
export function sessionSigOk(cookie: string | undefined) {
  if (!adminReady() || !cookie) return false;
  const [exp, sig] = cookie.split(".");
  return !!exp && !!sig && same(sig, mac(exp));
}
/** Signature and expiry: every API route that changes anything uses this. */
export const sessionOk = (cookie: string | undefined) => sessionSigOk(cookie) && Number(cookie!.split(".")[0]) > Date.now() / 1000;

// --- post validation -------------------------------------------------------------------------------------------------------------------
const kinds = ["use-case", "case-study"] as const;
const angles = ["product", "solution", "ai-solution"] as const;
export const industryOptions = industries.map((i) => ({ slug: slugify(i), name: i }));
export const offeringOptions = [...products.map((p) => ({ slug: p.slug, name: p.name })), ...services.map((s) => ({ slug: s.slug, name: s.title }))];

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Returns a clean Post, or an error message. A slug of a post made here is overwritten (an update); slugs of the original posts are refused. */
export function validatePost(input: Record<string, unknown>): Post | string {
  const slug = str(input.slug, 80), title = str(input.title, 200), dek = str(input.dek, 400), tag = str(input.tag, 30);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug) || slug.length < 3) return "Slug must be lowercase letters, numbers and hyphens (3+ characters).";
  if (!title) return "Title is required.";
  if (!dek) return "Summary is required.";
  if (!tag) return "Tag is required.";
  if (posts.some((p) => p.slug === slug) && !made.some((p) => p.slug === slug)) return "That slug is used by one of the original posts.";
  const kind = kinds.find((k) => k === input.kind);
  if (!kind) return "Pick a kind.";
  const angle = input.angle ? angles.find((a) => a === input.angle) : undefined;
  if (input.angle && !angle) return "Unknown angle.";
  const industry = str(input.industry, 80) || undefined;
  if (industry && !industryOptions.some((i) => i.slug === industry)) return "Unknown industry.";
  const offering = str(input.offering, 80) || undefined;
  if (offering && !offeringOptions.some((o) => o.slug === offering)) return "Unknown product or solution.";
  const when = new Date(str(input.published, 40));
  if (Number.isNaN(+when)) return "Publish date is not valid.";
  const body = (typeof input.body === "string" ? input.body : "").split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  if (!body.length || body.join("").length > 60_000) return "Body is required (60,000 characters at most).";
  return { slug, title, dek, kind, tag, published: when.toISOString(), body, ...(industry && { industry }), ...(angle && { angle }), ...(offering && { offering }) };
}

// --- GitHub: one JSON file per post under content/posts, which a rebuild turns into the site (scripts/build-posts.mjs) ---------------------
export async function savePost(post: Post, title: string) {
  const { GITHUB_TOKEN: token, GITHUB_REPO: repo, GITHUB_BRANCH: branch = "main" } = process.env;
  if (!token || !repo) return { ok: false as const, status: 503, error: "GitHub is not configured (GITHUB_TOKEN, GITHUB_REPO)." };
  const url = `https://api.github.com/repos/${repo}/contents/content/posts/${post.slug}.json`;
  const headers = { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "User-Agent": "hyperstellar-admin" };
  const current = await fetch(`${url}?ref=${encodeURIComponent(branch)}`, { headers, cache: "no-store" });
  const sha = current.ok ? (await current.json()).sha : undefined;
  if (!current.ok && current.status !== 404) return { ok: false as const, status: 502, error: `GitHub refused the lookup (${current.status}).` };
  const put = await fetch(url, {
    method: "PUT", headers, cache: "no-store",
    body: JSON.stringify({ message: `${sha ? "Update" : "Publish"} post: ${title}`, branch, sha, content: Buffer.from(JSON.stringify(post, null, 2) + "\n").toString("base64") }),
  });
  return put.ok ? { ok: true as const, updated: !!sha } : { ok: false as const, status: 502, error: `GitHub refused the commit (${put.status}).` };
}
