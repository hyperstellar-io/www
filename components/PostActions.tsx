"use client";
import { useState } from "react";

export default function PostActions({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    const url = location.href;
    try {
      if (navigator.share) return await navigator.share({ title, url });
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };
  return (
    <div className="flex items-center gap-3">
      <span role="status" className="text-sm opacity-80">{copied && "Link copied"}</span>
      <button type="button" onClick={share} className="btn btn-ghost !py-2.5">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 15V3m0 0L8 7m4-4 4 4M5 12v8h14v-8" /></svg>
        Share
      </button>
    </div>
  );
}
