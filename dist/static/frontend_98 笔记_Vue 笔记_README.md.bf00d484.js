import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.0f4e1e9e.js";const p="/static/781589-20210819154746534-814249557.1f3dee1b.png",g=JSON.parse('{"title":"Vue 笔记","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/98 笔记/Vue 笔记/README.md","filePath":"frontend/98 笔记/Vue 笔记/README.md"}'),l={name:"frontend/98 笔记/Vue 笔记/README.md"},t=a(`<h1 id="vue-笔记" tabindex="-1">Vue 笔记 <a class="header-anchor" href="#vue-笔记" aria-label="Permalink to &quot;Vue 笔记&quot;">​</a></h1><h2 id="script-标签的-type-类型为-text-template" tabindex="-1"><code>&lt;script/&gt;</code> 标签的 type 类型为 text/template <a class="header-anchor" href="#script-标签的-type-类型为-text-template" aria-label="Permalink to &quot;\`&lt;script/&gt;\` 标签的 type 类型为 text/template&quot;">​</a></h2><p><code>&lt;script&gt;</code>设置type=&quot;text/template&quot;，标签里面的内容不会被执行，也不会显示在页面上，但是可以在另一个script里面通过获取插入到页面中。这样就把大段的HTML操作从js里面分离开了。</p><h2 id="env文件的使用" tabindex="-1">.env文件的使用 <a class="header-anchor" href="#env文件的使用" aria-label="Permalink to &quot;.env文件的使用&quot;">​</a></h2><p><a href="https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" target="_blank" rel="noreferrer">Vue CLI 关于 .env的介绍点击这里</a></p><p>用途: 一般用于区分开发者与生产者环境</p><p>本文用途: 用于定义全局变量,实现不同模块访问不同域名的微服务.</p><p>注意事项: vite构建vue3项目与vue2-cli文档配置不相同</p><p>vue2 变量定义需要用VUE_APP_开头 取值使用p<wbr>rocess.env.变量名来获取</p><p>vue3 变量定义需要用VITE_开头 由于vue3移除了p<wbr>rocess.env 所以取值使用i<wbr>mport.meta.env.变量名来获取 并且在vite.config.js文件中配置envPrefix: &quot;VITE_&quot;,</p><p>原文链接：<a href="https://blog.csdn.net/weixin_43741911/article/details/127553961" target="_blank" rel="noreferrer">点击这里</a></p><h2 id="未匹配到路由-则重定向到404页面" tabindex="-1">未匹配到路由，则重定向到404页面 <a class="header-anchor" href="#未匹配到路由-则重定向到404页面" aria-label="Permalink to &quot;未匹配到路由，则重定向到404页面&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">routes.unshift({</span></span>
<span class="line"><span style="color:#e1e4e8;">	path: &#39;*&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	redirect: \`/404\`,</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">routes.unshift({</span></span>
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
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="vue-computed-可以返回函数" tabindex="-1">Vue computed 可以返回函数 <a class="header-anchor" href="#vue-computed-可以返回函数" aria-label="Permalink to &quot;Vue computed 可以返回函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">computed: {</span></span>
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
<span class="line"><span style="color:#24292e;">&gt;</span></span></code></pre></div><h2 id="vuex-getters-可以返回函数" tabindex="-1">Vuex getters 可以返回函数 <a class="header-anchor" href="#vuex-getters-可以返回函数" aria-label="Permalink to &quot;Vuex getters 可以返回函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">getters: {</span></span>
<span class="line"><span style="color:#e1e4e8;">	getMenuByPath: state =&gt; path =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">	  let menu = state.menuList.find(menu =&gt; menu.path === path)</span></span>
<span class="line"><span style="color:#e1e4e8;">	  return menu;</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">getters: {</span></span>
<span class="line"><span style="color:#24292e;">	getMenuByPath: state =&gt; path =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">	  let menu = state.menuList.find(menu =&gt; menu.path === path)</span></span>
<span class="line"><span style="color:#24292e;">	  return menu;</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><p>使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let menu = store.getters.getMenuByPath(to.path)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let menu = store.getters.getMenuByPath(to.path)</span></span></code></pre></div><h2 id="关闭-vue-cli-中的-eslint-检查工具" tabindex="-1">关闭 vue cli 中的 eslint 检查工具 <a class="header-anchor" href="#关闭-vue-cli-中的-eslint-检查工具" aria-label="Permalink to &quot;关闭 vue cli 中的 eslint 检查工具&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// vue.config.js</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="vue-深度选择器-v-deep" tabindex="-1">Vue 深度选择器 :v-deep <a class="header-anchor" href="#vue-深度选择器-v-deep" aria-label="Permalink to &quot;Vue 深度选择器 :v-deep&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.area {</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="vue-80端口无法使用-直接运行到1024问题" tabindex="-1">Vue 80端口无法使用，直接运行到1024问题 <a class="header-anchor" href="#vue-80端口无法使用-直接运行到1024问题" aria-label="Permalink to &quot;Vue 80端口无法使用，直接运行到1024问题&quot;">​</a></h2><p>参考：<a href="https://blog.csdn.net/samuelandkevin/article/details/80279773" target="_blank" rel="noreferrer">在mac os中，非root用户是无法使用小于1024的常用端口的。如果开发中需要用到80端口, 就要设置端口转发。</a></p><p><img src="`+p+`" alt=""></p><h2 id="解决-vue2-数组内交换位置后无法重新渲染的问题" tabindex="-1">解决 vue2 数组内交换位置后无法重新渲染的问题 <a class="header-anchor" href="#解决-vue2-数组内交换位置后无法重新渲染的问题" aria-label="Permalink to &quot;解决 vue2 数组内交换位置后无法重新渲染的问题&quot;">​</a></h2><p>背景：如下代码，list 是一个响应式数组，调用swap(1,2) 交互数组中的元素，通过vue devtools查看data已经变了，但是 vue 不会触发重新渲染！</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">new Vue({</span></span>
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
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><p>原因：vue2 只对数组的push pop shift unshift splice ... 等等这些方法做了代理，当做了这些之外的操作是监听不到的。</p><p>解决：</p><p>方法一：用this.$set();</p><p>方法二：用this.$forceUpdate(); 强制触发重新渲染。</p><h2 id="vue-查看全局已经注册的指令" tabindex="-1">vue 查看全局已经注册的指令 <a class="header-anchor" href="#vue-查看全局已经注册的指令" aria-label="Permalink to &quot;vue 查看全局已经注册的指令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(Vue.options.directives);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 遍历并打印所有指令</span></span>
<span class="line"><span style="color:#e1e4e8;">for (const directiveName in Vue.options.directives) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log(\`指令名称: \${directiveName}\`);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import Vue from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">console.log(Vue.options.directives);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 遍历并打印所有指令</span></span>
<span class="line"><span style="color:#24292e;">for (const directiveName in Vue.options.directives) {</span></span>
<span class="line"><span style="color:#24292e;">  console.log(\`指令名称: \${directiveName}\`);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,39),o=[t];function c(i,r,d,u,y,h){return e(),n("div",null,o)}const m=s(l,[["render",c]]);export{g as __pageData,m as default};
