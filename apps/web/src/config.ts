const config = {
  title: "@yrobot/Module-Federation-Demo",
  yrobot: "https://github.com/Yrobot",
  blog: "https://blog.yrobot.top",
  github: "https://github.com/Yrobot/module-federation-demo",
  themes: ["light", "dark", "cupcake"],
};

export const apps = [
  {
    title: "auto-scroll",
    key: "auto-scroll",
    description:
      "A tool which makes scroll-container auto scroll to the bottom easy.",
    origin: "http://localhost:3001",
    metaPath: undefined,
    federationPath: undefined,
  },
  {
    title: "i18next-ssg",
    key: "i18next-ssg",
    description: "The i18n tool for next.js ssg project.",
    origin: "http://localhost:3001",
  },
];

export default config;
