import BackgroundProvider from "../components/BackgroundProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BackgroundProvider
        bgImage="https://s3-alpha-sig.figma.com/img/c4e9/ccf7/31d9b2e77e004305d63a3553ec7ac42f?Expires=1695600000&Signature=ZXoCRFPgGewe0gOJ4IlJnqIKbVaji7rj-c6LJfdecjPrwv~KXRf0ToUv8WmyB0~9fp4-HKAsPW~nZgqxX6aFGUG~jvvp6j21ZVxm7b9zRzhL66qFfuZ5cwMWPRlRWQgY~v753bZIpe1UD-fFNx2FR1bAnzf~nlKu5kPoxkE5XNAxWwrfSERVIoItaRritgkniiUL89bWZI5yZNd0uGXLfRO7~jlvmCW4u9FeYUmXVb-u9hWkPwRYN0XEgeKbJx7V9pA-BDeSFshshZ75xx92KRjNdB5UNB8vx3DLYS8T7Fx5daX0JEuKD23hczrw-1aMln25vMIYoMv7905M0STXLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
