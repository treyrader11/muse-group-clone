import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Oswald as FontOswald,
  Nunito as FontNunito,
  Inter as FontInter,
  Poppins as FontPoppins,
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

const fontMono = FontMono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const fontOswald = FontOswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  // fallback: ["sans-serif"],
});

const fontGrotesk = FontGrotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-grotesk",
  fallback: ["sans-serif"],
});

const fontNunito = FontNunito({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

const fontPoppins = FontPoppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export {
  fontSans,
  fontInter,
  fontGrotesk,
  fontMono,
  fontOswald,
  fontNunito,
  fontPoppins,
};
