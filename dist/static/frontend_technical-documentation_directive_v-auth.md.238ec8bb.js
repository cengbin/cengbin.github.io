import{_ as t,o as s,c as n,Q as a}from"./chunks/framework.0f4e1e9e.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/technical-documentation/directive/v-auth.md","filePath":"frontend/technical-documentation/directive/v-auth.md"}'),e={name:"frontend/technical-documentation/directive/v-auth.md"},l=a(`<h3 id="v-auth-指令" tabindex="-1">v-auth 指令 <a class="header-anchor" href="#v-auth-指令" aria-label="Permalink to &quot;v-auth 指令&quot;">​</a></h3><h3 id="使用示例" tabindex="-1">使⽤示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使⽤示例&quot;">​</a></h3><p>功能权限、筛选权限使⽤指令⽅式控制</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;!--1.功能权限--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;!--此权限后台配置了，会根据当前⽤户是否拥有权限渲染--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;el-button v-auth=&quot;&#39;shan_chu&#39;&quot;&gt;删除&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;!--此权限后台⽆配置,则不控制权限--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;el-button v-auth=&quot;&#39;custom&#39;&quot;&gt;未配置权限&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     </span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;!--2. 筛选权限--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;el-button v-auth:filter=&quot;&#39;fen_zu&#39;&quot;&gt;分组&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;!--此权限后台⽆配置,则不控制权限--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;el-button v-auth:filter=&quot;&#39;custom&#39;&quot;&gt;未配置filter权限&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     </span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;!--3.筛选权限外层包裹着BaseQueryFormLayout组件--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;BaseQueryFormLayout :spans=&quot;[7, 6, 5, 6]&quot;&gt; &lt;el-form-item v-if=&quot;showAfChannel&quot; label=&quot;测试&quot;&gt; &lt;el-input&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">     &lt;/el-form-item&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/BaseQueryFormLayout&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;!--1.功能权限--&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;!--此权限后台配置了，会根据当前⽤户是否拥有权限渲染--&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;el-button v-auth=&quot;&#39;shan_chu&#39;&quot;&gt;删除&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;!--此权限后台⽆配置,则不控制权限--&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;el-button v-auth=&quot;&#39;custom&#39;&quot;&gt;未配置权限&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">     </span></span>
<span class="line"><span style="color:#24292e;">     &lt;!--2. 筛选权限--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;el-button v-auth:filter=&quot;&#39;fen_zu&#39;&quot;&gt;分组&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;!--此权限后台⽆配置,则不控制权限--&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;el-button v-auth:filter=&quot;&#39;custom&#39;&quot;&gt;未配置filter权限&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">     </span></span>
<span class="line"><span style="color:#24292e;">     &lt;!--3.筛选权限外层包裹着BaseQueryFormLayout组件--&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;BaseQueryFormLayout :spans=&quot;[7, 6, 5, 6]&quot;&gt; &lt;el-form-item v-if=&quot;showAfChannel&quot; label=&quot;测试&quot;&gt; &lt;el-input&gt;&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#24292e;">     &lt;/el-form-item&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/BaseQueryFormLayout&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span></code></pre></div>`,4),o=[l];function p(c,u,r,i,g,h){return s(),n("div",null,o)}const m=t(e,[["render",p]]);export{d as __pageData,m as default};
