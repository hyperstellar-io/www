import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbs } from "@/lib/seo";
import FlowTimeline from "@/components/FlowTimeline";
import FrameworkPanels from "@/components/FrameworkPanels";
import ImmersiveHero from "@/components/ImmersiveHero";
import PostCard, { angleLabel, kindLabel } from "@/components/PostCard";
import PressureStory from "@/components/PressureStory";
import Reveal from "@/components/Reveal";
import ScrollText from "@/components/ScrollText";
import SectionNav from "@/components/SectionNav";
import Ticker from "@/components/Ticker";
import UseCaseExplorer from "@/components/UseCaseExplorer";
import { industries, products, services, stages } from "@/lib/content";
import { industryDetail } from "@/lib/industries";
import { postsFor, slugify } from "@/lib/blogs";
import { themeFor } from "@/lib/pagetheme";

export const generateStaticParams = () => industries.map((i) => ({ slug: slugify(i) }));

const find = (slug: string) => industries.find((i) => slugify(i) === slug);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = find(slug);
  return name ? { title: name, description: industryDetail[slug]?.tagline ?? `Perspectives and use cases for ${name}.` } : {};
}

const arrow = "grid size-10 shrink-0 place-items-center rounded-full border border-line transition group-hover:rotate-45 group-hover:border-ion group-hover:bg-ion group-hover:text-on-ion";

async function IndustryContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = find(slug);
  const d = industryDetail[slug];
  if (!name || !d) notFound();
  const list = postsFor(slug);
  const { hue, motif } = themeFor(slug);
  const cut = name.lastIndexOf(" ");
  const sections = [
    { id: "pressures", label: "The sector" }, { id: "usecases", label: "Use cases" }, { id: "help", label: "How we help" },
    { id: "start", label: "Engagement" }, { id: "landscape", label: "Landscape" }, ...(list.length ? [{ id: "applied", label: "Applied" }] : []),
  ];
  return (
    <>
      <JsonLd data={breadcrumbs([["Industries", "/industries"], [name, `/industries/${slug}`]])} />
      <ImmersiveHero id={`i-${slug}`} hue={hue} motif={motif} eyebrow="Industries" title={name.slice(0, cut)} accent={name.slice(cut + 1)} sub={d.tagline}>
        <Link href="/demo" className="btn btn-solid">Book a business demo</Link>
        <Link href="/contact" className="btn btn-liquid">Talk to us</Link>
      </ImmersiveHero>
      <SectionNav sections={sections} />

      <section className="px-3 py-24 sm:px-8 lg:py-32"><ScrollText text={d.lead} className="serif max-w-5xl text-3xl leading-[1.15] sm:text-5xl lg:text-6xl" /></section>

      <PressureStory id="pressures" title={<>What the sector is <em>up against.</em></>} items={d.pressures} />
      <Ticker words={d.useCases.map(([t]) => t)} />
      <UseCaseExplorer id="usecases" title={<>Where AI and engineering <em>help.</em></>} items={d.useCases} hue={hue} />

      <section id="help" className="scroll-mt-28 px-3 py-20 sm:px-8">
        <Reveal><h2 className="h2">How we can <em>help.</em></h2></Reveal>
        <ul className="mt-10 border-t border-line">
          {d.solutions.map((x, i) => {
            const s = services.find((y) => y.slug === x.slug);
            return s && (
              <Reveal key={x.slug} delay={i * 0.04}>
                <li className="border-b border-line">
                  <Link href={`/solutions/${x.slug}`} className="group relative grid grid-cols-[1fr_auto] items-center gap-4 overflow-hidden px-1 py-7 md:grid-cols-[1fr_2fr_auto] md:gap-10 md:px-4">
                    <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-panel transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                    <h3 className="serif text-2xl transition group-hover:translate-x-2 sm:text-3xl">{s.title}</h3>
                    <p className="col-span-2 row-start-2 text-mute md:col-span-1 md:row-start-auto">{x.why}</p>
                    <span aria-hidden="true" className={arrow}>↗</span>
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {d.products.map((x, i) => {
            const p = products.find((y) => y.slug === x.slug);
            return p && (
              <Reveal key={x.slug} delay={i * 0.1}>
                <li className="h-full">
                  <Link href={`/products/${x.slug}`} className="group relative flex h-full min-h-[18rem] flex-col justify-between gap-10 lg:min-h-[20rem] overflow-hidden rounded-[1.75rem] p-8 text-white transition hover:-translate-y-1" style={{ background: `linear-gradient(135deg, hsl(${hue} 50% 16%), hsl(${hue + 40 + i * 25} 55% 34%))` }}>
                    <span aria-hidden="true" className={`${arrow} absolute right-6 top-6 !border-white/40`}>↗</span>
                    <p className="max-w-[75%] font-mono text-[0.65rem] uppercase leading-relaxed tracking-widest text-white/70">Product · {p.status}</p>
                    <div><h3 className="serif text-4xl lg:text-5xl">{p.name}</h3>
                    <p className="mt-3 max-w-xl text-white/85 lg:text-lg">{x.why}</p></div>
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <FlowTimeline id="start" title={<>How an engagement <em>starts.</em></>}
        steps={d.start.map((s, i) => ({ name: s.name, body: s.body, list: s.considerations, listLabel: "What we plan around", color: stages[i].color }))} />

      <section id="landscape" className="scroll-mt-28 px-3 py-20 sm:px-8">
        <Reveal>
          <h2 className="h2">The landscape we <em>design within.</em></h2>
          <p className="mt-4 max-w-2xl text-mute">Regulations and standards that shape technology delivery in this sector. We design to work within them; this is context, not a claim of certification.</p>
        </Reveal>
        <FrameworkPanels items={d.frameworks} />
      </section>

      {list.length > 0 && (
        <section id="applied" className="scroll-mt-28 px-3 pb-24 pt-10 sm:px-8">
          <Reveal><h2 className="h2">See it <em>applied.</em></h2></Reveal>
          <ul className="no-scrollbar -mx-3 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08} className="w-[80vw] max-w-sm shrink-0 snap-start md:w-auto md:max-w-none">
                <li><PostCard post={p} pos={i} badges={[...(p.angle ? [angleLabel[p.angle]] : []), kindLabel[p.kind]]} /></li>
              </Reveal>
            ))}
          </ul>
        </section>
      )}
      <CTA title="Let's talk about your goals." action={{ href: "/contact", label: "Talk to us" }} action2={{ href: "/demo", label: "Book a business demo" }} />
    </>
  );
}

// Reading the URL param outside Suspense would block instant navigation; the known slugs are prerendered anyway.
export default function Industry(props: { params: Promise<{ slug: string }> }) {
  return <Suspense fallback={null}><IndustryContent {...props} /></Suspense>;
}
