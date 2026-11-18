"use client";
import { useState } from "react";
import { send, personal } from "@/lib/send";

const topics = ["Products & features", "Pricing & quotes", "Implementation & delivery", "Managed services & support", "Partnerships"];
const field = "mt-2 w-full rounded-xl border border-line bg-panel px-4 py-3 text-fg placeholder:text-mute";

export default function EnterpriseContactForm({ offerings }: { offerings: { group: string; items: string[] }[] }) {
  const [topic, setTopic] = useState(topics[0]);
  const [emailError, setEmailError] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    if (personal.test(String(d.email).trim())) { setEmailError("Please use your company email address."); return; }
    setEmailError("");
    setState("sending");
    setState((await send("enterprise", { ...d, topic })) ? "sent" : "error");
  };

  if (state === "sent") {
    return (
      <div role="status" className="rounded-[1.75rem] bg-panel p-8 text-center sm:p-12">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-ion text-2xl text-on-ion" aria-hidden="true">✓</span>
        <h2 className="serif mt-5 text-3xl">Thanks, we&apos;ve got it</h2>
        <p className="mx-auto mt-3 max-w-md text-mute">Our enterprise team will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <fieldset>
        <legend className="eyebrow">I&apos;d like to discuss</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((t) => (
            <button key={t} type="button" aria-pressed={topic === t} onClick={() => setTopic(t)} className={`btn !py-2 !text-sm ${topic === t ? "btn-solid" : "btn-ghost"}`}>{t}</button>
          ))}
        </div>
      </fieldset>

      <label className="block">Your company email <span aria-hidden="true">*</span>
        <input name="email" type="email" required autoComplete="email" aria-invalid={!!emailError} aria-describedby="email-help" onChange={() => emailError && setEmailError("")} className={field} />
        <span id="email-help" className={`mt-1 block text-sm ${emailError ? "text-[#9a3f1f]" : "text-mute"}`}>{emailError || "Personal email domains aren't accepted."}</span>
      </label>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">First name <span aria-hidden="true">*</span><input name="first" required autoComplete="given-name" className={field} /></label>
        <label className="block">Last name <span aria-hidden="true">*</span><input name="last" required autoComplete="family-name" className={field} /></label>
        <label className="block">Company <span aria-hidden="true">*</span><input name="company" required autoComplete="organization" className={field} /></label>
        <label className="block">Job title <span aria-hidden="true">*</span><input name="title" required autoComplete="organization-title" className={field} /></label>
      </div>
      <label className="block">Which product or solution are you asking about? <span aria-hidden="true">*</span>
        <select name="offering" required defaultValue="" className={field}>
          <option value="" disabled>Select…</option>
          {offerings.map((g) => <optgroup key={g.group} label={g.group}>{g.items.map((i) => <option key={i}>{i}</option>)}</optgroup>)}
          <option>Not sure yet</option>
        </select>
        <span className="mt-1 block text-sm text-mute">If it&apos;s more than one, pick the main one and mention the rest below.</span>
      </label>
      <label className="block">Your question <span aria-hidden="true">*</span>
        <textarea name="question" required rows={6} className={field} />
        <span className="mt-1 block text-sm text-mute">Include your goals, timeline and team size if you can. It helps us route you to the right people.</span>
      </label>
      <label className="flex items-start gap-3 text-sm text-mute">
        <input name="privacy" type="checkbox" required className="mt-1 size-4 shrink-0 accent-[var(--ion)]" />
        <span>By submitting, I acknowledge Hyperstellar&apos;s <a href="/privacy-terms" className="text-accent underline-offset-4 hover:underline">Privacy &amp; terms</a>. <span aria-hidden="true">*</span></span>
      </label>
      <label className="flex items-start gap-3 text-sm text-mute">
        <input name="marketing" type="checkbox" className="mt-1 size-4 shrink-0 accent-[var(--ion)]" />
        <span>I&apos;d like to receive product news and event invitations from Hyperstellar.</span>
      </label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button disabled={state === "sending"} className="btn btn-solid">{state === "sending" ? "Sending…" : "Submit"}</button>
      {state === "error" && <p role="alert" className="text-sm text-[#9a3f1f]">Something went wrong. Please try again.</p>}
    </form>
  );
}
