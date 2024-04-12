import{_ as e,o as s,c as a,Q as n}from"./chunks/framework.0f4e1e9e.js";const y=JSON.parse('{"title":"Web 前后端通信","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/55 前后端通信方案/README.md","filePath":"frontend/55 前后端通信方案/README.md"}'),l={name:"frontend/55 前后端通信方案/README.md"},o=n(`<h1 id="web-前后端通信" tabindex="-1">Web 前后端通信 <a class="header-anchor" href="#web-前后端通信" aria-label="Permalink to &quot;Web 前后端通信&quot;">​</a></h1><h2 id="_1-对-1-响应" tabindex="-1">1 对 1 响应 <a class="header-anchor" href="#_1-对-1-响应" aria-label="Permalink to &quot;1 对 1 响应&quot;">​</a></h2><p>一对一响应是指：网页发送一次消息给服务端，服务端只需要返回一次数据给网页。</p><h5 id="常见应用场景-数据库-增-删-改-查" tabindex="-1">常见应用场景：数据库 增 删 改 查 <a class="header-anchor" href="#常见应用场景-数据库-增-删-改-查" aria-label="Permalink to &quot;常见应用场景：数据库 增 删 改 查&quot;">​</a></h5><h5 id="技术-ajax-async-javascript-and-xml-ajax" tabindex="-1">技术：Ajax（Async JavaScript and XML, AJAX) <a class="header-anchor" href="#技术-ajax-async-javascript-and-xml-ajax" aria-label="Permalink to &quot;技术：Ajax（Async JavaScript and XML, AJAX)&quot;">​</a></h5><h5 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h5><h2 id="_1-对-多-响应" tabindex="-1">1 对 多 响应 <a class="header-anchor" href="#_1-对-多-响应" aria-label="Permalink to &quot;1 对 多 响应&quot;">​</a></h2><p>一对多响应是指：客户端发送一次问题，服务端多次给网页推送数据。1 N 流式输出。</p><h5 id="常见应用场景-chatgpt的逐句回答-流式返回功能" tabindex="-1">常见应用场景：ChatGPT的逐句回答,流式返回功能 <a class="header-anchor" href="#常见应用场景-chatgpt的逐句回答-流式返回功能" aria-label="Permalink to &quot;常见应用场景：ChatGPT的逐句回答,流式返回功能&quot;">​</a></h5><h5 id="技术-sse" tabindex="-1">技术：SSE <a class="header-anchor" href="#技术-sse" aria-label="Permalink to &quot;技术：SSE&quot;">​</a></h5><p>Server-sent events（SSE）是一种用于实现服务器到客户端的单向通信的协议。使用SSE，服务器可以向客户端推送实时数据，而无需客户端发出请求。</p><p>SSE建立在HTTP协议上，使用基于文本的数据格式（通常是JSON）进行通信。客户端通过创建一个EventSource对象来与服务器建立连接，然后可以监听服务器发送的事件。服务器端可以随时将事件推送给客户端，客户端通过监听事件来接收这些数据。</p><p>参考：<a href="https://juejin.cn/post/7207798726382665785?searchId=20230912164949D11CFAFC832BECBE4592" target="_blank" rel="noreferrer">https://juejin.cn/post/7207798726382665785?searchId=20230912164949D11CFAFC832BECBE4592</a></p><h5 id="示例代码-1" tabindex="-1">示例代码： <a class="header-anchor" href="#示例代码-1" aria-label="Permalink to &quot;示例代码：&quot;">​</a></h5><h2 id="多-对-多-响应" tabindex="-1">多 对 多 响应 <a class="header-anchor" href="#多-对-多-响应" aria-label="Permalink to &quot;多 对 多 响应&quot;">​</a></h2><p>多对多响应是指：网页可能多次消息给服务端，服务端也可能随时给客户端推动消息。</p><h5 id="常见应用场景-聊天应用、游戏应用" tabindex="-1">常见应用场景：聊天应用、游戏应用 <a class="header-anchor" href="#常见应用场景-聊天应用、游戏应用" aria-label="Permalink to &quot;常见应用场景：聊天应用、游戏应用&quot;">​</a></h5><h5 id="技术-websocket" tabindex="-1">技术：WebSocket <a class="header-anchor" href="#技术-websocket" aria-label="Permalink to &quot;技术：WebSocket&quot;">​</a></h5><h5 id="示例代码-2" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码-2" aria-label="Permalink to &quot;示例代码&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let chatWebSocket = null</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function connectChatWebSocket(url) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	let webSocket = null</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (&quot;WebSocket&quot; in window) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        webSocket = new WebSocket(url)</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else if (&quot;MozWebSocket&quot; in window) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        webSocket = new MozWebSocket(url)</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">        alert(&quot;浏览器不支持WebSocket&quot;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        return</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">	webSocket.onopen = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		// console.log(&#39;chatWebSocket ===&gt;  onopen&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	webSocket.onmessage = (event) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		// console.log(&#39;chatWebSocket ===&gt;  onmessage &#39;, event.data)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	webSocket.onerror = (event) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		console.log(&#39;chatWebSocket ===&gt;  onerror &#39;, event)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	webSocket.onclose = (e) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		console.log(&#39;chatWebSocket ===&gt;  onclose&#39;, e)</span></span>
<span class="line"><span style="color:#e1e4e8;">		console.log(&#39;chatWebSocket ===&gt; e.code&#39;, e.code)</span></span>
<span class="line"><span style="color:#e1e4e8;">		console.log(&#39;chatWebSocket ===&gt; e.reason&#39;, e.reason)</span></span>
<span class="line"><span style="color:#e1e4e8;">		console.log(&#39;chatWebSocket ===&gt; e.wasClean&#39;, e.wasClean)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	chatWebSocket = webSocket</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function disconnectChatWebSocket() {</span></span>
<span class="line"><span style="color:#e1e4e8;">	if (chatWebSocket) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		chatWebSocket.close()</span></span>
<span class="line"><span style="color:#e1e4e8;">		chatWebSocket = null</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let chatWebSocket = null</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function connectChatWebSocket(url) {</span></span>
<span class="line"><span style="color:#24292e;">	let webSocket = null</span></span>
<span class="line"><span style="color:#24292e;">    if (&quot;WebSocket&quot; in window) {</span></span>
<span class="line"><span style="color:#24292e;">        webSocket = new WebSocket(url)</span></span>
<span class="line"><span style="color:#24292e;">    } else if (&quot;MozWebSocket&quot; in window) {</span></span>
<span class="line"><span style="color:#24292e;">        webSocket = new MozWebSocket(url)</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">        alert(&quot;浏览器不支持WebSocket&quot;)</span></span>
<span class="line"><span style="color:#24292e;">        return</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">	webSocket.onopen = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		// console.log(&#39;chatWebSocket ===&gt;  onopen&#39;)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	webSocket.onmessage = (event) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		// console.log(&#39;chatWebSocket ===&gt;  onmessage &#39;, event.data)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	webSocket.onerror = (event) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		console.log(&#39;chatWebSocket ===&gt;  onerror &#39;, event)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	webSocket.onclose = (e) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		console.log(&#39;chatWebSocket ===&gt;  onclose&#39;, e)</span></span>
<span class="line"><span style="color:#24292e;">		console.log(&#39;chatWebSocket ===&gt; e.code&#39;, e.code)</span></span>
<span class="line"><span style="color:#24292e;">		console.log(&#39;chatWebSocket ===&gt; e.reason&#39;, e.reason)</span></span>
<span class="line"><span style="color:#24292e;">		console.log(&#39;chatWebSocket ===&gt; e.wasClean&#39;, e.wasClean)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	chatWebSocket = webSocket</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function disconnectChatWebSocket() {</span></span>
<span class="line"><span style="color:#24292e;">	if (chatWebSocket) {</span></span>
<span class="line"><span style="color:#24292e;">		chatWebSocket.close()</span></span>
<span class="line"><span style="color:#24292e;">		chatWebSocket = null</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,20),t=[o];function p(c,r,i,h,b,d){return s(),a("div",null,t)}const S=e(l,[["render",p]]);export{y as __pageData,S as default};
