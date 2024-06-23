import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import pack from "./package.json";

export default defineConfig({
  server: {
    publicDir: {
      name: "./rsPublic",
    },
  },
  source: {
    entry: {
      index: "./package.json",
    },
  },
  output: {
    distPath: {
      root: "public/mf",
    },
    assetPrefix: "http://localhost:3004/mf/",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = pack.name;
      appendPlugins([
        new ModuleFederationPlugin({
          name: pack.name,
          filename: "entry.js",
          dts: true,
          exposes: {
            "./Page": "./src/federation/Page.ts",
          },
          shared: [],
        }),
      ]);
    },
    htmlPlugin: false,
  },
  plugins: [pluginReact()],
});
