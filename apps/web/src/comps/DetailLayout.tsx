import React from "react";
import NavBar from "@/comps/NavBar";
import Footer from "@/comps/Footer";

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
