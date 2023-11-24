import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.2eebfdfc.js";const l="/web-blog/static/781589-20210819154746534-814249557.1f3dee1b.png",g=JSON.parse('{"title":"Vue 笔记","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/9 笔记/Vue/README.md","filePath":"frontend/9 笔记/Vue/README.md"}'),p={name:"frontend/9 笔记/Vue/README.md"},o=n(`<h1 id="vue-笔记" tabindex="-1">Vue 笔记 <a class="header-anchor" href="#vue-笔记" aria-label="Permalink to &quot;Vue 笔记&quot;">​</a></h1><h2 id="vue-computed-还可以返回函数" tabindex="-1">Vue computed 还可以返回函数 <a class="header-anchor" href="#vue-computed-还可以返回函数" aria-label="Permalink to &quot;Vue computed 还可以返回函数&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">computed: {</span></span>
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
<span class="line"><span style="color:#24292e;">&gt;</span></span></code></pre></div><h2 id="关闭-vue-cli-中的-eslint-检查工具" tabindex="-1">关闭 vue cli 中的 eslint 检查工具 <a class="header-anchor" href="#关闭-vue-cli-中的-eslint-检查工具" aria-label="Permalink to &quot;关闭 vue cli 中的 eslint 检查工具&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// vue.config.js</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="vue-80端口无法使用-直接运行到1024问题" tabindex="-1">Vue 80端口无法使用，直接运行到1024问题 <a class="header-anchor" href="#vue-80端口无法使用-直接运行到1024问题" aria-label="Permalink to &quot;Vue 80端口无法使用，直接运行到1024问题&quot;">​</a></h2><p><a href="https://blog.csdn.net/samuelandkevin/article/details/80279773" target="_blank" rel="noreferrer">在mac os中，非root用户是无法使用小于1024的常用端口的。如果开发中需要用到80端口, 就要设置端口转发。</a></p><p><img src="`+l+'" alt=""></p>',12),t=[o];function c(i,r,d,u,y,h){return e(),a("div",null,t)}const b=s(p,[["render",c]]);export{g as __pageData,b as default};
