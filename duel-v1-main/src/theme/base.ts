export const breakpointMap = {
  xs: 370,
  sm: 576,
  md: 852,
  lg: 968,
  xl: 1080,
  xxl: 1200,
  xxxl: 1440,
};

export const breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`
);

export const mediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
  xxxl: `@media screen and (min-width: ${breakpointMap.xxxl}px)`,
};

export const shadows = {
  duel: "0px 0px 20px 1px rgba(#4b88ff, 0.6)",
  duel_splash: "0 0 20px 3px #4b88ff",
  ana: "0px 0px 20px 1px rgba(#c45fff, 0.6)",
  ana_splash: "0 0 20px 3px #5d24ff",
};

export const spaces = {
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  xxl: "3rem",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  mediaQueries,
  shadows,
  spaces,
  breakpoints,
};
