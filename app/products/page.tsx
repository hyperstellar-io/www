import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { products } from "@/lib/content";

export const metadata: Metadata = { title: "Products", description: "Software products from Hyperstellar: Lumen, Together, Shelfwise, ORBS, Invoflow and Signal." };

export default function Products() {
  return (
    <>
      <PageHero eyebrow="Products" title={<>Software we are <span className="italic">building ourselves.</span></>}>
        Practical software for support, HR, supply chain, invoicing and AI assistants.
      </PageHero>
      <ul className="mx-auto max-w-7xl border-t border-line px-5">
        {products.map((p) => (
          <li key={p.slug} className="border-b border-line">
            <Link href={`/products/${p.slug}`} className="group grid gap-4 py-10 transition hover:pl-3 md:grid-cols-[1fr_2fr_auto] md:items-center">
              <h2 className="text-4xl tracking-tight">{p.name}</h2>
              <p className="text-mute"><span className="text-fg">{p.category}.</span> {p.tagline}</p>
              <span className="text-xs uppercase tracking-widest text-accent">{p.status}</span>
            </Link>
          </li>
        ))}
      </ul>
      <CTA title="Want to see a product in action?" action={{ href: "/demo", label: "Get a demo" }} />
    </>
  );
}
