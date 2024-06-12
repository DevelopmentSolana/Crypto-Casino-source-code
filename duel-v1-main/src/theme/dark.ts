import { DefaultTheme } from "styled-components";
import { dark as darkNav } from "../components/Appbar/theme";
import { dark as darkCoinflip } from "../pages/Coinflip/theme";
import { dark as darkJackpot } from "../pages/Jackpot/theme";

import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  nav: darkNav,
  coinflip: darkCoinflip,
  jackpot: darkJackpot,
};

export default darkTheme;
