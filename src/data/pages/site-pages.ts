import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "What this unofficial Phantom Line: Prologue guide site covers, where its facts come from, and how the guides are written.",
    summary:
      "An unofficial guide site for the free Prologue chapter: what it covers, where the facts come from, and how the guides are written.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Nine guides for the free opening chapter, written against the official store page rather than against guesswork.",
      ctas: [
        { label: "Start reading", href: "/" },
        { label: "Contact", href: "/contact" },
      ],
    },
    quickAnswer: site.disclaimer,
    keyFacts: [
      { label: "Status", value: "Unofficial fan guide site" },
      { label: "Scope", value: "The free Prologue chapter" },
      { label: "Developer", value: "Antistatic Studios Inc." },
      { label: "Official page", value: "Store page on Steam" },
    ],
    modules: [
      {
        id: "mission",
        type: "prose",
        heading: "What this site covers",
        body:
          "This site covers Phantom Line: Prologue, the free introductory chapter to Phantom Line. That means the operator training, the first story mission, the icebreaker Hestia and the introductory island's open-world systems — hunting, cooking, scavenging, the four survival states, and the unstable portals into Anomaly Pockets.\n\nThe guides are written to answer one question each: what the husk system actually is, how a containment run is put together, what to take before a deployment, how fire discipline works when ammunition is tracked harshly, how equipment divides across a squad, and what happens on an island whose events are generated rather than placed. The [Prologue walkthrough](/guides/prologue-walkthrough) is the place to start if you have never played.",
      },
      {
        id: "sourcing",
        type: "prose",
        heading: "Where the facts come from",
        body:
          "Every fact on this site is traced back to the official store page for Phantom Line: Prologue, or to material the developer has published about it. Where the official source does not confirm something, the guides say so rather than filling the gap.\n\nThat rule is why the guides spend so much time on systems rather than on numbers. Build values, drop tables and patch-specific tuning are exactly the things that change between builds, so the site writes down the decisions behind a run — what to carry, who holds the detector, when to leave — rather than figures that go stale.",
        links: site.officialSources,
      },
      {
        id: "status",
        type: "prose",
        heading: "Unofficial status",
        body: site.disclaimer,
      },
    ],
    faqIds: [],
    relatedPageIds: ["contact", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Send a correction, an official source update, or site feedback for the Phantom Line: Prologue guide hub.",
    summary:
      "Corrections, official source updates and feedback for the Phantom Line: Prologue guide site.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Corrections and source updates are the two things worth sending. The address below reaches the editors.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Email support@phantomlineprologue.wiki with corrections, official source links, or feedback about the guides.",
    keyFacts: [
      { label: "Address", value: "support@phantomlineprologue.wiki" },
      { label: "Best used for", value: "Corrections and source updates" },
      { label: "Not accepted", value: "Account or personal data" },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "How to reach the editors",
        body:
          "Write to **support@phantomlineprologue.wiki**. That address is monitored, and it is the only channel for anything about the site itself.\n\nWhen you write about a guide, it helps to include the page address and the sentence you believe is wrong, plus the official source you are measuring it against. That is usually enough to make the correction in one pass.",
      },
      {
        id: "corrections",
        type: "prose",
        heading: "What to send",
        body:
          "Two kinds of message are worth sending, and both are taken seriously.\n\n**Corrections.** If a guide states something the official store page contradicts, say so and point at the source. Guides are rewritten when the underlying facts change, and a stale line that nobody reports stays stale.\n\n**Source updates.** The developer publishes updates as the Prologue develops. When a new official post changes something the site describes — a system, a scope detail, a release timing fact — send the link and the guide will be revised against it.\n\nWhat this site cannot take is help with the game itself. Account questions, purchases, matchmaking problems and anything involving your game account belong with Steam or with the developer, not here. Please do not send account details, passwords, or any other personal or financial information.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-10-22",
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "What this Phantom Line: Prologue guide site collects, why it is used, and how to reach the editors about it.",
    summary:
      "A plain account of what the site collects, what the reserved advertising positions do, and how to contact the editors.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "No accounts, no comments, no payments. Here is what the site does collect and why.",
      ctas: [{ label: "Terms of Use", href: "/terms" }],
    },
    quickAnswer:
      "This site has no user accounts, comments or payments. It does not ask for personal information, and any data it processes comes from ordinary page requests.",
    keyFacts: [
      { label: "Accounts", value: "None" },
      { label: "Payments", value: "None" },
      { label: "Analytics", value: "Aggregate, when configured" },
      { label: "Advertising", value: "Reserved positions, third-party provider" },
    ],
    modules: [
      {
        id: "data",
        type: "prose",
        heading: "Information this site collects",
        body:
          "The site is a static set of published pages. It has no accounts, no comment system, no newsletter signup and no payments, and it never asks you to submit personal information.\n\nReading a page requires the ordinary technical exchange any website performs: your browser requests the page, and the hosting and network providers involved process the request. That exchange can include an IP address and browser details, and it happens whether or not this site keeps any record of it.",
      },
      {
        id: "analytics",
        type: "prose",
        heading: "Analytics and advertising",
        body:
          "The site reserves advertising positions in its page layout. Where an ad is served, the advertising provider handles that request itself and may use cookies or similar technologies to deliver and measure it. No advertising code is loaded, and no advertising request is made, while those positions are unfilled.\n\nAggregate analytics may also be used to see which guides readers actually reach, in the same anonymised form as any ordinary traffic measurement. This site never attempts to identify individual readers, and never links a reading session to an account, because there are no accounts.",
      },
      {
        id: "contact-messages",
        type: "prose",
        heading: "Messages you send",
        body:
          "If you email the editors through the contact address, the message is stored only as long as it takes to deal with the correction or feedback in it. Please do not include game account credentials, payment details, or any other sensitive personal information — nothing sent here needs them.",
      },
      {
        id: "updates",
        type: "prose",
        heading: "Changes to this policy",
        body:
          "This policy changes when the site's behaviour changes: if analytics providers, advertising providers, hosting or contact methods change, this page changes with them. Questions about any of it go to the contact address.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-22",
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms for using this unofficial Phantom Line: Prologue guide site: informational use, unofficial status, and acceptable use.",
    summary:
      "The conditions for using this unofficial guide site, including its unofficial status and how its content may be used.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "What this site is, what it is not, and the ground rules for using it.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer: site.disclaimer,
    keyFacts: [
      { label: "Use", value: "Informational guide content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Accuracy", value: "Verified against official sources" },
      { label: "Game support", value: "Not provided here" },
    ],
    modules: [
      {
        id: "unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "This site is not affiliated with, endorsed by, or sponsored by Antistatic Studios Inc., the developer and publisher of Phantom Line, nor by Steam, nor by any platform holder or trademark owner. Game names, factions and other references are used descriptively to identify the game the guides are about.\n\nFor anything that matters commercially — buying, playing, account access, support — go to the official store page rather than to this site.",
      },
      {
        id: "accuracy",
        type: "prose",
        heading: "Accuracy of the information",
        body:
          "The guides are written against the official store page and against material the developer has published, and they are revised when those sources change. A Prologue build is still in development, so specific values, systems and timing can change between updates.\n\nTreat the guides as informational. Where the site and the official source disagree, the official source is right.",
      },
      {
        id: "acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "The site is free to read and free to link to. Automated bulk copying of the guides for republication elsewhere is not something the editors can support, and requests for it should go through the contact address first.\n\nDo not interfere with the site's availability, attempt to compromise it, or send anything unlawful or harmful through the contact channel.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: "2026-10-22",
  },
];