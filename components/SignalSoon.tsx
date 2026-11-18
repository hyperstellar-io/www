import Link from "next/link";
import ApiForm from "./ApiForm";
import Reveal from "./Reveal";

const field = "mt-2 w-full rounded-xl border border-line bg-panel px-4 py-3 text-fg placeholder:text-mute";

// Coming-soon page in the site's own look (serif display, rounded photo card, panel form). No feature claims: details are TBC.
export default function SignalSoon({ name, category, tagline, status }: { name: string; category: string; tagline: string; status: string }) {
  return (
    <>
      <section className="px-3 pb-6 pt-28 sm:px-8 sm:pt-32">
        <div className="relative isolate flex min-h-[78svh] items-end overflow-hidden rounded-[2rem] p-7 text-white sm:p-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/product-signal.webp" alt="" decoding="async" className="absolute inset-0 -z-20 size-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/25 to-black/10" aria-hidden="true" />
          <div className="max-w-4xl">
            <ul className="flex flex-wrap gap-2">
              {[category, status].map((t) => <li key={t} className="rounded-full bg-white/90 px-3.5 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-[#15140f]">{t}</li>)}
            </ul>
            <h1 className="display mt-6">{name} is <em>on its way.</em></h1>
            <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">{tagline}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-32">
        <Reveal>
          <p className="eyebrow">Coming soon</p>
          <h2 className="h2 mt-4">Be first <em>when it opens.</em></h2>
          <p className="mt-6 max-w-md text-lg text-mute">{name} is still being built, and we&apos;d rather show you something real than promise features early. Join the waitlist and we&apos;ll tell you the moment there&apos;s something to try.</p>
          <Link href="/products" className="btn btn-ghost mt-8">See our other products</Link>
        </Reveal>
        <Reveal>
          <ApiForm type="waitlist" button="Join the waitlist" className="space-y-6 rounded-[1.75rem] bg-panel p-6 sm:p-10">
            <input type="hidden" name="product" value={name} />
            <label className="block">Full name<input name="name" required autoComplete="name" className={field} /></label>
            <label className="block">Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
            <label className="block">Company<input name="company" autoComplete="organization" className={field} /></label>
          </ApiForm>
        </Reveal>
      </section>
    </>
  );
}
