import { createGlobalStyle } from 'styled-components';
import { DuelanaTheme } from 'theme';

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends DuelanaTheme {}
}

const GlobalStyle = createGlobalStyle`
 
  * {
    font-family: 'Inter';

    &:focus {
      outline: none;
    }
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      background: transparent;
  }

  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #4e5b86;
  }

`;

export default GlobalStyle;
