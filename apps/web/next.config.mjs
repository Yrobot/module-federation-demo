/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";
import pack from "./package.json" assert { type: "json" };
// import { apps } from "./src/config";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    // shop: `shop@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    "next-app": `next-app@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
  };
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
          "./track": "./src/track.ts",
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;
