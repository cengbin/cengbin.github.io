import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const p="/static/781589-20210819154746534-814249557.1f3dee1b.png",g=JSON.parse('{"title":"Vue 笔记","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/98 笔记/Vue 笔记/README.md","filePath":"frontend/98 笔记/Vue 笔记/README.md"}'),l={name:"frontend/98 笔记/Vue 笔记/README.md"},t=e(`<h1 id="vue-笔记" tabindex="-1">Vue 笔记 <a class="header-anchor" href="#vue-笔记" aria-label="Permalink to &quot;Vue 笔记&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 未匹配到路由，则重定向到404页面</span></span>
<span class="line"><span style="color:#e1e4e8;">routes.unshift({</span></span>
<span class="line"><span style="color:#e1e4e8;">	path: &#39;*&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	redirect: \`/404\`,</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 未匹配到路由，则重定向到404页面</span></span>
<span class="line"><span style="color:#24292e;">routes.unshift({</span></span>
<span class="line"><span style="color:#24292e;">	path: &#39;*&#39;,</span></span>
<span class="line"><span style="color:#24292e;">	redirect: \`/404\`,</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="vue项目每次进入项目都跳转到根目录代码" tabindex="-1">Vue项目每次进入项目都跳转到根目录代码： <a class="header-anchor" href="#vue项目每次进入项目都跳转到根目录代码" aria-label="Permalink to &quot;Vue项目每次进入项目都跳转到根目录代码：&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">new Vue({</span></span>
<span class="line"><span style="color:#e1e4e8;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  router,</span></span>
<span class="line"><span style="color:#e1e4e8;">  components: {App},</span></span>
<span class="line"><span style="color:#e1e4e8;">  template: &#39;&lt;App/&gt;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  beforeCreate () {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (this.$route.path !== &#39;/&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.$router.push({path: &#39;/&#39;})</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">new Vue({</span></span>
<span class="line"><span style="color:#24292e;">  el: &#39;#app&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  router,</span></span>
<span class="line"><span style="color:#24292e;">  components: {App},</span></span>
<span class="line"><span style="color:#24292e;">  template: &#39;&lt;App/&gt;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  beforeCreate () {</span></span>
<span class="line"><span style="color:#24292e;">    if (this.$route.path !== &#39;/&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">      this.$router.push({path: &#39;/&#39;})</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="_1-vue-computed-还可以返回函数" tabindex="-1">1 Vue computed 还可以返回函数 <a class="header-anchor" href="#_1-vue-computed-还可以返回函数" aria-label="Permalink to &quot;1 Vue computed 还可以返回函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">computed: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  isEnable() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    return function (keyName) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      return this.contentForm[keyName] === &#39;1&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">computed: {</span></span>
<span class="line"><span style="color:#24292e;">  isEnable() {</span></span>
<span class="line"><span style="color:#24292e;">    return function (keyName) {</span></span>
<span class="line"><span style="color:#24292e;">      return this.contentForm[keyName] === &#39;1&#39;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><p>使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;el-table</span></span>
<span class="line"><span style="color:#e1e4e8;">  v-if=&quot;isEnable(&#39;enableInteraction&#39;)&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  class=&quot;page-table&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;el-table</span></span>
<span class="line"><span style="color:#24292e;">  v-if=&quot;isEnable(&#39;enableInteraction&#39;)&quot;</span></span>
<span class="line"><span style="color:#24292e;">  class=&quot;page-table&quot;</span></span>
<span class="line"><span style="color:#24292e;">&gt;</span></span></code></pre></div><h2 id="_2-关闭-vue-cli-中的-eslint-检查工具" tabindex="-1">2 关闭 vue cli 中的 eslint 检查工具 <a class="header-anchor" href="#_2-关闭-vue-cli-中的-eslint-检查工具" aria-label="Permalink to &quot;2 关闭 vue cli 中的 eslint 检查工具&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// vue.config.js</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  lintOnSave:false //关闭eslint检查</span></span>
<span class="line"><span style="color:#e1e4e8;">  devServer: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    overlay: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      warnings: false, //不显示警告</span></span>
<span class="line"><span style="color:#e1e4e8;">      errors: false	//不显示错误</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// vue.config.js</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  lintOnSave:false //关闭eslint检查</span></span>
<span class="line"><span style="color:#24292e;">  devServer: {</span></span>
<span class="line"><span style="color:#24292e;">    overlay: {</span></span>
<span class="line"><span style="color:#24292e;">      warnings: false, //不显示警告</span></span>
<span class="line"><span style="color:#24292e;">      errors: false	//不显示错误</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_3-vue-深度选择器-v-deep" tabindex="-1">3 Vue 深度选择器 :v-deep <a class="header-anchor" href="#_3-vue-深度选择器-v-deep" aria-label="Permalink to &quot;3 Vue 深度选择器 :v-deep&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.area {</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  .col-jjje ::v-deep .el-input-group__append {</span></span>
<span class="line"><span style="color:#e1e4e8;">    padding: 0 10px !important;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  ::v-deep .citySelect-box {</span></span>
<span class="line"><span style="color:#e1e4e8;">    width: 100% !important;</span></span>
<span class="line"><span style="color:#e1e4e8;">    padding-right: 10px;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.area {</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  .col-jjje ::v-deep .el-input-group__append {</span></span>
<span class="line"><span style="color:#24292e;">    padding: 0 10px !important;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  ::v-deep .citySelect-box {</span></span>
<span class="line"><span style="color:#24292e;">    width: 100% !important;</span></span>
<span class="line"><span style="color:#24292e;">    padding-right: 10px;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="_5-vue-80端口无法使用-直接运行到1024问题" tabindex="-1">5 Vue 80端口无法使用，直接运行到1024问题 <a class="header-anchor" href="#_5-vue-80端口无法使用-直接运行到1024问题" aria-label="Permalink to &quot;5 Vue 80端口无法使用，直接运行到1024问题&quot;">​</a></h2><p><a href="https://blog.csdn.net/samuelandkevin/article/details/80279773" target="_blank" rel="noreferrer">在mac os中，非root用户是无法使用小于1024的常用端口的。如果开发中需要用到80端口, 就要设置端口转发。</a></p><p><img src="`+p+`" alt=""></p><h2 id="_6-解决-vue2-数组内交换位置后无法重新渲染的问题" tabindex="-1">6 解决 vue2 数组内交换位置后无法重新渲染的问题 <a class="header-anchor" href="#_6-解决-vue2-数组内交换位置后无法重新渲染的问题" aria-label="Permalink to &quot;6 解决 vue2 数组内交换位置后无法重新渲染的问题&quot;">​</a></h2><p>背景：如下代码，list 是一个响应式数组，调用swap(1,2) 交互数组中的元素，通过vue devtools查看data已经变了，但是 vue 不会触发重新渲染！</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">new Vue({</span></span>
<span class="line"><span style="color:#e1e4e8;">	el: &quot;#app&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	data() {</span></span>
<span class="line"><span style="color:#e1e4e8;">		return {</span></span>
<span class="line"><span style="color:#e1e4e8;">			list: [0, 1, 3, 4],</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">	methods: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		swap(index1, index2) {</span></span>
<span class="line"><span style="color:#e1e4e8;">			let temp = this.list[index1];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			this.list[index1] = this.list[index2];</span></span>
<span class="line"><span style="color:#e1e4e8;">			this.list[index2] = temp;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			// console.log(this.list);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			// 方法一</span></span>
<span class="line"><span style="color:#e1e4e8;">			// this.$set(this.list, index1, this.list[index2])</span></span>
<span class="line"><span style="color:#e1e4e8;">			// this.$set(this.list, index2, temp)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			// 方法二</span></span>
<span class="line"><span style="color:#e1e4e8;">			this.$forceUpdate();</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">new Vue({</span></span>
<span class="line"><span style="color:#24292e;">	el: &quot;#app&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	data() {</span></span>
<span class="line"><span style="color:#24292e;">		return {</span></span>
<span class="line"><span style="color:#24292e;">			list: [0, 1, 3, 4],</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">	methods: {</span></span>
<span class="line"><span style="color:#24292e;">		swap(index1, index2) {</span></span>
<span class="line"><span style="color:#24292e;">			let temp = this.list[index1];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			this.list[index1] = this.list[index2];</span></span>
<span class="line"><span style="color:#24292e;">			this.list[index2] = temp;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			// console.log(this.list);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			// 方法一</span></span>
<span class="line"><span style="color:#24292e;">			// this.$set(this.list, index1, this.list[index2])</span></span>
<span class="line"><span style="color:#24292e;">			// this.$set(this.list, index2, temp)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			// 方法二</span></span>
<span class="line"><span style="color:#24292e;">			this.$forceUpdate();</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p>原因：vue2 只对数组的push pop shift unshift splice ... 等等这些方法做了代理，当做了这些之外的操作是监听不到的。</p><p>解决：</p><p>方法一：用this.$set();</p><p>方法二：用this.$forceUpdate(); 强制触发重新渲染。</p>`,22),o=[t];function c(i,r,d,y,u,h){return n(),a("div",null,o)}const b=s(l,[["render",c]]);export{g as __pageData,b as default};
