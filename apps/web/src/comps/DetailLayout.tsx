import React from "react";
import TrackLink from "@/comps/TrackLink";

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full">
      <nav className="w-full sticky top-0 h-16 flex justify-center items-center text-2xl font-bold shadow-md">
        NavBar [
        <TrackLink
          className="text-base font-normal underline mx-2"
          href="/"
          eventData={{ key: "NAV_BACK" }}
        >
          Back To Home
        </TrackLink>
        ]
      </nav>
      <section className="min-h-[calc(100vh-224px)] bg-white text-black">
        {children}
      </section>
      <footer className="w-full sticky top-0 h-40 flex justify-center items-center text-2xl font-bold border-t-[1px] border-white">
        Footer [
        <TrackLink
          className="text-base font-normal underline mx-2"
          href="/"
          eventData={{ key: "FOOTER_BACK" }}
        >
          Back To Home
        </TrackLink>
        ]
      </footer>
    </main>
  );
}
