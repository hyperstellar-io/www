"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export const Kbd = ({ children }: { children: ReactNode }) => <kbd className="lm-kbd">{children}</kbd>;

export const Illustrative = ({ label = "Illustrative" }: { label?: string }) => (
  <span className="rounded-full border border-[color:var(--lm-l3)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--lm-mute)]">{label}</span>
);

// Steps 0..n-1 on a timer while the element is on screen. Reduced motion: sits on `rest`.
export function useLoop(n: number, ms: number, rest = n - 1) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { margin: "-10% 0px" });
  const still = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (still || !seen) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), ms);
    return () => clearInterval(t);
  }, [seen, still, n, ms]);
  return { ref, i: still ? rest : i, seen };
}
