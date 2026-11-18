import Link from "next/link";
import Reveal from "./Reveal";

const steps = [
  ["01", "Discover", "Map the real workflow, data and constraints."],
  ["02", "Prototype", "A working demo in your own environment, fast."],
  ["03", "Harden", "Evaluation, security and scale for production."],
  ["04", "Hand over", "Documentation, enablement and ownership."],
];

// Full-screen dark panel (dark in both themes, like the hero and CTA).
export default function FDESection() {
  return (
    <section className="relative isolate mx-2 flex min-h-[100svh] items-center overflow-hidden rounded-[2rem] bg-[#0f1118] px-6 py-24 text-[#f1efe8] sm:mx-3">
      <div className="absolute -right-40 -top-40 -z-10 size-[44rem] rounded-full bg-[#4a5af0] opacity-[0.09] blur-[140px]" />
      <div className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <h2 className="h2 !text-[clamp(2.6rem,5.4vw,5rem)]">Engineers who show up <em>in your world.</em></h2>
          <p className="mt-8 max-w-lg text-lg text-[#9a9caa]">The gap between an AI demo and AI in production is closed on the ground. Our engineers join your team, learn your workflows and build alongside you until it works.</p>
          <Link href="/solutions/forward-deployed-engineering" className="btn btn-solid mt-10">Explore FDE</Link>
        </Reveal>
        <ol className="relative">
          <span className="absolute bottom-6 left-[1.1rem] top-6 w-px bg-gradient-to-b from-[#4a5af0] via-white/20 to-transparent" aria-hidden="true" />
          {steps.map(([n, t, b], i) => (
            <li key={n}>
              <Reveal delay={i * 0.1} className="group relative flex gap-8 py-7 pl-12">
                <span className="absolute left-0 top-9 grid size-9 place-items-center rounded-full border border-[#4a5af0]/60 bg-[#0f1118] font-mono text-[0.65rem] text-[#4a5af0] transition group-hover:bg-[#4a5af0] group-hover:text-[#15140f]">{n}</span>
                <div className="flex-1 border-b border-white/10 pb-7 transition group-hover:translate-x-2">
                  <h3 className="serif text-4xl sm:text-5xl">{t}</h3>
                  <p className="mt-2 max-w-sm text-[#9a9caa]">{b}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
