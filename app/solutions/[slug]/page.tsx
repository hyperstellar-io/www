import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbs, service } from "@/lib/seo";
import EngagementStack from "@/components/EngagementStack";
import ImmersiveHero from "@/components/ImmersiveHero";
import PhaseStage from "@/components/PhaseStage";
import PostCard from "@/components/PostCard";
import Reveal from "@/components/Reveal";
import ScrollRail from "@/components/ScrollRail";
import ScrollText from "@/components/ScrollText";
import SectionNav from "@/components/SectionNav";
import Ticker from "@/components/Ticker";
import { services, stages } from "@/lib/content";
import { familyOf } from "@/lib/families";
import { detail } from "@/lib/solutions";
import { posts } from "@/lib/blogs";
import { themeFor } from "@/lib/pagetheme";

export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.blurb } : {};
}

async function SolutionContent({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const p = detail[slug];
  const fam = familyOf(slug);
  const { hue, motif } = themeFor(slug);
  const related = posts.filter((x) => x.offering === slug).slice(0, 3);
  const cut = s.title.lastIndexOf(" ");
  const sections = [
    { id: "gets", label: "What you get" }, { id: "included", label: "What's included" }, { id: "how", label: "How we deliver" },
    { id: "eng", label: "Engagements" }, ...(related.length ? [{ id: "applied", label: "Applied" }] : []),
  ];
  return (
    <>
      <JsonLd data={[service(s), breadcrumbs([["Solutions", "/solutions"], [s.title, `/solutions/${s.slug}`]])]} />
      <ImmersiveHero id={`s-${slug}`} hue={hue} motif={motif} eyebrow={fam.title} title={cut > 0 ? s.title.slice(0, cut) : s.title} accent={cut > 0 ? s.title.slice(cut + 1) : ""} sub={s.blurb}>
        <Link href="/demo" className="btn btn-solid">Get a demo</Link>
        <Link href="/contact" className="btn btn-liquid">Talk to us</Link>
      </ImmersiveHero>
      <SectionNav sections={sections} />

      <section className="px-3 py-24 sm:px-8 lg:py-32">
        <p className="eyebrow">Who it&apos;s for</p>
        <p className="serif mt-4 max-w-4xl text-2xl text-accent sm:text-3xl">{p.fit}</p>
        <ScrollText text={p.lead} className="serif mt-12 max-w-5xl text-3xl leading-[1.15] sm:text-5xl lg:text-6xl" />
      </section>

      <ScrollRail id="gets" title={<>What you <em>get.</em></>}>
        {p.gets.map(([t, b], n) => (
          <li key={t} className="flex min-h-[22rem] w-[80vw] max-w-md shrink-0 snap-start flex-col justify-between rounded-[1.75rem] bg-panel p-8 md:w-[26rem]">
            <span className="serif text-7xl text-accent">{String(n + 1).padStart(2, "0")}</span>
            <div><h3 className="serif text-3xl">{t}</h3><p className="mt-3 text-mute">{b}</p></div>
          </li>
        ))}
      </ScrollRail>

      <Ticker words={p.included.map(([t]) => t)} />

      <section id="included" className="scroll-mt-28 px-3 py-20 sm:px-8">
        <Reveal><h2 className="h2">What&apos;s <em>included.</em></h2></Reveal>
        <ul className="mt-10 grid gap-x-10 border-t border-line md:grid-cols-2 md:[&:hover>li:not(:hover)]:opacity-40">
          {p.included.map(([t, b], i) => (
            <Reveal key={t} delay={(i % 2) * 0.08}>
              <li className="border-b border-line py-7 transition duration-300 md:hover:pl-3">
                <div className="flex items-baseline gap-4"><span className="font-mono text-xs text-mute">{String(i + 1).padStart(2, "0")}</span><h3 className="text-xl tracking-tight sm:text-2xl">{t}</h3></div>
                <p className="mt-2 pl-9 text-mute">{b}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <PhaseStage id="how" title={<>How we <em>deliver.</em></>} phases={p.phases.map((ph, i) => ({ ...ph, color: stages[i].color }))} />
      <EngagementStack id="eng" title={<>Typical <em>engagements.</em></>} items={p.engagements} />

      {related.length > 0 && (
        <section id="applied" className="scroll-mt-28 px-3 pb-24 sm:px-8">
          <Reveal><h2 className="h2">See it <em>applied.</em></h2></Reveal>
          <ul className="no-scrollbar -mx-3 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
            {related.map((x, i) => (
              <Reveal key={x.slug} delay={i * 0.08} className="w-[80vw] max-w-sm shrink-0 snap-start md:w-auto md:max-w-none"><li><PostCard post={x} pos={i} /></li></Reveal>
            ))}
          </ul>
        </section>
      )}

      <section className="px-3 pb-24 sm:px-8" aria-labelledby="more">
        <h2 id="more" className="eyebrow">More solutions</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {services.filter((x) => x.slug !== slug).map((x) => <li key={x.slug}><Link href={`/solutions/${x.slug}`} className="block rounded-full border border-line px-4 py-2 text-sm text-mute transition hover:border-ion hover:bg-ion hover:text-on-ion">{x.title}</Link></li>)}
        </ul>
      </section>
      <CTA />
    </>
  );
}

// Reading the URL param outside Suspense would block instant navigation; the known slugs are prerendered anyway.
export default function Solution(props: PageProps<"/solutions/[slug]">) {
  return <Suspense fallback={null}><SolutionContent {...props} /></Suspense>;
}
