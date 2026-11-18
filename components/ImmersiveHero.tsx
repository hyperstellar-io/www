"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import PageArt from "./PageArt";
import type { Motif } from "@/lib/pagetheme";

// Full-screen page opener: animated art that drifts slower than the page, headline that rises word by word.
export default function ImmersiveHero({ id, hue, motif, eyebrow, title, accent, sub, children }: {
  id: string; hue: number; motif: Motif; eyebrow: string; title: string; accent: string; sub: string; children?: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", still ? "0%" : "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", still ? "0%" : "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, still ? 1 : 0]);
  const words = [...title.split(" ").map((w) => [w, false] as const), ...accent.split(" ").map((w) => [w, true] as const)];
  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#0d0f16] text-white">
      <motion.div style={{ y: artY }} className="absolute inset-x-0 -top-[10%] -z-10 h-[120%]"><PageArt hue={hue} motif={motif} id={id} /></motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-transparent to-black/30" aria-hidden="true" />
      <motion.div style={{ y: textY, opacity: fade }} className="w-full px-3 pb-14 pt-40 sm:px-8 sm:pb-20 lg:pb-24">
        <motion.p initial={still ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="eyebrow !text-white/80">{eyebrow}</motion.p>
        <h1 className="display mt-5 max-w-6xl !text-[clamp(2.8rem,8.4vw,8rem)]" aria-label={`${title} ${accent}`}>
          {words.map(([w, em], i) => (
            <span key={i} className="mr-[0.22em] inline-block overflow-hidden align-bottom" aria-hidden="true">
              <motion.span initial={still ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ delay: 0.15 + i * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className={`inline-block ${em ? "italic" : ""}`}>{w}</motion.span>
            </span>
          ))}
        </h1>
        <motion.p initial={still ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.7 }} className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">{sub}</motion.p>
        <motion.div initial={still ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} className="mt-8 flex flex-wrap items-center gap-3">{children}</motion.div>
        <div className="mt-12 hidden items-center gap-3 font-mono text-[0.65rem] uppercase tracking-widest text-white/60 sm:flex" aria-hidden="true">
          <span className="relative h-10 w-px overflow-hidden bg-white/25"><i className="absolute inset-x-0 top-0 h-1/2 bg-white" style={{ animation: "dash 2.2s ease-in-out infinite", strokeDasharray: "none" }} /></span>Scroll
        </div>
      </motion.div>
    </section>
  );
}
