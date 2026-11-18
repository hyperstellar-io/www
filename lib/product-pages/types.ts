// Everything a product landing page shows. Copy only; layout lives in components/product-landings/.
export type Landing = {
  status: string; // short public status, shown as a pill in the hero
  closing: string; // honest status line shown above the closing call to action
  cta: string; // primary button label
  title: string; // headline: plain part ...
  accent: string; // ... and the italic ending
  sub: string;
  seo: { title: string; description: string };
  lead: string; // one-sentence promise that lights up word by word on scroll
  problem: [string, string][]; // [short title, what it feels like]
  pillars: { title: string; outcome: string; points: string[] }[];
  days: { who: string; story: string; change: string }[];
  groups: { name: string; features: [string, string][] }[];
  forWho: string[];
  goodToKnow?: string[];
  next: string[];
  faq: [string, string][];
};
