import type { AppProps } from "next/app";

import { Fragment } from "react";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useColorScheme } from "@mantine/hooks";
import NextHead from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const colorScheme = useColorScheme();

  return (
    <Fragment>
      <NextHead>
        <title>Typing Men</title>
        <meta name="description" content="Free open source typing trainer" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </Fragment>
  );
}
