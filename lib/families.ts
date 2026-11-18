// Solution families, in the order shown on /solutions and in the nav. `art` picks the InsightArt look for the hero band.
export const families = [
  { key: "ai", title: "AI & intelligent systems", blurb: "Build, serve and operate AI that holds up in production.", art: 1, slugs: ["ai-engineering", "llm-inference", "ai-infrastructure", "forward-deployed-engineering", "intelligent-automation"] },
  { key: "eng", title: "Enterprise & engineering", blurb: "The platforms, software and products your business runs on.", art: 2, slugs: ["enterprise-ai-solutions", "custom-software", "cloud-infrastructure", "product-engineering", "digital-experience"] },
  { key: "run", title: "Advisory & operations", blurb: "Direction before delivery, and dependable operations after it.", art: 3, slugs: ["consulting-strategy", "managed-services"] },
] as const;

export const familyOf = (slug: string) => families.find((f) => (f.slugs as readonly string[]).includes(slug))!;
