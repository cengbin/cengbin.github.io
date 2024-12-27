import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.0f4e1e9e.js";const g=JSON.parse('{"title":"Web 前后端通信方案","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/52 前后端通信方案/README.md","filePath":"frontend/52 前后端通信方案/README.md"}'),l={name:"frontend/52 前后端通信方案/README.md"},p=a(`<h1 id="web-前后端通信方案" tabindex="-1">Web 前后端通信方案 <a class="header-anchor" href="#web-前后端通信方案" aria-label="Permalink to &quot;Web 前后端通信方案&quot;">​</a></h1><h2 id="一对一响应" tabindex="-1">一对一响应 <a class="header-anchor" href="#一对一响应" aria-label="Permalink to &quot;一对一响应&quot;">​</a></h2><p>一对一响应是指：网页发送一次消息给服务端，服务端只需要返回一次数据给网页。</p><p><strong>常见应用场景</strong></p><p>数据库：增 删 改 查</p><p><strong>技术</strong></p><p>AJAX（Asynchronous JavaScript and XML）是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。它通过在后台与服务器交换数据，并允许网页异步更新。这意味着你可以在不干扰用户当前与网页交互的情况下，从服务器请求数据或发送数据到服务器。</p><p><strong>示例代码</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var xhr = new XMLHttpRequest();  </span></span>
<span class="line"><span style="color:#e1e4e8;">xhr.open(&quot;GET&quot;, &quot;example.txt&quot;, true);  </span></span>
<span class="line"><span style="color:#e1e4e8;">xhr.onreadystatechange = function () {  </span></span>
<span class="line"><span style="color:#e1e4e8;">    if (xhr.readyState == 4 &amp;&amp; xhr.status == 200) {  </span></span>
<span class="line"><span style="color:#e1e4e8;">        // 请求已完成且响应已就绪  </span></span>
<span class="line"><span style="color:#e1e4e8;">        document.getElementById(&quot;demo&quot;).innerHTML = xhr.responseText;  </span></span>
<span class="line"><span style="color:#e1e4e8;">    }  </span></span>
<span class="line"><span style="color:#e1e4e8;">};  </span></span>
<span class="line"><span style="color:#e1e4e8;">xhr.send();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var xhr = new XMLHttpRequest();  </span></span>
<span class="line"><span style="color:#24292e;">xhr.open(&quot;GET&quot;, &quot;example.txt&quot;, true);  </span></span>
<span class="line"><span style="color:#24292e;">xhr.onreadystatechange = function () {  </span></span>
<span class="line"><span style="color:#24292e;">    if (xhr.readyState == 4 &amp;&amp; xhr.status == 200) {  </span></span>
<span class="line"><span style="color:#24292e;">        // 请求已完成且响应已就绪  </span></span>
<span class="line"><span style="color:#24292e;">        document.getElementById(&quot;demo&quot;).innerHTML = xhr.responseText;  </span></span>
<span class="line"><span style="color:#24292e;">    }  </span></span>
<span class="line"><span style="color:#24292e;">};  </span></span>
<span class="line"><span style="color:#24292e;">xhr.send();</span></span></code></pre></div><h2 id="一对多响应" tabindex="-1">一对多响应 <a class="header-anchor" href="#一对多响应" aria-label="Permalink to &quot;一对多响应&quot;">​</a></h2><p>一对多响应是指：客户端发送一次问题，服务端多次给网页推送数据。1 N 流式输出。</p><p><strong>常见应用场景</strong></p><p>SSE不仅仅可以实现ChatGPT的流式返回功能，SSE在Web应用程序中的使用场景非常广泛，例如实时的新闻推送、实时股票报价、在线游戏等等，比起轮询和长轮询，SSE更加高效，因为只有在有新数据到达时才会发送；</p><p><strong>技术</strong></p><p>SSE（Server-Sent Events，服务器发送事件）是一种允许服务器主动向客户端推送信息的技术。与传统的HTTP请求-响应模型不同，在SSE中，客户端向服务器发送一个HTTP请求，然后服务器保持连接打开，并随着时间的推移，服务器可以主动向客户端发送事件。</p><p>SSE建立在HTTP协议上，使用基于文本的数据格式（通常是JSON）进行通信。客户端通过创建一个EventSource对象来与服务器建立连接，然后可以监听服务器发送的事件。服务器端可以随时将事件推送给客户端，客户端通过监听事件来接收这些数据。</p><p><strong>示例代码</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">var evtSource = new EventSource(&quot;server.php&quot;);  </span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">evtSource.onmessage = function(e) {  </span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(e.data);  </span></span>
<span class="line"><span style="color:#e1e4e8;">};  </span></span>
<span class="line"><span style="color:#e1e4e8;">  </span></span>
<span class="line"><span style="color:#e1e4e8;">evtSource.onerror = function(e) {  </span></span>
<span class="line"><span style="color:#e1e4e8;">    console.error(&quot;EventSource failed:&quot;, e);  </span></span>
<span class="line"><span style="color:#e1e4e8;">    // 可以选择在这里重新连接  </span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">var evtSource = new EventSource(&quot;server.php&quot;);  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">evtSource.onmessage = function(e) {  </span></span>
<span class="line"><span style="color:#24292e;">    console.log(e.data);  </span></span>
<span class="line"><span style="color:#24292e;">};  </span></span>
<span class="line"><span style="color:#24292e;">  </span></span>
<span class="line"><span style="color:#24292e;">evtSource.onerror = function(e) {  </span></span>
<span class="line"><span style="color:#24292e;">    console.error(&quot;EventSource failed:&quot;, e);  </span></span>
<span class="line"><span style="color:#24292e;">    // 可以选择在这里重新连接  </span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p><strong>参考</strong></p><ul><li><a href="https://juejin.cn/post/7207798726382665785?searchId=20230912164949D11CFAFC832BECBE4592" target="_blank" rel="noreferrer">逐句回答,流式返回,ChatGPT采用的Server-sent events</a></li></ul><h2 id="多对多响应" tabindex="-1">多对多响应 <a class="header-anchor" href="#多对多响应" aria-label="Permalink to &quot;多对多响应&quot;">​</a></h2><p>多对多响应是指：网页可能多次消息给服务端，服务端也可能随时给客户端推动消息。</p><p><strong>常见应用场景</strong></p><p>聊天应用、游戏应用</p><p><strong>技术</strong></p><p>WebSocket是一种在Web应用程序中实现全双工通信的协议。</p><p><strong>示例代码</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let chatWebSocket = null</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,28),o=[p];function t(c,r,i,y,u,h){return e(),n("div",null,o)}const S=s(l,[["render",t]]);export{g as __pageData,S as default};
