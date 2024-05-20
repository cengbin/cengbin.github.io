import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.0f4e1e9e.js";const u=JSON.parse('{"title":"浏览器的策略","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/40 浏览器的策略/README.md","filePath":"frontend/40 浏览器的策略/README.md"}'),l={name:"frontend/40 浏览器的策略/README.md"},t=n(`<h1 id="浏览器的策略" tabindex="-1">浏览器的策略 <a class="header-anchor" href="#浏览器的策略" aria-label="Permalink to &quot;浏览器的策略&quot;">​</a></h1><h2 id="_1-浏览器的同源策略" tabindex="-1">1. 浏览器的同源策略 <a class="header-anchor" href="#_1-浏览器的同源策略" aria-label="Permalink to &quot;1. 浏览器的同源策略&quot;">​</a></h2><h3 id="_1-1-什么是同源策略" tabindex="-1">1.1 什么是同源策略 <a class="header-anchor" href="#_1-1-什么是同源策略" aria-label="Permalink to &quot;1.1 什么是同源策略&quot;">​</a></h3><h3 id="_1-2-解决跨域" tabindex="-1">1.2 解决跨域 <a class="header-anchor" href="#_1-2-解决跨域" aria-label="Permalink to &quot;1.2 解决跨域&quot;">​</a></h3><h3 id="_1-2-1前端解决" tabindex="-1">1.2.1前端解决 <a class="header-anchor" href="#_1-2-1前端解决" aria-label="Permalink to &quot;1.2.1前端解决&quot;">​</a></h3><p>通过没有同源策略限制的<code>&lt;script/&gt;</code>、<code>&lt;img/&gt;</code>等等标签发起一个请求</p><h4 id="jsonp" tabindex="-1">JSONP <a class="header-anchor" href="#jsonp" aria-label="Permalink to &quot;JSONP&quot;">​</a></h4><p>“JSON with Padding”(JSONP)是一种欺骗web浏览器的方法，它使用<code>&lt;script&gt;</code>标签来执行请求，该标签使用SRC属性来发出特殊的API请求。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function jsonp(req) {</span></span>
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
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h3 id="_1-2-2-后端解决" tabindex="-1">1.2.2 后端解决 <a class="header-anchor" href="#_1-2-2-后端解决" aria-label="Permalink to &quot;1.2.2 后端解决&quot;">​</a></h3><p>跨源资源共享（CORS，或通俗地译为跨域资源共享）是一种基于 HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其他源（域、协议或端口），使得浏览器允许这些源访问加载自己的资源。跨源资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的“预检”请求。在预检中，浏览器发送的头中标示有 HTTP 方法和真实请求中会用到的头。</p><p>服务端返回的 Access-Control-Allow-Origin 标头的 Access-Control-Allow-Origin: * 值表明，该资源可以被任意外源访问。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS</a></p><h3 id="_1-2-3-服务器解决" tabindex="-1">1.2.3 服务器解决 <a class="header-anchor" href="#_1-2-3-服务器解决" aria-label="Permalink to &quot;1.2.3 服务器解决&quot;">​</a></h3><p>通过代理解决（Nginx、Vite、Webpack）</p><h4 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">location ^~/vmss/ {</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_pass http://vms.cn-huadong-1.xf-yun.com/;</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_set_header Host $proxy_host;</span></span>
<span class="line"><span style="color:#e1e4e8;">    proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">location ^~/vmss/ {</span></span>
<span class="line"><span style="color:#24292e;">    proxy_pass http://vms.cn-huadong-1.xf-yun.com/;</span></span>
<span class="line"><span style="color:#24292e;">    proxy_set_header Host $proxy_host;</span></span>
<span class="line"><span style="color:#24292e;">    proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="vite" tabindex="-1">Vite <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;Vite&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">server: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		open: &#39;/index.html&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		hmr: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">		host: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">		port: 8891,</span></span>
<span class="line"><span style="color:#e1e4e8;">		https: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">		cors: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">		proxy: {</span></span>
<span class="line"><span style="color:#e1e4e8;">			&#39;/newapi&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">				target: &#39;https://abc.com&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">				changeOrigin: true</span></span>
<span class="line"><span style="color:#e1e4e8;">			},</span></span>
<span class="line"><span style="color:#e1e4e8;">			&#39;/individuation&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">				target: &#39;https://def.com&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">				changeOrigin: true</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">server: {</span></span>
<span class="line"><span style="color:#24292e;">		open: &#39;/index.html&#39;,</span></span>
<span class="line"><span style="color:#24292e;">		hmr: false,</span></span>
<span class="line"><span style="color:#24292e;">		host: true,</span></span>
<span class="line"><span style="color:#24292e;">		port: 8891,</span></span>
<span class="line"><span style="color:#24292e;">		https: false,</span></span>
<span class="line"><span style="color:#24292e;">		cors: true,</span></span>
<span class="line"><span style="color:#24292e;">		proxy: {</span></span>
<span class="line"><span style="color:#24292e;">			&#39;/newapi&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">				target: &#39;https://abc.com&#39;,</span></span>
<span class="line"><span style="color:#24292e;">				changeOrigin: true</span></span>
<span class="line"><span style="color:#24292e;">			},</span></span>
<span class="line"><span style="color:#24292e;">			&#39;/individuation&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">				target: &#39;https://def.com&#39;,</span></span>
<span class="line"><span style="color:#24292e;">				changeOrigin: true</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span></code></pre></div><h2 id="_2-chrome将不再允许https-页面加载http资源" tabindex="-1">2. Chrome将不再允许<a href="https://xn--HTTP-p29fz39l856b6ydwnwtqc" target="_blank" rel="noreferrer">https://页面加载HTTP资源</a> <a class="header-anchor" href="#_2-chrome将不再允许https-页面加载http资源" aria-label="Permalink to &quot;2. Chrome将不再允许https://页面加载HTTP资源&quot;">​</a></h2><p>Chrome 安全小组近日在一篇博客文章中表示，<a href="https://security.googleblog.com/2019/10/no-more-mixed-messages-about-https_3.html" target="_blank" rel="noreferrer">计划使 https:// 页面不再加载 HTTP 子资源</a>。</p><p>从官方发布的消息大致意思是：Chrome计划使 https:// 页面不再加载 HTTP 子资源。从2020 年 1 月，Chrome 80将会在<a href="https://xn--HTTP-fb5fl9p93bbu4k974bz2eoyrj6c" target="_blank" rel="noreferrer">https://页面里的不再加载HTTP</a> 子资源，逐步阻止所有HTTP页面相关的混合内容。Chrome 80及以后更高的版本会将所有https:// 页面里的混合音频和视频HTTP子资源自动升级为HTTPS，如果无法通过 HTTPS 加载，则将自动被阻止。</p><p>文章参考：<br><a href="https://blog.csdn.net/mzl87/article/details/102136892" target="_blank" rel="noreferrer">https://blog.csdn.net/mzl87/article/details/102136892</a><br><a href="https://lusongsong.com/blog/post/12288.html" target="_blank" rel="noreferrer">https://lusongsong.com/blog/post/12288.html</a></p><h2 id="_3-chrome-cookie-samesite跨站限制" tabindex="-1">3. Chrome Cookie SameSite跨站限制 <a class="header-anchor" href="#_3-chrome-cookie-samesite跨站限制" aria-label="Permalink to &quot;3. Chrome Cookie SameSite跨站限制&quot;">​</a></h2><p><a href="https://juejin.cn/post/7073447264756170765" target="_blank" rel="noreferrer">完美解决Chrome Cookie SameSite跨站限制</a></p>`,25),p=[t];function o(r,c,i,h,d,y){return a(),e("div",null,p)}const g=s(l,[["render",o]]);export{u as __pageData,g as default};
