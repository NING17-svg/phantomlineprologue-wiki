import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

/**
 * Keys match ad-placement-manifest.json exactly. Each value is the real code
 * for the Adsterra placement bound to that key, collected by
 * adsterra-integrator on 2026-10-22; same-format/same-size keys share one
 * platform placement. Do not hand-edit these values.
 */
export const ads: AdConfig = {
  units: {
    "page-top-728x90": "<script>\n  atOptions = {\n    'key' : '63cd8592b436847ad6c1c8440ddd3eec',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/63cd8592b436847ad6c1c8440ddd3eec\"></script>",
    "page-top-468x60": "<script>\n  atOptions = {\n    'key' : '1c34ec6ea025058095dc5bbdcbc41858',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/1c34ec6ea025058095dc5bbdcbc41858\"></script>",
    "page-top-320x50": "<script>\n  atOptions = {\n    'key' : 'e1cdfc2aba9e8062cb1e25d00bbc63a4',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e1cdfc2aba9e8062cb1e25d00bbc63a4\"></script>",
    "home-directory-end-468x60": "<script>\n  atOptions = {\n    'key' : '1c34ec6ea025058095dc5bbdcbc41858',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/1c34ec6ea025058095dc5bbdcbc41858\"></script>",
    "home-directory-end-320x50": "<script>\n  atOptions = {\n    'key' : 'e1cdfc2aba9e8062cb1e25d00bbc63a4',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e1cdfc2aba9e8062cb1e25d00bbc63a4\"></script>",
    "guide-native-native-banner": "<script async=\"async\" data-cfasync=\"false\" src=\"https://bauval.org/21/15e7cd46ea768f025046a3e1bf10a1bd\"></script>\n<div id=\"container-15e7cd46ea768f025046a3e1bf10a1bd\"></div>",
    "guide-section-break-728x90": "<script>\n  atOptions = {\n    'key' : '63cd8592b436847ad6c1c8440ddd3eec',\n    'format' : 'iframe',\n    'height' : 90,\n    'width' : 728,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/63cd8592b436847ad6c1c8440ddd3eec\"></script>",
    "guide-section-break-468x60": "<script>\n  atOptions = {\n    'key' : '1c34ec6ea025058095dc5bbdcbc41858',\n    'format' : 'iframe',\n    'height' : 60,\n    'width' : 468,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/1c34ec6ea025058095dc5bbdcbc41858\"></script>",
    "guide-section-break-320x50": "<script>\n  atOptions = {\n    'key' : 'e1cdfc2aba9e8062cb1e25d00bbc63a4',\n    'format' : 'iframe',\n    'height' : 50,\n    'width' : 320,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e1cdfc2aba9e8062cb1e25d00bbc63a4\"></script>",
    "guide-rail-160x300": "<script>\n  atOptions = {\n    'key' : 'e716622141b632265ba4dea14936857e',\n    'format' : 'iframe',\n    'height' : 300,\n    'width' : 160,\n    'params' : {}\n  };\n</script>\n<script src=\"https://bauval.org/22/e716622141b632265ba4dea14936857e\"></script>",
    "footer-sponsored-smartlink": "https://araplhn.org/4/a75cdbd879c7e13115df93a67befeec5",
  },
};

export const adInventory = inventory;