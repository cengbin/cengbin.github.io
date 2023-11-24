import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.2eebfdfc.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/笔记/README.md","filePath":"backend/笔记/README.md"}'),o={name:"backend/笔记/README.md"},t=e(`<h2 id="分页接口返回数据设计" tabindex="-1">分页接口返回数据设计： <a class="header-anchor" href="#分页接口返回数据设计" aria-label="Permalink to &quot;分页接口返回数据设计：&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;code&quot;: &quot;0000&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;currentPage&quot;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;data&quot;:null,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;endIndex&quot;: 50,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;firstPage&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;lastPage&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;nextPage&quot;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;pageCount&quot;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;pageSize&quot;: 50,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;previousPage&quot;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;startIndex&quot;: 0,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;totalCount&quot;: 8,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;unit&quot;: &quot;条&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    “message”: &quot;成功&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;requestId&quot;: &#39;35235234&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    &quot;code&quot;: &quot;0000&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;data&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;currentPage&quot;: 1,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;data&quot;:null,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;endIndex&quot;: 50,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;firstPage&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;lastPage&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;nextPage&quot;: 1,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;pageCount&quot;: 1,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;pageSize&quot;: 50,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;previousPage&quot;: 1,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;startIndex&quot;: 0,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;totalCount&quot;: 8,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;unit&quot;: &quot;条&quot;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    “message”: &quot;成功&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;requestId&quot;: &#39;35235234&#39;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div>`,2),l=[t];function p(c,u,r,q,i,d){return n(),a("div",null,l)}const g=s(o,[["render",p]]);export{_ as __pageData,g as default};
