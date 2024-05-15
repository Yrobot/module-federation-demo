import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import config from "@/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: "this is the demo of module federation, author by @yrobot",
  keywords: "module-federation,yrobot,next.js,demo,blog".split(","),
  authors: [
    {
      name: "yrobot",
      url: "https://github.com/Yrobot",
    },
  ],
  creator: "yrobot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme"
          themes={config.themes}
          defaultTheme={config.themes[0]}
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
