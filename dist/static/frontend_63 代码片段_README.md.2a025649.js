import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const l="/static/640.76b22e50.gif",p="/static/WX20240606-093541@2x.0db97dba.png",m=JSON.parse('{"title":"前端代码片段","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/63 代码片段/README.md","filePath":"frontend/63 代码片段/README.md"}'),o={name:"frontend/63 代码片段/README.md"},t=e(`<h1 id="前端代码片段" tabindex="-1">前端代码片段 <a class="header-anchor" href="#前端代码片段" aria-label="Permalink to &quot;前端代码片段&quot;">​</a></h1><p><a href="https://mp.weixin.qq.com/s/778hr32KnLFEw7oBNt38sg" target="_blank" rel="noreferrer">N 个值得一看的前端代码片段</a></p><h2 id="_1-快速打开官网" tabindex="-1">1. 快速打开官网 <a class="header-anchor" href="#_1-快速打开官网" aria-label="Permalink to &quot;1. 快速打开官网&quot;">​</a></h2><p>当你想查看第三方库的主页和代码仓库时，你可以使用一下命令快速打开：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 打开主页</span></span>
<span class="line"><span style="color:#e1e4e8;">npm home PACKAGE_NAME</span></span>
<span class="line"><span style="color:#e1e4e8;">npm home react</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 打开代码仓库</span></span>
<span class="line"><span style="color:#e1e4e8;">npm repo PACKAGE_NAME</span></span>
<span class="line"><span style="color:#e1e4e8;">npm repo react</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 打开主页</span></span>
<span class="line"><span style="color:#24292e;">npm home PACKAGE_NAME</span></span>
<span class="line"><span style="color:#24292e;">npm home react</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 打开代码仓库</span></span>
<span class="line"><span style="color:#24292e;">npm repo PACKAGE_NAME</span></span>
<span class="line"><span style="color:#24292e;">npm repo react</span></span></code></pre></div><p><img src="`+l+`" alt="图片"></p><h2 id="_2-格式化时分秒" tabindex="-1">2. 格式化时分秒 <a class="header-anchor" href="#_2-格式化时分秒" aria-label="Permalink to &quot;2. 格式化时分秒&quot;">​</a></h2><p>在展示音视频时长之类的场景时，需要把时长秒数格式为 HH:mm:ss 的格式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const formatSeconds = (s) =&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  [parseInt(s / 60 / 60), parseInt((s / 60) % 60), parseInt(s % 60)]</span></span>
<span class="line"><span style="color:#e1e4e8;">    .join(&#39;:&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    .replace(/\\b(\\d)\\b/g, &#39;0$1&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const formatSeconds = (s) =&gt;</span></span>
<span class="line"><span style="color:#24292e;">  [parseInt(s / 60 / 60), parseInt((s / 60) % 60), parseInt(s % 60)]</span></span>
<span class="line"><span style="color:#24292e;">    .join(&#39;:&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    .replace(/\\b(\\d)\\b/g, &#39;0$1&#39;)</span></span></code></pre></div><p>如果你想显示“刚刚”、“5分钟前”之类的内容，可以尝试 timeago.js 库。</p><h2 id="_8-文件下载" tabindex="-1">8. 文件下载 <a class="header-anchor" href="#_8-文件下载" aria-label="Permalink to &quot;8. 文件下载&quot;">​</a></h2><p>使用 <code>a</code> 标签的 <code>download</code> 属性，同源才能触发下载，IE 不支持，移动端兼容性也不太好。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;a href=&quot;/path/to/file&quot; download&gt;Download&lt;/a&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;a href=&quot;/path/to/file&quot; download&gt;Download&lt;/a&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 或者 js 临时生成 a</span></span>
<span class="line"><span style="color:#e1e4e8;">function download(url) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const link = document.createElement(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">  link.download = &#39;file name&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  link.href = &#39;url&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  document.body.appendChild(link)</span></span>
<span class="line"><span style="color:#e1e4e8;">  link.click()</span></span>
<span class="line"><span style="color:#e1e4e8;">  document.body.removeChild(link)</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 或者 js 临时生成 a</span></span>
<span class="line"><span style="color:#24292e;">function download(url) {</span></span>
<span class="line"><span style="color:#24292e;">  const link = document.createElement(&#39;a&#39;)</span></span>
<span class="line"><span style="color:#24292e;">  link.download = &#39;file name&#39;</span></span>
<span class="line"><span style="color:#24292e;">  link.href = &#39;url&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  document.body.appendChild(link)</span></span>
<span class="line"><span style="color:#24292e;">  link.click()</span></span>
<span class="line"><span style="color:#24292e;">  document.body.removeChild(link)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>静态资源服务器设置响应头也能触发浏览器下载。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Content-Disposition: attachment; filename=&quot;filename.jpg&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Content-Disposition: attachment; filename=&quot;filename.jpg&quot;</span></span></code></pre></div><p>除了在线文件下载，你还可以创建一个 text 或 json 文件，并下载，主要用到了 <code>Blob</code> 对象和 <code>createObjectURL</code> 方法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const data = JSON.stringify({ &#39;message&#39;: &#39;Hello Word&#39; });</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const blob = new Blob([data], { type: &#39;application/json&#39; });</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 创建一个 URL</span></span>
<span class="line"><span style="color:#e1e4e8;">const url = window.URL.createObjectURL(blob);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 用上面的 download 方法下载这个 url</span></span>
<span class="line"><span style="color:#e1e4e8;">...</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 释放创建的 URL</span></span>
<span class="line"><span style="color:#e1e4e8;">window.URL.revokeObjectURL(url);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const data = JSON.stringify({ &#39;message&#39;: &#39;Hello Word&#39; });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const blob = new Blob([data], { type: &#39;application/json&#39; });</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 创建一个 URL</span></span>
<span class="line"><span style="color:#24292e;">const url = window.URL.createObjectURL(blob);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 用上面的 download 方法下载这个 url</span></span>
<span class="line"><span style="color:#24292e;">...</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 释放创建的 URL</span></span>
<span class="line"><span style="color:#24292e;">window.URL.revokeObjectURL(url);</span></span></code></pre></div><h2 id="_10-多行省略号" tabindex="-1">10. 多行省略号 <a class="header-anchor" href="#_10-多行省略号" aria-label="Permalink to &quot;10. 多行省略号&quot;">​</a></h2><p>单行或多行截断显示省略号，很常用的 CSS 片段。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.truncate {</span></span>
<span class="line"><span style="color:#e1e4e8;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#e1e4e8;">  text-overflow: ellipsis;</span></span>
<span class="line"><span style="color:#e1e4e8;">  white-space: nowrap;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.truncate {</span></span>
<span class="line"><span style="color:#e1e4e8;">  display: -webkit-box;</span></span>
<span class="line"><span style="color:#e1e4e8;">  -webkit-box-orient: vertical;</span></span>
<span class="line"><span style="color:#e1e4e8;">  -webkit-line-clamp: 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.truncate {</span></span>
<span class="line"><span style="color:#24292e;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#24292e;">  text-overflow: ellipsis;</span></span>
<span class="line"><span style="color:#24292e;">  white-space: nowrap;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.truncate {</span></span>
<span class="line"><span style="color:#24292e;">  display: -webkit-box;</span></span>
<span class="line"><span style="color:#24292e;">  -webkit-box-orient: vertical;</span></span>
<span class="line"><span style="color:#24292e;">  -webkit-line-clamp: 2;</span></span>
<span class="line"><span style="color:#24292e;">  overflow: hidden;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_11-选中最后几个元素" tabindex="-1">11. 选中最后几个元素 <a class="header-anchor" href="#_11-选中最后几个元素" aria-label="Permalink to &quot;11. 选中最后几个元素&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 前三个</span></span>
<span class="line"><span style="color:#e1e4e8;">li:nth-child(-n + 3) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  text-decoration: underline;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 选中 2-5 的列表项</span></span>
<span class="line"><span style="color:#e1e4e8;">li:nth-child(n + 2):nth-child(-n + 5) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  color: #2563eb;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 倒数两个</span></span>
<span class="line"><span style="color:#e1e4e8;">li:nth-last-child(-n + 2) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  text-decoration-line: line-through;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 前三个</span></span>
<span class="line"><span style="color:#24292e;">li:nth-child(-n + 3) {</span></span>
<span class="line"><span style="color:#24292e;">  text-decoration: underline;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 选中 2-5 的列表项</span></span>
<span class="line"><span style="color:#24292e;">li:nth-child(n + 2):nth-child(-n + 5) {</span></span>
<span class="line"><span style="color:#24292e;">  color: #2563eb;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 倒数两个</span></span>
<span class="line"><span style="color:#24292e;">li:nth-last-child(-n + 2) {</span></span>
<span class="line"><span style="color:#24292e;">  text-decoration-line: line-through;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+p+`" alt="图片"></p><h2 id="_12-滚动条样式" tabindex="-1">12. 滚动条样式 <a class="header-anchor" href="#_12-滚动条样式" aria-label="Permalink to &quot;12. 滚动条样式&quot;">​</a></h2><p>自定义滚动条样式也是很常见的需求，除了通过样式，也可以通过第三方库（如 better-scroll 等）来实现自定义滚动条样式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/</span></span>
<span class="line"><span style="color:#e1e4e8;">::-webkit-scrollbar {</span></span>
<span class="line"><span style="color:#e1e4e8;">  width: 8px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  height: 8px;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/*定义滚动条轨道 内阴影+圆角*/</span></span>
<span class="line"><span style="color:#e1e4e8;">::-webkit-scrollbar-track {</span></span>
<span class="line"><span style="color:#e1e4e8;">  border-radius: 10px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background-color: #fafafa;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/*定义滑块 内阴影+圆角*/</span></span>
<span class="line"><span style="color:#e1e4e8;">::-webkit-scrollbar-thumb {</span></span>
<span class="line"><span style="color:#e1e4e8;">  border-radius: 10px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  background: rgb(191, 191, 191);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/*较新的 API*/</span></span>
<span class="line"><span style="color:#e1e4e8;">body {</span></span>
<span class="line"><span style="color:#e1e4e8;">  scrollbar-width: thin;</span></span>
<span class="line"><span style="color:#e1e4e8;">  scrollbar-color: #718096 #edf2f7;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/</span></span>
<span class="line"><span style="color:#24292e;">::-webkit-scrollbar {</span></span>
<span class="line"><span style="color:#24292e;">  width: 8px;</span></span>
<span class="line"><span style="color:#24292e;">  height: 8px;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/*定义滚动条轨道 内阴影+圆角*/</span></span>
<span class="line"><span style="color:#24292e;">::-webkit-scrollbar-track {</span></span>
<span class="line"><span style="color:#24292e;">  border-radius: 10px;</span></span>
<span class="line"><span style="color:#24292e;">  background-color: #fafafa;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/*定义滑块 内阴影+圆角*/</span></span>
<span class="line"><span style="color:#24292e;">::-webkit-scrollbar-thumb {</span></span>
<span class="line"><span style="color:#24292e;">  border-radius: 10px;</span></span>
<span class="line"><span style="color:#24292e;">  background: rgb(191, 191, 191);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/*较新的 API*/</span></span>
<span class="line"><span style="color:#24292e;">body {</span></span>
<span class="line"><span style="color:#24292e;">  scrollbar-width: thin;</span></span>
<span class="line"><span style="color:#24292e;">  scrollbar-color: #718096 #edf2f7;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_14-限制并发" tabindex="-1">14. 限制并发 <a class="header-anchor" href="#_14-限制并发" aria-label="Permalink to &quot;14. 限制并发&quot;">​</a></h2><p>当有大量请求需要发起时，往往需求限制并发数量保证其他请求能优先返回。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">async function asyncPool(poolLimit, iterable, iteratorFn) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 用于保存所有异步请求</span></span>
<span class="line"><span style="color:#e1e4e8;">  const ret = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 用户保存正在进行的请求</span></span>
<span class="line"><span style="color:#e1e4e8;">  const executing = new Set();</span></span>
<span class="line"><span style="color:#e1e4e8;">  for (const item of iterable) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 构造出请求 Promise</span></span>
<span class="line"><span style="color:#e1e4e8;">    const p = Promise.resolve().then(() =&gt; iteratorFn(item, iterable));</span></span>
<span class="line"><span style="color:#e1e4e8;">    ret.push(p);</span></span>
<span class="line"><span style="color:#e1e4e8;">    executing.add(p);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 请求执行结束后从正在进行的数组中移除</span></span>
<span class="line"><span style="color:#e1e4e8;">    const clean = () =&gt; executing.delete(p);</span></span>
<span class="line"><span style="color:#e1e4e8;">    p.then(clean).catch(clean);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 如果正在执行的请求数大于并发数，就使用 Promise.race 等待一个最快执行完的请求</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (executing.size &gt;= poolLimit) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      await Promise.race(executing);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 返回所有结果</span></span>
<span class="line"><span style="color:#e1e4e8;">  return Promise.all(ret);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 使用方法</span></span>
<span class="line"><span style="color:#e1e4e8;">const timeout = i =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(i), i));</span></span>
<span class="line"><span style="color:#e1e4e8;">asyncPool(2, [1000, 5000, 3000, 2000], timeout).then(results =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(results)</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">async function asyncPool(poolLimit, iterable, iteratorFn) {</span></span>
<span class="line"><span style="color:#24292e;">  // 用于保存所有异步请求</span></span>
<span class="line"><span style="color:#24292e;">  const ret = [];</span></span>
<span class="line"><span style="color:#24292e;">  // 用户保存正在进行的请求</span></span>
<span class="line"><span style="color:#24292e;">  const executing = new Set();</span></span>
<span class="line"><span style="color:#24292e;">  for (const item of iterable) {</span></span>
<span class="line"><span style="color:#24292e;">    // 构造出请求 Promise</span></span>
<span class="line"><span style="color:#24292e;">    const p = Promise.resolve().then(() =&gt; iteratorFn(item, iterable));</span></span>
<span class="line"><span style="color:#24292e;">    ret.push(p);</span></span>
<span class="line"><span style="color:#24292e;">    executing.add(p);</span></span>
<span class="line"><span style="color:#24292e;">    // 请求执行结束后从正在进行的数组中移除</span></span>
<span class="line"><span style="color:#24292e;">    const clean = () =&gt; executing.delete(p);</span></span>
<span class="line"><span style="color:#24292e;">    p.then(clean).catch(clean);</span></span>
<span class="line"><span style="color:#24292e;">    // 如果正在执行的请求数大于并发数，就使用 Promise.race 等待一个最快执行完的请求</span></span>
<span class="line"><span style="color:#24292e;">    if (executing.size &gt;= poolLimit) {</span></span>
<span class="line"><span style="color:#24292e;">      await Promise.race(executing);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  // 返回所有结果</span></span>
<span class="line"><span style="color:#24292e;">  return Promise.all(ret);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 使用方法</span></span>
<span class="line"><span style="color:#24292e;">const timeout = i =&gt; new Promise(resolve =&gt; setTimeout(() =&gt; resolve(i), i));</span></span>
<span class="line"><span style="color:#24292e;">asyncPool(2, [1000, 5000, 3000, 2000], timeout).then(results =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(results)</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="_16-打开-modal-时禁止-body-滚动" tabindex="-1">16. 打开 Modal 时禁止 body 滚动 <a class="header-anchor" href="#_16-打开-modal-时禁止-body-滚动" aria-label="Permalink to &quot;16. 打开 Modal 时禁止 body 滚动&quot;">​</a></h2><p>打开弹窗的时候，会发现背后的内容还是可以滚动，我们需要在弹窗出现时禁用滚动，在弹窗消失时恢复。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 打开 Modal 时，禁止 body 滚动</span></span>
<span class="line"><span style="color:#e1e4e8;">document.body.style.overflow = &#39;hidden&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 恢复滚动</span></span>
<span class="line"><span style="color:#e1e4e8;">document.body.style.removeProperty(&#39;overflow&#39;);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 打开 Modal 时，禁止 body 滚动</span></span>
<span class="line"><span style="color:#24292e;">document.body.style.overflow = &#39;hidden&#39;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 恢复滚动</span></span>
<span class="line"><span style="color:#24292e;">document.body.style.removeProperty(&#39;overflow&#39;);</span></span></code></pre></div><h2 id="_17-读取mp3文件的信息" tabindex="-1">17. 读取mp3文件的信息 <a class="header-anchor" href="#_17-读取mp3文件的信息" aria-label="Permalink to &quot;17. 读取mp3文件的信息&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 监听文件输入字段的变化</span></span>
<span class="line"><span style="color:#e1e4e8;">document.getElementById(&#39;mp3-file-input&#39;).addEventListener(&#39;change&#39;, function(event) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 获取选中的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    var file = event.target.files[0];</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    // 创建一个Audio元素</span></span>
<span class="line"><span style="color:#e1e4e8;">    var audio = new Audio();</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    // 当音频可以播放时，获取元数据</span></span>
<span class="line"><span style="color:#e1e4e8;">    audio.onloadedmetadata = function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 输出音频的元数据</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;音频标题:&#39;, audio.title);</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;音频艺术家:&#39;, audio.artist);</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;音频专辑:&#39;, audio.album);</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;音频时长(秒):&#39;, audio.duration.toFixed(2));</span></span>
<span class="line"><span style="color:#e1e4e8;">    };</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    // 创建一个FileReader来读取文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    var reader = new FileReader();</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    // 当文件读取完毕</span></span>
<span class="line"><span style="color:#e1e4e8;">    reader.onload = function(e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        // 为Audio元素设置加载的数据URL</span></span>
<span class="line"><span style="color:#e1e4e8;">        audio.src = e.target.result;</span></span>
<span class="line"><span style="color:#e1e4e8;">    };</span></span>
<span class="line"><span style="color:#e1e4e8;"> </span></span>
<span class="line"><span style="color:#e1e4e8;">    // 以DataURL的形式读取文件</span></span>
<span class="line"><span style="color:#e1e4e8;">    reader.readAsDataURL(file);</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 监听文件输入字段的变化</span></span>
<span class="line"><span style="color:#24292e;">document.getElementById(&#39;mp3-file-input&#39;).addEventListener(&#39;change&#39;, function(event) {</span></span>
<span class="line"><span style="color:#24292e;">    // 获取选中的文件</span></span>
<span class="line"><span style="color:#24292e;">    var file = event.target.files[0];</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    // 创建一个Audio元素</span></span>
<span class="line"><span style="color:#24292e;">    var audio = new Audio();</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    // 当音频可以播放时，获取元数据</span></span>
<span class="line"><span style="color:#24292e;">    audio.onloadedmetadata = function() {</span></span>
<span class="line"><span style="color:#24292e;">        // 输出音频的元数据</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;音频标题:&#39;, audio.title);</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;音频艺术家:&#39;, audio.artist);</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;音频专辑:&#39;, audio.album);</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;音频时长(秒):&#39;, audio.duration.toFixed(2));</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    // 创建一个FileReader来读取文件</span></span>
<span class="line"><span style="color:#24292e;">    var reader = new FileReader();</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    // 当文件读取完毕</span></span>
<span class="line"><span style="color:#24292e;">    reader.onload = function(e) {</span></span>
<span class="line"><span style="color:#24292e;">        // 为Audio元素设置加载的数据URL</span></span>
<span class="line"><span style="color:#24292e;">        audio.src = e.target.result;</span></span>
<span class="line"><span style="color:#24292e;">    };</span></span>
<span class="line"><span style="color:#24292e;"> </span></span>
<span class="line"><span style="color:#24292e;">    // 以DataURL的形式读取文件</span></span>
<span class="line"><span style="color:#24292e;">    reader.readAsDataURL(file);</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h2 id="_18-css使页面不滚动" tabindex="-1">18. CSS使页面不滚动 <a class="header-anchor" href="#_18-css使页面不滚动" aria-label="Permalink to &quot;18. CSS使页面不滚动&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.noscroll,.noscroll body{</span></span>
<span class="line"><span style="color:#e1e4e8;">  overflow: hidden !important;</span></span>
<span class="line"><span style="color:#e1e4e8;">  height: 100% !important;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.noscroll,.noscroll body{</span></span>
<span class="line"><span style="color:#24292e;">  overflow: hidden !important;</span></span>
<span class="line"><span style="color:#24292e;">  height: 100% !important;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_19-【奖励】增加、删除" tabindex="-1">19. 【奖励】增加、删除 <a class="header-anchor" href="#_19-【奖励】增加、删除" aria-label="Permalink to &quot;19. 【奖励】增加、删除&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div v-for=&quot;(reward,index) in info.rewards&quot; :key=&quot;index&quot; class=&quot;condition-group&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;el-input v-model=&quot;reward.product_id&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	          placeholder=&quot;请输入奖励ID&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	          :disabled=&quot;server_opening&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	          style=&quot;width:160px;margin-right: 8px;&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;el-input v-model=&quot;reward.amount&quot; placeholder=&quot;请输入数值&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	          :disabled=&quot;server_opening&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	          style=&quot;width:160px;margin-right: 8px;&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;el-button v-if=&quot;info.rewards.length&gt;1 &amp;&amp; !server_opening&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           class=&quot;button-custom&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           icon=&quot;el-icon-minus2&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           @click=&quot;onClickReward(&#39;delete&#39;,index)&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;el-button v-if=&quot;index===info.rewards.length-1 &amp;&amp; !server_opening&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           icon=&quot;el-icon-plus2&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           class=&quot;button-custom&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           @click=&quot;onClickReward(&#39;add&#39;,index)&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">onClickReward(type, index) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	if (type === &#39;add&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		this.info.rewards.push({</span></span>
<span class="line"><span style="color:#e1e4e8;">			&quot;product_id&quot;: null,</span></span>
<span class="line"><span style="color:#e1e4e8;">			&quot;amount&quot;: null,</span></span>
<span class="line"><span style="color:#e1e4e8;">		})</span></span>
<span class="line"><span style="color:#e1e4e8;">	} else if (type === &#39;delete&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		this.info.rewards.splice(index, 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;div v-for=&quot;(reward,index) in info.rewards&quot; :key=&quot;index&quot; class=&quot;condition-group&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;el-input v-model=&quot;reward.product_id&quot;</span></span>
<span class="line"><span style="color:#24292e;">	          placeholder=&quot;请输入奖励ID&quot;</span></span>
<span class="line"><span style="color:#24292e;">	          :disabled=&quot;server_opening&quot;</span></span>
<span class="line"><span style="color:#24292e;">	          style=&quot;width:160px;margin-right: 8px;&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;el-input v-model=&quot;reward.amount&quot; placeholder=&quot;请输入数值&quot;</span></span>
<span class="line"><span style="color:#24292e;">	          :disabled=&quot;server_opening&quot;</span></span>
<span class="line"><span style="color:#24292e;">	          style=&quot;width:160px;margin-right: 8px;&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;el-button v-if=&quot;info.rewards.length&gt;1 &amp;&amp; !server_opening&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           class=&quot;button-custom&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           icon=&quot;el-icon-minus2&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           @click=&quot;onClickReward(&#39;delete&#39;,index)&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;el-button v-if=&quot;index===info.rewards.length-1 &amp;&amp; !server_opening&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           icon=&quot;el-icon-plus2&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           class=&quot;button-custom&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           @click=&quot;onClickReward(&#39;add&#39;,index)&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">onClickReward(type, index) {</span></span>
<span class="line"><span style="color:#24292e;">	if (type === &#39;add&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">		this.info.rewards.push({</span></span>
<span class="line"><span style="color:#24292e;">			&quot;product_id&quot;: null,</span></span>
<span class="line"><span style="color:#24292e;">			&quot;amount&quot;: null,</span></span>
<span class="line"><span style="color:#24292e;">		})</span></span>
<span class="line"><span style="color:#24292e;">	} else if (type === &#39;delete&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">		this.info.rewards.splice(index, 1)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div>`,39),c=[t];function i(r,d,y,u,h,g){return n(),a("div",null,c)}const v=s(o,[["render",i]]);export{m as __pageData,v as default};
