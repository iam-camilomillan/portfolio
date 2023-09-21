import type { Config } from 'tailwindcss'

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
        "clr-one": "#FFFFFF",
        "clr-two": "#FEFAE0",
        "clr-three": "#B48155",
        "clr-four": "#4A2F1C",
        "clr-five": "#000000",
      },
      fontFamily: {
        playfair_display: ["var(--font-playfair_display)"],
        source_sans_pro: ["var(--font-source_sans_pro)"],
      },
    },
  },
  plugins: [],
}
export default config
