// Single source of truth for site copy. Facts come from docs/ and the OpenBots README;
// anything marked "TBC" is awaiting confirmation from the company, don't expand it without a source.

export const company = {
  name: "Hyperstellar Technology",
  email: "hyperstellartechnology@gmail.com",
  url: "https://www.hyperstellartechnology.in",
  offices: ["Mumbai, India (Headquarters)", "United States", "Germany"],
  // from https://links.hyperstellartechnology.in/
  booking: "https://cal.com/hyperstellar-technology/30min?overlayCalendar=true",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/hyperstellar" },
    { label: "Instagram", href: "https://www.instagram.com/hyperstellartechnology/" },
    { label: "Facebook", href: "https://www.facebook.com/hyperstellartechnlogy" },
    { label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=%2B919405867664" },
  ],
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  status: string;
  users?: string[];
  features: { title: string; body: string }[];
};

export const products: Product[] = [
  {
    slug: "lumen",
    name: "Lumen",
    category: "Ticketing & project management",
    tagline: "Know what is in flight before it slips.",
    summary: "Tickets, boards, sprints, epics and releases in one workspace, with optional AI help for triage and planning that you stay in charge of.",
    status: "Closed beta",
    users: ["Delivery managers", "Engineering and product leads", "IT and operations teams"],
    features: [
      { title: "Boards, sprints and epics", body: "One view of every request, sprint and release, with a burndown chart and a timeline built from real ticket dates." },
      { title: "Optional AI suggestions", body: "Draft tickets, check sprint health and refine the backlog. A person applies every suggestion." },
      { title: "Automation and email intake", body: "Ready-made rules, tickets created from a company mailbox, and a feedback rating when work is closed." },
    ],
  },
  {
    slug: "together",
    name: "Together",
    category: "HR platform",
    tagline: "Hire, onboard, grow and part ways well.",
    summary: "Recruitment, onboarding, leave, payroll, performance and offboarding in one HR platform, with reminders and approvals so the right person always knows what is due.",
    status: "Alpha testing",
    users: ["Employees", "HR managers", "Team managers", "Admins"],
    features: [
      { title: "Hiring to joining", body: "Job requisitions, interviews, offer letters and automatic hire on acceptance, then onboarding and probation." },
      { title: "Leave, attendance and payroll", body: "Leave approvals, web clock-in, and payslips for employees in India and the US." },
      { title: "Performance and exits", body: "Goals, reviews, 360 feedback, 1:1s, confidential grievances and clean offboarding." },
    ],
  },
  {
    slug: "shelfwise",
    name: "Shelfwise",
    category: "Inventory & purchasing",
    tagline: "Know your stock before it runs out.",
    summary: "Inventory, purchase orders, suppliers and inbound shipments in one place, with low-stock alerts and reorder suggestions you confirm yourself.",
    status: "Closed beta",
    users: ["Inventory managers", "Warehouse managers", "Procurement officers", "Business owners"],
    features: [
      { title: "Low-stock alerts and a Risk Center", body: "See shortages, delayed shipments and nearly full warehouses in one list." },
      { title: "Purchase orders and forecasting", body: "Raise orders, receive them into stock, and turn forecast suggestions you agree with into purchase orders." },
      { title: "Supplier and stock accountability", body: "Supplier risk scores and a movement history that shows who changed what." },
    ],
  },
  {
    slug: "orbs",
    name: "ORBS",
    category: "AI assistant workspace",
    tagline: "Your own team of AI assistants.",
    summary: "Create assistants with their own role, memory and documents. Chat, schedule and share them with your team, with your approval on anything that reaches outside.",
    status: "Beta testing",
    users: ["Founders", "Operations and research teams", "Small teams"],
    features: [
      { title: "Assistants that remember", body: "Each assistant has its own role, chats and long-term memory that you can view, edit and delete." },
      { title: "Answers from your files", body: "Ask questions across your documents, or search the web with citations." },
      { title: "You approve outside actions", body: "Anything that reaches outside the app waits for your approval." },
    ],
  },
  {
    slug: "invoflow",
    name: "Invoflow",
    category: "GST invoicing & accounts",
    tagline: "Right GST on every invoice, every time.",
    summary: "Quotes, GST invoices, payment reminders and reports for small Indian businesses, with what you owe your vendors alongside what customers owe you.",
    status: "Closed beta",
    users: ["Small business owners", "Accountants", "Office staff"],
    features: [
      { title: "GST invoices and quotes", body: "The CGST and SGST or IGST split is suggested for you, and a quote becomes an invoice in one click." },
      { title: "Get paid sooner", body: "Online payment links, automatic reminders and recurring invoices." },
      { title: "Reports", body: "Dashboard, profit and loss, aging and a GSTR-1 report to help prepare your filing." },
    ],
  },
  {
    slug: "signal",
    name: "Signal",
    category: "CRM",
    tagline: "Customer relationships, AI-first.",
    summary: "Hyperstellar's CRM is in development. Details will be published here once confirmed.",
    status: "Under development",
    features: [],
  },
];

