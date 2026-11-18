"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Illustrative, Kbd, useLoop } from "./ui";

function Tile({ className = "", kicker, title, text, children }: { className?: string; kicker: string; title: string; text: string; children: ReactNode }) {
  return (
    <div className={`lm-tile flex flex-col overflow-hidden rounded-3xl p-5 sm:p-6 ${className}`}>
      <div className="mb-5 flex-1 rounded-2xl border border-[color:var(--lm-l1)] bg-[color:var(--lm-p3)] p-4">{children}</div>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--lm-bt)]">{kicker}</p>
      <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-[color:var(--lm-fg)]">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--lm-mute)]">{text}</p>
    </div>
  );
}

function Burndown() {
  const [n, setN] = useState(0);
  const ref = useRef<SVGSVGElement>(null);
  const seen = useInView(ref, { once: true, margin: "-10% 0px" });
  const still = useReducedMotion();
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs text-[color:var(--lm-mute)]"><span className="font-mono">Sprint 14 burndown</span><span className="flex items-center gap-2"><Illustrative /><button onClick={() => setN(n + 1)} className="rounded-md border border-[color:var(--lm-l3)] px-2.5 py-1 hover:text-[color:var(--lm-fg)]">Replay</button></span></div>
      <svg ref={ref} viewBox="0 0 400 170" className="h-auto w-full" role="img" aria-label="Illustrative burndown chart: remaining work falling toward the ideal line">
        {[30, 70, 110, 150].map((y) => <line key={y} x1="24" x2="388" y1={y} y2={y} stroke="var(--lm-l1)" />)}
        <line x1="24" y1="30" x2="388" y2="150" stroke="var(--lm-l3)" strokeDasharray="4 5" />
        <text x="26" y="22" fontSize="9" fill="var(--lm-mute)">Ideal</text>
        {seen && <motion.polyline key={n} points="24,30 62,40 100,52 138,56 176,78 214,84 252,104 290,108 328,126 366,132" fill="none" stroke="var(--lm-blue)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: still ? 1 : 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.4, ease: "easeInOut" }} />}
        {seen && <motion.circle key={`d${n}`} cx="366" cy="132" r="5" fill="var(--lm-bt)" initial={{ opacity: still ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ delay: still ? 0 : 2.3 }} />}
        <text x="24" y="166" fontSize="9" fill="var(--lm-mute)">Day 1</text><text x="388" y="166" fontSize="9" fill="var(--lm-mute)" textAnchor="end">Day 10</text>
      </svg>
    </div>
  );
}

function Suggest() {
  const [state, setState] = useState<"ask" | "done" | "no">("ask");
  useEffect(() => {
    if (state === "ask") return;
    const t = setTimeout(() => setState("ask"), 3200);
    return () => clearTimeout(t);
  }, [state]);
  const ok = state === "done";
  return (
    <div>
      <div className="mb-3 flex items-center justify-between"><span className="font-mono text-xs text-[color:var(--lm-mute)]">LUM-31</span><Illustrative /></div>
      <p className="text-sm text-[color:var(--lm-fg)]">Checkout page flickers on resize</p>
      <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
        {[["Type", "Bug"], ["Priority", "High"], ["Team", "Web"]].map(([k, v]) => (
          <span key={k} className={`rounded-md border px-2 py-1 transition ${ok ? "border-[color:var(--lm-blue)] bg-[color:var(--lm-blue)]/15 text-[color:var(--lm-cf)]" : "border-dashed border-[color:var(--lm-l3)] text-[color:var(--lm-mute)]"}`}>{k}: {ok ? v : "?"}</span>
        ))}
      </div>
      <div className="mt-4 min-h-[4.5rem] rounded-xl border border-[color:var(--lm-l2)] bg-[color:var(--lm-p2)] p-3 text-xs" aria-live="polite">
        {state === "ask" ? (<>
          <p className="text-[color:var(--lm-mute)]">Optional AI suggests: <span className="text-[color:var(--lm-fg)]">Bug, High, Web team</span></p>
          <div className="mt-2.5 flex gap-2">
            <button onClick={() => setState("done")} className={`lm-ping inline-flex items-center gap-2 rounded-lg bg-[color:var(--lm-blue)] px-3 py-1.5 font-medium text-white hover:bg-[color:var(--lm-bh)]`}>Accept <Kbd>Enter</Kbd></button>
            <button onClick={() => setState("no")} className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--lm-l3)] px-3 py-1.5 text-[color:var(--lm-mute)] hover:text-[color:var(--lm-fg)]">Dismiss <Kbd>Esc</Kbd></button>
          </div>
        </>) : <p className="text-[color:var(--lm-cf)]">{ok ? "Applied by you. Nothing changes until a person says so." : "Dismissed. The ticket is exactly as you left it."}</p>}
      </div>
    </div>
  );
}

