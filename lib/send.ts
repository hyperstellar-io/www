// Client helper for POST /api/forms (Resend-backed, see app/api/forms/route.ts).
export const personal = /@(gmail|googlemail|yahoo|ymail|hotmail|outlook|live|msn|icloud|me|aol|proton|protonmail|rediffmail)\./i;

export async function send(type: string, data: Record<string, unknown>) {
  try {
    const r = await fetch("/api/forms", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, type }) });
    return r.ok;
  } catch {
    return false;
  }
}
