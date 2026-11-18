"use client";
import { useEffect, useRef, useState } from "react";

type Opt = { slug: string; name: string };
const field = "mt-2 w-full rounded-xl border border-line bg-panel px-4 py-3 text-fg placeholder:text-mute";
const slugify = (s: string) => s.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
// <input type="datetime-local"> wants local "YYYY-MM-DDTHH:mm".
const localNow = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16);

export function AdminLogin() {
  const [err, setErr] = useState("");
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const r = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: new FormData(e.currentTarget).get("password") }) });
    if (r.ok) location.reload();
    else setErr((await r.json().catch(() => null))?.error ?? "Could not sign in.");
  };
  return (
    <form onSubmit={submit} className="mx-auto max-w-sm space-y-5">
      <label className="block">Password<input name="password" type="password" required autoComplete="current-password" className={field} /></label>
      {err && <p role="alert" className="text-sm text-[#9a3f1f]">{err}</p>}
      <button className="btn btn-solid">Sign in</button>
    </form>
  );
}

export function AdminEditor({ industries, offerings }: { industries: Opt[]; offerings: Opt[] }) {
  const [slug, setSlug] = useState("");
  const [touched, setTouched] = useState(false);
  const when = useRef<HTMLInputElement>(null);
  useEffect(() => { if (when.current) when.current.value = localNow(); }, []); // after mount: reading the clock during render is not allowed
  const [state, setState] = useState<{ kind: "idle" | "sending" | "ok" | "error"; msg?: string }>({ kind: "idle" });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    setState({ kind: "sending" });
    const r = await fetch("/api/admin/publish", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...d, slug, published: new Date(String(d.published)).toISOString() }) });
    const j = await r.json().catch(() => ({}));
    if (r.status === 401) return location.reload();
    if (!r.ok) return setState({ kind: "error", msg: j.error ?? "Could not publish." });
    setState({ kind: "ok", msg: `${j.updated ? "Updated" : "Saved"}${j.scheduled ? " and scheduled" : ""}. The site updates when the next build finishes (a few minutes).` });
  };
  const signOut = async () => { await fetch("/api/admin/login", { method: "DELETE" }); location.reload(); };

  return (
    <form onSubmit={submit} className="space-y-6">
      <label className="block">Title<input name="title" required maxLength={200} onChange={(e) => !touched && setSlug(slugify(e.target.value))} className={field} /></label>
      <label className="block">Slug (the web address)<input value={slug} onChange={(e) => { setTouched(true); setSlug(slugify(e.target.value)); }} required minLength={3} className={field} /></label>
      <label className="block">Summary (one sentence, shown on cards)<textarea name="dek" required rows={2} maxLength={400} className={field} /></label>
      <div className="grid gap-6 sm:grid-cols-3">
        <label className="block">Kind
          <select name="kind" required defaultValue="use-case" className={field}><option value="use-case">Use case</option><option value="case-study">Case study</option></select>
        </label>
        <label className="block">Tag<input name="tag" required maxLength={30} defaultValue="Use case" className={field} /></label>
        <label className="block">Publish at<input ref={when} name="published" type="datetime-local" required className={field} /></label>
      </div>
      <p className="-mt-3 text-sm text-mute">A date in the future schedules the post; it appears on the site after that time.</p>
      <div className="grid gap-6 sm:grid-cols-3">
        <label className="block">Industry
          <select name="industry" defaultValue="" className={field}><option value="">None</option>{industries.map((i) => <option key={i.slug} value={i.slug}>{i.name}</option>)}</select>
        </label>
        <label className="block">Product or solution
          <select name="offering" defaultValue="" className={field}><option value="">None</option>{offerings.map((o) => <option key={o.slug} value={o.slug}>{o.name}</option>)}</select>
        </label>
        <label className="block">Angle
          <select name="angle" defaultValue="" className={field}><option value="">None</option><option value="product">Product</option><option value="solution">Solution</option><option value="ai-solution">AI solution</option></select>
        </label>
      </div>
      <label className="block">Body
        <textarea name="body" required rows={16} className={`${field} font-mono text-sm`} />
        <span className="mt-1 block text-sm text-mute">Separate paragraphs with a blank line. Start a line with <code>## </code> for a subheading.</span>
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button disabled={state.kind === "sending"} className="btn btn-solid">{state.kind === "sending" ? "Publishing…" : "Publish"}</button>
        <button type="button" onClick={signOut} className="btn btn-ghost">Sign out</button>
      </div>
      {state.kind === "ok" && <p role="status" className="text-sm">{state.msg}</p>}
      {state.kind === "error" && <p role="alert" className="text-sm text-[#9a3f1f]">{state.msg}</p>}
    </form>
  );
}
