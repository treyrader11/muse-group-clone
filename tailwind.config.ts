import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}", // make sure to explain custom file purge
  ],
  theme: {
    // screens: {
    //   xs: "400px",
    // },
    // close button: z-[90]
    // nav: z-[88]
    // products menu: z-[89]
    // overlay: z-[50]
    // pre-loader: z-[99]
    // header: z-50
    // header logo: z-[99]
    // burger: z-[99]
    // header overlay: z-[50]
    // slider wrapper: z-20
    // slider bullets: z-20
    zIndex: {
      "1": "10",
      "2": "20",
      "3": "30",
      "4": "40",
      "5": "50",
      highest: "90",
    },
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
        inter: "var(--font-inter)",
        oswald: "var(--font-oswald)",
        grotesk: "var(--font-grotesk)",
      },
      keyframes: {
        "open-menu": {
          "50%": {
            top: "50%",
            bottom: "50%",
            transform: " scale(0.3)",
          },
          "100%": {
            top: "50%",
            transform: "rotate(90deg) scale(1)",
          },
        },
        "close-menu": {
          "50%": {
            bottom: "50%",
            top: "50%",
            // transform: " scale-(1)",
          },
          "100%": {
            bottom: "50%",
            // transform: "scale-(1)",
          },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(-7px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "close-menu": "close-menu 0.5s ease-in-out forwards",
        "fade-in": "fade-in 300ms ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
