import { m } from "framer-motion";
import type { Config } from "tailwindcss";
// import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "hsl(var(--black))",
          400: "hsl(var(--black-40))",
          700: "hsl(var(--black-70))",
          980: "hsl(var(--black-98))",
        },
        link: { DEFAULT: "hsl(var(--link))" },
        limeGreen: { DEFAULT: "hsl(var(--lime-green))" },
        grey: {
          DEFAULT: "hsl(var(--grey))",
          dark: "hsl(var(--accessible-components-dark-grey))",
        },
        aliceBlue: { DEFAULT: "hsl(var(--alice-blue))" },
        purple: { DEFAULT: "hsl(var(--purp))" },
        yellow: { DEFAULT: "hsl(var(--yellow))" },
        coldBlue: { DEFAULT: "hsl(var(--cold-blue))" },
        gray: { DEFAULT: "hsl(var(--gray))" },
        ug: { DEFAULT: "hsl(var(--ug))" },
        musescore4: { DEFAULT: "hsl(var(--musescore4))" },
        linkHover: { DEFAULT: "hsl(var(--link-hover))" },
        stroke: { 200: "hsl(var(--stroke2))" },
        orange: { DEFAULT: "hsl(var(--orange))", 200: "hsl(var(--orange-2))" },
        musescore: {
          DEFAULT: "hsl(var(--musescore))",
          400: "hsl(var(--musescore4))",
        },
      },
      screens: {
        xs: "400px",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        inter: "var(--font-inter)",
        nunito: "var(--font-nunito)",
        oswald: "var(--font-oswald)",
        grotesk: "var(--font-grotesk)",
      },
      // keyframes: {
      //   "open-menu": {
      //     // currently not being used (nav)
      //     "0%": { transform: "scaleY(0)" },
      //     "80%": { transform: "scaleY(1.2)" },
      //     "100%": { transform: "scaleY(1)" },
      //   },
      //   "slide-up": {
      //     "0%": { transform: "translateY(30px) scale(0.9)" },
      //     "100%": { transform: "translateY(0) scale(1)" },
      //   },
      // },
      // animation: {
      //   "open-menu": "open-menu 0.5s ease-in-out forwards",
      //   "slide-up": "slide-up 0.5s ease-out",
      // },
      // keyframes: {
      //   "shrink-rotate": {
      //     "0%": { transform: "translateY(0) scaleX(1)", width: "100%" },
      //     "50%": { transform: "translateY(0.5rem) scaleX(0.5)", width: "50%" },
      //     "100%": { transform: "translateY(0.5rem) rotate(45deg) scaleX(1)", width: "100%" },
      //   },
      //   "shrink-rotate-reverse": {
      //     "0%": { transform: "translateY(0) scaleX(1)", width: "100%" },
      //     "50%": { transform: "translateY(-0.5rem) scaleX(0.5)", width: "50%" },
      //     "100%": { transform: "translateY(-0.5rem) rotate(-45deg) scaleX(1)", width: "100%" },
      //   },
      // },
      // animation: {
      //   "shrink-rotate": "shrink-rotate 0.5s forwards ease-in-out",
      //   "shrink-rotate-reverse": "shrink-rotate-reverse 0.5s forwards ease-in-out",
      // },

      // need to work on these
      keyframes: {
        "shrink": {
          "50%": {  width: "50%", height: "50%" },
          "100%": {
            transform: "rotate(90deg) scaleX(1)",
            width: "100%",
          },
        },
        "shrink-rotate": {
          "0%": { transform: "translateY(100%) ", width: "100%" },
          "50%": { transform: "translateY(50%) scaleX(0.5)", width: "50%" },
          "100%": {
            transform: "rotate(90deg) scaleX(1)",
            width: "100%",
          },
        },
        "shrink-rotate-reverse": {
          // "0%": { transform: "scaleX(1)", width: "100%" },
          "50%": { transform: "scaleX(0.5)", width: "50%" },
          "100%": {
            transform: " scaleX(1)",
            width: "100%",
          },
        },
      },
      animation: {
        "shrink": "shrink 0.5s forwards",
        "shrink-rotate": "shrink-rotate 0.5s forwards",
        "shrink-rotate-reverse":
          "shrink-rotate-reverse 0.5s",
      },
    },
  },
  plugins: [],
};
export default config;
