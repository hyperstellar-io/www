// Prints "due" when a scheduled post's time passed in the last 70 minutes (so an hourly check never misses one), otherwise "none".
import { readdirSync, readFileSync } from "node:fs";

const dir = new URL("../content/posts/", import.meta.url);
const now = Date.now(), since = now - 70 * 60_000;
const due = readdirSync(dir).filter((f) => f.endsWith(".json")).some((f) => { const t = +new Date(JSON.parse(readFileSync(new URL(f, dir), "utf8")).published); return t > since && t <= now; });
console.log(due ? "due" : "none");
