import React from "react";
import DetailLayout from "@/comps/DetailLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DetailLayout>{children}</DetailLayout>;
}
