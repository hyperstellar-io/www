import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import { products, services } from "@/lib/content";
import { families } from "@/lib/families";

export const metadata: Metadata = { title: "Enterprise", description: "Products and engineering services for enterprises and governments: AI-first platforms, embedded engineers and 24×7 support from one accountable partner." };

const points = [
  ["Ownership", "A co-founder mindset on every engagement: we push back on scope that won't deliver ROI and stay invested after delivery."],
  ["Speed", "Rapid prototyping and under three-day revision cycles."],
  ["Support", "24×7 client support from our own team."],
  ["Reach", "Headquartered in Mumbai with teams in the United States and Germany."],
];

const trust = [
  { title: "Security and trust", body: "Confidentiality and integrity are values, not add-ons. Architecture, access control and data-residency options are agreed up front and documented with every engagement.", href: "/privacy-terms", cta: "Read how we handle data" },
  { title: "Product roadmap", body: "See which of our platforms are live, in beta or on the way, and what each one is built to do.", href: "/products", cta: "View our products" },
  { title: "A direct line to engineers", body: "Talk to the people who will build and run your system, from the first scoping call.", href: "/contact", cta: "Talk to our team" },
];

const expertise = [
  { title: "Strategy and delivery", body: "Clarity before code: use cases, architecture and a roadmap your organisation can follow, then a delivery team accountable for the outcome.", href: "/solutions/consulting-strategy", cta: "Consulting & strategy" },
  { title: "Embedded engineering", body: "Forward deployed engineers work inside your environment, on your real data and workflows, and hand over with documentation and enablement.", href: "/solutions/forward-deployed-engineering", cta: "Forward deployed engineering" },
  { title: "Managed services and 24×7 support", body: "Round-the-clock service desk, monitoring and operations for the cloud and applications we build or take over.", href: "/solutions/managed-services", cta: "Managed services" },
];

export default function Enterprise() {
  const live = products.filter((p) => p.features.length);
  return (
    <>
      <section className="px-3 pb-14 pt-36 text-center sm:px-8 sm:pt-40">
        <p className="eyebrow">Enterprise</p>
        <h1 className="display mt-5">Built for scale.<br /><em>Accountable for the outcome.</em></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-mute">AI-first products and engineering services for enterprises and governments that can&apos;t afford slow, from one partner that stays after launch.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/demo" className="btn btn-solid">Get a demo</Link>
          <Link href="/enterprise/contact" className="btn btn-ghost">Contact sales</Link>
        </div>
      </section>

      <section className="grid gap-4 px-3 pb-24 sm:px-8 lg:grid-cols-2" aria-label="Collections">
        <article className="relative isolate flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-3xl p-7 text-white sm:p-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/enterprise-1.webp" alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-20 size-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" aria-hidden="true" />
          <p className="relative inline-block w-fit rounded-full bg-white/90 px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-[#15140f]">Product collection</p>
          <div className="relative">
            <h2 className="serif text-4xl sm:text-5xl">Platforms we <em>build and run.</em></h2>
            <ul className="mt-5 grid gap-x-6 gap-y-1 text-white/90 sm:grid-cols-2">
              {live.map((p) => <li key={p.slug}><Link href={`/products/${p.slug}`} className="hover:underline"><b>{p.name}</b> <span className="text-white/70">· {p.category}</span></Link></li>)}
            </ul>
            <Link href="/products" className="btn btn-liquid mt-7">Explore products</Link>
          </div>
        </article>
        <article className="relative isolate flex min-h-[28rem] flex-col justify-between overflow-hidden rounded-3xl p-7 text-white sm:p-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/enterprise-2.webp" alt="" loading="lazy" decoding="async" className="absolute inset-0 -z-20 size-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" aria-hidden="true" />
          <p className="relative inline-block w-fit rounded-full bg-white/90 px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-[#15140f]">Service collection</p>
          <div className="relative">
            <h2 className="serif text-4xl sm:text-5xl">Engineering <em>around your business.</em></h2>
            <ul className="mt-5 space-y-1 text-white/90">
              {families.map((f) => <li key={f.key}><b>{f.title}</b> <span className="text-white/70">· {f.slugs.length} solutions</span></li>)}
            </ul>
            <Link href="/solutions" className="btn btn-liquid mt-7">Explore {services.length} solutions</Link>
          </div>
        </article>
      </section>

      <section className="px-3 pb-24 sm:px-8" aria-labelledby="trust">
        <h2 id="trust" className="h2">Enterprise work starts <em>with trust.</em></h2>
        <p className="mt-4 max-w-xl text-mute">How we protect your data, what we&apos;re building next, and how to reach the people doing the work.</p>
        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {trust.map((t, i) => (
            <li key={t.title}>
              <Link href={t.href} className="group relative flex h-full flex-col rounded-3xl bg-panel p-7 transition hover:-translate-y-1 lg:min-h-[21rem] lg:p-9" aria-label={`${t.title}: ${t.cta}`}>
                <span aria-hidden="true" className="absolute right-6 top-6 grid size-10 place-items-center rounded-full border border-line transition group-hover:rotate-45 group-hover:border-ion group-hover:bg-ion group-hover:text-on-ion lg:right-8 lg:top-8">↗</span>
                <span aria-hidden="true" className="hidden font-mono text-xs tracking-widest text-mute lg:block">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="serif max-w-[80%] text-2xl lg:mt-10 lg:text-3xl">{t.title}</h3>
                <p className="mt-3 text-mute lg:text-lg">{t.body}</p>
                <span aria-hidden="true" className="mt-auto hidden items-center gap-2 border-t border-line pt-5 text-sm transition group-hover:text-accent lg:flex">{t.cta}<span className="transition group-hover:translate-x-1">→</span></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-3 pb-24 sm:px-8" aria-labelledby="expertise">
        <h2 id="expertise" className="h2">Expertise that <em>drives your success.</em></h2>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {expertise.map((e) => (
            <li key={e.title}>
              <Link href={e.href} className="group grid items-center gap-4 py-7 grid-cols-[1fr_auto] md:grid-cols-[1fr_2fr_auto] md:gap-10">
                <h3 className="serif text-3xl">{e.title}</h3>
                <p className="col-span-2 row-start-2 text-mute md:col-span-1 md:row-start-auto">{e.body}</p>
                <span aria-hidden="true" className="grid size-10 place-items-center rounded-full border border-line transition group-hover:rotate-45 group-hover:border-ion group-hover:bg-ion group-hover:text-on-ion">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-3 pb-24 sm:px-8" aria-labelledby="why">
        <h2 id="why" className="h2">Why enterprises <em>choose us.</em></h2>
        <ul className="mt-8 border-t border-line">
          {points.map(([t, b]) => (
            <li key={t} className="grid gap-3 border-b border-line py-8 md:grid-cols-[1fr_2fr]"><h3 className="text-2xl tracking-tight">{t}</h3><p className="text-mute">{b}</p></li>
          ))}
        </ul>
      </section>
      <CTA title="Build your enterprise AI roadmap with us." action={{ href: "/enterprise/contact", label: "Contact sales" }} />
    </>
  );
}
