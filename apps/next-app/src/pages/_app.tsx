import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const themes = ["light", "dark"];

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      themes={themes}
      defaultTheme={themes[0]}
      storageKey="theme"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
