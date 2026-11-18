import { company } from "./content";

export const abs = (path: string) => company.url + path;
const orgRef = { "@id": abs("/#organization") };

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": abs("/#organization"),
  name: company.name,
  alternateName: "Hyperstellar",
  url: company.url,
  logo: abs("/logo.svg"),
  email: company.email,
  foundingDate: "2017",
  description: "AI engineering, infrastructure, LLM inference and Forward Deployed Engineering, plus AI-first products for enterprises.",
  sameAs: company.social.filter((s) => !s.href.includes("whatsapp")).map((s) => s.href),
  address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
  contactPoint: [{ "@type": "ContactPoint", contactType: "sales", email: company.email, availableLanguage: ["English"] }],
};

export const website = { "@context": "https://schema.org", "@type": "WebSite", "@id": abs("/#website"), url: company.url, name: company.name, publisher: orgRef, inLanguage: "en" };

export const breadcrumbs = (items: [name: string, path: string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [["Home", "/"], ...items].map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: abs(path) })),
});

export const faqPage = (faqs: string[][]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
});

export const softwareApp = (p: { slug: string; name: string; category: string; summary: string }) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: p.name,
  description: p.summary,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: p.category,
  operatingSystem: "Web",
  url: abs(`/products/${p.slug}`),
  publisher: orgRef,
});

export const service = (s: { slug: string; title: string; blurb: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.title,
  description: s.blurb,
  url: abs(`/solutions/${s.slug}`),
  provider: orgRef,
  serviceType: s.title,
});

export const article = (p: { slug: string; title: string; dek: string; published: string; tag: string }, section?: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: p.title,
  description: p.dek,
  datePublished: p.published,
  dateModified: p.published,
  articleSection: section ?? p.tag,
  mainEntityOfPage: abs(`/insights/${p.slug}`),
  author: orgRef,
  publisher: orgRef,
  inLanguage: "en",
});
