// Every industry and solution page gets its own colour (hue) and animated motif so no two heroes look alike.
export type Motif = "waves" | "grid" | "routes" | "pulse" | "rings" | "blocks";
export const themes: Record<string, { hue: number; motif: Motif }> = {
  // industries
  "banking-financial-services-insurance": { hue: 215, motif: "grid" },
  "healthcare-life-sciences": { hue: 165, motif: "pulse" },
  "retail-consumer-goods": { hue: 350, motif: "blocks" },
  "manufacturing-industrial": { hue: 28, motif: "rings" },
  "energy-utilities": { hue: 48, motif: "waves" },
  "telecommunications-media": { hue: 268, motif: "rings" },
  "government-public-sector": { hue: 200, motif: "blocks" },
  "education-edtech": { hue: 238, motif: "routes" },
  "logistics-transportation": { hue: 18, motif: "routes" },
  "real-estate-construction": { hue: 32, motif: "grid" },
  // solutions
  "ai-engineering": { hue: 252, motif: "rings" },
  "llm-inference": { hue: 285, motif: "routes" },
  "ai-infrastructure": { hue: 222, motif: "grid" },
  "forward-deployed-engineering": { hue: 190, motif: "pulse" },
  "intelligent-automation": { hue: 330, motif: "routes" },
  "enterprise-ai-solutions": { hue: 40, motif: "blocks" },
  "cloud-infrastructure": { hue: 205, motif: "waves" },
  "custom-software": { hue: 150, motif: "grid" },
  "product-engineering": { hue: 14, motif: "rings" },
  "digital-experience": { hue: 305, motif: "waves" },
  "consulting-strategy": { hue: 58, motif: "blocks" },
  "managed-services": { hue: 175, motif: "pulse" },
};
export const themeFor = (slug: string) => themes[slug] ?? { hue: 235, motif: "waves" as Motif };
