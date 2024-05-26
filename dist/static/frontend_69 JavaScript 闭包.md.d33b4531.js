import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const y=JSON.parse('{"title":"深入理解 JavaScript 闭包","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/69 JavaScript 闭包.md","filePath":"frontend/69 JavaScript 闭包.md"}'),p={name:"frontend/69 JavaScript 闭包.md"},l=e(`<h1 id="深入理解-javascript-闭包" tabindex="-1">深入理解 JavaScript 闭包 <a class="header-anchor" href="#深入理解-javascript-闭包" aria-label="Permalink to &quot;深入理解 JavaScript 闭包&quot;">​</a></h1><h2 id="_1-前言" tabindex="-1">1. 前言 <a class="header-anchor" href="#_1-前言" aria-label="Permalink to &quot;1. 前言&quot;">​</a></h2><p>面试的时候常常会有面试官会问：谈谈你对闭包的理解？</p><p>首先回答问题要有清晰的思路和逻辑顺序，如：</p><ol><li>描述问题产生的背景。</li><li>如何解决的问题。</li><li>有什么结果。</li></ol><p>比如回答对闭包的理解可以按：</p><ol><li>JavaScript引入闭包的背景？</li><li>闭包解决了什么问题，怎么解决的？</li><li>闭包的优缺点？</li></ol><p>我觉得按这样的思路回答问题，比按<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures" target="_blank" rel="noreferrer">MDN</a>上的解释说一遍回答“闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合”要好。</p><h2 id="_2-闭包引入的背景" tabindex="-1">2. 闭包引入的背景？ <a class="header-anchor" href="#_2-闭包引入的背景" aria-label="Permalink to &quot;2. 闭包引入的背景？&quot;">​</a></h2><p>在<a href="http://en.wikipedia.org/wiki/Stack-oriented_programming_language" target="_blank" rel="noreferrer">面向堆栈的编程语言</a>中，函数的局部变量都是保存在栈上的，每当函数激活的时候，这些变量和函数参数都会压入到该堆栈上。</p><p>当函数返回的时候，这些参数又会从栈中移除。这种模型对将函数作为函数式值使用的时候有很大的限制（比方说，作为返回值从父函数中返回）。绝大部分情况下，问题会出现在当函数有自由变量的时候。</p><p>在ECMAScript中，函数是可以封装在父函数中的，并<strong>可以使用父函数上下文的变量</strong>。这个特性会引发Funarg问题。</p><h3 id="funarg-问题" tabindex="-1">Funarg 问题 <a class="header-anchor" href="#funarg-问题" aria-label="Permalink to &quot;Funarg 问题&quot;">​</a></h3><p>自由变量是指<strong>在函数中使用</strong>的，但既<strong>不是函数参数</strong>也<strong>不是函数的局部变量</strong>的变量</p><p>示例1：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">  function foo() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    var x = 10</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    return function bar() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(x)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  var returnedFunction = foo()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(returnedFunction.prototype)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  var x = 20</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  returnedFunction()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">  function foo() {</span></span>
<span class="line"><span style="color:#24292e;">    var x = 10</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    return function bar() {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(x)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  var returnedFunction = foo()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  console.log(returnedFunction.prototype)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  var x = 20</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  returnedFunction()</span></span></code></pre></div><p>上述例子中，对于bar函数来说，x就属于自由变量。</p><p>示例2：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">  var x = 10;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  function foo() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(x)</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  (function (funArg) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    var x = 20</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    funArg()</span></span>
<span class="line"><span style="color:#e1e4e8;">  })(foo)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">  var x = 10;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  function foo() {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(x)</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  (function (funArg) {</span></span>
<span class="line"><span style="color:#24292e;">    var x = 20</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    funArg()</span></span>
<span class="line"><span style="color:#24292e;">  })(foo)</span></span></code></pre></div><p>两类funarg问题 ：</p><ol><li>取决于是否将<strong>函数以返回值返回</strong>（第一类问题，示例1）</li><li>以及是否将<strong>函数当函数参数使用</strong>（第二类问题，示例2）。</li></ol><p>思考一下:</p><ol><li>当内层函数返回了或者通过别的暴露出去了，那么外层函数销毁，内层函数却没有销毁，这时候怎么处理作用域，父作用域销不销毁？</li><li>在执行returnedFunction函数与funArg函数的时候如何找到x变量？</li></ol><p>为了解决上述问题，JavaScript 就设计了闭包的机制。</p><h2 id="_3-闭包如何设计的" tabindex="-1">3. 闭包如何设计的？ <a class="header-anchor" href="#_3-闭包如何设计的" aria-label="Permalink to &quot;3. 闭包如何设计的？&quot;">​</a></h2><p><strong>再次强调下：ECMAScript 只使用<a href="https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping" target="_blank" rel="noreferrer">静态（词法）作用域</a> 。</strong> (而诸如Perl这样的语言，既可以使用静态作用域也可以使用动态作用域进行变量声明）。</p><p>技术上说，创建该函数的父级上下文的数据是保存在该函数的内部属性 [[Scope]]中的。</p><p>但是 JS 引擎怎么知道它要用到哪些外部引用呢，需要做 AST 扫描，很多 JS 引擎会做 Lazy Parsing，这时候去 parse 函数，正好也能知道它用到了哪些外部引用，然后把这些外部用打包成 Closure 闭包，加到 [[scopes]] 中。</p><p>如下图：firstClosure函数在创建完成之后，函数内部引用的自由变量就已经打包成Closure闭包，挂到函数的[[Scopes]]上了。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa894fd8a8984faf98c003f7f7c992b4~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1398&amp;h=1318&amp;s=589839&amp;e=png&amp;b=ffffff" alt="1.png"></p><p>调用 firstClosure 函数的时候，JS 引擎 会取出 [[Scopes]] 中的打包的 Closure + Global 链，设置成新的作用域链， 这就是函数用到的所有外部环境了，有了外部环境，自然就可以运行了。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/199bd302638e4ece84d3c275cc20e10e~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1376&amp;h=1042&amp;s=208806&amp;e=jpg&amp;b=fefdfd" alt="2.jpg"></p><h2 id="_4-闭包的优缺点" tabindex="-1">4. 闭包的优缺点？ <a class="header-anchor" href="#_4-闭包的优缺点" aria-label="Permalink to &quot;4. 闭包的优缺点？&quot;">​</a></h2><h3 id="优点" tabindex="-1">优点： <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点：&quot;">​</a></h3><ul><li>命名空间污染：模块要用多个变量，我们希望变量不影响全局，全局也不影响我们的变量。</li><li>模拟私有属性</li><li>有状态的函数</li></ul><h3 id="缺点" tabindex="-1">缺点： <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点：&quot;">​</a></h3><ul><li>如果一个变量被闭包对象 Closure 引用，无法被释放回收。如果一个很大的对象被闭包对象 Closure 引用，本来函数调用结束就能销毁，但是现在引用却被通过闭包保存到了堆里，而且还一直用不到，那这块堆内存就一直没法使用，严重到一定程度就算是内存泄漏了。</li><li>闭包函数又在多个地方被引用，导致数据引用复杂，容易发生内存泄漏问题。</li></ul><p>至此通过清晰的回答，面试官会对你肯定刮目相看。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function foo(){</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>函数在创建阶段会给foo函数创建[[Scopes]]属性</p><p>函数执行上下文作用域链： fooContext.Scope = fooContext.AO + foo.[[Scopes]]</p>`,41),o=[l];function c(t,r,i,u,d,f){return n(),a("div",null,o)}const g=s(p,[["render",c]]);export{y as __pageData,g as default};
