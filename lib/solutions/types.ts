export type Phase = {
  name: "Discover" | "Develop" | "Deploy";
  duration: string; // typical range, e.g. "2 to 3 weeks"
  summary: string; // one or two sentences on what this phase achieves for this solution
  activities: string[]; // 3 to 4 real activities we carry out
  outputs: string[]; // 2 to 4 concrete artefacts handed over
};
export type Engagement = {
  title: string;
  scenario: string; // 2 to 3 sentences: the situation and what we do
  shape: string; // typical team, duration and contracting model
  deliverables: string[]; // 3 to 4 concrete outputs
};
export type Detail = {
  lead: string; // 2 to 3 sentences, what this solution is
  fit: string; // one sentence: who it is for
  gets: [title: string, body: string][]; // exactly 4 outcomes the customer ends up with
  included: [title: string, body: string][]; // 6 to 8 concrete components and deliverables
  phases: [Phase, Phase, Phase]; // Discover, Develop, Deploy in that order
  engagements: [Engagement, Engagement, Engagement];
};
