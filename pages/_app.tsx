import Head from "next/head";
import BackgroundProvider from "../components/BackgroundProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { CharListContext, CharListContextData } from "../context/CharList";
import { LocaleContext } from "../context/Locale";

import charList from "../data/char_list.json";
import ZH_TW from "../locale/ZH_TW.json";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocaleContext.Provider
      value={{
        ZH_TW,
      }}
    >
      <CharListContext.Provider value={charList as CharListContextData}>
        <QueryClientProvider client={queryClient}>
          <Head>
            <title>Genshin Spirit Web</title>
          </Head>
          <BackgroundProvider bgImage="/dummy/MainBackground.png" />
          <Component {...pageProps} />
        </QueryClientProvider>
      </CharListContext.Provider>
    </LocaleContext.Provider>
  );
}

export default MyApp;
