import { llms } from "@/lib/llms";

export const GET = () => new Response(llms(false), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
