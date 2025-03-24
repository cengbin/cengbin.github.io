import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.0f4e1e9e.js";const m=JSON.parse('{"title":"页面自适应设计","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/5 C端应用开发/1 响应式网站开发/README.md","filePath":"frontend/5 C端应用开发/1 响应式网站开发/README.md"}'),p={name:"frontend/5 C端应用开发/1 响应式网站开发/README.md"},e=l(`<h1 id="页面自适应设计" tabindex="-1">页面自适应设计 <a class="header-anchor" href="#页面自适应设计" aria-label="Permalink to &quot;页面自适应设计&quot;">​</a></h1><p>响应式网站指一个网站要适配PC端、Pad端、Mobile端。</p><p>媒体查询</p><p>em / rem</p><h2 id="pc端" tabindex="-1">PC端 <a class="header-anchor" href="#pc端" aria-label="Permalink to &quot;PC端&quot;">​</a></h2><p>px em</p><h2 id="移动端" tabindex="-1">移动端 <a class="header-anchor" href="#移动端" aria-label="Permalink to &quot;移动端&quot;">​</a></h2><p>em / rem</p><h2 id="_1、栅格布局" tabindex="-1">1、栅格布局 <a class="header-anchor" href="#_1、栅格布局" aria-label="Permalink to &quot;1、栅格布局&quot;">​</a></h2><p>栅格布局是一种网格化的页面布局方式，它由行和列组成。</p><h2 id="_2、响应式布局" tabindex="-1">2、响应式布局 <a class="header-anchor" href="#_2、响应式布局" aria-label="Permalink to &quot;2、响应式布局&quot;">​</a></h2><p>通过CSS3的媒体查询，根据不同的屏幕尺寸区间设置不同的样式效果，和不同尺寸的图片，来保证页面图片显示不失真，布局元素错乱。</p><h2 id="_3、flex布局" tabindex="-1">3、Flex布局 <a class="header-anchor" href="#_3、flex布局" aria-label="Permalink to &quot;3、Flex布局&quot;">​</a></h2><p>Flexbox是一种基于弹性盒子模型的布局技术。</p><ul><li>使用 Flexbox 布局可以让元素自动适应不同屏幕尺寸</li><li>元素可以自动换行、伸缩，减少媒体查询的使用</li><li>特别适合一维布局（行或列）</li></ul><h2 id="_4、rem-em-相对单位" tabindex="-1">4、rem/em 相对单位 <a class="header-anchor" href="#_4、rem-em-相对单位" aria-label="Permalink to &quot;4、rem/em 相对单位&quot;">​</a></h2><h2 id="_5、vw-vh-视口单位" tabindex="-1">5、vw/vh 视口单位 <a class="header-anchor" href="#_5、vw-vh-视口单位" aria-label="Permalink to &quot;5、vw/vh 视口单位&quot;">​</a></h2><h2 id="_6、css变量-自定义属性-配合媒体查询" tabindex="-1">6、CSS变量（自定义属性）配合媒体查询 <a class="header-anchor" href="#_6、css变量-自定义属性-配合媒体查询" aria-label="Permalink to &quot;6、CSS变量（自定义属性）配合媒体查询&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">:root {</span></span>
<span class="line"><span style="color:#e1e4e8;">  --main-font-size: 16px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">@media (max-width: 768px) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  :root {</span></span>
<span class="line"><span style="color:#e1e4e8;">    --main-font-size: 14px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.text {</span></span>
<span class="line"><span style="color:#e1e4e8;">  font-size: var(--main-font-size);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">:root {</span></span>
<span class="line"><span style="color:#24292e;">  --main-font-size: 16px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">@media (max-width: 768px) {</span></span>
<span class="line"><span style="color:#24292e;">  :root {</span></span>
<span class="line"><span style="color:#24292e;">    --main-font-size: 14px;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.text {</span></span>
<span class="line"><span style="color:#24292e;">  font-size: var(--main-font-size);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h1 id="_7、移动优先设计-mobile-first" tabindex="-1">7、移动优先设计（Mobile First） <a class="header-anchor" href="#_7、移动优先设计-mobile-first" aria-label="Permalink to &quot;7、移动优先设计（Mobile First）&quot;">​</a></h1><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 网站的响应式设计：移动优先设计（Mobil e First）</span></span>
<span class="line"><span style="color:#6A737D;">// 移动端默认样式</span></span>
<span class="line"><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 平板（屏幕宽度不小于768px时）</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">750</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 桌面（屏幕宽度不小于1024时）</span></span>
<span class="line"><span style="color:#F97583;">@media</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">min-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1024</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">.container</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">960</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 网站的响应式设计：移动优先设计（Mobil e First）</span></span>
<span class="line"><span style="color:#6A737D;">// 移动端默认样式</span></span>
<span class="line"><span style="color:#6F42C1;">.container</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 平板（屏幕宽度不小于768px时）</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">768</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.container</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">750</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 桌面（屏幕宽度不小于1024时）</span></span>
<span class="line"><span style="color:#D73A49;">@media</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">min-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1024</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">.container</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">960</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,21),o=[e];function c(t,r,i,y,E,d){return a(),n("div",null,o)}const x=s(p,[["render",c]]);export{m as __pageData,x as default};
