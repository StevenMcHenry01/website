import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Footer } from '../components/footer';
import { Nav } from '../components/nav/nav';
import { AppContext } from '../contexts/app-context';
import {
  darkTheme,
  defaultTheme,
  GlobalStyle,
  themeArray,
} from '../styles/globals';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [theme, setTheme] = useState<any>();
  useEffect(() => {
    const preferredTheme = localStorage.getItem('preferredTheme');
    if (preferredTheme) {
      setTheme(themeArray.find((theme) => theme.name === preferredTheme));
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)')
    ) {
      setTheme(darkTheme);
    } else {
      setTheme(defaultTheme);
    }
  }, []);
  if (!theme) return <DefaultWrapper></DefaultWrapper>;
  return (
    <>
      <GlobalStyle />
      <NextNProgress color="#ca4b4b)" height={2} />
      <AppContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Wrapper>
              <Nav />
              <main className="page-wrapper">
                <Component {...pageProps} />
              </main>
              <Footer />
            </Wrapper>
          </QueryClientProvider>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.color};
  display: flex;
  flex-direction: column;
  .page-wrapper {
    flex: 1;
  }
`;
const DefaultWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: hsl(38, 30%, 92%);
  color: hsl(0, 0%, 15%);
`;
