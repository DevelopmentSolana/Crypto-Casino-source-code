import { NavThemeType } from "../components/Appbar/theme";
import { CoinflipTheme } from "../pages/Coinflip/theme";
import { JackpotTheme } from "../pages/Jackpot/theme";
import { Colors } from "./colors";
import { mediaQueries, shadows, spaces, breakpoints } from "./base";
export interface DuelanaTheme {
  isDark: boolean;
  colors: Colors;
  nav: NavThemeType;
  coinflip: CoinflipTheme;
  jackpot: JackpotTheme;
  mediaQueries: typeof mediaQueries;
  shadows: typeof shadows;
  spaces: typeof spaces;
  breakpoints: typeof breakpoints;
}

export { darkColors, lightColors } from "./colors";
export { default as dark } from "./dark";
export { default as light } from "./light";

export const chatWidth = 320;
