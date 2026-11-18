"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Desktop: heading and a live counter stay pinned while tall cards scroll past. Phones and tablets: swipeable rail.
export default function PressureStory({ id, title, items }: { id: string; title: React.ReactNode; items: [string, string][] }) {
  const [active, setActive] = useState(0);
  const still = useReducedMotion();
  const n = String(items.length).padStart(2, "0");
  return (
    <section id={id} className="scroll-mt-28 px-3 py-20 sm:px-8">
      <div className="lg:grid lg:grid-cols-[1fr_1.35fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="h2">{title}</h2>
          <p className="serif mt-8 hidden text-[clamp(5rem,12vw,10rem)] leading-none text-accent lg:block" aria-hidden="true">{String(active + 1).padStart(2, "0")}<span className="text-mute/50 text-[0.35em]"> / {n}</span></p>
        </div>
        <ul className="no-scrollbar -mx-3 mt-8 flex scroll-px-3 snap-x snap-mandatory gap-3 overflow-x-auto px-3 sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:mt-0 lg:block lg:space-y-4 lg:overflow-visible lg:px-0">
          {items.map(([t, b], i) => (
            <motion.li key={t} onViewportEnter={() => setActive(i)} viewport={{ margin: "-45% 0px -45% 0px" }}
              initial={still ? false : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="relative flex w-[82vw] max-w-md shrink-0 snap-start flex-col justify-end overflow-hidden rounded-[1.75rem] bg-panel p-8 sm:w-[60vw] lg:min-h-[55svh] lg:w-auto lg:max-w-none lg:p-10">
              <span className="serif pointer-events-none absolute right-6 top-2 text-[8rem] leading-none text-fg/[0.06] sm:text-[11rem]" aria-hidden="true">{i + 1}</span>
              <h3 className="serif relative text-3xl sm:text-4xl">{t}</h3>
              <p className="relative mt-4 max-w-xl text-lg text-mute">{b}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
