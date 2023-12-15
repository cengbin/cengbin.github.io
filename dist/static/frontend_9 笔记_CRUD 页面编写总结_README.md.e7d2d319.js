import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const q=JSON.parse('{"title":"写CRUD页面总结","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/9 笔记/CRUD 页面编写总结/README.md","filePath":"frontend/9 笔记/CRUD 页面编写总结/README.md"}'),l={name:"frontend/9 笔记/CRUD 页面编写总结/README.md"},t=e(`<h1 id="写crud页面总结" tabindex="-1">写CRUD页面总结 <a class="header-anchor" href="#写crud页面总结" aria-label="Permalink to &quot;写CRUD页面总结&quot;">​</a></h1><h2 id="场景一-数据-新增、编辑" tabindex="-1">场景一：数据 新增、编辑 <a class="header-anchor" href="#场景一-数据-新增、编辑" aria-label="Permalink to &quot;场景一：数据 新增、编辑&quot;">​</a></h2><h3 id="优化之前" tabindex="-1">优化之前 <a class="header-anchor" href="#优化之前" aria-label="Permalink to &quot;优化之前&quot;">​</a></h3><div class="language-page.vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">page.vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;page&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;button&gt;新增活动&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;button&gt;新增服务器&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;el-dialog v-if=&quot;addActivityVisible&quot; ref=&#39;add-activity&#39;&gt;...&lt;/el-dialog&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;el-dialog v-if=&quot;addServiceVisible&quot; ref=&#39;add-service&#39;&gt;...&lt;/el-dialog&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;page&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">	data(){</span></span>
<span class="line"><span style="color:#e1e4e8;">		return {</span></span>
<span class="line"><span style="color:#e1e4e8;">			addActivityVisible:false,</span></span>
<span class="line"><span style="color:#e1e4e8;">			addServiceVisible:false,</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">	onClickAddActivity(){</span></span>
<span class="line"><span style="color:#e1e4e8;">		this.addActivityVisible=true;</span></span>
<span class="line"><span style="color:#e1e4e8;">		...</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;page&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;button&gt;新增活动&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;button&gt;新增服务器&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		&lt;el-dialog v-if=&quot;addActivityVisible&quot; ref=&#39;add-activity&#39;&gt;...&lt;/el-dialog&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;el-dialog v-if=&quot;addServiceVisible&quot; ref=&#39;add-service&#39;&gt;...&lt;/el-dialog&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;page&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">	data(){</span></span>
<span class="line"><span style="color:#24292e;">		return {</span></span>
<span class="line"><span style="color:#24292e;">			addActivityVisible:false,</span></span>
<span class="line"><span style="color:#24292e;">			addServiceVisible:false,</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">	onClickAddActivity(){</span></span>
<span class="line"><span style="color:#24292e;">		this.addActivityVisible=true;</span></span>
<span class="line"><span style="color:#24292e;">		...</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="优化之后" tabindex="-1">优化之后 <a class="header-anchor" href="#优化之后" aria-label="Permalink to &quot;优化之后&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;page&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;button&gt;新增&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;activity ref=&#39;activity&#39;&gt;&lt;/activity&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;page&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">	onClickAddActivity(){</span></span>
<span class="line"><span style="color:#e1e4e8;">		this.$refs[&#39;activity&#39;].show(type,data);</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;page&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;button&gt;新增&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">		&lt;activity ref=&#39;activity&#39;&gt;&lt;/activity&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;page&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default {</span></span>
<span class="line"><span style="color:#24292e;">	onClickAddActivity(){</span></span>
<span class="line"><span style="color:#24292e;">		this.$refs[&#39;activity&#39;].show(type,data);</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="场景二-列表-增加、删除" tabindex="-1">场景二：列表 增加、删除 <a class="header-anchor" href="#场景二-列表-增加、删除" aria-label="Permalink to &quot;场景二：列表 增加、删除&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;div v-for=&quot;(reward,index) in info.rewards&quot; :key=&quot;index&quot; class=&quot;condition-group&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;el-input v-model=&quot;reward.product_id&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	          placeholder=&quot;请输入奖励ID&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	          :disabled=&quot;server_opening&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	          style=&quot;width:160px;margin-right: 8px;&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;el-input v-model=&quot;reward.amount&quot; placeholder=&quot;请输入数值&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	          :disabled=&quot;server_opening&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	          style=&quot;width:160px;margin-right: 8px;&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;el-button v-if=&quot;info.rewards.length&gt;1 &amp;&amp; !server_opening&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           class=&quot;button-custom&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           icon=&quot;el-icon-minus2&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           @click=&quot;onClickReward(&#39;delete&#39;,index)&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;el-button v-if=&quot;index===info.rewards.length-1 &amp;&amp; !server_opening&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           icon=&quot;el-icon-plus2&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           class=&quot;button-custom&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	           @click=&quot;onClickReward(&#39;add&#39;,index)&quot;/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">onClickReward(type, index) {</span></span>
<span class="line"><span style="color:#e1e4e8;">	if (type === &#39;add&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		this.info.rewards.push({</span></span>
<span class="line"><span style="color:#e1e4e8;">			&quot;product_id&quot;: null,</span></span>
<span class="line"><span style="color:#e1e4e8;">			&quot;amount&quot;: null,</span></span>
<span class="line"><span style="color:#e1e4e8;">		})</span></span>
<span class="line"><span style="color:#e1e4e8;">	} else if (type === &#39;delete&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">		this.info.rewards.splice(index, 1)</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;div v-for=&quot;(reward,index) in info.rewards&quot; :key=&quot;index&quot; class=&quot;condition-group&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;el-input v-model=&quot;reward.product_id&quot;</span></span>
<span class="line"><span style="color:#24292e;">	          placeholder=&quot;请输入奖励ID&quot;</span></span>
<span class="line"><span style="color:#24292e;">	          :disabled=&quot;server_opening&quot;</span></span>
<span class="line"><span style="color:#24292e;">	          style=&quot;width:160px;margin-right: 8px;&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;el-input v-model=&quot;reward.amount&quot; placeholder=&quot;请输入数值&quot;</span></span>
<span class="line"><span style="color:#24292e;">	          :disabled=&quot;server_opening&quot;</span></span>
<span class="line"><span style="color:#24292e;">	          style=&quot;width:160px;margin-right: 8px;&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;el-button v-if=&quot;info.rewards.length&gt;1 &amp;&amp; !server_opening&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           class=&quot;button-custom&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           icon=&quot;el-icon-minus2&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           @click=&quot;onClickReward(&#39;delete&#39;,index)&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;el-button v-if=&quot;index===info.rewards.length-1 &amp;&amp; !server_opening&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           icon=&quot;el-icon-plus2&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           class=&quot;button-custom&quot;</span></span>
<span class="line"><span style="color:#24292e;">	           @click=&quot;onClickReward(&#39;add&#39;,index)&quot;/&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">onClickReward(type, index) {</span></span>
<span class="line"><span style="color:#24292e;">	if (type === &#39;add&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">		this.info.rewards.push({</span></span>
<span class="line"><span style="color:#24292e;">			&quot;product_id&quot;: null,</span></span>
<span class="line"><span style="color:#24292e;">			&quot;amount&quot;: null,</span></span>
<span class="line"><span style="color:#24292e;">		})</span></span>
<span class="line"><span style="color:#24292e;">	} else if (type === &#39;delete&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">		this.info.rewards.splice(index, 1)</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><h3 id="场景三-表单提交" tabindex="-1">场景三：表单提交 <a class="header-anchor" href="#场景三-表单提交" aria-label="Permalink to &quot;场景三：表单提交&quot;">​</a></h3><h5 id="前端表单校验设计" tabindex="-1">前端表单校验设计： <a class="header-anchor" href="#前端表单校验设计" aria-label="Permalink to &quot;前端表单校验设计：&quot;">​</a></h5><p>职责：前端做非空、录入格式等等基本格式校验。服务端对业务逻辑的正确性进行校验。</p><p>理由：考虑到如果有业务逻辑调整只需要服务端一端修改校验逻辑即可，前端不需要做业务逻辑校验调整。</p>`,12),p=[t];function o(c,i,r,d,u,y){return n(),a("div",null,p)}const h=s(l,[["render",o]]);export{q as __pageData,h as default};