export type Service = { slug: string; title: string; blurb: string; items: string[]; generic?: boolean };

export const services: Service[] = [
  {
    slug: "ai-engineering",
    title: "AI Engineering & Application Development",
    blurb: "Strategy to production: GenAI applications, agents, RAG and ML systems.",
    items: [
      "AI strategy & consulting",
      "Generative AI solutions",
      "AI agents & copilots",
      "Custom LLM development",
      "Retrieval-augmented generation (RAG)",
      "Machine learning & deep learning",
      "NLP and computer vision",
      "Predictive & advanced analytics",
      "Data engineering & pipelines",
      "MLOps & AI operations",
      "Responsible AI & governance",
    ],
  },
  {
    slug: "ai-infrastructure",
    title: "AI Infrastructure & Deployment",
    blurb: "Cloud and platform foundations to run AI workloads reliably and securely.",
    generic: true,
    items: [
      "Cloud architecture for AI workloads (AWS, Azure, GCP)",
      "Containerisation and Kubernetes deployment",
      "CI/CD and MLOps pipelines",
      "Monitoring, observability and cost control (FinOps)",
      "Security, access control and governance",
    ],
  },
  {
    slug: "llm-inference",
    title: "LLM Inference & Optimization",
    blurb: "Serve language models with the latency, cost and quality your use case needs.",
    generic: true,
    items: [
      "Model selection and evaluation",
      "Model routing across providers",
      "Retrieval and prompt optimisation",
      "Latency and cost tuning",
      "Guardrails, evaluation and monitoring",
    ],
  },
  {
    slug: "forward-deployed-engineering",
    title: "Forward Deployed Engineering",
    blurb: "Hyperstellar engineers embedded with your team to take AI from pilot to production.",
    generic: true,
    items: [
      "Embedded engineers working alongside your team",
      "Use-case discovery and scoping on your real data and workflows",
      "Rapid prototyping, then production hardening",
      "Integration with existing systems",
      "Handover, documentation and enablement",
    ],
  },
  {
    slug: "enterprise-ai-solutions",
    title: "Enterprise Solutions",
    blurb: "ERP, CRM, HRMS, supply chain and service management, including our own products.",
    items: [
      "ERP implementation (SAP, Oracle, Dynamics 365)",
      "CRM solutions (Salesforce, HubSpot, custom)",
      "HRMS, supply chain and ticketing platforms",
      "ServiceNow implementation",
      "Enterprise application integration",
      "Business process automation",
    ],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud & Infrastructure",
    blurb: "Migrate, modernise and operate on AWS, Azure and Google Cloud.",
    items: [
      "Cloud strategy, migration and modernisation",
      "Cloud-native development",
      "DevOps & CI/CD automation",
      "Cloud security & governance",
      "FinOps & cost optimisation",
      "Disaster recovery & business continuity",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    blurb: "Web, mobile, API and SaaS products built fast and built right.",
    items: [
      "Web & mobile applications",
      "API development & integration",
      "Microservices architecture",
      "SaaS product development",
      "Legacy modernisation",
      "Testing, QA and DevSecOps",
    ],
  },
  {
    slug: "intelligent-automation",
    title: "Intelligent Automation",
    blurb: "RPA, document processing and workflow automation.",
    items: [
      "Robotic process automation",
      "Intelligent document processing",
      "Workflow automation",
      "Process mining & optimisation",
      "AI-powered service desk",
    ],
  },
  {
    slug: "digital-experience",
    title: "Digital Experience & Design",
    blurb: "UI/UX, CX strategy, eCommerce and content platforms.",
    items: [
      "UI/UX design & design systems",
      "Customer experience strategy",
      "Website & eCommerce development",
      "Headless CMS",
      "Accessibility services (WCAG)",
    ],
  },
  {
    slug: "consulting-strategy",
    title: "Consulting & Strategy",
    blurb: "Clarity before code: transformation, architecture and AI roadmaps.",
    items: [
      "Digital transformation strategy",
      "AI transformation advisory",
      "Enterprise architecture",
      "Change management",
      "Innovation consulting",
    ],
  },
  {
    slug: "managed-services",
    title: "Managed Services & Support",
    blurb: "IT and cloud operations with 24×7 coverage.",
    items: [
      "Managed IT & cloud operations",
      "SOC and NOC",
      "24×7 IT service desk",
      "Application management services",
      "Database administration",
    ],
  },
  {
    slug: "product-engineering",
    title: "Product Engineering",
    blurb: "From idea to launch: IoT, digital twins and connected systems.",
    items: [
      "Digital product development",
      "Industrial IoT & digital twins",
      "Industry 4.0 & smart manufacturing",
      "Embedded systems",
      "Product lifecycle management",
    ],
  },
];

// Alphabetical everywhere (nav, /industries, home list, forms).
export const industries = [
  "Banking, Financial Services & Insurance",
  "Healthcare & Life Sciences",
  "Retail & Consumer Goods",
  "Manufacturing & Industrial",
  "Energy & Utilities",
  "Telecommunications & Media",
  "Government & Public Sector",
  "Education & EdTech",
  "Logistics & Transportation",
  "Real Estate & Construction",
].sort((a, b) => a.localeCompare(b));

// Initials spell ORBIT (the wall graffiti): keep the first letters when editing titles.
export const values = [
  { title: "Own what you make", body: "Take pride in the work and follow it all the way through. You'll have the trust and the room to make real decisions, and we'll back you when you do." },
  { title: "Respect, for everyone", body: "Women, men, non-binary people and everyone else: every voice counts here. Ideas are judged on their merit, never on who they come from." },
  { title: "Bring your whole self", body: "Your background, your way of thinking and your life outside work all make the team stronger. You don't need to be anyone but you." },
  { title: "Invest in each other", body: "We share what we know, mentor generously and cheer for each other's growth. Nobody here climbs alone." },
  { title: "Together, always", body: "Hard problems get solved by people who trust one another. We celebrate the wins as a team and own the misses as a team." },
];

// Homepage / marketing copy

export const stages = [
  { key: "Discover", color: "bg-slate", line: "Shortlist use cases, check data readiness and security constraints, and agree how success will be measured, before any build starts.", href: "/solutions/consulting-strategy" },
  { key: "Develop", color: "bg-forest", line: "Build the system and test it against a fixed evaluation set, so quality is measured at every iteration, with your team reviewing as we go.", href: "/solutions/ai-engineering" },
  { key: "Deploy", color: "bg-rust", line: "Release gradually behind an evaluation gate on AWS, Azure or Google Cloud, with monitoring, cost controls and rollback in place, then hand over with documentation.", href: "/solutions/ai-infrastructure" },
];

// Platforms the engineers work with, per docs/expanded-services.md and product docs. Wordmarks only; no partnership implied.
// Inner ring to outer ring.
export const rings = [
  { name: "AI & core", items: ["OpenAI", "Anthropic Claude", "LangGraph", "PyTorch", "MLflow"] },
  { name: "Backend", items: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "PostgreSQL", "GraphQL", "SAP", "Salesforce"] },
  { name: "Frontend", items: ["React Native", "Next.js", "TypeScript", "Flutter", "Power Platform", "Contentful", "Vue.js", "Tailwind CSS"] },
];

