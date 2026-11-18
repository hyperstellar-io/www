import { services } from "../content";
import { familyOf } from "../families";
import { detail as ai } from "./ai";
import { detail as build } from "./build";
import { detail as advisory } from "./advisory";

export type { Detail, Phase, Engagement } from "./types";
export const detail = { ...ai, ...build, ...advisory };

// Fail loudly in dev if a service is added without its page copy or a family.
if (process.env.NODE_ENV !== "production") services.forEach((s) => { if (!detail[s.slug] || !familyOf(s.slug)) throw new Error(`solutions: missing ${s.slug}`); });
