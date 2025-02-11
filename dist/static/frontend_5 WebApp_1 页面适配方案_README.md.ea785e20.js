import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.0f4e1e9e.js";const b=JSON.parse('{"title":"移动端适配之rem","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/5 WebApp/1 页面适配方案/README.md","filePath":"frontend/5 WebApp/1 页面适配方案/README.md"}'),l={name:"frontend/5 WebApp/1 页面适配方案/README.md"},p=a(`<h1 id="移动端适配之rem" tabindex="-1">移动端适配之rem <a class="header-anchor" href="#移动端适配之rem" aria-label="Permalink to &quot;移动端适配之rem&quot;">​</a></h1><p>rem单位是相对于<code>html</code>标签的font-size值。</p><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;html style=&#39;font-size:50px&#39;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;p style=&#39;width:1rem;height:2rem;font-size:0.32rem;&#39;&gt;p element&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;html style=&#39;font-size:50px&#39;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;p style=&#39;width:1rem;height:2rem;font-size:0.32rem;&#39;&gt;p element&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>此时p元素的宽为 <code>1*50=50px</code>，高为 <code>2*50=100px</code>，字体大小等于 <code>0.32*50=16px</code>。</p><p>从上面计算font-size的值来看，还是比较打脑阔....</p><p>为了方便写代码和方便设置想要的值，我们把html标签的font-size设置成100px。让1rem = 100px；</p><p>那么假设想要设置p标签的font-size为16px，则只需要设置font-size:0.16rem（100*0.16=16px）即可。</p><p><strong>举个例子🌰</strong></p><p>当设计稿宽度是750px时，html标签的font-size应该是100px。</p><p>那么html标签的font-size值计算公式为：(屏幕宽度/设计稿宽度) * 100</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  //参考链接 https://m.taobao.com/</span></span>
<span class="line"><span style="color:#e1e4e8;">  //浏览器默认的字体大小16px</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  /**</span></span>
<span class="line"><span style="color:#e1e4e8;">   * @baseSize 基本字体大小</span></span>
<span class="line"><span style="color:#e1e4e8;">   * @baseWidth 设计图的基本宽度</span></span>
<span class="line"><span style="color:#e1e4e8;">   * */</span></span>
<span class="line"><span style="color:#e1e4e8;">  function setRemFontSize(baseSize, baseWidth) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    baseSize = baseSize || 100</span></span>
<span class="line"><span style="color:#e1e4e8;">    baseWidth = baseWidth || 750</span></span>
<span class="line"><span style="color:#e1e4e8;">    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (clientWidth &gt;= 768) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      clientWidth = 768</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else if (clientWidth &lt;= 320) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      clientWidth = 320</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    document.getElementsByTagName(&#39;html&#39;)[0].style.fontSize = clientWidth / baseWidth * baseSize + &#39;px&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  setRemFontSize()</span></span>
<span class="line"><span style="color:#e1e4e8;">  window.addEventListener(&quot;resize&quot;, function () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    setTimeout(function () {setRemFontSize()}, 200)</span></span>
<span class="line"><span style="color:#e1e4e8;">  })</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">  //参考链接 https://m.taobao.com/</span></span>
<span class="line"><span style="color:#24292e;">  //浏览器默认的字体大小16px</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  /**</span></span>
<span class="line"><span style="color:#24292e;">   * @baseSize 基本字体大小</span></span>
<span class="line"><span style="color:#24292e;">   * @baseWidth 设计图的基本宽度</span></span>
<span class="line"><span style="color:#24292e;">   * */</span></span>
<span class="line"><span style="color:#24292e;">  function setRemFontSize(baseSize, baseWidth) {</span></span>
<span class="line"><span style="color:#24292e;">    baseSize = baseSize || 100</span></span>
<span class="line"><span style="color:#24292e;">    baseWidth = baseWidth || 750</span></span>
<span class="line"><span style="color:#24292e;">    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth</span></span>
<span class="line"><span style="color:#24292e;">    if (clientWidth &gt;= 768) {</span></span>
<span class="line"><span style="color:#24292e;">      clientWidth = 768</span></span>
<span class="line"><span style="color:#24292e;">    } else if (clientWidth &lt;= 320) {</span></span>
<span class="line"><span style="color:#24292e;">      clientWidth = 320</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    document.getElementsByTagName(&#39;html&#39;)[0].style.fontSize = clientWidth / baseWidth * baseSize + &#39;px&#39;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  setRemFontSize()</span></span>
<span class="line"><span style="color:#24292e;">  window.addEventListener(&quot;resize&quot;, function () {</span></span>
<span class="line"><span style="color:#24292e;">    setTimeout(function () {setRemFontSize()}, 200)</span></span>
<span class="line"><span style="color:#24292e;">  })</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div>`,12),t=[p];function o(c,i,r,d,y,h){return e(),n("div",null,t)}const g=s(l,[["render",o]]);export{b as __pageData,g as default};