export const faqs = [
  ["What does Hyperstellar actually do?", "We build AI systems and software for businesses: strategy, custom applications, agents, data pipelines, cloud and infrastructure, and 24×7 managed services. We also build our own products, so we know what running software in production takes."],
  ["How much does a project cost?", "There is no price list, because scope varies a lot. After a short call we scope the work around your goals and give you a clear estimate before anything starts. Book a consultation and we'll tell you honestly if it's a fit."],
  ["How long does it take to get started?", "Book a 30-minute consultation and we'll talk through your goals. We respond within 72 hours, and revision cycles run under three days."],
  ["What is Forward Deployed Engineering?", "Our engineers work inside your environment, alongside your team, on your real data and workflows. They scope the use case, prototype quickly, harden the result for production and hand it over with documentation."],
  ["Do you only build custom work, or do you have products?", "Both. Our products are Lumen, Together, Shelfwise, ORBS, Invoflow and Signal. They're at different stages, from closed beta to under development, and you can join the waitlist for any of them."],
  ["Can I try your products today?", "Not publicly yet. Lumen, Shelfwise and Invoflow are in closed beta, ORBS is in beta testing, Together is in alpha testing and Signal is under development. Join the waitlist and we'll tell you when access opens."],
  ["How do you handle security and data?", "Architecture, access control and data-residency options are agreed up front and documented with every engagement. For sensitive data we can deploy models inside a boundary you control."],
  ["Which clouds and AI models do you work with?", "AWS, Microsoft Azure and Google Cloud, and a range of model providers. We choose models based on your latency, cost, quality and data-residency needs, not on a default."],
  ["Will you keep supporting what you build?", "Yes. Our team is available 24×7, and we offer managed services to monitor and improve systems after they go live."],
  ["Where are you based, and who do you work with?", "We're headquartered in Mumbai, India, with offices in the United States and Germany, and clients across India, the US, Germany, South Africa and beyond since 2017."],
];
