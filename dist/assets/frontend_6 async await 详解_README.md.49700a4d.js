import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.6ae5a3d9.js";const d=JSON.parse('{"title":"为什么会有async await 语法？","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/6 async await 详解/README.md","filePath":"frontend/6 async await 详解/README.md"}'),l={name:"frontend/6 async await 详解/README.md"},p=a(`<h1 id="为什么会有async-await-语法" tabindex="-1">为什么会有async await 语法？ <a class="header-anchor" href="#为什么会有async-await-语法" aria-label="Permalink to &quot;为什么会有async await 语法？&quot;">​</a></h1><h2 id="es6-promise" tabindex="-1">ES6 Promise <a class="header-anchor" href="#es6-promise" aria-label="Permalink to &quot;ES6 Promise&quot;">​</a></h2><h2 id="es6-生成器-generator" tabindex="-1">ES6 生成器(Generator) <a class="header-anchor" href="#es6-生成器-generator" aria-label="Permalink to &quot;ES6 生成器(Generator)&quot;">​</a></h2><h3 id="生成器函、生成器" tabindex="-1">生成器函、生成器 <a class="header-anchor" href="#生成器函、生成器" aria-label="Permalink to &quot;生成器函、生成器&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function* generator(arr) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    yield arr[0]</span></span>
<span class="line"><span style="color:#e1e4e8;">    yield arr[1]</span></span>
<span class="line"><span style="color:#e1e4e8;">    yield arr[2]</span></span>
<span class="line"><span style="color:#e1e4e8;">    return &quot;success&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">var gen = generator([1, 2, 3])</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(gen)</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(gen.next())</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(gen.next())</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(gen.next())</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(gen.next())</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function* generator(arr) {</span></span>
<span class="line"><span style="color:#24292e;">    yield arr[0]</span></span>
<span class="line"><span style="color:#24292e;">    yield arr[1]</span></span>
<span class="line"><span style="color:#24292e;">    yield arr[2]</span></span>
<span class="line"><span style="color:#24292e;">    return &quot;success&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">var gen = generator([1, 2, 3])</span></span>
<span class="line"><span style="color:#24292e;">console.log(gen)</span></span>
<span class="line"><span style="color:#24292e;">console.log(gen.next())</span></span>
<span class="line"><span style="color:#24292e;">console.log(gen.next())</span></span>
<span class="line"><span style="color:#24292e;">console.log(gen.next())</span></span>
<span class="line"><span style="color:#24292e;">console.log(gen.next())</span></span></code></pre></div><p>如上代码如果yield返回的是值、或对象调用看起来还OK。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">  function* generator() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    var res = yield new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        resolve(1)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }, 1000)</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">    res = yield new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        resolve(res + 2)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }, 1000)</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">    res = yield new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        resolve(res + 3)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }, 1000)</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        resolve(&quot;success&quot; + res)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }, 1000)</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  /*var gen = generator()</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(&quot;gen:&quot;, gen)</span></span>
<span class="line"><span style="color:#e1e4e8;">  var value1 = gen.next()</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(value1)</span></span>
<span class="line"><span style="color:#e1e4e8;">  value1.value.then((value) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(&#39;Promise1 value:&#39;, value)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    gen.next(value).value.then((value) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;Promise2 value:&#39;, value)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      gen.next(value).value.then((value) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(&#39;Promise3 value:&#39;, value)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        gen.next(value).value.then((value) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">          console.log(&#39;Promise4 value:&#39;, value)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;">      })</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">  })*/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">  function* generator() {</span></span>
<span class="line"><span style="color:#24292e;">    var res = yield new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        resolve(1)</span></span>
<span class="line"><span style="color:#24292e;">      }, 1000)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">    res = yield new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        resolve(res + 2)</span></span>
<span class="line"><span style="color:#24292e;">      }, 1000)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">    res = yield new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        resolve(res + 3)</span></span>
<span class="line"><span style="color:#24292e;">      }, 1000)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        resolve(&quot;success&quot; + res)</span></span>
<span class="line"><span style="color:#24292e;">      }, 1000)</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  /*var gen = generator()</span></span>
<span class="line"><span style="color:#24292e;">  console.log(&quot;gen:&quot;, gen)</span></span>
<span class="line"><span style="color:#24292e;">  var value1 = gen.next()</span></span>
<span class="line"><span style="color:#24292e;">  console.log(value1)</span></span>
<span class="line"><span style="color:#24292e;">  value1.value.then((value) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(&#39;Promise1 value:&#39;, value)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    gen.next(value).value.then((value) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;Promise2 value:&#39;, value)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      gen.next(value).value.then((value) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(&#39;Promise3 value:&#39;, value)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        gen.next(value).value.then((value) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">          console.log(&#39;Promise4 value:&#39;, value)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;">      })</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">  })*/</span></span></code></pre></div><p>如上代码如果yield返回的是Promise 就会出现回调地狱的问题。</p><h3 id="es7-async-await" tabindex="-1">ES7 async await <a class="header-anchor" href="#es7-async-await" aria-label="Permalink to &quot;ES7 async await&quot;">​</a></h3><p>async await 语法的出现就是为了解决这种回调地狱的问题。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><ul><li>首先 async/await 是一种用于处理异步操作的语法糖，在ES2017中被引入，用于更简洁地编写基于Promise的链式回调代码。</li><li>使用 async/await 主要是避免了传统的回调函数或 Promise 链的嵌套。</li></ul><h4 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h4><p><a href="https://juejin.cn/post/7281535380590559243?searchId=202310310948531CA24C843535DA63EB62" target="_blank" rel="noreferrer">https://juejin.cn/post/7281535380590559243?searchId=202310310948531CA24C843535DA63EB62</a></p>`,14),o=[p];function c(t,r,i,y,u,g){return n(),e("div",null,o)}const h=s(l,[["render",c]]);export{d as __pageData,h as default};
