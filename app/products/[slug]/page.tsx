import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import LumenLanding from "@/components/product-landings/LumenLanding";
import ProductPage from "@/components/product-landings/ProductPage";
import SignalSoon from "@/components/SignalSoon";
import JsonLd from "@/components/JsonLd";
import { products } from "@/lib/content";
import { breadcrumbs, faqPage, softwareApp } from "@/lib/seo";
import { landings } from "@/lib/product-pages";

// Accent colour per product for the shared Lumen-style page.
const accents: Record<string, string> = { invoflow: "#1fa36b", together: "#d2603a", shelfwise: "#e08a1e", orbs: "#7a5cff" };

export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  const l = p && landings[p.slug];
  return l ? { title: { absolute: l.seo.title }, description: l.seo.description } : p ? { title: `${p.name}: ${p.category}`, description: p.summary } : {};
}

async function ProductContent({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const l = landings[p.slug];
  const ld = <JsonLd data={[softwareApp(p), breadcrumbs([["Products", "/products"], [p.name, `/products/${p.slug}`]]), ...(l ? [faqPage(l.faq)] : [])]} />;
  if (p.slug === "signal") return <>{ld}<SignalSoon name={p.name} category={p.category} tagline={p.tagline} status={p.status} /></>;
  const props = { slug: p.slug, name: p.name, category: p.category, d: l };
  if (p.slug === "lumen") return <>{ld}<LumenLanding {...props} /></>;
  return <>{ld}<ProductPage slug={p.slug} name={p.name} d={l} accent={accents[p.slug]} /></>;
}

// Reading the URL param outside Suspense would block instant navigation; the known slugs are prerendered anyway.
export default function Product(props: PageProps<"/products/[slug]">) {
  return <Suspense fallback={null}><ProductContent {...props} /></Suspense>;
}
