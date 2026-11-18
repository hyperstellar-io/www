import Link from "next/link";

// Shared full-screen status page: 401, 403, 404, 405, 429, 500, 503. Server-safe; pass `retry` from a client boundary.
const pages = {
  401: ["Sign in required", "You need to sign in to view this page."],
  403: ["Access denied", "You don't have permission to view this page. If you think that's a mistake, get in touch and we'll sort it out."],
  404: ["Page not found", "The page you're looking for has moved, or never existed. Try one of these instead."],
  405: ["Method not allowed", "That request type isn't supported here. Head back and try again."],
  429: ["Too many requests", "You've made a lot of requests in a short time. Please wait a moment and try again."],
  500: ["Something went wrong", "An unexpected error on our side. It's been noted; try again in a moment."],
  503: ["Back shortly", "We're doing some maintenance. Please check back in a few minutes."],
} as const;
const links = [["/products", "Products"], ["/solutions", "Solutions"], ["/industries", "Industries"], ["/insights", "Insights"], ["/contact", "Contact"]];

export default function ErrorPage({ code, retry }: { code: keyof typeof pages; retry?: () => void }) {
  const [title, body] = pages[code];
  return (
    <section className="mx-2 mt-2 flex min-h-[100svh] flex-col items-center justify-center rounded-[2rem] bg-panel px-5 pb-16 pt-32 text-center sm:mx-3">
      <p className="eyebrow">Error {code}</p>
      <h1 className="serif mt-4 text-[clamp(7rem,26vw,18rem)] leading-[0.85] tracking-tight">{String(code).split("").map((d, i) => i === 1 ? <em key={i} className="text-accent">{d}</em> : d)}</h1>
      <h2 className="h2 mt-8">{title}</h2>
      <p className="mx-auto mt-4 max-w-md text-lg text-mute">{body}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-solid">Back to home</Link>
        {retry ? <button type="button" onClick={retry} className="btn btn-ghost">Try again</button> : <Link href="/contact" className="btn btn-ghost">Contact us</Link>}
      </div>
      <ul className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-mute">
        {links.map(([h, l]) => <li key={h}><Link href={h} className="hover:text-fg">{l}</Link></li>)}
      </ul>
    </section>
  );
}
