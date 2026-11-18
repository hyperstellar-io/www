import type { IndustryDetail } from "./types";

export const detail: IndustryDetail = {
  tagline: "Engineering and AI for healthcare and life sciences, built on patient safety, validation and data protection.",
  lead: "Providers, payers, pharma and device makers apply AI to documentation, supply, quality and research workflows, with clinicians and qualified staff reviewing what matters. Success depends on interoperable data, validated software and careful change management as much as on the models themselves.",
  pressures: [
    ["Patient safety and clinical risk", "Software that touches care or quality records must be tested, controlled and reviewed, with clear human accountability for decisions."],
    ["Fragmented, sensitive data", "Records sit across EHRs, laboratory, imaging and departmental systems, and health data carries strict privacy and access obligations."],
    ["Validated and regulated environments", "Life sciences systems need documented validation, controlled change and trustworthy electronic records."],
    ["Workforce strain and administrative load", "Clinicians and quality staff spend significant time on documentation, coding and reporting rather than care or science."],
  ],
  useCases: [
    ["Clinical documentation support", "Draft summaries and structured notes are prepared from consultations or records, and the clinician reviews, edits and signs before anything enters the record."],
    ["Prior authorisation and claims handling", "Documents are classified, data extracted and rules checked to prepare cases, with staff deciding on exceptions and appeals."],
    ["Patient and member support", "Common questions on appointments, coverage and procedures are answered from approved content, and clinical or sensitive matters go to trained staff."],
    ["Supply and inventory visibility", "Stock levels, expiry and demand across sites are tracked and forecast, so shortages and waste are spotted early by stores and pharmacy teams."],
    ["Regulatory and quality document control", "Retrieval and drafting support help teams find, compare and prepare controlled documents, with qualified reviewers approving the final versions."],
    ["Research and trial data operations", "Pipelines clean, reconcile and monitor trial and laboratory data, flagging anomalies for data managers and investigators to assess."],
  ],
  solutions: [
    { slug: "ai-engineering", why: "Document understanding and retrieval applications designed with evaluation, source citation and clinician review." },
    { slug: "enterprise-ai-solutions", why: "Integration with EHR, laboratory, ERP and quality systems so AI fits existing clinical and operational workflows." },
    { slug: "custom-software", why: "Purpose-built applications for specialised clinical, supply and research processes that off-the-shelf tools do not cover." },
    { slug: "cloud-infrastructure", why: "Secure, access-controlled environments with encryption and regional placement for health data." },
    { slug: "intelligent-automation", why: "Automating claims, authorisation and document workflows while keeping approval steps for qualified staff." },
    { slug: "managed-services", why: "Round-the-clock support for systems that clinical and operational teams depend on every day." },
  ],
  products: [
    { slug: "shelfwise", why: "Shelfwise, in development, can help with multi-warehouse inventory, demand forecasting, a Risk Center for low stock and delayed shipments, and a stock-movement audit log." },
    { slug: "orbs", why: "ORBS, coming soon, is designed for assistants that answer from PDF, Word and spreadsheet files with hybrid retrieval, plus approval prompts before actions that leave the app." },
  ],
  start: [
    { name: "Discover", body: "We work with clinical, operational and quality leads to map the workflow, its data sources and who is accountable. We agree where AI assists and where a qualified person decides.", considerations: ["Patient safety and clinical oversight", "Health data privacy and access", "Intended use and risk classification"] },
    { name: "Develop", body: "We build with de-identified or controlled data and test against cases that reflect real practice. Requirements, tests and changes are documented so they can be reviewed.", considerations: ["Validation and traceability", "Audit trail and electronic records", "Controlled change management"] },
    { name: "Deploy", body: "We release in stages, starting with a limited site or team, with monitoring and a manual fallback. Rollout is planned around clinical schedules to avoid disrupting care.", considerations: ["Downtime windows and continuity", "Clinician training and adoption", "Post-release monitoring"] },
  ],
  frameworks: [
    { name: "HIPAA", note: "US rules that protect health information and set safeguards for systems handling it." },
    { name: "HL7 FHIR", note: "A widely used standard for exchanging health data between systems through modern APIs." },
    { name: "GxP and 21 CFR Part 11", note: "Quality practices and US requirements for trustworthy electronic records and signatures in regulated life sciences." },
    { name: "EU Medical Device Regulation", note: "Governs medical devices in the EU, including software that qualifies as a device." },
    { name: "ICH-GCP", note: "International good clinical practice guidance for the conduct of trials and the integrity of their data." },
    { name: "GDPR and India's DPDP Act 2023", note: "Govern lawful processing and protection of personal data, including health data." },
  ],
};
