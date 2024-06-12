export type Colors = typeof darkColors;

export const baseColors = {
  primary: "#111822",
  primaryDark: "#030609",
  primaryLight: "#1A2433",
  secondary: "#1A2C41",
  success: "#4FFF8B",
  warning: "#F24822",
  failure: "#ED4B9E",
};

export const additionalColors = {
  black: "#000000",
  miami: "#02C0DC",
  monaco: "#B366FE",
  london: "#FE6883",
  macau: "#FF6A4F",
  singapore: "#7BFFA8",
  lasvegas: "#FFBE5C",
  chip: "#FFF6CA",
  chipSecondary: "#fee87e",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: baseColors.primary,
  cardBackground: baseColors.primaryLight,
  border: "#7389a9",
  input: "",
  text: "#768BAD",
  textWhite: "#B2D1FF",
  overlay: "#121924CC",
  gradients: {
    cardBorder: "linear-gradient(180deg, #05090D 0%, #0B141E 100%)",
    duel: "linear-gradient(149.33deg, #4FFF8B 7.45%, #4B88FF 98.66%)",
    ana: "linear-gradient(149.33deg, #E392FF 7.45%, #9A1AFF 98.66%)",
    rnd: " linear-gradient(141.39deg, #FFF48C 4.63%, #FFC34F 95.68%)",
    chip: "linear-gradient(90deg, #503B00 0%, #2F2814 100%)",
  },
};

export const darkColors = {
  ...baseColors,
  ...additionalColors,
  background: baseColors.primary,
  cardBackground: baseColors.primaryLight,
  border: "#7389a9",
  input: "#96A8C2",
  text: "#768BAD",
  textWhite: "#B2D1FF",
  overlay: "#121924CC",
  gradients: {
    cardBorder: "linear-gradient(180deg, #05090D 0%, #0B141E 100%)",
    duel: "linear-gradient(149.33deg, #4FFF8B 7.45%, #4B88FF 98.66%)",
    ana: "linear-gradient(149.33deg, #E392FF 7.45%, #9A1AFF 98.66%)",
    rnd: " linear-gradient(141.39deg, #FFF48C 4.63%, #FFC34F 95.68%)",
    chip: "linear-gradient(90deg, #503B00 0%, #2F2814 100%)",
  },
};
