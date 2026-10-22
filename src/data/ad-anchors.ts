import type { ModuleAdAnchor } from "@/components/ads/AdModuleSequence";

/**
 * One `guide-section-break` per guide page, anchored after the first complete
 * answer section so the ad never lands between the quick answer and the body,
 * and never splits a step list, table or module. Keys are PageContent ids.
 */
export const guideAdAnchors: Record<string, ModuleAdAnchor[]> = {
  "husk-system": [{ after: "how-many-husks", slot: "guide-section-break" }],
  "fire-modes": [{ after: "fire-discipline", slot: "guide-section-break" }],
  "survival-and-hazards": [{ after: "before-you-deploy", slot: "guide-section-break" }],
  "anomaly-pockets": [{ after: "whats-inside", slot: "guide-section-break" }],
  "containing-anomalies": [{ after: "containment-run", slot: "guide-section-break" }],
  "quintessence-upgrades": [{ after: "what-it-pays-for", slot: "guide-section-break" }],
  "prologue-walkthrough": [{ after: "operator-training", slot: "guide-section-break" }],
  "dynamic-events": [{ after: "not-a-mission-list", slot: "guide-section-break" }],
  "co-op-play": [{ after: "husks-split", slot: "guide-section-break" }],
};