import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.0f4e1e9e.js";const _=JSON.parse('{"title":"同源策略与跨域","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/16 同源策略与跨域/README.md","filePath":"frontend/16 同源策略与跨域/README.md"}'),l={name:"frontend/16 同源策略与跨域/README.md"},p=n(`<h1 id="同源策略与跨域" tabindex="-1">同源策略与跨域 <a class="header-anchor" href="#同源策略与跨域" aria-label="Permalink to &quot;同源策略与跨域&quot;">​</a></h1><h2 id="_1、简介" tabindex="-1">1、简介 <a class="header-anchor" href="#_1、简介" aria-label="Permalink to &quot;1、简介&quot;">​</a></h2><h3 id="_1-1-什么是同源策略" tabindex="-1">1.1 什么是同源策略 <a class="header-anchor" href="#_1-1-什么是同源策略" aria-label="Permalink to &quot;1.1 什么是同源策略&quot;">​</a></h3><h2 id="_2、解决方案" tabindex="-1">2、解决方案 <a class="header-anchor" href="#_2、解决方案" aria-label="Permalink to &quot;2、解决方案&quot;">​</a></h2><h3 id="前端解决" tabindex="-1">前端解决： <a class="header-anchor" href="#前端解决" aria-label="Permalink to &quot;前端解决：&quot;">​</a></h3><p>通过没有同源策略限制的<code>&lt;script/&gt;</code>、<code>&lt;img/&gt;</code>等等标签发起一个请求</p><h4 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-label="Permalink to &quot;JSONP&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function jsonp(req) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    var script = document.createElement(&#39;script&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    var url = req.url + &#39;?callback=&#39; + req.callback.name;</span></span>
<span class="line"><span style="color:#e1e4e8;">    script.src = url;</span></span>
<span class="line"><span style="color:#e1e4e8;">    document.getElementsByTagName(&#39;head&#39;)[0].appendChild(script);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function hello(res){</span></span>
<span class="line"><span style="color:#e1e4e8;">    alert(&#39;hello &#39; + res.data);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">jsonp({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url : &#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    callback : hello </span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function jsonp(req) {</span></span>
<span class="line"><span style="color:#24292e;">    var script = document.createElement(&#39;script&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    var url = req.url + &#39;?callback=&#39; + req.callback.name;</span></span>
<span class="line"><span style="color:#24292e;">    script.src = url;</span></span>
<span class="line"><span style="color:#24292e;">    document.getElementsByTagName(&#39;head&#39;)[0].appendChild(script);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function hello(res){</span></span>
<span class="line"><span style="color:#24292e;">    alert(&#39;hello &#39; + res.data);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">jsonp({</span></span>
<span class="line"><span style="color:#24292e;">    url : &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    callback : hello </span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h3 id="后端解决" tabindex="-1">后端解决： <a class="header-anchor" href="#后端解决" aria-label="Permalink to &quot;后端解决：&quot;">​</a></h3><p>CORS</p><h3 id="服务器解决" tabindex="-1">服务器解决： <a class="header-anchor" href="#服务器解决" aria-label="Permalink to &quot;服务器解决：&quot;">​</a></h3><p>通过代理解决（Webpack、Vite、Nginx）</p>`,12),o=[p];function c(t,r,i,d,h,u){return s(),e("div",null,o)}const m=a(l,[["render",c]]);export{_ as __pageData,m as default};
