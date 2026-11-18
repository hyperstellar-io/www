import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Perks from "@/components/Perks";
import Values from "@/components/Values";
import { company } from "@/lib/content";

export const metadata: Metadata = { title: "Work with us", description: "Join Hyperstellar's engineers, designers and researchers." };

const mail = (subject: string) => `mailto:${company.email}?subject=${encodeURIComponent(subject)}`;

export default function WorkWithUs() {
  return (
    <>
      <PageHero eyebrow="Work with us" title={<>Your ideas can shape <em>what we build next.</em></>}>
        We&apos;re a lean team that does its best work side by side. If you like hard problems and good company, come and help us turn ambitious ideas into things that work.
      </PageHero>

      <Values />
      <Perks />
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="flex flex-wrap gap-3">
          <a href={mail("Work with Hyperstellar")} className="btn btn-solid">Send us your profile</a>
        </div>
      </section>
      <CTA />
    </>
  );
}
