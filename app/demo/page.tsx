import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApiForm from "@/components/ApiForm";
import { company, industries, products } from "@/lib/content";

export const metadata: Metadata = { title: "Get a demo", description: "Tell us about your company and book a personalised Hyperstellar demo." };

const field = "mt-2 w-full rounded-xl border border-line bg-panel px-4 py-3 text-fg placeholder:text-mute";
const sizes = ["1–10", "11–50", "51–200", "201–1,000", "1,001–5,000", "5,000+"];

export default function Demo() {
  return (
    <>
      <PageHero eyebrow="Get a demo" title={<>See it <span className="italic">on your terms.</span></>}>
        Tell us about your company, then pick a time.
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-line px-5 py-12 lg:grid-cols-2">
        <ApiForm type="demo" button="Send details" buttonClass="btn btn-solid justify-center sm:col-span-2" className="grid gap-5 sm:grid-cols-2">
          <label className="block">Full name<input name="name" required autoComplete="name" className={field} /></label>
          <label className="block">Work email<input name="email" type="email" required autoComplete="email" className={field} /></label>
          <label className="block">Phone<input name="phone" type="tel" autoComplete="tel" className={field} /></label>
          <label className="block">Company<input name="company" required autoComplete="organization" className={field} /></label>
          <label className="block">Industry
            <select name="industry" required defaultValue="" className={field}><option value="" disabled>Select…</option>{industries.map((i) => <option key={i}>{i}</option>)}</select>
          </label>
          <label className="block">Company size
            <select name="size" required defaultValue="" className={field}><option value="" disabled>Select…</option>{sizes.map((s) => <option key={s}>{s}</option>)}</select>
          </label>
          <label className="block sm:col-span-2">Which product is this about?
            <select name="product" required defaultValue="" className={field}><option value="" disabled>Select…</option>{products.map((p) => <option key={p.slug}>{p.name}</option>)}<option>Custom engineering / not sure yet</option></select>
          </label>
        </ApiForm>
        <div>
          <p className="rounded-xl bg-panel p-4 text-sm text-mute">Please book a slot at least <strong className="text-fg">3 days from today</strong>. It gives us time to personalise the demo for your company.</p>
          <iframe src={company.booking} title="Book a demo" loading="lazy" className="mt-4 h-[640px] w-full rounded-xl border border-line bg-panel" />
        </div>
      </div>
    </>
  );
}
