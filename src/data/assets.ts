import type { AssetManifest } from "@/types/assets";

/**
 * Display images delivered in the project's fixed Collector directory
 * (`<project>/collector/images/`), each viewed before selection. `objectPosition`
 * keeps the crop on the composition's subject rather than the geometric centre.
 */
export const assetManifest = {
  "rift-beam-burnt-forest": {
    id: "rift-beam-burnt-forest",
    src: "/images/rift-beam-burnt-forest.jpg",
    alt: "A dead pine forest in cold grey fog with a vertical red rift beam shooting into the sky above two Operators.",
    width: 1920,
    height: 1080,
    sourceUrl: "https://store.steampowered.com/app/5088140/Phantom_Line_Prologue/",
    sourcePage: "official store page",
    usage: "Home hero media, right of the hero copy",
    pageIds: ["home"],
    objectPosition: "52% 50%",
    fallback: "surface",
  },
  "squad-holding-anomaly-portal": {
    id: "squad-holding-anomaly-portal",
    src: "/images/squad-holding-anomaly-portal.jpg",
    alt: "Two Operators holding position around a red-glowing unstable portal inside a makeshift camp.",
    width: 1920,
    height: 1080,
    sourceUrl: "https://store.steampowered.com/app/5088140/Phantom_Line_Prologue/",
    sourcePage: "official store page",
    usage: "Home featured guide lead card for the Prologue walkthrough",
    pageIds: ["home"],
    objectPosition: "40% 50%",
    fallback: "surface",
  },
  "anomaly-pocket-liminal-curtains": {
    id: "anomaly-pocket-liminal-curtains",
    src: "/images/anomaly-pocket-liminal-curtains.jpg",
    alt: "Deep red theatre curtains opening onto a dark corridor where two silhouetted figures stand, seen past a gloved hand holding a bone carving.",
    width: 1920,
    height: 1080,
    sourceUrl: "https://store.steampowered.com/app/5088140/Phantom_Line_Prologue/",
    sourcePage: "official store page",
    usage: "Anomaly pockets hero media, right of the hero copy",
    pageIds: ["anomaly-pockets"],
    objectPosition: "58% 50%",
    fallback: "surface",
  },
  "hunting-wildlife-forest": {
    id: "hunting-wildlife-forest",
    src: "/images/hunting-wildlife-forest.jpg",
    alt: "Sunlight through a pine forest where an Operator in black gear aims a shotgun at a wild boar, with a shotgun held in the player's gloved hands.",
    width: 1920,
    height: 1080,
    sourceUrl: "https://store.steampowered.com/app/5088140/Phantom_Line_Prologue/",
    sourcePage: "official store page",
    usage: "Survival and hazards hero media, right of the hero copy",
    pageIds: ["survival-and-hazards"],
    objectPosition: "45% 50%",
    fallback: "surface",
  },
  "squad-firefight-burning-rift": {
    id: "squad-firefight-burning-rift",
    src: "/images/squad-firefight-burning-rift.jpg",
    alt: "A squad firing through heavy rain at a burning rift glowing orange and red, with a scoped rifle filling the right foreground.",
    width: 1920,
    height: 1080,
    sourceUrl: "https://store.steampowered.com/app/5088140/Phantom_Line_Prologue/",
    sourcePage: "official store page",
    usage: "Dynamic events hero media, right of the hero copy",
    pageIds: ["dynamic-events"],
    objectPosition: "45% 45%",
    fallback: "surface",
  },
} satisfies AssetManifest;