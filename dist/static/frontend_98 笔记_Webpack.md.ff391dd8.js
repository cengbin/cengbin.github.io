import{_ as s,o as a,c as n,O as p}from"./chunks/framework.d9e2f5d0.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/98 笔记/Webpack.md","filePath":"frontend/98 笔记/Webpack.md"}'),l={name:"frontend/98 笔记/Webpack.md"};function o(t,e,r,c,i,d){return a(),n("div",null,e[0]||(e[0]=[p(`<h2 id="指定打开浏览器时的导航页面和参数配置" tabindex="-1">指定打开浏览器时的导航页面和参数配置 <a class="header-anchor" href="#指定打开浏览器时的导航页面和参数配置" aria-label="Permalink to &quot;指定打开浏览器时的导航页面和参数配置&quot;">​</a></h2><p>查看webpack 打开浏览器默认带上参数的配置。</p><p><a href="https://v4.webpack.docschina.org/configuration/dev-server/#devserver-openpage" target="_blank" rel="noreferrer">https://v4.webpack.docschina.org/configuration/dev-server/#devserver-openpage</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">devServer: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  open: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  host: &#39;example.com&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  hot: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  https: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 指定打开浏览器时的导航页面，并附带参数</span></span>
<span class="line"><span style="color:#e1e4e8;">  openPage: &#39;/different/page?id=123&amp;name=456&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">devServer: {</span></span>
<span class="line"><span style="color:#24292e;">  open: true,</span></span>
<span class="line"><span style="color:#24292e;">  host: &#39;example.com&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  hot: true,</span></span>
<span class="line"><span style="color:#24292e;">  https: true,</span></span>
<span class="line"><span style="color:#24292e;">  // 指定打开浏览器时的导航页面，并附带参数</span></span>
<span class="line"><span style="color:#24292e;">  openPage: &#39;/different/page?id=123&amp;name=456&#39;</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div>`,4)]))}const v=s(l,[["render",o]]);export{f as __pageData,v as default};
