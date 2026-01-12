export const theme = {
  colors: {
    white: "#FFFFFF",
    uiWhite: "#F7F9FC",
    black: "#000000",
    uiBlack: "#0B0F14",
    silver: "#C0C0C0",
    navy: "#0A1F44",
    deepNavy: "#0D2C60",
    red: "#90023F",
    accent: "#90023F",
  },
  radii: {
    xl: "24px",
    lg: "18px",
    md: "12px",
  },
  shadow: {
    sm: "0 6px 18px rgba(0,0,0,.08)",
    md: "0 14px 40px rgba(0,0,0,.12)",
  },
  container: "min(1120px, 92vw)",
};

export type Theme = typeof theme;
