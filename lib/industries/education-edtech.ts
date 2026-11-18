import type { IndustryDetail } from "./types";

export const detail: IndustryDetail = {
  tagline: "Learning and student services that scale support, protect privacy and keep educators in control.",
  lead: "Institutions and edtech providers use AI and software to answer student questions, give staff quick access to approved knowledge and join up data scattered across systems. The strongest results keep educators in charge of teaching and assessment, and treat learner privacy as a design constraint.",
  pressures: [
    ["Student support at scale", "Admissions, fees, timetables and policy questions arrive in volume and peaks. Staff time goes to repeated queries instead of students who need real help."],
    ["Fragmented systems", "Learning platforms, student records, finance and content tools rarely share clean data. A single view of a learner or course takes manual effort."],
    ["Privacy of learners and minors", "Student records, and children's data in particular, carry strict legal and ethical duties. Consent, retention and access need careful design."],
    ["Accessibility and equity", "Learners differ in ability, language, device and connectivity. Experiences that work only for some widen gaps."],
  ],
  useCases: [
    ["Student services assistants", "An assistant answers admissions, fee and policy questions from approved documents and cites them. Unresolved or sensitive cases pass to staff with the conversation attached."],
    ["Grounded knowledge assistants for staff", "Faculty and administrators search policies, handbooks and course material in plain language. Answers link to sources, and educators judge what to use."],
    ["Joined-up learner and course data", "Integrations bring records, course and engagement data into one governed view. Access is limited by role and purpose."],
    ["Accessible learning experiences", "Content and interfaces built for screen readers, captions, keyboard use and low bandwidth. Language options widen who can take part."],
    ["Admissions and document processing", "Extraction and validation read transcripts, IDs and forms, flagging gaps. Admissions staff make every decision on applicants."],
    ["Analytics on engagement", "Dashboards show participation and course progress so teams can offer support early. Insights inform people and are never used to automate decisions about a learner."],
  ],
  solutions: [
    { slug: "ai-engineering", why: "Retrieval-based assistants grounded in approved institutional content answer students and staff with sources." },
    { slug: "custom-software", why: "Unified learner platforms and integrations connect records, courses and engagement data." },
    { slug: "digital-experience", why: "Accessible, multilingual web and mobile learning experiences reach learners on any device." },
    { slug: "intelligent-automation", why: "Document capture and workflow automation speed admissions, enrolment and records handling." },
    { slug: "product-engineering", why: "Edtech teams get engineering depth to build and scale learning products reliably." },
    { slug: "managed-services", why: "Round-the-clock operations keep platforms available through admissions and exam peaks." },
  ],
  products: [
    { slug: "orbs", why: "ORBS, coming soon, is designed for persistent assistants with document knowledge and user-editable memory, suited to staff knowledge assistants." },
  ],
  start: [
    { name: "Discover", body: "We review student journeys, staff workflows and the systems that hold learner data. We agree where AI assists and where educators and administrators decide.", considerations: ["Student and minor privacy", "Academic calendars and release windows", "Educator oversight of assessment"] },
    { name: "Develop", body: "We build in small steps with staff and students testing early, grounding assistants in approved content. Accessibility and standards-based integration are built in from the start.", considerations: ["Accessibility for all learners", "Interoperability with existing platforms", "Answers grounded in approved sources"] },
    { name: "Deploy", body: "We roll out ahead of peak periods with monitoring, fallback to human staff and clear communication to users. Operational support continues after launch, with reviews of quality and usage.", considerations: ["Consent and data retention", "Capacity for admissions and exam peaks", "Staff training and handover"] },
  ],
  frameworks: [
    { name: "FERPA", note: "A US law governing access to and disclosure of student education records, shaping role-based access design." },
    { name: "COPPA", note: "A US rule on collecting personal information from children under 13, affecting consent and data minimisation." },
    { name: "GDPR", note: "The EU data protection regulation that sets rules on lawful basis, rights and transfers for learner data." },
    { name: "India's Digital Personal Data Protection Act, 2023", note: "Sets obligations for processing personal data, including that of children, in Indian contexts." },
    { name: "WCAG 2.x", note: "The accessibility standard that learning content and interfaces are commonly built to meet." },
    { name: "1EdTech standards including LTI", note: "Interoperability specifications that let tools plug into learning platforms consistently." },
  ],
};
