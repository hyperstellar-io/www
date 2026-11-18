import type { IndustryDetail } from "./types";

export const detail: IndustryDetail = {
  tagline: "Digital public services that are accessible, secure and fair, with people deciding what affects rights.",
  lead: "Public bodies use AI and software to answer citizens faster, digitise paper records and route applications to the right desk. The work succeeds when it is accessible, auditable and built to fit existing systems, with officials keeping every decision that affects a person's rights.",
  pressures: [
    ["Rising service demand", "Citizens expect fast answers across channels while teams stay fixed in size. Queues build when requests arrive unstructured and are triaged by hand."],
    ["Legacy and paper records", "Case files, registers and forms often sit in scanned documents and ageing systems. Finding, reusing and linking that information is slow and error-prone."],
    ["Data protection and sovereignty", "Citizen data carries strict handling, residency and access rules. Any new system must show where data lives and who can see it."],
    ["Inclusion and accountability", "Services must work for people of every ability, language and device. Decisions must be explainable, reviewable and open to audit."],
  ],
  useCases: [
    ["Citizen service request resolution", "An assistant answers routine questions from approved sources, and structures the rest into tickets with context attached. Officials handle exceptions and keep the final say."],
    ["Digitising paper case files", "Scanning, text extraction and classification turn archives into searchable records. Staff review low-confidence extractions before data enters a system of record."],
    ["Grievance and application triage", "Incoming submissions are classified, checked for completeness and routed to the right department. A person decides any outcome that affects entitlements or rights."],
    ["Accessible multilingual front doors", "Web and mobile services built to accessibility standards, with content in local languages. Assistive technology and low-bandwidth use are tested from the start."],
    ["Records and policy search", "Semantic search across circulars, orders and past decisions, with answers linked to the source document. Staff verify the citation before acting."],
    ["Inter-department data integration", "APIs and governed data pipelines connect separate departmental systems, so citizens submit information once. Access follows role and purpose."],
  ],
  solutions: [
    { slug: "intelligent-automation", why: "Document capture, classification and routing reduce manual handling of forms, files and applications." },
    { slug: "digital-experience", why: "Accessible, multilingual web and mobile services give every citizen a usable front door." },
    { slug: "enterprise-ai-solutions", why: "Grounded assistants and search help staff and citizens find answers in policy and records." },
    { slug: "custom-software", why: "Purpose-built case management and integration layers fit the way departments actually work." },
    { slug: "cloud-infrastructure", why: "Hosting designed around residency, access control and resilience requirements for public data." },
    { slug: "consulting-strategy", why: "Roadmaps and governance help agencies sequence change within procurement and approval cycles." },
  ],
  products: [
    { slug: "lumen", why: "Lumen, in development with a beta planned, can help teams log citizen requests as tickets, including from a shared mailbox, and track them on boards with an audit log and optional AI help that staff apply." },
  ],
  start: [
    { name: "Discover", body: "We map service journeys, existing systems and data flows with the teams who run them. We agree which steps AI may assist and which stay with officials.", considerations: ["Procurement and approval cycles", "Data classification and residency", "Human decisions on rights-affecting outcomes"] },
    { name: "Develop", body: "We build in small increments on open standards and documented APIs, testing with real staff and citizens. Accessibility and audit trails are designed in, not added later.", considerations: ["Accessibility for all users", "Interoperability with legacy systems", "Explainable, reviewable outputs"] },
    { name: "Deploy", body: "We release in stages with monitoring, rollback plans and training for frontline staff. Support covers operations around the clock, and results are reviewed with the agency.", considerations: ["Citizen privacy and access control", "Security review and sign-off", "Continuity of public services"] },
  ],
  frameworks: [
    { name: "WCAG 2.x", note: "The widely used accessibility standard that public digital services are commonly expected to meet." },
    { name: "India's Digital Personal Data Protection Act, 2023", note: "Sets obligations for processing personal data, which shapes consent, retention and access design." },
    { name: "GIGW guidelines", note: "Guidelines for Indian government websites and apps covering accessibility, usability and content quality." },
    { name: "NIST Cybersecurity Framework", note: "A common vocabulary for identifying, protecting against, detecting and recovering from security risk." },
    { name: "Data residency and sovereignty requirements", note: "Rules on where public data is stored and processed, which drive hosting and vendor architecture." },
    { name: "Open standards and public procurement rules", note: "Interoperability practice and tendering norms influence technology choices and avoid lock-in." },
  ],
};
