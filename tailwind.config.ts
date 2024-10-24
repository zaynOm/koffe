import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)"],
      mono: ["var(--font-geist-mono)"],
      display: ["var(--font-bricolage)"],
    },
    colors: {
      transparent: "transparent",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: "hsl(var(--primary))",
      button: {
        bg: "hsl(var(--button-bg))",
        fg: "hsl(var(--button-fg))",
      },
      gray: colors.slate,
    },
  },
  plugins: [],
};
export default config;
