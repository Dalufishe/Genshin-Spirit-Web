import Head from "next/head";
import BackgroundProvider from "../components/BackgroundProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { CharListContext, CharListContextData } from "../context/CharList";

import charList from "../data/char_list.json";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CharListContext.Provider value={charList as CharListContextData}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Genshin Spirit Web</title>
        </Head>
        <BackgroundProvider bgImage="/dummy/MainBackground.png" />
        <Component {...pageProps} />
      </QueryClientProvider>
    </CharListContext.Provider>
  );
}

export default MyApp;
