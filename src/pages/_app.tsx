import React from "react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "@styles/global";
import Modal from 'react-modal'

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
