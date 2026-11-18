"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Desktop: pick a workflow on the left, read it on a tinted stage on the right. Phones and tablets: accordion.
export default function UseCaseExplorer({ id, title, items, hue }: { id: string; title: React.ReactNode; items: [string, string][]; hue: number }) {
  const [a, setA] = useState(0);
  const still = useReducedMotion();
  return (
    <section id={id} className="scroll-mt-28 px-3 py-20 sm:px-8">
      <h2 className="h2">{title}</h2>
      <div className="mt-10 lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-10">
        <ul className="divide-y divide-line border-y border-line">
          {items.map(([t, b], i) => (
            <li key={t}>
              <button type="button" onClick={() => setA(i)} aria-expanded={a === i} className="group flex w-full items-center gap-5 py-5 text-left transition">
                <span className={`font-mono text-xs transition ${a === i ? "text-accent" : "text-mute"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className={`serif flex-1 text-2xl transition sm:text-3xl ${a === i ? "text-fg lg:translate-x-2" : "text-mute group-hover:text-fg"}`}>{t}</span>
                <span aria-hidden="true" className={`grid size-9 place-items-center rounded-full border border-line text-lg transition lg:hidden ${a === i ? "rotate-45 bg-ion text-on-ion" : ""}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {a === i && (
                  <motion.p key="b" initial={still ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-9 text-lg text-mute lg:hidden">
                    <span className="block pb-6">{b}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
        <div className="relative hidden min-h-[28rem] overflow-hidden rounded-[1.75rem] p-10 text-white lg:sticky lg:top-32 lg:block lg:self-start" style={{ background: `linear-gradient(135deg, hsl(${hue} 50% 16%), hsl(${hue + 40} 55% 34%))` }}>
          <AnimatePresence mode="wait">
            <motion.div key={a} initial={still ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }} className="flex h-full min-h-[24rem] flex-col justify-between">
              <span className="serif text-[10rem] leading-none text-white/15" aria-hidden="true">{String(a + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="serif text-4xl">{items[a][0]}</h3>
                <p className="mt-4 max-w-lg text-lg text-white/85">{items[a][1]}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
