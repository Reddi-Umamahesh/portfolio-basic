import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#14131a",
      "card-primary": "#1c1b23",
      "btn-highlight": "#2bd576",
      "btn-primary": "#3a3942",
      "btn-secondary": "#1c1b23",
      "text-primary": " #8b8a91",
      "text-secondary": "#79787f",
      "text-info": " #4f4f52",
      "text-highlight": "#fff,",
      "linkedIn-color": "#0077b5 ",
      "github-color": "#2b3137",
      "twitter-color": "#1DA1F2",
      "black-color": "#000000",
      "fiver-color": "#57ff71",
      "freelancer-color": "#00ADF2",
      "upwork-color": "#7CFC00",
      "insta-pink": "#d62976",
      "yellow": "#FFFF00",
      "white": "#ffffff",
      "black-shade": "#0D0D0D"
    },
    extend: {
      backgroundImage: {
        'cover-pic': "url('/public/cover-bg-1.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
