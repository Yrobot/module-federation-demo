import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import data from "./src/config";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {},
  daisyui: {
    themes: data.themes,
  },
  plugins: [daisyui],
};
export default config;
