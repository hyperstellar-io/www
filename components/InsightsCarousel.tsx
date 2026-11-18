"use client";
import { useRef } from "react";
import Link from "next/link";
import { posts } from "@/lib/blogs";
import InsightArt from "./InsightArt";

export default function InsightsCarousel() {
  const rail = useRef<HTMLUListElement>(null);
  const step = (dir: number) => rail.current?.scrollBy({ left: dir * (rail.current.firstElementChild as HTMLElement).offsetWidth, behavior: "smooth" });
  const arrow = "btn btn-ghost size-11 justify-center !p-0 hover:!border-ion hover:!bg-ion hover:!text-on-ion";
  return (
    <>
      <div className="flex w-full flex-wrap items-end justify-between gap-6 px-3 sm:px-8">
        <h2 className="h2">Discover our <em>insights.</em></h2>
        <div className="flex gap-2">
          <button onClick={() => step(-1)} aria-label="Previous" className={arrow}>←</button>
          <button onClick={() => step(1)} aria-label="Next" className={arrow}>→</button>
        </div>
      </div>
      <ul ref={rail} className="no-scrollbar mt-8 flex scroll-pl-3 snap-x snap-mandatory gap-4 overflow-x-auto px-3 sm:scroll-pl-8 sm:px-8">
        {posts.slice(0, 6).map((a, i) => (
          <li key={a.slug} className="w-[85vw] max-w-[min(34rem,52svh)] shrink-0 snap-start">
            <Link href={`/insights/${a.slug}`} className="group block">
              <div className="relative isolate flex aspect-square flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 text-white transition group-hover:-translate-y-1">
                <InsightArt index={i} />
                <span className="w-fit rounded-full bg-white/90 px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-[#15140f]">{a.tag}</span>
                <p className="serif text-3xl leading-tight sm:text-5xl">{a.title}</p>
                <span className="absolute right-6 top-5 grid size-11 place-items-center rounded-full bg-white text-[#15140f] transition group-hover:rotate-45 group-hover:bg-ion group-hover:text-on-ion" aria-hidden="true">↗</span>
              </div>
              <p className="mt-5 hidden text-mute sm:block">{a.dek}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
