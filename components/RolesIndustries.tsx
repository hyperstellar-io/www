import Link from "next/link";
import { industries } from "@/lib/content";
import { slugify } from "@/lib/blogs/types";

export default function RolesIndustries() {
  return (
    <section className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[1fr_1.3fr]">
      <div>
        <h2 className="h2">Explore <em>industries.</em></h2>
        <p className="mt-6 max-w-sm text-mute">Every industry on its own terms: AI engineered around how your sector actually works.</p>
      </div>
      <ul className="divide-y divide-line border-y border-line">
        {industries.map((label, n) => (
          <li key={label}>
            <Link href={`/industries/${slugify(label)}`} className="group flex items-center gap-6 py-3 transition hover:pl-3 sm:py-4">
              <span className="w-8 shrink-0 font-mono text-xs text-mute">{String(n + 1).padStart(2, "0")}</span>
              <span className="serif flex-1 text-2xl sm:text-3xl">{label}</span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line transition group-hover:rotate-45 group-hover:border-ion group-hover:bg-ion group-hover:text-on-ion" aria-hidden="true">↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
