import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Privacy & terms", description: "How Hyperstellar Technology handles your data and the terms of using this site." };

// TODO: placeholder summary; replace with counsel-reviewed policy text before launch.
const sections = [
  ["Data we collect", "Details you send us through forms or email (name, email, phone, company, job title and your message), and your email address if you join The Post newsletter or a product waitlist. We do not run advertising trackers."],
  ["How we use it", "To reply to you, schedule demos and run our business. We do not sell your data."],
  ["Terms of use", "Site content is provided as is and remains the property of Hyperstellar Technology."],
  ["Third parties", "Form submissions are delivered to us by email through Resend, which also holds newsletter and waitlist addresses for us. Bookings are handled by Cal.com. Their policies apply to data you give them."],
  ["How long we keep it", "Enquiries are kept as long as needed to deal with them. Newsletter and waitlist addresses are kept until you ask us to remove them."],
  ["Your rights", `To access, correct or delete your data, email ${company.email}.`],
];

export default function PrivacyTerms() {
  return (
    <>
      <PageHero eyebrow="Legal" title={<>Privacy <span className="italic">&amp; terms.</span></>}>How we handle your data.</PageHero>
      <div className="mx-auto max-w-3xl space-y-8 border-t border-line px-5 py-12">
        {sections.map(([h, b]) => <section key={h}><h2 className="serif text-2xl">{h}</h2><p className="mt-2 text-mute">{b}</p></section>)}
      </div>
    </>
  );
}
