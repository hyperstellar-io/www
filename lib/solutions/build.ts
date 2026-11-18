import type { Detail } from "./types";

export const detail: Record<string, Detail> = {
  "intelligent-automation": {
    lead: "We automate repetitive, rules-heavy work: reading documents, moving data between systems, routing requests and answering internal queries. Bots and workflows handle the routine cases, and people handle the exceptions and the judgement calls.",
    fit: "Operations and shared-services leaders with high-volume, rules-heavy processes spread across several systems.",
    gets: [
      ["Documents that enter systems unaided", "Invoices, forms and claims are read, validated and posted, with low-confidence cases sent to a reviewer."],
      ["Routine tasks run by software robots", "Attended and unattended bots handle repeatable steps across applications, including those without APIs."],
      ["A factual view of your processes", "Event-log analysis shows how work really flows, where it stalls and what is worth automating."],
      ["An automation estate you can operate", "Monitoring, exception queues, documentation and a support model, so automations keep working after go-live."],
    ],
    included: [
      ["Process discovery and selection", "Walkthroughs and data from your systems are used to document current steps, then rank candidates by volume, rule clarity, stability and effort."],
      ["Robotic process automation", "Bots built for stable, rules-based tasks, using UI automation or APIs, with credential vaulting, logging, retries and error handling."],
      ["Intelligent document processing", "Capture, classification and field extraction using OCR and language models, with validation rules and a human review screen for uncertain fields."],
      ["Workflow automation", "Multi-step approvals, routing and notifications across systems, with clear ownership, audit trails and escalation rules."],
      ["Process mining and optimisation", "Event logs from ERP, CRM or ticketing systems are analysed to find variants, delays and rework, and to confirm gains after changes."],
      ["AI-powered service desk", "Request triage, suggested answers from your knowledge base and automated routing for internal IT or HR queries, with handover to people."],
      ["Testing and exception handling", "Test cases built from real samples, plus defined paths for failures, missing data and system downtime."],
      ["Operations and monitoring", "Dashboards for volumes, accuracy and exceptions, with run-books and a maintenance plan for when applications change."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "Typically 2 to 4 weeks",
        summary: "We establish how the process actually runs and decide which parts are worth automating, and which are not.",
        activities: [
          "Walk through the process with the people who run it",
          "Analyse event logs or sample documents where available",
          "Score candidates on volume, variability and rule clarity",
          "Agree success measures and the human review points",
        ],
        outputs: ["Process map of current state", "Prioritised automation backlog", "Solution design and success measures"],
      },
      {
        name: "Develop",
        duration: "Typically 6 to 12 weeks",
        summary: "We build and test the automation against real samples, with your process owners reviewing each iteration.",
        activities: [
          "Build bots, extraction models and workflows in iterations",
          "Connect to source systems through APIs or the interface",
          "Design exception queues and review screens",
          "Test with representative and awkward real cases",
        ],
        outputs: ["Working automation in a test environment", "Test report with accuracy results", "Exception handling and review design"],
      },
      {
        name: "Deploy",
        duration: "Typically 3 to 6 weeks",
        summary: "We release on a portion of volume, compare against the baseline, then widen the scope with monitoring running.",
        activities: [
          "Run in parallel with the manual process",
          "Release to production on a subset of volume",
          "Train operators and reviewers on the new flow",
          "Hand over monitoring and support arrangements",
        ],
        outputs: ["Production release", "Operations run-book", "Monitoring dashboards", "Handover pack and training material"],
      },
    ],
    engagements: [
      {
        title: "Document intake and validation",
        scenario: "A team keys data from supplier invoices, onboarding forms or claims into a core system. We extract and validate the fields, post clean records automatically and route doubtful ones to a reviewer.",
        shape: "Small cross-functional team (engineer, analyst, tester) for a defined project, usually a fixed-scope contract, over roughly 2 to 4 months.",
        deliverables: ["Extraction and validation pipeline", "Reviewer screen for exceptions", "Integration with the target system", "Operations run-book"],
      },
      {
        title: "Back-office workflow automation",
        scenario: "Work passes by email and spreadsheet between finance, procurement and operations. We map it, mine the logs where they exist, and automate the hand-offs with bots and workflows where it makes sense.",
        shape: "Dedicated team billed monthly, scaling with the backlog, usually 3 to 6 months for the first wave, then reviewed.",
        deliverables: ["Process maps and automation backlog", "Automated workflows and bots", "Test reports", "Monitoring dashboards"],
      },
      {
        title: "Internal service desk assistant",
        scenario: "Employees raise repetitive IT or HR requests. We add triage, answers drawn from your knowledge base and automated fulfilment of simple requests, with people taking over anything uncertain.",
        shape: "Compact team on a fixed-scope first release, followed by an optional retainer for tuning and new request types.",
        deliverables: ["Request classification and routing", "Knowledge-grounded assistant", "Fulfilment automations", "Quality and usage reporting"],
      },
    ],
  },

  "enterprise-ai-solutions": {
    lead: "We implement and connect the systems at the centre of your business: ERP, CRM, HR, supply chain and service management. Work covers configuration, extension, integration and data migration, with automation and AI added where they help.",
    fit: "IT and business leaders replacing, consolidating or integrating core enterprise systems.",
    gets: [
      ["Core platforms configured to your processes", "Standard capability is used first, with extensions only where your process genuinely differs."],
      ["Systems that exchange data reliably", "Integrations between ERP, CRM, HR and ticketing remove re-keying and conflicting records."],
      ["Clean data in the new system", "Data is profiled, cleansed, mapped and reconciled before and after migration."],
      ["Users ready on day one", "Role-based training, documentation and hypercare support through the stabilisation period."],
    ],
    included: [
      ["ERP implementation", "Fit-gap analysis, configuration, extension, testing and cutover for SAP, Oracle or Microsoft Dynamics 365, covering finance, procurement, inventory and related modules."],
      ["CRM solutions", "Sales, service and marketing processes configured on Salesforce, HubSpot or a custom build, with pipeline, case and reporting design."],
      ["HRMS, supply chain and ticketing platforms", "Implementation or tailoring of HR, supply chain and ticketing systems, including roles, workflows, reports and approvals."],
      ["ServiceNow implementation", "Service catalogue, incident, request and change workflows, plus routing rules and integrations with the systems that fulfil requests."],
      ["Enterprise application integration", "APIs, events and middleware connecting applications, with error handling, monitoring and documented interfaces."],
      ["Business process automation", "Approvals, notifications and data hand-offs automated inside and across platforms, with audit trails."],
      ["Data migration and reconciliation", "Source profiling, cleansing rules, trial loads and reconciliation reports that finance and operations can sign off."],
      ["Testing, training and hypercare", "Integration and user acceptance testing, role-based training, and elevated support after cutover."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "Typically 3 to 8 weeks",
        summary: "We document your processes and systems, then agree what to configure, extend, integrate or build.",
        activities: [
          "Workshop current and target processes with each function",
          "Run a fit-gap analysis against the chosen platform",
          "Inventory systems, interfaces and data sources",
          "Agree scope, release plan and governance",
        ],
        outputs: ["Fit-gap analysis", "Solution and integration architecture", "Data migration approach", "Implementation plan"],
      },
      {
        name: "Develop",
        duration: "Typically 3 to 9 months",
        summary: "We configure, extend and integrate in stages, testing each release with the people who will use it.",
        activities: [
          "Configure modules in iterations with business reviews",
          "Build extensions, reports and integrations",
          "Run trial data migrations and reconciliations",
          "Execute integration, regression and user acceptance testing",
        ],
        outputs: ["Configured and tested solution", "Interface specifications", "Test and reconciliation reports", "Training material"],
      },
      {
        name: "Deploy",
        duration: "Typically 4 to 10 weeks",
        summary: "We migrate data, train users and cut over, then support the business through stabilisation.",
        activities: [
          "Rehearse cutover and agree go or no-go criteria",
          "Perform final data load and reconciliation",
          "Train users by role",
          "Provide hypercare and triage early issues",
        ],
        outputs: ["Cutover plan and sign-off record", "Production go-live", "Support and escalation model", "Handover documentation"],
      },
    ],
    engagements: [
      {
        title: "ERP or CRM implementation",
        scenario: "A business moves from ageing or fragmented systems to a single platform. We run discovery, configure the modules, migrate data and take the organisation through cutover.",
        shape: "Blended team (solution architect, consultants, developers, testers, project lead) over 6 to 12 months, often a fixed-scope contract per phase.",
        deliverables: ["Configured platform", "Migrated and reconciled data", "Integration set", "Training and hypercare"],
      },
      {
        title: "Service management rollout",
        scenario: "IT or shared-services requests arrive by email and phone. We implement ServiceNow or an equivalent platform with a catalogue, automated routing and approvals tied to your fulfilment teams.",
        shape: "Small team over 3 to 6 months, fixed-scope first release, then monthly capacity for further workflows.",
        deliverables: ["Service catalogue and workflows", "Routing and approval rules", "Reporting dashboards", "Admin documentation"],
      },
      {
        title: "Integrating finance, HR and supply chain data",
        scenario: "Several systems hold overlapping records and teams reconcile them by hand. We design the interfaces, build them with monitoring and agree who owns each data element.",
        shape: "Dedicated integration squad billed monthly, typically 3 to 6 months, then optional retainer for support.",
        deliverables: ["Interface specifications", "Integration services with monitoring", "Data ownership model", "Support run-book"],
      },
    ],
  },

  "cloud-infrastructure": {
    lead: "We plan and carry out moves to AWS, Azure or Google Cloud, modernise applications to use the platform well, and set up the security, resilience and cost controls that keep an estate healthy. Environments are defined as code so they can be repeated and audited.",
    fit: "Technology leaders migrating, modernising or tightening control over their cloud estates.",
    gets: [
      ["A sequenced migration plan", "Applications are assessed and assigned a migration strategy, then grouped into waves with rollback steps."],
      ["A secure, governed foundation", "A landing zone with account structure, identity, network and policy guardrails in place before workloads arrive."],
      ["Repeatable delivery", "Infrastructure as code and CI/CD pipelines make environments and releases consistent."],
      ["Resilience and cost under control", "Tested backup and recovery procedures, plus spend visibility by team and workload."],
    ],
    included: [
      ["Cloud strategy and migration", "Estate discovery, dependency mapping and a choice among the 6 Rs (rehost, replatform, refactor, repurchase, retire, retain) per application, with wave plans."],
      ["Landing zone and foundations", "Account or subscription structure, identity and access, networking, logging and baseline policies, defined as code."],
      ["Cloud-native development", "Applications rebuilt or extended with containers, managed services, serverless components and managed databases where they fit."],
      ["DevOps and CI/CD automation", "Build, test and release pipelines, infrastructure as code with Terraform or native tools, and environment promotion with approvals."],
      ["Cloud security and governance", "Least-privilege access, secrets management, encryption, policy-as-code, vulnerability scanning and audit logging aligned to your own policies."],
      ["FinOps and cost optimisation", "Tagging standards, cost allocation, budgets and alerts, rightsizing reviews and regular reporting for engineering and finance."],
      ["Disaster recovery and continuity", "Recovery objectives agreed with the business, backup design, failover architecture and documented, rehearsed recovery runbooks."],
      ["Observability and operational handover", "Metrics, logs, traces and alerting, plus operating procedures so your team or ours can run the estate."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "Typically 3 to 6 weeks",
        summary: "We assess what you run today, decide how each workload should move, and agree the target architecture and guardrails.",
        activities: [
          "Inventory applications, data and dependencies",
          "Assign a migration strategy to each workload",
          "Review security, compliance and recovery requirements",
          "Estimate run costs and sequence migration waves",
        ],
        outputs: ["Cloud assessment report", "Target architecture", "Migration wave plan", "Cost model and risk register"],
      },
      {
        name: "Develop",
        duration: "Typically 6 to 16 weeks",
        summary: "We build the landing zone and automation, then prepare and test each workload before it moves.",
        activities: [
          "Provision the landing zone as code",
          "Build CI/CD pipelines and environment templates",
          "Refactor or replatform selected applications",
          "Test performance, security and failover in staging",
        ],
        outputs: ["Landing zone and infrastructure code", "Pipelines and deployment templates", "Test report", "Draft DR and rollback runbooks"],
      },
      {
        name: "Deploy",
        duration: "Typically 2 to 6 months, in waves",
        summary: "We migrate wave by wave with rollback ready, then establish routine operations, security reviews and cost reporting.",
        activities: [
          "Rehearse and execute each migration wave",
          "Validate data integrity and application behaviour",
          "Run a recovery test and decommission old systems",
          "Set up cost, security and operations reviews",
        ],
        outputs: ["Migrated workloads in production", "Tested DR runbooks", "FinOps reporting", "Operations handover pack"],
      },
    ],
    engagements: [
      {
        title: "Phased migration of a core platform",
        scenario: "A business-critical system runs in a data centre that is reaching end of life. We assess, plan and migrate it in waves, choosing rehost or replatform per component.",
        shape: "Cloud architect, engineers and a project lead over 4 to 9 months, usually a fixed-scope plan phase followed by monthly team billing for execution.",
        deliverables: ["Assessment and migration plan", "Landing zone", "Migrated workloads", "Cutover and rollback runbooks"],
      },
      {
        title: "Disaster recovery design and test",
        scenario: "Critical workloads lack a documented, tested recovery path. We agree recovery objectives with the business, design the solution, implement it and run a recovery exercise with your team.",
        shape: "Small team over 6 to 12 weeks, fixed-scope project, with an optional retainer for periodic recovery tests.",
        deliverables: ["Recovery objectives and design", "Backup and failover implementation", "Recovery runbooks", "Test exercise report"],
      },
      {
        title: "Cloud security and cost review",
        scenario: "An estate grew quickly across teams and accounts. We review access, configuration and spend, then fix the highest-risk and highest-cost findings with your engineers.",
        shape: "One or two specialists over 3 to 6 weeks as a fixed-scope review, with optional ongoing monthly capacity for remediation.",
        deliverables: ["Findings and prioritised actions", "Policy and tagging baseline", "Cost allocation reporting", "Remediation of agreed items"],
      },
    ],
  },

  "custom-software": {
    lead: "We design and build web, mobile and API-driven software around your users and workflows. Work is done in short iterations with automated testing and security checks, so the result is dependable and can keep changing with your business.",
    fit: "Businesses that need software no off-the-shelf product provides, or that must modernise an application they already depend on.",
    gets: [
      ["Software shaped around your workflow", "Requirements, screens and data models come from your real users and processes, not a template."],
      ["A first release that proves value early", "A deliberately small initial scope goes live first, then grows based on real usage."],
      ["Quality you can verify", "Automated tests, code review and security scanning run on every change, with results visible to you."],
      ["A codebase you own and can extend", "Modular architecture, documented APIs and a full handover, so any capable team can continue the work."],
    ],
    included: [
      ["Web and mobile applications", "Responsive web applications and native or cross-platform mobile apps, with accessible interfaces, authentication and role-based access."],
      ["API development and integration", "Documented REST or GraphQL interfaces, with versioning, authentication and connections to your existing systems and third-party services."],
      ["Microservices architecture", "Services split along business boundaries where scale or team structure justifies it, with sensible data ownership and a modular monolith as an option."],
      ["SaaS product development", "Multi-tenant design, subscription and billing integration, admin tooling, usage analytics and the operational basics of running a product."],
      ["Legacy modernisation", "Incremental replacement or re-platforming of ageing applications, keeping the business running while components move, rather than one risky rewrite."],
      ["Testing and QA", "Unit, integration and end-to-end tests, performance checks and structured acceptance testing before each release."],
      ["DevSecOps", "CI/CD pipelines with dependency and static code scanning, secrets handling and repeatable deployments to the cloud of your choice."],
      ["Documentation and handover", "Architecture notes, API references, runbooks and walkthroughs for your engineers, plus support after launch."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "Typically 2 to 4 weeks",
        summary: "We define users, workflows and priorities, and agree a first release small enough to ship early.",
        activities: [
          "Interview users and map key workflows",
          "Prioritise features into a release roadmap",
          "Choose architecture, stack and integration points",
          "Prototype critical screens and test them with users",
        ],
        outputs: ["Product backlog and roadmap", "Architecture overview", "Clickable prototype", "Estimate and delivery plan"],
      },
      {
        name: "Develop",
        duration: "Typically 2 to 6 months, in sprints",
        summary: "We build in short iterations, showing working software regularly, with testing and security checks running continuously.",
        activities: [
          "Deliver in two-week sprints with demos",
          "Write automated tests alongside features",
          "Run code review and security scans on each change",
          "Integrate with existing systems and test end to end",
        ],
        outputs: ["Working software increments", "Automated test suite", "Test and security report", "API documentation"],
      },
      {
        name: "Deploy",
        duration: "Typically 2 to 4 weeks, then ongoing",
        summary: "We release with monitoring and rollback in place, hand over documentation, and keep improving from real usage.",
        activities: [
          "Set up production environment and pipeline",
          "Run performance and acceptance testing",
          "Release in stages with monitoring",
          "Train users and hand over to your team",
        ],
        outputs: ["Production release", "Monitoring and alerting", "Deployment runbook", "Handover pack"],
      },
    ],
    engagements: [
      {
        title: "Customer or partner portal",
        scenario: "Customers or partners rely on emails and phone calls for orders, status and documents. We build a secure portal connected to your back-end systems, starting with the most-used journey.",
        shape: "Small product team (engineers, designer, tester) over 3 to 5 months, typically a fixed-scope project for release one.",
        deliverables: ["Web portal with role-based access", "Integration APIs", "Automated tests", "Handover documentation"],
      },
      {
        title: "Staged legacy modernisation",
        scenario: "A critical application is hard to change and tied to unsupported technology. We carve it into components, replace them in order of risk and value, and keep the business running throughout.",
        shape: "Dedicated team billed monthly, typically 6 to 18 months, reviewed at each release milestone.",
        deliverables: ["Modernisation roadmap", "Replaced components in production", "Regression test suite", "Updated architecture documents"],
      },
      {
        title: "SaaS product build and growth",
        scenario: "A company is turning an internal capability or new idea into a subscription product. We build the first release, then continue to extend it as customers use it.",
        shape: "Dedicated product team on a monthly basis, scaling up or down by release, often moving to a retainer after launch.",
        deliverables: ["Multi-tenant application", "Billing and admin tooling", "CI/CD pipeline", "Usage analytics"],
      },
    ],
  },
};
