import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  // 打包输出目录
  outDir:"docs",
  // 站点根路径
  base:"/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown 左侧", link: "/markdown-examples" },
          { text: "Runtime API 左侧", link: "/api-examples" },
        ],
      },
    ],
    // 最后修改时间, 搭配git使用
    lastUpdated: {
      text: "最后更改时间",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "short",
      },
    },
    // 搜索
    search: {
      provider: "local",
    },
    // 修改页脚
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // 修改导航栏图标
    socialLinks: [
      {
        icon: "npm",
        link: "https://www.npmjs.com/package/vitepress",
      },
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
