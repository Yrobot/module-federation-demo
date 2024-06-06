# A Module Federation Demo between Next.js & Vite

## Run Dev

```bash
bun run dev
```

## Module Federation

> Module Federation 是 Webpack 5 引入的一项新特性,它允许在构建时将应用程序的某些部分作为独立的模块进行共享,从而实现了微前端应用的动态加载和通信。

https://module-federation.io/guide/start/features.html

### 优点

- 基于 Webpack 5 的原生特性,无需引入额外的框架或库
- 可以在构建时动态地决定哪些模块需要共享
- 发布模式自由
- 支持 ts 支持（Module Federation 2 开始支持 dynamic type hinting

### 缺点

- 无版本管理
- 目前 2.0 只支持 webpack 和 rsbuild，不支持 vite
  - @originjs/vite-plugin-federation 不支持 2.0 且有很多问题，作者也停更一段时间了
  - rolldown roadmap 计划支持 module federation，https://github.com/rolldown/rolldown/discussions/153#discussioncomment-8720087
