import NavBar from "@/comps/NavBar";
import Footer from "@/comps/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar showHome={false} />
      {children}
      <Footer />
    </>
  );
}
