import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: "",
  },
  plugins: [
    react(),
    federation({
      name,
      filename: "federation.js",
      exposes: {
        "./Page": "./src/App.tsx",
      },
      remotes: {},
      shared: [],
    }),
  ],
});
