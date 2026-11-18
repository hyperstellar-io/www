import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { services } from "@/lib/content";
import { families } from "@/lib/families";

export const metadata: Metadata = { title: "Solutions", description: "AI engineering, inference, infrastructure, embedded engineering and the enterprise technology around them, from strategy to 24×7 operations." };

export default function Solutions() {
  return (
    <>
      <section className="px-3 pb-14 pt-36 text-center sm:px-8 sm:pt-40">
        <p className="eyebrow">Solutions</p>
        <h1 className="display mt-5">What we <em>deliver.</em></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-mute">From AI strategy to production systems to round-the-clock operations: engineering teams that take responsibility for the outcome, not just the build.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/demo" className="btn btn-solid">Get a demo</Link>
          <Link href="/contact" className="btn btn-ghost">Talk to us</Link>
        </div>
      </section>
      <div className="space-y-16 px-3 pb-24 sm:px-8">
        {families.map((f) => (
          <section key={f.key} aria-labelledby={f.key} className="grid gap-6 border-t border-line pt-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 id={f.key} className="h2">{f.title}</h2>
              <p className="mt-4 max-w-sm text-mute">{f.blurb}</p>
            </div>
            <ol className="divide-y divide-line">
              {f.slugs.map((slug, n) => {
                const s = services.find((x) => x.slug === slug)!;
                return (
                  <li key={slug}>
                    <Link href={`/solutions/${slug}`} className="group flex items-center gap-5 py-5 transition motion-safe:hover:pl-3 focus-visible:outline-2 focus-visible:outline-accent">
                      <span className="w-8 shrink-0 font-mono text-xs text-mute">{String(n + 1).padStart(2, "0")}</span>
                      <span className="flex-1">
                        <span className="serif block text-2xl sm:text-3xl">{s.title}</span>
                        <span className="mt-1 block text-sm text-mute">{s.blurb}</span>
                      </span>
                      <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition group-hover:rotate-45 group-hover:border-ion group-hover:bg-ion group-hover:text-on-ion">↗</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
      <CTA />
    </>
  );
}
