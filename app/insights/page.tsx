import type { Metadata } from "next";
import CTA from "@/components/CTA";
import InsightsList from "@/components/InsightsList";
import PostCard from "@/components/PostCard";
import { industries } from "@/lib/content";
import { posts, slugify } from "@/lib/blogs";

export const metadata: Metadata = { title: "Insights", description: "Practical perspectives on AI engineering, use cases and case studies across industries." };

export default function Insights() {
  const [featured, ...rest] = posts;
  const cards = rest.map(({ slug, title, dek, kind, angle, tag, industry }) => ({ slug, title, dek, kind, angle, tag, industry }));
  const options = industries.map((name) => ({ slug: slugify(name), name })).filter((o) => rest.some((p) => p.industry === o.slug));
  return (
    <>
      <section className="px-3 pb-14 pt-36 text-center sm:px-8 sm:pt-40">
        <h1 className="serif text-5xl sm:text-6xl">Insights</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-mute">Practical use cases and case studies on putting AI into production, across the industries we serve.</p>
      </section>
      {featured && <section className="px-3 pb-12 sm:px-8" aria-label="Featured"><PostCard post={featured} badges={["Featured", featured.tag]} large /></section>}
      <InsightsList posts={cards} industries={options} />
      <CTA title="Let's work together." />
    </>
  );
}
