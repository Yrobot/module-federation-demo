const config = {
  title: "@yrobot/Module-Federation-Demo",
  yrobot: "https://github.com/Yrobot",
  blog: "https://blog.yrobot.top",
  github: "https://github.com/Yrobot/module-federation-demo",
  themes: ["light", "dark", "valentine"],
};

export const apps = [
  {
    title: "vite-app",
    key: "vite_app",
    description: "A Module Federation Demo Powered by Vite",
    origin: "http://localhost:3001",
    entryPath: "/mf/mf-manifest.json",
    // entryPath: undefined,
  },
  {
    title: "next-app",
    key: "next_app",
    description: "A Module Federation Demo Powered by Next.js",
    origin: "http://localhost:3004",
    entryPath: "/mf/mf-manifest.json",
    // entryPath: undefined,
  },
  {
    title: "rsbuild-app",
    key: "rsbuild_app",
    description: "A Module Federation Demo Powered by Rsbuild",
    origin: "http://localhost:3003",
  },
  {
    title: "webpack-app",
    key: "webpack_app",
    description: "A Module Federation Demo Powered by Webpack",
    origin: "http://localhost:3002",
  },
];

export default config;
