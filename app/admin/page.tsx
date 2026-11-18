import type { Metadata } from "next";
import { Suspense } from "react";
import { cookies } from "next/headers";
import PageHero from "@/components/PageHero";
import { AdminEditor, AdminLogin } from "@/components/AdminEditor";
import { COOKIE, adminReady, industryOptions, offeringOptions, sessionSigOk } from "@/lib/admin";

export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };

async function Gate() {
  if (!adminReady()) return <p className="text-center text-mute">Admin is off. Set <code>ADMIN_PASSWORD</code> (12+ characters) to turn it on.</p>;
  return sessionSigOk((await cookies()).get(COOKIE)?.value) ? <AdminEditor industries={industryOptions} offerings={offeringOptions} /> : <AdminLogin />;
}

export default function Admin() {
  return (
    <>
      <PageHero eyebrow="Admin" title={<>Publish a <span className="italic">post.</span></>}>Posts are saved to the repository and go live after the next build.</PageHero>
      <div className="mx-auto max-w-3xl border-t border-line px-5 py-12"><Suspense fallback={null}><Gate /></Suspense></div>
    </>
  );
}
