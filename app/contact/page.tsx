import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ApiForm from "@/components/ApiForm";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Contact / Book a consultation", description: "Talk to Hyperstellar Technology about AI engineering, products or partnerships." };

const field = "mt-2 w-full border border-line bg-panel px-4 py-3 text-fg placeholder:text-mute";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let&apos;s talk about what <span className="italic">you&apos;re building.</span></>}>
        A real conversation. We&apos;ll tell you honestly if we&apos;re the right fit.
      </PageHero>
      <div className="mx-auto grid max-w-7xl gap-16 border-t border-line px-5 py-16 md:grid-cols-[2fr_1fr]">
        <ApiForm type="contact" button="Send message" className="space-y-6">
          <label className="block">Full name<input name="name" required autoComplete="name" className={field} /></label>
          <label className="block">Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
          <label className="block">Company<input name="company" autoComplete="organization" className={field} /></label>
          <label className="block">What are you looking for?
            <select name="topic" required className={field}>
              <option>Technology services (AI, cloud, custom dev, consulting)</option>
              <option>Product demo</option>
              <option>Partnership / collaboration</option>
              <option>Something else</option>
            </select>
          </label>
          <label className="block">Tell us about your project<textarea name="message" required rows={6} className={field} /></label>
        </ApiForm>
        <aside className="space-y-8">
          <div><p className="eyebrow">Discovery call</p><a className="mt-2 inline-block btn btn-solid" href={company.booking} target="_blank" rel="noopener noreferrer">Pick a time →</a></div>
          <div><p className="eyebrow">Email</p><a className="mt-2 block break-all text-lg" href={`mailto:${company.email}`}>{company.email}</a></div>
          <div><p className="eyebrow">Elsewhere</p><ul className="mt-2 space-y-1 text-mute">{company.social.map((s) => <li key={s.label}><a className="hover:text-fg" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul></div>
        </aside>
      </div>
    </>
  );
}
