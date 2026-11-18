"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { industries, products, services } from "@/lib/content";
import { slugify } from "@/lib/blogs/types";
import { posts } from "@/lib/blogs";

// Client-side title/summary match over the site's pages; no search backend. ponytail: substring match, add ranking/fuzzy if the index outgrows it.
const index = [
  ...products.map((p) => ({ href: `/products/${p.slug}`, label: p.name, sub: p.tagline, kind: "Product" })),
  ...services.map((s) => ({ href: `/solutions/${s.slug}`, label: s.title, sub: s.blurb, kind: "Solution" })),
  ...industries.map((i) => ({ href: `/industries/${slugify(i)}`, label: i, sub: "", kind: "Industry" })),
  ...posts.map((p) => ({ href: `/insights/${p.slug}`, label: p.title, sub: p.dek, kind: "Insight" })),
  ...[["/enterprise", "Enterprise"], ["/company", "About us"], ["/contact", "Contact us"], ["/demo", "Get a demo"], ["/work-with-us", "Work with us"]].map(([href, label]) => ({ href, label, sub: "", kind: "Page" })),
];

export default function SearchButton() {
  const dialog = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const [q, setQ] = useState("");
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  const hits = terms.length ? index.filter((i) => terms.every((t) => `${i.label} ${i.sub} ${i.kind}`.toLowerCase().includes(t))).slice(0, 8) : [];
  const show = () => dialog.current?.showModal();
  const close = () => { dialog.current?.close(); setQ(""); };

  useEffect(() => {
    const k = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); show(); } };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);

  return (
    <>
      <button onClick={show} aria-label="Search" className="btn btn-ghost size-10 justify-center !p-0">
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
      </button>
      <dialog ref={dialog} aria-label="Search" onClose={() => setQ("")} onClick={(e) => e.target === dialog.current && close()} className="mx-auto mt-[12vh] w-[min(92vw,36rem)] rounded-3xl border border-line bg-ink p-0 text-fg shadow-[0_30px_80px_rgba(0,0,0,.35)] backdrop:bg-black/50 backdrop:backdrop-blur-sm">
        <form onSubmit={(e) => { e.preventDefault(); if (hits[0]) { router.push(hits[0].href); close(); } }} className="p-4">
          <input autoFocus type="search" value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => { if (e.key === "Escape") { e.preventDefault(); close(); } }} placeholder="Search products, solutions, industries, insights" aria-label="Search the site" className="w-full rounded-full bg-panel px-5 py-3 outline-none placeholder:text-mute" />
          <ul className="mt-2 max-h-[50vh] overflow-y-auto">
            {hits.map((h) => (
              <li key={h.href}>
                <Link href={h.href} onClick={close} className="block rounded-2xl px-4 py-3 hover:bg-panel focus-visible:bg-panel">
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-mute">{h.kind}</span>
                  <span className="block leading-snug">{h.label}</span>
                  {h.sub && <span className="line-clamp-1 text-sm text-mute">{h.sub}</span>}
                </Link>
              </li>
            ))}
            {terms.length > 0 && !hits.length && <li className="px-4 py-3 text-mute">No results for “{q}”.</li>}
          </ul>
        </form>
      </dialog>
    </>
  );
}
