"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export type Flow = { name: string; body: string; list: string[]; listLabel: string; color: string };

// Three stages connected by a line that fills as you scroll. Horizontal from lg, vertical on smaller screens.
export default function FlowTimeline({ id, title, steps }: { id: string; title: React.ReactNode; steps: Flow[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section id={id} className="scroll-mt-28 px-3 py-20 sm:px-8">
      <h2 className="h2">{title}</h2>
      <ol ref={ref} className="relative mt-12 grid gap-10 pl-10 lg:grid-cols-3 lg:gap-6 lg:pl-0 lg:pt-14">
        <span className="absolute bottom-2 left-3 top-2 w-px bg-line lg:bottom-auto lg:left-0 lg:right-[calc((100%-3rem)/3)] lg:top-[1.1rem] lg:h-px lg:w-auto" aria-hidden="true" />
        <motion.span style={{ scaleY: still ? 1 : fill }} className="absolute bottom-2 left-3 top-2 w-px origin-top bg-ion lg:hidden" aria-hidden="true" />
        <motion.span style={{ scaleX: still ? 1 : fill }} className="absolute left-0 right-[calc((100%-3rem)/3)] top-[1.1rem] hidden h-px origin-left bg-ion lg:block" aria-hidden="true" />
        {steps.map((s, i) => (
          <motion.li key={s.name} initial={still ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.12, duration: 0.6 }} className="relative">
            <span className="absolute -left-[2.45rem] top-1 grid size-6 place-items-center rounded-full bg-ion font-mono text-[0.7rem] text-on-ion lg:-top-[3.15rem] lg:left-0" aria-hidden="true">{i + 1}</span>
            <div className={`h-full rounded-[1.75rem] p-8 text-white ${s.color}`}>
              <p className="serif text-3xl italic">{s.name}</p>
              <p className="mt-4 text-white/90">{s.body}</p>
              <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-widest text-white/70">{s.listLabel}</p>
              <ul className="mt-2 space-y-1.5 text-sm">{s.list.map((c) => <li key={c} className="flex gap-2"><span aria-hidden="true">·</span>{c}</li>)}</ul>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
