import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const g=JSON.parse('{"title":"函数节流与函数防抖","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/7 函数节流与函数防抖技术/README.md","filePath":"frontend/7 函数节流与函数防抖技术/README.md"}'),l={name:"frontend/7 函数节流与函数防抖技术/README.md"},p=e(`<h1 id="函数节流与函数防抖" tabindex="-1">函数节流与函数防抖 <a class="header-anchor" href="#函数节流与函数防抖" aria-label="Permalink to &quot;函数节流与函数防抖&quot;">​</a></h1><h2 id="节流-throttle" tabindex="-1">节流 throttle <a class="header-anchor" href="#节流-throttle" aria-label="Permalink to &quot;节流 throttle&quot;">​</a></h2><p>节流(Throttle):函数间隔一段时间后才能再触发，避免某些函数触发频率过高，比如滚动条滚动事件触发的函数。</p><h3 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><ul><li>鼠标不断点击触发，click（单位时间内只触发一次）</li><li>监听页面滚动事件，当滚动到某一个div时给div添加动画</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    body {</span></span>
<span class="line"><span style="color:#e1e4e8;">      height: 2000px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    function throuttle(fn, interval) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      let lastTime = new Date().valueOf()</span></span>
<span class="line"><span style="color:#e1e4e8;">      return function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">        let now = new Date().valueOf()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        if (now - lastTime &gt; interval) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          lastTime = now</span></span>
<span class="line"><span style="color:#e1e4e8;">          fn()</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    window.addEventListener(&#39;scroll&#39;, throuttle(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;window scroll&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, 100))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    window.addEventListener(&#39;click&#39;, throuttle(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;window click&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, 100))</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">    body {</span></span>
<span class="line"><span style="color:#24292e;">      height: 2000px;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/style&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    function throuttle(fn, interval) {</span></span>
<span class="line"><span style="color:#24292e;">      let lastTime = new Date().valueOf()</span></span>
<span class="line"><span style="color:#24292e;">      return function () {</span></span>
<span class="line"><span style="color:#24292e;">        let now = new Date().valueOf()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        if (now - lastTime &gt; interval) {</span></span>
<span class="line"><span style="color:#24292e;">          lastTime = now</span></span>
<span class="line"><span style="color:#24292e;">          fn()</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    window.addEventListener(&#39;scroll&#39;, throuttle(function () {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;window scroll&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    }, 100))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    window.addEventListener(&#39;click&#39;, throuttle(function () {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;window click&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    }, 100))</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span></code></pre></div><h2 id="防抖debounce" tabindex="-1">防抖debounce <a class="header-anchor" href="#防抖debounce" aria-label="Permalink to &quot;防抖debounce&quot;">​</a></h2><p>防抖(Debounce):多次触发，只在最后一次触发时，执行目标函数。</p><blockquote><p>函数防抖就是，延迟一段时间再执行函数，如果这段时间内又触发了该函数，则延迟重新计算。</p></blockquote><h3 id="应用场景-1" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景-1" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><ol><li><p>通过监听某些事件完成对应的需求，比如：</p><ul><li>通过监听 scroll 事件，检测滚动位置，根据滚动位置显示返回顶部按钮</li><li>通过监听 resize 事件，对某些自适应页面调整DOM的渲染</li><li>通过监听 keyup 事件，监听文字输入并调用接口进行模糊匹配</li><li>通过监听 input 事件，用户在不断输入值时，用防抖来节约请求资源</li></ul></li><li><p>其他场景</p><ul><li>表单组件输入内容验证</li><li>防止多次点击导致表单多次提交</li><li>...</li></ul></li></ol><h3 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    body {</span></span>
<span class="line"><span style="color:#e1e4e8;">      height: 2000px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;input type=&quot;text&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;p id=&quot;tips&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    function debounce(fn, interval) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      let num = null</span></span>
<span class="line"><span style="color:#e1e4e8;">      return function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (num) clearTimeout(num)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        num = setTimeout(fn, interval)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    let input = document.getElementsByTagName(&#39;input&#39;)[0]</span></span>
<span class="line"><span style="color:#e1e4e8;">    let p = document.getElementsByTagName(&#39;p&#39;)[0]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    input.addEventListener(&#39;input&#39;, function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">      p.innerText = &#39;输入中...&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    input.addEventListener(&#39;input&#39;, debounce(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">      p.innerText = &#39;搜索中...&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, 300))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    window.addEventListener(&#39;scroll&#39;, debounce(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;window scroll stop&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, 300))</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    window.addEventListener(&#39;click&#39;, debounce(function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;last click window&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }, 300))</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">    body {</span></span>
<span class="line"><span style="color:#24292e;">      height: 2000px;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/style&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;input type=&quot;text&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;p id=&quot;tips&quot;&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    function debounce(fn, interval) {</span></span>
<span class="line"><span style="color:#24292e;">      let num = null</span></span>
<span class="line"><span style="color:#24292e;">      return function () {</span></span>
<span class="line"><span style="color:#24292e;">        if (num) clearTimeout(num)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        num = setTimeout(fn, interval)</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    let input = document.getElementsByTagName(&#39;input&#39;)[0]</span></span>
<span class="line"><span style="color:#24292e;">    let p = document.getElementsByTagName(&#39;p&#39;)[0]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    input.addEventListener(&#39;input&#39;, function () {</span></span>
<span class="line"><span style="color:#24292e;">      p.innerText = &#39;输入中...&#39;</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    input.addEventListener(&#39;input&#39;, debounce(function () {</span></span>
<span class="line"><span style="color:#24292e;">      p.innerText = &#39;搜索中...&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }, 300))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    window.addEventListener(&#39;scroll&#39;, debounce(function () {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;window scroll stop&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    }, 300))</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    window.addEventListener(&#39;click&#39;, debounce(function () {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;last click window&#39;)</span></span>
<span class="line"><span style="color:#24292e;">    }, 300))</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span></code></pre></div>`,13),o=[p];function t(c,i,r,y,d,u){return n(),a("div",null,o)}const f=s(l,[["render",t]]);export{g as __pageData,f as default};
