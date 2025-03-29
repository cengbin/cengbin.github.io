import{_ as n,o as e,c as a,O as l}from"./chunks/framework.d9e2f5d0.js";const m=JSON.parse('{"title":"移动端适配之rem","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/6 C端应用开发/2 移动端页面适配方案/README.md","filePath":"frontend/6 C端应用开发/2 移动端页面适配方案/README.md"}'),p={name:"frontend/6 C端应用开发/2 移动端页面适配方案/README.md"};function t(o,s,i,c,r,y){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="移动端适配之rem" tabindex="-1">移动端适配之rem <a class="header-anchor" href="#移动端适配之rem" aria-label="Permalink to &quot;移动端适配之rem&quot;">​</a></h1><p>rem单位是相对于<code>html</code>标签的font-size值。</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;html style=&#39;font-size:50px&#39;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;p style=&#39;width:1rem;height:2rem;font-size:0.32rem;&#39;&gt;p element&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;html style=&#39;font-size:50px&#39;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;p style=&#39;width:1rem;height:2rem;font-size:0.32rem;&#39;&gt;p element&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>此时p元素的宽为 <code>1*50=50px</code>，高为 <code>2*50=100px</code>，字体大小等于 <code>0.32*50=16px</code>。</p><p>从上面计算font-size的值来看，还是比较打脑阔....</p><p>为了方便写代码和方便设置想要的值，我们把html标签的font-size设置成100px。让1rem = 100px；</p><p>那么假设想要设置p标签的font-size为16px，则只需要设置font-size:0.16rem（100*0.16=16px）即可。</p><p><strong>举个例子🌰</strong></p><p>当设计稿宽度是750px时，html标签的font-size应该是100px。</p><p>那么html标签的font-size值计算公式为：(屏幕宽度/设计稿宽度) * 100</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    function throttle(fn, interval) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        let timer = null;</span></span>
<span class="line"><span style="color:#e1e4e8;">        let lastTime = 0;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        return function (...args) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            const now = Date.now();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">            if (lastTime &amp;&amp; now &lt; lastTime + interval) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                if (timer) {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    window.clearTimeout(timer);</span></span>
<span class="line"><span style="color:#e1e4e8;">                }</span></span>
<span class="line"><span style="color:#e1e4e8;">                timer = window.setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">                    lastTime = now;</span></span>
<span class="line"><span style="color:#e1e4e8;">                    fn.apply(this, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">                }, interval);</span></span>
<span class="line"><span style="color:#e1e4e8;">            } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">                lastTime = now;</span></span>
<span class="line"><span style="color:#e1e4e8;">                fn.apply(this, args);</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">        };</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    function setHtmlFontSize(baseSize, baseWidth) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        baseSize = baseSize || 100</span></span>
<span class="line"><span style="color:#e1e4e8;">        baseWidth = baseWidth || 750</span></span>
<span class="line"><span style="color:#e1e4e8;">        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth</span></span>
<span class="line"><span style="color:#e1e4e8;">        var fontSize = 16;</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (clientWidth &gt;= 768) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            window.isMobile = false</span></span>
<span class="line"><span style="color:#e1e4e8;">            window.isPc = true</span></span>
<span class="line"><span style="color:#e1e4e8;">            window.client = &#39;pc&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else if (clientWidth &lt;= 320) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            clientWidth = 320</span></span>
<span class="line"><span style="color:#e1e4e8;">            window.isMobile = true</span></span>
<span class="line"><span style="color:#e1e4e8;">            window.isPc = false</span></span>
<span class="line"><span style="color:#e1e4e8;">            window.client = &#39;mobile&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            fontSize = clientWidth / baseWidth * baseSize</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">            window.isMobile = true</span></span>
<span class="line"><span style="color:#e1e4e8;">            window.isPc = false</span></span>
<span class="line"><span style="color:#e1e4e8;">            window.client = &#39;mobile&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">            fontSize = clientWidth / baseWidth * baseSize</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        document.getElementsByTagName(&#39;html&#39;)[0].style.fontSize = fontSize + &#39;px&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    setHtmlFontSize()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    var throttleSetRemFontSize = throttle(() =&gt; setHtmlFontSize(), 200)</span></span>
<span class="line"><span style="color:#e1e4e8;">    window.addEventListener(&quot;resize&quot;, throttleSetRemFontSize)</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    function throttle(fn, interval) {</span></span>
<span class="line"><span style="color:#24292e;">        let timer = null;</span></span>
<span class="line"><span style="color:#24292e;">        let lastTime = 0;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        return function (...args) {</span></span>
<span class="line"><span style="color:#24292e;">            const now = Date.now();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">            if (lastTime &amp;&amp; now &lt; lastTime + interval) {</span></span>
<span class="line"><span style="color:#24292e;">                if (timer) {</span></span>
<span class="line"><span style="color:#24292e;">                    window.clearTimeout(timer);</span></span>
<span class="line"><span style="color:#24292e;">                }</span></span>
<span class="line"><span style="color:#24292e;">                timer = window.setTimeout(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">                    lastTime = now;</span></span>
<span class="line"><span style="color:#24292e;">                    fn.apply(this, args);</span></span>
<span class="line"><span style="color:#24292e;">                }, interval);</span></span>
<span class="line"><span style="color:#24292e;">            } else {</span></span>
<span class="line"><span style="color:#24292e;">                lastTime = now;</span></span>
<span class="line"><span style="color:#24292e;">                fn.apply(this, args);</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">        };</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    function setHtmlFontSize(baseSize, baseWidth) {</span></span>
<span class="line"><span style="color:#24292e;">        baseSize = baseSize || 100</span></span>
<span class="line"><span style="color:#24292e;">        baseWidth = baseWidth || 750</span></span>
<span class="line"><span style="color:#24292e;">        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth</span></span>
<span class="line"><span style="color:#24292e;">        var fontSize = 16;</span></span>
<span class="line"><span style="color:#24292e;">        if (clientWidth &gt;= 768) {</span></span>
<span class="line"><span style="color:#24292e;">            window.isMobile = false</span></span>
<span class="line"><span style="color:#24292e;">            window.isPc = true</span></span>
<span class="line"><span style="color:#24292e;">            window.client = &#39;pc&#39;</span></span>
<span class="line"><span style="color:#24292e;">        } else if (clientWidth &lt;= 320) {</span></span>
<span class="line"><span style="color:#24292e;">            clientWidth = 320</span></span>
<span class="line"><span style="color:#24292e;">            window.isMobile = true</span></span>
<span class="line"><span style="color:#24292e;">            window.isPc = false</span></span>
<span class="line"><span style="color:#24292e;">            window.client = &#39;mobile&#39;</span></span>
<span class="line"><span style="color:#24292e;">            fontSize = clientWidth / baseWidth * baseSize</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">            window.isMobile = true</span></span>
<span class="line"><span style="color:#24292e;">            window.isPc = false</span></span>
<span class="line"><span style="color:#24292e;">            window.client = &#39;mobile&#39;</span></span>
<span class="line"><span style="color:#24292e;">            fontSize = clientWidth / baseWidth * baseSize</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        document.getElementsByTagName(&#39;html&#39;)[0].style.fontSize = fontSize + &#39;px&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    setHtmlFontSize()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    var throttleSetRemFontSize = throttle(() =&gt; setHtmlFontSize(), 200)</span></span>
<span class="line"><span style="color:#24292e;">    window.addEventListener(&quot;resize&quot;, throttleSetRemFontSize)</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><h3 id="详细解释viewport-meta标签的各个属性" tabindex="-1">详细解释viewport meta标签的各个属性： <a class="header-anchor" href="#详细解释viewport-meta标签的各个属性" aria-label="Permalink to &quot;详细解释viewport meta标签的各个属性：&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>这个meta标签用于控制移动设备上网页的显示，让我逐个解析其属性：</p><ol><li>width=device-width <ul><li>设置视口宽度等于设备的屏幕宽度</li><li>确保网页的宽度与设备屏幕宽度匹配</li><li>防止移动设备自动缩放页面以适应更宽的视口</li><li>例如：iPhone 12的设备宽度是390px，视口宽度就会被设置为390px</li></ul></li><li>initial-scale=1.0 <ul><li>设置页面的初始缩放比例为1.0（100%）</li><li>确保页面以1:1的比例显示，不会自动放大或缩小</li><li>防止某些移动浏览器在加载页面时自动调整缩放比例</li><li>保证页面内容清晰可读</li></ul></li><li>maximum-scale=1.0 <ul><li>限制用户能够放大页面的最大比例为1.0</li><li>防止用户通过手势（如双指缩放）放大页面</li><li>有助于维持页面的设计布局</li><li>特别适用于需要精确控制显示效果的响应式设计</li></ul></li><li>user-scalable=no <ul><li>完全禁用用户手动缩放页面的功能</li><li>禁止双指缩放、双击缩放等操作</li><li>确保页面始终保持设定的显示比例</li><li>防止用户意外缩放导致的布局问题</li></ul></li></ol><p>使用场景和注意事项：</p><ol><li>适用场景： <ul><li>响应式网站设计（RWD）</li><li>移动端Web应用（WebApp）</li><li>需要精确控制显示效果的页面</li><li>防止表单输入时自动放大的场景</li></ul></li><li>优点： <ul><li>提供更好的移动端浏览体验</li><li>防止布局被意外破坏</li><li>确保内容清晰可读</li><li>控制页面在不同设备上的一致性</li></ul></li><li>潜在问题： <ul><li>可能影响可访问性（accessibility）</li><li>对视力不好的用户不够友好</li><li>某些情况下用户可能需要放大查看细节</li></ul></li><li>最佳实践： <ul><li>确保文字大小合适，便于阅读</li><li>提供足够的点击区域</li><li>考虑使用响应式设计而不是完全禁用缩放</li><li>在必要时允许用户控制缩放</li></ul></li></ol><p>在你的项目中，如果遇到iPad上的滚动问题，这个meta标签可以帮助：</p><ol><li>防止iOS设备自动调整页面大小</li><li>确保页面宽度正确匹配设备宽度</li><li>避免因为视口缩放导致的横向滚动</li></ol><p>建议将这个meta标签放在HTML文件的head部分，确保它能在页面加载时立即生效。</p>`,21)]))}const h=n(p,[["render",t]]);export{m as __pageData,h as default};