function Email() {
  const { ref, i } = useLoop(5, 1500, 3);
  const mail = i < 2;
  return (
    <div ref={ref} className="min-h-[11.5rem]">
      <div className="mb-3 flex items-center justify-between font-mono text-xs text-[color:var(--lm-mute)]"><span>{mail ? "Inbox" : "Board"}</span><Illustrative /></div>
      <AnimatePresence mode="wait" initial={false}>
        {mail ? (
          <motion.div key="m" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: 40, scale: 0.9 }} className="rounded-xl border border-[color:var(--lm-l2)] bg-[color:var(--lm-p2)] p-3 text-xs">
            <p className="text-[color:var(--lm-mute)]">From: a colleague</p>
            <p className="mt-1 font-medium text-[color:var(--lm-fg)]">Re: second-floor printer is down</p>
            <p className="mt-1.5 leading-relaxed text-[color:var(--lm-mute)]">Hi, it shows an error and nobody can print before the meeting...</p>
          </motion.div>
        ) : (
          <motion.div key="t" initial={{ opacity: 0, x: -40, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0 }} className="rounded-xl border border-[color:var(--lm-blue)] bg-[color:var(--lm-p4)] p-3 text-xs shadow-[0_10px_30px_-10px_rgba(61,123,255,.5)]">
            <p className="font-mono text-[color:var(--lm-mute)]">LUM-42 <span className="ml-1 rounded bg-[color:var(--lm-blue)]/20 px-1.5 py-0.5 text-[color:var(--lm-cf)]">from email</span></p>
            <p className="mt-1 font-medium text-[color:var(--lm-fg)]">Second-floor printer is down</p>
            <p className="mt-2 text-[color:var(--lm-mute)]">Reply with <span className="font-mono text-[color:var(--lm-bt)]">LUM-42</span> and it lands on the ticket.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const steps = ["Every ticket is Done", "Release notes written", "No open blockers", "Deployed to staging", "Deployment recorded"];
function Release() {
  const { ref, i } = useLoop(7, 900, 6);
  const k = Math.min(i, 5);
  return (
    <div ref={ref}>
      <div className="mb-3 flex items-center justify-between font-mono text-xs text-[color:var(--lm-mute)]"><span>Release 2.4</span><Illustrative /></div>
      <ul className="space-y-2">
        {steps.map((t, j) => (
          <li key={t} className="flex items-center gap-2.5 text-sm">
            <span className={`grid size-4 place-items-center rounded border transition ${j < k ? "border-[color:var(--lm-blue)] bg-[color:var(--lm-blue)]" : "border-[color:var(--lm-l3)]"}`} aria-hidden="true">{j < k && <svg viewBox="0 0 12 12" className="size-2.5" fill="none" stroke="#fff" strokeWidth="2"><path d="M2 6.5l2.5 2.5L10 3" /></svg>}</span>
            <span className={j < k ? "text-[color:var(--lm-mute)] line-through decoration-[color:var(--lm-blue)]/60" : "text-[color:var(--lm-fg)]"}>{t}</span>
          </li>
        ))}
      </ul>
      <p className={`mt-3 text-xs transition ${k === 5 ? "text-[color:var(--lm-bt)]" : "text-[color:var(--lm-mute)]"}`}>{k === 5 ? "Ready to ship." : `${k} of 5 ticked`}</p>
    </div>
  );
}

function Rule() {
  const [on, setOn] = useState(true);
  const touched = useRef(false);
  const { ref, seen } = useLoop(1, 1000);
  const still = useReducedMotion();
  useEffect(() => {
    if (!seen || still) return;
    const t = setInterval(() => { if (!touched.current) setOn((v) => !v); }, 3000);
    return () => clearInterval(t);
  }, [seen, still]);
  return (
    <div ref={ref}>
      <div className="mb-3 flex items-center justify-between font-mono text-xs text-[color:var(--lm-mute)]"><span>Automation recipe</span><Illustrative /></div>
      <div className="flex items-center justify-between gap-3 rounded-xl border border-[color:var(--lm-l2)] bg-[color:var(--lm-p2)] p-3">
        <p className="text-sm text-[color:var(--lm-fg)]">When the checklist is complete, move the ticket to Done</p>
        <button role="switch" aria-checked={on} aria-label="Toggle sample rule" onClick={() => { touched.current = true; setOn(!on); }} className={`relative h-6 w-11 shrink-0 rounded-full transition ${on ? "bg-[color:var(--lm-blue)]" : "bg-[color:var(--lm-l2)]"}`}>
          <span className={`absolute top-0.5 size-5 rounded-full bg-white transition-all ${on ? "left-[1.35rem]" : "left-0.5"}`} />
        </button>
      </div>
      <div className="mt-3 rounded-xl border border-[color:var(--lm-l2)] bg-[color:var(--lm-p4)] p-3 text-xs">
        <div className="flex items-center justify-between"><span className="font-mono text-[color:var(--lm-mute)]">LUM-27</span><span className={`rounded px-1.5 py-0.5 transition ${on ? "bg-[color:var(--lm-blue)]/20 text-[color:var(--lm-cf)]" : "bg-[color:var(--lm-l1)] text-[color:var(--lm-mute)]"}`}>{on ? "Done" : "Doing"}</span></div>
        <p className="mt-1 text-[color:var(--lm-fg)]">Ship the invite flow</p>
        <p className="mt-1 text-[color:var(--lm-mute)]">Checklist 4/4 {on ? "· moved by the rule" : "· rule is off, so it waits for you"}</p>
      </div>
    </div>
  );
}

function Epics() {
  const rows: [string, number, number][] = [["Referral programme", 4, 52], ["Reporting clean-up", 22, 40], ["Mobile layout pass", 46, 44], ["Admin settings", 12, 30]];
  return (
    <div>
      <div className="mb-3 flex items-center justify-between font-mono text-xs text-[color:var(--lm-mute)]"><span>Epic timeline</span><Illustrative /></div>
      <div className="relative space-y-2.5">
        <span className="absolute inset-y-0 left-[42%] w-px bg-[color:var(--lm-blue)]/60" aria-hidden="true" />
        {rows.map(([n, l, w], j) => (
          <div key={n} className="relative h-7 rounded-md bg-[color:var(--lm-p2)]">
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8, delay: j * 0.12 }} style={{ left: `${l}%`, width: `${w}%`, originX: 0 }}
              className="absolute inset-y-0 flex items-center rounded-md bg-gradient-to-r from-[color:var(--lm-bd)] to-[color:var(--lm-blue)] px-2 text-[11px] font-medium text-white"><span className="truncate">{n}</span></motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

const log = ["A lead moved LUM-21 to the next sprint", "A member changed LUM-9 priority", "An admin created an access key", "An admin set the session timeout", "A lead started Sprint 15", "A member linked LUM-12 to LUM-15", "An admin invited a teammate"];
function Audit() {
  const { ref, i } = useLoop(log.length, 1800, 3);
  const rows = [0, 1, 2, 3].map((j) => (i + j) % log.length);
  return (
    <div ref={ref}>
      <div className="mb-3 flex items-center justify-between font-mono text-xs text-[color:var(--lm-mute)]"><span>Audit log</span><Illustrative /></div>
      <ul className="space-y-1.5">
        <AnimatePresence initial={false}>
          {rows.map((r, j) => (
            <motion.li key={r} layout initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1 - j * 0.18, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 rounded-lg bg-[color:var(--lm-p2)] px-3 py-2 text-xs text-[color:var(--lm-fg)]">
              <span className="size-1.5 rounded-full bg-[color:var(--lm-blue)]" aria-hidden="true" />{log[r]}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

const cmds = ["Create ticket", "Go to board", "Start sprint", "Open my work", "Open release"];
const queries = ["", "s", "sp", "rel", ""];
function Palette() {
  const { ref, i } = useLoop(queries.length, 1400, 0);
  const q = queries[i];
  const hits = cmds.filter((c) => c.toLowerCase().includes(q));
  return (
    <div ref={ref}>
      <div className="mb-3 flex items-center justify-between font-mono text-xs text-[color:var(--lm-mute)]"><span className="flex items-center gap-1.5">Command palette <Kbd>Cmd</Kbd><Kbd>K</Kbd></span><Illustrative label="Sample keys" /></div>
      <div className="rounded-xl border border-[color:var(--lm-l2)] bg-[color:var(--lm-p2)] p-2 text-sm">
        <p className="px-2 py-1.5 text-[color:var(--lm-fg)]">{q || <span className="text-[color:var(--lm-mute)]">Type a command</span>}<span className={`lm-caret text-[color:var(--lm-blue)]`}>|</span></p>
        <ul className="mt-1 space-y-0.5">
          {hits.slice(0, 3).map((c, j) => <li key={c} className={`rounded-md px-2 py-1.5 ${j === 0 ? "bg-[color:var(--lm-blue)]/20 text-[color:var(--lm-cf)]" : "text-[color:var(--lm-mute)]"}`}>{c}</li>)}
        </ul>
      </div>
    </div>
  );
}

const extras = ["Saved views", "My work", "Teams and invitations", "Roles", "CSV import", "Reports and CSV export", "Notifications", "Light and dark themes", "Personal access keys", "Time tracking", "Ticket templates", "Linked tickets"];

export default function Bento() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
      <Tile className="md:col-span-2 lg:col-span-4" kicker="Sprints" title="A burndown that tells the truth" text="Start and complete sprints, one active per project, and watch the line fall from the tickets themselves."><Burndown /></Tile>
      <Tile className="lg:col-span-2" kicker="Optional AI" title="Suggests. You decide." text="Triage suggestions need an AI service connected. A person applies every one."><Suggest /></Tile>
      <Tile className="lg:col-span-2" kicker="Email intake" title="An email, now a ticket" text="Connect a company mailbox. Reply with the ticket key to update it."><Email /></Tile>
      <Tile className="lg:col-span-2" kicker="Releases" title="Ship with a checklist" text="Link tickets, track blockers, record deployments."><Release /></Tile>
      <Tile className="lg:col-span-2" kicker="Automation" title="Rules that run themselves" text="Pick from ready-made recipes. Flip them on, flip them off."><Rule /></Tile>
      <Tile className="lg:col-span-3" kicker="Epics" title="The plan, against real dates" text="A timeline built from actual ticket dates, plus a due-date calendar."><Epics /></Tile>
      <Tile className="lg:col-span-3" kicker="Audit log" title="Who changed what, kept" text="Changes are logged, roles limit who can do what."><Audit /></Tile>
      <div className={`lm-tile rounded-3xl p-5 sm:p-6 md:col-span-2 lg:col-span-4`}>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--lm-bt)]">Also in the box</p>
        <h3 className="mt-1.5 text-xl font-semibold tracking-tight">The boring bits are handled</h3>
        <ul className="mt-4 flex flex-wrap gap-2">{extras.map((e) => <li key={e} className="rounded-full border border-[color:var(--lm-l2)] bg-[color:var(--lm-p3)] px-3 py-1.5 text-sm text-[color:var(--lm-soft)]">{e}</li>)}</ul>
      </div>
      <Tile className="md:col-span-2 lg:col-span-2" kicker="Keyboard first" title="Hands stay on the keys" text="Keyboard shortcuts and a command palette."><Palette /></Tile>
    </div>
  );
}
