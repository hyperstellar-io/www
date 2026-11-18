import { detail as d0 } from "./banking-financial-services-insurance";
import { detail as d1 } from "./healthcare-life-sciences";
import { detail as d2 } from "./retail-consumer-goods";
import { detail as d3 } from "./manufacturing-industrial";
import { detail as d4 } from "./energy-utilities";
import { detail as d5 } from "./telecommunications-media";
import { detail as d6 } from "./government-public-sector";
import { detail as d7 } from "./education-edtech";
import { detail as d8 } from "./logistics-transportation";
import { detail as d9 } from "./real-estate-construction";

export type { IndustryDetail } from "./types";
export const industryDetail: Record<string, import("./types").IndustryDetail> = {
  "banking-financial-services-insurance": d0,
  "healthcare-life-sciences": d1,
  "retail-consumer-goods": d2,
  "manufacturing-industrial": d3,
  "energy-utilities": d4,
  "telecommunications-media": d5,
  "government-public-sector": d6,
  "education-edtech": d7,
  "logistics-transportation": d8,
  "real-estate-construction": d9,
};
