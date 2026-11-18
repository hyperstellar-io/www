"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Sticky in-page navigation with scroll-spy, tucked under the header; a swipeable strip when it does not fit.
export default function SectionNav({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (vis) setActive(vis.target.id);
    }, { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.1, 0.5] });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);
  // keep the active tab visible in the swipeable strip (horizontal only, never the page)
  useEffect(() => {
    const nav = navRef.current, el = nav?.querySelector<HTMLElement>("[aria-current=true]");
    if (nav && el) nav.scrollTo({ left: el.offsetLeft - (nav.clientWidth - el.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);
  // xl+: shares the header row (centered between logo nav and buttons); smaller: tucked under it
  return (
    <div className="pointer-events-none sticky top-[4.9rem] z-40 -mt-7 flex justify-center px-3 sm:top-[5.4rem] sm:px-8 xl:top-5 xl:z-[60]">
      <nav ref={navRef} aria-label="On this page" className="glass no-scrollbar pointer-events-auto relative flex max-w-full gap-1 overflow-x-auto rounded-full p-1.5">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} aria-current={active === s.id} className="relative shrink-0 rounded-full px-4 py-3 text-sm transition hover:text-fg">
            {active === s.id && <motion.span layoutId="secnav" className="absolute inset-0 rounded-full bg-ion" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
            <span className={`relative ${active === s.id ? "text-on-ion" : "text-mute"}`}>{s.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
