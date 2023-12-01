import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.0f4e1e9e.js";const h=JSON.parse('{"title":"ArrayBuffer 与 Blob对象","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/6 ArrayBuffer 与 Blob 对象详解/README.md","filePath":"frontend/6 ArrayBuffer 与 Blob 对象详解/README.md"}'),l={name:"frontend/6 ArrayBuffer 与 Blob 对象详解/README.md"},p=a(`<h1 id="arraybuffer-与-blob对象" tabindex="-1">ArrayBuffer 与 Blob对象 <a class="header-anchor" href="#arraybuffer-与-blob对象" aria-label="Permalink to &quot;ArrayBuffer 与 Blob对象&quot;">​</a></h1><h2 id="_1、arraybuffer-对象" tabindex="-1">1、ArrayBuffer 对象 <a class="header-anchor" href="#_1、arraybuffer-对象" aria-label="Permalink to &quot;1、ArrayBuffer 对象&quot;">​</a></h2><p><strong>ArrayBuffer</strong> 对象是 ES6 才纳入正式 ECMAScript 规范，是 JavaScript <strong>操作二进制数据</strong>的一个接口。<strong>ArrayBuffer</strong> 对象是以数组的语法处理二进制数据，也称二进制数组。</p><h3 id="_1-概念介绍" tabindex="-1">1. 概念介绍 <a class="header-anchor" href="#_1-概念介绍" aria-label="Permalink to &quot;1. 概念介绍&quot;">​</a></h3><p><strong>ArrayBuffer</strong> 对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（<strong>TypedArray</strong>视图和<strong>DataView</strong>视图）来读写，视图的作用是以指定格式解读二进制数据。</p><h2 id="_2、blob对象" tabindex="-1">2、Blob对象 <a class="header-anchor" href="#_2、blob对象" aria-label="Permalink to &quot;2、Blob对象&quot;">​</a></h2><p><strong>Blob</strong> 全称：Binary Large Object （二进制大型对象）。</p><h3 id="_1-概念介绍-1" tabindex="-1">1. 概念介绍 <a class="header-anchor" href="#_1-概念介绍-1" aria-label="Permalink to &quot;1. 概念介绍&quot;">​</a></h3><p>Blob 对象表示一个二进制文件的数据内容，通常用来读写文件，比如一个图片文件的内容就可以通过 Blob 对象读写。</p><p>与 ArrayBuffer 区别：</p><ul><li>Blob 用于操作二进制文件内容</li><li>ArrayBuffer 用于操作内存</li></ul><h3 id="_2-应用场景" tabindex="-1">2.应用场景 <a class="header-anchor" href="#_2-应用场景" aria-label="Permalink to &quot;2.应用场景&quot;">​</a></h3><h4 id="_2-1-获取文件信息" tabindex="-1">2.1 获取文件信息 <a class="header-anchor" href="#_2-1-获取文件信息" aria-label="Permalink to &quot;2.1 获取文件信息&quot;">​</a></h4><p>File 实例对象是一个特殊的 Blob 实例，增加了 name 和 lastModifiedDate 属性。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#e1e4e8;">// &lt;input type=&quot;file&quot; accept=&quot;image/*&quot; multiple onchange=&quot;fileinfo(this.files)&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function fileinfo(files) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  for (let i = 0; i &lt; files.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let f = files[i];</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(</span></span>
<span class="line"><span style="color:#e1e4e8;">      f.name, // 文件名，不含路径</span></span>
<span class="line"><span style="color:#e1e4e8;">      f.size, // 文件大小，Blob 实例属性</span></span>
<span class="line"><span style="color:#e1e4e8;">      f.type, // 文件类型，Blob 实例属性</span></span>
<span class="line"><span style="color:#e1e4e8;">      f.lastModifiedDate // 文件的最后修改时间</span></span>
<span class="line"><span style="color:#e1e4e8;">    );</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#24292e;">// &lt;input type=&quot;file&quot; accept=&quot;image/*&quot; multiple onchange=&quot;fileinfo(this.files)&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function fileinfo(files) {</span></span>
<span class="line"><span style="color:#24292e;">  for (let i = 0; i &lt; files.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    let f = files[i];</span></span>
<span class="line"><span style="color:#24292e;">    console.log(</span></span>
<span class="line"><span style="color:#24292e;">      f.name, // 文件名，不含路径</span></span>
<span class="line"><span style="color:#24292e;">      f.size, // 文件大小，Blob 实例属性</span></span>
<span class="line"><span style="color:#24292e;">      f.type, // 文件类型，Blob 实例属性</span></span>
<span class="line"><span style="color:#24292e;">      f.lastModifiedDate // 文件的最后修改时间</span></span>
<span class="line"><span style="color:#24292e;">    );</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="_2-2-下载文件" tabindex="-1">2.2 下载文件 <a class="header-anchor" href="#_2-2-下载文件" aria-label="Permalink to &quot;2.2 下载文件&quot;">​</a></h4><p>在 AJAX 请求中，指定 responseType 属性为 blob ，皆可以下下载一个 Blob 对象。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function getBlob(url, callback) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const xhr = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#e1e4e8;">  xhr.open(&#39;GET&#39;, url);</span></span>
<span class="line"><span style="color:#e1e4e8;">  xhr.responseType = &#39;blob&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  xhr.onload = function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    callback(xhr.response);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  xhr.send(null);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function getBlob(url, callback) {</span></span>
<span class="line"><span style="color:#24292e;">  const xhr = new XMLHttpRequest();</span></span>
<span class="line"><span style="color:#24292e;">  xhr.open(&#39;GET&#39;, url);</span></span>
<span class="line"><span style="color:#24292e;">  xhr.responseType = &#39;blob&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  xhr.onload = function () {</span></span>
<span class="line"><span style="color:#24292e;">    callback(xhr.response);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  xhr.send(null);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>然后，xhr.response 拿到的就是一个 Blob 对象。</p><h4 id="_2-3-生成-url" tabindex="-1">2.3 生成 URL <a class="header-anchor" href="#_2-3-生成-url" aria-label="Permalink to &quot;2.3 生成 URL&quot;">​</a></h4><p>浏览器允许使用 URL.createObjectURL() 方法，针对 Blob 对象生成一个临时URL，以便于某些 API 使用。</p><p>如作为图片预览的 URL。</p><p>这个 URL 以 blob:// 开头，表明对应一个 Blob 对象，协议头后面是一个识别符，用来唯一对应内存里面的 Blob 对象。这一点与 data://URL（URL 包含实际数据）和 file://URL（本地文件系统里面的文件）都不一样。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const droptarget = document.getElementById(&#39;droptarget&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">droptarget.ondrop = function (e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const files = e.dataTransfer.files;</span></span>
<span class="line"><span style="color:#e1e4e8;">  for (let i = 0; i &lt; files.length; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let type = files[i].type;</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (type.substring(0,6) !== &#39;image/&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">      continue;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let img = document.createElement(&#39;img&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    img.src = URL.createObjectURL(files[i]);</span></span>
<span class="line"><span style="color:#e1e4e8;">    img.onload = function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.width = 100;</span></span>
<span class="line"><span style="color:#e1e4e8;">      document.body.appendChild(this);</span></span>
<span class="line"><span style="color:#e1e4e8;">      URL.revokeObjectURL(this.src);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const droptarget = document.getElementById(&#39;droptarget&#39;);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">droptarget.ondrop = function (e) {</span></span>
<span class="line"><span style="color:#24292e;">  const files = e.dataTransfer.files;</span></span>
<span class="line"><span style="color:#24292e;">  for (let i = 0; i &lt; files.length; i++) {</span></span>
<span class="line"><span style="color:#24292e;">    let type = files[i].type;</span></span>
<span class="line"><span style="color:#24292e;">    if (type.substring(0,6) !== &#39;image/&#39;)</span></span>
<span class="line"><span style="color:#24292e;">      continue;</span></span>
<span class="line"><span style="color:#24292e;">    let img = document.createElement(&#39;img&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    img.src = URL.createObjectURL(files[i]);</span></span>
<span class="line"><span style="color:#24292e;">    img.onload = function () {</span></span>
<span class="line"><span style="color:#24292e;">      this.width = 100;</span></span>
<span class="line"><span style="color:#24292e;">      document.body.appendChild(this);</span></span>
<span class="line"><span style="color:#24292e;">      URL.revokeObjectURL(this.src);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="_2-4-读取文件" tabindex="-1">2.4 读取文件 <a class="header-anchor" href="#_2-4-读取文件" aria-label="Permalink to &quot;2.4 读取文件&quot;">​</a></h4><p>取得 Blob 对象以后，可以通过 FileReader 对象，读取 Blob 对象的内容，即文件内容。</p><p>FileReader 对象提供四个方法。将 Blob 对象作为参数传入，然后以指定的格式返回。</p><ul><li>FileReader.readAsText()：返回文本，需要指定文本编码，默认为 UTF-8。</li><li>FileReader.readAsArrayBuffer()：返回 ArrayBuffer 对象。</li><li>FileReader.readAsDataURL()：返回 Data URL。</li><li>FileReader.readAsBinaryString()：返回原始的二进制字符串。</li></ul><p>下面是 FileReader.readAsText() 方法的例子，用来读取文本文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#e1e4e8;">// &lt;input type=&#39;file&#39; onchange=&#39;readfile(this.files[0])&#39;&gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// &lt;pre id=&#39;output&#39;&gt;&lt;/pre&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">function readfile(f) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  let reader = new FileReader();</span></span>
<span class="line"><span style="color:#e1e4e8;">  reader.readAsText(f);</span></span>
<span class="line"><span style="color:#e1e4e8;">  reader.onload = function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let text = reader.result;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let out = document.getElementById(&#39;output&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    out.innerHTML = &#39;&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    out.appendChild(document.createTextNode(text));</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  reader.onerror = function(e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;Error&#39;, e);</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#24292e;">// &lt;input type=&#39;file&#39; onchange=&#39;readfile(this.files[0])&#39;&gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#24292e;">// &lt;pre id=&#39;output&#39;&gt;&lt;/pre&gt;</span></span>
<span class="line"><span style="color:#24292e;">function readfile(f) {</span></span>
<span class="line"><span style="color:#24292e;">  let reader = new FileReader();</span></span>
<span class="line"><span style="color:#24292e;">  reader.readAsText(f);</span></span>
<span class="line"><span style="color:#24292e;">  reader.onload = function () {</span></span>
<span class="line"><span style="color:#24292e;">    let text = reader.result;</span></span>
<span class="line"><span style="color:#24292e;">    let out = document.getElementById(&#39;output&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    out.innerHTML = &#39;&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    out.appendChild(document.createTextNode(text));</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  reader.onerror = function(e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;Error&#39;, e);</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>下面是 FileReader.readAsArrayBuffer() 方法的例子，用于读取二进制文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#e1e4e8;">// &lt;input type=&quot;file&quot; onchange=&quot;typefile(this.files[0])&quot;&gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">function typefile(file) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 文件开头的四个字节，生成一个 Blob 对象</span></span>
<span class="line"><span style="color:#e1e4e8;">  let slice = file.slice(0, 4);</span></span>
<span class="line"><span style="color:#e1e4e8;">  let reader = new FileReader();</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 读取这四个字节</span></span>
<span class="line"><span style="color:#e1e4e8;">  reader.readAsArrayBuffer(slice);</span></span>
<span class="line"><span style="color:#e1e4e8;">  reader.onload = function (e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    let buffer = reader.result;</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 将这四个字节的内容，视作一个32位整数</span></span>
<span class="line"><span style="color:#e1e4e8;">    let view = new DataView(buffer);</span></span>
<span class="line"><span style="color:#e1e4e8;">    let magic = view.getUint32(0, false);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 根据文件的前四个字节，判断它的类型</span></span>
<span class="line"><span style="color:#e1e4e8;">    switch(magic) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      case 0x89504E47: file.verified_type = &#39;image/png&#39;; break;</span></span>
<span class="line"><span style="color:#e1e4e8;">      case 0x47494638: file.verified_type = &#39;image/gif&#39;; break;</span></span>
<span class="line"><span style="color:#e1e4e8;">      case 0x25504446: file.verified_type = &#39;application/pdf&#39;; break;</span></span>
<span class="line"><span style="color:#e1e4e8;">      case 0x504b0304: file.verified_type = &#39;application/zip&#39;; break;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(file.name, file.verified_type);</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// HTML 代码如下</span></span>
<span class="line"><span style="color:#24292e;">// &lt;input type=&quot;file&quot; onchange=&quot;typefile(this.files[0])&quot;&gt;&lt;/input&gt;</span></span>
<span class="line"><span style="color:#24292e;">function typefile(file) {</span></span>
<span class="line"><span style="color:#24292e;">  // 文件开头的四个字节，生成一个 Blob 对象</span></span>
<span class="line"><span style="color:#24292e;">  let slice = file.slice(0, 4);</span></span>
<span class="line"><span style="color:#24292e;">  let reader = new FileReader();</span></span>
<span class="line"><span style="color:#24292e;">  // 读取这四个字节</span></span>
<span class="line"><span style="color:#24292e;">  reader.readAsArrayBuffer(slice);</span></span>
<span class="line"><span style="color:#24292e;">  reader.onload = function (e) {</span></span>
<span class="line"><span style="color:#24292e;">    let buffer = reader.result;</span></span>
<span class="line"><span style="color:#24292e;">    // 将这四个字节的内容，视作一个32位整数</span></span>
<span class="line"><span style="color:#24292e;">    let view = new DataView(buffer);</span></span>
<span class="line"><span style="color:#24292e;">    let magic = view.getUint32(0, false);</span></span>
<span class="line"><span style="color:#24292e;">    // 根据文件的前四个字节，判断它的类型</span></span>
<span class="line"><span style="color:#24292e;">    switch(magic) {</span></span>
<span class="line"><span style="color:#24292e;">      case 0x89504E47: file.verified_type = &#39;image/png&#39;; break;</span></span>
<span class="line"><span style="color:#24292e;">      case 0x47494638: file.verified_type = &#39;image/gif&#39;; break;</span></span>
<span class="line"><span style="color:#24292e;">      case 0x25504446: file.verified_type = &#39;application/pdf&#39;; break;</span></span>
<span class="line"><span style="color:#24292e;">      case 0x504b0304: file.verified_type = &#39;application/zip&#39;; break;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    console.log(file.name, file.verified_type);</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><p><a href="https://juejin.cn/post/6844904022206332941" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904022206332941</a></p>`,34),o=[p];function t(r,c,i,y,d,f){return e(),n("div",null,o)}const g=s(l,[["render",t]]);export{h as __pageData,g as default};
