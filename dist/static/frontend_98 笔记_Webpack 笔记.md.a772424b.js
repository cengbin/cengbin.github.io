import{_ as a,o as s,c as n,O as p}from"./chunks/framework.d9e2f5d0.js";const b=JSON.parse('{"title":"Webpack 笔记","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/98 笔记/Webpack 笔记.md","filePath":"frontend/98 笔记/Webpack 笔记.md"}'),l={name:"frontend/98 笔记/Webpack 笔记.md"};function o(t,e,c,r,i,d){return s(),n("div",null,e[0]||(e[0]=[p(`<h1 id="webpack-笔记" tabindex="-1">Webpack 笔记 <a class="header-anchor" href="#webpack-笔记" aria-label="Permalink to &quot;Webpack 笔记&quot;">​</a></h1><h2 id="webpack4-x-指定打开浏览器时的导航页面和参数配置" tabindex="-1">Webpack4.x 指定打开浏览器时的导航页面和参数配置 <a class="header-anchor" href="#webpack4-x-指定打开浏览器时的导航页面和参数配置" aria-label="Permalink to &quot;Webpack4.x 指定打开浏览器时的导航页面和参数配置&quot;">​</a></h2><p>查看webpack 打开浏览器默认带上参数的配置。</p><p><a href="https://v4.webpack.docschina.org/configuration/dev-server/#devserver-openpage" target="_blank" rel="noreferrer">https://v4.webpack.docschina.org/configuration/dev-server/#devserver-openpage</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">devServer: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  open: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  host: &#39;example.com&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  https: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 指定打开浏览器时的导航页面，并附带参数</span></span>
<span class="line"><span style="color:#e1e4e8;">  openPage: &#39;/different/page?id=123&amp;name=456&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">devServer: {</span></span>
<span class="line"><span style="color:#24292e;">  open: true,</span></span>
<span class="line"><span style="color:#24292e;">  host: &#39;example.com&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  https: true,</span></span>
<span class="line"><span style="color:#24292e;">  // 指定打开浏览器时的导航页面，并附带参数</span></span>
<span class="line"><span style="color:#24292e;">  openPage: &#39;/different/page?id=123&amp;name=456&#39;</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div>`,5)]))}const f=a(l,[["render",o]]);export{b as __pageData,f as default};
