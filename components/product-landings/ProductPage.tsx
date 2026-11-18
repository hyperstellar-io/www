import Link from "next/link";
import type { Landing } from "@/lib/product-pages/types";
import css from "./lumen/css";

// Lumen's look (themed via the --lm-* palette in lumen/css.ts) driven by a product's copy in lib/product-pages/<slug>.ts.
// `accent` recolours it per product. The hero picture is public/product-<slug>.webp.
const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => <h2 id={id} className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{children}</h2>;
const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--lm-bt)]">{children}</p>;
const primary = "inline-flex items-center justify-center rounded-full bg-[color:var(--lm-blue)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_var(--lm-blue)] transition hover:bg-[color:var(--lm-bh)] focus-visible:!outline-[color:var(--lm-fg)]";
const ghost = "inline-flex items-center justify-center rounded-full border border-[color:var(--lm-l3)] px-6 py-3 text-sm font-semibold text-[color:var(--lm-fg)] transition hover:border-[color:var(--lm-bt)] focus-visible:!outline-[color:var(--lm-fg)]";
const Dot = () => <span className="mt-2.5 size-1 shrink-0 rounded-full bg-[color:var(--lm-blue)]" aria-hidden="true" />;

export default function ProductPage({ slug, name, d, accent }: { slug: string; name: string; d: Landing; accent: string }) {
  const wait = `/waitlist?product=${name}`;
  return (
    <div className="lm-root lm-acc font-sans" style={{ "--lm-acc": accent } as React.CSSProperties}>
      <style>{css}</style>

      <section className="relative px-4 pb-20 pt-32 sm:px-8 sm:pt-40">
        <div className="lm-grid pointer-events-none absolute inset-x-0 top-0 h-[60rem]" aria-hidden="true" />
        <div className="lm-glow pointer-events-none absolute left-1/2 top-[22rem] h-[34rem] w-[min(60rem,120vw)] -translate-x-1/2" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[color:var(--lm-l3)] bg-[color:var(--lm-p1)] px-3.5 py-1.5 text-xs text-[color:var(--lm-soft)]"><span className="size-1.5 rounded-full bg-[color:var(--lm-blue)]" aria-hidden="true" />{name}: {d.status}</p>
            <h1 className="mt-6 text-[clamp(2.7rem,8vw,6rem)] font-semibold leading-[0.98] tracking-[-0.04em]">{d.title} <span className="lm-grad">{d.accent}</span></h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--lm-mute)] sm:text-xl">{d.sub}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href={wait} className={primary}>{d.cta}</Link>
              <Link href="#inside" className={ghost}>See what&apos;s inside</Link>
            </div>
          </div>
          <div className="lm-win mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl p-2 sm:mt-20 sm:p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/product-${slug}.webp`} alt="" className="aspect-[16/9] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="pp-before">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Before</Eyebrow>
          <H2 id="pp-before">Sound familiar?</H2>
          <p className="mt-4 max-w-2xl text-lg text-[color:var(--lm-mute)]">{d.lead}</p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--lm-l1)] bg-[color:var(--lm-l1)] md:grid-cols-3">
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

      <section id="inside" className="relative scroll-mt-24 px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="pp-inside">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>What&apos;s inside</Eyebrow>
          <H2 id="pp-inside">Built around the work.</H2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {d.pillars.map((p) => (
              <div key={p.title} className="lm-tile rounded-3xl p-6 sm:p-8">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight">{p.title}</h3>
                <p className="mt-2 text-[color:var(--lm-bt)]">{p.outcome}</p>
                <ul className="mt-5 space-y-2.5 text-[color:var(--lm-soft)]">{p.points.map((x) => <li key={x} className="flex gap-2.5"><Dot />{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="pp-day">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Day to day</Eyebrow>
          <H2 id="pp-day">A day with {name}.</H2>
          <p className="mt-4 max-w-xl text-lg text-[color:var(--lm-mute)]">Illustrative scenarios with made-up people, not customer stories.</p>
          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {d.days.map((x, i) => (
              <li key={x.who} className="lm-tile flex flex-col rounded-3xl p-6 sm:p-8">
                <span className="font-mono text-xs text-[color:var(--lm-bt)]">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{x.who}</h3>
                <p className="mt-3 leading-relaxed text-[color:var(--lm-mute)]">{x.story}</p>
                <p className="mt-auto border-t border-[color:var(--lm-l1)] pt-4 text-sm text-[color:var(--lm-soft)]"><span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[color:var(--lm-bt)]">What changes</span><br />{x.change}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="pp-all">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Everything in the box</Eyebrow>
          <H2 id="pp-all">The full list.</H2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {d.groups.map((g) => (
              <div key={g.name} className="lm-tile rounded-3xl p-6 sm:p-8">
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--lm-bt)]">{g.name}</h3>
                <dl className="mt-4 divide-y divide-[color:var(--lm-l1)]">
                  {g.features.map(([a, b]) => <div key={a} className="py-3"><dt className="font-semibold">{a}</dt><dd className="mt-0.5 text-[color:var(--lm-mute)]">{b}</dd></div>)}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="today" className="relative px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="pp-today">
        <div className="mx-auto max-w-6xl">
          <Eyebrow>Where it is today</Eyebrow>
          <H2 id="pp-today">The honest bit.</H2>
          <p className="mt-4 max-w-2xl text-lg text-[color:var(--lm-mute)]">{d.closing}</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {([["Who it's for", d.forWho], ["Coming", d.next], ["Good to know", d.goodToKnow ?? []]] as const).filter(([, items]) => items.length).map(([h, items]) => (
              <div key={h} className="lm-tile rounded-3xl p-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[color:var(--lm-bt)]">{h}</h3>
                <ul className="mt-4 space-y-2.5 text-[color:var(--lm-soft)]">{items.map((x) => <li key={x} className="flex gap-2.5"><Dot />{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="relative px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="pp-faq">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_2fr]">
          <div><Eyebrow>FAQ</Eyebrow><H2 id="pp-faq">Fair questions.</H2></div>
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

      <section className="relative overflow-hidden px-4 py-28 text-center sm:px-8 sm:py-40">
        <div className="lm-glow pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[min(50rem,120vw)] -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-5xl font-semibold leading-[1] tracking-[-0.035em] sm:text-7xl">Interested in <span className="lm-grad">{name}?</span></h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-[color:var(--lm-mute)]">Join the waitlist and we&apos;ll tell you when it opens up.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={wait} className={primary}>{d.cta}</Link>
            <Link href="/contact" className={ghost}>Ask us a question</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
