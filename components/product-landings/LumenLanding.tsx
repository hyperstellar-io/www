import Link from "next/link";
import type { Landing } from "@/lib/product-pages/types";
import Bento from "./lumen/Bento";
import Board from "./lumen/Board";
import Story from "./lumen/Story";
import css from "./lumen/css";
import { Kbd } from "./lumen/ui";

const story = [
  { k: "Plan", t: "Pull the good stuff into a sprint", d: "Sort the backlog, drag tickets in, start the sprint. One active sprint per project, so nobody asks which one you mean." },
  { k: "Run", t: "Move cards, not meetings", d: "Everyone works from the same board, with checklists, comments and linked tickets on the ticket itself." },
  { k: "Watch", t: "See the slip before it lands", d: "The burndown draws itself from the tickets. If you've connected an AI service, a sprint health check suggests moves. You press apply." },
  { k: "Ship", t: "Releases with receipts", d: "Link tickets to a release, keep an eye on blockers, record the deployment when it goes out." },
  { k: "Close", t: "Wrap up, and keep the record", d: "Closure summaries, a 1 to 5 rating from the requester, and an audit log of who changed what." },
];
const chips = ["an email thread", "a chat message", "spreadsheet_v7_FINAL", "a sticky note", "someone's memory", "that other tool"];
const working = ["Projects, board and backlog", "Sprints with burndown", "Epics, timeline and calendar", "Releases and deployments", "Automation recipes", "Roles, teams and audit log"];
const rot = ["-3deg", "2deg", "-1.5deg", "3deg", "-2deg", "1.5deg"];

const H2 = ({ children }: { children: React.ReactNode }) => <h2 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{children}</h2>;
const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--lm-bt)]">{children}</p>;
const primary = "inline-flex items-center justify-center rounded-full bg-[color:var(--lm-blue)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_var(--lm-blue)] transition hover:-translate-y-0.5 hover:bg-[color:var(--lm-bh)] focus-visible:!outline-[color:var(--lm-fg)]";
const ghost = "inline-flex items-center justify-center rounded-full border border-[color:var(--lm-l3)] px-6 py-3 text-sm font-semibold text-[color:var(--lm-fg)] transition hover:-translate-y-0.5 hover:border-[color:var(--lm-bt)] focus-visible:!outline-[color:var(--lm-fg)]";

