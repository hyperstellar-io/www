export const slugify = (s: string) => s.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// kind: use-case | case-study (illustrative, unnamed enterprise); angle: which of the 3 per-industry blogs this is.
export type Post = {
  slug: string;
  title: string;
  dek: string; // one-sentence summary shown on cards
  industry?: string; // slugify(industries[i]) from lib/content.ts
  kind: "use-case" | "case-study";
  angle?: "product" | "solution" | "ai-solution";
  offering?: string; // slug of the product (lib/content.ts products) or service the post is about
  published: string; // ISO with offset, e.g. "2026-05-03T09:00:00+05:30"
  tag: string; // short filter tag, e.g. "Use case", "Case study", "FDE"
  body: string[]; // one paragraph per entry; a line starting with "## " is a subheading
};
