import type { MetadataRoute } from "next";
import { company } from "@/lib/content";

// AI search and answer crawlers are welcome. Training-only crawlers are allowed too, since the aim is to be cited.
const ai = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot", "Meta-ExternalAgent", "Amazonbot", "DuckAssistBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/admin"] }, ...ai.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/", "/admin"] }))],
    sitemap: `${company.url}/sitemap.xml`,
    host: company.url,
  };
}
