import { faqs } from "@/lib/content";

export default function FAQ() {
  return (
    <div className="w-full divide-y divide-line">
      {faqs.map(([q, a]) => (
        <details key={q} className="group py-4">
          <summary className="flex items-center justify-between gap-6 text-lg font-medium tracking-tight sm:text-xl">
            <span>{q}</span>
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-panel text-xl font-light" aria-hidden="true"><span className="plus transition">+</span></span>
          </summary>
          <p className="mt-2 max-w-3xl pb-3 pr-16 text-mute">{a}</p>
        </details>
      ))}
    </div>
  );
}
