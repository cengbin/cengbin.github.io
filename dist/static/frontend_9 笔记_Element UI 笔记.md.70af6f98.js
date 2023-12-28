import{_ as r,C as n,o as u,c as d,k as l,a as s,H as e,Q as t}from"./chunks/framework.0f4e1e9e.js";const C=JSON.parse('{"title":"Element UI 笔记","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/9 笔记/Element UI 笔记.md","filePath":"frontend/9 笔记/Element UI 笔记.md"}'),y={name:"frontend/9 笔记/Element UI 笔记.md"},g=t(`<h1 id="element-ui-笔记" tabindex="-1">Element UI 笔记 <a class="header-anchor" href="#element-ui-笔记" aria-label="Permalink to &quot;Element UI 笔记&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Vue.use(Element, {</span></span>
<span class="line"><span style="color:#e1e4e8;"> size: &#39;small&#39;, // 修改组件的默认尺寸</span></span>
<span class="line"><span style="color:#e1e4e8;"> zIndex: 3000, // 设置弹框的初始 z-index</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Vue.use(Element, {</span></span>
<span class="line"><span style="color:#24292e;"> size: &#39;small&#39;, // 修改组件的默认尺寸</span></span>
<span class="line"><span style="color:#24292e;"> zIndex: 3000, // 设置弹框的初始 z-index</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>参考：<a href="https://element.eleme.cn/2.14/#/zh-CN/component/quickstart#quan-ju-pei-zhi" target="_blank" rel="noreferrer">https://element.eleme.cn/2.14/#/zh-CN/component/quickstart#quan-ju-pei-zhi</a></p><h2 id="el-table" tabindex="-1"><code>&lt;el-table/&gt;</code> <a class="header-anchor" href="#el-table" aria-label="Permalink to &quot;\`&lt;el-table/&gt;\`&quot;">​</a></h2><p>支持树类型的数据的显示。 当 row 中包含 children 字段时，被视为树形数据。 渲染树形数据时，必须要指定 row-key。支持子节点数据异步加载。 设置 Table 的 lazy 属性为 true 与加载函数 load 。 通过指定 row 中的 hasChildren 字段来指定哪些行是包含子节点。children 与 hasChildren 都可以通过 tree-props 配置。</p><h2 id="el-from" tabindex="-1"><code>&lt;el-from/&gt;</code> <a class="header-anchor" href="#el-from" aria-label="Permalink to &quot;\`&lt;el-from/&gt;\`&quot;">​</a></h2><p>Form 的 model 属性是给表单验证的时候用的， 调用From的validate 方法的时候，会通过FormItem 的 prop属性名 去model对象上取prop属性的值，然后进行FormItem的rules规则校验。</p>`,7),m=t(`<h4 id="validator-自定义校验规则" tabindex="-1">validator 自定义校验规则 <a class="header-anchor" href="#validator-自定义校验规则" aria-label="Permalink to &quot;validator 自定义校验规则&quot;">​</a></h4><p><a href="https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze" target="_blank" rel="noreferrer">https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">data() {</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 如果要在校验规则中访问this，就这样写。</span></span>
<span class="line"><span style="color:#e1e4e8;">      var validatePass = (rule, value, callback) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if (value === &#39;&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">          callback(new Error(&#39;请输入密码&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;">        } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">          if (this.ruleForm.checkPass !== &#39;&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">            this.$refs.ruleForm.validateField(&#39;checkPass&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">          }</span></span>
<span class="line"><span style="color:#e1e4e8;">          callback();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">      };</span></span>
<span class="line"><span style="color:#e1e4e8;">      </span></span>
<span class="line"><span style="color:#e1e4e8;">      return {</span></span>
<span class="line"><span style="color:#e1e4e8;">      		rules: {</span></span>
<span class="line"><span style="color:#e1e4e8;">				settingName: [</span></span>
<span class="line"><span style="color:#e1e4e8;">					{required: true, message: &quot;必填项&quot;},</span></span>
<span class="line"><span style="color:#e1e4e8;">					{</span></span>
<span class="line"><span style="color:#e1e4e8;">						validator(rule, value, callback) {</span></span>
<span class="line"><span style="color:#e1e4e8;">							console.log({rule, value});</span></span>
<span class="line"><span style="color:#e1e4e8;">							if (value.length &gt; 10) {</span></span>
<span class="line"><span style="color:#e1e4e8;">								return callback(new Error(&#39;名字最多不能超过10个字符&#39;));</span></span>
<span class="line"><span style="color:#e1e4e8;">							}</span></span>
<span class="line"><span style="color:#e1e4e8;">							return callback()</span></span>
<span class="line"><span style="color:#e1e4e8;">						},</span></span>
<span class="line"><span style="color:#e1e4e8;">						trigger: &#39;blur&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">					}</span></span>
<span class="line"><span style="color:#e1e4e8;">				],</span></span>
<span class="line"><span style="color:#e1e4e8;">				settingUri: [</span></span>
<span class="line"><span style="color:#e1e4e8;">					{required: true, message: &#39;必填项&#39;},</span></span>
<span class="line"><span style="color:#e1e4e8;">					{validator: validatePass, trigger: &#39;blur&#39;}</span></span>
<span class="line"><span style="color:#e1e4e8;">				],</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">		},</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">data() {</span></span>
<span class="line"><span style="color:#24292e;">      // 如果要在校验规则中访问this，就这样写。</span></span>
<span class="line"><span style="color:#24292e;">      var validatePass = (rule, value, callback) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        if (value === &#39;&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">          callback(new Error(&#39;请输入密码&#39;));</span></span>
<span class="line"><span style="color:#24292e;">        } else {</span></span>
<span class="line"><span style="color:#24292e;">          if (this.ruleForm.checkPass !== &#39;&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">            this.$refs.ruleForm.validateField(&#39;checkPass&#39;);</span></span>
<span class="line"><span style="color:#24292e;">          }</span></span>
<span class="line"><span style="color:#24292e;">          callback();</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">      };</span></span>
<span class="line"><span style="color:#24292e;">      </span></span>
<span class="line"><span style="color:#24292e;">      return {</span></span>
<span class="line"><span style="color:#24292e;">      		rules: {</span></span>
<span class="line"><span style="color:#24292e;">				settingName: [</span></span>
<span class="line"><span style="color:#24292e;">					{required: true, message: &quot;必填项&quot;},</span></span>
<span class="line"><span style="color:#24292e;">					{</span></span>
<span class="line"><span style="color:#24292e;">						validator(rule, value, callback) {</span></span>
<span class="line"><span style="color:#24292e;">							console.log({rule, value});</span></span>
<span class="line"><span style="color:#24292e;">							if (value.length &gt; 10) {</span></span>
<span class="line"><span style="color:#24292e;">								return callback(new Error(&#39;名字最多不能超过10个字符&#39;));</span></span>
<span class="line"><span style="color:#24292e;">							}</span></span>
<span class="line"><span style="color:#24292e;">							return callback()</span></span>
<span class="line"><span style="color:#24292e;">						},</span></span>
<span class="line"><span style="color:#24292e;">						trigger: &#39;blur&#39;</span></span>
<span class="line"><span style="color:#24292e;">					}</span></span>
<span class="line"><span style="color:#24292e;">				],</span></span>
<span class="line"><span style="color:#24292e;">				settingUri: [</span></span>
<span class="line"><span style="color:#24292e;">					{required: true, message: &#39;必填项&#39;},</span></span>
<span class="line"><span style="color:#24292e;">					{validator: validatePass, trigger: &#39;blur&#39;}</span></span>
<span class="line"><span style="color:#24292e;">				],</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">		},</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span></code></pre></div><h2 id="el-input" tabindex="-1"><code>&lt;el-input/&gt;</code> <a class="header-anchor" href="#el-input" aria-label="Permalink to &quot;\`&lt;el-input/&gt;\`&quot;">​</a></h2><ul><li>.number - 输入字符串转为有效的数字</li><li>.trim - 输入首尾空格过滤</li></ul><p><code>&lt;el-input v-model.trim.number=&quot;item.property.skill[0]”/&gt;</code></p><p>// 监听原生事件，可以拿到event对象，通过event.target可以获取到目标对象</p><p><code>&lt;el-input @change.native=&quot;onChangeInputNumber($event,item)&quot;/&gt;</code></p><p>// 显示最大输入字符数量、监听input事件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;el-input v-model.trim=&quot;form.settingUri&quot; maxlength=&quot;10&quot;  show-word-limit placeholder=&quot;请输入&quot; @input=&quot;onInputUri&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;!--&lt;template slot=&quot;prepend&quot;&gt;Http://&lt;/template&gt;--&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;template slot=&quot;append&quot;&gt;.merchant.tz12306.com&lt;/template&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">onInputUri(value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this.form.settingUri = value.replace(/[^A-z]/g, &#39;&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;el-input v-model.trim=&quot;form.settingUri&quot; maxlength=&quot;10&quot;  show-word-limit placeholder=&quot;请输入&quot; @input=&quot;onInputUri&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;!--&lt;template slot=&quot;prepend&quot;&gt;Http://&lt;/template&gt;--&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;template slot=&quot;append&quot;&gt;.merchant.tz12306.com&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/el-input&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">onInputUri(value) {</span></span>
<span class="line"><span style="color:#24292e;">  this.form.settingUri = value.replace(/[^A-z]/g, &#39;&#39;)</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><p>// 只能输入手机号</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;el-input v-model.trim=&quot;form.phone&quot; maxlength=&quot;11&quot;  show-word-limit placeholder=&quot;请输入手机号&quot; @input=&quot;onInputPhone&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">onInputPhone(value) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  this. form.phone = value.replace(/[^0-9]/g, &#39;&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;el-input v-model.trim=&quot;form.phone&quot; maxlength=&quot;11&quot;  show-word-limit placeholder=&quot;请输入手机号&quot; @input=&quot;onInputPhone&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">onInputPhone(value) {</span></span>
<span class="line"><span style="color:#24292e;">  this. form.phone = value.replace(/[^0-9]/g, &#39;&#39;)</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><h2 id="el-select" tabindex="-1"><code>&lt;el-select/&gt;</code> <a class="header-anchor" href="#el-select" aria-label="Permalink to &quot;\`&lt;el-select/&gt;\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 备选项进行分组展示</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;el-select v-model=&quot;value&quot; placeholder=&quot;请选择&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;el-option-group</span></span>
<span class="line"><span style="color:#e1e4e8;">      v-for=&quot;group in options&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      :key=&quot;group.label&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      :label=&quot;group.label&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;el-option</span></span>
<span class="line"><span style="color:#e1e4e8;">        v-for=&quot;item in group.options&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        :key=&quot;item.value&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        :label=&quot;item.label&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">        :value=&quot;item.value&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      &lt;/el-option&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/el-option-group&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/el-select&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 备选项进行分组展示</span></span>
<span class="line"><span style="color:#24292e;">&lt;el-select v-model=&quot;value&quot; placeholder=&quot;请选择&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;el-option-group</span></span>
<span class="line"><span style="color:#24292e;">      v-for=&quot;group in options&quot;</span></span>
<span class="line"><span style="color:#24292e;">      :key=&quot;group.label&quot;</span></span>
<span class="line"><span style="color:#24292e;">      :label=&quot;group.label&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;el-option</span></span>
<span class="line"><span style="color:#24292e;">        v-for=&quot;item in group.options&quot;</span></span>
<span class="line"><span style="color:#24292e;">        :key=&quot;item.value&quot;</span></span>
<span class="line"><span style="color:#24292e;">        :label=&quot;item.label&quot;</span></span>
<span class="line"><span style="color:#24292e;">        :value=&quot;item.value&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">      &lt;/el-option&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/el-option-group&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/el-select&gt;</span></span></code></pre></div><h2 id="el-date-picker" tabindex="-1"><code>&lt;el-date-picker/&gt;</code> <a class="header-anchor" href="#el-date-picker" aria-label="Permalink to &quot;\`&lt;el-date-picker/&gt;\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 时间区间</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;el-date-picker</span></span>
<span class="line"><span style="color:#e1e4e8;">  v-model=&quot;form.time&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  class=&quot;create-time&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  type=&quot;datetimerange&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  value-format=&quot;timestamp&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  placeholder=&quot;datetime&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  :clearable=&quot;false&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  :default-time=&quot;[&#39;00:00:00&#39;, &#39;23:59:59&#39;]&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  range-separator=&quot;～&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  start-placeholder=&quot;开始日期&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  end-placeholder=&quot;结束日期&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">/&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// time: [new Date(), new Date(new Date().valueOf() + 24 * 60 * 60 * 1000)],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 时间区间</span></span>
<span class="line"><span style="color:#24292e;">&lt;el-date-picker</span></span>
<span class="line"><span style="color:#24292e;">  v-model=&quot;form.time&quot;</span></span>
<span class="line"><span style="color:#24292e;">  class=&quot;create-time&quot;</span></span>
<span class="line"><span style="color:#24292e;">  type=&quot;datetimerange&quot;</span></span>
<span class="line"><span style="color:#24292e;">  value-format=&quot;timestamp&quot;</span></span>
<span class="line"><span style="color:#24292e;">  placeholder=&quot;datetime&quot;</span></span>
<span class="line"><span style="color:#24292e;">  :clearable=&quot;false&quot;</span></span>
<span class="line"><span style="color:#24292e;">  :default-time=&quot;[&#39;00:00:00&#39;, &#39;23:59:59&#39;]&quot;</span></span>
<span class="line"><span style="color:#24292e;">  range-separator=&quot;～&quot;</span></span>
<span class="line"><span style="color:#24292e;">  start-placeholder=&quot;开始日期&quot;</span></span>
<span class="line"><span style="color:#24292e;">  end-placeholder=&quot;结束日期&quot;</span></span>
<span class="line"><span style="color:#24292e;">/&gt;</span></span>
<span class="line"><span style="color:#24292e;">// time: [new Date(), new Date(new Date().valueOf() + 24 * 60 * 60 * 1000)],</span></span></code></pre></div><h2 id="el-dropdown" tabindex="-1"><code>&lt;el-dropdown/&gt;</code> <a class="header-anchor" href="#el-dropdown" aria-label="Permalink to &quot;\`&lt;el-dropdown/&gt;\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;el-dropdown</span></span>
<span class="line"><span style="color:#e1e4e8;">  split-button</span></span>
<span class="line"><span style="color:#e1e4e8;">  type=&quot;primary&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  trigger=&quot;click&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  @click=&quot;onClickTemplateOperation(&#39;email-template-list&#39;)&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  @command=&quot;onClickTemplateOperation&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  模板列表</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;el-dropdown-item command=&quot;email-template-create&quot;&gt;新建模板&lt;/el-dropdown-item&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/el-dropdown-menu&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/el-dropdown&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;el-dropdown</span></span>
<span class="line"><span style="color:#24292e;">  split-button</span></span>
<span class="line"><span style="color:#24292e;">  type=&quot;primary&quot;</span></span>
<span class="line"><span style="color:#24292e;">  trigger=&quot;click&quot;</span></span>
<span class="line"><span style="color:#24292e;">  @click=&quot;onClickTemplateOperation(&#39;email-template-list&#39;)&quot;</span></span>
<span class="line"><span style="color:#24292e;">  @command=&quot;onClickTemplateOperation&quot;</span></span>
<span class="line"><span style="color:#24292e;">&gt;</span></span>
<span class="line"><span style="color:#24292e;">  模板列表</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-dropdown-menu slot=&quot;dropdown&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;el-dropdown-item command=&quot;email-template-create&quot;&gt;新建模板&lt;/el-dropdown-item&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/el-dropdown-menu&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/el-dropdown&gt;</span></span></code></pre></div><h2 id="el-button" tabindex="-1"><code>&lt;el-button/&gt;</code> <a class="header-anchor" href="#el-button" aria-label="Permalink to &quot;\`&lt;el-button/&gt;\`&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;el-row&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-button&gt;默认按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-button type=&quot;primary&quot;&gt;主要按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-button type=&quot;success&quot;&gt;成功按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-button type=&quot;info&quot;&gt;信息按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-button type=&quot;warning&quot;&gt;警告按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;el-button type=&quot;danger&quot;&gt;危险按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/el-row&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;el-row&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-button&gt;默认按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-button type=&quot;primary&quot;&gt;主要按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-button type=&quot;success&quot;&gt;成功按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-button type=&quot;info&quot;&gt;信息按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-button type=&quot;warning&quot;&gt;警告按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;el-button type=&quot;danger&quot;&gt;危险按钮&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/el-row&gt;</span></span></code></pre></div><p>// 红色删除文本按钮</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;el-button type=&quot;text&quot; size=&quot;small&quot; @click=&quot;onClickOperation(&#39;delete&#39;,scope.row)&quot; class=&quot;red&quot;&gt;删除&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.red {</span></span>
<span class="line"><span style="color:#e1e4e8;">  color: #f56c6c;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;el-button type=&quot;text&quot; size=&quot;small&quot; @click=&quot;onClickOperation(&#39;delete&#39;,scope.row)&quot; class=&quot;red&quot;&gt;删除&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.red {</span></span>
<span class="line"><span style="color:#24292e;">  color: #f56c6c;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="loading-加载" tabindex="-1">Loading 加载 <a class="header-anchor" href="#loading-加载" aria-label="Permalink to &quot;Loading 加载&quot;">​</a></h2><p>网络提交loading提示代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">this.$confirm(&#39;确认删除？&#39;).then(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const {activity_id} = row;</span></span>
<span class="line"><span style="color:#e1e4e8;">  const loading = this.$loading({lock: true});</span></span>
<span class="line"><span style="color:#e1e4e8;">  putSdkActivityManagerActivityDelete({activity_id}).then(({code, message}) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (code === 20000) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.search();</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.$message.success(message);</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.$message.error(message);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }).finally(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    loading.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">  });</span></span>
<span class="line"><span style="color:#e1e4e8;">}).catch(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">this.$confirm(&#39;确认删除？&#39;).then(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const {activity_id} = row;</span></span>
<span class="line"><span style="color:#24292e;">  const loading = this.$loading({lock: true});</span></span>
<span class="line"><span style="color:#24292e;">  putSdkActivityManagerActivityDelete({activity_id}).then(({code, message}) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    if (code === 20000) {</span></span>
<span class="line"><span style="color:#24292e;">      this.search();</span></span>
<span class="line"><span style="color:#24292e;">      this.$message.success(message);</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">      this.$message.error(message);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }).finally(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    loading.close();</span></span>
<span class="line"><span style="color:#24292e;">  });</span></span>
<span class="line"><span style="color:#24292e;">}).catch(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div>`,25);function q(h,v,b,k,f,_){const p=n("form-item"),o=n("el-from"),a=n("el-select"),c=n("el-input"),i=n("el-form-item");return u(),d("div",null,[g,l("p",null,[s("如果要调用resetFields方法，必须要在"),e(p),s("组件上设置prop属性。")]),l("p",null,[s("当"),e(o),s("设置了size=‘small’的时候，"),e(a),s(),e(c),s(" 元素必须要放到"),e(i),s("下才能生效，否者只能在"),e(a),s("元素上单独设置size属性才能生效。")]),m])}const P=r(y,[["render",q]]);export{C as __pageData,P as default};
