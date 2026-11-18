"use client";
import { useEffect, useState } from "react";

// First-load screen: covers the page (it is in the server HTML, so nothing unstyled flashes) until fonts and
// resources are ready, then fades out. A thin centred line fills 0 to 100. Client-side navigation never shows it again.
export default function Loader() {
  const [pct, setPct] = useState(0);
  const [fade, setFade] = useState(false);
  const [gone, setGone] = useState(false);
  useEffect(() => {
    let p = 0;
    let finished = false;
    const set = (v: number) => { if (v > p) { p = v; setPct(Math.round(v)); } };
    // Creep towards 90 so the bar always moves; real readiness jumps it to 100.
    const creep = setInterval(() => !finished && set(p + (90 - p) * 0.08), 90);
    const finish = () => {
      if (finished) return;
      finished = true;
      clearInterval(creep);
      set(100);
      setTimeout(() => setFade(true), 300);
      setTimeout(() => setGone(true), 800);
    };
    const loaded = new Promise<void>((r) => (document.readyState === "complete" ? r() : addEventListener("load", () => r(), { once: true })));
    Promise.all([loaded, document.fonts?.ready]).then(finish);
    const safety = setTimeout(finish, 10000); // never trap the page behind the loader
    return () => { clearInterval(creep); clearTimeout(safety); };
  }, []);
  if (gone) return null;
  return (
    <div id="loader" role="progressbar" aria-label="Loading" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}
      className={`fixed inset-0 z-[300] grid place-items-center bg-ink transition-opacity duration-500 motion-reduce:transition-none ${fade ? "pointer-events-none opacity-0" : "opacity-100"}`}>
      <div className="w-[min(20rem,60vw)]">
        <p className="mb-3 text-center font-mono text-sm tabular-nums tracking-widest text-mute">{pct}%</p>
        <div className="h-0.5 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-fg transition-[width] duration-200 ease-out motion-reduce:transition-none" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
