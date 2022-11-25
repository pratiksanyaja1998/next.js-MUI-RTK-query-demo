import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { ThemeProvider, CssBaseline  } from "@mui/material";
import ThemeProvider from "../theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import PropTypes from 'prop-types';
import { Provider } from 'react-redux'
import { store, persistor } from "../store"
import { PersistGate } from 'redux-persist/lib/integration/react';

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider >
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};