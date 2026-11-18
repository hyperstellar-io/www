import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import InsightArt from "@/components/InsightArt";
import PostActions from "@/components/PostActions";
import JsonLd from "@/components/JsonLd";
import PostCard from "@/components/PostCard";
import { industries, services } from "@/lib/content";
import { article, breadcrumbs } from "@/lib/seo";
import { posts, postsFor, readMins, slugify } from "@/lib/blogs";

export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.dek } : {};
}

const fmt = (o: Intl.DateTimeFormatOptions, d: Date) => new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", ...o }).format(d);

async function PostContent({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const post = posts.find((x) => x.slug === slug);
  if (!post) notFound();
  const d = new Date(post.published);
  const time = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: true }).format(d);
  const meta = `${time} · ${fmt({ day: "numeric", month: "long", year: "numeric" }, d)} · ${fmt({ weekday: "long" }, d)}`;
  const industry = post.industry ? industries.find((i) => slugify(i) === post.industry) : undefined;
  const solution = services.find((x) => x.slug === post.offering);
  const related = post.industry ? postsFor(post.industry).filter((p) => p.slug !== post.slug).slice(0, 3) : [];
  return (
    <>
      <JsonLd data={[article(post, industry), breadcrumbs([["Insights", "/insights"], [post.title, `/insights/${post.slug}`]])]} />
      <div className="px-3 pt-24 sm:px-8 sm:pt-28">
        <div className="relative isolate flex min-h-[70svh] flex-col justify-end overflow-hidden rounded-[1.75rem] p-6 text-white sm:p-10">
          <InsightArt index={posts.indexOf(post)} sharp />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" aria-hidden="true" />
          <div className="relative flex flex-wrap items-end justify-between gap-6"><div className="max-w-4xl">
            <p className="inline-block rounded-full bg-white/90 px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-[#15140f]">{post.tag}</p>
            <h1 className="serif mt-5 text-4xl sm:text-6xl">{post.title}</h1>
            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-white/80">
              <time dateTime={post.published}>{meta}</time> · {readMins(post)} min read
            </p>
          </div>
          <PostActions title={post.title} />
          </div>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-5 pb-20 pt-12">
        <p className="text-xl text-mute">{post.dek}</p>
        <div className="mt-12 space-y-6 text-justify text-lg leading-relaxed hyphens-auto" lang="en">
          {post.body.map((t, i) => t.startsWith("## ")
            ? <h2 key={i} className="serif !mt-12 text-3xl sm:text-4xl">{t.slice(3)}</h2>
            : <p key={i}>{t}</p>)}
        </div>
        {solution && <Link href={`/solutions/${solution.slug}`} className="group mt-12 flex items-center gap-3 text-sm focus-visible:outline-2 focus-visible:outline-accent">Related solution: {solution.title} <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full border border-line transition group-hover:rotate-45 group-hover:border-ion group-hover:bg-ion group-hover:text-on-ion">↗</span></Link>}
        {industry && <Link href={`/industries/${post.industry}`} className="group mt-4 flex items-center gap-3 text-sm focus-visible:outline-2 focus-visible:outline-accent">More from {industry} <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full border border-line transition group-hover:rotate-45 group-hover:border-ion group-hover:bg-ion group-hover:text-on-ion">↗</span></Link>}
      </article>
      {related.length > 0 && (
        <section className="px-3 pb-24 sm:px-8" aria-labelledby="related">
          <h2 id="related" className="h2">Related <em>reading.</em></h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => <li key={p.slug}><PostCard post={p} pos={posts.indexOf(post) + i + 1} /></li>)}
          </ul>
        </section>
      )}
      <CTA />
    </>
  );
}

// Reading the URL param outside Suspense would block instant navigation; the known slugs are prerendered anyway.
export default function Post(props: PageProps<"/insights/[slug]">) {
  return <Suspense fallback={null}><PostContent {...props} /></Suspense>;
}
