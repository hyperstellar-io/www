export type Eng = { title: string; scenario: string; shape: string; deliverables: string[] };

// Engagement patterns as cards that stack on top of each other while you scroll, at every screen size.
export default function EngagementStack({ id, title, items }: { id: string; title: React.ReactNode; items: Eng[] }) {
  return (
    <section id={id} className="scroll-mt-28 px-3 py-20 sm:px-8">
      <h2 className="h2">{title}</h2>
      <ol className="mt-10 space-y-6 pb-[15svh]">
        {items.map((e, i) => (
          <li key={e.title} style={{ "--m": `${8.5 + i * 3.5}rem`, "--d": `${8 + i * 5.5}rem` } as React.CSSProperties} className="sticky top-[var(--m)] rounded-[1.75rem] border border-line bg-panel p-7 shadow-[0_-10px_30px_rgba(0,0,0,.08)] sm:p-9 lg:top-[var(--d)] lg:min-h-[24rem]">
            <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
              <span className="font-mono text-xs text-mute">{String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
              <h3 className="serif text-3xl sm:text-4xl">{e.title}</h3>
            </div>
            <div className="mt-6 grid gap-8 border-t border-line pt-6 md:grid-cols-[1.1fr_1fr] lg:gap-14">
              <p className="text-lg text-mute lg:text-xl">{e.scenario}</p>
              <div className="space-y-6">
                <div><p className="font-mono text-[0.65rem] uppercase tracking-widest text-mute">Typical shape</p><p className="mt-1">{e.shape}</p></div>
                <div><p className="font-mono text-[0.65rem] uppercase tracking-widest text-mute">Deliverables</p><ul className="mt-2 space-y-1.5">{e.deliverables.map((x) => <li key={x} className="flex gap-2"><span aria-hidden="true" className="text-accent">✓</span>{x}</li>)}</ul></div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
