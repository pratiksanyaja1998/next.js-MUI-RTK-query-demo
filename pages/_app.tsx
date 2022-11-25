import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ThemeProvider, CssBaseline  } from "@mui/material";
import ThemeProvider from "../theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import PropTypes from 'prop-types';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider >
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};