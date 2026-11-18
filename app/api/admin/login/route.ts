import { cookies } from "next/headers";
import { COOKIE, adminReady, makeSession, passwordOk, sessionMaxAge } from "@/lib/admin";
import { clientIp, limited } from "@/lib/ratelimit";

export async function POST(req: Request) {
  if (!adminReady()) return Response.json({ error: "Admin is not configured." }, { status: 503 });
  if (await limited("admin-login", clientIp(req), 5, 900)) return Response.json({ error: "Too many attempts. Try again later." }, { status: 429, headers: { "Retry-After": "900" } });
  const body = await req.json().catch(() => null);
  if (!passwordOk(body?.password)) return Response.json({ error: "Wrong password." }, { status: 401 });
  (await cookies()).set(COOKIE, makeSession(), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: sessionMaxAge });
  return Response.json({ ok: true });
}

export async function DELETE() {
  (await cookies()).delete(COOKIE);
  return Response.json({ ok: true });
}
