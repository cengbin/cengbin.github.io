import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.6ae5a3d9.js";const h=JSON.parse('{"title":"Element-ui el-dialog组件应用总结","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/53 如何写CRUD页面总结/README.md","filePath":"frontend/53 如何写CRUD页面总结/README.md"}'),t={name:"frontend/53 如何写CRUD页面总结/README.md"},l=n(`<h1 id="element-ui-el-dialog组件应用总结" tabindex="-1">Element-ui el-dialog组件应用总结 <a class="header-anchor" href="#element-ui-el-dialog组件应用总结" aria-label="Permalink to &quot;Element-ui el-dialog组件应用总结&quot;">​</a></h1><h2 id="场景一" tabindex="-1">场景一 <a class="header-anchor" href="#场景一" aria-label="Permalink to &quot;场景一&quot;">​</a></h2><p>需求：</p><p>实现活动：新增、查询、编辑、删除。</p><p>实现服务器：新增、查询、编辑、删除。</p><p>新增活动需要选择对应的服务器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;page&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;module&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;form type=&#39;search&#39;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;/form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/module&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;module&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;table&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			&lt;table-header&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">				&lt;button&gt;新增活动&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">				&lt;button&gt;新增服务器&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			&lt;/table-header&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;/table&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/module&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;el-dialog ref=&#39;add-activity&#39;&gt;&lt;/el-dialog&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;el-dialog ref=&#39;add-service&#39;&gt;&lt;/el-dialog&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;page&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;page&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;module&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;form type=&#39;search&#39;&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/form&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/module&gt;</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	&lt;module&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;table&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;table-header&gt;</span></span>
<span class="line"><span style="color:#24292e;">				&lt;button&gt;新增活动&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">				&lt;button&gt;新增服务器&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;/table-header&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/table&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/module&gt;</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	&lt;el-dialog ref=&#39;add-activity&#39;&gt;&lt;/el-dialog&gt;</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	&lt;el-dialog ref=&#39;add-service&#39;&gt;&lt;/el-dialog&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;page&gt;</span></span></code></pre></div><h2 id="优化之后" tabindex="-1">优化之后 <a class="header-anchor" href="#优化之后" aria-label="Permalink to &quot;优化之后&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;page&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;module&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;form type=&#39;search&#39;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;/form&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/module&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;module&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;table&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			&lt;table-header&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">				&lt;button&gt;新增&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			&lt;/table-header&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;/table&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/module&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;activity ref=&#39;activity&#39;&gt;&lt;/activity&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;service ref=&#39;service&#39;&gt;&lt;/service&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;page&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;page&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;module&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;form type=&#39;search&#39;&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/form&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/module&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	&lt;module&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;table&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;table-header&gt;</span></span>
<span class="line"><span style="color:#24292e;">				&lt;button&gt;新增&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">			&lt;/table-header&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/table&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/module&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	&lt;activity ref=&#39;activity&#39;&gt;&lt;/activity&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	&lt;service ref=&#39;service&#39;&gt;&lt;/service&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;page&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">this.$refs[&#39;activity&#39;].show(type,data);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">this.$refs[&#39;activity&#39;].show(type,data);</span></span></code></pre></div>`,10),p=[l];function o(c,i,r,g,d,y){return a(),e("div",null,p)}const b=s(t,[["render",o]]);export{h as __pageData,b as default};
