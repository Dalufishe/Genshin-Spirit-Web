import Head from "next/head";
import BackgroundProvider from "../components/BackgroundProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { CharListContext, CharListContextData } from "../context/CharList";
import { LocaleContext } from "../context/Locale";
import { PrimeReactProvider } from "primereact/api";

import charList from "../data/char_list.json";
import ZH_TW from "../locale/ZH_TW.json";
import useDisableIosScrollBack from "../hooks/useDisableIosScrollBack";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  // useDisableIosScrollBack();

  return (
    <LocaleContext.Provider
      value={{
        ZH_TW,
      }}
    >
      <CharListContext.Provider value={charList as CharListContextData}>
        <QueryClientProvider client={queryClient}>
          <PrimeReactProvider value={{ ripple: true }}>
            <Head>
              <title>Genshin Spirit Web</title>
            </Head>
            <BackgroundProvider bgImage="/dummy/MainBackground.png" />
            <Component {...pageProps} />
          </PrimeReactProvider>
        </QueryClientProvider>
      </CharListContext.Provider>
    </LocaleContext.Provider>
  );
}

export default MyApp;
