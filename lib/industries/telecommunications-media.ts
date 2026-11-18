import type { IndustryDetail } from "./types";

export const detail: IndustryDetail = {
  tagline: "AI and engineering for networks, subscribers and content operating at very large scale.",
  lead: "Telecom and media providers serve millions of subscribers across networks, billing and content platforms that cannot go down. AI is applied to resolve routine support first time, help network engineers find answers faster, and organise content and rights data, with people handling the hard cases.",
  pressures: [
    ["Service continuity at scale", "Networks and streaming platforms are expected to be always available, so every change must be planned against peak load and fast recovery."],
    ["Legacy and acquired systems", "Billing, provisioning and customer platforms have accumulated through growth and acquisition, and they rarely share data models or interfaces."],
    ["Customer expectations and cost to serve", "Subscribers compare experiences across providers and channels, while support volumes of repeat questions keep operating costs high."],
    ["Privacy and regulation", "Subscriber and viewing data is personal data, and rules differ across the regions in which a group operates."],
  ],
  useCases: [
    ["Subscriber support resolution", "An AI first line answers routine billing, plan and device questions from approved knowledge. Unresolved cases pass to agents with the full conversation attached."],
    ["Network operations knowledge assistants", "Engineers query runbooks, vendor documentation and past incidents in plain language, with sources cited. They verify guidance before acting on live network changes."],
    ["Fault triage", "Alarms and tickets are grouped and prioritised so engineers see likely related faults together. Network teams decide on dispatch and remediation."],
    ["Billing dispute handling", "Disputes are classified, matched to account and usage records, and drafted for review. Agents approve any adjustment."],
    ["Content metadata and rights workflows", "Software and language models help tag assets and reconcile rights windows and territories. Rights teams confirm anything that affects availability."],
    ["Churn analytics", "Usage, support history and plan data are analysed to identify subscribers at risk of leaving. Retention teams choose which actions to take and how to contact people."],
  ],
  solutions: [
    { slug: "enterprise-ai-solutions", why: "Support, billing and network knowledge workflows need enterprise integration with existing platforms and data." },
    { slug: "llm-inference", why: "Assistants used by thousands of agents and engineers need controlled latency and cost, along with evaluation and guardrails." },
    { slug: "cloud-infrastructure", why: "Migration, resilience and disaster recovery support platforms that must scale for peak events." },
    { slug: "intelligent-automation", why: "Dispute handling, order exceptions and rights reconciliation can be automated with clear hand-offs to people." },
    { slug: "managed-services", why: "Subscriber-facing systems run continuously and need support around the clock." },
    { slug: "digital-experience", why: "Self-service portals and apps are where many subscribers first look for help or manage their accounts." },
  ],
  products: [
    { slug: "lumen", why: "Lumen, in development with a beta planned, can help operations teams track tickets, sprints and releases, with email intake, automation rules and optional AI suggestions that a person applies." },
    { slug: "orbs", why: "ORBS, coming soon, is designed for persistent assistants with document knowledge, long-term memory you can edit and approval prompts for actions, suited to internal knowledge assistants." },
  ],
  start: [
    { name: "Discover", body: "We review support channels, knowledge sources and system landscape, then choose one workflow with measurable outcomes defined by your team. We also map where subscriber data is held and who may see it.", considerations: ["Subscriber data privacy", "Fragmented legacy systems", "Multiple channels and brands"] },
    { name: "Develop", body: "We build against a defined slice of traffic, with retrieval over approved content and confidence thresholds that decide when the AI answers and when a person does. Agents and engineers review output early.", considerations: ["Answer accuracy against current documentation", "Latency during incidents", "Human escalation paths"] },
    { name: "Deploy", body: "We release gradually, avoiding peak events and major launches, with monitoring of resolution quality, cost and escalations. Support runs continuously alongside your operations teams.", considerations: ["Service continuity at scale", "Change freezes around peak events", "Ongoing evaluation and monitoring"] },
  ],
  frameworks: [
    { name: "TM Forum Open APIs", note: "Standard REST APIs for telecom business functions that reduce custom integration across billing, ordering and customer systems." },
    { name: "TM Forum Frameworx (eTOM)", note: "A process framework that gives operators a common language for mapping workflows before automating them." },
    { name: "3GPP standards", note: "The specifications for mobile network technologies that define the interfaces and data our network-facing tools must respect." },
    { name: "GSMA guidance", note: "Industry guidance from the mobile operator association on security, privacy and interoperability that informs design choices." },
    { name: "GDPR and India's DPDP Act 2023", note: "Data protection laws governing how subscriber and viewer personal data is collected, used and retained." },
    { name: "Content rights and metadata practice", note: "Rights windows, territories and metadata conventions determine what can be shown where, so data models must represent them accurately." },
  ],
};
