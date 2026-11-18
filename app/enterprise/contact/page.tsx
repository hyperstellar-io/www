import type { Metadata } from "next";
import EnterpriseContactForm from "@/components/EnterpriseContactForm";
import { company, products, services } from "@/lib/content";

export const metadata: Metadata = { title: "Contact sales", description: "Talk to Hyperstellar's enterprise team about products, solutions, pricing and delivery." };

const points = [
  ["A named team, not a ticket queue", "Enterprise enquiries go to people who scope and deliver the work."],
  ["Scoped around your goals", "We start from your use case and constraints, then recommend products, services or both."],
  ["Support that doesn't clock off", "24×7 client support from our own team once you're live."],
];

export default function EnterpriseContact() {
  const offerings = [
    { group: "Products", items: products.map((p) => p.name) },
    { group: "Solutions", items: services.map((s) => s.title) },
  ];
  return (
    <section className="grid gap-12 px-3 pb-24 pt-36 sm:px-8 sm:pt-40 lg:grid-cols-[1fr_1.4fr]">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <p className="eyebrow">Enterprise</p>
        <h1 className="display mt-5 !text-[clamp(2.6rem,5vw,4.6rem)]">Contact <em>sales.</em></h1>
        <p className="mt-6 max-w-md text-lg text-mute">Tell us about your organisation and what you want to achieve. Our enterprise team will get back to you.</p>
        <ul className="mt-10 space-y-6">
          {points.map(([t, b]) => (
            <li key={t} className="flex gap-4">
              <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-ion text-xs text-on-ion" aria-hidden="true">✓</span>
              <div><p className="font-semibold">{t}</p><p className="mt-1 text-mute">{b}</p></div>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-mute">Prefer to talk it through? <a href="/demo" className="text-accent underline-offset-4 hover:underline">Book a demo</a> or email <a href={`mailto:${company.email}`} className="text-accent underline-offset-4 hover:underline">{company.email}</a>.</p>
      </div>
      <div className="rounded-[1.75rem] bg-panel p-6 sm:p-10">
        <EnterpriseContactForm offerings={offerings} />
      </div>
    </section>
  );
}
