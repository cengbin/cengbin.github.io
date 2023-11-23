import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.2eebfdfc.js";const f=JSON.parse('{"title":"JavaScript模块及发展过程","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/11 JavaScript模块发展史/README.md","filePath":"frontend/11 JavaScript模块发展史/README.md"}'),l={name:"frontend/11 JavaScript模块发展史/README.md"},p=n(`<h1 id="javascript模块及发展过程" tabindex="-1">JavaScript模块及发展过程 <a class="header-anchor" href="#javascript模块及发展过程" aria-label="Permalink to &quot;JavaScript模块及发展过程&quot;">​</a></h1><blockquote><p>时间：2020.05.21<br> 作者：阿彬</p></blockquote><h4 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h4><ul><li>前言</li><li>模块化的理解</li><li>模块化规范</li><li>参考链接</li></ul><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>在JavaScript发展初期就是为了实现简单的页面交互逻辑，寥寥数语即可；如今CPU、浏览器性能得到了极大的提升，很多页面逻辑迁移到了客户端（表单验证等），随着web2.0时代的到来，Ajax技术得到广泛应用，jQuery等前端库层出不穷，前端代码日益膨胀，此时在JS方面就会考虑使用模块化规范去管理。</p><h2 id="一、模块化的理解" tabindex="-1">一、模块化的理解 <a class="header-anchor" href="#一、模块化的理解" aria-label="Permalink to &quot;一、模块化的理解&quot;">​</a></h2><h3 id="_1-什么是模块" tabindex="-1">1.什么是模块？ <a class="header-anchor" href="#_1-什么是模块" aria-label="Permalink to &quot;1.什么是模块？&quot;">​</a></h3><ul><li>将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起</li><li>块的内部数据与实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信</li></ul><h3 id="_2-模块化的进化过程" tabindex="-1">2.模块化的进化过程 <a class="header-anchor" href="#_2-模块化的进化过程" aria-label="Permalink to &quot;2.模块化的进化过程&quot;">​</a></h3><ul><li>全局function模式 : 将不同的功能封装成不同的全局函数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function m1(){</span></span>
<span class="line"><span style="color:#e1e4e8;">  //...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">function m2(){</span></span>
<span class="line"><span style="color:#e1e4e8;">  //...</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function m1(){</span></span>
<span class="line"><span style="color:#24292e;">  //...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">function m2(){</span></span>
<span class="line"><span style="color:#24292e;">  //...</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><ul><li>namespace模式 : 简单对象封装</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let myModule = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  data: &#39;www.baidu.com&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  foo() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(\`foo() \${this.data}\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  bar() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(\`bar() \${this.data}\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">myModule.data = &#39;other data&#39; //能直接修改模块内部的数据</span></span>
<span class="line"><span style="color:#e1e4e8;">myModule.foo() // foo() other data</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let myModule = {</span></span>
<span class="line"><span style="color:#24292e;">  data: &#39;www.baidu.com&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  foo() {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(\`foo() \${this.data}\`)</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  bar() {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(\`bar() \${this.data}\`)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">myModule.data = &#39;other data&#39; //能直接修改模块内部的数据</span></span>
<span class="line"><span style="color:#24292e;">myModule.foo() // foo() other data</span></span></code></pre></div><ul><li>IIFE模式：匿名函数自调用(闭包)</li></ul><blockquote><p>IIFE 是缩写，全拼为’Imdiately Invoked Function Expression’。</p></blockquote><blockquote><p>IIFE 表达式 是JavaScript中的一种‘立即执行函数’，也是“立即执行函数表达式”。</p></blockquote><blockquote><p>JavaScript中的三大作用域：js上下执行文件（全局作用域）、函数体、IIFE函数表达式。</p></blockquote><ul><li>IIFE模式增强 : 引入依赖</li></ul><blockquote><p>这就是现代模块实现的基石</p></blockquote><p><strong>代码参考demo</strong></p><p>上例子通过jquery方法将页面的背景颜色改成红色，所以必须先引入jQuery库，就把这个库当作参数传入。这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。</p><h3 id="_3-模块化的好处" tabindex="-1">3. 模块化的好处 <a class="header-anchor" href="#_3-模块化的好处" aria-label="Permalink to &quot;3. 模块化的好处&quot;">​</a></h3><ul><li>避免命名冲突(减少命名空间污染)</li><li>更好的分离, 按需加载</li><li>更高复用性</li><li>高可维护性</li></ul><h3 id="_4-引入多个-script-后出现出现问题" tabindex="-1">4. 引入多个<code>&lt;script&gt;</code>后出现出现问题 <a class="header-anchor" href="#_4-引入多个-script-后出现出现问题" aria-label="Permalink to &quot;4. 引入多个\`&lt;script&gt;\`后出现出现问题&quot;">​</a></h3><ul><li>请求过多</li><li>依赖模糊</li><li>难以维护</li></ul><h2 id="二、模块化规范" tabindex="-1">二、模块化规范 <a class="header-anchor" href="#二、模块化规范" aria-label="Permalink to &quot;二、模块化规范&quot;">​</a></h2><ol><li>CommonJS 模块化规范</li></ol><p>CommonJS是一种模块化规范，最初是为Node.js设计的。</p><ol start="2"><li>AMD 模块化规范</li></ol><p>异步模块定义（Asynchronous Module Definition, AMD）</p><p>RequireJS是一个工具库，主要用于客户端的模块管理。它的模块管理遵守AMD规范，RequireJS的基本思想是，通过define方法，将代码定义为模块；通过require方法，实现代码的模块加载。</p><ol start="3"><li>CMD 模块化规范</li></ol><p>通用模块定义 (Common Module Definition, CMD)，<a href="https://github.com/cmdjs/specification/blob/master/draft/module.md" target="_blank" rel="noreferrer">CMD 模块定义规范</a>专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行。CMD规范整合了CommonJS和AMD规范的特点。</p><p>在 Sea.js 中，所有 JavaScript 模块都遵循 CMD模块定义规范。</p><p><a href="https://github.com/seajs/seajs/issues/242" target="_blank" rel="noreferrer">sea.js JavaScript模块</a></p><p>SeaJS 具有以下核心特性：</p><ul><li>简单一致的模块格式。</li><li>依赖的自动管理。</li><li>脚本的异步并行加载。</li><li>丰富的插件。</li><li>友好的调试。</li></ul><ol start="4"><li>UMD</li></ol><p>UMD (Universal Module Definition)就是一种javascript通用模块定义规范，让你的模块能在javascript所有运行环境（Node环境、浏览器环境）中发挥作用。</p><p>NodeJS环境javascript遵循的是：CommonJS模块规范<br> 浏览器环境javascript遵循的是：AMD模块规范、CMD模块规范、IIFE模式</p><p>实现一个UMD模块，就要考虑现有的主流javascript模块规范了，如CommonJS, AMD, CMD等。那么如何才能同时满足这几种规范呢？</p><p>首先要想到，模块最终是要导出一个对象，函数，或者变量。</p><p>而不同的模块规范，关于模块导出这部分的定义是完全不一样的。</p><p>因此，我们需要一种过渡机制。</p><p>首先，我们需要一个factory，也就是工厂函数，它只负责返回你需要导出的内容（对象，函数，变量等）。</p><p>我们从导出一个简单的对象开始。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function factory() {</span></span>
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
<span class="line"><span style="color:#24292e;">}))</span></span></code></pre></div><p>参考链接：<a href="https://juejin.cn/post/6844903927104667662" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903927104667662</a></p><ol start="5"><li>ES6模块化</li></ol><h2 id="四、参考链接" tabindex="-1">四、参考链接 <a class="header-anchor" href="#四、参考链接" aria-label="Permalink to &quot;四、参考链接&quot;">​</a></h2><ul><li><a href="https://segmentfault.com/a/1190000017466120" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000017466120</a></li><li><a href="https://juejin.cn/post/6844903961128861704" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903961128861704</a></li></ul>`,53),o=[p];function t(c,i,r,d,u,y){return a(),e("div",null,o)}const m=s(l,[["render",t]]);export{f as __pageData,m as default};
