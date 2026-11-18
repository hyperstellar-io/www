"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// From md: the section pins and scrolling down slides the cards sideways. Below md: a normal swipeable rail.
export default function ScrollRail({ id, title, children }: { id: string; title: React.ReactNode; children: React.ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLUListElement>(null);
  const still = useReducedMotion();
  const [wide, setWide] = useState(false);
  const [dist, setDist] = useState(0);
  useEffect(() => {
    const mq = matchMedia("(min-width: 768px)");
    const measure = () => { setWide(mq.matches); if (rail.current) setDist(Math.max(0, rail.current.scrollWidth - innerWidth + 24)); };
    measure();
    mq.addEventListener("change", measure);
    addEventListener("resize", measure);
    return () => { mq.removeEventListener("change", measure); removeEventListener("resize", measure); };
  }, []);
  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const pinned = wide && !still;
  return (
    <section id={id} className="scroll-mt-28">
      <div ref={wrap} style={pinned ? { height: `calc(100svh + ${dist}px)` } : undefined}>
        <div className={pinned ? "sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden py-10" : "py-20"}>
          <h2 className="h2 px-3 sm:px-8">{title}</h2>
          <motion.ul ref={rail} style={pinned ? { x } : undefined} className={`mt-8 flex gap-3 px-3 sm:px-8 ${pinned ? "w-max" : "no-scrollbar snap-x snap-mandatory overflow-x-auto"}`}>
            {children}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
