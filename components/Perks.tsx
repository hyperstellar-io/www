"use client";
import { useState } from "react";

// TODO: draft copy; confirm every perk with the company before launch (nothing here is sourced from docs/).
type Perk = [title: string, body: string];
const tabs: { key: string; label: string; intro: string; perks: Perk[] }[] = [
  {
    key: "benefits", label: "Benefits & perks",
    intro: "The practical things that give you and your family peace of mind.",
    perks: [
      ["Health & life cover", "Medical, life and accident protection for you, with options to extend cover to your family."],
      ["Milestone recognition", "We mark the years you've given us, and the work you're proud of, in a way that feels personal."],
      ["Growing a family", "Support and leave for every route to parenthood, handled with care and discretion."],
      ["Long-term savings", "Provident fund, gratuity and pension options, so your future is looked after as well as your present."],
      ["Partner discounts", "Offers on travel, gadgets, courses and more from brands we work with."],
      ["Time off that counts", "Generous leave, plus the freedom to swap fixed holidays for days that mean more to you."],
      ["Bring in great people", "Know someone brilliant? Refer them, and we'll thank you when they join."],
      ["Childcare help", "Options to cover day care so working parents can plan with confidence."],
      ["Safe business travel", "Cover for you and your dependents whenever work takes you abroad."],
    ],
  },
  {
    key: "support", label: "Employee support",
    intro: "Care that reaches beyond the workday, for you and the people who matter to you.",
    perks: [
      ["Flexibility that fits your life", "Everyone's circumstances differ. Our support is built to adapt to yours, so you decide where it helps most."],
      ["Work from wherever you work best", "Home, office or somewhere in between: we back your setup so distance never gets in the way of good work."],
      ["Keep learning, always", "Courses, mentors and time to study. Curiosity is part of the job here, and we invest in it."],
      ["Look after your mind", "Confidential counselling and wellbeing resources, available when you need someone to talk to."],
      ["Time spent together", "Team offsites, celebrations and casual get-togethers that keep a spread-out team close."],
    ],
  },
  {
    key: "balance", label: "Work-life balance",
    intro: "Good work comes from people who have a life outside it.",
    perks: [
      ["Hours that flex", "No one-size-fits-all schedule. Agree what works with your team and do your best work your way."],
      ["Time with a new child", "Paid leave for new parents, so the early weeks are for family first."],
      ["Giving back", "Paid days to volunteer for a cause you care about, and a hand with the donations you make."],
      ["Real breaks", "Step away to rest and recharge. We'd rather you return refreshed than run on empty."],
    ],
  },
];

export default function Perks() {
  const [active, setActive] = useState(tabs[0].key);
  const t = tabs.find((x) => x.key === active)!;
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16">
      <h2 className="h2">Benefits <em>&amp; perks.</em></h2>
      <p className="mt-5 max-w-xl text-mute">Care for you, your family and your growth, so you can focus on doing work you&apos;re proud of.</p>
      <div role="tablist" className="mt-10 inline-flex max-w-full flex-wrap rounded-full bg-panel p-1.5">
        {tabs.map((x) => (
          <button key={x.key} role="tab" aria-selected={active === x.key} onClick={() => setActive(x.key)} className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${active === x.key ? "bg-ion text-on-ion" : "text-mute hover:text-fg"}`}>{x.label}</button>
        ))}
      </div>
      <p className="mt-8 max-w-xl text-lg">{t.intro}</p>
      <ul role="tabpanel" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {t.perks.map(([title, body], n) => (
          <li key={title} className="rounded-[1.75rem] bg-panel p-8">
            <span className="font-mono text-xs text-mute">{String(n + 1).padStart(2, "0")}</span>
            <h3 className="serif mt-4 text-2xl">{title}</h3>
            <p className="mt-3 text-sm text-mute">{body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
