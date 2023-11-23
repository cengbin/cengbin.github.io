import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.0bd140f3.js";const m=JSON.parse('{"title":"UMD模块","description":"","frontmatter":{},"headers":[],"relativePath":"11 JavaScript模块发展史/5 UMD/UMD模块.md","filePath":"11 JavaScript模块发展史/5 UMD/UMD模块.md"}'),p={name:"11 JavaScript模块发展史/5 UMD/UMD模块.md"},l=a(`<h1 id="umd模块" tabindex="-1">UMD模块 <a class="header-anchor" href="#umd模块" aria-label="Permalink to &quot;UMD模块&quot;">​</a></h1><p>UMD (Universal Module Definition)就是一种javascript通用模块定义规范，让你的模块能在javascript所有运行环境（Node环境、浏览器环境）中发挥作用。</p><p>NodeJS环境javascript遵循的是：CommonJS模块规范<br> 浏览器环境javascript遵循的是：AMD模块规范、CMD模块规范、IIFE模式</p><p>实现一个UMD模块，就要考虑现有的主流javascript模块规范了，如CommonJS, AMD, CMD等。那么如何才能同时满足这几种规范呢？</p><p>首先要想到，模块最终是要导出一个对象，函数，或者变量。</p><p>而不同的模块规范，关于模块导出这部分的定义是完全不一样的。</p><p>因此，我们需要一种过渡机制。</p><p>首先，我们需要一个factory，也就是工厂函数，它只负责返回你需要导出的内容（对象，函数，变量等）。</p><p>我们从导出一个简单的对象开始。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function factory() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">        name: &#39;我是一个umd模块&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function factory() {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">        name: &#39;我是一个umd模块&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(function(root, factory) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (typeof module === &#39;object&#39; &amp;&amp; typeof module.exports === &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;是commonjs模块规范，nodejs环境&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        module.exports = factory();</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else if (typeof define === &#39;function&#39; &amp;&amp; define.amd) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;是AMD模块规范，如require.js&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        define(factory)</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else if (typeof define === &#39;function&#39; &amp;&amp; define.cmd) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;是CMD模块规范，如sea.js&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        define(function(require, exports, module) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            module.exports = factory()</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;没有模块环境，直接挂载在全局对象上&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        root.umdModule = factory();</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}(this, function() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return {</span></span>
<span class="line"><span style="color:#e1e4e8;">        name: &#39;我是一个umd模块&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}))</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(function(root, factory) {</span></span>
<span class="line"><span style="color:#24292e;">    if (typeof module === &#39;object&#39; &amp;&amp; typeof module.exports === &#39;object&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;是commonjs模块规范，nodejs环境&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        module.exports = factory();</span></span>
<span class="line"><span style="color:#24292e;">    } else if (typeof define === &#39;function&#39; &amp;&amp; define.amd) {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;是AMD模块规范，如require.js&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        define(factory)</span></span>
<span class="line"><span style="color:#24292e;">    } else if (typeof define === &#39;function&#39; &amp;&amp; define.cmd) {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;是CMD模块规范，如sea.js&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        define(function(require, exports, module) {</span></span>
<span class="line"><span style="color:#24292e;">            module.exports = factory()</span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;没有模块环境，直接挂载在全局对象上&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        root.umdModule = factory();</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}(this, function() {</span></span>
<span class="line"><span style="color:#24292e;">    return {</span></span>
<span class="line"><span style="color:#24292e;">        name: &#39;我是一个umd模块&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}))</span></span></code></pre></div><p>参考链接：<a href="https://juejin.cn/post/6844903927104667662" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903927104667662</a></p>`,12),o=[l];function c(t,r,i,d,y,f){return n(),e("div",null,o)}const h=s(p,[["render",c]]);export{m as __pageData,h as default};
