import{_ as s,o as e,c as a,Q as n}from"./chunks/framework.0f4e1e9e.js";const _=JSON.parse('{"title":"管理后台 之 页面开发","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/6 后台管理系统/5 页面开发/README.md","filePath":"frontend/6 后台管理系统/5 页面开发/README.md"}'),l={name:"frontend/6 后台管理系统/5 页面开发/README.md"},p=n(`<h1 id="管理后台-之-页面开发" tabindex="-1">管理后台 之 页面开发 <a class="header-anchor" href="#管理后台-之-页面开发" aria-label="Permalink to &quot;管理后台 之 页面开发&quot;">​</a></h1><p>管理后台通常都是表的增、删、改、查、数据展示，再简化一点就是读(查记录列表、查记录详情、查表数据详情)和写(增加、更新、删除)。针对这些场景总结CRUD页面如何写。</p><h2 id="场景一-【业务管理】菜单配置与页面开发" tabindex="-1">场景一：【业务管理】菜单配置与页面开发 <a class="header-anchor" href="#场景一-【业务管理】菜单配置与页面开发" aria-label="Permalink to &quot;场景一：【业务管理】菜单配置与页面开发&quot;">​</a></h2><p>通常在管理后台要增加【某某某业务】管理，都会在管理后台先配置【某某某管理】菜单，比如【司机管理】、【车辆管理】，然后在页面中对某业务的增、删、改、查。</p><p>下面拿【基础数据】-&gt;【司机管理】举例做介绍。【司机管理】菜单配置可以有多种配置方式，介绍两种常见的方式。</p><p><strong>方式一：</strong></p><p>只配置一个页面<code>basic_center/driver_manage</code>，进入这个页面默认是搜索查询列表，增加、更新、删除是这个菜单中的一个状态，可以通过事件总线模式切换状态。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;bst-page&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;List ref=&quot;List&quot;&gt;&lt;/List&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;Create ref=&quot;Create&quot;&gt;&lt;/Create&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  import List from &#39;./list&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  import Create from &quot;./create&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  export default {</span></span>
<span class="line"><span style="color:#e1e4e8;">    name: &quot;index&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    components: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      Create,</span></span>
<span class="line"><span style="color:#e1e4e8;">      List,</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    created() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.$root.$on(&#39;message_template_cretea&#39;, this.onMessageTemplateListener)</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.$root.$on(&#39;message_template_update&#39;, this.onMessageTemplateListener)</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    methods: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      onMessageTemplateListener({type, data}) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        switch (type) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          case &#39;add&#39;:</span></span>
<span class="line"><span style="color:#e1e4e8;">            if(this.$refs.Create!==undefined) {</span></span>
<span class="line"><span style="color:#e1e4e8;">              this.$refs.Create.show().fill({action_type: &#39;add&#39;,action_data:data});</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            break;</span></span>
<span class="line"><span style="color:#e1e4e8;">          case &#39;update&#39;:</span></span>
<span class="line"><span style="color:#e1e4e8;">            if(this.$refs.Create!==undefined) {</span></span>
<span class="line"><span style="color:#e1e4e8;">              this.$refs.Create.show().fill({action_type: &#39;update&#39;,action_data:data});</span></span>
<span class="line"><span style="color:#e1e4e8;">            }</span></span>
<span class="line"><span style="color:#e1e4e8;">            break;</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;bst-page&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;List ref=&quot;List&quot;&gt;&lt;/List&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;Create ref=&quot;Create&quot;&gt;&lt;/Create&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">  import List from &#39;./list&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  import Create from &quot;./create&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  export default {</span></span>
<span class="line"><span style="color:#24292e;">    name: &quot;index&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    components: {</span></span>
<span class="line"><span style="color:#24292e;">      Create,</span></span>
<span class="line"><span style="color:#24292e;">      List,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    created() {</span></span>
<span class="line"><span style="color:#24292e;">      this.$root.$on(&#39;message_template_cretea&#39;, this.onMessageTemplateListener)</span></span>
<span class="line"><span style="color:#24292e;">      this.$root.$on(&#39;message_template_update&#39;, this.onMessageTemplateListener)</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    methods: {</span></span>
<span class="line"><span style="color:#24292e;">      onMessageTemplateListener({type, data}) {</span></span>
<span class="line"><span style="color:#24292e;">        switch (type) {</span></span>
<span class="line"><span style="color:#24292e;">          case &#39;add&#39;:</span></span>
<span class="line"><span style="color:#24292e;">            if(this.$refs.Create!==undefined) {</span></span>
<span class="line"><span style="color:#24292e;">              this.$refs.Create.show().fill({action_type: &#39;add&#39;,action_data:data});</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            break;</span></span>
<span class="line"><span style="color:#24292e;">          case &#39;update&#39;:</span></span>
<span class="line"><span style="color:#24292e;">            if(this.$refs.Create!==undefined) {</span></span>
<span class="line"><span style="color:#24292e;">              this.$refs.Create.show().fill({action_type: &#39;update&#39;,action_data:data});</span></span>
<span class="line"><span style="color:#24292e;">            }</span></span>
<span class="line"><span style="color:#24292e;">            break;</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><p><strong>方式二：</strong></p><p>配置多个页面路径 <code>basic_center/driver_manage</code>司机列表查询页， <code>basic_center/driver_manage/create</code>司机增加页面， <code>basic_center/driver_manage/update</code>司机更新页面， <code>basic_center/driver_manage/detail</code>司机详情页面， 【司机管理】菜单路径指向<code>basic_center/driver_manage</code>，其他路径设置菜单隐藏。</p><p>不同的页面通过路由切换来展示，例如要跳转到创建<code>this.$rooter.push(&#39;basic_center/driver_manage/create&#39;)</code>,创建成功再通过<code>this.$rooter.push(&#39;basic_center/driver_manage&#39;)</code>跳回到列表查询页面。</p><h2 id="场景二-查询列表页面开发" tabindex="-1">场景二：查询列表页面开发 <a class="header-anchor" href="#场景二-查询列表页面开发" aria-label="Permalink to &quot;场景二：查询列表页面开发&quot;">​</a></h2><p><a href="https://best-chatai.tz12306.com/element-ui-best-doc/example/search.html" target="_blank" rel="noreferrer">查询场景开发示例</a></p><h2 id="场景三-新增、更新页面开发" tabindex="-1">场景三：新增、更新页面开发 <a class="header-anchor" href="#场景三-新增、更新页面开发" aria-label="Permalink to &quot;场景三：新增、更新页面开发&quot;">​</a></h2><p><a href="https://best-chatai.tz12306.com/element-ui-best-doc/example/create.html" target="_blank" rel="noreferrer">新增、更新场景开发示例</a></p><h2 id="场景四-删除开发" tabindex="-1">场景四：删除开发 <a class="header-anchor" href="#场景四-删除开发" aria-label="Permalink to &quot;场景四：删除开发&quot;">​</a></h2><p><a href="https://best-chatai.tz12306.com/element-ui-best-doc/example/button-async.html" target="_blank" rel="noreferrer">删除场景开发示例</a></p>`,17),t=[p];function o(c,r,i,d,y,h){return e(),a("div",null,t)}const g=s(l,[["render",o]]);export{_ as __pageData,g as default};
