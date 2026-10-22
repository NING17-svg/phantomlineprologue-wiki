import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Phantom Line: Prologue Wiki",
  brandMark: "PL",
  gameName: "Phantom Line: Prologue",
  domain: "phantomlineprologue.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://phantomlineprologue.wiki").replace(/\/$/, ""),
  description:
    "Field guides for Phantom Line: Prologue, the free opening chapter of Phantom Line: husks, anomaly containment, island survival, and co-op squads.",
  tagline:
    "Walkthrough, husk tactics, containment runs, survival budgets and squad play for the free Prologue chapter.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "Guide index",
        homeDetails: "About this site and recent updates",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search these guides",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recently reviewed guides",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
  ],
  author: "Phantom Line: Prologue Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Phantom Line: Prologue on Steam",
      href: "https://store.steampowered.com/app/5088140/Phantom_Line_Prologue/",
      description:
        "The official store page for the free introductory chapter, including its overview and release timing.",
    },
  ],
  disclaimer:
    "This is an unofficial fan guide site for Phantom Line: Prologue. It is not affiliated with or endorsed by Antistatic Studios Inc. Check the official store page before purchase decisions.",
};