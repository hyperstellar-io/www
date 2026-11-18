# Hyperstellar Technology website

Next.js (App Router) site. Copy lives in `lib/` (`content.ts`, `product-pages/`, `solutions/`, `industries/`, `blogs/`); pages are in `app/`.

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Forms (Resend)

Contact, demo, enterprise, waitlist and newsletter forms post to `app/api/forms/route.ts`, which emails the team through Resend. Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` (required; forms return an error without it)
- `FORMS_TO` (recipient; defaults to the company email in `lib/content.ts`)
- `FORMS_FROM` (a sender on a domain verified in Resend; the default only delivers to your own Resend account)
- `RESEND_AUDIENCE_ID` (optional; newsletter signups are also added to this audience)
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` (rate limiting: 6 submissions per 10 minutes per IP; without them the limit only applies per server instance)

## Product pages

Each product's copy is `lib/product-pages/<slug>.ts`. Lumen has its own page (`components/product-landings/LumenLanding.tsx`); the others use `ProductPage.tsx`, with an accent colour per product in `app/products/[slug]/page.tsx`. Signal is a coming-soon page (`components/SignalSoon.tsx`). Product images are `public/product-<slug>.webp`.

## Publishing blog posts

Original posts live in `lib/blogs/*.ts`. New posts are made at `/admin` (password-protected): the form saves each post as `content/posts/<slug>.json` in the GitHub repo, and the next build (`scripts/build-posts.mjs`, run by `predev` and `prebuild`) turns those files into `lib/blogs/generated.ts`. Your host redeploys on every commit, so a post goes live a few minutes after you publish.

Set in `.env.local` / the host: `ADMIN_PASSWORD` (12+ characters), `GITHUB_TOKEN` (fine-grained token with Contents: read and write on this repo), `GITHUB_REPO` (`owner/name`) and optionally `GITHUB_BRANCH` (default `main`).

**Scheduling:** set "Publish at" to a future time. The post is hidden until then. `.github/workflows/scheduled-posts.yml` runs hourly and calls your host's deploy hook (secret `DEPLOY_HOOK_URL`) when a post has just come due, so it appears without anyone pressing a button. Posts appear within about an hour of their time.

