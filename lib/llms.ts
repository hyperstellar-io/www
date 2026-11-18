import { company, faqs, industries, products, services } from "./content";
import { industryDetail } from "./industries";
import { posts, slugify } from "./blogs";
import { abs } from "./seo";

// llms.txt (index, https://llmstxt.org) and llms-full.txt (same plus the content), generated from the site's own data so they never drift.
export function llms(full: boolean) {
  const out = [
    `# ${company.name}`,
    `> AI engineering, infrastructure, LLM inference and Forward Deployed Engineering, plus AI-first products for enterprises. Headquartered in Mumbai, India, with offices in the United States and Germany. Serving clients since 2017.`,
    "",
    "## Products",
    ...products.map((p) => `- [${p.name}](${abs(`/products/${p.slug}`)}): ${p.summary} Status: ${p.status}.`),
    "",
    "## Solutions",
    ...services.map((s) => `- [${s.title}](${abs(`/solutions/${s.slug}`)}): ${s.blurb}`),
    "",
    "## Industries",
    ...industries.map((i) => `- [${i}](${abs(`/industries/${slugify(i)}`)}): ${industryDetail[slugify(i)]?.tagline ?? ""}`),
    "",
    "## Insights",
    ...posts.map((p) => `- [${p.title}](${abs(`/insights/${p.slug}`)}): ${p.dek}`),
    "",
    "## Company",
    `- [About us](${abs("/company")})`,
    `- [Contact](${abs("/contact")}): ${company.email}`,
    `- [Enterprise](${abs("/enterprise")})`,
    `- [Privacy & terms](${abs("/privacy-terms")})`,
  ];
  if (full) {
    out.push("", "## Frequently asked questions", ...faqs.flatMap(([q, a]) => [`### ${q}`, a, ""]));
    out.push("## Solution details", ...services.flatMap((s) => [`### ${s.title}`, s.blurb, ...s.items.map((x) => `- ${x}`), ""]));
    out.push("## Articles", ...posts.flatMap((p) => [`### ${p.title}`, `${abs(`/insights/${p.slug}`)}`, ...p.body.map((l) => l.replace(/^## /, "#### ")), ""]));
  }
  return out.join("\n") + "\n";
}
