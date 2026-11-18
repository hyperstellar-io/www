import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ApiForm from "@/components/ApiForm";
import { products } from "@/lib/content";

export const metadata: Metadata = { title: "Join the waitlist", description: "Get early access to Hyperstellar's products as they open up." };

const field = "mt-2 w-full rounded-xl border border-line bg-panel px-4 py-3 text-fg placeholder:text-mute";

// ?product=<name> preselects the dropdown; unknown names fall back to "Select…".
async function Form({ searchParams }: PageProps<"/waitlist">) {
  const { product } = await searchParams;
  const pre = products.find((p) => p.name === product)?.name ?? "";
  return (
    <ApiForm type="waitlist" button="Join the waitlist" className="space-y-6">
      <label className="block">Full name<input name="name" required autoComplete="name" className={field} /></label>
      <label className="block">Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
      <label className="block">Company<input name="company" autoComplete="organization" className={field} /></label>
      <label className="block">Which product?
        <select name="product" required defaultValue={pre} className={field}><option value="" disabled>Select…</option>{products.map((p) => <option key={p.slug}>{p.name}</option>)}</select>
      </label>
    </ApiForm>
  );
}

export default function Waitlist(props: PageProps<"/waitlist">) {
  return (
    <>
      <PageHero eyebrow="Waitlist" title={<>Be first in <span className="italic">line.</span></>}>
        Tell us which product you&apos;re interested in and we&apos;ll reach out when it opens up.
      </PageHero>
      <div className="mx-auto max-w-2xl border-t border-line px-5 py-16">
        <Suspense fallback={null}><Form {...props} /></Suspense>
      </div>
    </>
  );
}
