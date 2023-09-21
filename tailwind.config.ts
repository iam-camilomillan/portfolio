import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "512px",
      xs: "576px",
      sm: "672px",
      md: "768px",
      lg: "896px",
    },
    extend: {
      colors: {
        "clr-primary-one": "#FFFFFF",
        "clr-primary-two": "#000000",
        "clr-secondary-one": "#FEFAE0",
        "clr-secondary-two": "#B48155",
        "clr-secondary-three": "#4A2F1C",
      },
      fontFamily: {
        playfair_display: ["var(--font-playfair_display)"],
        source_sans_pro: ["var(--font-source_sans_pro)"],
      },
    },
  },
  plugins: [],
};
export default config;
