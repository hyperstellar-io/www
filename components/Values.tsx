import { values } from "@/lib/content";

export default function Values() {
  return (
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="h2">Our <em>values.</em></h2>
            <p className="serif mt-8 text-[clamp(4rem,11vw,8rem)] leading-none tracking-[0.04em] text-accent" aria-label="ORBIT">{values.map((v) => v.title[0]).join("")}</p>
            <p className="mt-5 max-w-sm text-mute">Five values, one word. They shape what we build, why we build it and who we invite to build it with us.</p>
          </div>
          <ol className="divide-y divide-line border-y border-line">
            {values.map((v, n) => (
              <li key={v.title} className="grid gap-2 py-6 sm:grid-cols-[3rem_1fr]">
                <span className="font-mono text-xs text-mute">{String(n + 1).padStart(2, "0")}</span>
                <div><h3 className="serif text-3xl"><span className="text-accent">{v.title[0]}</span>{v.title.slice(1)}</h3><p className="mt-2 max-w-xl text-mute">{v.body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
  );
}
