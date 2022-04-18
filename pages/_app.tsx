import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/Theme";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import MUITheme from "../styles/MUITheme";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <MUIThemeProvider theme={MUITheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </MUIThemeProvider>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
