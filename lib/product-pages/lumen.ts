import type { Landing } from "./types";

const lumen: Landing = {
  status: "Closed beta",
  closing: "Lumen is in closed beta. Join the waitlist and we will keep you posted.",
  cta: "Join the waitlist",
  title: "Tickets that stay", accent: "where you put them.",
  sub: "Boards, sprints, epics and releases in one workspace. Optional AI does the sorting. You do the deciding.",
  seo: { title: "Lumen: tickets, sprints and releases in one workspace", description: "Lumen is a ticketing and project workspace for teams that run sprints and handle requests, with optional AI help. Closed beta." },
  lead: "Every request, sprint and release in one place, with optional AI that suggests and a person decides.",
  problem: [
    ["Email, chat, spreadsheets", "Requests arrive by email and chat, then get copied into a spreadsheet, then into a second tool."],
    ["Bad news arrives late", "Nobody can see what's blocked or about to slip, so we find out in the Friday meeting."],
    ["Releases run on memory", "Sorting by hand, planning by gut, shipping from someone's head."],
  ],
  pillars: [
    { title: "One clear view of the work", outcome: "Everyone sees what is in flight and who owns it.", points: [
      "Organise work in projects and sub-projects, start from templates, and drag tickets across a board.",
      "Use a backlog, a personal \"my work\" view and saved filter views, and quick-create tickets in any column.",
      "Keep detail on the ticket itself: checklists, comments, watchers, linked tickets, custom fields, time tracking and a change history.",
    ] },
    { title: "Plans that match reality", outcome: "Leaders see the plan against what is actually happening, early enough to act.", points: [
      "Run sprints with start and complete, one active sprint per project, and a burndown chart.",
      "Group tickets into epics and see a timeline built from the real ticket dates, plus a due-date calendar.",
      "Link tickets to a release, track progress and blockers, and record deployments.",
    ] },
    { title: "Less busywork, with you in control", outcome: "Optional AI means less typing and sorting, and a person approves what matters.", points: [
      "Draft a ticket from just a title, or enter a goal and review a generated epic and its tickets before anything is created.",
      "Run a sprint health check and apply suggested actions yourself, such as reassigning a ticket or moving it to the next sprint.",
      "Refine the backlog by accepting suggested rewrites, acceptance criteria, estimates, splits and duplicate flags one at a time.",
      "Ask a chat assistant to search tickets, summarise a project or check someone's workload. It creates or updates tickets only if you allow it.",
    ] },
    { title: "Routine handled, loop closed", outcome: "Consistent follow-up without manual nudges.", points: [
      "Switch on ready-made automation recipes, such as notifying the reporter when work is done, nudging stale tickets or alerting the lead on highest priority.",
      "Connect a company mailbox so emails become tickets, and replying with the ticket key updates them.",
      "Capture closure summaries and a 1 to 5 feedback rating from the requester.",
    ] },
  ],
  days: [
    { who: "Priya, delivery manager at a software team", story: "Mid-sprint she opens the sprint health check, sees two overloaded people and a blocked ticket, and applies the suggestion to move two tickets to the next sprint.", change: "the sprint goal stays realistic, and the change is recorded." },
    { who: "Sam, IT operations lead", story: "A staff member emails the support mailbox. A ticket is created with a suggested type, priority and assignee. When it is solved, the requester gets a note and a rating link.", change: "no copy-pasting from the inbox, and satisfaction gets measured." },
    { who: "Dev, product owner", story: "He types a goal such as \"launch referral programme\", reviews the generated epic and tickets, edits two and creates them.", change: "a planned epic in minutes, with a person confirming every item." },
  ],
  groups: [
    { name: "Plan and run the work", features: [
      ["Projects and board", "Projects, sub-projects, starter templates, a drag and drop board and quick-create in each column."],
      ["Backlog and my work", "A backlog, a personal view of your own tickets and saved filter views."],
      ["Sprints", "Start and complete sprints, with one active sprint per project and a burndown chart."],
      ["Epics and timeline", "A timeline built from actual ticket dates, plus a due-date calendar."],
      ["Rich tickets", "Checklists, comments, watchers, linked tickets, custom fields, time tracking, change history and ticket templates."],
      ["CSV import", "Bring existing tickets in from a CSV file."],
    ] },
    { name: "Optional AI help", features: [
      ["Draft from a title", "Turn a short title into a full ticket for you to review."],
      ["Goal to epic", "Enter a goal and review the generated epic and tickets before anything is created."],
      ["Suggested triage", "Suggested type, priority, labels and assignee for new tickets, and an AI sort for the board."],
      ["Sprint health", "A check on the sprint with suggested actions that a person applies."],
      ["Backlog refinement", "Accept suggested rewrites, acceptance criteria, estimates and splits one at a time."],
      ["Chat assistant", "Search tickets, summarise a project, read a burndown or check workload. You pick which AI model it uses."],
    ] },
    { name: "Automate the routine and close the loop", features: [
      ["Automation recipes", "Choose from a fixed set of ready-made rules, with optional AI recipes for triage, suggested resolutions and closure summaries."],
      ["Email intake", "Create tickets from a connected company mailbox, update them by replying with the ticket key, and optionally reply to the requester."],
      ["Releases", "Link tickets to a release, track progress and blockers, and record deployments."],
      ["Resolution feedback", "A 1 to 5 rating from the requester when a ticket is closed."],
    ] },
    { name: "Reports and control", features: [
      ["Reports", "Status, priority, velocity, team workload and time by project, with CSV export."],
      ["Roles and teams", "Admin, member and viewer roles, project leads, teams, invitations and bulk member management."],
      ["Audit log and access keys", "A log of changes, and personal access keys for connecting other tools."],
      ["Notifications", "An inbox with due-soon and overdue alerts."],
      ["Everyday comfort", "Light and dark themes, keyboard shortcuts and a command palette."],
    ] },
  ],
  forWho: [
    "Delivery and engineering managers who run sprints.",
    "Product owners who plan epics and releases.",
    "IT and operations teams who work through a queue of internal requests.",
    "Teams of any size that want tickets, planning and releases in one tool, and optional AI help.",
  ],
  goodToKnow: [
    "Lumen is a ticketing and project tool. It does not include a customer-facing portal, SLA tracking or a knowledge base.",
    "AI features are optional and need an AI service to be connected. A person applies every suggestion.",
  ],
  next: ["File attachments on tickets.", "Two-factor sign-in.", "Subtasks under a parent ticket.", "More report views: cumulative flow, time in status and average lead time."],
  faq: [
    ["Is this a help desk or a project tool?", "A ticketing and project tool: tickets, sprints, epics and releases, plus email intake and optional AI. It has no customer portal, SLA timers or knowledge base, and we'd rather say so now."],
    ["Does the AI act on its own?", "No. A person applies every AI suggestion, and anything AI writes goes through the same permission checks as a manual edit. Automation rules you switch on do run by themselves, that's the point of them."],
    ["Is AI required?", "No. It's optional, and it needs an AI service connected. Lumen works fine without it."],
    ["Does the AI do the work for me?", "It suggests, you decide. A person applies every AI suggestion, and you can leave AI off entirely."],
    ["Is my data kept separate from other organisations?", "Lumen is built for multiple organisations, with data kept separate and roles that limit what people can do. We go through the rest of the security detail in a demo."],
    ["Can I bring existing tickets in?", "Yes, from a CSV file."],
    ["Can I connect other tools?", "You can create personal access keys to connect other systems. Ask us for the current list of supported connections."],
  ],
};
export default lumen;
