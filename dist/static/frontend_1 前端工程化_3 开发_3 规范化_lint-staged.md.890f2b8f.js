import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.0f4e1e9e.js";const m=JSON.parse('{"title":"lint-staged","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/1 前端工程化/3 开发/3 规范化/lint-staged.md","filePath":"frontend/1 前端工程化/3 开发/3 规范化/lint-staged.md"}'),t={name:"frontend/1 前端工程化/3 开发/3 规范化/lint-staged.md"},l=e(`<h1 id="lint-staged" tabindex="-1">lint-staged <a class="header-anchor" href="#lint-staged" aria-label="Permalink to &quot;lint-staged&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>lint-staged 的主要功能是在 Git 暂存区中检查被修改的文件，只对这些文件进行 lint 操作，从而提高 lint 检查的效率。通常，我们并不需要对整个项目进行 lint 检查，而是希望只针对即将提交的代码进行检查，以避免不必要的耗时。</p><p>通过将 lint-staged 配置为 husky 的 pre-commit 钩子的一部分，可以在每次提交代码之前自动触发 lint-staged，对即将提交的文件进行 lint 检查。如果有任何 lint 错误或不符合规范的代码，lint-staged 将阻止提交，给出相应的错误信息，帮助开发者及时发现和解决问题。</p><h2 id="安装及使用" tabindex="-1">安装及使用 <a class="header-anchor" href="#安装及使用" aria-label="Permalink to &quot;安装及使用&quot;">​</a></h2><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h4><p><code>npm install lint-staged --save-dev</code></p><h4 id="配置-lint-staged" tabindex="-1">配置 lint-staged <a class="header-anchor" href="#配置-lint-staged" aria-label="Permalink to &quot;配置 lint-staged&quot;">​</a></h4><p>在 package.json 文件中添加以下配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // src/**/*.{js,jsx,ts,tsx} 校验暂存区、指定目录下的文件类型</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 校验命令，执行 npm run lint</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;src/**/*.{js,jsx,ts,tsx}&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;npm run lint&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    // src/**/*.{js,jsx,ts,tsx} 校验暂存区、指定目录下的文件类型</span></span>
<span class="line"><span style="color:#24292e;">    // 校验命令，执行 npm run lint</span></span>
<span class="line"><span style="color:#24292e;">    &quot;src/**/*.{js,jsx,ts,tsx}&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">      &quot;npm run lint&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="使用-lint-staged" tabindex="-1">使用 lint-staged <a class="header-anchor" href="#使用-lint-staged" aria-label="Permalink to &quot;使用 lint-staged&quot;">​</a></h4><p>编辑 <code>.husky/pre-commit.sh</code> 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/sh</span></span>
<span class="line"><span style="color:#e1e4e8;">. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;husky pre-commit&quot; &amp;&amp; npx lint-staged</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/sh</span></span>
<span class="line"><span style="color:#24292e;">. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">echo &quot;husky pre-commit&quot; &amp;&amp; npx lint-staged</span></span></code></pre></div>`,13),p=[l];function o(i,c,r,d,h,u){return a(),n("div",null,p)}const q=s(t,[["render",o]]);export{m as __pageData,q as default};
