import type { Landing } from "./types";

const orbs: Landing = {
  status: "Beta testing",
  closing: "Where it is today: ORBS is in beta testing. Join the waitlist and we will tell you when it opens up.",
  cta: "Join the waitlist",
  title: "Assistants that remember you,", accent: "and ask before they act.",
  sub: "Give each assistant a role, a memory and your documents. Chat with them, schedule them, share them with your team. Anything that reaches outside waits for your yes.",
  seo: { title: "ORBS: persistent AI assistants for you and your team", description: "ORBS gives you AI assistants that remember, know your documents and ask before they act. Beta testing." },
  lead: "AI assistants that remember your work, know your documents and ask before they act.",
  problem: [
    ["Every chat starts from zero", "I explain the same context again each session."],
    ["It cannot see your files", "It cannot see our contracts or spreadsheets, and I would not trust it to act on my email."],
    ["Routine work stays manual", "The weekly news brief and the weekly report are still done by hand, and we are tied to one AI provider."],
  ],
  pillars: [
    { title: "Assistants that remember", outcome: "Each assistant stays useful over time instead of starting over.", points: [
      "Create assistants with their own persona, many chats and long-term memory.",
      "View, edit and delete what an assistant remembers.",
      "Start from a template: researcher, writer, planner, analyst, coder, tutor or chief of staff.",
    ] },
    { title: "Answers from your own files", outcome: "Answers come from your material, not guesses.", points: [
      "Upload PDF, Word, Excel, CSV, text and image files, including scanned PDFs, and ask questions across them.",
      "Search the web and get answers with citations.",
      "Stop a reply, regenerate it or edit your message. Every version is kept.",
    ] },
    { title: "Help that does things, with you in charge", outcome: "Automation without handing over the keys.", points: [
      "Approve or deny any action that reaches outside the app, and choose \"always allow\" for a given assistant.",
      "Give an assistant a credential to use without it ever seeing the secret.",
      "Set a weekly routine in your time zone and get a phone notification when a result is ready or an approval is waiting.",
      "Connect other apps such as email and team chat, and install plug-ins that show their permissions for you to review first.",
    ] },
    { title: "Built for teams, not tied to one provider", outcome: "One set of assistants for everyone, and freedom to choose your models.", points: [
      "Invite colleagues into a shared workspace with a link, where members chat with the team's assistants.",
      "Choose and switch AI models per assistant, even mid-conversation, with optional fallbacks, and see usage and estimated cost per model.",
      "Export a full backup of your assistants, chats and files, and import it again.",
    ] },
  ],
  days: [
    { who: "Neha, operations head at a logistics firm", story: "She uploads supplier contracts to an assistant and asks which ones auto-renew this quarter. The answer cites the documents.", change: "the check takes minutes, not an afternoon of searching." },
    { who: "Karan, founder", story: "He sets a Monday routine so an assistant prepares a short news brief on his sector. A phone notification arrives when it is ready.", change: "the weekly briefing happens without effort." },
    { who: "A small agency team", story: "The owner invites three colleagues to a shared workspace with a \"proposal writer\" assistant. When it wants to use a connected app, the owner sees an approval prompt.", change: "a shared assistant, with a person confirming outside actions." },
  ],
  groups: [
    { name: "Assistants that remember and know your material", features: [
      ["Persistent assistants", "Each has a persona, many chats and long-term memory that you can view, edit and delete."],
      ["Starter templates", "Researcher, writer, planner, analyst, coder, tutor or chief of staff, ready in one click."],
      ["Your documents", "PDF, Word, Excel, CSV, text and images, with scanned PDF reading, and questions across all of them."],
      ["Live answers", "Replies stream as they are written. Stop, regenerate or edit a message, and every version is kept."],
      ["Generated files", "Files an assistant creates are collected in a side panel."],
    ] },
    { name: "Assistants that do things, with you in charge", features: [
      ["Tools with sources", "Web search with citations, a calculator, date and time, and file search."],
      ["Approvals", "Anything that reaches outside the app waits for your Approve or Deny, with \"always allow\" per assistant."],
      ["Secrets stay hidden", "An assistant can use a credential without ever seeing it."],
      ["Routines", "Weekly schedules in your time zone, with phone notifications when something finishes or needs approval."],
      ["Connect your apps", "Email, team chat and other tools, and plug-ins that show their permissions before you install."],
    ] },
    { name: "Team and control", features: [
      ["Shared workspaces", "Invite people with a link. The owner manages assistants and settings, and members chat with the assistants."],
      ["Assistants help each other", "An assistant can ask another assistant in the same workspace for help."],
      ["Your choice of model", "Several providers, plus models you run yourself, with usage and estimated cost tracking."],
      ["Safety check", "Messages are checked before they are sent to a model."],
      ["Backup and exit", "Export and import one backup of your assistants, chats and files."],
      ["Languages and devices", "Nine interface languages, and install on phone or desktop as an app."],
    ] },
    { name: "Optional extras that depend on set-up", features: [
      ["Voice", "Dictation, read aloud and voice calls, when switched on."],
      ["Code running", "Run code in an isolated environment, when switched on."],
      ["Image generation", "Create images from an assistant, when switched on."],
    ] },
  ],
  forWho: [
    "Founders and solo professionals who want an assistant that remembers.",
    "Operations, research and support teams that work from documents and recurring tasks.",
    "Small teams who want to share assistants and keep a person approving outside actions.",
    "People comfortable bringing their own AI model access, or running models on their own machine.",
  ],
  goodToKnow: [
    "You need an AI model connection, either your own keys or local models, to get value from ORBS.",
    "In a shared workspace, members can see the team assistants' chats, memories and files, so invite people you trust.",
    "Team roles are simple: owner and member.",
  ],
  next: [
    "Virtual computers for assistants, with a browser and terminal, are in progress. Sharing them between assistants, a reset option and a full-desktop view are still to come.",
    "Easier connecting of apps, with a picker instead of typing the app name.",
  ],
  faq: [
    ["Which AI models can I use?", "Several providers, plus models running on your own machine, depending on the keys you add. Specific providers and costs are confirmed during a demo."],
    ["Can the assistant act without asking me?", "Actions that leave the app ask for your approval by default. You can allow chosen tools permanently for chosen assistants."],
    ["Who sees my data?", "Documents and chats are private to your workspace. Only the conversation content needed for an answer goes to the model provider, not user names or emails, and you can delete chats, files, memories and your account. Hosting and other details are confirmed during a demo."],
    ["Can my team use it?", "Yes, through shared workspaces with invite links. Members see the team's assistants and their chats."],
    ["Can I leave with my data?", "Yes. One backup file holds your assistants, chats and files. Secrets and keys are deliberately not included."],
  ],
};
export default orbs;
