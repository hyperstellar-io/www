export type IndustryDetail = {
  tagline: string; // one-line positioning for the hero, max 110 characters
  lead: string; // 2 to 3 sentences on how AI and engineering are used in this sector
  pressures: [title: string, body: string][]; // exactly 4 real pressures the sector faces
  useCases: [title: string, body: string][]; // 5 or 6 concrete workflows
  solutions: { slug: string; why: string }[]; // 4 to 6 entries; slug is a service slug from lib/content.ts `services`
  products: { slug: string; why: string }[]; // 1 or 2 entries; slug is a product slug with documented features (lumen, together, shelfwise, orbs)
  start: [Step, Step, Step]; // Discover, Develop, Deploy, with this sector's real constraints
  frameworks: { name: string; note: string }[]; // 4 to 6 real regulations, standards or practices of the sector
};
export type Step = { name: "Discover" | "Develop" | "Deploy"; body: string; considerations: string[] }; // 3 considerations each
