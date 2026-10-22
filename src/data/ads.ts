import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

/**
 * Keys match ad-placement-manifest.json exactly. Every code is intentionally
 * empty: real Adsterra units are requested and filled by the Adsterra
 * Integrator after launch, so nothing here may execute or request an ad.
 */
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "",
    "page-top-468x60": "",
    "page-top-320x50": "",
    "home-directory-end-468x60": "",
    "home-directory-end-320x50": "",
    "guide-native-native-banner": "",
    "guide-section-break-728x90": "",
    "guide-section-break-468x60": "",
    "guide-section-break-320x50": "",
    "guide-rail-160x300": "",
    "footer-sponsored-smartlink": "",
  },
};

export const adInventory = inventory;