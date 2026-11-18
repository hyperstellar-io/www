"use client";
import { useState } from "react";
import PostCard, { type CardPost } from "./PostCard";

const kinds = [["all", "All"], ["use-case", "Use case"], ["case-study", "Case study"]] as const;
const BATCH = 6;

export default function InsightsList({ posts, industries }: { posts: CardPost[]; industries: { slug: string; name: string }[] }) {
  const [kind, setKind] = useState("all");
  const [industry, setIndustry] = useState("");
  const [open, setOpen] = useState(false);
  const [shownCount, setShownCount] = useState(BATCH);
  const list = posts.filter((p) => (kind === "all" || p.kind === kind) && (!industry || p.industry === industry));
  const reset = () => setShownCount(BATCH);
  return (
    <section className="px-3 pb-24 sm:px-8" aria-label="All insights">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <p className="text-sm" role="status">{list.length} Items</p>
        <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className="btn btn-ghost !py-2 !text-sm">Filters <span aria-hidden="true">{open ? "−" : "+"}</span></button>
      </div>
      {open && (
        <div className="flex flex-wrap items-center gap-3 border-b border-line py-5">
          <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-2">
            {kinds.map(([v, l]) => (
              <button key={v} type="button" aria-pressed={kind === v} onClick={() => { setKind(v); reset(); }} className={`btn !py-2 !text-sm ${kind === v ? "btn-solid" : "btn-ghost"}`}>{l}</button>
            ))}
          </div>
          <label className="flex items-center gap-2 text-sm text-mute sm:ml-auto">
            Industry
            <select value={industry} onChange={(e) => { setIndustry(e.target.value); reset(); }} className="rounded-full border border-line bg-panel px-4 py-2 text-fg">
              <option value="">All industries</option>
              {industries.map((o) => <option key={o.slug} value={o.slug}>{o.name}</option>)}
            </select>
          </label>
        </div>
      )}
      {list.length === 0 && <p className="py-12 text-mute">No articles match these filters yet.</p>}
      <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.slice(0, shownCount).map((p, i) => <li key={p.slug}><PostCard post={p} pos={i + 1} /></li>)}
      </ul>
      {list.length > shownCount && (
        <div className="mt-14 text-center"><button type="button" onClick={() => setShownCount(shownCount + BATCH)} className="btn btn-ghost">Load more</button></div>
      )}
    </section>
  );
}
