"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const still = useReducedMotion();
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#2a2f3a] text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero-bg.webp" alt="" width={2000} height={1125} fetchPriority="high" decoding="async" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55" />
      <div className="relative mx-auto max-w-5xl px-5 pt-24 text-center">
        <motion.h1 initial={still ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="display !text-[clamp(2.6rem,6vw,5.6rem)]">
          You bring the ambition.<br /><em>We engineer the rest.</em>
        </motion.h1>
        <motion.div initial={still ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-10 flex justify-center">
          <Link href="/solutions" className="btn btn-liquid">Explore solutions</Link>
        </motion.div>
      </div>
    </section>
  );
}
