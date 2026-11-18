"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";
import { legacyIcons, siPaths as si } from "@/lib/brandIcons";
import { rings } from "@/lib/content";

// Three concentric rings (AI & core, Backend, Frontend). Upright landscape tiles sit on each ellipse,
// and every ring turns as the section scrolls past, neighbouring rings in opposite directions.
const rad = (a: number) => (a * Math.PI) / 180;
const r3 = (n: number) => Math.round(n * 1000) / 1000; // server and client must print identical style values or React warns on hydration
const SWEEP = [90, -70, 55]; // degrees per ring over the scroll range

// Official brand glyphs only. Where a product has no icon of its own, its parent's is used
// (React Native -> React, Power Platform -> Microsoft).
const brand: Record<string, string> = {
  OpenAI: legacyIcons.openai, "Anthropic Claude": si.anthropic, LangGraph: si.langgraph, PyTorch: si.pytorch, MLflow: si.mlflow,
  AWS: legacyIcons.amazonaws, "Microsoft Azure": legacyIcons.microsoftazure, "Google Cloud": si.googlecloud, Kubernetes: si.kubernetes,
  Docker: si.docker, Terraform: si.terraform, PostgreSQL: si.postgresql, GraphQL: si.graphql, SAP: si.sap,
  Salesforce: legacyIcons.salesforce,
  "React Native": si.react, "Next.js": si.nextdotjs, TypeScript: si.typescript, Flutter: si.flutter,
  "Power Platform": legacyIcons.microsoft, Contentful: si.contentful, "Vue.js": si.vuedotjs, "Tailwind CSS": si.tailwindcss,
};

function Icon({ name, size }: { name: string; size: string }) {
  return <svg viewBox="0 0 24 24" className={size} fill="currentColor" aria-hidden="true"><path d={brand[name]} /></svg>;
}

type Geo = { rx: number; ry: number };

function Tile({ name, base, sweep, progress, geo, still, fade, small }: { name: string; base: number; sweep: number; progress: MotionValue<number>; geo: Geo; still: boolean; fade: boolean; small: boolean }) {
  const angle = useTransform(progress, [0, 1], still ? [base, base] : [base, base + sweep]);
  const x = useTransform(angle, (a) => r3(Math.cos(rad(a)) * geo.rx));
  const y = useTransform(angle, (a) => r3(Math.sin(rad(a)) * geo.ry));
  const opacity = useTransform(angle, (a) => r3(fade ? 1 - 0.75 * Math.max(0, (Math.abs(Math.sin(rad(a))) - 0.82) / 0.18) : 1));
  const dim = small ? "-ml-11 -mt-7 h-14 w-[5.5rem] gap-1 text-[0.65rem]" : "-ml-[4.5rem] -mt-12 h-24 w-36 gap-2 text-xs";
  return (
    <motion.div style={{ x, y, opacity }} className={`absolute left-1/2 top-1/2 flex flex-col items-center justify-center rounded-3xl bg-panel px-1 text-center font-bold tracking-tight text-fg ${dim}`}>
      <Icon name={name} size={small ? "size-5" : "size-8"} />
      <span className="leading-tight">{name}</span>
    </motion.div>
  );
}

export default function Tiles() {
  const ref = useRef<HTMLElement>(null);
  const still = !!useReducedMotion();
  const [size, setSize] = useState({ w: 1440, h: 1200 });
  useEffect(() => {
    const measure = () => ref.current && setSize({ w: ref.current.offsetWidth, h: ref.current.offsetHeight });
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const narrow = size.w < 640;
  // Ring radii as fractions of the section; kept clear of the centre copy.
  const geos: Geo[] = narrow
    ? [{ rx: size.w * 0.46, ry: size.h * 0.22 }, { rx: size.w * 0.64, ry: size.h * 0.33 }, { rx: size.w * 0.82, ry: size.h * 0.44 }]
    : [{ rx: size.w * 0.25, ry: size.h * 0.24 }, { rx: size.w * 0.37, ry: size.h * 0.335 }, { rx: size.w * 0.49, ry: size.h * 0.43 }];
  return (
    <section ref={ref} className="relative flex min-h-[1300px] items-center justify-center overflow-hidden px-5 py-24 md:min-h-[1200px]">
      <div aria-hidden="true">
        {rings.map((ring, r) =>
          ring.items.map((name, i) => (
            <Tile key={name} name={name} base={-90 + (360 / ring.items.length) * i + r * 18} sweep={SWEEP[r]} progress={scrollYProgress} geo={geos[r]} still={still} fade={r === 2} small={narrow} />
          )),
        )}
      </div>
      <div className="relative z-10 max-w-[15rem] text-center sm:max-w-md">
        <h2 className="h2">Built on the stack <em>enterprises trust.</em></h2>
        <ul className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-semibold">
          {rings.map((r) => <li key={r.name} className="rounded-full border border-line px-3 py-1.5">{r.name}</li>)}
        </ul>
      </div>
    </section>
  );
}
