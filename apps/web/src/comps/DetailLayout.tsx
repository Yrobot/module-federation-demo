import React from "react";
import Link from "next/link";

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full">
      <nav className="w-full sticky top-0 h-16 flex justify-center items-center text-2xl font-bold shadow-md">
        NavBar [
        <Link className="text-base font-normal underline mx-2" href="/">
          Back To Home
        </Link>
        ]
      </nav>
      <section className="min-h-[calc(100vh-224px)] bg-white">
        {children}
      </section>
      <footer className="w-full sticky top-0 h-40 flex justify-center items-center text-2xl font-bold border-t-[1px] border-white">
        Footer [
        <Link className="text-base font-normal underline mx-2" href="/">
          Back To Home
        </Link>
        ]
      </footer>
    </main>
  );
}
