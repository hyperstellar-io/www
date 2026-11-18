"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { stages } from "@/lib/content";
import { mocks } from "./Mocks";

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(stages.length - 1, Math.floor(v * stages.length))));
  const Mock = mocks[active];
  return (
    <>
      {/* Desktop: pinned split screen driven by scroll */}
      <div ref={ref} className="relative hidden h-[270vh] md:block">
        <div className="sticky top-0 grid h-screen grid-cols-2 items-center gap-10 px-6 lg:px-12">
          <div className="relative h-[78vh] overflow-hidden rounded-[2rem]">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className={`absolute inset-0 grid place-items-center ${stages[active].color}`}>
                <p className="serif absolute left-8 top-8 text-3xl italic text-white/90">{stages[active].key}</p>
                <div className="w-[78%] max-w-md"><Mock /></div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="max-w-xl">
            <div className="serif flex flex-wrap gap-x-5 gap-y-1 text-3xl lg:text-4xl xl:text-5xl xl:gap-x-7">
              {stages.map((s, i) => (
                <span key={s.key} className={`transition-colors duration-300 ${i === active ? "italic text-fg" : "text-mute/60"}`}>{i === active && <span className="mr-2 align-middle text-2xl">•</span>}{s.key}</span>
              ))}
            </div>
            <p className="mt-6 text-lg text-mute">{stages[active].line}</p>
            <Link href={stages[active].href} className="btn btn-ghost mt-8">Explore {stages[active].key}</Link>
          </div>
        </div>
      </div>
      {/* Mobile: cards pin and stack on top of each other as you scroll; the last one releases the page */}
      <div className="space-y-6 px-3 pb-6 md:hidden">
        {stages.map((s, i) => {
          const M = mocks[i];
          return (
            <div key={s.key} style={{ top: `${5.5 + i * 3.75}rem` }} className={`sticky flex min-h-[40rem] flex-col justify-between gap-6 rounded-[2rem] p-5 shadow-[0_-8px_24px_rgba(0,0,0,.15)] ${s.color}`}>
              <div>
                <p className="serif text-3xl italic text-white">{s.key}</p>
                <p className="mt-2 text-sm text-white">{s.line}</p>
              </div>
              <M />
              <div><Link href={s.href} className="btn btn-hero">Explore {s.key}</Link></div>
            </div>
          );
        })}
        {/* keeps the stack pinned for a beat after the last card lands (padding wouldn't extend the sticky range) */}
        <div aria-hidden="true" className="h-[40svh]" />
      </div>
    </>
  );
}
