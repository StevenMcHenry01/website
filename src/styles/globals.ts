import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    transition: all .15s ease;
  }
  html,
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Hind Guntur', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p {
    font-family: 'Hind Guntur', sans-serif;
  }
  h1, h2 {
    font-family: 'Nunito', sans-serif;
  }
  h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  #root,
  #__next {
    isolation: isolate;
    height: 100%;
  }
`;

const BREAKPOINTS = {
  tabletMin: 550,
};
export const defaultTheme = {
  name: 'default',
  colors: {
    primary: '#ca4b4b',
    primaryDark: '#a34b4b',
    primaryLight: '#d37373',
    white: 'hsl(0, 0%, 95%)',
    black: 'hsl(0, 0%, 15%)',
    background: 'hsl(38, 30%, 92%)',
    color: 'hsl(0, 0%, 15%)',
    hrColor: 'hsl(0, 0%, 50%, 15%)',
    grey: {
      50: 'hsl(210, 19%, 10%)',
      100: 'hsl(210, 15%, 20%)',
      200: 'hsl(210, 15%, 25%)',
      300: 'hsl(210, 10%, 40%)',
      400: 'hsl(210, 9%, 45%)',
      500: 'hsl(210, 8%, 50%)',
      600: 'hsl(210, 12%, 55%)',
      700: 'hsl(210, 14%, 66%)',
      800: 'hsl(210, 20%, 77%)',
      900: 'hsl(210, 25%, 88%)',
      950: 'hsl(210, 25%, 92%)',
      1000: 'hsl(210, 25%, 96%)',
      disabled: 'hsl(0, 0%, 90%)',
      disabledText: 'hsl(0, 0%, 67%)',
      border: 'hsl(0, 0%, 77%)',
    },
    success: 'hsl(101, 30%, 44%)',
    successDark: 'hsl(101, 30%, 30%)',
    settled: 'hsl(107, 44%, 46%)',
    failed: 'hsl(354, 71%, 59%)',
    delayed: 'hsl(48, 100%, 50%)',
    guaranteed: 'hsl(32, 100%, 50%)',
  },
  padding: {
    default: '0 30px 25px 30px',
    large: '0 40px 25px 40px',
  },
  queries: {
    longPhone: `(max-width: ${
      BREAKPOINTS.tabletMin / 16
    }rem) and (min-height: 700px)`,
    landscapePhone: `(max-width: 900px) and (max-height: 450px)`,
    semiShortPhone: `(max-width: 500px) and (max-height: 750px)`,
    shortPhone: `(max-width: 500px) and (max-height: 650px)`,
    tabletAndBigger: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  },
};
export const darkTheme = {
  ...defaultTheme,
  name: 'dark',
  colors: {
    ...defaultTheme.colors,
    background: 'hsl(38, 15%, 15%)',
    color: 'hsl(0, 0%, 95%)',
    hrColor: 'hsl(0, 0%, 50%, 30%)',
  },
};
export const forestTheme = {
  ...defaultTheme,
  name: 'forest',
  colors: {
    ...defaultTheme.colors,
    primary: '#66b277',
    primaryDark: '#438451',
    primaryLight: '#9ccea7',
    background: 'hsl(117, 18%, 18%)',
    color: 'hsl(40, 69%, 83%)',
    hrColor: 'hsl(0, 0%, 50%, 30%)',
  },
};
export const themeArray = [defaultTheme, darkTheme, forestTheme];
