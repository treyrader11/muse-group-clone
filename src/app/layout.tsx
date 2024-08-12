import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { fontOswald, fontGrotesk } from "@/lib/fonts";
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
          "font-grotesk",
          // "text-black"
        )}
      >
        <Navbar />
        <main className="pt-16 mx-auto">{children}</main>
      </body>
    </html>
  );
}
