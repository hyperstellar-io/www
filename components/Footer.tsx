import Link from "next/link";
import { company, products } from "@/lib/content";
import Clocks from "./Clocks";
import NewsletterForm from "./NewsletterForm";

const col = "space-y-2.5 text-sm text-mute [&_a:hover]:text-fg";
const head = "mb-5 text-sm";
export default function Footer() {
  return (
    <footer className="relative z-10 mx-2 mb-2 overflow-hidden rounded-[2rem] bg-panel sm:mx-3 sm:mb-3">
      <div className="grid gap-10 px-6 pb-4 pt-10 sm:px-8 lg:grid-cols-[1fr_1.45fr]">
        <div>
          <p className="serif text-3xl leading-tight sm:text-4xl"><em>The Post</em> in your inbox.</p>
          <NewsletterForm />
        </div>
        <div>
          <Clocks />
          <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-4">
            <ul className={col}><li className={head + " text-fg"}>Products</li>{[...products].sort((x, y) => x.name.localeCompare(y.name)).map((p) => <li key={p.slug}><Link href={`/products/${p.slug}`}>{p.name}</Link></li>)}</ul>
            <ul className={col}><li className={head + " text-fg"}>Resources</li>{[["/industries", "Industries"], ["/insights", "Insights"], ["/solutions", "Solutions"]].map(([h, l]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul>
            <ul className={col}><li className={head + " text-fg"}>Company</li>{[["/company", "About"], ["/contact", "Contact"], ["/privacy-terms", "Privacy & terms"], ["/work-with-us", "Work with us"]].map(([h, l]) => <li key={h}><Link href={h}>{l}</Link></li>)}</ul>
            <ul className={col}><li className={head + " text-fg"}>Socials</li>{[...company.social].sort((x, y) => x.label.localeCompare(y.label)).map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul>
          </div>
        </div>
      </div>
      {/* Wordmark stretched to the full width of the footer */}
      <svg viewBox="0 0 1000 150" className="mt-4 block w-full px-6 pb-4 sm:px-8" role="img" aria-label="Hyperstellar Technology">
        <text x="0" y="118" fontSize="128" textLength="1000" lengthAdjust="spacingAndGlyphs" fill="var(--fg)" style={{ fontFamily: "var(--font-newsreader), serif", fontWeight: 600, letterSpacing: "-0.03em" }}>Hyperstellar Technology</text>
      </svg>
    </footer>
  );
}
