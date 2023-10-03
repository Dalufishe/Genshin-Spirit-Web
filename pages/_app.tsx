import Head from "next/head";
import BackgroundProvider from "../components/BackgroundProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { LocaleContext } from "../context/Locale";
import { PrimeReactProvider } from "primereact/api";

import ZH_TW from "../locale/ZH_TW.json";
import useDisableIosScrollBack from "../hooks/useDisableIosScrollBack";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  // useDisableIosScrollBack();

  return (
    <LocaleContext.Provider
      value={{
        ZH_TW,
      }}
    >
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PrimeReactProvider value={{ ripple: true }}>
            <Head>
              <title>Genshin Spirit Web</title>
            </Head>
            <BackgroundProvider bgImage="/dummy/MainBackground.png" />
            <Component {...pageProps} />
          </PrimeReactProvider>
        </QueryClientProvider>
      </Provider>
    </LocaleContext.Provider>
  );
}

export default MyApp;
