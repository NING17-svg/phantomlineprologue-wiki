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

### 2026-10-22 — Search and analytics connections (builder, post-deploy)

- Task: Connect the already-public site to GA4, Google Search Console and Bing Webmaster, then send the first IndexNow notification.
- URLs affected: none. Sitemap, canonicals, robots and all 14 routes are unchanged from the launch-prep entry.
- GA4: created property `properties/560092438` (timezone `Asia/Shanghai`) and web data stream `16178595588`; measurement ID `G-VFVBJBCLC8` written to `wrangler.jsonc` `vars.NEXT_PUBLIC_GA_MEASUREMENT_ID`. The measurement ID also renders in the public tag; the central registry records only the property, stream, timezone and GSC property.
- GSC: domain property `sc-domain:phantomlineprologue.wiki` verified with `siteOwner` permission and its DNS TXT record created; `https://phantomlineprologue.wiki/sitemap.xml` submitted and read back with 14 URLs. Readback showed 0 indexed at submission time — submission is not indexing.
- Bing: verification code `301CD5703A43F1E7C0C842C1F1A0A1D4` written to `vars.NEXT_PUBLIC_BING_SITE_AUTH_CODE` by the builder's `configure_bing_pool.py`, so the shared pool build variables stay untouched. Site verified and sitemap feed read back as `Success` from `GetFeeds`.
- IndexNow: key `public/indexnow-a3a533f6bb1d805c0938ddc9cfa961f3.txt` submitted 14 sitemap URLs; the service returned HTTP 202 with key validation still pending, which is a remote warning, not an indexing result.
- Deployment note: the first pool rebuild after the GA4 commit failed because an earlier crashed build had left the shared `pilot-deployment-lock` lease held; the lock was left to expire on its own 25-minute lease and the build was retriggered through this site's existing deploy hook. No lock ref was force-edited and no pool was emptied to recover.