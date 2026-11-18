import type { Landing } from "./types";

const together: Landing = {
  status: "Alpha testing",
  closing: "Together is in alpha testing. Join the waitlist and we will be in touch when early access opens.",
  cta: "Join the waitlist",
  title: "Hire, onboard, grow and", accent: "part ways well.",
  sub: "Recruitment, onboarding, leave, payroll, performance and offboarding in one HR platform, with reminders and approvals so the right person always knows what is due.",
  seo: { title: "Together: HR from hiring to exit in one place", description: "Together is HR software for hiring, onboarding, leave, payroll, performance and exits, for companies with teams in India and the US. Alpha testing." },
  lead: "Hiring, onboarding, leave, pay, performance and exits in one place, with nothing falling through the cracks.",
  problem: [
    ["Approvals and status in inboxes", "Leave is approved in chat, payslips are sent by hand, and hiring status lives in someone's inbox."],
    ["Checklists that get forgotten", "Joiners and leavers depend on checklists that someone forgets, and exits leave loose ends: access, letters, final pay."],
    ["Concerns handled informally", "Employee complaints are handled informally, and managers cannot see who is on probation or when a decision is due."],
  ],
  pillars: [
    { title: "Hiring that is clear and accountable", outcome: "A visible pipeline from job to joiner, with no re-entering of data.", points: [
      "Open job requisitions and publish a careers page for your company.",
      "Take applications with resume upload, run interview rounds with assigned reviewers and record manager decisions.",
      "Send offer letters as a PDF with a candidate response link, and have the hire created automatically when the offer is accepted.",
      "Let candidates check their status or withdraw, and take employee referrals.",
    ] },
    { title: "Joiners set up properly, probation never lapses", outcome: "New starters get a consistent start, and decisions are made on time.", points: [
      "Use onboarding checklists and templates with an owner for each task and overdue tracking.",
      "Run probation with check-ins, manager recommendations and an HR decision, with reminders as the date nears.",
      "Keep employee records and documents in one directory.",
    ] },
    { title: "The working day, in one system", outcome: "Fewer approval delays and one source of truth.", points: [
      "Set leave policies, route requests for approval, delegate while you are away and view a leave calendar with balances.",
      "Let people clock in and out with breaks on the web, and see a team-today view.",
      "Generate payslips with PDF download for employees in India and the US, using each country's rules, and handle final settlements that need a separate approver from the person who prepared them.",
      "Run review cycles and merit planning, with job families, levels and pay bands.",
    ] },
    { title: "Performance, voice and trust", outcome: "Structured reviews, and a safe way for people to speak up.", points: [
      "Set goals with key results, and run review cycles with self, manager and HR calibration stages.",
      "Request 360 feedback, hold 1:1 meetings with agendas and action items, and keep a skills record.",
      "Let employees raise a grievance confidentially or anonymously, with response deadlines and an appeal to a reviewer they choose.",
      "Offboard cleanly with exit checklists, exit interviews, relieving and experience letters, and access removed on the last day.",
    ] },
  ],
  days: [
    { who: "Divya, HR manager at a 150-person company", story: "A hiring manager picks a candidate. Divya sees the offer waiting and sends it. On acceptance the person becomes an employee record with an onboarding checklist and a probation case.", change: "no re-entering data, and nothing is forgotten on day one." },
    { who: "Arjun, a team manager", story: "He gets a reminder that a report's probation ends in two weeks, submits his recommendation to confirm, and HR records the decision.", change: "nobody stays in probation by accident." },
    { who: "A new joiner", story: "She raises a concern anonymously. HR responds within the set deadline, and her identity is never revealed to HR.", change: "people can trust that speaking up is safe." },
  ],
  groups: [
    { name: "Hire and onboard", features: [
      ["Recruitment", "Job requisitions, a careers page per company, applications with resume upload, interview rounds, manager decisions and employee referrals."],
      ["Offers", "Offer templates, offer letters as a PDF with a candidate response link, and automatic hire on acceptance."],
      ["Candidate status", "Candidates can check their status or withdraw."],
      ["Onboarding", "Checklists and templates with an owner for each task and overdue tracking."],
      ["Probation", "Check-ins, manager recommendations, an HR decision and letters."],
    ] },
    { name: "Run the working day", features: [
      ["People directory", "Employee records and documents in one place."],
      ["Attendance", "Clock in, clock out and breaks on the web, a team-today view and history."],
      ["Leave", "Policies, approval routing, delegation while away, holidays, a leave calendar and balances."],
      ["Payroll for India and the US", "Payroll cycles, statutory setup, payslips with PDF download, annual summaries and final settlement with approval."],
      ["Compensation", "Pay history, review cycles, merit planning, job families, levels and pay bands."],
    ] },
    { name: "Grow and listen", features: [
      ["Goals and reviews", "Goals with key results, and review cycles with self, manager and HR calibration stages."],
      ["Rating view", "A rating distribution view to compare outcomes across a team."],
      ["360 feedback and 1:1s", "Request feedback, and hold meetings with agendas and action items."],
      ["Skills record", "Skills, certificates and courses for each employee."],
      ["Grievances", "Confidential or anonymous cases, response deadlines and appeals to a reviewer the employee chooses."],
      ["Community", "A community feed, recognition and pulse surveys."],
    ] },
    { name: "Leave well and keep control", features: [
      ["Offboarding", "Resignation and HR-recorded exits, task checklists, exit interviews, relieving and experience letters, and access removal on the last day."],
      ["Analytics", "Dashboards for headcount, retention and attrition, and the recruitment funnel, with export."],
      ["Policies", "Publish policies and see who has acknowledged them."],
      ["Access and audit", "Employee, Manager, HR and Admin roles, optional two-factor sign-in and an audit log of sensitive changes."],
      ["Reminders", "In-app notifications and scheduled reminders for overdue onboarding, goals, 1:1s, recruitment, probation and grievances."],
    ] },
  ],
  forWho: [
    "HR and people-operations teams that run on spreadsheets, email and shared folders.",
    "Managers who need to see probation dates, goals, 1:1s and approvals in one place.",
    "Employees who want their own payslips, leave, goals, onboarding tasks and documents.",
    "Growing companies with staff in India and the US.",
  ],
  goodToKnow: [
    "Payroll covers India and the US today. Payslips are produced one employee at a time, not as a single company-wide pay run.",
    "Together does not include AI features today.",
  ],
  next: ["Employee-facing requests for advance pay, where the settings exist today but the request flow is still to come."],
  faq: [
    ["Does it include AI?", "Not today. We would rather tell you what it does than promise what it does not."],
    ["Which countries does payroll cover?", "India and the US. Other countries are not covered at this time. Payslips are produced one employee at a time, rather than as a single company-wide pay run."],
    ["Can employees use it themselves?", "Yes. Employees see their own payslips, leave, goals, onboarding tasks, documents and notifications. Candidates can apply and track their status, and former employees can retrieve their documents securely."],
    ["How is sensitive data protected?", "Access is role-based, sensitive changes are recorded in an audit log, two-factor sign-in is available, salary and bank details are visible only to the person and authorised HR, grievance reporting can be anonymous, and each company's data is kept separate. Hosting and certifications are confirmed during a demo."],
    ["Can I switch on only the modules I need?", "This is confirmed during a demo."],
  ],
};
export default together;
