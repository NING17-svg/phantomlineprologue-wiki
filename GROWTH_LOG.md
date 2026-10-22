# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents. This file covers `phantomlineprologue.wiki` only — it does not carry shared-template history.

## Change Log

### 2026-10-22 — First launch of phantomlineprologue.wiki (builder, launch preparation)

- Task: Take the Page Builder static export of `phantomlineprologue.wiki` and make it production-launchable without changing any page content, structure, navigation or ad anchor.
- URLs affected: none added, removed or renamed. The 14 planned routes (`/`, 9 `/guides/*`, 4 trust pages) export exactly as Page Builder delivered them.
- Content changed: none. All guide titles, descriptions, H1s, canonicals, robots and internal links are unchanged from the local build baseline.
- Integration changes (production wiring only):
  - Restored the fixed AdSense ownership trio required by `AGENTS.md`: `google.com, pub-4194035852162505, DIRECT, f08c47fec0942fa0` in `public/ads.txt`, the `google-adsense-account` meta tag, and the AdSense loader script in the root layout. Page Builder had stripped these as foreign template config; they are public publisher identifiers owned by the shared template, not per-site secrets, and their absence would have dropped the site's AdSense ownership. No publisher value was invented or swapped.
  - Rewrote `CONTENT_INDEX.md` to this site's real 14-route inventory. The inherited file still listed template routes (`/wiki`, `/guides`, `/release-date`, `/faq`) that do not exist here, plus "Template Game" keywords.
  - Rewrote `GROWTH_LOG.md` to this site's own history, replacing copied shared-template entries.
  - Replaced the remaining `example.com` placeholders in `AGENTS.md` with `https://phantomlineprologue.wiki`.
  - Generated the IndexNow ownership key file under `public/` (site supports `indexnow:setup`).
- Ad baseline: `ad-placement-manifest.json` unchanged — 6 semantic slots, 11 unit keys. Every `src/data/ads.ts` value is still empty, so no Adsterra request is emitted. Real codes are supplied only by `adsterra-integrator` after launch.
- Deployment: static export (`output: "export"`), `wrangler.jsonc` serves `./out` as Static Assets with `404-page` / `drop-trailing-slash` and no Worker `main`. Served from a shared Cloudflare Worker pool; the site repository and the pool deployment repository keep separate commits.
- Verification: `npm run verify` (typecheck, lint, build) passes; public routes, canonical, sitemap, ads.txt and the AdSense tags are checked again after deploy by the builder launch verification.
- Boundaries: no game-fact change, no search/keyword claim beyond the collected material, and no claim of indexing, ad fill or revenue.