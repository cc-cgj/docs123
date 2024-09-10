# vitepress

前身是 `vuepress`

静态站点服务器 Static Site Generator (SSG)

# Rspack

`字节`

## Rspress

静态站点生成器

# 应用场景

1. 博客
2. 文档
3. 营销页面
4. 档案

# 安装

```sh
npm i vitepress -D
```

# 执行

1. 创建项目

```sh
npx vitepress init
```

# vitepress 特有的 formatter

三横杠必须写在头部 `---`

## 配置页脚

`写在路由对应的ma'rkdown`

---

outline: deep
prev:
text: "上一页: 首页 1111ss"
link: /markdown-examples
next:
text: "下一页: 首页 2222ss"
link: /markdown-examples

---

`config.mts中配置docFooter修改页脚`

## 配置 head

### 增加 TDK, SEO 优化

爬虫机器人会抓取这三个值

---

head:

- - meta
  - name: title
    content: "Runtime API Examples"
- - meta
  - name: description
    content: "Runtime API Examples"

---

# 最后修改时间

`必须配合git使用, git提交的这个时间, 它就会列为最后修改时间`

```ts
// config.mts
lastUpdated: {
    text: "最后更改时间",
    formatOptions: {
      dateStyle: "full",
      timeStyle: "short",
    },
},
```

# 默认主题 > 团队页

`vitepress的markdown语法支持vue`

<script setup>
  import { VPTeamMembers } from 'vitepress/theme'
  const members = [
    {
      avatar: 'https://www.github.com/yyx990803.png',
      name: 'Evan You',
      title: 'Creator',
      links: [
        { icon: 'github', link: 'https://github.com/yyx990803' },
        { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
      ]
    },
  ]
</script>
<VPTeamMembers size="small" :members="members" />


# GitHub 部署静态网站
1. 打开仓库的 Settings
2. 选择 pages
3. 选择 main 分支 作为部署分支
4. 选择 docs
5. 点击 Save 保存

