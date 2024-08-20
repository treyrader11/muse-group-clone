import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { fontOswald, fontGrotesk, fontInter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Muse Group Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontGrotesk.variable,
          fontOswald.variable,
          fontInter.variable,
          "font-inter"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
