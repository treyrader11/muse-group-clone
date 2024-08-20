import {
  Inter as FontSans,
  Oswald as FontOswald,
  Inter as FontInter,
  Space_Grotesk as FontGrotesk,
} from "next/font/google";

const fontSans = FontSans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontInter = FontInter({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontOswald = FontOswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

const fontGrotesk = FontGrotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-grotesk",
  fallback: ["sans-serif"],
});

export { fontSans, fontInter, fontGrotesk, fontOswald };
