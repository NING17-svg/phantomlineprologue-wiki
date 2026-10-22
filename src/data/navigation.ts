import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

/**
 * Cross-page navigation only. The four groups are the same player-task groups
 * the homepage directory uses, so a player who remembers a task can find the
 * page from anywhere without the full index being repeated above the body.
 */
export const primaryNavigation: LocalizedNavigationItem[] = [
  {
    href: "/guides/prologue-walkthrough",
    labels: { "en-US": "Start with your first deployment" },
    children: [
      { href: "/guides/prologue-walkthrough", labels: { "en-US": "Prologue walkthrough" } },
      { href: "/guides/husk-system", labels: { "en-US": "Husk system guide" } },
    ],
  },
  {
    href: "/guides/containing-anomalies",
    labels: { "en-US": "Run the job" },
    children: [
      { href: "/guides/containing-anomalies", labels: { "en-US": "How to contain anomalies" } },
      { href: "/guides/anomaly-pockets", labels: { "en-US": "Anomaly pockets" } },
      { href: "/guides/quintessence-upgrades", labels: { "en-US": "Quintessence upgrades" } },
    ],
  },
  {
    href: "/guides/survival-and-hazards",
    labels: { "en-US": "Stay alive in the field" },
    children: [
      { href: "/guides/survival-and-hazards", labels: { "en-US": "Hunger, hazards and inventory space" } },
      { href: "/guides/fire-modes", labels: { "en-US": "Fire modes and gunplay changes" } },
    ],
  },
  {
    href: "/guides/co-op-play",
    labels: { "en-US": "Play together" },
    children: [
      { href: "/guides/co-op-play", labels: { "en-US": "Co-op guide" } },
      { href: "/guides/dynamic-events", labels: { "en-US": "Dynamic events" } },
    ],
  },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}