import Hero from "@/components/Hero";
import Tiles from "@/components/Tiles";
import Showcase from "@/components/Showcase";
import ProductCarousel from "@/components/ProductCarousel";
import FAQ from "@/components/FAQ";
import InsightsCarousel from "@/components/InsightsCarousel";
import FDESection from "@/components/FDESection";
import RolesIndustries from "@/components/RolesIndustries";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { company, faqs } from "@/lib/content";
import { faqPage } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={faqPage(faqs)} />
      <Hero />
      <Tiles />

      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <Reveal>
          <h2 className="h2">The AI engineering partner for <em>humans and machines.</em></h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-mute">We take ownership. We challenge assumptions, build fast, and tell you honestly when something won&apos;t work. Intelligent automation is our starting point, never an afterthought.</p>
        </Reveal>
      </section>

      <Showcase />

      <section className="py-16">
        <ProductCarousel />
      </section>

      <FDESection />

      <section className="mx-auto flex min-h-[90svh] max-w-3xl flex-col items-center justify-center px-5 py-24">
        <Reveal className="w-full text-center"><h2 className="h2 mb-14">Your questions, <em>answered.</em></h2></Reveal>
        <Reveal className="w-full"><FAQ /></Reveal>
      </section>

      <section className="relative mx-2 flex min-h-[100svh] items-center justify-center overflow-hidden rounded-[2rem] px-5 py-24 sm:mx-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/event-bg.webp" alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
        <Reveal className="relative w-full max-w-3xl rounded-3xl bg-ink px-6 py-14 text-center sm:px-14">
          <p className="eyebrow !text-mute">Upcoming events</p>
          <h2 className="h2 mt-6">Be first in the room at <em>our next event.</em></h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-2 font-mono text-[0.68rem] uppercase tracking-widest text-mute">
            {["Virtual", "India", "Dubai", "United States"].map((c) => <li key={c} className="rounded-full bg-panel px-4 py-2">{c}</li>)}
          </ul>
          <p className="mx-auto mt-6 max-w-xl text-lg text-mute">Partners, industry leaders and domain experts share practical insight on integrating AI into current workflows, scaling it across teams and measuring real business impact, with live Q&amp;A from our engineers.</p>
          <p className="mx-auto mt-6 max-w-xl text-lg text-mute">RSVP to receive dates and speaker announcements first.</p>
          <a href={`mailto:${company.email}?subject=RSVP%3A%20Upcoming%20events`} className="btn btn-solid mt-8">RSVP</a>
        </Reveal>
      </section>

      <section className="flex min-h-[100svh] flex-col justify-center py-10">
        <InsightsCarousel />
      </section>

      <RolesIndustries />

      <CTA />
    </>
  );
}
