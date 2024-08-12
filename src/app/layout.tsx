import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { fontOswald, fontGrotesk, fontInter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

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
          "font-grotesk"
        )}
      >
        <Navbar />
        <main
          className={cn(
            "pt-16",
            "md:pt-[128px]",
            "size-full",
            "mx-auto"
            // "mx-[4%]" // global margin but it's breaking the hero slider. might create a component.
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
