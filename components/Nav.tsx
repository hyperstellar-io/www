"use client";
import Link from "next/link";
import { useState } from "react";
import { industries, products, services } from "@/lib/content";
import { slugify } from "@/lib/blogs/types";
import { posts } from "@/lib/blogs";
import { families } from "@/lib/families";
import Mark from "./Mark";
import SearchButton from "./SearchButton";
import ThemeToggle from "./ThemeToggle";

type Item = { href: string; label: string; sub?: string };
type Panel = { intro: string; cols: { title: string; items: Item[]; wide?: boolean }[]; featured?: Item & { tag: string } };

const live = products.filter((p) => p.features.length);
const panels: Record<string, Panel> = {
  Products: {
    intro: "Explore the software we are building at Hyperstellar.",
    cols: [{ title: "Products", wide: true, items: [...live, ...products.filter((p) => !p.features.length)].map((p) => ({ href: `/products/${p.slug}`, label: p.name, sub: p.tagline })) }],
  },
  Solutions: {
    intro: "From AI strategy to production systems to 24×7 operations, end to end.",
    cols: families.map((f) => ({ title: f.title, items: f.slugs.map((slug) => ({ href: `/solutions/${slug}`, label: services.find((s) => s.slug === slug)!.title })) })),
  },
  Industries: {
    intro: "Our work is tailored to a variety of industries.",
    cols: [{ title: "Industry", wide: true, items: industries.map((i) => ({ href: `/industries/${slugify(i)}`, label: i })) }],
  },
  Company: {
    intro: "Engineers who care more about the outcome than the invoice.",
    cols: [
      { title: "Company", items: [{ href: "/company", label: "About us" }, { href: "/contact", label: "Contact us" }] },
      { title: "Explore", items: [{ href: "/insights", label: "Insights" }, { href: "/work-with-us", label: "Work with us" }] },
    ],
    featured: { href: `/insights/${posts[0].slug}`, label: posts[0].title, tag: "Featured resource" },
  },
};
const direct = [{ href: "/enterprise", label: "Enterprise" }];
const order = ["Products", "Solutions", "Industries", "Enterprise", "Company"];

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const panel = open ? panels[open] : null;
  const close = () => { setOpen(null); setMobile(false); };
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-8 sm:pt-5" onMouseLeave={() => setOpen(null)} onKeyDown={(e) => e.key === "Escape" && close()}>
      <div className="relative mx-auto flex w-full items-start justify-between">
        <nav aria-label="Primary" className="glass flex items-center gap-1 rounded-full p-1.5 pr-3">
          <Link href="/" aria-label="Hyperstellar home" onClick={close} className="pr-2"><Mark /></Link>
          <ul className="hidden items-center md:flex">
            {order.map((label) => {
              const isDirect = direct.find((d) => d.label === label);
              return (
                <li key={label} onMouseEnter={() => setOpen(isDirect ? null : label)}>
                  {isDirect ? (
                    <Link href={isDirect.href} className="block rounded-full px-3.5 py-2 text-sm transition hover:bg-line/60">{label}</Link>
                  ) : (
                    <button aria-expanded={open === label} onClick={() => setOpen(open === label ? null : label)} onFocus={() => setOpen(label)} className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition hover:bg-line/60 ${open === label ? "bg-line/60" : ""}`}>
                      {label}<svg viewBox="0 0 10 6" className={`w-2 transition ${open === label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 1l4 4 4-4" /></svg>
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
          <button className="rounded-full px-3 py-2 text-sm md:hidden" aria-expanded={mobile} onClick={() => setMobile(!mobile)}>{mobile ? "Close" : "Menu"}</button>
        </nav>
        <div className="flex items-center gap-2">
          <SearchButton />
          <ThemeToggle />
        </div>
      </div>

      {panel && (
        <div className="mx-auto mt-2 hidden w-full rounded-[2rem] bg-ink p-3 shadow-[0_20px_60px_rgba(0,0,0,.18)] ring-1 ring-line md:block" onMouseEnter={() => setOpen(open)}>
          <div className="grid min-h-[22rem] grid-cols-[minmax(0,26rem)_minmax(0,1fr)_minmax(0,22rem)] gap-8">
            <div className="rounded-3xl bg-panel p-8"><p className="serif text-3xl leading-tight">{panel.intro}</p></div>
            <div className="flex gap-12 py-6">
              {panel.cols.map((c) => (
                <div key={c.title} className={c.wide ? "grid flex-1 grid-cols-2 content-start gap-x-10" : "min-w-0 flex-1"}>
                  <p className="eyebrow col-span-full mb-5 !text-mute">{c.title}</p>
                  <ul className={c.wide ? "contents" : "space-y-4"}>
                    {c.items.map((i) => (
                      <li key={i.label} className={c.wide ? "mb-6" : ""}>
                        <Link href={i.href} onClick={close} className="group flex gap-4">
                          {i.sub && <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full border border-dashed border-fg/50 text-xs">+</span>}
                          <span><span className="block text-lg leading-snug transition group-hover:underline">{i.label}</span>{i.sub && <span className="mt-1 block text-sm text-mute">{i.sub}</span>}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {panel.featured ? (
              <Link href={panel.featured.href} onClick={close} className="m-1 rounded-3xl bg-panel p-6">
                <p className="eyebrow !text-mute">{panel.featured.tag}</p>
                <div className="mt-5 flex gap-4">
                  <span className="grid size-24 shrink-0 place-items-center rounded-2xl bg-indigo"><Mark className="size-12" /></span>
                  <span className="serif text-2xl leading-tight">{panel.featured.label}</span>
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      )}

      {mobile && (
        <ul className="glass mx-auto mt-2 max-h-[80vh] w-full overflow-y-auto rounded-3xl p-3 md:hidden" onClick={close}>
          {[["Products", "/products"], ["Solutions", "/solutions"], ["Industries", "/industries"], ["Enterprise", "/enterprise"], ["Insights", "/insights"], ["About us", "/company"], ["Work with us", "/work-with-us"], ["Contact sales", "/enterprise/contact"], ["Contact us", "/contact"]].map(([l, h]) => <li key={h}><Link href={h} className="block rounded-2xl px-4 py-3 text-lg">{l}</Link></li>)}
        </ul>
      )}
    </header>
  );
}
