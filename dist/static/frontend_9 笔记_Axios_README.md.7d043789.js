import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.0f4e1e9e.js";const f=JSON.parse('{"title":"Axios 笔记","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/9 笔记/Axios/README.md","filePath":"frontend/9 笔记/Axios/README.md"}'),p={name:"frontend/9 笔记/Axios/README.md"},l=a(`<h1 id="axios-笔记" tabindex="-1">Axios 笔记 <a class="header-anchor" href="#axios-笔记" aria-label="Permalink to &quot;Axios 笔记&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#e1e4e8;">  headers: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;Content-Type&#39;: &#39;application/json;application/octet-stream&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;version&#39;: &#39;15.4&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  timeout: 90000, // default is \`0\` (no timeout)</span></span>
<span class="line"><span style="color:#e1e4e8;">  withCredentials: false, // default</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">instance.interceptors.request.use(function (config) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	return config</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">instance.interceptors.response.use(function (response) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	return response</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#24292e;">  headers: {</span></span>
<span class="line"><span style="color:#24292e;">    &#39;Content-Type&#39;: &#39;application/json;application/octet-stream&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;version&#39;: &#39;15.4&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  timeout: 90000, // default is \`0\` (no timeout)</span></span>
<span class="line"><span style="color:#24292e;">  withCredentials: false, // default</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">instance.interceptors.request.use(function (config) {</span></span>
<span class="line"><span style="color:#24292e;">	return config</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">instance.interceptors.response.use(function (response) {</span></span>
<span class="line"><span style="color:#24292e;">	return response</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div>`,2),o=[l];function t(c,i,r,d,y,u){return n(),e("div",null,o)}const h=s(p,[["render",t]]);export{f as __pageData,h as default};
