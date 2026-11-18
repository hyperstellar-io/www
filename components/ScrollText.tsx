"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

// A statement whose words light up one after another as you scroll through it.
function Word({ w, p, a, b }: { w: string; p: MotionValue<number>; a: number; b: number }) {
  const o = useTransform(p, [a, b], [0.18, 1]);
  return <motion.span style={{ opacity: o }} className="mr-[0.28em] inline-block motion-reduce:!opacity-100">{w}</motion.span>;
}
export default function ScrollText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => <Word key={i} w={w} p={scrollYProgress} a={i / words.length} b={Math.min(1, (i + 3) / words.length)} />)}
    </p>
  );
}
