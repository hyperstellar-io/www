import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Link from "next/link";
import { industries } from "@/lib/content";
import { slugify } from "@/lib/blogs/types";

export const metadata: Metadata = { title: "Industries", description: "Hyperstellar serves demanding industries, from financial services and healthcare to logistics and the public sector." };

export default function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries" title={<>Tailored to <span className="italic">demanding industries.</span></>}>
        Perspectives, use cases and illustrative case studies for each sector we work in.
      </PageHero>
      <ol className="mx-auto max-w-7xl border-t border-line px-5">
        {industries.map((i, n) => (
          <li key={i} className="border-b border-line">
            <Link href={`/industries/${slugify(i)}`} className="group flex items-baseline gap-6 py-5 transition motion-safe:hover:pl-3 focus-visible:outline-2 focus-visible:outline-accent">
              <span className="font-mono text-xs text-mute">{String(n + 1).padStart(2, "0")}</span>
              <span className="flex-1 text-2xl tracking-tight md:text-4xl">{i}</span>
              <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center self-center rounded-full border border-line transition group-hover:rotate-45 group-hover:border-ion group-hover:bg-ion group-hover:text-on-ion">↗</span>
            </Link>
          </li>
        ))}
      </ol>
      <CTA />
    </>
  );
}
