import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#c13950",
  primaryBright: "#c13950",
  primaryDark: "#351617",
  secondary: "#97161e",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#c13950",
  textDisabled: "#BDC2C4",
  textSubtle: "#c13950",
  borderColor: "#E9EAEB",
  gradients: {
    bubblegum:
      "linear-gradient(139.73deg, rgba(255, 99, 71,0) 0%, rgba(255, 99, 71,0) 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#97161e",
  background: "#070707",

  backgroundDisabled: "#3c3742",
  backgroundAlt: "#070707",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#202022",
  inputSecondary: "#c13950",
  primaryDark: "#97161e",
  tertiary: "#353547",
  text: "#e2effc",
  textDisabled: "#666171",
  textSubtle: "#c13950",
  borderColor: "#524B63",
  gradients: {
    bubblegum:
      "linear-gradient(139.73deg, rgba(255, 99, 71,0) 0%, rgba(255, 99, 71,0) 100%)",
    cardHeader: "linear-gradient(166.77deg, #070707 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #070707 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #070707 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #070707 0%, #c13950 100%)",
  },
};
