"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Illustrative } from "./ui";

const Row = ({ children, on }: { children: ReactNode; on?: boolean }) => (
  <li className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${on ? "border-[color:var(--lm-blue)] bg-[color:var(--lm-blue)]/10 text-[color:var(--lm-fg)]" : "border-[color:var(--lm-l2)] bg-[color:var(--lm-p2)] text-[color:var(--lm-soft)]"}`}>{children}</li>
);

function Visual({ i }: { i: number }) {
  const body = [
    <ul key="0" className="space-y-2"><Row on>LUM-12 Fix redirect loop <span className="ml-auto text-xs text-[color:var(--lm-bt)]">in sprint</span></Row><Row on>LUM-15 Contrast pass <span className="ml-auto text-xs text-[color:var(--lm-bt)]">in sprint</span></Row><Row>LUM-30 Someday idea <span className="ml-auto text-xs text-[color:var(--lm-mute)]">backlog</span></Row><Row>LUM-33 Another idea <span className="ml-auto text-xs text-[color:var(--lm-mute)]">backlog</span></Row></ul>,
    <div key="1" className="grid grid-cols-3 gap-2 text-xs">{["To do", "Doing", "Done"].map((c, j) => <div key={c} className="rounded-lg bg-[color:var(--lm-p3)] p-2"><p className="mb-2 text-[color:var(--lm-mute)]">{c}</p>{Array.from({ length: 3 - j }).map((_, k) => <div key={k} className="mb-1.5 flex h-8 items-center rounded-md border border-[color:var(--lm-l2)] bg-[color:var(--lm-p4)] px-2 text-[10px] text-[color:var(--lm-mute)]">LUM-{10 + j * 3 + k}</div>)}</div>)}</div>,
    <div key="2"><svg viewBox="0 0 300 100" className="h-auto w-full" aria-hidden="true"><line x1="10" y1="10" x2="290" y2="90" stroke="var(--lm-l3)" strokeDasharray="4 5" /><polyline points="10,10 60,18 110,26 160,30 210,52 250,58" fill="none" stroke="var(--lm-blue)" strokeWidth="2.5" strokeLinecap="round" /></svg>
      <p className="mt-3 rounded-lg border border-[color:var(--lm-l2)] bg-[color:var(--lm-p2)] p-3 text-xs text-[color:var(--lm-soft)]">Optional sprint health: <span className="text-[color:var(--lm-fg)]">two tickets could move to the next sprint.</span> <span className="ml-1 rounded bg-[color:var(--lm-blue)] px-2 py-0.5 font-medium text-white">Apply</span></p></div>,
    <ul key="3" className="space-y-2"><Row on>Release 2.4 <span className="ml-auto text-xs text-[color:var(--lm-bt)]">5 tickets linked</span></Row><Row>No open blockers</Row><Row>Deployed to staging</Row><Row on>Deployment recorded</Row></ul>,
    <div key="4" className="space-y-2 text-sm"><p className="rounded-lg border border-[color:var(--lm-l2)] bg-[color:var(--lm-p2)] p-3 text-[color:var(--lm-soft)]">Closure summary: redirect loop fixed, cause noted, nothing else touched.</p><p className="flex items-center gap-1 rounded-lg border border-[color:var(--lm-l2)] bg-[color:var(--lm-p2)] p-3 text-[color:var(--lm-soft)]">Requester rating: {[1, 2, 3, 4, 5].map((n) => <span key={n} className={n <= 4 ? "text-[color:var(--lm-bt)]" : "text-[color:var(--lm-l3)]"}>★</span>)}</p><p className="rounded-lg border border-[color:var(--lm-l2)] bg-[color:var(--lm-p2)] p-3 text-xs text-[color:var(--lm-mute)]">Audit log: a lead completed Sprint 14.</p></div>,
  ][i];
  return (
    <div className="rounded-2xl border border-[color:var(--lm-l2)] bg-[color:var(--lm-p3)] p-4">
      <div className="mb-3 flex justify-end"><Illustrative /></div>
      {body}
    </div>
  );
}

export default function Story({ steps }: { steps: { k: string; t: string; d: string }[] }) {
  const [a, setA] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setA(Number((e.target as HTMLElement).dataset.i))), { rootMargin: "-45% 0px -45% 0px" });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-20">
      <ol className="space-y-12 lg:space-y-0">
        {steps.map((s, i) => (
          <li key={s.k} data-i={i} ref={(el) => { refs.current[i] = el; }} className={`lg:flex lg:min-h-[62svh] lg:items-center`}>
            <div className={`transition-opacity duration-500 ${a === i ? "lg:opacity-100" : "lg:opacity-35"}`}>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--lm-bt)]">{String(i + 1).padStart(2, "0")} / {s.k}</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{s.t}</h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-[color:var(--lm-mute)]">{s.d}</p>
              <div className="mt-6 lg:hidden"><Visual i={i} /></div>
            </div>
          </li>
        ))}
      </ol>
      <div className="hidden lg:block">
        <div className="sticky top-1/2 -translate-y-1/2">
          <AnimatePresence mode="wait"><motion.div key={a} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><Visual i={a} /></motion.div></AnimatePresence>
        </div>
      </div>
    </div>
  );
}
