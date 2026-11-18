import type { Metadata } from "next";
import CTA from "@/components/CTA";
import Values from "@/components/Values";

export const metadata: Metadata = { title: "About us", description: "Our story, mission, vision and values." };

const aim = [
  ["Mission", "To close the gap between enterprise ambition and technology reality, delivering AI-first solutions that are fast, honest, and built to last."],
  ["Vision", "A world where every organisation, regardless of size or geography, has access to intelligent technology that works for the people using it."],
];

export default function Company() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#2a2f3a] px-3 pt-24 text-white sm:px-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/event-bg.webp" alt="" fetchPriority="high" decoding="async" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/65" />
        <div className="relative text-center">
          <p className="eyebrow !text-white/80">About us · Since 2017</p>
          <h1 className="display mt-5">Ambition, <em>engineered.</em></h1>
        </div>
      </section>
      <section className="bg-panel">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2">
          {aim.map(([k, v]) => <div key={k}><p className="eyebrow">{k}</p><p className="serif mt-4 text-3xl leading-snug">{v}</p></div>)}
        </div>
      </section>
      <div className="border-t border-line pt-20"><Values /></div>
      <CTA title="Come build with us." action={{ href: "/work-with-us", label: "Work with us" }} />
    </>
  );
}
