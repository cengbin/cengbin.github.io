import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.6ae5a3d9.js";const p="/web-blog/assets/env.fca97fca.jpg",y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"44 使用NodeJS开发命令行工具/使用Node如何制作一个专业的命令行工具以及命令执行的原理.md","filePath":"44 使用NodeJS开发命令行工具/使用Node如何制作一个专业的命令行工具以及命令执行的原理.md"}'),l={name:"44 使用NodeJS开发命令行工具/使用Node如何制作一个专业的命令行工具以及命令执行的原理.md"},o=e(`<p>使用Node开发一款命令行工具是一件比较有意思的事情。</p><h2 id="_1-命令行工具与环境变量-path" tabindex="-1">1.命令行工具与环境变量 PATH <a class="header-anchor" href="#_1-命令行工具与环境变量-path" aria-label="Permalink to &quot;1.命令行工具与环境变量 PATH&quot;">​</a></h2><p>使用 which 追根 pwd 、env 命令，发现它们实际执行的路径在某一个 bin 目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">binzengdeMacBook-Pro:~ bin.zeng$ which pwd</span></span>
<span class="line"><span style="color:#e1e4e8;">/bin/pwd</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">binzengdeMacBook-Pro:~ bin.zeng$ which env</span></span>
<span class="line"><span style="color:#e1e4e8;">/usr/bin/env</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">binzengdeMacBook-Pro:~ bin.zeng$ which pwd</span></span>
<span class="line"><span style="color:#24292e;">/bin/pwd</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">binzengdeMacBook-Pro:~ bin.zeng$ which env</span></span>
<span class="line"><span style="color:#24292e;">/usr/bin/env</span></span></code></pre></div><p>而这些 bin 目录在环境变量 PATH 中，豁然开朗。简而言之: 「在环境变量的 PATH 中路径的命令可在其它任意地方执行」。</p><p><img src="`+p+`" alt=""></p><p>「开发命令行的原理也是如此，将你开发的命令行工具脚本置于环境变量 PATH 下的路径之中」，而本篇文章的目标就是:</p><blockquote><p>使用 Javascript 这门前端开发者熟悉的语言，借助 Node 环境，开发一个命令行工具。</p></blockquote><h2 id="_2-原理" tabindex="-1">2.原理 <a class="header-anchor" href="#_2-原理" aria-label="Permalink to &quot;2.原理&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">binzengdeMacBook-Pro:~ bin.zeng$ ls -lah $(which webpack)</span></span>
<span class="line"><span style="color:#e1e4e8;">lrwxr-xr-x  1 bin.zeng  admin    42B  4 28 14:05 /usr/local/bin/webpack -&gt; ../lib/node_modules/webpack/bin/webpack.js</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">binzengdeMacBook-Pro:~ bin.zeng$ ls -lah $(which webpack)</span></span>
<span class="line"><span style="color:#24292e;">lrwxr-xr-x  1 bin.zeng  admin    42B  4 28 14:05 /usr/local/bin/webpack -&gt; ../lib/node_modules/webpack/bin/webpack.js</span></span></code></pre></div><p>从中可以看出关于 Node 全局命令行的原理:</p><ul><li><p>npm 全局下载某个 package 到路径 /usr/local/lib/node_modules 下 (yarn 同理，对应路径 ~/.config/yarn/global/node_modules)</p></li><li><p>根据该库的 package.json 中 bin 字段的指示，把对应的命令行路径通过符号索引挂载到 PATH 路径</p></li><li><p>对应的二进制脚本添加 x 权限 (可执行文件权限)</p></li></ul><p>简而言之，Node 环境下的命令行工具，借助的原理无非是「环境变量 Path」与一个「符号链接」</p><h2 id="_3-开发" tabindex="-1">3.开发 <a class="header-anchor" href="#_3-开发" aria-label="Permalink to &quot;3.开发&quot;">​</a></h2><p>在 「package.json 中的 bin 字段」，用以指定最终的命令行工具的名字</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">   &quot;bin&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">       &quot;webpack&quot;: &quot;bin/webpack.js&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">   &quot;bin&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">       &quot;webpack&quot;: &quot;bin/webpack.js&quot;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>对于可直接执行的文件，需要指明执行环境，首行添加一行说明:</p><p>webpack.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/usr/bin/env node</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// code 往下写</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/usr/bin/env node</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// code 往下写</span></span></code></pre></div><p>在命令行工具中，可通过 progress.argv 可获取用户输入。请看以下示例：</p><p>$ webpack 1 2 3</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// Output: [</span></span>
<span class="line"><span style="color:#e1e4e8;">//   &#39;/usr/local/bin/node&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">//   &#39;/Users/shanyue/webpack.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">//   &#39;1&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">//   &#39;2&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">//   &#39;3&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">// ]</span></span>
<span class="line"><span style="color:#e1e4e8;">process.argv</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// Output: [</span></span>
<span class="line"><span style="color:#24292e;">//   &#39;/usr/local/bin/node&#39;,</span></span>
<span class="line"><span style="color:#24292e;">//   &#39;/Users/shanyue/webpack.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">//   &#39;1&#39;,</span></span>
<span class="line"><span style="color:#24292e;">//   &#39;2&#39;,</span></span>
<span class="line"><span style="color:#24292e;">//   &#39;3&#39;,</span></span>
<span class="line"><span style="color:#24292e;">// ]</span></span>
<span class="line"><span style="color:#24292e;">process.argv</span></span></code></pre></div><p>根据解析 process.argv 可以定制格式来获取各式各样的参数作为命令行的输入。</p><p>当然解析参数也要参照 POSIX 兼容的基本规律: 格式、可选、必选、简写、说明、帮助等等。命令行工具命名协议 文章中已说的足够详细。</p><p>因为 POSIX 兼容繁杂的规则，以此衍生出了关于解析命令参数的多个库，站在巨人的肩膀上，在实际工作中就直接开用吧！</p><p>以下是一个 Demo: 使用 commander 解析不同的输入指令</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const { program } = require(&#39;commander&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 解析不同的指令输入</span></span>
<span class="line"><span style="color:#e1e4e8;">program</span></span>
<span class="line"><span style="color:#e1e4e8;">  .option(&#39;-d, --debug&#39;, &#39;output extra debugging&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .option(&#39;-s, --small&#39;, &#39;small pizza size&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  .option(&#39;-p, --pizza-type &lt;type&gt;&#39;, &#39;flavour of pizza&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">program.parse(process.argv)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const options = program.opts()</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(options)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const { program } = require(&#39;commander&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 解析不同的指令输入</span></span>
<span class="line"><span style="color:#24292e;">program</span></span>
<span class="line"><span style="color:#24292e;">  .option(&#39;-d, --debug&#39;, &#39;output extra debugging&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  .option(&#39;-s, --small&#39;, &#39;small pizza size&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  .option(&#39;-p, --pizza-type &lt;type&gt;&#39;, &#39;flavour of pizza&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">program.parse(process.argv)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const options = program.opts()</span></span>
<span class="line"><span style="color:#24292e;">console.log(options)</span></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><p><a href="https://mp.weixin.qq.com/s/TAj-dvEU8FeM6ifq34zanA" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/TAj-dvEU8FeM6ifq34zanA</a></p>`,29),c=[o];function i(t,r,d,b,g,h){return a(),n("div",null,c)}const _=s(l,[["render",i]]);export{y as __pageData,_ as default};
