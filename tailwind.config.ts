import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: false,
  },
};

export default config;
