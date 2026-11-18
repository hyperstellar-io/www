import Link from "next/link";
import type { Post } from "@/lib/blogs/types";
import InsightArt from "./InsightArt";

export type CardPost = Pick<Post, "slug" | "title" | "dek" | "kind" | "angle" | "tag" | "industry">;

export const kindLabel = { "use-case": "Use case", "case-study": "Case study" } as const;
export const angleLabel = { product: "Product", solution: "Solution", "ai-solution": "AI solution" } as const;

// Image card: generative art; tag pill top left, arrow top right, title bottom left.
export default function PostCard({ post, badges = [post.tag], large, pos = 0 }: { post: CardPost; badges?: string[]; large?: boolean; pos?: number }) {
  return (
    <Link href={`/insights/${post.slug}`} className="group block rounded-[1.75rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
      <div className={`relative isolate flex flex-col justify-between overflow-hidden rounded-[1.75rem] p-5 text-left text-white transition motion-safe:group-hover:-translate-y-1 sm:p-6 ${large ? "aspect-[4/3] sm:aspect-[21/9]" : "aspect-square"}`}>
        <InsightArt index={pos} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" aria-hidden="true" />
        <div className="relative flex items-start justify-between gap-3">
          <ul className="flex flex-wrap gap-2">
            {badges.map((b) => <li key={b} className="rounded-full bg-white/90 px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-[#15140f]">{b}</li>)}
          </ul>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#15140f] transition group-hover:rotate-45 group-hover:bg-ion group-hover:text-on-ion" aria-hidden="true">↗</span>
        </div>
        <div className="relative">
          <h3 className={`serif leading-tight ${large ? "max-w-3xl text-3xl sm:text-5xl" : "text-xl sm:text-2xl"}`}>{post.title}</h3>
          {large && <p className="mt-3 hidden max-w-2xl text-white/80 sm:block">{post.dek}</p>}
        </div>
      </div>
    </Link>
  );
}
