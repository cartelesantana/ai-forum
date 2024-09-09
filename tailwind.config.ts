import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary_dl: "#FF963A",
        secondary_dl: "#1B1464",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cta": "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/images/bg_2.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
