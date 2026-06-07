import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:      "#07080f",
        surface:  "#0d0e18",
        card:     "#11121e",
        border:   "#1c1d2e",
        hi:       "#e4e6ff",
        mid:      "#7b7fa8",
        low:      "#363753",
        // Primary accent — warm amber-gold
        gold:     "#f5c842",
        "gold-dim":"#7a6318",
        // Secondary — cool indigo
        indigo:   "#818cf8",
        teal:     "#2dd4bf",
      },
    },
  },
  plugins: [],
};
export default config;
