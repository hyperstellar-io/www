"use client";
import { LayoutGroup, motion } from "framer-motion";
import { Illustrative, Kbd, useLoop } from "./ui";

const cards = [
  { k: "LUM-12", t: "Fix redirect loop after sign-in", tag: "Bug" },
  { k: "LUM-14", t: "Draft the release notes", tag: "Chore" },
  { k: "LUM-15", t: "Contrast pass on dark theme", tag: "Task" },
  { k: "LUM-18", t: "Import the old spreadsheet", tag: "Task" },
  { k: "LUM-21", t: "Rate limit the CSV export", tag: "Story" },
  { k: "LUM-9", t: "Reword the invite email", tag: "Chore" },
];
// column of each card at every step; the card that just moved is highlighted
const start = [0, 0, 0, 1, 1, 2];
const moves: [number, number][] = [[3, 2], [0, 1], [4, 2], [1, 1], [0, 2], [2, 1]];
const states = moves.reduce<number[][]>((a, [c, to]) => [...a, a[a.length - 1].map((v, j) => (j === c ? to : v))], [start]);
const cols = ["To do", "Doing", "Done"];

export default function Board() {
  const { ref, i } = useLoop(states.length + 1, 2200, 3);
  const cur = states[Math.min(i, states.length - 1)];
  const moved = i > 0 && i < states.length ? moves[i - 1][0] : -1;
  const done = cur.filter((c) => c === 2).length;
  return (
    <div ref={ref} className={`lm-win relative overflow-hidden rounded-2xl sm:rounded-3xl`} role="img" aria-label="Illustrative board with sample tickets moving from To do to Doing to Done">
      <div className="flex items-center gap-3 border-b border-[color:var(--lm-l1)] px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">{[0, 1, 2].map((d) => <span key={d} className="size-2.5 rounded-full bg-[color:var(--lm-l2)]" />)}</span>
        <span className="truncate font-mono text-xs text-[color:var(--lm-mute)]">Sprint 14 / Board</span>
        <span className="ml-auto flex items-center gap-2"><span className="hidden items-center gap-1 sm:flex" aria-hidden="true"><Kbd>C</Kbd><span className="text-[11px] text-[color:var(--lm-mute)]">new</span></span><Illustrative /></span>
      </div>
      <LayoutGroup>
        <div className="grid grid-cols-3 gap-1.5 p-2 sm:gap-3 sm:p-4" aria-hidden="true">
          {cols.map((name, c) => (
            <div key={name} className="min-h-[15rem] rounded-xl bg-[color:var(--lm-p3)]/80 p-1.5 sm:min-h-[22rem] sm:p-2.5">
              <div className="mb-2 flex items-center justify-between px-1 text-[11px] font-medium text-[color:var(--lm-mute)] sm:text-xs">
                <span className="flex items-center gap-1.5"><span className={`size-1.5 rounded-full ${c === 2 ? "bg-[color:var(--lm-blue)]" : c === 1 ? "border border-[color:var(--lm-bt)]" : "bg-[color:var(--lm-l3)]"}`} />{name}</span>
                <span className="font-mono">{cur.filter((v) => v === c).length}</span>
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2.5">
                {cards.map((card, j) => cur[j] === c && (
                  <motion.div key={card.k} layout layoutId={card.k} transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    className={`rounded-lg border bg-[color:var(--lm-p4)] p-2 sm:rounded-xl sm:p-3 ${moved === j ? "border-[color:var(--lm-blue)] shadow-[0_0_0_3px_rgba(61,123,255,.18),0_10px_30px_-8px_rgba(61,123,255,.5)]" : "border-[color:var(--lm-l2)]"}`}>
                    <p className="hidden font-mono text-[10px] text-[color:var(--lm-mute)] sm:block">{card.k}</p>
                    <p className={`text-[11px] leading-snug sm:mt-1 sm:text-[13px] ${c === 2 ? "text-[color:var(--lm-mute)] line-through decoration-[color:var(--lm-blue)]/70" : "text-[color:var(--lm-fg)]"}`}>{card.t}</p>
                    <p className="mt-2 hidden items-center gap-2 sm:flex"><span className="rounded bg-[color:var(--lm-l1)] px-1.5 py-0.5 text-[10px] text-[color:var(--lm-mute)]">{card.tag}</span><span className="ml-auto size-4 rounded-full bg-gradient-to-br from-[color:var(--lm-blue)] to-[color:var(--lm-l1)]" /></p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </LayoutGroup>
      <div className="flex items-center gap-3 border-t border-[color:var(--lm-l1)] px-4 py-3 text-xs text-[color:var(--lm-mute)]">
        <span className="font-mono">{done}/6 done</span>
        <span className="h-1 flex-1 overflow-hidden rounded-full bg-[color:var(--lm-l1)]"><span className="block h-full rounded-full bg-[color:var(--lm-blue)] transition-all duration-700" style={{ width: `${(done / 6) * 100}%` }} /></span>
        <span className="hidden sm:inline">Sample tickets, not real data</span>
      </div>
    </div>
  );
}
