import type { IndustryDetail } from "./types";

export const detail: IndustryDetail = {
  tagline: "Document-heavy projects and long-lived buildings, made searchable, measurable and easier to run.",
  lead: "Real estate and construction depend on contracts, drawings, site records and tenant requests that rarely sit in one system. AI and engineering help teams search project documents, resolve service requests, monitor building data and report progress, with professionals retaining judgement on safety, contracts and approvals.",
  pressures: [
    ["Information scattered across parties", "Owners, contractors, consultants and suppliers each hold their own documents and versions. Finding the governing clause or latest drawing takes time and invites disputes."],
    ["Tight schedules and cost control", "Delays and rework compound across trades and phases. Teams need early signals from site and procurement data, not retrospective reports."],
    ["Safety and compliance obligations", "Building codes, site safety practice and local regulation require records that are complete and auditable. Gaps surface at inspections, handover or incidents."],
    ["Disconnected systems and poor site connectivity", "Design, project, facilities and building systems were rarely built to work together, and sites often have limited connectivity. Data is hard to reuse once a project is handed over."],
  ],
  useCases: [
    ["Tenant and facilities request resolution", "Requests are triaged, answered from building knowledge and routed to the right team, with SLA tracking. Technicians and managers handle what the AI cannot resolve confidently."],
    ["Project document search", "Contracts, specifications, drawings and correspondence are indexed for natural-language search with cited sources. Commercial and legal teams verify answers against the original text."],
    ["Building portfolio digital twins and monitoring", "Asset data and sensor readings are brought into a model of each building for monitoring and maintenance planning. Engineers decide interventions based on the alerts."],
    ["Progress and safety reporting", "Site updates, photos and inspection records are structured into progress and safety reports. Site managers review and sign off before anything is issued."],
    ["Procurement and contractor documentation", "Quotations, submittals, certificates and insurance documents are extracted, checked for completeness and tracked. Procurement staff approve awards and exceptions."],
    ["Asset data handover", "Equipment, warranty and maintenance information collected during construction is structured for operations teams. Facilities staff validate it before it enters the maintenance system."],
  ],
  solutions: [
    { slug: "ai-engineering", why: "Builds document search, extraction and assistants over contracts, specifications and project records, with answers tied to sources." },
    { slug: "product-engineering", why: "Designs and builds the digital twin, monitoring and tenant-facing products that property owners and operators rely on." },
    { slug: "intelligent-automation", why: "Automates intake and checking of contractor, procurement and compliance documents, routing exceptions to reviewers." },
    { slug: "custom-software", why: "Connects project, facilities and building systems so data survives from design through to operation." },
    { slug: "digital-experience", why: "Creates clear tenant, owner and site-team interfaces that work on phones and in the field." },
    { slug: "cloud-infrastructure", why: "Provides secure shared environments for large drawing sets, model data and building telemetry." },
  ],
  products: [
    { slug: "lumen", why: "Lumen, in development with a beta planned, can help facilities teams turn emailed requests into tickets and track them on boards, with automation rules and optional AI suggestions a person applies." },
    { slug: "orbs", why: "ORBS, coming soon, is designed to let teams chat with assistants over PDF, DOCX, XLSX and image documents using hybrid full-text and vector retrieval." },
  ],
  start: [
    { name: "Discover", body: "We review how documents, requests and site data flow between owners, contractors and operators. We then choose one workflow, such as document search or request handling, where results are easy to verify.", considerations: ["Multi-party document ownership", "Project phase gates", "Existing project and facilities systems"] },
    { name: "Develop", body: "We build against your real contracts, drawings and request history, and show sources with every answer. Review steps for commercial, safety and engineering decisions are designed in from the start.", considerations: ["Large and mixed document formats", "Tight schedules and budgets", "Contractual and safety accountability"] },
    { name: "Deploy", body: "We release to a single project or building first, measure accuracy and adoption, then extend. Support runs around the clock for tenant-facing and operational systems.", considerations: ["Site connectivity limits", "Handover to operations teams", "Access control across parties"] },
  ],
  frameworks: [
    { name: "ISO 19650", note: "Sets out information management practice for buildings and infrastructure using BIM, shaping how project data is organised and exchanged." },
    { name: "Building codes and fire and life safety practice", note: "Local codes and inspection requirements determine which records must be kept and be auditable." },
    { name: "RERA in India", note: "The Real Estate (Regulation and Development) Act sets obligations for project registration and disclosure that affect developer reporting." },
    { name: "COBie-style asset data handover", note: "Structured handover of equipment and maintenance data lets operators use construction information in facilities management." },
    { name: "Digital twin practice", note: "Linking asset models to live building data supports monitoring, but depends on consistent asset identifiers and data quality." },
    { name: "GDPR and India's DPDP Act 2023", note: "Tenant, occupant and access data is personal data, so request and monitoring systems need lawful purpose and sound access control." },
  ],
};
