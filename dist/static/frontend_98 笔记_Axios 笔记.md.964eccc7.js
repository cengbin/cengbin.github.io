import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const f=JSON.parse('{"title":"Axios 笔记","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/98 笔记/Axios 笔记.md","filePath":"frontend/98 笔记/Axios 笔记.md"}'),p={name:"frontend/98 笔记/Axios 笔记.md"},l=e(`<h1 id="axios-笔记" tabindex="-1">Axios 笔记 <a class="header-anchor" href="#axios-笔记" aria-label="Permalink to &quot;Axios 笔记&quot;">​</a></h1><p>ajax.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * ajax模块是对axios的二次封装</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @module ajax</span></span>
<span class="line"><span style="color:#e1e4e8;"> * */</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#e1e4e8;">  timeout: 10000,</span></span>
<span class="line"><span style="color:#e1e4e8;">  withCredentials: true</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">instance.interceptors.request.use((config) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return config</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">instance.interceptors.response.use((response) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return response</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function ajax(data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  let {method, url, params, headers = {}} = data</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  let config = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    url,</span></span>
<span class="line"><span style="color:#e1e4e8;">    method,</span></span>
<span class="line"><span style="color:#e1e4e8;">    headers: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      ...headers</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    params: method === &#39;get&#39; ? params : null,</span></span>
<span class="line"><span style="color:#e1e4e8;">    data: method === &#39;post&#39; || method === &#39;put&#39; ? params : null</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  // console.log(config)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return instance(config)</span></span>
<span class="line"><span style="color:#e1e4e8;">    .then(</span></span>
<span class="line"><span style="color:#e1e4e8;">      (value) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        let {data} = value</span></span>
<span class="line"><span style="color:#e1e4e8;">        let {code, message} = data</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (code !== 20000) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          console.error(&#39;response :&#39;, value, message)</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">        return data</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">      (reason) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        return Promise.reject(reason)</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    )</span></span>
<span class="line"><span style="color:#e1e4e8;">    .finally(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ajax.get = function (config) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return ajax({method: &#39;get&#39;, ...config})</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ajax.post = function (config) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return ajax({method: &#39;post&#39;, ...config})</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ajax.put = function (config) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return ajax({method: &#39;put&#39;, ...config})</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ajax.upload = function (config) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  let {params} = config</span></span>
<span class="line"><span style="color:#e1e4e8;">  let formData = new FormData()</span></span>
<span class="line"><span style="color:#e1e4e8;">  for (let s in params) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    formData.append(s, params[s])</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return ajax({method: &#39;post&#39;, ...config, params: formData})</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default ajax</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * ajax模块是对axios的二次封装</span></span>
<span class="line"><span style="color:#24292e;"> * @module ajax</span></span>
<span class="line"><span style="color:#24292e;"> * */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#24292e;">  timeout: 10000,</span></span>
<span class="line"><span style="color:#24292e;">  withCredentials: true</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">instance.interceptors.request.use((config) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return config</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">instance.interceptors.response.use((response) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  return response</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function ajax(data) {</span></span>
<span class="line"><span style="color:#24292e;">  let {method, url, params, headers = {}} = data</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  let config = {</span></span>
<span class="line"><span style="color:#24292e;">    url,</span></span>
<span class="line"><span style="color:#24292e;">    method,</span></span>
<span class="line"><span style="color:#24292e;">    headers: {</span></span>
<span class="line"><span style="color:#24292e;">      ...headers</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    params: method === &#39;get&#39; ? params : null,</span></span>
<span class="line"><span style="color:#24292e;">    data: method === &#39;post&#39; || method === &#39;put&#39; ? params : null</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  // console.log(config)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return instance(config)</span></span>
<span class="line"><span style="color:#24292e;">    .then(</span></span>
<span class="line"><span style="color:#24292e;">      (value) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        let {data} = value</span></span>
<span class="line"><span style="color:#24292e;">        let {code, message} = data</span></span>
<span class="line"><span style="color:#24292e;">        if (code !== 20000) {</span></span>
<span class="line"><span style="color:#24292e;">          console.error(&#39;response :&#39;, value, message)</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">        return data</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">      (reason) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        return Promise.reject(reason)</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    )</span></span>
<span class="line"><span style="color:#24292e;">    .finally(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ajax.get = function (config) {</span></span>
<span class="line"><span style="color:#24292e;">  return ajax({method: &#39;get&#39;, ...config})</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ajax.post = function (config) {</span></span>
<span class="line"><span style="color:#24292e;">  return ajax({method: &#39;post&#39;, ...config})</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ajax.put = function (config) {</span></span>
<span class="line"><span style="color:#24292e;">  return ajax({method: &#39;put&#39;, ...config})</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ajax.upload = function (config) {</span></span>
<span class="line"><span style="color:#24292e;">  let {params} = config</span></span>
<span class="line"><span style="color:#24292e;">  let formData = new FormData()</span></span>
<span class="line"><span style="color:#24292e;">  for (let s in params) {</span></span>
<span class="line"><span style="color:#24292e;">    formData.append(s, params[s])</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return ajax({method: &#39;post&#39;, ...config, params: formData})</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default ajax</span></span></code></pre></div>`,3),o=[l];function c(t,r,i,y,d,u){return n(),a("div",null,o)}const g=s(p,[["render",c]]);export{f as __pageData,g as default};
