import type { IndustryDetail } from "./types";

export const detail: IndustryDetail = {
  tagline: "From the shop floor to supplier paperwork: reliable uptime, quality and knowledge, with people in control.",
  lead: "Manufacturers combine machines, sensors, people and paperwork that were rarely designed to work together. AI and engineering help by turning machine data into early warnings, making expertise searchable and removing manual document work. We design for plant realities: safety, downtime windows and separated networks.",
  pressures: [
    ["Unplanned downtime", "A stopped line is costly, and maintenance often relies on fixed schedules or the memory of experienced technicians."],
    ["Legacy equipment and data silos", "Plants mix older machines, PLCs and newer systems, so production data is hard to collect and compare across lines and sites."],
    ["Skills and knowledge gaps", "Experienced staff retire while procedures, manuals and fault histories sit in documents that are slow to search."],
    ["Quality, safety and cybersecurity obligations", "Customers and regulators expect traceable quality records and safe operations, while connected plants widen the cyber attack surface."],
  ],
  useCases: [
    ["Predictive maintenance", "Models learn normal behaviour from sensor and maintenance data and flag early signs of wear. Maintenance planners decide when to intervene and feed outcomes back."],
    ["Quality inspection", "Computer vision and statistical checks help spot defects and process drift. Inspectors review flagged items and own the accept or reject decision."],
    ["Shop-floor knowledge assistants", "Technicians ask questions about procedures, manuals and past faults and get answers drawn from approved documents, with sources they can open and check."],
    ["Supplier and quality documentation", "Automation extracts and validates data from certificates, inspection reports and supplier forms, and routes mismatches to quality staff for review."],
    ["Production monitoring with digital twins", "A digital twin mirrors a line using live data, helping teams track throughput, test changes safely and understand where time is lost."],
    ["Inventory and materials planning", "Forecasting and stock visibility support material availability and reorder decisions across plants and warehouses, with planners confirming purchasing."],
  ],
  solutions: [
    { slug: "ai-engineering", why: "Anomaly detection, vision and retrieval models must be built and validated against noisy, real plant data." },
    { slug: "product-engineering", why: "Twins, monitoring dashboards and plant applications need robust engineering that connects to machines and line data." },
    { slug: "intelligent-automation", why: "Supplier, quality and compliance paperwork is repetitive and well suited to automation with human review of exceptions." },
    { slug: "enterprise-ai-solutions", why: "Value comes from connecting AI to ERP, MES and maintenance systems already running the plant." },
    { slug: "ai-infrastructure", why: "Plants often need models to run near the line, so deployment across edge and cloud has to be planned deliberately." },
    { slug: "forward-deployed-engineering", why: "Engineers working alongside plant teams learn the process first, which keeps solutions practical." },
  ],
  products: [
    { slug: "orbs", why: "ORBS, coming soon, is designed for assistants that answer from uploaded PDF, Word, Excel and CSV files using hybrid retrieval, with approval prompts for actions that leave the app." },
    { slug: "shelfwise", why: "Shelfwise, in development, can help with multi-warehouse inventory, demand forecasting with reorder suggestions you confirm, purchase orders and supplier risk scores." },
  ],
  start: [
    {
      name: "Discover",
      body: "We walk the process with operators and engineers, and map data sources, systems and failure modes. We then choose one line or asset class where the value is clear.",
      considerations: ["OT and IT separation", "Legacy PLC and sensor data", "Safety and site access rules"],
    },
    {
      name: "Develop",
      body: "We build against historical data first, then validate alongside current practice. Operators and maintenance staff review outputs before anything influences decisions.",
      considerations: ["Sparse failure examples", "Operator and engineer sign-off", "Edge versus cloud processing"],
    },
    {
      name: "Deploy",
      body: "We roll out in planned stages, aligned with maintenance windows, and keep a manual fallback. Monitoring and 24x7 support continue after go-live.",
      considerations: ["Scheduled downtime windows", "Shop-floor connectivity", "Change control and rollback"],
    },
  ],
  frameworks: [
    { name: "ISO 9001", note: "The quality management standard drives the document control and traceable records that our systems need to support." },
    { name: "ISA-95", note: "It defines how enterprise and control systems relate, a useful model when integrating ERP, MES and plant data." },
    { name: "IEC 62443", note: "This series addresses security for industrial automation and control systems, shaping network zones and access design." },
    { name: "OPC UA", note: "An open, vendor-neutral protocol for exchanging industrial data between machines and software." },
    { name: "OEE", note: "Overall equipment effectiveness is the common measure of availability, performance and quality that monitoring tools report against." },
    { name: "ISO 45001", note: "The occupational health and safety standard frames how digital tools must fit into safe working practice." },
  ],
};
