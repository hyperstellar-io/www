"use client";
import { useRef, useState } from "react";
import { send } from "@/lib/send";

export default function NewsletterForm() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [ok, setOk] = useState(true);
  const [busy, setBusy] = useState(false);
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setBusy(true);
    const sent = await send("newsletter", Object.fromEntries(new FormData(form)));
    setBusy(false);
    setOk(sent);
    if (sent) form.reset();
    dialog.current?.showModal();
  };
  return (
    <>
      <form onSubmit={submit} className="mt-6 flex max-w-md items-center rounded-full border border-fg/30 bg-ink p-1 transition focus-within:border-fg">
        <label className="sr-only" htmlFor="nl">Email address</label>
        <input id="nl" name="email" type="email" required placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-mute" />
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button disabled={busy} className="btn btn-solid !px-5 !py-2.5">{busy ? "…" : "Subscribe"}</button>
      </form>
      <dialog ref={dialog} aria-labelledby="nl-title" onClick={(e) => e.target === dialog.current && dialog.current.close()} className="m-auto w-[min(92vw,28rem)] rounded-3xl border border-line bg-ink p-0 text-fg shadow-[0_30px_80px_rgba(0,0,0,.35)] backdrop:bg-black/50 backdrop:backdrop-blur-sm">
        <div className="p-8 text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-full bg-ion text-2xl text-on-ion" aria-hidden="true">{ok ? "✓" : "!"}</span>
          <h2 id="nl-title" className="serif mt-5 text-3xl">{ok ? "You're subscribed" : "Something went wrong"}</h2>
          <p className="mt-3 text-mute">{ok ? <>Welcome to <em>The Post.</em></> : "We couldn't sign you up just now. Please try again in a moment."}</p>
          <button type="button" onClick={() => dialog.current?.close()} className="btn btn-ghost mt-7">Close</button>
        </div>
      </dialog>
    </>
  );
}
