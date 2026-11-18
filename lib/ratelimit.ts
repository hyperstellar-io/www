// Fixed-window rate limit: `limit` hits per `window` seconds per key. Counted in Upstash Redis (UPSTASH_REDIS_REST_URL / _TOKEN) so it holds
// across servers; without them it falls back to a per-process map, which only slows a single instance.
const local = new Map<string, { n: number; reset: number }>(); // ponytail: per-instance fallback, set the Upstash env vars in production

export async function limited(scope: string, id: string, limit: number, window: number) {
  const key = `${scope}:${id}`;
  const { UPSTASH_REDIS_REST_URL: url, UPSTASH_REDIS_REST_TOKEN: token } = process.env;
  if (url && token) {
    try {
      const r = await fetch(`${url}/pipeline`, { method: "POST", headers: { Authorization: `Bearer ${token}` }, body: JSON.stringify([["INCR", key], ["EXPIRE", key, window, "NX"]]) });
      if (r.ok) return (await r.json())[0].result > limit;
    } catch {}
  }
  const now = Date.now(), e = local.get(key);
  if (!e || e.reset < now) { local.set(key, { n: 1, reset: now + window * 1000 }); return false; }
  return ++e.n > limit;
}

// Vercel sets x-forwarded-for; the first entry is the client.
export const clientIp = (req: Request) => req.headers.get("x-forwarded-for")?.split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";

