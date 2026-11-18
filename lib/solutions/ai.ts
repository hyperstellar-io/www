import type { Detail } from "./types";

export const detail: Record<string, Detail> = {
  "ai-engineering": {
    lead: "We design and build AI applications that people rely on day to day: assistants, agents, retrieval systems and predictive models. Each one is engineered around your data, your workflows and a quality bar agreed before build starts.",
    fit: "Engineering and product leaders turning an AI idea or pilot into a dependable production system.",
    gets: [
      ["A working application in production", "A deployed system with authentication, logging and release pipelines, not a notebook or a demo."],
      ["A measured quality baseline", "A fixed evaluation set and report, so you can tell whether each change improves or degrades results."],
      ["Controls your risk teams can review", "Documented guardrails, access rules, data handling and human approval points for the decisions that need them."],
      ["A team able to own it", "Architecture documentation, runbooks and training, so ownership sits with your engineers after launch."],
    ],
    included: [
      ["AI strategy and use-case shortlisting", "Candidate use cases scored on value, data readiness and risk, ending in a ranked shortlist and a first build with a defined success measure."],
      ["Generative AI applications", "Design and build of user-facing features on hosted or self-managed models, including prompt design, structured outputs, and fallbacks when a model fails."],
      ["Agents and copilots", "Multi-step workflows built with frameworks such as LangGraph, with tool access limited by role, step limits, and human approval for consequential actions."],
      ["Retrieval-augmented generation", "Ingestion, chunking, embeddings, a vector or hybrid search index, reranking and citations, tested against questions your users actually ask."],
      ["Machine learning, NLP and computer vision", "Classification, extraction, forecasting and vision models, from feature work and training through validation against held-out data."],
      ["Custom and fine-tuned models", "Where prompting and retrieval fall short, supervised fine-tuning or smaller task-specific models, justified against a baseline before any training spend."],
      ["Data engineering and MLOps", "Pipelines, data quality checks, experiment tracking and model registries, with versioned datasets, prompts and models."],
      ["Responsible AI and governance", "Risk assessment, evaluation for bias and failure modes, audit logging and documentation aligned to your internal policy and applicable regulation."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "Typically 2 to 4 weeks",
        summary: "Agree what to build, what good looks like and whether the data can support it, before committing to a full build.",
        activities: [
          "Workshops with users, owners and security stakeholders",
          "Data audit covering access, quality, volume and sensitivity",
          "Draft evaluation set built with your domain experts",
          "Option comparison across build approaches and model choices",
        ],
        outputs: [
          "Use-case shortlist with scoring",
          "Data readiness assessment",
          "Architecture decision record",
          "Success criteria and evaluation plan",
        ],
      },
      {
        name: "Develop",
        duration: "Typically 6 to 12 weeks",
        summary: "Build in short iterations, scoring every change against the evaluation set, with your team reviewing working software throughout.",
        activities: [
          "Iterative build with fortnightly demos to your team",
          "Automated evaluation run on every significant change",
          "Guardrail, access control and logging implementation",
          "Integration with your identity, data and application systems",
        ],
        outputs: [
          "Application source in your repository",
          "Evaluation report with failure analysis",
          "Security and data-flow documentation",
          "Test suite and CI pipeline",
        ],
      },
      {
        name: "Deploy",
        duration: "Typically 2 to 4 weeks",
        summary: "Release gradually behind an evaluation gate, with monitoring and rollback in place, then transfer ownership to your team.",
        activities: [
          "Staged rollout to a pilot group before wider release",
          "Monitoring for quality, latency, errors and spend",
          "Rollback and incident response rehearsal",
          "Training sessions for engineers and support staff",
        ],
        outputs: [
          "Production runbook",
          "Monitoring dashboards and alert rules",
          "Handover pack with architecture documentation",
          "Backlog of recommended next improvements",
        ],
      },
    ],
    engagements: [
      {
        title: "Knowledge assistant on internal documents",
        scenario: "Staff lose time searching policies, contracts and manuals spread across several systems. We build a retrieval-based assistant that answers with citations and respects existing document permissions.",
        shape: "Small cross-functional team: an engineer lead, an AI engineer and a part-time designer. Typically 8 to 14 weeks, fixed scope for the first release.",
        deliverables: [
          "Ingestion pipeline and search index",
          "Assistant interface with cited answers",
          "Evaluation set and quality report",
          "Runbook and handover documentation",
        ],
      },
      {
        title: "Agent for a multi-step workflow",
        scenario: "A team handles requests that span several systems and need judgement at key points. We build an agent that gathers context, drafts the action and asks a person to approve before anything changes.",
        shape: "Two to three engineers plus a part-time architect. Typically 10 to 16 weeks, starting with a fixed-scope pilot and continuing on a monthly team basis.",
        deliverables: [
          "Agent workflow with defined tools and limits",
          "Approval and audit-trail mechanism",
          "Evaluation harness covering task completion",
          "Monitoring and operating guide",
        ],
      },
      {
        title: "Predictive model inside an existing product",
        scenario: "A product team wants forecasting or classification embedded in an application it already runs. We prepare the data, train and validate the model, and serve it through your existing release process.",
        shape: "A data engineer and a machine learning engineer, with product input from your side. Typically 8 to 12 weeks, fixed scope with a defined acceptance test.",
        deliverables: [
          "Data pipeline with quality checks",
          "Validated model and model card",
          "Serving endpoint integrated into the product",
          "Retraining and monitoring plan",
        ],
      },
    ],
  },

  "llm-inference": {
    lead: "Language models are simple to demo and harder to run well at scale. We measure how your application uses them, then tune model choice, routing, retrieval, prompts and serving so that quality, response time and cost meet targets you set.",
    fit: "Teams whose model costs or response times are growing faster than the value the application delivers.",
    gets: [
      ["A clear picture of where spend goes", "Cost, latency and quality broken down by feature, prompt and model, drawn from your own traffic."],
      ["The right model for each task", "A comparison across providers and sizes on your data, so routine requests do not use the heaviest model."],
      ["Faster, leaner responses", "Shorter prompts, better retrieval, caching and streaming that reduce tokens consumed and waiting time."],
      ["Quality that stays visible", "Evaluation and monitoring on live traffic, so regressions are caught by alerts rather than user complaints."],
    ],
    included: [
      ["Baseline measurement", "Tracing of prompts, tokens, latency and cost per request and per feature, creating the reference every later change is compared against."],
      ["Model selection and evaluation", "An evaluation harness with task-specific test sets and scoring, comparing hosted and open-weight models on quality, latency and cost."],
      ["Model routing", "A gateway layer that sends each request to a suitable model by task, with fallbacks across providers when one is slow or unavailable."],
      ["Retrieval and prompt optimisation", "Tuned chunking, reranking and context selection, plus prompt revisions and structured outputs that cut tokens without losing accuracy."],
      ["Caching and request handling", "Exact and semantic caching where answers can safely repeat, along with batching, streaming and timeouts suited to the workload."],
      ["Latency and cost tuning", "Where self-hosting is justified, serving on an engine such as vLLM with quantisation and batching, with budgets and rate limits for the rest."],
      ["Guardrails", "Input and output checks for sensitive data, prompt injection, policy violations and malformed output, tested against adversarial examples."],
      ["Observability and monitoring", "OpenTelemetry-based tracing, dashboards, quality sampling and alerts on cost, latency and quality drift."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "Typically 1 to 3 weeks",
        summary: "Establish where cost and delay come from, and define what an acceptable result means for each use case.",
        activities: [
          "Instrument the application to capture tokens, latency and cost",
          "Sample real traffic and label a representative test set",
          "Review prompts, retrieval flow and provider contracts",
          "Agree targets for quality, latency and monthly spend",
        ],
        outputs: [
          "Baseline cost and latency report",
          "Evaluation set with scoring method",
          "Prioritised optimisation backlog",
          "Target definitions signed off by your team",
        ],
      },
      {
        name: "Develop",
        duration: "Typically 3 to 8 weeks",
        summary: "Test candidate changes against the evaluation set and build the routing, caching and guardrail layers that proved their worth.",
        activities: [
          "Run candidate models through the evaluation harness",
          "Tune retrieval and prompts, re-scoring after each change",
          "Build routing, caching and fallback logic",
          "Red-team guardrails with adversarial test cases",
        ],
        outputs: [
          "Model comparison report",
          "Routing and gateway service",
          "Guardrail configuration and test results",
          "Architecture decision record",
        ],
      },
      {
        name: "Deploy",
        duration: "Typically 2 to 4 weeks",
        summary: "Roll changes out in stages with live monitoring, so any regression is visible and reversible straight away.",
        activities: [
          "Shadow or canary release against live traffic",
          "Set budgets, rate limits and alert thresholds",
          "Connect tracing to your existing observability stack",
          "Train your team to extend the evaluation set",
        ],
        outputs: [
          "Monitoring dashboards and alert rules",
          "Rollback and incident runbook",
          "Before-and-after comparison against baseline",
          "Handover pack",
        ],
      },
    ],
    engagements: [
      {
        title: "Cost and latency review",
        scenario: "An LLM feature is live and the monthly bill keeps rising. We instrument it, locate the largest sources of spend and delay, and deliver a ranked set of changes with the evidence behind each.",
        shape: "One or two engineers for a fixed-scope review of typically 2 to 4 weeks, with optional follow-on implementation agreed separately.",
        deliverables: [
          "Baseline measurement report",
          "Ranked optimisation recommendations",
          "Evaluation set for future changes",
          "Implementation plan with effort estimates",
        ],
      },
      {
        title: "Multi-provider routing layer",
        scenario: "Several teams call different model providers directly, with no shared view of cost or reliability. We build a gateway that routes by task, applies fallbacks and gives one place to enforce limits and policy.",
        shape: "Two to three engineers working with your platform team. Typically 6 to 10 weeks, delivered as a fixed-scope build or on a monthly team basis.",
        deliverables: [
          "Routing gateway with provider fallbacks",
          "Usage and cost reporting by team",
          "Access and rate-limit policies",
          "Operations runbook",
        ],
      },
      {
        title: "Evaluation and guardrails before launch",
        scenario: "A customer-facing assistant is about to go public and the team needs confidence in how it behaves under unusual or hostile input. We build the evaluation suite and safety layer and run structured adversarial testing.",
        shape: "A small team of two engineers for typically 4 to 8 weeks, fixed scope, with an optional retainer for ongoing evaluation upkeep.",
        deliverables: [
          "Evaluation suite wired into CI",
          "Guardrail layer with tests",
          "Adversarial testing report",
          "Launch readiness checklist",
        ],
      },
    ],
  },

  "ai-infrastructure": {
    lead: "AI workloads place different demands on infrastructure than ordinary applications: scarce accelerators, large artefacts, variable load and sensitive data. We build the cloud and platform foundations on AWS, Azure or Google Cloud that run them reliably, securely and at a cost you can forecast.",
    fit: "Platform, DevOps and security teams preparing to run AI workloads in production on AWS, Azure or Google Cloud.",
    gets: [
      ["A platform defined as code", "Environments created from a Terraform repository, so builds are repeatable and reviewable instead of hand configured."],
      ["Releases that are routine", "CI/CD and MLOps pipelines that test, package and promote models and services through controlled stages."],
      ["Security you can evidence", "Least-privilege access, network isolation, secrets management and audit logging, documented for your security reviewers."],
      ["Visibility into health and cost", "Dashboards and alerts for reliability and performance, with spend attributed to teams and workloads."],
    ],
    included: [
      ["Cloud architecture for AI workloads", "Reference architecture for AWS, Azure or Google Cloud covering accounts or subscriptions, networking, storage, GPU or accelerator capacity and data locality."],
      ["Landing zone and environments", "Separate development, staging and production environments with consistent configuration, defined as code in Terraform."],
      ["Containerisation and Kubernetes", "Docker images and Kubernetes deployments with autoscaling, resource limits and, where needed, GPU node pools and scheduling."],
      ["CI/CD pipelines", "Automated build, test, scan and deployment for applications and infrastructure, with approvals and environment promotion."],
      ["MLOps pipelines", "Experiment tracking, model registry, reproducible training and gated model promotion, using tools such as MLflow where they fit."],
      ["Monitoring and observability", "Metrics, logs and traces using OpenTelemetry-compatible tooling, with service-level objectives and alerting routed to your on-call process."],
      ["Cost control (FinOps)", "Tagging standards, budgets, anomaly alerts and utilisation reviews, so spend on compute and model usage is attributed and managed."],
      ["Security, access control and governance", "Identity and role design, secrets handling, network policy, encryption and audit logs, mapped to your internal control requirements."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "Typically 2 to 4 weeks",
        summary: "Understand the workloads, constraints and existing estate, then agree a target architecture and cost envelope.",
        activities: [
          "Review workloads, traffic patterns and data sensitivity",
          "Assess current cloud, network and identity setup",
          "Capture security, residency and compliance requirements",
          "Estimate capacity and run-cost scenarios",
        ],
        outputs: [
          "Current-state assessment",
          "Target architecture and decision record",
          "Cost model with assumptions stated",
          "Delivery plan with milestones",
        ],
      },
      {
        name: "Develop",
        duration: "Typically 4 to 10 weeks",
        summary: "Build the platform, pipelines and controls as code, and prove them with a real workload before wider adoption.",
        activities: [
          "Write infrastructure as code and review it with your team",
          "Build container images, clusters and deployment manifests",
          "Implement pipelines with automated tests and security scans",
          "Configure observability, access policies and budgets",
        ],
        outputs: [
          "Infrastructure as code repository",
          "CI/CD and MLOps pipeline definitions",
          "Observability dashboards and alert rules",
          "Security configuration documentation",
        ],
      },
      {
        name: "Deploy",
        duration: "Typically 2 to 4 weeks",
        summary: "Move workloads over in stages, test failure handling, and hand the platform to the team that will operate it.",
        activities: [
          "Staged migration of workloads with rollback points",
          "Load and failover testing before cutover",
          "Cost and access review after first production traffic",
          "Operations training with your platform team",
        ],
        outputs: [
          "Operations runbook",
          "Disaster recovery and rollback procedures",
          "Handover pack",
          "Post-launch review with follow-up actions",
        ],
      },
    ],
    engagements: [
      {
        title: "Secure landing zone for AI workloads",
        scenario: "A company is starting to run AI workloads and needs an environment its security team will approve. We design and build the account structure, network, identity and baseline controls as code.",
        shape: "A cloud architect and one or two platform engineers. Typically 6 to 10 weeks, fixed scope with defined acceptance criteria.",
        deliverables: [
          "Landing zone in Terraform",
          "Network and identity design",
          "Baseline security controls and logging",
          "Operations documentation",
        ],
      },
      {
        title: "Prototype to production pipeline",
        scenario: "A data science team has a working prototype that runs from a laptop or a single server. We containerise it, add tests and pipelines, and deploy it onto Kubernetes with monitoring and a repeatable release process.",
        shape: "Two engineers, one with MLOps focus, working alongside your data scientists. Typically 6 to 12 weeks on a monthly team basis.",
        deliverables: [
          "Containerised service and deployment manifests",
          "CI/CD and model promotion pipeline",
          "Monitoring and alerting setup",
          "Runbook and team training",
        ],
      },
      {
        title: "Cost and observability controls",
        scenario: "Inference-heavy systems are running, but nobody can say which team or feature drives spend, and incidents take long to diagnose. We add tagging, attribution, budgets, tracing and clear alerting.",
        shape: "One or two engineers for typically 4 to 8 weeks as a fixed-scope project, with an optional retainer for ongoing reviews.",
        deliverables: [
          "Cost attribution and budget alerts",
          "Tracing and dashboards",
          "Utilisation review with recommendations",
          "Alerting and escalation guide",
        ],
      },
    ],
  },

  "forward-deployed-engineering": {
    lead: "Hyperstellar engineers work inside your environment, beside your team, on your real data and workflows. They scope the problem, prototype quickly, harden what works for production and hand it over with documentation and training.",
    fit: "Leaders with an ambiguous, high-stakes problem who need working software sooner than a long specification phase allows.",
    gets: [
      ["Evidence before commitment", "A working prototype on your own data shows what is feasible and what is not, before a full build is funded."],
      ["Fewer handoffs", "The engineers who learn your workflow are the ones who build the solution, so context is not lost between teams."],
      ["Production-ready software", "Prototype code is hardened with tests, security review, monitoring and deployment, not left as a demo."],
      ["A team that can carry on", "Documentation, paired working and training leave your engineers able to maintain and extend the result."],
    ],
    included: [
      ["Embedded engineers", "Engineers join your team rituals, tools and communication channels, working under your access and security rules and with a named Hyperstellar lead."],
      ["Use-case discovery and scoping", "Joint sessions with the people who do the work, on real data and processes, ending in a scoped first problem with success measures."],
      ["Rapid prototyping", "Working software on your data, usually within the first weeks, reviewed with real users and scored against an agreed evaluation set."],
      ["Production hardening", "Error handling, testing, security review, observability and performance work that turns a validated prototype into a supported service."],
      ["Integration with existing systems", "Connections to your APIs, databases, identity provider and enterprise applications, designed around systems you cannot replace."],
      ["Handover and documentation", "Architecture notes, operating runbooks and decision records kept current in your repository throughout, not written at the end."],
      ["Enablement", "Pairing, code walkthroughs and training sessions so your engineers can operate, extend and review the solution."],
      ["Ongoing support", "Continued access to the team after handover through a retainer, with 24x7 support available to clients."],
    ],
    phases: [
      {
        name: "Discover",
        duration: "Typically 1 to 3 weeks",
        summary: "Embed with the team, learn the real workflow and data, and choose one problem worth solving first.",
        activities: [
          "Shadow users and map the workflow as it runs",
          "Inspect available data and system access",
          "Agree the first problem, scope and success measure",
          "Set working agreements, access and review cadence",
        ],
        outputs: [
          "Problem statement and scope",
          "Workflow and data map",
          "Success measures and evaluation approach",
          "Working agreement and risk register",
        ],
      },
      {
        name: "Develop",
        duration: "Typically 4 to 12 weeks",
        summary: "Prototype on your data, review with users, then harden what proves useful, with your engineers involved throughout.",
        activities: [
          "Build a prototype and demo it to users each week",
          "Score results against the agreed evaluation set",
          "Integrate with existing systems and identity",
          "Add tests, security review and observability",
        ],
        outputs: [
          "Working prototype with findings report",
          "Production-grade code in your repository",
          "Integration specifications",
          "Test suite and CI pipeline",
        ],
      },
      {
        name: "Deploy",
        duration: "Typically 2 to 4 weeks",
        summary: "Release to users in stages and move ownership to your team, with the documentation and practice to support it.",
        activities: [
          "Staged release with monitoring and rollback",
          "Pair with your engineers on operating tasks",
          "Run training sessions and walkthroughs",
          "Review outcomes and agree next steps",
        ],
        outputs: [
          "Runbook and architecture documentation",
          "Handover pack",
          "Training materials",
          "Outcome review and forward backlog",
        ],
      },
    ],
    engagements: [
      {
        title: "Embedded team for a focused build",
        scenario: "An operations team has a clear but unsolved problem and no spare engineering capacity. Two of our engineers join the team, work from its backlog and ship the first version alongside its people.",
        shape: "Two engineers, with a part-time lead for architecture review. Typically 3 to 6 months on a monthly team basis, with notice terms set in the contract.",
        deliverables: [
          "Working solution in production",
          "Source code and pipelines in your repository",
          "Operations runbook",
          "Enablement sessions for your team",
        ],
      },
      {
        title: "Rescue a stalled pilot",
        scenario: "A pilot impressed stakeholders but never reached production, because of unreliable quality, missing integration or unclear ownership. We assess it, fix what is fixable and take it through hardening and release.",
        shape: "One to three engineers. Typically a fixed-scope assessment of 2 to 3 weeks, followed by a 6 to 12 week build on a monthly team basis.",
        deliverables: [
          "Assessment report with options",
          "Evaluation set and quality baseline",
          "Hardened, deployed service",
          "Handover documentation",
        ],
      },
      {
        title: "Integrate AI into a system you cannot replace",
        scenario: "A core platform has to stay in place, yet users need AI features inside it. We design and build the integration layer around its constraints, covering data access, permissions and failure behaviour.",
        shape: "Two engineers working with your platform owners. Typically 8 to 16 weeks, with an optional retainer for maintenance and further features.",
        deliverables: [
          "Integration service and API contracts",
          "Permission and data-access design",
          "Test and monitoring setup",
          "Maintenance guide",
        ],
      },
    ],
  },
};
