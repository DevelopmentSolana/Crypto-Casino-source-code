import { DefaultTheme } from "styled-components";
import { light as lightNav } from "../components/Appbar/theme";
import { light as lightCoinflip } from "../pages/Coinflip/theme";
import { light as lightJackpot } from "../pages/Jackpot/theme";

import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  nav: lightNav,
  coinflip: lightCoinflip,
  jackpot: lightJackpot,
};

export default lightTheme;
