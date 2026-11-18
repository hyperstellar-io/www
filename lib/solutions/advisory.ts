import type { Detail } from "./types";

export const detail: Record<string, Detail> = {
  "product-engineering": {
    lead: "We take connected products from concept to a supported release: hardware-adjacent firmware, cloud and edge software, and the applications people use to operate them. The work covers industrial IoT, digital twins and smart manufacturing as well as software-only digital products.",
    fit: "For manufacturers, equipment makers and product teams who need to build or modernise a connected product and want one team across embedded, cloud and application layers.",
    gets: [
      ["A working, tested product", "A release that has passed functional, integration and device testing against agreed acceptance criteria, not a prototype handed over untested."],
      ["A connected data foundation", "Devices, gateways and cloud services exchanging telemetry over standard protocols such as MQTT or OPC UA, with a documented data model."],
      ["A usable digital twin or dashboard", "A live representation of assets or processes your operators can query, monitor and use to make decisions."],
      ["A product you can maintain", "Source code, build pipelines, over-the-air update paths and documentation that your own team can take over."],
    ],
    included: [
      ["Digital product development", "Requirements, architecture, web and mobile applications, APIs and backend services, built with automated tests and continuous integration."],
      ["Industrial IoT and digital twins", "Device connectivity, telemetry ingestion, time-series storage and asset models, with twin views that reflect real equipment state."],
      ["Industry 4.0 and smart manufacturing", "Integration with PLCs, SCADA and MES systems, plus shop-floor dashboards for production visibility and condition monitoring."],
      ["Embedded systems", "Firmware for microcontrollers and embedded Linux, board bring-up, RTOS use where needed, and secure boot and update design."],
      ["Product lifecycle management", "Support for managing requirements, configurations, variants and change control across releases, and integration with your PLM tooling."],
      ["Cloud and edge architecture", "Deployment on AWS, Azure or Google Cloud, with edge processing where latency or connectivity requires it."],
      ["Testing and quality engineering", "Unit, integration and hardware-in-the-loop style testing, plus device test reports and defined release criteria."],
      ["Security by design", "Threat modelling, device identity, encrypted transport and a secure update path built into the architecture from the start."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "typically 3 to 6 weeks",
        summary: "We establish what the product must do, for whom, and under what technical constraints, so the build starts from agreed scope and a proven approach.",
        activities: [
          "Stakeholder and user interviews, and site or line visits",
          "Review of existing hardware, protocols and systems",
          "Architecture options and a proof of concept for key risks",
          "Prioritising scope into releases",
        ],
        outputs: ["Product requirements document", "Reference architecture", "Proof-of-concept findings", "Release roadmap and risk register"],
      },
      {
        name: "Develop",
        duration: "typically 3 to 9 months",
        summary: "Iterative delivery across firmware, cloud and applications, with working increments reviewed regularly and tested on real devices.",
        activities: [
          "Sprint-based build with regular demonstrations",
          "Firmware, gateway and cloud service development",
          "Automated testing and device-in-the-loop verification",
          "Security review and performance testing",
        ],
        outputs: ["Tested release candidates", "Device test report", "API and data model documentation", "CI/CD pipelines"],
      },
      {
        name: "Deploy",
        duration: "typically 4 to 8 weeks",
        summary: "We move the product into production use, train your team and set up the monitoring and update processes needed to run it.",
        activities: [
          "Pilot rollout on a limited set of devices or sites",
          "Production cloud setup and monitoring",
          "Operator and engineering training",
          "Hand-over or transition to ongoing support",
        ],
        outputs: ["Production deployment", "Runbook and monitoring dashboards", "Handover pack", "Support and maintenance plan"],
      },
    ],
    engagements: [
      {
        title: "Connected equipment pilot",
        scenario: "An equipment maker wants to offer remote monitoring on existing machines. We prove connectivity on a small fleet, build the telemetry pipeline and a first dashboard, and assess what a full rollout needs.",
        shape: "Small cross-functional team of embedded, cloud and front-end engineers, typically 2 to 4 months, fixed scope with a defined pilot outcome.",
        deliverables: ["Edge gateway software", "Telemetry pipeline on a cloud platform", "Pilot dashboard", "Rollout recommendation"],
      },
      {
        title: "New product build",
        scenario: "A company is launching a new connected product and lacks in-house embedded and cloud capacity. We build firmware, backend and apps together under a shared roadmap.",
        shape: "Dedicated team on a monthly basis, typically 6 to 12 months, with milestone reviews and scope adjusted by agreement.",
        deliverables: ["Production firmware", "Backend and mobile or web apps", "Test and release documentation", "Update and monitoring setup"],
      },
      {
        title: "Plant visibility and twin",
        scenario: "A manufacturer needs a consistent view of production across lines that use different controllers. We connect the data sources, model the assets and build views for operations and maintenance.",
        shape: "Blended onsite and remote team, typically 3 to 6 months, delivered in phases per line or site on a time-and-materials or milestone basis.",
        deliverables: ["Integrated data layer", "Asset model and twin views", "Condition-monitoring alerts", "Operator training material"],
      },
    ],
  },

  "digital-experience": {
    lead: "We research, design and build the websites, commerce platforms and content systems your customers use. Design and engineering work together, so what is designed is what ships, and what ships is accessible and maintainable.",
    fit: "For marketing, product and digital teams who need a new or rebuilt customer-facing experience, or a design system and content platform that several teams can share.",
    gets: [
      ["A researched, tested experience", "Designs grounded in user research and checked with real users before development effort is committed."],
      ["A reusable design system", "Tokens, components and usage guidance in design tools and in code, so teams build consistently and faster over time."],
      ["A site or store that performs", "A fast, responsive build with commerce, search and analytics integrated, tested across devices and browsers."],
      ["Content your team controls", "A headless CMS with structured content models, so editors publish without developer help and content reaches multiple channels."],
    ],
    included: [
      ["UI/UX design and design systems", "User research, journeys, wireframes, prototypes and usability testing, followed by a component library with tokens and documentation."],
      ["Customer experience strategy", "Mapping journeys across channels, finding friction points and defining the experience principles and measures that guide priorities."],
      ["Website development", "Responsive front-end builds, for example with Next.js and TypeScript, with performance budgets, SEO foundations and analytics."],
      ["eCommerce development", "Catalogue, cart, checkout, payments and order integrations, on a commerce platform or a composable setup, with back-office connections."],
      ["Headless CMS", "Content modelling, editorial workflows, roles and previews, with content delivered by API to web, apps and other channels."],
      ["Accessibility services (WCAG)", "Audits and remediation against WCAG 2.2, testing with assistive technologies, and accessible components built into the design system."],
      ["Quality and cross-device testing", "Functional, visual and performance testing across browsers and devices, with defined acceptance criteria."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "typically 3 to 5 weeks",
        summary: "We learn who the users are, how they behave today and what the business needs, then agree the scope and direction for design.",
        activities: [
          "Stakeholder workshops and user interviews",
          "Analytics, content and competitor review",
          "Journey mapping and accessibility baseline audit",
          "Content and platform assessment",
        ],
        outputs: ["Research findings", "Journey maps", "Experience strategy and priorities", "Accessibility audit report"],
      },
      {
        name: "Develop",
        duration: "typically 2 to 5 months",
        summary: "Design and engineering proceed together in short cycles, with prototypes tested early and the build reviewed at each increment.",
        activities: [
          "Wireframes, prototypes and usability testing",
          "Design system and component build",
          "Front-end, CMS and commerce integration development",
          "Accessibility, performance and cross-browser testing",
        ],
        outputs: ["Approved design files", "Design system and component library", "Tested site or store build", "Content model and editor guide"],
      },
      {
        name: "Deploy",
        duration: "typically 3 to 6 weeks",
        summary: "We migrate content, launch in a controlled way and make sure your team can run and extend the platform.",
        activities: [
          "Content migration and redirect planning",
          "Staged launch with monitoring and rollback plan",
          "Editor and developer training",
          "Post-launch review of performance and analytics",
        ],
        outputs: ["Live production site", "Launch checklist and rollback plan", "Handover documentation", "Post-launch improvement backlog"],
      },
    ],
    engagements: [
      {
        title: "UX and accessibility review",
        scenario: "A team suspects its key journeys lose users and may not meet accessibility expectations. We review the experience, test it with users and assistive technology, and set out prioritised fixes.",
        shape: "Small design and accessibility team, typically 3 to 5 weeks, fixed-scope assessment.",
        deliverables: ["UX findings report", "WCAG 2.2 audit", "Prioritised remediation plan", "Design recommendations"],
      },
      {
        title: "Platform rebuild",
        scenario: "An organisation is replacing an ageing website or store with a modern headless setup. We design, build and migrate, working with your marketing and IT teams throughout.",
        shape: "Dedicated team of designers, engineers and QA on a monthly basis, typically 4 to 8 months, with milestone-based reviews.",
        deliverables: ["Design system", "Headless CMS and front-end", "Commerce or content integrations", "Migrated content and launch"],
      },
      {
        title: "Ongoing experience improvement",
        scenario: "After launch, a team wants steady improvement without hiring. We run experiments, ship enhancements and maintain the design system on a regular cadence.",
        shape: "Small retained team, agreed monthly capacity, reviewed quarterly, on a retainer basis.",
        deliverables: ["Monthly release of enhancements", "Design system updates", "Performance and analytics reporting", "Quarterly roadmap review"],
      },
    ],
  },

  "consulting-strategy": {
    lead: "We help leadership teams decide what to change, in what order and with what architecture, before significant build spend begins. The work produces decisions, roadmaps and designs that engineering teams can act on, including a realistic path to using AI.",
    fit: "For executives and technology leaders planning a transformation, an AI programme or an architecture change who need a clear, evidence-based plan.",
    gets: [
      ["A decision-ready strategy", "A clear statement of goals, options considered and recommended direction, agreed with your stakeholders."],
      ["A sequenced roadmap", "Initiatives ordered by value, dependency and risk, with owners, assumptions and the capabilities each one needs."],
      ["A target architecture", "Documented current and target states, principles and standards that guide teams and reduce rework."],
      ["An organisation ready to adopt", "A stakeholder and change plan covering communication, training and the working practices the change depends on."],
    ],
    included: [
      ["Digital transformation strategy", "Assessing current capabilities, defining target outcomes and building a prioritised portfolio with a business case for each initiative."],
      ["AI transformation advisory", "Use-case identification, data and security readiness, build-or-buy options, governance approach and an AI roadmap tied to measurable outcomes."],
      ["Enterprise architecture", "Business, application, data and technology views using TOGAF-style practice, with principles, standards and a target-state architecture."],
      ["Change management", "Stakeholder analysis, communication planning, training and adoption measures so that new tools and processes are actually used."],
      ["Innovation consulting", "Structured discovery workshops, opportunity framing and low-cost prototypes to test ideas before committing to a full build."],
      ["Technology and vendor assessment", "Comparing platforms and suppliers against agreed criteria, including AWS, Azure and Google Cloud where relevant."],
      ["Programme and delivery governance", "Operating model, decision rights, risk tracking and reporting so that the roadmap survives contact with delivery."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "typically 2 to 4 weeks",
        summary: "We establish the current state, the ambitions and the constraints, through interviews and evidence rather than assumption.",
        activities: [
          "Executive and stakeholder interviews",
          "Review of systems, data and existing initiatives",
          "Capability and maturity assessment",
          "Identifying and shortlisting opportunities",
        ],
        outputs: ["Current-state assessment", "Capability map", "Opportunity long list", "Stakeholder map"],
      },
      {
        name: "Develop",
        duration: "typically 3 to 6 weeks",
        summary: "We turn findings into options, test them with your leaders and develop the recommended strategy, architecture and roadmap.",
        activities: [
          "Option analysis and business case modelling",
          "Target architecture and principles design",
          "Roadmap sequencing and dependency mapping",
          "Validation workshops with leadership",
        ],
        outputs: ["Strategy document", "Target architecture", "Prioritised roadmap", "Business cases and risk register"],
      },
      {
        name: "Deploy",
        duration: "typically 2 to 4 weeks, then ongoing support as agreed",
        summary: "We hand over a plan your teams can start on, and can stay involved to guide the first initiatives and the change effort.",
        activities: [
          "Executive readout and decision session",
          "Change and communication plan setup",
          "Mobilising the first initiatives",
          "Governance and review cadence",
        ],
        outputs: ["Executive presentation", "Change and adoption plan", "Initiative briefs", "Governance model"],
      },
    ],
    engagements: [
      {
        title: "AI readiness assessment",
        scenario: "A business wants to use AI but is unsure where to start or whether its data and controls are ready. We assess use cases and readiness, and recommend a short list with a plan.",
        shape: "Two to three consultants, typically 3 to 5 weeks, fixed-scope assessment.",
        deliverables: ["Use-case shortlist", "Data and security readiness report", "AI roadmap", "Governance recommendations"],
      },
      {
        title: "Architecture and transformation roadmap",
        scenario: "A company with a patchwork of systems needs a coherent target state and a staged route to it. We document the landscape, define the architecture and sequence the change.",
        shape: "Consulting team with enterprise architects, typically 6 to 10 weeks, fixed scope with optional follow-on support.",
        deliverables: ["Current and target architecture", "Architecture principles", "Transformation roadmap", "Business case"],
      },
      {
        title: "Embedded advisory",
        scenario: "A leadership team wants ongoing senior input while it executes a multi-year programme. We provide advisors who review designs, steer priorities and support change management.",
        shape: "One or two senior advisors on a retainer, agreed days per month, reviewed quarterly.",
        deliverables: ["Architecture and design reviews", "Quarterly roadmap updates", "Change progress reporting", "Steering committee support"],
      },
    ],
  },

  "managed-services": {
    lead: "We run day-to-day IT, cloud and application operations for you, with 24x7 support coverage. Service is organised around defined processes and agreed service levels, and reviewed with you every month.",
    fit: "For organisations that want dependable operations and support without building a round-the-clock team in-house.",
    gets: [
      ["Round-the-clock support", "A 24x7 service desk and monitoring so users and systems have help at any hour."],
      ["Stable, monitored systems", "Proactive monitoring and alerting that surfaces problems before most users notice them."],
      ["Controlled change and recovery", "Documented incident, problem and change processes, with verified backups and tested recovery steps."],
      ["Transparent service reporting", "Monthly reviews against agreed service levels, with trends, root causes and improvement actions."],
    ],
    included: [
      ["Managed IT and cloud operations", "Day-to-day administration of infrastructure on premises and in AWS, Azure or Google Cloud, including patching, capacity and cost hygiene."],
      ["SOC and NOC", "Network operations monitoring for availability and performance, and security operations monitoring and triage of alerts, with escalation to your team."],
      ["24x7 IT service desk", "Tiered support, with first-line triage and resolution and escalation to specialists, through agreed channels and ticketing."],
      ["Application management services", "Support of business applications covering incident handling, minor enhancements, releases and vendor coordination."],
      ["Database administration", "Backup, restore verification, performance tuning, patching, access control and capacity planning for production databases."],
      ["Incident, problem and change management", "ITIL-style processes: prioritised incidents, root-cause analysis for recurring issues and approved, scheduled changes."],
      ["Backup verification and patching", "Scheduled patch cycles and regular restore tests to confirm that backups work, not only that they ran."],
      ["Monthly service reviews", "Reports on volumes, response and resolution against agreed SLAs, with recurring problems and improvement plans."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "typically 4 to 8 weeks",
        summary: "Onboarding and knowledge transfer: we learn your environment, agree the service model and set up tooling before taking over operations.",
        activities: [
          "Environment inventory and risk review",
          "Knowledge transfer from your team or prior supplier",
          "Agreeing SLAs, escalation paths and processes",
          "Connecting monitoring, ticketing and access",
        ],
        outputs: ["Service catalogue and SLAs", "Asset and dependency inventory", "Onboarding runbooks", "Transition plan"],
      },
      {
        name: "Develop",
        duration: "typically 2 to 3 months",
        summary: "Stabilise and automate: we remove recurring pain points, tune alerting and automate routine tasks, while working to agreed service levels.",
        activities: [
          "Alert tuning and noise reduction",
          "Fixing top recurring incidents through problem management",
          "Automating patching and routine tasks",
          "Testing backup restores and recovery procedures",
        ],
        outputs: ["Tuned monitoring and alerts", "Problem records and fixes", "Automation scripts and runbooks", "Recovery test report"],
      },
      {
        name: "Deploy",
        duration: "ongoing, usually under a 12-month or longer agreement",
        summary: "Steady-state operations: day-to-day service runs under agreed processes, with regular reviews and continual improvement.",
        activities: [
          "24x7 monitoring, service desk and escalation",
          "Scheduled patching and change windows",
          "Monthly service review meetings",
          "Continual service improvement planning",
        ],
        outputs: ["Monthly service report", "Change and incident records", "Improvement plan", "Updated runbooks"],
      },
    ],
    engagements: [
      {
        title: "Full IT operations outsourcing",
        scenario: "A mid-sized company wants one provider to run its service desk, infrastructure and monitoring. We take over after a structured transition and operate to agreed service levels.",
        shape: "Blended service team with a named service manager, multi-year term, monthly recurring fee based on scope and service levels.",
        deliverables: ["24x7 service desk", "Infrastructure monitoring and management", "Monthly SLA reports", "Quarterly service review"],
      },
      {
        title: "Cloud operations support",
        scenario: "A team has moved workloads to the cloud but lacks round-the-clock cover. We monitor, patch and respond to incidents on its AWS, Azure or Google Cloud environment, escalating to your engineers as agreed.",
        shape: "Operations engineers working from a shared runbook, monthly retainer, 12-month term typical.",
        deliverables: ["Cloud monitoring and alerting", "Patch and backup schedule", "Incident response runbooks", "Cost and capacity review"],
      },
      {
        title: "Application and database support",
        scenario: "A business-critical application and its database need steady care. We handle incidents, releases, tuning and backups so your product team can focus on new work.",
        shape: "Application and database specialists on a defined hours or retainer model, with a named lead, reviewed quarterly.",
        deliverables: ["Incident and release handling", "Database health and tuning reports", "Restore test evidence", "Monthly review"],
      },
    ],
  },
};
