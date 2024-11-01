import{_ as n,o as a,c as e,O as l}from"./chunks/framework.d9e2f5d0.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/45 安全沙箱(Sandboxes)/README.md","filePath":"frontend/45 安全沙箱(Sandboxes)/README.md"}'),p={name:"frontend/45 安全沙箱(Sandboxes)/README.md"};function o(c,s,t,r,i,y){return a(),e("div",null,s[0]||(s[0]=[l(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function foo(){</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 执行上下文</span></span>
<span class="line"><span style="color:#e1e4e8;">fooContext = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    VO:{...}, // 变量对象</span></span>
<span class="line"><span style="color:#e1e4e8;">    this:thisValue, // this值是执行上下文一属性</span></span>
<span class="line"><span style="color:#e1e4e8;">    Scope // 函数作用域链</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function foo(){</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 执行上下文</span></span>
<span class="line"><span style="color:#24292e;">fooContext = {</span></span>
<span class="line"><span style="color:#24292e;">    VO:{...}, // 变量对象</span></span>
<span class="line"><span style="color:#24292e;">    this:thisValue, // this值是执行上下文一属性</span></span>
<span class="line"><span style="color:#24292e;">    Scope // 函数作用域链</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>函数在创建阶段会给foo函数创建[[Scopes]]属性</p><p>函数执行上下文作用域链： fooContext.Scope = fooContext.AO + foo.[[Scopes]]</p><p>在ECMAScript规范中，有两种语法在代码执行阶段可以修改作用域链。with和catch语句。</p><p>他们都将语句中的对象添加到作用域链第一个，用于标示符查询。即他们其中任何一语句都会对作用域链产生如下修改： fooContext.Scope = withObject|catchObject + AO|VO + foo.[[Scopes]]</p><p>究其原理，with在内部使用in运算符。</p><p>对于在with语句块内的每个自由变量访问，它都在沙盒条件下计算变量。</p><p>如果条件是 true，它将从沙盒中检索变量。否则，就在全局范围内查找变量。</p><p>但是 with 语句使程序在查找变量值时，都是先在指定的对象中查找。 所以对于那些本来不是这个对象的属性的变量，查找起来会很慢，对于有性能要求的程序不适合（JavaScript 引擎会在编译阶段进行数项的性能优化。其中有些优化依赖于能够根据代码的词法进行静态分析，并预先确定所有变量和函数的定义位置，才能在执行过程中快速找到标识符。）。 with 也会导致数据泄漏(在非严格模式下，会自动在全局作用域创建一个全局变量)</p><h2 id="proxy-handler-has" tabindex="-1">Proxy/handler.has <a class="header-anchor" href="#proxy-handler-has" aria-label="Permalink to &quot;Proxy/handler.has&quot;">​</a></h2><p>Proxy/handler.has() 方法是针对 in 操作符的代理方法。</p><p>这个钩子可以拦截下面这些操作: 属性查询: foo in proxy 继承属性查询: foo in Object.create(proxy) with 检查: with(proxy) { (foo); } Reflect.has()</p><p>由于with语句内部执行是用的in运算符,所以handler.has 能够拦截到对象的属性访问。</p><h2 id="javascript-沙箱实现" tabindex="-1">JavaScript 沙箱实现 <a class="header-anchor" href="#javascript-沙箱实现" aria-label="Permalink to &quot;JavaScript 沙箱实现&quot;">​</a></h2><p>我们大致可以把沙箱的实现总体分为两个部分：</p><p>构建一个闭包环境 模拟原生浏览器对象</p><div class="language-$xslt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">$xslt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let handler = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    has(target, key) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (key in target) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return target[key]</span></span>
<span class="line"><span style="color:#e1e4e8;">      } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        throw \`无法访问属性或方法 \${key}, 详情请参考：https://www.google.com\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        // throw new Error(\`无法访问属性或方法 \${key}, 详情请参考：https://www.google.com\`)</span></span>
<span class="line"><span style="color:#e1e4e8;">        return undefined;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  let target = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console: window.console,</span></span>
<span class="line"><span style="color:#e1e4e8;">    Math: window.Math,</span></span>
<span class="line"><span style="color:#e1e4e8;">    Date: window.Date,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &quot;i am module&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  let proxy = new Proxy(target, handler)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  let moduleCode = \`</span></span>
<span class="line"><span style="color:#e1e4e8;">        function foo(){</span></span>
<span class="line"><span style="color:#e1e4e8;">            console.log(name);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            function bar(){</span></span>
<span class="line"><span style="color:#e1e4e8;">                var b = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;">                console.log(&quot;b: &quot;,b);</span></span>
<span class="line"><span style="color:#e1e4e8;">                console.log(Math.random());</span></span>
<span class="line"><span style="color:#e1e4e8;">                console.log(new Date());</span></span>
<span class="line"><span style="color:#e1e4e8;">                // console.log(document.getElementById(&#39;p&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;">                console.log(window);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            bar();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        foo()</span></span>
<span class="line"><span style="color:#e1e4e8;">    \`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  let fun = new Function(\`</span></span>
<span class="line"><span style="color:#e1e4e8;">        with(this){</span></span>
<span class="line"><span style="color:#e1e4e8;">            \${moduleCode}</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    \`)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  fun.call(proxy)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let handler = {</span></span>
<span class="line"><span style="color:#24292e;">    has(target, key) {</span></span>
<span class="line"><span style="color:#24292e;">      if (key in target) {</span></span>
<span class="line"><span style="color:#24292e;">        return target[key]</span></span>
<span class="line"><span style="color:#24292e;">      } else {</span></span>
<span class="line"><span style="color:#24292e;">        throw \`无法访问属性或方法 \${key}, 详情请参考：https://www.google.com\`</span></span>
<span class="line"><span style="color:#24292e;">        // throw new Error(\`无法访问属性或方法 \${key}, 详情请参考：https://www.google.com\`)</span></span>
<span class="line"><span style="color:#24292e;">        return undefined;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  let target = {</span></span>
<span class="line"><span style="color:#24292e;">    console: window.console,</span></span>
<span class="line"><span style="color:#24292e;">    Math: window.Math,</span></span>
<span class="line"><span style="color:#24292e;">    Date: window.Date,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    name: &quot;i am module&quot;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  let proxy = new Proxy(target, handler)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  let moduleCode = \`</span></span>
<span class="line"><span style="color:#24292e;">        function foo(){</span></span>
<span class="line"><span style="color:#24292e;">            console.log(name);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            function bar(){</span></span>
<span class="line"><span style="color:#24292e;">                var b = 10;</span></span>
<span class="line"><span style="color:#24292e;">                console.log(&quot;b: &quot;,b);</span></span>
<span class="line"><span style="color:#24292e;">                console.log(Math.random());</span></span>
<span class="line"><span style="color:#24292e;">                console.log(new Date());</span></span>
<span class="line"><span style="color:#24292e;">                // console.log(document.getElementById(&#39;p&#39;));</span></span>
<span class="line"><span style="color:#24292e;">                console.log(window);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            bar();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        foo()</span></span>
<span class="line"><span style="color:#24292e;">    \`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  let fun = new Function(\`</span></span>
<span class="line"><span style="color:#24292e;">        with(this){</span></span>
<span class="line"><span style="color:#24292e;">            \${moduleCode}</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    \`)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  fun.call(proxy)</span></span></code></pre></div>`,17)]))}const u=n(p,[["render",o]]);export{h as __pageData,u as default};
