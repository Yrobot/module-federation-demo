/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";
import pack from "./package.json" assert { type: "json" };
// import { apps } from "./src/config";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {};
};

const nextConfig = {
  output: "export",
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: pack.name,
        filename: "static/chunks/remoteEntry.js",
        dts: true,
        exposes: {
          "./Page": "./src/pages/index.tsx",
        },
        remotes: remotes(options.isServer),
        shared: {},
      })
    );
    return config;
  },
};

export default nextConfig;
