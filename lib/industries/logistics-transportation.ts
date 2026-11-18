import type { IndustryDetail } from "./types";

export const detail: IndustryDetail = {
  tagline: "Visibility, planning and paperwork, connected across carriers, warehouses and customers.",
  lead: "Logistics runs on many parties, many systems and a steady stream of exceptions. AI and engineering help teams read shipment documents, plan routes and loads, forecast demand and surface delays early, while planners and dispatchers keep the decisions that carry commercial risk.",
  pressures: [
    ["Fragmented visibility", "Shipment status sits across carrier portals, EDI feeds, emails and telematics. Teams reconcile it by hand, so delays are often found after the customer already knows."],
    ["Document-heavy operations", "Bills of lading, commercial invoices, packing lists and customs paperwork arrive in varied formats. Manual re-keying is slow and a single error can hold a consignment."],
    ["Thin margins and volatile demand", "Fuel, capacity and demand shift quickly while rates stay tight. Planning needs to respond faster than spreadsheets and weekly cycles allow."],
    ["Legacy and partner systems", "Transport and warehouse systems are long-lived, and every carrier or customer integrates differently. New capability has to fit around them rather than replace them."],
  ],
  useCases: [
    ["Shipment visibility and exception management", "Status events from carriers, EDI and telematics are consolidated, ETAs are monitored and delays are flagged by severity. Coordinators review the exceptions and decide how to respond."],
    ["Route and load planning", "Pickup requests, often received as free-text email, are parsed into stops and fed to route optimisation. Planners compare options against the baseline and approve the plan."],
    ["Freight document processing", "Bills of lading, invoices and customs paperwork are extracted into structured fields and checked against orders. Low-confidence fields go to a person for review before filing."],
    ["Warehouse stock and replenishment", "Stock levels, bin locations and capacity are tracked across sites, with reorder suggestions based on demand. Procurement staff confirm purchase orders before they are raised."],
    ["Carrier and supplier performance", "On-time delivery, delay patterns and spend are scored per carrier and vendor. Account managers use the evidence in reviews and allocation decisions."],
    ["Demand and capacity forecasting", "Historical volumes and seasonality inform forecasts of demand and capacity needs. Planners treat them as inputs and adjust for known promotions or disruptions."],
  ],
  solutions: [
    { slug: "intelligent-automation", why: "Extracts and validates data from freight documents and routes the exceptions to people for review." },
    { slug: "custom-software", why: "Builds the carrier, EDI and warehouse integrations that give one reliable view across partners." },
    { slug: "ai-engineering", why: "Delivers forecasting, document understanding and email parsing as production applications with evaluation." },
    { slug: "cloud-infrastructure", why: "Provides scalable, monitored infrastructure for event streams and data shared between parties." },
    { slug: "forward-deployed-engineering", why: "Places engineers beside operations teams so tooling fits real dispatch and warehouse workflows." },
    { slug: "managed-services", why: "Keeps integrations and automations running around the clock, in step with operations that never stop." },
  ],
  products: [
    { slug: "shelfwise", why: "Shelfwise, in development, can help with inventory control, inbound shipment tracking with delay alerts, demand forecasting and supplier risk scores. It does not plan routes." },
  ],
  start: [
    { name: "Discover", body: "We map how shipments, documents and exceptions actually move between your teams, carriers and systems. We then pick one workflow where better data or less re-keying has a clear operational payoff.", considerations: ["Multi-party data sharing", "Carrier and EDI integration", "Exception volumes and ownership"] },
    { name: "Develop", body: "We build against real documents, routes and feeds, with confidence thresholds so uncertain cases go to planners. Integrations are tested with partner data formats early, not at the end.", considerations: ["Thin margins and tight schedules", "Varied document formats", "Legacy transport systems"] },
    { name: "Deploy", body: "We roll out alongside current processes, monitor accuracy and delay detection, and support operations around the clock. Teams widen scope once the first workflow is trusted.", considerations: ["Round-the-clock operations", "Warehouse and vehicle connectivity", "Change management for dispatchers"] },
  ],
  frameworks: [
    { name: "GS1 identification standards", note: "Barcodes and identifiers such as GTIN and SSCC let goods and pallets be recognised consistently across partners." },
    { name: "UN/EDIFACT and ANSI X12", note: "These long-established EDI message standards carry orders, shipment notices and invoices between trading partners." },
    { name: "Customs documentation and electronic data exchange", note: "Customs declarations and supporting documents follow national and regional rules, so extracted data must be accurate and traceable." },
    { name: "Driver hours and road safety regulation", note: "Rules on driving time and rest differ by jurisdiction and shape how routes and schedules can be planned." },
    { name: "GDPR and India's DPDP Act 2023", note: "Driver, customer and consignee data is personal data, so tracking and analytics need lawful purpose and sound access control." },
  ],
};