export default function LumenLanding({ name, d }: { slug: string; name: string; category: string; d: Landing }) {
  return (
    <div className="lm-root font-sans">
      <style>{css}</style>
      {/* hero */}
      <section className="relative px-4 pb-20 pt-32 sm:px-8 sm:pt-40">
        <div className={`lm-grid pointer-events-none absolute inset-x-0 top-0 h-[60rem]`} aria-hidden="true" />
        <div className={`lm-glow pointer-events-none absolute left-1/2 top-[22rem] h-[34rem] w-[min(60rem,120vw)] -translate-x-1/2`} aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[color:var(--lm-l3)] bg-[color:var(--lm-p1)] px-3.5 py-1.5 text-xs text-[color:var(--lm-soft)]"><span className="size-1.5 rounded-full bg-[color:var(--lm-blue)]" aria-hidden="true" />{name}: {d.status}</p>
            <h1 className="mt-6 text-[clamp(2.7rem,8vw,6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">{d.title} <span className="lm-grad">{d.accent}</span></h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--lm-mute)] sm:text-xl">{d.sub}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/waitlist?product=Lumen" className={primary}>{d.cta}</Link>
              <Link href="#bento" className={ghost}>See what&apos;s inside</Link>
            </div>
            <p className="mt-5 hidden items-center justify-center gap-2 text-xs text-[color:var(--lm-mute)] sm:flex">Built for keyboards <Kbd>Cmd</Kbd><Kbd>K</Kbd> <span aria-hidden="true">·</span> a command palette and shortcuts</p>
          </div>
          <div className="mx-auto mt-14 max-w-5xl sm:mt-20"><Board /></div>
        </div>
      </section>

      {/* the mess before */}
      <section className="relative px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="lm-mess">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Before</Eyebrow>
          <h2 id="lm-mess" className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Where did that request <span className={`lm-strike text-[color:var(--lm-mute)]`}>go</span>?</h2>
          <ul className="mt-10 flex flex-wrap gap-3" aria-label="Places work tends to hide">
            {chips.map((c, i) => <li key={c} style={{ ["--r" as string]: rot[i], transform: `rotate(${rot[i]})`, animationDelay: `${i * 0.4}s` }} className={`lm-drift rounded-xl border border-[color:var(--lm-l2)] bg-[color:var(--lm-p1)] px-4 py-2.5 text-sm text-[color:var(--lm-soft)]`}>{c}</li>)}
          </ul>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--lm-l1)] bg-[color:var(--lm-l1)] md:grid-cols-3">
            {d.problem.map(([t, b], i) => (
              <div key={t} className="bg-[color:var(--lm-p0)] p-6 sm:p-8">
                <p className="font-mono text-xs text-[color:var(--lm-bt)]">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{t}</h3>
                <p className="mt-2 leading-relaxed text-[color:var(--lm-mute)]">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* bento */}
      <section id="bento" className="relative scroll-mt-24 px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="lm-bento">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>What&apos;s inside</Eyebrow>
          <H2><span id="lm-bento">Small tools, one tidy place.</span></H2>
          <p className="mt-4 max-w-xl text-lg text-[color:var(--lm-mute)]">Poke the little demos. They&apos;re sample data, not a recording.</p>
          <div className="mt-12"><Bento /></div>
        </div>
      </section>

      {/* story */}
      <section id="story" className="relative scroll-mt-24 px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="lm-story">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Sprint to release</Eyebrow>
          <H2><span id="lm-story">One sprint, start to ship.</span></H2>
          <div className="mt-14 lg:mt-20"><Story steps={story} /></div>
        </div>
      </section>

      {/* honest */}
      <section id="today" className="relative px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="lm-today">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Where it is today</Eyebrow>
          <H2><span id="lm-today">The honest bit.</span></H2>
          <p className="mt-4 max-w-2xl text-lg text-[color:var(--lm-mute)]">{d.closing}</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[["Built and working", working], ["Coming", d.next], ["Not in the box", ["Customer portal", "SLA tracking", "Knowledge base"]]].map(([h, items]) => (
              <div key={h as string} className={`lm-tile rounded-3xl p-6`}>
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--lm-bt)]">{h as string}</h3>
                <ul className="mt-4 space-y-2.5 text-[color:var(--lm-soft)]">{(items as string[]).map((x) => <li key={x} className="flex gap-2.5"><span className="mt-2.5 size-1 shrink-0 rounded-full bg-[color:var(--lm-blue)]" aria-hidden="true" />{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section id="faq" className="relative px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="lm-faq">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_2fr]">
          <div><Eyebrow>FAQ</Eyebrow><H2><span id="lm-faq">Fair questions.</span></H2></div>
          <div className="divide-y divide-[color:var(--lm-l1)] border-y border-[color:var(--lm-l1)]">
            {d.faq.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium tracking-tight [&::-webkit-details-marker]:hidden">
                  <span>{q}</span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[color:var(--lm-l3)] text-[color:var(--lm-mute)] transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-[color:var(--lm-mute)]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="relative overflow-hidden px-4 py-28 text-center sm:px-8 sm:py-40">
        <div className={`lm-glow pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[min(50rem,120vw)] -translate-x-1/2 -translate-y-1/2`} aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-5xl font-semibold leading-[1] tracking-[-0.035em] sm:text-7xl">Tidy the <span className="lm-grad">queue.</span></h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-[color:var(--lm-mute)]">Tell us how your team works and we&apos;ll keep you posted on the beta.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/waitlist?product=Lumen" className={primary}>{d.cta}</Link>
            <Link href="/contact" className={ghost}>Ask us a question</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
