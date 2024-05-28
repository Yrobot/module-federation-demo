import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import config from "@/config";
import "./globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      themes={config.themes}
      defaultTheme={config.themes[0]}
      storageKey="theme"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
