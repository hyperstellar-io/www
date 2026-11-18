"use client";
import { useState } from "react";
import { send } from "@/lib/send";
import { company } from "@/lib/content";

export default function ApiForm({ type, className, button, buttonClass = "btn btn-solid", children }: { type: string; className?: string; button: string; buttonClass?: string; children: React.ReactNode }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    setState((await send(type, Object.fromEntries(new FormData(e.currentTarget)))) ? "sent" : "error");
  };
  if (state === "sent") return (
    <div role="status" className="rounded-[1.75rem] bg-panel p-8 text-center sm:p-12">
      <span className="mx-auto grid size-14 place-items-center rounded-full bg-ion text-2xl text-on-ion" aria-hidden="true">✓</span>
      <h2 className="serif mt-5 text-3xl">Thanks, we&apos;ve got it</h2>
      <p className="mx-auto mt-3 max-w-md text-mute">Our team will get back to you soon.</p>
    </div>
  );
  return (
    <form onSubmit={submit} className={className}>
      {children}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button disabled={state === "sending"} className={buttonClass}>{state === "sending" ? "Sending…" : button}</button>
      {state === "error" && <p role="alert" className="text-sm text-[#9a3f1f] sm:col-span-2">Something went wrong. Please try again, or email {company.email}.</p>}
    </form>
  );
}
