import type { AppProps } from "next/app";
import "./base.css";
import "./custom.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
