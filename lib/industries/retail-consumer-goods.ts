import type { IndustryDetail } from "./types";

export const detail: IndustryDetail = {
  tagline: "Demand, stock, content and service, joined up across every channel a customer uses.",
  lead: "Retailers and consumer goods companies run on thin margins, seasonal peaks and product data spread across many systems. AI and engineering help most where decisions repeat daily: forecasting, replenishment, answering questions and resolving service issues. We build these with people kept in the loop on the calls that matter.",
  pressures: [
    ["Demand that swings with season and promotion", "Festive peaks, campaigns and weather move demand unevenly across categories and regions, and planning errors show up as stock-outs or markdowns."],
    ["Stock visibility across channels", "Warehouses, stores and online channels often record inventory differently, so teams cannot promise availability with confidence."],
    ["Inconsistent product and customer data", "SKU attributes, descriptions and customer records are duplicated across systems and drift, which hurts search, content and service."],
    ["Privacy and payment obligations", "Handling card payments and personal data brings strict requirements that shape how systems are designed, stored and integrated."],
  ],
  useCases: [
    ["Demand forecasting and replenishment", "Models combine sales history, seasonality and promotions to suggest reorder quantities. Planners review and adjust the suggestions, especially around launches and events."],
    ["Inventory visibility across channels", "A single view of stock across warehouses, stores and online lets teams spot low stock and delayed inbound shipments early, and act before customers notice."],
    ["Product knowledge assistants for store staff", "Staff ask questions about products, policies and procedures and receive answers grounded in approved documents, with sources shown so they can verify."],
    ["Returns and customer service resolution", "AI drafts replies and resolves routine queries from past cases and policy. Unclear or sensitive cases escalate to an agent with the full context attached."],
    ["Catalogue and content enrichment", "Language models help draft and standardise product titles, attributes and descriptions at scale. Merchandising teams review content before it is published."],
    ["Storefront and checkout experience", "Engineering unifies navigation, search and checkout across regions, so product information stays consistent and customers do not repeat steps."],
  ],
  solutions: [
    { slug: "ai-engineering", why: "Forecasting, retrieval and content models need to be built, evaluated and monitored against real catalogue and sales data." },
    { slug: "enterprise-ai-solutions", why: "Retail AI has to connect to existing ERP, order management and commerce platforms rather than sit beside them." },
    { slug: "digital-experience", why: "Web and mobile storefronts shape conversion, and consistent journeys across regions reduce rework for marketing teams." },
    { slug: "intelligent-automation", why: "Routine work such as returns handling, supplier updates and data entry can be automated with exceptions routed to people." },
    { slug: "cloud-infrastructure", why: "Seasonal peaks call for infrastructure that scales up for campaigns and back down afterwards." },
    { slug: "managed-services", why: "Trading hours and peak events do not pause, so reliable operations and 24x7 support matter." },
  ],
  products: [
    { slug: "shelfwise", why: "Shelfwise, in development, can help with an inventory dashboard, demand forecasting with reorder suggestions you confirm, a Risk Center and multi-warehouse records." },
  ],
  start: [
    {
      name: "Discover",
      body: "We map how stock, product data and customer requests move today, and agree which decisions to support first. We also review data quality before any model is promised.",
      considerations: ["SKU and attribute data quality", "Seasonal and promotional peaks", "Store and warehouse system mix"],
    },
    {
      name: "Develop",
      body: "We build a narrow first workflow against real data and test it with the planners, store staff or agents who will use it. Evaluation covers accuracy and failure cases.",
      considerations: ["Human review of forecasts", "Grounding answers in approved content", "Integration with ERP and commerce"],
    },
    {
      name: "Deploy",
      body: "We release in stages, outside peak trading where possible, and monitor results against the baseline. Support runs around the clock so issues are handled quickly.",
      considerations: ["Release freezes before peaks", "Rollback and fallback paths", "Store connectivity and devices"],
    },
  ],
  frameworks: [
    { name: "PCI DSS", note: "The payment card industry standard shapes how card data is handled, segmented and kept out of systems that do not need it." },
    { name: "GDPR", note: "European data protection law governs consent, access and retention of customer data for shoppers in the EU." },
    { name: "India's Digital Personal Data Protection Act, 2023", note: "It sets obligations for processing the personal data of individuals in India, relevant to loyalty, CRM and eCommerce systems." },
    { name: "GS1 standards", note: "Barcodes and global product identifiers give products a consistent identity across suppliers, warehouses and stores." },
    { name: "WCAG", note: "The Web Content Accessibility Guidelines are the common reference for making storefronts usable by people with disabilities." },
  ],
};
