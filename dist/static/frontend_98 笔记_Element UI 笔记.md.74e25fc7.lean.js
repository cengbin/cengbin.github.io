import{_ as y,A as l,o as E,c as u,O as p,k as o,a as n,E as a}from"./chunks/framework.d9e2f5d0.js";const C=JSON.parse('{"title":"Element UI 笔记","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/98 笔记/Element UI 笔记.md","filePath":"frontend/98 笔记/Element UI 笔记.md"}'),d={name:"frontend/98 笔记/Element UI 笔记.md"};function g(h,s,q,m,v,F){const t=l("form-item"),c=l("el-from"),e=l("el-select"),r=l("el-input"),i=l("el-form-item");return E(),u("div",null,[s[8]||(s[8]=p(`<h1 id="element-ui-笔记" tabindex="-1">Element UI 笔记 <a class="header-anchor" href="#element-ui-笔记" aria-label="Permalink to &quot;Element UI 笔记&quot;">​</a></h1><h2 id="组件库全局设置" tabindex="-1">组件库全局设置 <a class="header-anchor" href="#组件库全局设置" aria-label="Permalink to &quot;组件库全局设置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Vue.use(Element, {</span></span>
<span class="line"><span style="color:#e1e4e8;"> size: &#39;small&#39;, // 修改组件的默认尺寸</span></span>
<span class="line"><span style="color:#e1e4e8;"> zIndex: 3000, // 设置弹框的初始 z-index</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Vue.use(Element, {</span></span>
<span class="line"><span style="color:#24292e;"> size: &#39;small&#39;, // 修改组件的默认尺寸</span></span>
<span class="line"><span style="color:#24292e;"> zIndex: 3000, // 设置弹框的初始 z-index</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>参考：<a href="https://element.eleme.cn/2.14/#/zh-CN/component/quickstart#quan-ju-pei-zhi" target="_blank" rel="noreferrer">https://element.eleme.cn/2.14/#/zh-CN/component/quickstart#quan-ju-pei-zhi</a></p><h2 id="el-table" tabindex="-1"><code>&lt;el-table/&gt;</code> <a class="header-anchor" href="#el-table" aria-label="Permalink to &quot;\`&lt;el-table/&gt;\`&quot;">​</a></h2><p>支持树类型的数据的显示。 当 row 中包含 children 字段时，被视为树形数据。 渲染树形数据时，必须要指定 row-key。支持子节点数据异步加载。 设置 Table 的 lazy 属性为 true 与加载函数 load 。 通过指定 row 中的 hasChildren 字段来指定哪些行是包含子节点。children 与 hasChildren 都可以通过 tree-props 配置。</p><h2 id="el-from" tabindex="-1"><code>&lt;el-from/&gt;</code> <a class="header-anchor" href="#el-from" aria-label="Permalink to &quot;\`&lt;el-from/&gt;\`&quot;">​</a></h2><p>Form 的 model 属性是给表单验证的时候用的， 调用From的validate 方法的时候，会通过FormItem 的 prop属性名 去model对象上取prop属性的值，然后进行FormItem的rules规则校验。</p>`,8)),o("p",null,[s[0]||(s[0]=n("如果要调用resetFields方法，必须要在")),a(t),s[1]||(s[1]=n("组件上设置prop属性。"))]),o("p",null,[s[2]||(s[2]=n("当")),a(c),s[3]||(s[3]=n("设置了size=‘small’的时候，")),a(e),s[4]||(s[4]=n()),a(r),s[5]||(s[5]=n(" 元素必须要放到")),a(i),s[6]||(s[6]=n("下才能生效，否者只能在")),a(e),s[7]||(s[7]=n("元素上单独设置size属性才能生效。"))]),s[9]||(s[9]=p(`<h4 id="validator-自定义校验规则" tabindex="-1">validator 自定义校验规则 <a class="header-anchor" href="#validator-自定义校验规则" aria-label="Permalink to &quot;validator 自定义校验规则&quot;">​</a></h4><p><a href="https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze" target="_blank" rel="noreferrer">https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">data() {</span></span>
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
<span class="line"><span style="color:#24292e;">  }</span></span></code></pre></div><h4 id="问题描述-表单有多个元素需要校验-但是其中某些元素是根据另一个元素的值去用v-if控制显示与隐藏-切换值得时候-就会出现校验错乱" tabindex="-1">问题描述：表单有多个元素需要校验，但是其中某些元素是根据另一个元素的值去用v-if控制显示与隐藏,切换值得时候，就会出现校验错乱 <a class="header-anchor" href="#问题描述-表单有多个元素需要校验-但是其中某些元素是根据另一个元素的值去用v-if控制显示与隐藏-切换值得时候-就会出现校验错乱" aria-label="Permalink to &quot;问题描述：表单有多个元素需要校验，但是其中某些元素是根据另一个元素的值去用v-if控制显示与隐藏,切换值得时候，就会出现校验错乱&quot;">​</a></h4><p>解决方法:</p><p>方法一：</p><p>给表单的el-form-item去绑定一个key,这样每次刷新验证，就会找对应的key去校验，这是唯一的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;el-form-item v-if=&quot;formInline.type == &#39;SYSTEM&#39;&quot; key=&quot;EvaluationContent&quot; label=&quot;评估内容:&quot; prop=&quot;EvaluationContent&quot;&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;el-form-item v-if=&quot;formInline.type == &#39;SYSTEM&#39;&quot; key=&quot;EvaluationContent&quot; label=&quot;评估内容:&quot; prop=&quot;EvaluationContent&quot;&gt;</span></span></code></pre></div><p>方法二：</p><p>如果有 el-select，可以使用 el-form 自带的 方法 clearValidate 移除整个表单的校验结果,见 element Form Methods</p><h2 id="el-input" tabindex="-1"><code>&lt;el-input/&gt;</code> <a class="header-anchor" href="#el-input" aria-label="Permalink to &quot;\`&lt;el-input/&gt;\`&quot;">​</a></h2><ul><li>.number - 输入字符串转为有效的数字</li><li>.trim - 输入首尾空格过滤</li></ul><p><code>&lt;el-input v-model.trim.number=&quot;item.property.skill[0]”/&gt;</code></p><p>// 监听原生事件，可以拿到event对象，通过event.target可以获取到目标对象</p><p><code>&lt;el-input @change.native=&quot;onChangeInputNumber($event,item)&quot;/&gt;</code></p><p>// 显示最大输入字符数量与监听input事件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;el-input v-model.trim=&quot;form.settingUri&quot; maxlength=&quot;10&quot;  show-word-limit placeholder=&quot;请输入&quot; @input=&quot;onInputUri&quot;&gt;</span></span>
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
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><p>// 只能输入数字、小数点</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">oninput =“value=value.replace(/[^\\d]/g,‘’)” //只能输入数字</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">oninput =“value=value.replace(/[^0-9.]/g,‘’)” //只能输入数字和小数</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;el-input v-model=&quot;sjje&quot; oninput =&quot;value=value.replace(/[^0-9.]/g,&#39;&#39;)&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;span slot=&quot;suffix&quot;&gt;/ 元 &lt;/span&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/el-input&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">oninput =“value=value.replace(/[^\\d]/g,‘’)” //只能输入数字</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">oninput =“value=value.replace(/[^0-9.]/g,‘’)” //只能输入数字和小数</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;el-input v-model=&quot;sjje&quot; oninput =&quot;value=value.replace(/[^0-9.]/g,&#39;&#39;)&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;span slot=&quot;suffix&quot;&gt;/ 元 &lt;/span&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/el-input&gt;</span></span></code></pre></div><h2 id="el-select" tabindex="-1"><code>&lt;el-select/&gt;</code> <a class="header-anchor" href="#el-select" aria-label="Permalink to &quot;\`&lt;el-select/&gt;\`&quot;">​</a></h2><h3 id="解决el-select数据量过大的3种方案" tabindex="-1">解决el-select数据量过大的3种方案 <a class="header-anchor" href="#解决el-select数据量过大的3种方案" aria-label="Permalink to &quot;解决el-select数据量过大的3种方案&quot;">​</a></h3><p>以下方法都需要支持开启filterable支持搜索。</p><table><thead><tr><th>标题</th><th>具体</th><th>问题</th></tr></thead><tbody><tr><td>方案1</td><td>只展示前100条数据，这个的话配合filter-method每次只返回前100条数据。</td><td>限制展示的条数可能不全，搜索需要多搜索点内容</td></tr><tr><td>方案2</td><td>分页方式，通过指令实现上拉加载，不断上拉数据展示数据。</td><td>仅过滤加载出来的数据，需要配合filterMethod过滤数据</td></tr><tr><td>方案3</td><td>options列表采用虚拟列表实现。</td><td>成本高，需要引入虚拟列表组件或者自己手写</td></tr></tbody></table><h4 id="方案一-filtermethod直接过滤数据量" tabindex="-1">方案一：filterMethod直接过滤数据量 <a class="header-anchor" href="#方案一-filtermethod直接过滤数据量" aria-label="Permalink to &quot;方案一：filterMethod直接过滤数据量&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-select</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">clearable</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">filterable</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:filter-method</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;filterMethod&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-option</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(option, index) in options&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;option.value&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;option.label&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;option.value&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">el-option</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">el-select</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;Demo&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      list:[],</span></span>
<span class="line"><span style="color:#E1E4E8;">      options: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">getList</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 模拟获取大量数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getList</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> array </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> []</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">25000</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        array.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({label: </span><span style="color:#9ECBFF;">&quot;选择&quot;</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">i,value:i});</span></span>
<span class="line"><span style="color:#E1E4E8;">      } </span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.list </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">filterMethod</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">query</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> array </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> query </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.list.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> (item.label.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(query.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">()) </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.list</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> array.</span><span style="color:#B392F0;">slice</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-select</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">clearable</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">filterable</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:filter-method</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;filterMethod&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-option</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;(option, index) in options&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;option.value&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;option.label&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;option.value&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">el-option</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">el-select</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;Demo&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      list:[],</span></span>
<span class="line"><span style="color:#24292E;">      options: [],</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">getList</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 模拟获取大量数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getList</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> array </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> []</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">25000</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        array.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({label: </span><span style="color:#032F62;">&quot;选择&quot;</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">i,value:i});</span></span>
<span class="line"><span style="color:#24292E;">      } </span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.list </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> array;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.options </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> array.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">filterMethod</span><span style="color:#24292E;">(</span><span style="color:#E36209;">query</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> array </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> query </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.list.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> (item.label.</span><span style="color:#6F42C1;">toLowerCase</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(query.</span><span style="color:#6F42C1;">toLowerCase</span><span style="color:#24292E;">()) </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.list</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.options </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> array.</span><span style="color:#6F42C1;">slice</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p>参考：<a href="https://www.jb51.net/javascript/298200ahl.htm" target="_blank" rel="noreferrer">https://www.jb51.net/javascript/298200ahl.htm</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 备选项进行分组展示</span></span>
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
<span class="line"><span style="color:#24292e;">&lt;/el-row&gt;</span></span></code></pre></div><p>// 红色删除文本按钮</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;el-button type=&quot;text&quot; size=&quot;small&quot; @click=&quot;action(&#39;delete&#39;,scope.row)&quot; class=&quot;red&quot;&gt;删除&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.red {</span></span>
<span class="line"><span style="color:#e1e4e8;">  color: #f56c6c;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;el-button type=&quot;text&quot; size=&quot;small&quot; @click=&quot;action(&#39;delete&#39;,scope.row)&quot; class=&quot;red&quot;&gt;删除&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.red {</span></span>
<span class="line"><span style="color:#24292e;">  color: #f56c6c;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="el-dialog" tabindex="-1"><code>&lt;el-dialog/&gt;</code> <a class="header-anchor" href="#el-dialog" aria-label="Permalink to &quot;\`&lt;el-dialog/&gt;\`&quot;">​</a></h2><h3 id="弹框垂直居中" tabindex="-1">弹框垂直居中 <a class="header-anchor" href="#弹框垂直居中" aria-label="Permalink to &quot;弹框垂直居中&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">.el-dialog-vertical-center</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.el-dialog</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">margin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!important</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">absolute</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">transform</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">translate</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">-50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">-50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">max-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">max-width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">auto</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">.el-dialog-vertical-center</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.el-dialog</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">margin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!important</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">absolute</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">transform</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">translate</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">-50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">-50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">max-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">calc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">max-width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">calc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">30</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">auto</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="loading-加载" tabindex="-1">Loading 加载 <a class="header-anchor" href="#loading-加载" aria-label="Permalink to &quot;Loading 加载&quot;">​</a></h2><p>网络提交loading提示代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">this.$confirm(&#39;确认删除？&#39;).then(() =&gt; {</span></span>
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
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div>`,43))])}const f=y(d,[["render",g]]);export{C as __pageData,f as default};
