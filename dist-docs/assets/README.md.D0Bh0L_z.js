import{V as e}from"./chunks/theme.DW0_B88i.js";import{c as t,a2 as l,G as n,k as h,j as a,a as r,o as p}from"./chunks/framework.C8TyThQf.js";const m=JSON.parse('{"title":"vitepress","description":"","frontmatter":{},"headers":[],"relativePath":"README.md","filePath":"README.md","lastUpdated":1725952163000}'),o={name:"README.md"},g=Object.assign(o,{setup(d){const i=[{avatar:"https://www.github.com/yyx990803.png",name:"Evan You",title:"Creator",links:[{icon:"github",link:"https://github.com/yyx990803"},{icon:"twitter",link:"https://twitter.com/youyuxi"}]}];return(k,s)=>(p(),t("div",null,[s[0]||(s[0]=l(`<h1 id="vitepress" tabindex="-1">vitepress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;vitepress&quot;">​</a></h1><p>前身是 <code>vuepress</code></p><p>静态站点服务器 Static Site Generator (SSG)</p><h1 id="rspack" tabindex="-1">Rspack <a class="header-anchor" href="#rspack" aria-label="Permalink to &quot;Rspack&quot;">​</a></h1><p><code>字节</code></p><h2 id="rspress" tabindex="-1">Rspress <a class="header-anchor" href="#rspress" aria-label="Permalink to &quot;Rspress&quot;">​</a></h2><p>静态站点生成器</p><h1 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h1><ol><li>博客</li><li>文档</li><li>营销页面</li><li>档案</li></ol><h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h1><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span></code></pre></div><h1 id="执行" tabindex="-1">执行 <a class="header-anchor" href="#执行" aria-label="Permalink to &quot;执行&quot;">​</a></h1><ol><li>创建项目</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><h1 id="vitepress-特有的-formatter" tabindex="-1">vitepress 特有的 formatter <a class="header-anchor" href="#vitepress-特有的-formatter" aria-label="Permalink to &quot;vitepress 特有的 formatter&quot;">​</a></h1><p>三横杠必须写在头部 <code>---</code></p><h2 id="配置页脚" tabindex="-1">配置页脚 <a class="header-anchor" href="#配置页脚" aria-label="Permalink to &quot;配置页脚&quot;">​</a></h2><p><code>写在路由对应的ma&#39;rkdown</code></p><hr><p>outline: deep prev: text: &quot;上一页: 首页 1111ss&quot; link: /markdown-examples next: text: &quot;下一页: 首页 2222ss&quot; link: /markdown-examples</p><hr><p><code>config.mts中配置docFooter修改页脚</code></p><h2 id="配置-head" tabindex="-1">配置 head <a class="header-anchor" href="#配置-head" aria-label="Permalink to &quot;配置 head&quot;">​</a></h2><h3 id="增加-tdk-seo-优化" tabindex="-1">增加 TDK, SEO 优化 <a class="header-anchor" href="#增加-tdk-seo-优化" aria-label="Permalink to &quot;增加 TDK, SEO 优化&quot;">​</a></h3><p>爬虫机器人会抓取这三个值</p><hr><p>head:</p><ul><li><ul><li>meta</li><li>name: title content: &quot;Runtime API Examples&quot;</li></ul></li><li><ul><li>meta</li><li>name: description content: &quot;Runtime API Examples&quot;</li></ul></li></ul><hr><h1 id="最后修改时间" tabindex="-1">最后修改时间 <a class="header-anchor" href="#最后修改时间" aria-label="Permalink to &quot;最后修改时间&quot;">​</a></h1><p><code>必须配合git使用, git提交的这个时间, 它就会列为最后修改时间</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// config.mts</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;最后更改时间&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    formatOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      dateStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;full&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      timeStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;short&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div><h1 id="默认主题-团队页" tabindex="-1">默认主题 &gt; 团队页 <a class="header-anchor" href="#默认主题-团队页" aria-label="Permalink to &quot;默认主题 &gt; 团队页&quot;">​</a></h1><p><code>vitepress的markdown语法支持vue</code></p>`,34)),n(h(e),{size:"small",members:i}),s[1]||(s[1]=a("h1",{id:"github-部署静态网站",tabindex:"-1"},[r("GitHub 部署静态网站 "),a("a",{class:"header-anchor",href:"#github-部署静态网站","aria-label":'Permalink to "GitHub 部署静态网站"'},"​")],-1)),s[2]||(s[2]=a("ol",null,[a("li",null,"打开仓库的 Settings"),a("li",null,"选择 pages"),a("li",null,"选择 main 分支 作为部署分支"),a("li",null,"选择 docs"),a("li",null,"点击 Save 保存")],-1))]))}});export{m as __pageData,g as default};
