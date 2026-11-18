import type { Post } from "./types";

export const posts: Post[] = [
  {
    "slug": "bfsi-lumen-customer-service-resolution",
    "title": "Tracking service requests and changes in a bank with Lumen",
    "dek": "How a ticketing and project tool in development could help bank operations teams keep requests, releases and approvals in one traceable place.",
    "industry": "banking-financial-services-insurance",
    "kind": "use-case",
    "angle": "product",
    "offering": "lumen",
    "published": "2026-04-03T09:00:00+05:30",
    "tag": "Use case",
    "body": [
      "A bank's operations and technology teams handle a wide spread of requests. Some are routine: an access request, a report change, a question from a branch about a process. Some are sensitive: a defect in a payment flow, a change that touches customer records, an audit finding that needs a tracked fix. Both kinds arrive through email, chat and spreadsheets, and in many teams they land in the same informal queue. Managers see little about what is in flight, what is blocked and what is about to miss its date.",
      "## Where Lumen fits",
      "Lumen is our ticketing and project-management product. It is in development, with a beta planned, so this article describes how its documented capabilities could apply to a bank, not a finished deployment. It brings tickets, boards, sprints, epics and releases into one workspace. A request becomes a ticket with a type, priority, owner, checklist and comments, and a change history records what happened to it. Requests can also be created from a connected company mailbox, so work that starts as an email does not have to be retyped.",
      "This matters in a regulated setting because traceability is part of the job. Lumen keeps an audit log of changes, supports roles for admins, members and viewers, and lets a team link tickets to a release so that a change can be followed from request to deployment. The bank decides who can see and change what, and a reviewer can reconstruct how a ticket moved.",
      "## Optional AI help, with a person in charge",
      "Lumen includes optional AI help that works only when an AI service is connected. It can suggest a type, priority, labels and assignee for a new ticket, draft a ticket from a short title, suggest an answer from similar solved tickets, and check the health of a sprint. A person applies every suggestion, and larger changes such as a generated epic are reviewed before anything is created. For a bank, that ordering is deliberate: the tool prepares the work and people decide.",
      "Automation rules add consistency for routine steps. Ready-made rules can notify a requester when work is done, escalate priority when a ticket is assigned, add a watcher by ticket type or nudge a stale ticket. Existing work can be brought in through CSV import, so a team does not start from an empty board.",
      "## What changes for the team",
      "Delivery and operations managers gain a view they often lack. Boards show work by status, sprints come with a burndown chart, epics show a timeline built from real ticket dates, and reports cover status, priority, velocity and team workload. When a ticket is closed, the requester can leave a one to five rating, which gives a team a simple signal about how the work landed.",
      "A bank evaluating Lumen would review architecture, data residency and access control against its own policies, and we would agree those details up front as part of any engagement. The sensible way to begin is narrow. Pick one team and one request type, import the open items, switch on a few automation rules and watch how the board is used for a few weeks. Teams can widen the scope once the reviewers are comfortable. The aim is not to remove people from the process but to give them a clear shared picture of the work."
    ]
  },
  {
    "slug": "bfsi-cloud-resilience-disaster-recovery",
    "title": "Building resilience into core banking workloads on the cloud",
    "dek": "A composite case of a multinational bank modernising its recovery posture with our Cloud and Infrastructure service.",
    "industry": "banking-financial-services-insurance",
    "kind": "case-study",
    "angle": "solution",
    "offering": "cloud-infrastructure",
    "published": "2026-05-03T09:00:00+05:30",
    "tag": "Case study",
    "body": [
      "A multinational retail bank operated customer-facing applications across several regions. Mobile banking, payments status and onboarding ran on a mix of on-premises data centres and a few earlier cloud deployments, each built by a different team at a different time. The bank's technology leadership had a straightforward concern: if one site failed, no one could say with confidence how long recovery would take. The question was not whether the bank had a plan but whether anyone had recently proved that it worked.",
      "## The starting point",
      "Recovery plans existed on paper, but they had not been tested end to end for some time. Applications depended on each other in ways that were only partly documented. Infrastructure was configured by hand in places, so rebuilding an environment depended on the memory of a few engineers. Cloud spend had also grown without a clear owner, which made resilience investments hard to justify against competing priorities. The bank engaged us through our Cloud and Infrastructure service, which covers cloud strategy, migration and modernisation, DevOps and CI/CD automation, cloud security and governance, FinOps, and disaster recovery and business continuity. The brief was to make recovery predictable, not to move everything at once.",
      "## The approach",
      "We began with discovery. Engineers worked with application owners to map services, their dependencies and the recovery expectations the business actually held. This produced a short list of critical workloads and an honest view of which ones could tolerate a longer outage. Tiering the applications this way meant the strongest protection went where it mattered most, rather than being spread thinly over everything. Where an application owner and a business owner disagreed about how long an outage was acceptable, we recorded both views and asked a senior sponsor to decide, because a recovery target nobody has agreed is not a target at all. Next came a prototype on one representative workload. We described its infrastructure as code, built a CI/CD pipeline to recreate it on a second cloud region, and rehearsed a failover with the application team watching. The rehearsal exposed several undocumented dependencies, which was the point of doing it early. Each finding was fed back into the design. The team also learned how long each step really took, which replaced estimates with observed figures for the first time.",
      "Hardening followed. We added access controls and governance aligned with the bank's own security policies, monitoring for the recovery path, and cost visibility so the second environment did not become an untracked expense. FinOps practices such as tagging, budgets and right-sizing were set up from the start. Runbooks were rewritten from what the rehearsals had taught, and the pattern was then applied to the next tier of workloads. Network paths, secrets handling and data replication were each reviewed with the bank's security team, and the findings were recorded in the same repository as the code so that reviewers could trace every decision.",
      "## Handover and outcome",
      "The final stage was handover. The bank's platform team took over the pipelines and templates, with documentation and working sessions so they could extend the approach themselves. We deliberately avoided leaving behind anything that only our engineers could operate. We also helped the bank define who owns each rehearsal, who signs off the results and how often the plan is reviewed, since a recovery plan decays quickly when ownership is unclear.",
      "The outcomes were largely about confidence and clarity. The bank gained a tested recovery procedure for its critical services, infrastructure that could be rebuilt from code rather than from memory, and a clearer view of what resilience cost. The target the teams set was that a failover rehearsal would become a routine, scheduled exercise instead of an event, and that findings from each rehearsal would feed a backlog with a named owner. Leadership could also discuss resilience in terms of tiers and rehearsal dates rather than in general reassurance. Not everything was solved. Some legacy applications remained tightly coupled to their original hosting and were scheduled for later modernisation. We regarded that as a reasonable result: a recovery posture improves in stages, and an honest list of what remains is more useful to a risk committee than a claim of completeness.",
      "This is an illustrative scenario based on common enterprise patterns, not a description of a specific client engagement."
    ]
  },
  {
    "slug": "bfsi-intelligent-document-processing-onboarding",
    "title": "Taking the paperwork out of corporate onboarding with automation",
    "dek": "An illustrative case of a global bank applying intelligent automation to document-heavy onboarding while keeping reviewers in control.",
    "industry": "banking-financial-services-insurance",
    "kind": "case-study",
    "angle": "ai-solution",
    "offering": "intelligent-automation",
    "published": "2026-06-03T09:00:00+05:30",
    "tag": "Case study",
    "body": [
      "A global bank with a large corporate and commercial business found that onboarding a new business customer was slower than its relationship managers wanted. A single case could involve incorporation records, ownership declarations, identity documents for several individuals, financial statements and signed forms, arriving in different formats and layouts from different countries. Operations staff re-keyed information into several systems and checked it by eye. The bank's customers, in turn, often had to resend documents they believed they had already provided.",
      "## The starting situation",
      "The work was careful and necessary, but a great deal of it was clerical. Analysts spent their time reading documents, copying fields and chasing missing pages, and less on the judgement calls that the bank actually needed them for. Errors usually came from transcription, not from poor decisions, and each one caused rework. Leadership wanted shorter turnaround without weakening the checks that onboarding exists to perform. Relationship managers, for their part, had no easy way to tell a customer where an application stood, and so asked operations for updates by email. The bank engaged us through our Intelligent Automation service, which covers robotic process automation, intelligent document processing, workflow automation, process mining and optimisation, and AI-powered service desks.",
      "## How we approached it",
      "Discovery started with process mining and observation. Rather than relying on the documented procedure, we looked at how cases moved in practice: where they waited, which steps were repeated and which documents caused the most exceptions. This gave the bank a shared, factual picture, and it showed that a few document types accounted for most of the manual effort. It also confirmed that the longest delays came from waiting for a missing or unreadable page, not from the review itself, which shaped where we focused. The prototype focused on those document types. We built an intelligent document processing flow that classified incoming documents, extracted the relevant fields and flagged anything it could not read with enough certainty. Extracted values were presented beside the source page, so a reviewer could confirm them quickly. Anything uncertain went to a person. The prototype ran on a sample of historical cases, and analysts compared its output with their own to see where it helped and where it did not. Reviewers also told us that they wanted to see why a field had been flagged, so the prototype showed the reason beside each flagged value.",
      "Hardening meant connecting the prototype to the real workflow. We used workflow automation to route cases, request missing documents and update the bank's existing case-management and customer systems through integrations, so staff did not need to learn another tool. Robotic process automation handled the steps in older systems that offered no interface. Every automated action was logged, and the decision to approve a customer remained with a named person. Role-based access controlled who could see documents and extracted values, in line with the bank's own data-handling rules. We also set up monitoring for extraction quality. Reviewers' corrections were recorded and used to find document layouts that needed attention, so quality could be tracked and improved after go-live instead of quietly drifting.",
      "Handover included documentation, runbooks and sessions with the operations team, who learned to adjust rules and review exceptions themselves. The aim was for the bank to own the automation, not to depend on us to run it. We also left a short guide on how to introduce a new document type, so that coverage could grow without a new project each time.",
      "## Outcome",
      "The outcomes were qualitative. Analysts spent less time on re-keying and more on reviewing risk and speaking with customers. Missing-document requests went out sooner, and the bank had a clearer record of how each case progressed. The target set at the start was a noticeable reduction in handling time for the most common document types, with accuracy held at least at the level of manual work, and the team treated any gap against that target as a tuning task. Relationship managers could also see where a case stood without asking, which reduced the number of status requests reaching operations.",
      "This is an illustrative scenario based on common enterprise patterns, not a description of a specific client engagement."
    ]
  }
];
