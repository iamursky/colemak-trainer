import "public/css/uikit.min.css";

import type { AppProps } from "next/app";

import { Fragment } from "react";
import NextHead from "next/head";
import NextScript from "next/script";
import { GlobalStateProvider } from "@/state";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <NextHead>
        <title>Colemak Mod-DH Trainer</title>
        <meta name="description" content="Free open source Colemak-DH typing trainer" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <GlobalStateProvider initialState={pageProps.initialGlobalState}>
        <Component {...pageProps} />
      </GlobalStateProvider>

      <NextScript strategy="lazyOnload" src="js/uikit.min.js" />
      <NextScript strategy="lazyOnload" src="js/uikit-icons.min.js" />
    </Fragment>
  );
}
