import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.0f4e1e9e.js";const h=JSON.parse('{"title":"开发代码规范","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/1 前端工程化/3 规范化/开发规范化-开发代码规范.md","filePath":"frontend/1 前端工程化/3 规范化/开发规范化-开发代码规范.md"}'),l={name:"frontend/1 前端工程化/3 规范化/开发规范化-开发代码规范.md"},p=a(`<h1 id="开发代码规范" tabindex="-1">开发代码规范 <a class="header-anchor" href="#开发代码规范" aria-label="Permalink to &quot;开发代码规范&quot;">​</a></h1><p>HTML、CSS、JavaScript 编码规范</p><ul><li>JavaScript 符合 ESLint 预定义的 eslint:recommended 编码规则。</li><li>HTML、JavaScript 代码风格符合 Prettier 工具的默认规则。</li><li>CSS 符合 StyleLint 工具的 stylelint-config-standard 编码风格规则。</li></ul><p>1、代码质量规范</p><p>前端代码使用ESLint、Stylelint工具做质量检测。</p><p>2、代码风格规范</p><p>前端代码使用Prettier工具进行代码风格的统一。</p><h1 id="eslint" tabindex="-1">ESLint <a class="header-anchor" href="#eslint" aria-label="Permalink to &quot;ESLint&quot;">​</a></h1><h2 id="eslint-简介" tabindex="-1">ESLint 简介 <a class="header-anchor" href="#eslint-简介" aria-label="Permalink to &quot;ESLint 简介&quot;">​</a></h2><p>ESLint 是一个检查代码质量与风格的工具，配置一套规则，就能检查出你代码中不符合规则的地方，部分问题支持自动修复；</p><p>总结起来就两个功能：</p><ul><li>代码质量检查 <ul><li>可以发现代码中存在的可能错误，如使用未声明变量、声明而未使用的变量、修改 const 变量、代码中使用debugger等等</li></ul></li><li>代码格式化 <ul><li>可以用来统一团队的代码风格，比如加不加分号、使用 tab 还是空格、字符串使用单引号 等等</li></ul></li></ul><p>ESLint是一个插件化的代码检测工具，正如它官网描述的slogan：</p><blockquote><p>可组装的JavaScript和JSX检查工具</p></blockquote><p>ESLint不仅可以检测JS，还支持JSX和Vue，它的高可扩展性让它能够支持更多的项目。</p><p>刚开始ESlint的推出并没有撼动JSHint的霸主地位，由于ESlint需要将源码转为AST，而JSHint直接检测源文件字符串，因此执行速度比JSHint慢很多；真正让ESLint实现弯道超车的是ES6的出现。</p><p>2015年，ES6规范发布后，由于大部分浏览器支持程度不高，因此需要Babel将代码转换编译成ES5或者更低版本；同时由于ES6变化很大，短期内JSHint无法完全支持，这时ESLint的高扩展性的优点显现出来了，不仅可以扩展规则，连默认的解析器也能替换；Babel团队就为ESLint开发了babel-eslint替换默认的解析器esprima，让ESLint率先支持ES6。</p><p>ESLint扩展性好；ESLint的核心是检测AST是否符合规则；</p><ol><li>第一步：解析器把源码转成AST；ESLint的解析器可自定义，源码用了啥高级语法或者换成TS，可直接换解析器得到最终的AST，eslint就可做规则匹配了；</li><li>第二步：执行规则；ESLint的检测规则可自定义；</li></ol><h2 id="eslint-使用" tabindex="-1">ESLint 使用 <a class="header-anchor" href="#eslint-使用" aria-label="Permalink to &quot;ESLint 使用&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p><code>npm install --save-dev eslint@8.52.0</code></p><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p>项目根目录添加.eslintrc.js文件，内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">	env: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		es6: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">		browser: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">		node: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">	parserOptions: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		ecmaVersion: &#39;latest&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		sourceType: &#39;module&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">	},</span></span>
<span class="line"><span style="color:#e1e4e8;">	extends: [&#39;eslint:recommended&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">	rules: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 生产模式不允许使用log</span></span>
<span class="line"><span style="color:#e1e4e8;">		&#39;no-console&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? [&#39;error&#39;, { allow: [&#39;error&#39;, &#39;warn&#39;, &#39;info&#39;] }] : &#39;off&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 生产默认不允许使用debugger</span></span>
<span class="line"><span style="color:#e1e4e8;">		&#39;no-debugger&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;warn&#39; : &#39;off&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		// 在注释中的 // 或 /* 之后强制执行一致的间距</span></span>
<span class="line"><span style="color:#e1e4e8;">		&#39;spaced-comment&#39;: &#39;error&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">	env: {</span></span>
<span class="line"><span style="color:#24292e;">		es6: true,</span></span>
<span class="line"><span style="color:#24292e;">		browser: true,</span></span>
<span class="line"><span style="color:#24292e;">		node: true,</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">	parserOptions: {</span></span>
<span class="line"><span style="color:#24292e;">		ecmaVersion: &#39;latest&#39;,</span></span>
<span class="line"><span style="color:#24292e;">		sourceType: &#39;module&#39;</span></span>
<span class="line"><span style="color:#24292e;">	},</span></span>
<span class="line"><span style="color:#24292e;">	extends: [&#39;eslint:recommended&#39;],</span></span>
<span class="line"><span style="color:#24292e;">	rules: {</span></span>
<span class="line"><span style="color:#24292e;">		// 生产模式不允许使用log</span></span>
<span class="line"><span style="color:#24292e;">		&#39;no-console&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? [&#39;error&#39;, { allow: [&#39;error&#39;, &#39;warn&#39;, &#39;info&#39;] }] : &#39;off&#39;,</span></span>
<span class="line"><span style="color:#24292e;">		// 生产默认不允许使用debugger</span></span>
<span class="line"><span style="color:#24292e;">		&#39;no-debugger&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;warn&#39; : &#39;off&#39;,</span></span>
<span class="line"><span style="color:#24292e;">		// 在注释中的 // 或 /* 之后强制执行一致的间距</span></span>
<span class="line"><span style="color:#24292e;">		&#39;spaced-comment&#39;: &#39;error&#39;,</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><a href="https://zh-hans.eslint.org/docs/latest/rules/" target="_blank" rel="noreferrer">ESLint内置规则</a></p><p>修改package.json，添加eslint命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;eslint&quot;: &quot;npx eslint --ext .js,.vue src&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;eslint:fix&quot;: &quot;npx eslint --ext .js,.vue src --fix&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">	&quot;eslint&quot;: &quot;npx eslint --ext .js,.vue src&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;eslint:fix&quot;: &quot;npx eslint --ext .js,.vue src --fix&quot;,</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><p>通过npm run eslint 进行代码检测。</p><p>通过npm run eslint:fix 进行代码自动修复。</p><p>至此ESLint基础配置就完成了。</p><h3 id="vue项目实践" tabindex="-1">Vue项目实践 <a class="header-anchor" href="#vue项目实践" aria-label="Permalink to &quot;Vue项目实践&quot;">​</a></h3><p>Vue 团队维护着 eslint-plugin-vue 项目，它是一个 ESLint 插件，会提供 SFC 相关规则的定义。</p><p>Vue代码应符合 vue3-recommended 编码规则。</p><p>官方文档<a href="https://eslint.vuejs.org" target="_blank" rel="noreferrer">点击这里</a></p><p>规则列表<a href="https://eslint.vuejs.org/rules/" target="_blank" rel="noreferrer">点击这里</a></p><p><strong>安装：</strong></p><p><code>npm install -—save-dev eslint-plugin-vue@9.25.0</code></p><p><strong>使用：</strong></p><p>修改.eslintrc.js，如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">	…</span></span>
<span class="line"><span style="color:#e1e4e8;">	extends: [&#39;eslint:recommended&#39;, &#39;plugin:vue/vue3-recommended&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">	rules: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		…</span></span>
<span class="line"><span style="color:#e1e4e8;">		&#39;vue/no-unused-vars&#39;: &#39;error&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		&#39;vue/multi-word-component-names&#39;: &#39;off&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">	…</span></span>
<span class="line"><span style="color:#24292e;">	extends: [&#39;eslint:recommended&#39;, &#39;plugin:vue/vue3-recommended&#39;],</span></span>
<span class="line"><span style="color:#24292e;">	rules: {</span></span>
<span class="line"><span style="color:#24292e;">		…</span></span>
<span class="line"><span style="color:#24292e;">		&#39;vue/no-unused-vars&#39;: &#39;error&#39;,</span></span>
<span class="line"><span style="color:#24292e;">		&#39;vue/multi-word-component-names&#39;: &#39;off&#39;</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>至此Vue项目的ESLint基础配置就完成了。</p><h4 id="vite创建的vue项目" tabindex="-1">Vite创建的Vue项目 <a class="header-anchor" href="#vite创建的vue项目" aria-label="Permalink to &quot;Vite创建的Vue项目&quot;">​</a></h4><p>如果想要在vite运行的时候自动检测eslint规范，并且在页面提示错误信息。</p><p><strong>安装：</strong></p><p><code>npm install -—save-dev vite-plugin-eslint@1.8.1</code></p><p><strong>使用：</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import eslint from &#39;vite-plugin-eslint&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [eslint()]</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#24292e;">import eslint from &#39;vite-plugin-eslint&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [eslint()]</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h3 id="react-项目实践" tabindex="-1">React 项目实践 <a class="header-anchor" href="#react-项目实践" aria-label="Permalink to &quot;React 项目实践&quot;">​</a></h3><p>官方文档<a href="https://github.com/jsx-eslint/eslint-plugin-react#configuration" target="_blank" rel="noreferrer">点击这里</a></p><p><strong>安装</strong></p><p><code>npm install eslint-plugin-react@7.34.1 --save-dev</code></p><p><strong>使用</strong></p><p>配置 eslintrc.js 文件。</p><p>第一步：使用React的预设，来获得合理的默认值：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;extends&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;eslint:recommended&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;plugin:react/recommended&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;extends&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">	&quot;eslint:recommended&quot;,</span></span>
<span class="line"><span style="color:#24292e;">	&quot;plugin:react/recommended&quot;</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><p>第二步：将“react”添加到插件部分。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;react&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;plugins&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">    &quot;react&quot;</span></span>
<span class="line"><span style="color:#24292e;">  ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>第三步：启用 JSX 支持。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;parserOptions&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;ecmaFeatures&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;jsx&quot;: true</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;parserOptions&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;ecmaFeatures&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;jsx&quot;: true</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>第四步：设置React的版本号。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">settings: {</span></span>
<span class="line"><span style="color:#e1e4e8;">	react: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		version: &#39;18.2.0&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">settings: {</span></span>
<span class="line"><span style="color:#24292e;">	react: {</span></span>
<span class="line"><span style="color:#24292e;">		version: &#39;18.2.0&#39;</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>启用您想要使用的规则。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">  &quot;rules&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;react/jsx-uses-react&quot;: &quot;error&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;react/jsx-uses-vars&quot;: &quot;error&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">  &quot;rules&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;react/jsx-uses-react&quot;: &quot;error&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;react/jsx-uses-vars&quot;: &quot;error&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span></code></pre></div><h3 id="微信小程序项目实践" tabindex="-1">微信小程序项目实践 <a class="header-anchor" href="#微信小程序项目实践" aria-label="Permalink to &quot;微信小程序项目实践&quot;">​</a></h3><p><strong>.eslintrc.js 配置</strong></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  env: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    es6: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    browser: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  parserOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ecmaVersion: </span><span style="color:#9ECBFF;">&#39;latest&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sourceType: </span><span style="color:#9ECBFF;">&#39;module&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  globals: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 微信小程序全局变量</span></span>
<span class="line"><span style="color:#E1E4E8;">    wx: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    App: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Page: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Component: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Behavior: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    getApp: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    getCurrentPages: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    requirePlugin: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    requireMiniProgram: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  env: {</span></span>
<span class="line"><span style="color:#24292E;">    es6: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    browser: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  parserOptions: {</span></span>
<span class="line"><span style="color:#24292E;">    ecmaVersion: </span><span style="color:#032F62;">&#39;latest&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sourceType: </span><span style="color:#032F62;">&#39;module&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  globals: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 微信小程序全局变量</span></span>
<span class="line"><span style="color:#24292E;">    wx: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    App: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    Page: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    Component: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    Behavior: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    getApp: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    getCurrentPages: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    requirePlugin: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    requireMiniProgram: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h1 id="stylelint" tabindex="-1">StyleLint <a class="header-anchor" href="#stylelint" aria-label="Permalink to &quot;StyleLint&quot;">​</a></h1><h2 id="stylelint-介绍" tabindex="-1">StyleLint 介绍 <a class="header-anchor" href="#stylelint-介绍" aria-label="Permalink to &quot;StyleLint 介绍&quot;">​</a></h2><p>StyleLint 是一个强大的、现代化的 CSS 检测工具, 是通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误。</p><h2 id="stylelint-使用" tabindex="-1">StyleLint 使用 <a class="header-anchor" href="#stylelint-使用" aria-label="Permalink to &quot;StyleLint 使用&quot;">​</a></h2><p><strong>安装</strong></p><p><code>npm install stylelint@14.6.0 stylelint-config-standard@25.0.0 stylelint-order@5.0.0 --save-dev</code></p><p>如果有配置 \`customSyntax: &#39;postcss-less&#39;, 那就还需要安装 postcss-less。</p><p><code>npm install postcss-less@6.0.0 --save-dev</code></p><p><strong>注意安装的模块之间的版本号要对上，不然会各种报错。</strong></p><p>stylelint：规则检查工具 stylelint-config-standard：关于规范、风格约束的规则集，其中已经做了许多规则的配置 stylelint-order：对css属性进行排序的插件工具 stylelint-config-recess-order：社区提供的属性排序的规则集</p><p><strong>配置</strong></p><p>配置 <code>.stylelintrc.js</code> 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;extends&quot;: [&quot;stylelint-config-standard&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;plugins&quot;: [&quot;stylelint-order&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">  rules: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  	 // 属性排序的推荐设置</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;order/properties-order&#39;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;position&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;top&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;right&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;bottom&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;left&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;z-index&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;display&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;flex&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;flex-direction&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;flex-wrap&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;justify-content&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;align-items&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;align-content&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;height&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;min-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;min-height&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;max-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;max-height&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-top&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-right&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-bottom&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-left&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;padding&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;padding-top&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;padding-right&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;padding-bottom&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;padding-left&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;overflow&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;overflow-x&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;overflow-y&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-position&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-repeat&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-size&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-clip&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-top&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-top-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-top-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-top-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-right&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-right-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-right-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-right-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-bottom&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-bottom-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-bottom-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-bottom-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-left&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-left-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-left-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-left-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-radius&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;outline&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;outline-offset&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;outline-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;outline-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font-size&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font-family&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font-weight&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;line-height&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;text-align&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">	&quot;extends&quot;: [&quot;stylelint-config-standard&quot;],</span></span>
<span class="line"><span style="color:#24292e;">	&quot;plugins&quot;: [&quot;stylelint-order&quot;],</span></span>
<span class="line"><span style="color:#24292e;">  rules: {</span></span>
<span class="line"><span style="color:#24292e;">  	 // 属性排序的推荐设置</span></span>
<span class="line"><span style="color:#24292e;">    &#39;order/properties-order&#39;: [</span></span>
<span class="line"><span style="color:#24292e;">      &#39;position&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;top&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;bottom&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;z-index&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      &#39;display&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;flex&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;flex-direction&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;flex-wrap&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;justify-content&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;align-items&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;align-content&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      &#39;width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;height&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;min-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;min-height&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;max-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;max-height&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-top&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-bottom&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-left&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      &#39;padding&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;padding-top&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;padding-right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;padding-bottom&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;padding-left&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      &#39;overflow&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;overflow-x&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;overflow-y&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      &#39;background&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-position&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-repeat&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-size&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-clip&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      &#39;border&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-top&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-top-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-top-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-top-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-right-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-right-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-right-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-bottom&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-bottom-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-bottom-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-bottom-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-left-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-left-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-left-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-radius&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      &#39;outline&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;outline-offset&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;outline-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;outline-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      &#39;color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font-size&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font-family&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font-weight&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;line-height&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;text-align&#39;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>忽略设置</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/* stylelint-disable-next-line selector-class-pattern */</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/* stylelint-disable-next-line no-descending-specificity */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/* stylelint-disable-next-line selector-class-pattern */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/* stylelint-disable-next-line no-descending-specificity */</span></span></code></pre></div><p>stylelint 配置说明</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 允许使用双斜杠注释</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;comment-style&quot;: null,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;selector-pseudo-class-no-unknown&quot;: [true, {//      忽略 global 伪类选择器      &quot;ignorePseudoClasses&quot;: [&quot;global&quot;]    }],</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 允许使用双斜杠注释</span></span>
<span class="line"><span style="color:#24292e;">&quot;comment-style&quot;: null,</span></span>
<span class="line"><span style="color:#24292e;">&quot;selector-pseudo-class-no-unknown&quot;: [true, {//      忽略 global 伪类选择器      &quot;ignorePseudoClasses&quot;: [&quot;global&quot;]    }],</span></span></code></pre></div><p><strong>写 CSS 总结</strong></p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// 颜色值这样写，stylelint 检测的时候才不会报错。</span></span>
<span class="line"><span style="color:#e1e4e8;">box-shadow: 0 1px 3px 0 rgba(#000, 0.07);</span></span>
<span class="line"><span style="color:#e1e4e8;">color: rgba(#ff0001, 0.3);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// 颜色值这样写，stylelint 检测的时候才不会报错。</span></span>
<span class="line"><span style="color:#24292e;">box-shadow: 0 1px 3px 0 rgba(#000, 0.07);</span></span>
<span class="line"><span style="color:#24292e;">color: rgba(#ff0001, 0.3);</span></span></code></pre></div><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><ul><li>团队协作统一编码风格：在多人开发的大型项目中，统一的编码风格能够显著降低因样式不一致带来的沟通成本和出错概率。</li><li>代码审查提高代码质量：自动化的属性排序和检查使得代码审查过程更加严格和高效，有助于维持代码质量。</li><li>避免常见错误：检测并报告 CSS 代码中的常见错误，比如拼写错误、无效的属性或值、未关闭的括号等。这有助于开发者在代码提交前及时发现并修复这些问题。</li><li>维护与重构提升工作效率：整齐划一的代码格式让后续的维护和重构工作变得更加轻松，新加入项目的开发者也能更快地理解现有代码，缩短适应代码库的时间。</li></ul><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><p><a href="https://juejin.cn/post/7118294114734440455?searchId=2024031516574914DB2CF497493804EACC" target="_blank" rel="noreferrer">https://juejin.cn/post/7118294114734440455?searchId=2024031516574914DB2CF497493804EACC</a></p><p><a href="https://blog.csdn.net/m0_60273757/article/details/125762025" target="_blank" rel="noreferrer">https://blog.csdn.net/m0_60273757/article/details/125762025</a></p><p><a href="https://juejin.cn/post/6844904112274800647?searchId=20240315165559E0A5D692FD025004FAA7" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904112274800647?searchId=20240315165559E0A5D692FD025004FAA7</a></p><p><a href="https://juejin.cn/post/6876367482412597262?searchId=2024031516574914DB2CF497493804EACC" target="_blank" rel="noreferrer">https://juejin.cn/post/6876367482412597262?searchId=2024031516574914DB2CF497493804EACC</a></p><h1 id="prettier" tabindex="-1">Prettier <a class="header-anchor" href="#prettier" aria-label="Permalink to &quot;Prettier&quot;">​</a></h1><h2 id="prettier-介绍" tabindex="-1">Prettier 介绍 <a class="header-anchor" href="#prettier-介绍" aria-label="Permalink to &quot;Prettier 介绍&quot;">​</a></h2><p>Prettier (adj. 更漂亮的) 用来进行代码风格的统一，统一的代码风格能保证代码的可读性。</p><h2 id="prettier-使用" tabindex="-1">Prettier 使用 <a class="header-anchor" href="#prettier-使用" aria-label="Permalink to &quot;Prettier 使用&quot;">​</a></h2><p><strong>安装：</strong></p><p><code>npm install -—save-dev prettier@3.2.5</code></p><p><strong>使用：</strong></p><p>在项目根目录添加Prettier配置文件.prettierrc.js。内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">	printWidth: 120, // 规定一行的最大宽度，在超过设定的宽度后会自动换行。默认为 80。</span></span>
<span class="line"><span style="color:#e1e4e8;">	tabWidth: 2, // 设定缩进的空格数。默认为 2。</span></span>
<span class="line"><span style="color:#e1e4e8;">	useTabs: true, // 确定是否使用 tab 进行缩进。默认为 false，即使用空格进行缩进。</span></span>
<span class="line"><span style="color:#e1e4e8;">	singleQuote: true, // 设定是否使用单引号。默认为 false，即使用双引号。</span></span>
<span class="line"><span style="color:#e1e4e8;">	semi: false, // 决定是否在语句末尾加上分号。默认为 true。</span></span>
<span class="line"><span style="color:#e1e4e8;">	trailingComma: &#39;none&#39;, // 规定是否在对象或数组的最后一项后面添加逗号。可选值为 “none”、“es5” 和 “all”。</span></span>
<span class="line"><span style="color:#e1e4e8;">	bracketSpacing: true // 决定在对象字面量的括号内是否添加空格。默认为 true。</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">	printWidth: 120, // 规定一行的最大宽度，在超过设定的宽度后会自动换行。默认为 80。</span></span>
<span class="line"><span style="color:#24292e;">	tabWidth: 2, // 设定缩进的空格数。默认为 2。</span></span>
<span class="line"><span style="color:#24292e;">	useTabs: true, // 确定是否使用 tab 进行缩进。默认为 false，即使用空格进行缩进。</span></span>
<span class="line"><span style="color:#24292e;">	singleQuote: true, // 设定是否使用单引号。默认为 false，即使用双引号。</span></span>
<span class="line"><span style="color:#24292e;">	semi: false, // 决定是否在语句末尾加上分号。默认为 true。</span></span>
<span class="line"><span style="color:#24292e;">	trailingComma: &#39;none&#39;, // 规定是否在对象或数组的最后一项后面添加逗号。可选值为 “none”、“es5” 和 “all”。</span></span>
<span class="line"><span style="color:#24292e;">	bracketSpacing: true // 决定在对象字面量的括号内是否添加空格。默认为 true。</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>使用 Prettier 格式化所有文件：</p><p><code>npx prettier . --write</code></p><p>使用 Prettier 检查文件是否已格式化：</p><p><code>npx prettier . --check</code></p><h3 id="prettier-与-eslint-集成" tabindex="-1">Prettier 与 ESLint 集成 <a class="header-anchor" href="#prettier-与-eslint-集成" aria-label="Permalink to &quot;Prettier 与 ESLint 集成&quot;">​</a></h3><p>首先，我们先安装eslint-plugin-prettier、eslint-config-prettier 插件，有了这两插件可以让你像运行 ESLint 规则一样运行 Prettier。</p><p><strong>安装：</strong></p><p><code>npm install -—save-dev eslint-config-prettier@9.1.0</code></p><p><code>npm install -—save-dev eslint-plugin-prettier@5.1.3</code></p><p><strong>使用：</strong></p><p>修改ESLint配置文件.eslintrc.js：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">	…</span></span>
<span class="line"><span style="color:#e1e4e8;">	extends: [&#39;eslint:recommended&#39;, &#39;plugin:vue/vue3-recommended&#39;, &#39;prettier&#39;],  //使用 eslint-config-prettier 的规则进行代码检查</span></span>
<span class="line"><span style="color:#e1e4e8;">	plugins: [&#39;prettier&#39;], // 使用 eslint-plugin-prettier插件调用prettier对你的代码风格进行检查</span></span>
<span class="line"><span style="color:#e1e4e8;">	rules: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		 // 违反了 Prettier 的代码格式规则时抛出错误</span></span>
<span class="line"><span style="color:#e1e4e8;">		&#39;prettier/prettier&#39;: &#39;error&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">		…</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">	…</span></span>
<span class="line"><span style="color:#24292e;">	extends: [&#39;eslint:recommended&#39;, &#39;plugin:vue/vue3-recommended&#39;, &#39;prettier&#39;],  //使用 eslint-config-prettier 的规则进行代码检查</span></span>
<span class="line"><span style="color:#24292e;">	plugins: [&#39;prettier&#39;], // 使用 eslint-plugin-prettier插件调用prettier对你的代码风格进行检查</span></span>
<span class="line"><span style="color:#24292e;">	rules: {</span></span>
<span class="line"><span style="color:#24292e;">		 // 违反了 Prettier 的代码格式规则时抛出错误</span></span>
<span class="line"><span style="color:#24292e;">		&#39;prettier/prettier&#39;: &#39;error&#39;,</span></span>
<span class="line"><span style="color:#24292e;">		…</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="提交前自动检测" tabindex="-1">提交前自动检测 <a class="header-anchor" href="#提交前自动检测" aria-label="Permalink to &quot;提交前自动检测&quot;">​</a></h2><p>eslint 和 prettier 配置完成后，需要配置下lint-staged和husky来实现代码提交前自动检测。</p><h3 id="总结-1" tabindex="-1">总结 <a class="header-anchor" href="#总结-1" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>我们统一使用prettier的风格是为了团队和睦，世界和平，我们做出的牺牲都是必要的。而且prettier的样式风格已经在很多大型开源项目中被采用，比如react、webpack、babel。</p><p>参考：</p><p><a href="https://cn.vuejs.org/guide/scaling-up/tooling.html" target="_blank" rel="noreferrer">工具链</a></p><p><a href="https://eslint.vuejs.org/user-guide/#usage" target="_blank" rel="noreferrer">eslint-plugin-vue</a></p>`,121),o=[p];function t(r,c,i,y,d,u){return n(),e("div",null,o)}const b=s(l,[["render",t]]);export{h as __pageData,b as default};
