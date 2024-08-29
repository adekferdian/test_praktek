import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      smartphone: { max: "430px" },
      tablet: { min: "431px", max: "1024px" },
      desktop: { min: "1025px", max: "3840px" },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      baloo: ["Baloo 2", "cursive"],
    },
    colors: {
      main: "#E92627",
      secondary: "#c7115e",
      blue: "#D7E5FF",
    },
  },
  plugins: [],
};
export default config;
