import Head from "next/head";
import BackgroundProvider from "../components/BackgroundProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Genshin Spirit Web</title>
      </Head>
      <BackgroundProvider bgImage="/dummy/MainBackground.png" />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
