import type { Landing } from "./types";
import invoflow from "./invoflow";
import lumen from "./lumen";
import orbs from "./orbs";
import shelfwise from "./shelfwise";
import together from "./together";

export type { Landing };
export const landings: Record<string, Landing> = { invoflow, lumen, orbs, shelfwise, together };
