import type { IndustryDetail } from "./types";

export const detail: IndustryDetail = {
  tagline: "Reliable AI and engineering for grids, generation and the field crews who keep them running.",
  lead: "Energy and utilities run long-lived, safety-critical assets, so AI is applied where it supports engineers: spotting early signs of wear, finding the right part, and turning paperwork into usable data. We build it to sit alongside operational systems, with clear ownership and human sign-off on decisions that affect safety and supply.",
  pressures: [
    ["Ageing assets, constrained budgets", "Much of the network and plant was built decades ago. Operators must decide where limited capital and outage time will do the most good."],
    ["Fragmented operational data", "Sensor feeds, historians, work orders and engineering records sit in separate systems with different formats, which makes a single view of asset health hard to build."],
    ["OT and IT security", "Operational technology must stay isolated and resilient while still feeding analytics, so every integration is a security design question."],
    ["Workforce transition", "Experienced engineers and technicians are retiring, and the knowledge they hold is often undocumented or buried in free-text records."],
  ],
  useCases: [
    ["Predictive maintenance of grid and generation assets", "Condition readings and maintenance history are combined to flag assets drifting from normal behaviour. Reliability engineers review each alert and decide the intervention."],
    ["Spares and materials availability", "Stock, reorder risk and inbound shipments across depots and yards are tracked together, so planners can see what is on hand before a job is scheduled."],
    ["Outage and field-service coordination", "Software helps dispatchers sequence crews, parts and permits across a planned or unplanned outage. Dispatchers retain control of final assignments."],
    ["Document intelligence for permits and inspections", "Language models extract fields, deadlines and findings from permits, inspection reports and manuals. Reviewers confirm extractions before they enter systems of record."],
    ["Demand and load analytics", "Historical consumption, weather and calendar patterns feed forecasts that support planning and scheduling. Analysts compare forecasts with actuals and tune models over time."],
    ["Digital twins of substations and plants", "Live readings, design data and maintenance history are joined in one model of an asset. Technicians can see the raw reading alongside any derived indicator."],
  ],
  solutions: [
    { slug: "ai-engineering", why: "Predictive maintenance and document intelligence need data pipelines, models and monitoring built to production standards, not prototypes." },
    { slug: "product-engineering", why: "Digital twins, industrial IoT and embedded systems turn raw asset signals into tools that technicians trust." },
    { slug: "cloud-infrastructure", why: "Governed data platforms and hybrid architectures let analytics use operational data without weakening OT boundaries." },
    { slug: "intelligent-automation", why: "Permit, inspection and work-order paperwork can be routed and checked automatically, with exceptions passed to people." },
    { slug: "managed-services", why: "Grid and plant systems run around the clock, so monitoring and support need to as well." },
    { slug: "consulting-strategy", why: "A clear roadmap helps prioritise which assets and processes deliver the most value from data first." },
  ],
  products: [
    { slug: "shelfwise", why: "Shelfwise, in development, can help with multi-warehouse inventory, a severity-ranked Risk Center, purchase orders, inbound shipment tracking and supplier risk scores for a single view of spares across depots." },
  ],
  start: [
    { name: "Discover", body: "We map the asset classes, data sources and decisions that matter, and agree one narrow use case with the engineers who will use it. We also establish what data can leave the operational zone and in what form.", considerations: ["OT and IT separation", "Data quality across historians and work orders", "Safety-critical decision ownership"] },
    { name: "Develop", body: "We build a focused prototype on a single asset class or site, showing raw readings beside derived indicators so technicians can judge results against experience. Reliability engineers review outputs throughout.", considerations: ["Engineer review of every alert", "Intermittent field connectivity", "Legacy protocol and system integration"] },
    { name: "Deploy", body: "We roll out in stages, with monitoring for drift, versioned models and a feedback path to record whether alerts proved useful. Support runs around the clock under the operator's security rules.", considerations: ["Outage and change windows", "Service continuity for live networks", "Clear model and data ownership"] },
  ],
  frameworks: [
    { name: "IEC 62443", note: "A family of standards for industrial automation and control system security that shapes zones, conduits and how analytics connect to OT." },
    { name: "NERC CIP", note: "Cybersecurity requirements for the North American bulk electric system that influence access control, logging and change management." },
    { name: "IEC 61850", note: "The standard for communication in substation automation, relevant when integrating protection and monitoring data." },
    { name: "ISO 55000", note: "The asset management standards that frame how organisations decide on maintenance, risk and lifecycle investment." },
    { name: "SCADA and OT security practice", note: "Network segmentation, least privilege and monitored remote access are the baseline for any system touching control environments." },
  ],
};
