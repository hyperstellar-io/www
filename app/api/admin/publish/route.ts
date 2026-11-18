import { cookies } from "next/headers";
import { COOKIE, savePost, sessionOk, validatePost } from "@/lib/admin";

export async function POST(req: Request) {
  if (!sessionOk((await cookies()).get(COOKIE)?.value)) return Response.json({ error: "Not signed in." }, { status: 401 });
  if (req.headers.get("content-type") !== "application/json") return Response.json({ error: "Expected JSON." }, { status: 415 });
  const raw = await req.text();
  if (raw.length > 100_000) return Response.json({ error: "Post is too large." }, { status: 413 });
  const input = (() => { try { return JSON.parse(raw); } catch { return null; } })();
  if (!input || typeof input !== "object" || Array.isArray(input)) return Response.json({ error: "Bad request." }, { status: 400 });
  const post = validatePost(input);
  if (typeof post === "string") return Response.json({ error: post }, { status: 422 });
  const saved = await savePost(post, post.title);
  if (!saved.ok) return Response.json({ error: saved.error }, { status: saved.status });
  return Response.json({ ok: true, updated: saved.updated, scheduled: +new Date(post.published) > Date.now() });
}
