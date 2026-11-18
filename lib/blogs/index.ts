import { posts as p0 } from "./banking-financial-services-insurance";
import { posts as p1 } from "./healthcare-life-sciences";
import { posts as p2 } from "./retail-consumer-goods";
import { posts as p3 } from "./manufacturing-industrial";
import { posts as p4 } from "./energy-utilities";
import { posts as p5 } from "./telecommunications-media";
import { posts as p6 } from "./government-public-sector";
import { posts as p7 } from "./education-edtech";
import { posts as p8 } from "./logistics-transportation";
import { posts as p9 } from "./real-estate-construction";
import { posts as published } from "./generated";
import type { Post } from "./types";

export { slugify } from "./types";
export type { Post } from "./types";

// Newest first. Posts made in /admin come from generated.ts, which only holds posts that are already due.
export const posts: Post[] = [...p0, ...p1, ...p2, ...p3, ...p4, ...p5, ...p6, ...p7, ...p8, ...p9, ...published].sort((a, b) => +new Date(b.published) - +new Date(a.published));

export const postsFor = (industry: string) => posts.filter((p) => p.industry === industry);
// ~200 words per minute, minimum 1.
export const readMins = (p: Post) => Math.max(1, Math.round(p.body.join(" ").split(/\s+/).length / 200));
