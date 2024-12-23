import{_ as n,o as e,c as a,O as l}from"./chunks/framework.d9e2f5d0.js";const p="/static/1.fba0983b.jpg",o="/static/2.5dc5fc39.jpg",t="/static/3.17dbc5c1.jpg",i="/static/4.b3b2914a.jpg",m=JSON.parse('{"title":"ESLint 实践","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/1 前端工程化/3 规范化/ESLint+Prettier/ESLint实践.md","filePath":"frontend/1 前端工程化/3 规范化/ESLint+Prettier/ESLint实践.md"}'),r={name:"frontend/1 前端工程化/3 规范化/ESLint+Prettier/ESLint实践.md"};function c(d,s,u,y,h,b){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="eslint-实践" tabindex="-1">ESLint 实践 <a class="header-anchor" href="#eslint-实践" aria-label="Permalink to &quot;ESLint 实践&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>npm i eslint --save-dev</p><p>npx eslint --init // 生成 .eslintrc* 配置文件</p><p>一般我们会把eslint命令行配置到packages.json中：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;lint&quot;: &quot;npx eslint src”,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;lint:fix&quot;: &quot;npx eslint src --fix&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;lint:create&quot;: &quot;npx eslint --init&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">  &quot;lint&quot;: &quot;npx eslint src”,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;lint:fix&quot;: &quot;npx eslint src --fix&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;lint:create&quot;: &quot;npx eslint --init&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>包括全局变量、插件配置、规则配置、内嵌注释代码禁用规则，扩展配置、忽略文件和目录</p><h3 id="root-配置" tabindex="-1">root 配置 <a class="header-anchor" href="#root-配置" aria-label="Permalink to &quot;root 配置&quot;">​</a></h3><p>root: true 这个配置，这个配置是让eslint不要往父级去继续查找配置</p><h3 id="globals和env-配置" tabindex="-1">globals和env 配置 <a class="header-anchor" href="#globals和env-配置" aria-label="Permalink to &quot;globals和env 配置&quot;">​</a></h3><p>对环境定义的一组全局变量的预设，详细<a href="https://zh-hans.eslint.org/docs/latest/use/configure/language-options" target="_blank" rel="noreferrer">点击这里</a></p><p>通常我们在项目里面会使用很多全局变量，比如浏览器环境下的windows，node环境下的global等，通常一些规则集像eslint:recommended等，是会校验不过的，因为在它看来你是使用了未定义的变量，这个时候globals就派上用场了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&#39;globals&#39;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // false、readable、readonly 这 3 个是等价的，表示变量只可读不可写；</span></span>
<span class="line"><span style="color:#e1e4e8;">    // true、writeable、writable 这 3 个是等价的，表示变量可读可写；</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;$&#39;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;jQuery&#39;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;encode&#39;: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&#39;globals&#39;: {</span></span>
<span class="line"><span style="color:#24292e;">    // false、readable、readonly 这 3 个是等价的，表示变量只可读不可写；</span></span>
<span class="line"><span style="color:#24292e;">    // true、writeable、writable 这 3 个是等价的，表示变量可读可写；</span></span>
<span class="line"><span style="color:#24292e;">    &#39;$&#39;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;jQuery&#39;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;encode&#39;: false,</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><p>但是像浏览器环境或者node环境全局变量有很多，一个个指定又太麻烦了，此时就可以使用env去指定环境，这样我们就无需一个个指定这个环境下的全局变量了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">env: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 浏览器全局变量</span></span>
<span class="line"><span style="color:#e1e4e8;">    browser: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    // Node.js 全局变量和作用域</span></span>
<span class="line"><span style="color:#e1e4e8;">    node: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    // CommonJS全局变量和CommonJS作用域</span></span>
<span class="line"><span style="color:#e1e4e8;">    commonjs: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 启用除模块之外的所有ECMAScript 6功能</span></span>
<span class="line"><span style="color:#e1e4e8;">    es6: true</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">env: {</span></span>
<span class="line"><span style="color:#24292e;">    // 浏览器全局变量</span></span>
<span class="line"><span style="color:#24292e;">    browser: true,</span></span>
<span class="line"><span style="color:#24292e;">    // Node.js 全局变量和作用域</span></span>
<span class="line"><span style="color:#24292e;">    node: true,</span></span>
<span class="line"><span style="color:#24292e;">    // CommonJS全局变量和CommonJS作用域</span></span>
<span class="line"><span style="color:#24292e;">    commonjs: true,</span></span>
<span class="line"><span style="color:#24292e;">    // 启用除模块之外的所有ECMAScript 6功能</span></span>
<span class="line"><span style="color:#24292e;">    es6: true</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="extends-配置" tabindex="-1">extends 配置 <a class="header-anchor" href="#extends-配置" aria-label="Permalink to &quot;extends 配置&quot;">​</a></h3><p>继承另一个配置文件的所有特性</p><p>通常来讲extends可以分为以下几种：</p><ul><li>eslint开头的，就是eslint官方的扩展，如eslint:recommended(推荐规范)和eslint:all(所有规范)</li><li>eslint-config开头的，比如第三方发布到npm上的，如eslint-config-airbnb（airbnb的规范），eslint-config-alloy（腾讯Alloy team的规范）等</li><li>plugin开头的，就是通过插件共享的规则，如eslint-plugin-vue，我们使用其中的plugin:vue/vue3-recommended的规则集</li><li>@开头的，跟eslint-config开头的类似，只不过是加了作用域，例如@vue/eslint-config-prettier就是加了个作用域</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  // extends可以是字符串，可以是数组，数组的时候就可以配置多个</span></span>
<span class="line"><span style="color:#e1e4e8;">  extends: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      // eslint官方扩展，无需再安装npm包就可使用</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      // airbnb的扩展，需要先安装eslint-config-airbnb及其依赖才能使用，这种eslint-config-开头的可以省略前面的</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 比如直接传&#39;airbnb&#39;即可</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;eslint-config-airbnb&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      // @开头的，就是加了作用域，跟上面的类似，使用前也需要先安装，也可以省略调eslin-config</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 比如直接传&#39;@vue/prettier&#39;即可</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;@vue/eslint-config-prettier&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      // plugin开头的，使用前需先安装，通常一个插件会提供多套规则，而我们则通过plugin:pluginName/configName这样的形式在extends中引入插件提供的规则，如下面使用的eslint-plugin-vue就有recommended|vue3-recommended等多套规则</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;plugin:vue/vue3-recommended&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  // extends可以是字符串，可以是数组，数组的时候就可以配置多个</span></span>
<span class="line"><span style="color:#24292e;">  extends: [</span></span>
<span class="line"><span style="color:#24292e;">      // eslint官方扩展，无需再安装npm包就可使用</span></span>
<span class="line"><span style="color:#24292e;">      &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      // airbnb的扩展，需要先安装eslint-config-airbnb及其依赖才能使用，这种eslint-config-开头的可以省略前面的</span></span>
<span class="line"><span style="color:#24292e;">      // 比如直接传&#39;airbnb&#39;即可</span></span>
<span class="line"><span style="color:#24292e;">      &#39;eslint-config-airbnb&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      // @开头的，就是加了作用域，跟上面的类似，使用前也需要先安装，也可以省略调eslin-config</span></span>
<span class="line"><span style="color:#24292e;">      // 比如直接传&#39;@vue/prettier&#39;即可</span></span>
<span class="line"><span style="color:#24292e;">      &#39;@vue/eslint-config-prettier&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      // plugin开头的，使用前需先安装，通常一个插件会提供多套规则，而我们则通过plugin:pluginName/configName这样的形式在extends中引入插件提供的规则，如下面使用的eslint-plugin-vue就有recommended|vue3-recommended等多套规则</span></span>
<span class="line"><span style="color:#24292e;">      &#39;plugin:vue/vue3-recommended&#39;</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="parser和parseroptions" tabindex="-1">parser和parserOptions <a class="header-anchor" href="#parser和parseroptions" aria-label="Permalink to &quot;parser和parserOptions&quot;">​</a></h3><p>通过parser我们指定了项目所使用的语法解析器，parserOptions就相当于给出解析器更详细的解析配置，比如如下配置，parserOptions就具体指定了@typescript-eslint/parser解析器应该支持最新版本的es标准（&quot;ecmaVersion&quot;: &quot;latest&quot;）以及项目的模块化标准为esModule（&quot;sourceType&quot;: &quot;module&quot;）</p><p>eslint默认的解析器是espree，只支持转换js，默认支持到ES5的语法，假如需要支持更高版本的语法，则可以通过parserOptions来指定版本号</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  parserOptions: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 指定支持es6的语法</span></span>
<span class="line"><span style="color:#e1e4e8;">      ecmaVersion: 6,</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 默认是script，但我们现在都是模块，所以将它指定为module</span></span>
<span class="line"><span style="color:#e1e4e8;">      sourceType: &#39;module&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      ecmaFeatures: {</span></span>
<span class="line"><span style="color:#e1e4e8;">          // 启用jsx语法，如果不打开，当我们写jsx语法的时候，eslint就会校验不通过，因为它会认为&lt;不是一个合法的token</span></span>
<span class="line"><span style="color:#e1e4e8;">          jsx: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  parserOptions: {</span></span>
<span class="line"><span style="color:#24292e;">      // 指定支持es6的语法</span></span>
<span class="line"><span style="color:#24292e;">      ecmaVersion: 6,</span></span>
<span class="line"><span style="color:#24292e;">      // 默认是script，但我们现在都是模块，所以将它指定为module</span></span>
<span class="line"><span style="color:#24292e;">      sourceType: &#39;module&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      ecmaFeatures: {</span></span>
<span class="line"><span style="color:#24292e;">          // 启用jsx语法，如果不打开，当我们写jsx语法的时候，eslint就会校验不通过，因为它会认为&lt;不是一个合法的token</span></span>
<span class="line"><span style="color:#24292e;">          jsx: true,</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>默认的espree解释器和规则只支持最新的ECMAScript标准，对于一些还没成为标准的实验性语法是不支持的，此时就需要@babel/eslint-parser这个解释器了。当然，使用这个解释器的前提是你的项目使用了babel。当你使用了babel和这个解释器，babel首先会将源码转换成AST,然后这个解释器再将这个AST转换成eslint能动的ESTree</p><p>假设你项目使用了babel的情况下，parser的配置如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 使用前需先安装</span></span>
<span class="line"><span style="color:#e1e4e8;">  parser: &#39;@babel/eslint-parser&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  parserOptions: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      // @babel/eslint-parser相关的选项</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  // 使用前需先安装</span></span>
<span class="line"><span style="color:#24292e;">  parser: &#39;@babel/eslint-parser&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  parserOptions: {</span></span>
<span class="line"><span style="color:#24292e;">      // @babel/eslint-parser相关的选项</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="plugins-配置" tabindex="-1">plugins 配置 <a class="header-anchor" href="#plugins-配置" aria-label="Permalink to &quot;plugins 配置&quot;">​</a></h3><p>上面对parser和extends做了详尽的介绍，而这里介绍一下上面提到的plugins。插件其中一个作用是可以共享配置，如上面介绍的配合extends来继承插件里面的规则，还有另一个最重要的作用是扩展eslint的规则，因为本身官方的规则只能检测js语法，如果是像vue这样的文件就无能为力了，此时就需要通过插件去完成了，比如上面也提到的eslint-plugin-vue，就是用来校验eslint本来不支持的vue模板文件的。</p><p>而通常我们使用插件，有两种用法，一种是像上面介绍的，通过extends去继承插件提供出来的规则集合。当然，前提是这个插件本身有提供出来相应的config。</p><p>rule 规则配置</p><ol><li>&quot;off&quot; 或 0： 关闭规则；</li><li>&quot;warn&quot; 或 1： 开启规则，使用警告级别的错误：warn (不会导致程序退出)；</li><li>&quot;error&quot; 或 2： 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)；</li></ol><p>内置规则：<a href="https://zh-hans.eslint.org/" target="_blank" rel="noreferrer">https://zh-hans.eslint.org/</a></p><h2 id="webstrom-配置-eslint的autofix功能" tabindex="-1">Webstrom 配置 ESLint的autofix功能 <a class="header-anchor" href="#webstrom-配置-eslint的autofix功能" aria-label="Permalink to &quot;Webstrom 配置 ESLint的autofix功能&quot;">​</a></h2><p>1、项目绑定Eslint，并提示错误。</p><p><img src="`+p+'" alt=""></p><p>2、之后在编辑器中就会出现检测错误提示。</p><p><img src="'+o+'" alt=""></p><p>3、文件 -&gt; 右键 -&gt; Fix ESLint Problems 会自动根据 Eslint 规则修复代码。</p><p><img src="'+t+'" alt=""></p><p><img src="'+i+'" alt=""></p><h3 id="参考" tabindex="-1">参考： <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考：&quot;">​</a></h3><p>ESLint 命令行使用 <a href="https://www.jianshu.com/p/4133063d1785" target="_blank" rel="noreferrer">https://www.jianshu.com/p/4133063d1785</a></p><p>看完这篇文章，我不信你还对eslint一知半解 <a href="https://juejin.cn/post/7129771851638636575?searchId=202310111031309F0D69AD1F3EDF63BE94" target="_blank" rel="noreferrer">https://juejin.cn/post/7129771851638636575?searchId=202310111031309F0D69AD1F3EDF63BE94</a></p><p>深入浅出之ESLint <a href="https://juejin.cn/post/7028754877312401444?searchId=202310111031309F0D69AD1F3EDF63BE94" target="_blank" rel="noreferrer">https://juejin.cn/post/7028754877312401444?searchId=202310111031309F0D69AD1F3EDF63BE94</a></p>',46)]))}const f=n(r,[["render",c]]);export{m as __pageData,f as default};
