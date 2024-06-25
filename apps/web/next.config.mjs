/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";
import pack from "./package.json" assert { type: "json" };
// import { apps } from "./src/config";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    // rsbuild_app: `rsbuild_app@http://localhost:3003/federation.js`,
    // webpack_app: `webpack_app@http://localhost:3002/federation.js`,
    // vite_app: `vite_app@http://localhost:3001/federation.js`,
  };
};

const nextConfig = {
  output: "export",
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: pack.name,
        filename: "static/chunks/entry.js",
        dts: true,
        exposes: {
          "./track": "./src/track.ts",
          "./Footer": "./src/comps/Footer.tsx",
          "./NavBar": "./src/comps/NavBar.tsx",
          "./ThemePicker": "./src/comps/ThemePicker.tsx",
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {},
      })
    );
    return config;
  },
  // CORS
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
