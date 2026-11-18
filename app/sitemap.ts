import type { MetadataRoute } from "next";
import { company, industries, products, services } from "@/lib/content";
import { posts, slugify } from "@/lib/blogs";

// Priority: home and the main hubs first, then detail pages. Insights carry their publish date as lastModified.
const hubs = ["/products", "/solutions", "/industries", "/enterprise", "/insights"];

export default function sitemap(): MetadataRoute.Sitemap {
  const built = new Date();
  const page = (path: string, priority: number, lastModified = built): MetadataRoute.Sitemap[number] => ({ url: company.url + path, lastModified, changeFrequency: "monthly", priority });
  return [
    page("", 1),
    ...hubs.map((p) => page(p, 0.9)),
    ...["/company", "/contact", "/enterprise/contact", "/waitlist", "/demo", "/work-with-us", "/privacy-terms"].map((p) => page(p, 0.5)),
    ...products.map((p) => page(`/products/${p.slug}`, 0.8)),
    ...services.map((s) => page(`/solutions/${s.slug}`, 0.8)),
    ...industries.map((i) => page(`/industries/${slugify(i)}`, 0.7)),
    ...posts.map((p) => page(`/insights/${p.slug}`, 0.6, new Date(p.published))),
  ];
}
