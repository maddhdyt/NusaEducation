import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#1A3263",
        second: "#547792",
        third: "#FAB95B",
        fourth: "#E8E2DB",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "sans-serif"],
        serif: ["var(--font-feature)", "Feature", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
