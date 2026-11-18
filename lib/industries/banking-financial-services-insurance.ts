import type { IndustryDetail } from "./types";

export const detail: IndustryDetail = {
  tagline: "AI and engineering for regulated finance: faster service, sharper controls, and an audit trail throughout.",
  lead: "Banks, lenders and insurers use AI to read documents, triage alerts and answer customers, while people keep authority over credit, claims and compliance decisions. The work is as much about integration with core systems, data controls and evidence as it is about models. We build for that reality.",
  pressures: [
    ["Layered regulation", "Prudential, conduct, privacy and outsourcing rules differ by jurisdiction and change often, so systems must be explainable and their decisions evidenced."],
    ["Legacy cores", "Core banking and policy administration platforms are long-lived and tightly coupled, so new capability usually arrives through integration rather than replacement."],
    ["Fraud and financial crime", "Alert volumes are high and most are false positives, which strains investigators and slows genuine customers."],
    ["Data sensitivity and residency", "Customer and payment data must stay within approved boundaries, with strict access control, retention rules and third-party risk review."],
  ],
  useCases: [
    ["KYC and onboarding documents", "Identity, address and income documents are extracted, checked for consistency and queued for an officer, who approves exceptions and confirms the final decision."],
    ["Loan and claims intake", "Applications and claim forms are classified, key fields extracted and missing items flagged, so underwriters and adjusters spend time on judgement rather than data entry."],
    ["Fraud and AML alert triage", "Models and rules rank alerts and assemble context for each case, while analysts decide on escalation and any suspicious activity reporting."],
    ["Customer service resolution", "Routine queries are answered from approved policy content, and sensitive or low-confidence cases are routed to staff with the conversation attached."],
    ["Regulatory reporting assistance", "Data lineage, reconciliation checks and drafting support shorten report preparation, with finance and compliance teams reviewing and signing off."],
    ["Policy and contract review", "Retrieval over policy wordings, product terms and internal procedures helps staff find and cite the right clause quickly."],
  ],
  solutions: [
    { slug: "ai-engineering", why: "Document intelligence, retrieval and decision-support applications built with evaluation and human review designed in." },
    { slug: "intelligent-automation", why: "Onboarding, claims and reconciliation workflows automated end to end, with approval steps where policy requires a person." },
    { slug: "enterprise-ai-solutions", why: "Integration with core banking, policy administration and CRM systems so AI works inside existing processes." },
    { slug: "cloud-infrastructure", why: "Secure, well-governed environments with network isolation, encryption and regional placement to meet residency needs." },
    { slug: "ai-infrastructure", why: "Private or controlled model deployment where customer data cannot leave an approved boundary." },
    { slug: "managed-services", why: "Round-the-clock monitoring and support for services customers and staff rely on at all hours." },
  ],
  products: [
    { slug: "lumen", why: "Lumen, in development with a beta planned, can help internal IT and operations teams track requests, releases and changes, with an audit log and automation rules." },
    { slug: "orbs", why: "ORBS, coming soon, is designed to answer from PDF, Word and spreadsheet files, with approval prompts before actions that leave the app, which can support internal policy and procedure assistants." },
  ],
  start: [
    { name: "Discover", body: "We map the target workflow, its systems, data and decision points with operations, risk and compliance together. We agree what the AI may recommend and what only a person may decide.", considerations: ["Data residency and access scope", "Human sign-off points", "Third-party and outsourcing review"] },
    { name: "Develop", body: "We build against realistic, appropriately protected data and test accuracy on cases the business cares about. Every output is traceable to its source and logged.", considerations: ["Audit trail for each decision", "Model validation and bias testing", "Change control and approvals"] },
    { name: "Deploy", body: "We release in stages, often alongside the existing process first, with monitoring and clear fallback paths. Cutover is planned around peak periods and settlement windows.", considerations: ["Parallel run and rollback", "Peak and batch-window downtime", "Incident response and escalation"] },
  ],
  frameworks: [
    { name: "Basel III", note: "Capital and risk requirements drive the data quality, lineage and reporting that banking systems must support." },
    { name: "FATF Recommendations (KYC and AML)", note: "International standards for customer due diligence and monitoring shape onboarding and alert-handling workflows." },
    { name: "PCI DSS", note: "Sets security controls for systems that store, process or transmit payment card data." },
    { name: "GDPR and India's DPDP Act 2023", note: "Govern lawful processing, purpose limits and individual rights over personal data." },
    { name: "Solvency II", note: "The EU insurance regime that influences risk, governance and reporting data for insurers." },
    { name: "RBI guidance on IT governance and outsourcing", note: "Sets expectations for oversight of technology risk and third-party service providers in India." },
  ],
};
