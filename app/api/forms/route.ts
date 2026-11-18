import { company } from "@/lib/content";
import { personal } from "@/lib/send";
import { clientIp, limited } from "@/lib/ratelimit";

// Env: RESEND_API_KEY (required), FORMS_TO, FORMS_FROM (a verified Resend domain; the default only reaches the Resend account owner),
// RESEND_AUDIENCE_ID (optional: newsletter signups are also added to this audience).
const subjects: Record<string, string> = { newsletter: "Newsletter signup", enterprise: "Enterprise enquiry", demo: "Demo request", waitlist: "Waitlist signup", contact: "Contact enquiry" };
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const resend = (path: string, body: unknown) =>
  fetch(`https://api.resend.com${path}`, { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) return Response.json({ error: "not configured" }, { status: 503 });
  if (await limited("forms", clientIp(req), 6, 600)) return Response.json({ error: "too many requests" }, { status: 429, headers: { "Retry-After": "600" } });
  const raw = await req.text();
  if (raw.length > 20_000) return Response.json({ error: "too large" }, { status: 413 });
  const body = (() => { try { return JSON.parse(raw); } catch { return null; } })();
  if (!body || typeof body !== "object" || Array.isArray(body)) return Response.json({ error: "bad request" }, { status: 400 });
  if (body.website) return Response.json({ ok: true }); // honeypot: bots fill it, people never see it

  const subject = typeof body.type === "string" && Object.hasOwn(subjects, body.type) ? subjects[body.type] : ""; // hasOwn: "constructor" etc. must not pass
  const email = String(body.email ?? "").trim();
  if (!subject || email.length > 254 || !/^[^\s@,;<>\"]+@[^\s@,;<>\"]+\.[^\s@,;<>\"]+$/.test(email)) return Response.json({ error: "bad request" }, { status: 400 });
  if (body.type === "enterprise" && personal.test(email)) return Response.json({ error: "company email required" }, { status: 400 });

  const rows = Object.entries(body).filter(([k]) => k !== "type" && k !== "website").slice(0, 25)
    .map(([k, v]) => `<p><b>${esc(k)}</b><br>${esc(String(v).slice(0, 5000)).replace(/\n/g, "<br>")}</p>`).join("");

  const calls = [resend("/emails", { from: process.env.FORMS_FROM ?? "Hyperstellar Website <onboarding@resend.dev>", to: [process.env.FORMS_TO ?? company.email], reply_to: email, subject, html: rows })];
  if (body.type === "newsletter" && process.env.RESEND_AUDIENCE_ID) calls.push(resend(`/audiences/${process.env.RESEND_AUDIENCE_ID}/contacts`, { email, unsubscribed: false }));
  const results = await Promise.all(calls).catch(() => []);
  return results.length === calls.length && results.every((r) => r.ok) ? Response.json({ ok: true }) : Response.json({ error: "send failed" }, { status: 502 });
}
