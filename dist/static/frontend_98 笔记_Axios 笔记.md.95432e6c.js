import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const u=JSON.parse('{"title":"Axios 笔记","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/98 笔记/Axios 笔记.md","filePath":"frontend/98 笔记/Axios 笔记.md"}'),l={name:"frontend/98 笔记/Axios 笔记.md"},p=e(`<h1 id="axios-笔记" tabindex="-1">Axios 笔记 <a class="header-anchor" href="#axios-笔记" aria-label="Permalink to &quot;Axios 笔记&quot;">​</a></h1><p>ajax.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * ajax模块是对axios的二次封装</span></span>
<span class="line"><span style="color:#e1e4e8;"> * @module ajax</span></span>
<span class="line"><span style="color:#e1e4e8;"> * */</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { ElMessageBox, ElMessage } from &#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { removeToken } from &#39;./auth&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const errorCode = {</span></span>
<span class="line"><span style="color:#e1e4e8;">	401: &#39;认证失败，无法访问系统资源&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	403: &#39;当前操作没有权限&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	404: &#39;访问资源不存在&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	default: &#39;系统未知错误，请反馈给管理员&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 创建axios实例</span></span>
<span class="line"><span style="color:#e1e4e8;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 请求URL公共部分</span></span>
<span class="line"><span style="color:#e1e4e8;">	baseURL: i<wbr>mport.meta.env.VITE_APP_BASE_API,</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 设置网络请求超时时间</span></span>
<span class="line"><span style="color:#e1e4e8;">	timeout: 10000,</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 跨域请求否要携带cookie</span></span>
<span class="line"><span style="color:#e1e4e8;">	withCredentials: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">	// 请求头设置</span></span>
<span class="line"><span style="color:#e1e4e8;">	headers: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		&#39;Content-Type&#39;: &#39;application/json;charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 请求拦截器</span></span>
<span class="line"><span style="color:#e1e4e8;">instance.interceptors.request.use(</span></span>
<span class="line"><span style="color:#e1e4e8;">	(config) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return config</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">	(error) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		console.error(error)</span></span>
<span class="line"><span style="color:#e1e4e8;">		Promise.reject(error)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 响应拦截器</span></span>
<span class="line"><span style="color:#e1e4e8;">instance.interceptors.response.use(</span></span>
<span class="line"><span style="color:#e1e4e8;">	(res) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 获取状态信息</span></span>
<span class="line"><span style="color:#e1e4e8;">		let code = res.data.code || 200</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 获取错误信息</span></span>
<span class="line"><span style="color:#e1e4e8;">		const msg = errorCode[code] || res.data.msg || errorCode[&#39;default&#39;]</span></span>
<span class="line"><span style="color:#e1e4e8;">		if (code === 401) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			ElMessageBox.alert(&#39;无效的会话，或者会话已过期，请重新登录。&#39;, &#39;系统提示&#39;, {</span></span>
<span class="line"><span style="color:#e1e4e8;">				confirmButtonText: &#39;确定&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">				type: &#39;warning&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			}).then(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">				removeToken()</span></span>
<span class="line"><span style="color:#e1e4e8;">				location.href = &#39;/index&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">			})</span></span>
<span class="line"><span style="color:#e1e4e8;">			return Promise.reject(&#39;无效的会话，或者会话已过期，请重新登录。&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">		} else if (code !== 200) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			ElMessage({ message: msg, type: &#39;error&#39; })</span></span>
<span class="line"><span style="color:#e1e4e8;">			return Promise.reject(&#39;error&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">		} else {</span></span>
<span class="line"><span style="color:#e1e4e8;">			return Promise.resolve(res.data)</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">	(error) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">		console.error(&#39;err&#39; + error)</span></span>
<span class="line"><span style="color:#e1e4e8;">		let { message } = error</span></span>
<span class="line"><span style="color:#e1e4e8;">		if (message == &#39;Network Error&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			message = &#39;后端接口连接异常&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">		} else if (message.includes(&#39;timeout&#39;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			message = &#39;系统接口请求超时&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">		} else if (message.includes(&#39;Request failed with status code&#39;)) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			message = &#39;系统接口&#39; + message.substr(message.length - 3) + &#39;异常&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">		ElMessage({ message: message, type: &#39;error&#39;, duration: 5 * 1000 })</span></span>
<span class="line"><span style="color:#e1e4e8;">		return Promise.reject(error)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function ajax(data) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	let { method, url, params, headers = {} } = data</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	let config = {</span></span>
<span class="line"><span style="color:#e1e4e8;">		url,</span></span>
<span class="line"><span style="color:#e1e4e8;">		method,</span></span>
<span class="line"><span style="color:#e1e4e8;">		headers: {</span></span>
<span class="line"><span style="color:#e1e4e8;">			...headers</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">		params: method === &#39;get&#39; ? params : null,</span></span>
<span class="line"><span style="color:#e1e4e8;">		data: method === &#39;post&#39; || method === &#39;put&#39; ? params : null</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	// console.log(config)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	return instance(config)</span></span>
<span class="line"><span style="color:#e1e4e8;">		.then(</span></span>
<span class="line"><span style="color:#e1e4e8;">			(value) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">				let { data } = value</span></span>
<span class="line"><span style="color:#e1e4e8;">				let { code, message } = data</span></span>
<span class="line"><span style="color:#e1e4e8;">				if (code !== 20000) {</span></span>
<span class="line"><span style="color:#e1e4e8;">					console.error(&#39;response :&#39;, value, message)</span></span>
<span class="line"><span style="color:#e1e4e8;">				}</span></span>
<span class="line"><span style="color:#e1e4e8;">				return data</span></span>
<span class="line"><span style="color:#e1e4e8;">			},</span></span>
<span class="line"><span style="color:#e1e4e8;">			(reason) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">				return Promise.reject(reason)</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">		)</span></span>
<span class="line"><span style="color:#e1e4e8;">		.finally(() =&gt; {})</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ajax.get = function (config) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	return ajax({ method: &#39;get&#39;, ...config })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ajax.post = function (config) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	return ajax({ method: &#39;post&#39;, ...config })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ajax.put = function (config) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	return ajax({ method: &#39;put&#39;, ...config })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ajax.upload = function (config) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	let { params } = config</span></span>
<span class="line"><span style="color:#e1e4e8;">	let formData = new FormData()</span></span>
<span class="line"><span style="color:#e1e4e8;">	for (let s in params) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		formData.append(s, params[s])</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	return ajax({ method: &#39;post&#39;, ...config, params: formData })</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default ajax</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * ajax模块是对axios的二次封装</span></span>
<span class="line"><span style="color:#24292e;"> * @module ajax</span></span>
<span class="line"><span style="color:#24292e;"> * */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">import axios from &#39;axios&#39;</span></span>
<span class="line"><span style="color:#24292e;">import { ElMessageBox, ElMessage } from &#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#24292e;">import { removeToken } from &#39;./auth&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const errorCode = {</span></span>
<span class="line"><span style="color:#24292e;">	401: &#39;认证失败，无法访问系统资源&#39;,</span></span>
<span class="line"><span style="color:#24292e;">	403: &#39;当前操作没有权限&#39;,</span></span>
<span class="line"><span style="color:#24292e;">	404: &#39;访问资源不存在&#39;,</span></span>
<span class="line"><span style="color:#24292e;">	default: &#39;系统未知错误，请反馈给管理员&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 创建axios实例</span></span>
<span class="line"><span style="color:#24292e;">const instance = axios.create({</span></span>
<span class="line"><span style="color:#24292e;">	// 请求URL公共部分</span></span>
<span class="line"><span style="color:#24292e;">	baseURL: i<wbr>mport.meta.env.VITE_APP_BASE_API,</span></span>
<span class="line"><span style="color:#24292e;">	// 设置网络请求超时时间</span></span>
<span class="line"><span style="color:#24292e;">	timeout: 10000,</span></span>
<span class="line"><span style="color:#24292e;">	// 跨域请求否要携带cookie</span></span>
<span class="line"><span style="color:#24292e;">	withCredentials: true,</span></span>
<span class="line"><span style="color:#24292e;">	// 请求头设置</span></span>
<span class="line"><span style="color:#24292e;">	headers: {</span></span>
<span class="line"><span style="color:#24292e;">		&#39;Content-Type&#39;: &#39;application/json;charset=utf-8&#39;</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 请求拦截器</span></span>
<span class="line"><span style="color:#24292e;">instance.interceptors.request.use(</span></span>
<span class="line"><span style="color:#24292e;">	(config) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		return config</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">	(error) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		console.error(error)</span></span>
<span class="line"><span style="color:#24292e;">		Promise.reject(error)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 响应拦截器</span></span>
<span class="line"><span style="color:#24292e;">instance.interceptors.response.use(</span></span>
<span class="line"><span style="color:#24292e;">	(res) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		// 获取状态信息</span></span>
<span class="line"><span style="color:#24292e;">		let code = res.data.code || 200</span></span>
<span class="line"><span style="color:#24292e;">		// 获取错误信息</span></span>
<span class="line"><span style="color:#24292e;">		const msg = errorCode[code] || res.data.msg || errorCode[&#39;default&#39;]</span></span>
<span class="line"><span style="color:#24292e;">		if (code === 401) {</span></span>
<span class="line"><span style="color:#24292e;">			ElMessageBox.alert(&#39;无效的会话，或者会话已过期，请重新登录。&#39;, &#39;系统提示&#39;, {</span></span>
<span class="line"><span style="color:#24292e;">				confirmButtonText: &#39;确定&#39;,</span></span>
<span class="line"><span style="color:#24292e;">				type: &#39;warning&#39;</span></span>
<span class="line"><span style="color:#24292e;">			}).then(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">				removeToken()</span></span>
<span class="line"><span style="color:#24292e;">				location.href = &#39;/index&#39;</span></span>
<span class="line"><span style="color:#24292e;">			})</span></span>
<span class="line"><span style="color:#24292e;">			return Promise.reject(&#39;无效的会话，或者会话已过期，请重新登录。&#39;)</span></span>
<span class="line"><span style="color:#24292e;">		} else if (code !== 200) {</span></span>
<span class="line"><span style="color:#24292e;">			ElMessage({ message: msg, type: &#39;error&#39; })</span></span>
<span class="line"><span style="color:#24292e;">			return Promise.reject(&#39;error&#39;)</span></span>
<span class="line"><span style="color:#24292e;">		} else {</span></span>
<span class="line"><span style="color:#24292e;">			return Promise.resolve(res.data)</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">	(error) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">		console.error(&#39;err&#39; + error)</span></span>
<span class="line"><span style="color:#24292e;">		let { message } = error</span></span>
<span class="line"><span style="color:#24292e;">		if (message == &#39;Network Error&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">			message = &#39;后端接口连接异常&#39;</span></span>
<span class="line"><span style="color:#24292e;">		} else if (message.includes(&#39;timeout&#39;)) {</span></span>
<span class="line"><span style="color:#24292e;">			message = &#39;系统接口请求超时&#39;</span></span>
<span class="line"><span style="color:#24292e;">		} else if (message.includes(&#39;Request failed with status code&#39;)) {</span></span>
<span class="line"><span style="color:#24292e;">			message = &#39;系统接口&#39; + message.substr(message.length - 3) + &#39;异常&#39;</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">		ElMessage({ message: message, type: &#39;error&#39;, duration: 5 * 1000 })</span></span>
<span class="line"><span style="color:#24292e;">		return Promise.reject(error)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function ajax(data) {</span></span>
<span class="line"><span style="color:#24292e;">	let { method, url, params, headers = {} } = data</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	let config = {</span></span>
<span class="line"><span style="color:#24292e;">		url,</span></span>
<span class="line"><span style="color:#24292e;">		method,</span></span>
<span class="line"><span style="color:#24292e;">		headers: {</span></span>
<span class="line"><span style="color:#24292e;">			...headers</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">		params: method === &#39;get&#39; ? params : null,</span></span>
<span class="line"><span style="color:#24292e;">		data: method === &#39;post&#39; || method === &#39;put&#39; ? params : null</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	// console.log(config)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	return instance(config)</span></span>
<span class="line"><span style="color:#24292e;">		.then(</span></span>
<span class="line"><span style="color:#24292e;">			(value) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">				let { data } = value</span></span>
<span class="line"><span style="color:#24292e;">				let { code, message } = data</span></span>
<span class="line"><span style="color:#24292e;">				if (code !== 20000) {</span></span>
<span class="line"><span style="color:#24292e;">					console.error(&#39;response :&#39;, value, message)</span></span>
<span class="line"><span style="color:#24292e;">				}</span></span>
<span class="line"><span style="color:#24292e;">				return data</span></span>
<span class="line"><span style="color:#24292e;">			},</span></span>
<span class="line"><span style="color:#24292e;">			(reason) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">				return Promise.reject(reason)</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">		)</span></span>
<span class="line"><span style="color:#24292e;">		.finally(() =&gt; {})</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ajax.get = function (config) {</span></span>
<span class="line"><span style="color:#24292e;">	return ajax({ method: &#39;get&#39;, ...config })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ajax.post = function (config) {</span></span>
<span class="line"><span style="color:#24292e;">	return ajax({ method: &#39;post&#39;, ...config })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ajax.put = function (config) {</span></span>
<span class="line"><span style="color:#24292e;">	return ajax({ method: &#39;put&#39;, ...config })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ajax.upload = function (config) {</span></span>
<span class="line"><span style="color:#24292e;">	let { params } = config</span></span>
<span class="line"><span style="color:#24292e;">	let formData = new FormData()</span></span>
<span class="line"><span style="color:#24292e;">	for (let s in params) {</span></span>
<span class="line"><span style="color:#24292e;">		formData.append(s, params[s])</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	return ajax({ method: &#39;post&#39;, ...config, params: formData })</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default ajax</span></span></code></pre></div>`,3),t=[p];function o(c,r,i,y,m,d){return n(),a("div",null,t)}const f=s(l,[["render",o]]);export{u as __pageData,f as default};
