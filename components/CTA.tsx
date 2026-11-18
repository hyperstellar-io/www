"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import CtaArt from "./CtaArt";

// Pinned full-screen panel. The footer slides up over it for the first 45% of the screen (picture drifts, copy lifts clear of the footer
// edge and stays readable), then the wrapper ends and panel and footer scroll away together so the footer is fully visible.
type Action = { href: string; label: string };
const REVEAL = 0.45; // share of the screen the footer covers before the panel is released

export default function CTA({ title = "Let's build what's next, together.", action, action2 }: { title?: string; action?: Action; action2?: Action }) {
  const i = title.lastIndexOf(" ") + 1;
  const still = useReducedMotion();
  const p = useMotionValue(0); // 0 = footer not yet visible, 1 = footer fully covers the panel
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer || still) return;
    const update = () => p.set(Math.min(1, Math.max(0, (innerHeight - footer.getBoundingClientRect().top) / innerHeight)));
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => { removeEventListener("scroll", update); removeEventListener("resize", update); };
  }, [p, still]);
  const bgY = useTransform(p, [0, REVEAL], ["0%", "-10%"]);
  const textY = useTransform(p, [0, REVEAL], ["0svh", "-12svh"]);
  return (
    <div style={{ height: `${100 + REVEAL * 100}svh`, marginBottom: `-${REVEAL * 100}svh` }}>
    <section className="sticky top-0 mx-2 mt-2 flex h-[100svh] items-center justify-center overflow-hidden rounded-[2rem] bg-[#b9b293] text-white sm:mx-3">
      <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[15%] h-[130%]"><CtaArt /></motion.div>
      <motion.div style={{ y: textY }} className="relative mx-auto max-w-3xl px-5 text-center">
        <h2 className="display !text-[clamp(2.4rem,5.5vw,4.6rem)]">{title.slice(0, i)}<em>{title.slice(i)}</em></h2>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {action ? <>{[action, action2].map((a) => a && <Link key={a.label} href={a.href} className="btn btn-liquid">{a.label}</Link>)}</> : <>
            <Link href="/demo" className="btn btn-liquid">Get a demo</Link>
            <Link href="/products" className="btn btn-liquid">Explore products</Link>
          </>}
        </div>
      </motion.div>
    </section>
    </div>
  );
}
