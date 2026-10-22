# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

Site: `phantomlineprologue.wiki` (game `Phantom Line: Prologue`, primary locale `en-US`, no locale prefix).
This inventory is the real, exported route list — verify it with `npm run routes:manifest -- --output route-manifest.json` and `out/sitemap.xml`. It is not a template example; `/wiki`, `/guides`, `/release-date` and `/faq` do not exist on this site.

## Page Inventory

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Phantom Line Prologue guides | Find the best entry point | Start the walkthrough → `/guides/prologue-walkthrough` | Hub | Hero (H1 `Phantom Line: Prologue guides`) → featured entry cards → Key Facts → full guide index in 4 player-task groups → recent-reviews disclosure. All 9 guides are listed. |
| `/guides/prologue-walkthrough` | `src/data/pages/guide-pages.ts` | Guide | Phantom Line Prologue walkthrough | Follow the first deployment in order | Related Pages → `/guides/survival-and-hazards` | Category entry (Missions and the Island) | `reader_intent: process`. 4-step numbered flow: operator training → first story mission → Hestia → island open world. Links onward to `survival-and-hazards`, `anomaly-pockets`, `dynamic-events`. |
| `/guides/husk-system` | `src/data/pages/guide-pages.ts` | Guide | Phantom Line Prologue husk system guide | Understand the H.U.S.K. body system | Related Pages → `/guides/co-op-play` | Topic (Husks and Multi-Body Control) | `reader_intent: answer`. Also carries the second source keyword `Phantom Line Prologue solo play husk tactics` in its "Solo play husk tactics" H2. Squad-size body-count table; links to `co-op-play`, `quintessence-upgrades`, `survival-and-hazards`. |
| `/guides/fire-modes` | `src/data/pages/guide-pages.ts` | Guide | Phantom Line Prologue fire modes | Understand the fire-mode/ammo changes | Related Pages → `/guides/co-op-play` | Topic (Weapons and Combat) | `reader_intent: answer`. Change list + ammunition discipline; links to `co-op-play`, `quintessence-upgrades`, `survival-and-hazards`. |
| `/guides/survival-and-hazards` | `src/data/pages/guide-pages.ts` | Guide | Phantom Line Prologue hunger management | Manage the four survival states and pack budget | Related Pages → `/guides/prologue-walkthrough` | Topic (Survival and Hazards) | `reader_intent: process`. Carries three source keywords (`hunger management`, `radiation hazard protection`, `inventory space management`) across H2s; health/hunger/hydration/stamina all feed one energy budget. Links to `prologue-walkthrough`, `quintessence-upgrades`, `co-op-play`. |
| `/guides/anomaly-pockets` | `src/data/pages/guide-pages.ts` | Guide | Phantom Line Prologue anomaly pockets | Know what a Pocket is and where the portals are | Related Pages → `/guides/containing-anomalies` | Category entry (Anomaly Hunting and Progression) | `reader_intent: answer`. Portal/pocket explanation + generation variance; links to `husk-system`, `containing-anomalies`, `dynamic-events`. |
| `/guides/containing-anomalies` | `src/data/pages/guide-pages.ts` | Guide | Phantom Line Prologue how to contain anomalies | Execute one containment run | Related Pages → `/guides/anomaly-pockets` | Detail of `anomaly-pockets` | `reader_intent: process`. 7-step numbered run; detection gear (Ectometer, scanners, motion tracker, heavy shield). Links to `anomaly-pockets`, `co-op-play`, `quintessence-upgrades`. |
| `/guides/quintessence-upgrades` | `src/data/pages/guide-pages.ts` | Guide | Phantom Line Prologue quintessence upgrades | Decide what to spend the progression resource on | Related Pages → `/guides/containing-anomalies` | Detail of `anomaly-pockets` | `reader_intent: process`. Source → three spends (supernatural resistance, abilities, tactical gear) → upgrade loop aboard Hestia. Links to `containing-anomalies`, `husk-system`. |
| `/guides/dynamic-events` | `src/data/pages/guide-pages.ts` | Guide | Phantom Line Prologue dynamic events | Handle unscripted island encounters | Related Pages → `/guides/anomaly-pockets` | Detail of `prologue-walkthrough` | `reader_intent: answer`. Threat-type list + generation reading; links to `anomaly-pockets`, `prologue-walkthrough`. |
| `/guides/co-op-play` | `src/data/pages/guide-pages.ts` | Guide | Phantom Line Prologue co-op guide | Set up solo/duo/squad play | Related Pages → `/guides/husk-system` | Topic (Co-op Play) | `reader_intent: answer`. PvE, 1–4 players, online + LAN; husk-count-by-squad-size table and equipment division. Links to `husk-system`, `containing-anomalies`, `quintessence-upgrades`. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Phantom Line Prologue Wiki | Trust and editorial policy | Contact | Trust | Explains scope, source policy and how guides are written. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Phantom Line Prologue Wiki | Corrections and source updates | About | Trust | Publishes `support@phantomlineprologue.wiki`; must keep a real site address. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | Phantom Line Prologue Wiki privacy policy | Privacy and analytics | Terms | Trust | Describes GA4 use; must match the GA4 state in `builder/launch-result.json`. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | Phantom Line Prologue Wiki terms of use | Site use expectations | Privacy Policy | Trust | Unofficial fan-site status, no affiliation with Antistatic Studios Inc. |

`/404` is rendered from `src/app/not-found.tsx` with no canonical page role; it is not in the sitemap.

## Generated Route Families

- Homepage: `src/data/pages/home.ts`. Guide pages: `src/data/pages/guide-pages.ts` (9 entries). Fixed/trust pages: `src/data/pages/site-pages.ts` (4 entries).
- All routes are statically enumerated at build time into `out/<path>.html`; there are no entity hubs or tool pages on this site (`src/data/entities.ts` is empty of published families).
- Final route inventory: `npm run routes:manifest -- --output route-manifest.json`.

## Content Clusters

- Missions and the Island: `/guides/prologue-walkthrough`, `/guides/dynamic-events`
- Anomaly Hunting and Progression: `/guides/anomaly-pockets`, `/guides/containing-anomalies`, `/guides/quintessence-upgrades`
- Husks and Multi-Body Control: `/guides/husk-system`
- Weapons and Combat: `/guides/fire-modes`
- Survival and Hazards: `/guides/survival-and-hazards`
- Co-op Play: `/guides/co-op-play`
- Trust and legal: `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage links to all 9 guides: `prologue-walkthrough` and `husk-system` as hero CTAs, all 9 in the full index.
- Category entries (`prologue-walkthrough`, `anomaly-pockets`) carry the "what next" H2 links into their detail pages.
- Every guide's next-step link lives inside the H2 that the Guide Editor `page-plan.md` mapped it to (see "正文下一步" in `page-assembly.md` §2.2), not only in Related Pages.
- Body links form the cross-cluster chain: `husk-system ↔ co-op-play`, `containing-anomalies ↔ anomaly-pockets`, `quintessence-upgrades → husk-system`, `survival-and-hazards → prologue-walkthrough`, `dynamic-events → anomaly-pockets`.
- Related Pages and the right rail are supplementary navigation only; they must not be the sole path to another guide.

## Open Questions

- None blocking launch. Game facts are frozen to the Prologue material set; no post-launch content promises are made.