import type { ThemeConfig } from "@/types/theme";

// Phantom Line: Prologue runs on cold fog and rift fire. The site keeps that
// contrast: near-black ash surfaces, bone text, one saturated rift red for
// anything interactive, amber only for terminal-style labels.
export const theme: ThemeConfig = {
  mode: "dark",
  navigation: "header",
  tokens: {
    pageBg: "#0b0c0e",
    surface1: "#131519",
    surface2: "#1b1e24",
    surface3: "#242830",
    surfaceInverse: "#f1efe9",
    textPrimary: "#e8e6e1",
    textMuted: "#9aa1a9",
    textInverse: "#0b0c0e",
    textOnAccentPrimary: "#fdf3f1",
    textLink: "#ff7a63",
    focusRing: "#ff7a63",
    line: "#242830",
    lineStrong: "#3a4049",
    accentPrimary: "#d8412f",
    accentSecondary: "#f0a202",
    accentBright: "#ffb454",
    statusConfirmed: "#8fd6a8",
    statusCaution: "#ffb454",
    statusUnknown: "#9aa1a9",
  },
  typography: {
    headingFamily: "'Archivo', 'Helvetica Neue', Helvetica, Arial, ui-sans-serif, system-ui, sans-serif",
    bodyFamily: "'Archivo', 'Helvetica Neue', Helvetica, Arial, ui-sans-serif, system-ui, sans-serif",
    headingWeight: 800,
  },
  shape: { radius: "2px", borderWidth: "1px", shadow: "none", hoverLift: "0px" },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center" },
  variants: { home: "visual-cover", hub: "grouped-list", content: "reading-right-rail", workspace: "full-width" },
  decoration: { motif: "grid", intensity: "low" },
};