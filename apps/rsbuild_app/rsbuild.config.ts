import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import pack from "./package.json";

export default defineConfig({
  dev: {
    assetPrefix: "http://localhost:3003/",
  },
  server: {
    port: 3003,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      // You need to set a unique value that is not equal to other applications
      config.output!.uniqueName = pack.name;
      appendPlugins([
        new ModuleFederationPlugin({
          name: pack.name,
          exposes: {
            "./Page": "./src/App.tsx",
          },
          dts: true,
          shared: ["react", "react-dom"],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
