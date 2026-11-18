"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/content";

// Left-aligned heading with the arrows on the right, then square cards with a caption underneath.
// Vertical scroll drives the rail sideways: the section is tall, the content sticks, the cards slide.
export default function ProductCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLUListElement>(null);
  const still = useReducedMotion();
  const [dist, setDist] = useState(0); // how far the rail must travel to show the last card
  useEffect(() => {
    const measure = () => rail.current && setDist(Math.max(0, rail.current.scrollWidth - innerWidth));
    measure();
    addEventListener("resize", measure);
    return () => removeEventListener("resize", measure);
  }, []);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  // arrows nudge the page scroll by one card, which moves the rail
  const step = (dir: number) => scrollBy({ top: dir * (rail.current!.firstElementChild as HTMLElement).offsetWidth, behavior: "smooth" });
  const arrow = "btn btn-ghost size-11 justify-center !p-0 hover:!border-ion hover:!bg-ion hover:!text-on-ion";
  return (
    <div ref={track} style={still ? undefined : { height: `calc(100svh + ${dist}px)` }}>
      <div className={still ? "" : "sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden"}>
      <div className="flex w-full flex-wrap items-end justify-between gap-6 px-3 sm:px-8">
        <h2 className="h2">Explore the products <em>we&apos;ve built.</em></h2>
        <div className="flex gap-2">
          <button onClick={() => step(-1)} aria-label="Previous" className={arrow}>←</button>
          <button onClick={() => step(1)} aria-label="Next" className={arrow}>→</button>
        </div>
      </div>
      <motion.ul ref={rail} style={still ? undefined : { x }} className={`no-scrollbar mt-8 flex w-max gap-4 px-3 sm:px-8 ${still ? "!w-auto overflow-x-auto" : ""}`}>
        {products.map((p) => (
          <li key={p.slug} className="w-[85vw] max-w-[min(34rem,calc(100svh-19rem))] shrink-0">
            <Link href={`/products/${p.slug}`} className="group block">
              <div className="relative isolate flex aspect-square flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 text-white transition group-hover:-translate-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/product-${p.slug}.webp`} alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-20 size-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
                <span className="font-mono text-xs uppercase tracking-widest">{p.status}</span>
                <p className="serif text-6xl sm:text-8xl">{p.name}</p>
                <span className="absolute bottom-6 right-6 grid size-11 place-items-center rounded-full bg-white text-[#15140f] transition group-hover:rotate-45 group-hover:bg-ion group-hover:text-on-ion" aria-hidden="true">↗</span>
              </div>
              <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-widest text-mute">{p.category}</p>
              <h3 className="mt-3 text-lg leading-snug sm:text-xl">{p.tagline}</h3>
            </Link>
          </li>
        ))}
      </motion.ul>
      </div>
    </div>
  );
}
