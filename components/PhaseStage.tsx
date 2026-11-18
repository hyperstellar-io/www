"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

export type PhaseData = { name: string; duration: string; summary: string; activities: string[]; outputs: string[]; color: string };

function Body({ p }: { p: PhaseData }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl bg-black/15 p-5 xl:p-6"><p className="font-mono text-[0.65rem] uppercase tracking-widest text-white/70">What we do</p><ul className="mt-3 space-y-2.5 text-white/90">{p.activities.map((x) => <li key={x} className="flex gap-2"><span aria-hidden="true">·</span>{x}</li>)}</ul></div>
      <div className="rounded-2xl bg-black/15 p-5 xl:p-6"><p className="font-mono text-[0.65rem] uppercase tracking-widest text-white/70">What you receive</p><ul className="mt-3 space-y-2.5">{p.outputs.map((x) => <li key={x} className="flex gap-2"><span aria-hidden="true">✓</span>{x}</li>)}</ul></div>
    </div>
  );
}

// lg: pinned stage that switches phase as you scroll (like the home page). Below lg: cards that stack as you scroll.
export default function PhaseStage({ id, title, phases }: { id: string; title: React.ReactNode; phases: PhaseData[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [a, setA] = useState(0);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setA(Math.min(phases.length - 1, Math.floor(v * phases.length))));
  const p = phases[a];
  return (
    <section id={id} className="scroll-mt-28">
      <div ref={ref} className="hidden lg:block" style={{ height: still ? "auto" : `${phases.length * 90}svh` }}>
        <div className={`${still ? "" : "sticky top-0 h-[100svh]"} flex flex-col px-8 pb-10 pt-28`}>
          <h2 className="h2">{title}</h2>
          <div className="mt-8 grid min-h-0 flex-1 grid-cols-[minmax(0,0.7fr)_minmax(0,1.5fr)] gap-10 xl:gap-16">
            <ol className="relative flex flex-col justify-between border-l border-line pl-8">
              <span aria-hidden="true" className="absolute -left-px top-0 w-px origin-top bg-accent transition-all duration-500" style={{ height: `${((a + 1) / phases.length) * 100}%` }} />
              {phases.map((x, i) => (
                <li key={x.name}>
                  <button type="button" onClick={() => setA(i)} className={`w-full text-left transition ${a === i ? "text-fg" : "text-mute/50 hover:text-mute"}`}>
                    <span className="font-mono text-xs tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                    <span className={`serif block text-5xl xl:text-6xl ${a === i ? "italic" : ""}`}>{x.name}</span>
                    <span className="mt-1 block font-mono text-xs tracking-widest">{x.duration}</span>
                  </button>
                </li>
              ))}
            </ol>
            <AnimatePresence mode="wait">
              <motion.div key={a} initial={still ? false : { opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }} className={`relative flex flex-col justify-between gap-8 overflow-hidden rounded-[1.75rem] p-10 text-white ${p.color}`}>
                <span aria-hidden="true" className="serif pointer-events-none absolute -right-2 -top-6 text-[11rem] italic leading-none text-white/10">{String(a + 1).padStart(2, "0")}</span>
                <p className="relative max-w-3xl text-3xl leading-snug">{p.summary}</p>
                <div className="relative"><Body p={p} /></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="px-3 py-20 sm:px-8 lg:hidden">
        <h2 className="h2">{title}</h2>
        <ol className="mt-8 space-y-6 pb-[20svh]">
          {phases.map((x, i) => (
            <li key={x.name} style={{ top: `${8.5 + i * 3.5}rem` }} className={`sticky rounded-[1.75rem] p-7 text-white shadow-[0_-8px_24px_rgba(0,0,0,.15)] sm:p-9 ${x.color}`}>
              <div className="flex items-baseline justify-between gap-3"><p className="serif text-3xl italic">{x.name}</p><span className="rounded-full border border-white/40 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest">{x.duration}</span></div>
              <p className="mt-4 text-white/90">{x.summary}</p>
              <div className="mt-6"><Body p={x} /></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
