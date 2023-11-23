import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.6ae5a3d9.js";const b=JSON.parse('{"title":"Prettier 实践","description":"","frontmatter":{},"headers":[],"relativePath":"1 前端工程化/开发/ESLint + Prettier/Prettier 实践.md","filePath":"1 前端工程化/开发/ESLint + Prettier/Prettier 实践.md"}'),p={name:"1 前端工程化/开发/ESLint + Prettier/Prettier 实践.md"},l=n(`<h1 id="prettier-实践" tabindex="-1">Prettier 实践 <a class="header-anchor" href="#prettier-实践" aria-label="Permalink to &quot;Prettier 实践&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>ESLint 用来进行代码质量的校验。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// bad</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(a); // 在声明之前访问变量</span></span>
<span class="line"><span style="color:#e1e4e8;">var a = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">var b = 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(d); // 引用了未声明的变量</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// bad</span></span>
<span class="line"><span style="color:#24292e;">console.log(a); // 在声明之前访问变量</span></span>
<span class="line"><span style="color:#24292e;">var a = 1;</span></span>
<span class="line"><span style="color:#24292e;">var b = 2;</span></span>
<span class="line"><span style="color:#24292e;">console.log(d); // 引用了未声明的变量</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// good</span></span>
<span class="line"><span style="color:#e1e4e8;">var a = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(a);</span></span>
<span class="line"><span style="color:#e1e4e8;">var b = 2;</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(b);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// good</span></span>
<span class="line"><span style="color:#24292e;">var a = 1;</span></span>
<span class="line"><span style="color:#24292e;">console.log(a);</span></span>
<span class="line"><span style="color:#24292e;">var b = 2;</span></span>
<span class="line"><span style="color:#24292e;">console.log(b);</span></span></code></pre></div><p>Prettier (adj. 更漂亮的) 用来进行代码风格的统一，统一的代码风格能保证代码的可读性。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// bad</span></span>
<span class="line"><span style="color:#e1e4e8;">var a = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    a:&#39;1&#39;,b:&#39;2&#39;,c:&#39;3&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(</span></span>
<span class="line"><span style="color:#e1e4e8;">    a</span></span>
<span class="line"><span style="color:#e1e4e8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// bad</span></span>
<span class="line"><span style="color:#24292e;">var a = {</span></span>
<span class="line"><span style="color:#24292e;">    a:&#39;1&#39;,b:&#39;2&#39;,c:&#39;3&#39;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(</span></span>
<span class="line"><span style="color:#24292e;">    a</span></span>
<span class="line"><span style="color:#24292e;">)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// good</span></span>
<span class="line"><span style="color:#e1e4e8;">var a = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    a: &#39;1&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    b: &#39;2&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    c: &#39;3&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(a)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// good</span></span>
<span class="line"><span style="color:#24292e;">var a = {</span></span>
<span class="line"><span style="color:#24292e;">    a: &#39;1&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    b: &#39;2&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    c: &#39;3&#39;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;">console.log(a)</span></span></code></pre></div><p>ESLint 与 Prettier 配合使用</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>npm i --save-dev prettier</p><p>配合ESLint检测代码风格</p><p>npm i --save-dev eslint-plugin-prettier</p><p>eslint-plugin-prettier插件会调用prettier对你的代码风格进行检查，其原理是先使用prettier对你的代码进行格式化，然后与格式化之前的代码进行对比，如果过出现了不一致，这个地方就会被prettier进行标记。</p><p>接下来，我们需要在rules中添加，&quot;prettier/prettier&quot;: &quot;error&quot;，表示被prettier标记的地方抛出错误信息。</p><p>如果与已存在的插件冲突怎么办 (解决 eslint 和 prettier 冲突)</p><p>npm i -D eslint-config-prettier</p><p>通过使用eslint-config-prettier配置，能够关闭一些不必要的或者是与prettier冲突的lint选项。这样我们就不会看到一些error同时出现两次。使用的时候需要确保，这个配置在extends的最后一项。</p><p>// .eslintrc.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">    extends: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;standard&#39;, //使用standard做代码规范</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;prettier&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">    extends: [</span></span>
<span class="line"><span style="color:#24292e;">      &#39;standard&#39;, //使用standard做代码规范</span></span>
<span class="line"><span style="color:#24292e;">      &quot;prettier&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>// .prettierrc.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;printWidth&quot;: 80, //一行的字符数，如果超过会进行换行，默认为80</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;tabWidth&quot;: 2, //一个tab代表几个空格数，默认为80</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;useTabs&quot;: true, //是否使用tab进行缩进，默认为false，表示用空格进行缩减</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;singleQuote&quot;: true, //字符串是否使用单引号，默认为false，使用双引号</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;semi&quot;: false, //行位是否使用分号，默认为true</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;trailingComma&quot;: &quot;none&quot;, //是否使用尾逗号，有三个可选值&quot;&lt;none|es5|all&gt;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;bracketSpacing&quot;: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;parser&quot;: &quot;babylon&quot; //代码的解析引擎，默认为babylon，与babel相同。</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;printWidth&quot;: 80, //一行的字符数，如果超过会进行换行，默认为80</span></span>
<span class="line"><span style="color:#24292e;">    &quot;tabWidth&quot;: 2, //一个tab代表几个空格数，默认为80</span></span>
<span class="line"><span style="color:#24292e;">    &quot;useTabs&quot;: true, //是否使用tab进行缩进，默认为false，表示用空格进行缩减</span></span>
<span class="line"><span style="color:#24292e;">    &quot;singleQuote&quot;: true, //字符串是否使用单引号，默认为false，使用双引号</span></span>
<span class="line"><span style="color:#24292e;">    &quot;semi&quot;: false, //行位是否使用分号，默认为true</span></span>
<span class="line"><span style="color:#24292e;">    &quot;trailingComma&quot;: &quot;none&quot;, //是否使用尾逗号，有三个可选值&quot;&lt;none|es5|all&gt;&quot;</span></span>
<span class="line"><span style="color:#24292e;">    &quot;bracketSpacing&quot;: true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }</span></span>
<span class="line"><span style="color:#24292e;">    &quot;parser&quot;: &quot;babylon&quot; //代码的解析引擎，默认为babylon，与babel相同。</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>我们统一使用prettier的风格是为了团队和睦，世界和平，我们做出的牺牲都是必要的。而且prettier的样式风格已经在很多大型开源项目中被采用，比如react、webpack、babel。</p><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><p>使用ESLint+Prettier来统一前端代码风格 <a href="https://juejin.cn/post/6844903621805473800?searchId=2023101113021452187A2E209592665B00" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903621805473800?searchId=2023101113021452187A2E209592665B00</a></p>`,26),o=[l];function t(c,r,i,d,u,y){return a(),e("div",null,o)}const g=s(p,[["render",t]]);export{b as __pageData,g as default};
