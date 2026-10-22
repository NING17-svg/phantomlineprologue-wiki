import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "visual-cover", supplementary: "collapsed" },
  // seoTitle / metaDescription / h1 are verbatim copies of the Guide Editor
  // index.md frontmatter title, frontmatter description and body `# H1`.
  h1: "Phantom Line: Prologue guides",
  seoTitle: "Phantom Line: Prologue guide hub for husks and anomalies",
  metaDescription:
    "Guides for the free opening chapter of Phantom Line: Prologue, from the H.U.S.K. husk system to anomaly containment, island survival and co-op squads.",
  summary:
    "Field guides for the free Prologue chapter: the walkthrough, husk tactics, containment runs, island survival and squad play.",
  hero: {
    eyebrow: "Unofficial guide hub",
    subtitle:
      "Walkthrough, husk tactics, containment runs, survival budgets and squad play for the free Prologue chapter.",
    ctas: [
      { label: "Start the walkthrough", href: "/guides/prologue-walkthrough" },
      { label: "How husks work", href: "/guides/husk-system" },
    ],
    assetId: "rift-beam-burnt-forest",
  },
  quickAnswer:
    "Phantom Line: Prologue is the free opening chapter of Phantom Line, a 1–4 player tactical co-op survival horror FPS. You play as an OPERATOR in a paranormal SWAT unit working for Mortfield Industries, deployed into the IRON CORRIDOR to investigate a research facility that has lost contact just as nuclear war breaks out.",
  quickAnswerContext:
    "The Prologue covers the introductory island: operator training, a first story mission, then Hestia and the island's open-world systems. Every guide below is written for that chapter.",
  keyFacts: [
    { label: "Chapter", value: "Free introductory Prologue" },
    { label: "Players", value: "1–4, PvE only" },
    { label: "Modes", value: "Single-player, online and LAN co-op" },
    { label: "Store", value: "Steam and Epic Games Store" },
    { label: "Base of operations", value: "Icebreaker Hestia" },
  ],
  modules: [
    {
      id: "start-here",
      type: "featured-guides",
      heading: "Start with the essentials",
      lead: {
        title: "Phantom Line: Prologue walkthrough, from training to Hestia",
        href: "/guides/prologue-walkthrough",
        description:
          "The fixed order of your first deployment: operator training, the first story mission, then reaching Hestia and the island unlocking.",
        assetId: "squad-holding-anomaly-portal",
      },
      supporting: [
        {
          title: "Phantom Line: Prologue husk system guide and solo husk tactics",
          href: "/guides/husk-system",
          description:
            "What H.U.S.K. is, how many bodies you get by squad size, and how to use the AI-held husk when you are playing alone.",
        },
        {
          title: "How to contain anomalies in Phantom Line: Prologue",
          href: "/guides/containing-anomalies",
          description:
            "What an anomaly is, why a containment run is squad work rather than a single target, and the order of operations inside the zone.",
        },
        {
          title: "Phantom Line: Prologue anomaly pockets, and what is behind the portals",
          href: "/guides/anomaly-pockets",
          description:
            "What lies behind the unstable portals on the island, why they are generated, and what entering one costs you.",
        },
      ],
    },
    {
      id: "every-guide",
      type: "guide-index",
      heading: "Every guide on this site",
      columns: 2,
      groups: [
        {
          title: "Start with your first deployment",
          items: [
            {
              label: "Prologue walkthrough",
              href: "/guides/prologue-walkthrough",
              description:
                "the fixed order of your first deployment: operator training, the first story mission, then reaching Hestia and the island unlocking.",
            },
            {
              label: "Husk system guide",
              href: "/guides/husk-system",
              description:
                "what H.U.S.K. is, how many bodies you get by squad size, and how to use the second husk when you are playing alone.",
            },
          ],
        },
        {
          title: "Run the job",
          items: [
            {
              label: "How to contain anomalies",
              href: "/guides/containing-anomalies",
              description:
                "what an anomaly is, why a containment run is squad work rather than a single target, and the order of operations inside the zone.",
            },
            {
              label: "Anomaly pockets",
              href: "/guides/anomaly-pockets",
              description:
                "what lies behind the unstable portals on the island, why they are generated, and what entering one costs you.",
            },
            {
              label: "Quintessence upgrades",
              href: "/guides/quintessence-upgrades",
              description:
                "where the progression resource comes from, the three things it pays for, and why the upgrades land on the husk you are wearing.",
            },
          ],
        },
        {
          title: "Stay alive in the field",
          items: [
            {
              label: "Hunger, hazards and inventory space",
              href: "/guides/survival-and-hazards",
              description:
                "how the four survival states feed each other, what to decide before you deploy, and how radiation and toxic zones spend the same budget.",
            },
            {
              label: "Fire modes and gunplay changes",
              href: "/guides/fire-modes",
              description:
                "the weapon work in the Prologue build, why fire discipline matters when ammunition is tracked harshly, and how a squad divides its gear.",
            },
          ],
        },
        {
          title: "Play together",
          items: [
            {
              label: "Co-op guide",
              href: "/guides/co-op-play",
              description:
                "PvE only, one to four players, how husk counts and equipment are allocated across a squad, and what a four-person operation asks of you.",
            },
            {
              label: "Dynamic events",
              href: "/guides/dynamic-events",
              description:
                "what moves on the island without warning, and why returning to a known location does not guarantee a familiar encounter.",
            },
          ],
        },
      ],
    },
  ],
  faqIds: [],
  relatedPageIds: [
    "prologue-walkthrough",
    "husk-system",
    "containing-anomalies",
    "co-op-play",
    "survival-and-hazards",
  ],
  schemaTypes: ["WebSite", "CollectionPage"],
  sourceStatus: "official",
  lastReviewed: "2026-10-22",
};