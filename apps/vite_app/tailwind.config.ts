import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
  theme: {},
  daisyui: {
    themes: false,
  },
  plugins: [daisyui],
};
export default config;
