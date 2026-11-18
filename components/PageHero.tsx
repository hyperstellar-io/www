import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-40">
      <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
      <Reveal delay={0.08}><h1 className="display mt-5 max-w-5xl">{title}</h1></Reveal>
      {children && <Reveal delay={0.16}><div className="mt-8 max-w-2xl text-lg text-mute">{children}</div></Reveal>}
    </section>
  );
}
