'use client'

import "@/styles/globals.css";
import theme from "@/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "@/styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  );
}
