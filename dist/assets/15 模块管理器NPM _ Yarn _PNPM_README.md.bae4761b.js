import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.0bd140f3.js";const o="/web-blog/assets/NPM.3cf065c2.jpg",p="/web-blog/assets/图1.5d317ce9.jpg",m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"15 模块管理器NPM & Yarn &PNPM/README.md","filePath":"15 模块管理器NPM & Yarn &PNPM/README.md"}'),l={name:"15 模块管理器NPM & Yarn &PNPM/README.md"},t=a('<p><img src="'+o+`" alt=""></p><h2 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;NPM&quot;">​</a></h2><p>Node Package Manager，即“node包管理器”。npm 发展到今天，可以说经历过三个重大的版本变化。</p><h3 id="npm-v1-v2" tabindex="-1">npm v1-v2 <a class="header-anchor" href="#npm-v1-v2" aria-label="Permalink to &quot;npm v1-v2&quot;">​</a></h3><p>最早的 npm 版本在管理依赖时使用了一种很简单的方式。我们称之为嵌套模式。比如，在你的项目中有如下的依赖。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;dependencies&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    A: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    C: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    D: &quot;1.0.0&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;dependencies&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    A: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    C: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    D: &quot;1.0.0&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>这些模块都依赖 B 模块，而且依赖的 B模块的版本还不同。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">A@1.0.0 -&gt; B@1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">C@1.0.1 -&gt; B@2.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">D@1.0.0 -&gt; B@1.0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">A@1.0.0 -&gt; B@1.0.0</span></span>
<span class="line"><span style="color:#24292e;">C@1.0.1 -&gt; B@2.0.0</span></span>
<span class="line"><span style="color:#24292e;">D@1.0.0 -&gt; B@1.0.0</span></span></code></pre></div><p>通过执行 npm install 命令，npm v1 生成的 node_modules目录如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">├── A@1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">│       └── B@1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">├── C@1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">│   └── node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">│       └── B@2.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">└── D@1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">└── node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">└── B@1.0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">node_modules</span></span>
<span class="line"><span style="color:#24292e;">├── A@1.0.0</span></span>
<span class="line"><span style="color:#24292e;">│   └── node_modules</span></span>
<span class="line"><span style="color:#24292e;">│       └── B@1.0.0</span></span>
<span class="line"><span style="color:#24292e;">├── C@1.0.0</span></span>
<span class="line"><span style="color:#24292e;">│   └── node_modules</span></span>
<span class="line"><span style="color:#24292e;">│       └── B@2.0.0</span></span>
<span class="line"><span style="color:#24292e;">└── D@1.0.0</span></span>
<span class="line"><span style="color:#24292e;">└── node_modules</span></span>
<span class="line"><span style="color:#24292e;">└── B@1.0.0</span></span></code></pre></div><p>很明显，每个模块下面都会有一个 node_modules 目录存放该模块的直接依赖。模块的依赖下面还会存在一个 node_modules 目录来存放模块的依赖的依赖。很明显这种依赖管理简单明了，但存在很大的问题，除了 node_modules 目录长度的嵌套过深之外，还会造成相同的依赖存储多份的问题，比如上面的 B@1.0.0 就存放了两份，这明显也是一种浪费。于是在 npm v3 发布后，npm 的依赖管理做出了重大的改变。</p><h3 id="npm-v3" tabindex="-1">npm v3 <a class="header-anchor" href="#npm-v3" aria-label="Permalink to &quot;npm v3&quot;">​</a></h3><p>对于同样的上述依赖，使用 npm v3 执行 npm install 命令后生成的 node_modules 目录如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">├── A@1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">├── B@1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">└── C@1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">    └── node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">        └── B@2.0.0 </span></span>
<span class="line"><span style="color:#e1e4e8;">├── D@1.0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">node_modules</span></span>
<span class="line"><span style="color:#24292e;">├── A@1.0.0</span></span>
<span class="line"><span style="color:#24292e;">├── B@1.0.0</span></span>
<span class="line"><span style="color:#24292e;">└── C@1.0.0</span></span>
<span class="line"><span style="color:#24292e;">    └── node_modules</span></span>
<span class="line"><span style="color:#24292e;">        └── B@2.0.0 </span></span>
<span class="line"><span style="color:#24292e;">├── D@1.0.0</span></span></code></pre></div><p>显而易见，npm v3 使用了一种扁平的模式，把项目中使用的所有的模块和模块的依赖都放在了 node_modules 目录下的顶层，（多个版本的包只有一个(最先安装的一个) 被提升上来，其余版本的包还是会嵌套安装到各自的依赖当中，上面提到的路径过长和重复安装的问题没有彻底解决。）遇到版本冲突的时候才会在模块下的 node_modules 目录下存放该模块需要用到的依赖。之所以能这么实现是基于包搜索机制的。包搜索机制是指当你在项目中直接 require(&#39;A&#39;) 时，首先会在当前路径下搜索 node_modules 目录中是否存在该依赖，如果不存在则往上查找也就是继续查找该路径的上一层目录下的 node_modules。正因为此，npm v3 才能把之前的嵌套结构拍平，把所有的依赖都放在项目根目录的 node_modules，这样就避免了 node_modules 目录嵌套过深的问题。此外，npm v3 还会解析模块的依赖的多个版本为一个版本，比如 A依赖 B@^1.0.1，D 依赖 B@^1.0.2，则只会有一个 B@1.0.2 的版本存在。虽然 npm v3 解决了这两个问题，但是此时的 npm 仍然存在诸多问题，被人诟病最多的应该就是它的不确定性了。</p><h3 id="npm-v5" tabindex="-1">npm v5 <a class="header-anchor" href="#npm-v5" aria-label="Permalink to &quot;npm v5&quot;">​</a></h3><p>什么是确定性。在 JavaScript 包管理的背景下，确定性是指在给定的 package.json 和 lock 文件下始终能得到一致的 node_modules 目录结构。简单点说就是无论在何种环境下执行 npm install 都能得到相同的 node_modules 目录结构。npm v5 正是为解决这个问题而产生的，npm v5 生成的 node_modules 目录和 v3 是一致的，区别是 v5 会默认生成一个 package-lock.json 文件，来保证安装的依赖的确定性。比如，对于如下的一个 package.json 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;dependencies&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;redux&quot;: &quot;^3.7.2&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;dependencies&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;redux&quot;: &quot;^3.7.2&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>对应的 package-lock.json 文件内容如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;name&quot;: &quot;test&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;lockfileVersion&quot;: 1,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;requires&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;js-tokens&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;version&quot;: &quot;3.0.2&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;integrity&quot;: &quot;sha1-mGbfOVECEw449/mWvOtlRDIJwls=&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;lodash&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;version&quot;: &quot;4.17.4&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/lodash/-/lodash-4.17.4.tgz&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;integrity&quot;: &quot;sha1-eCA6TRwyiuHYbcpkYONptX9AVa4=&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;lodash-es&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;version&quot;: &quot;4.17.4&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/lodash-es/-/lodash-es-4.17.4.tgz&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;integrity&quot;: &quot;sha1-3MHXVS4VCgZABzupyzHXDwMpUOc=&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;loose-envify&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;version&quot;: &quot;1.3.1&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/loose-envify/-/loose-envify-1.3.1.tgz&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;integrity&quot;: &quot;sha1-0aitM/qc4OcT1l/dCsi3SNR4yEg=&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;requires&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;js-tokens&quot;: &quot;3.0.2&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;redux&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;version&quot;: &quot;3.7.2&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/redux/-/redux-3.7.2.tgz&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;integrity&quot;: &quot;sha512-pNqnf9q1hI5HHZRBkj3bAngGZW/JMCmexDlOxw4XagXY2o1327nHH54LoTjiPJ0gizoqPDRqWyX/00g0hD6w+A==&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;requires&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;lodash&quot;: &quot;4.17.4&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;lodash-es&quot;: &quot;4.17.4&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;loose-envify&quot;: &quot;1.3.1&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;symbol-observable&quot;: &quot;1.1.0&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;symbol-observable&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;version&quot;: &quot;1.1.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.1.0.tgz&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;integrity&quot;: &quot;sha512-dQoid9tqQ+uotGhuTKEY11X4xhyYePVnqGSoSm3OGKh2E8LZ6RPULp1uXTctk33IeERlrRJYoVSBglsL05F5Uw==&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;name&quot;: &quot;test&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;lockfileVersion&quot;: 1,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;requires&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;js-tokens&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;version&quot;: &quot;3.0.2&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/js-tokens/-/js-tokens-3.0.2.tgz&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;integrity&quot;: &quot;sha1-mGbfOVECEw449/mWvOtlRDIJwls=&quot;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;lodash&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;version&quot;: &quot;4.17.4&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/lodash/-/lodash-4.17.4.tgz&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;integrity&quot;: &quot;sha1-eCA6TRwyiuHYbcpkYONptX9AVa4=&quot;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;lodash-es&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;version&quot;: &quot;4.17.4&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/lodash-es/-/lodash-es-4.17.4.tgz&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;integrity&quot;: &quot;sha1-3MHXVS4VCgZABzupyzHXDwMpUOc=&quot;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;loose-envify&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;version&quot;: &quot;1.3.1&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/loose-envify/-/loose-envify-1.3.1.tgz&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;integrity&quot;: &quot;sha1-0aitM/qc4OcT1l/dCsi3SNR4yEg=&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;requires&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;js-tokens&quot;: &quot;3.0.2&quot;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;redux&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;version&quot;: &quot;3.7.2&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/redux/-/redux-3.7.2.tgz&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;integrity&quot;: &quot;sha512-pNqnf9q1hI5HHZRBkj3bAngGZW/JMCmexDlOxw4XagXY2o1327nHH54LoTjiPJ0gizoqPDRqWyX/00g0hD6w+A==&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;requires&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">        &quot;lodash&quot;: &quot;4.17.4&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;lodash-es&quot;: &quot;4.17.4&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;loose-envify&quot;: &quot;1.3.1&quot;,</span></span>
<span class="line"><span style="color:#24292e;">        &quot;symbol-observable&quot;: &quot;1.1.0&quot;</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;symbol-observable&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;version&quot;: &quot;1.1.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;resolved&quot;: &quot;https://registry.npmjs.org/symbol-observable/-/symbol-observable-1.1.0.tgz&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;integrity&quot;: &quot;sha512-dQoid9tqQ+uotGhuTKEY11X4xhyYePVnqGSoSm3OGKh2E8LZ6RPULp1uXTctk33IeERlrRJYoVSBglsL05F5Uw==&quot;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>不难看出，package-lock.json 文件里记录了安装的每一个依赖的确定版本，这样在下次安装时就能通过这个文件来安装一样的依赖了。</p><p><img src="`+p+'" alt="npm发展"></p><h2 id="yarn" tabindex="-1">Yarn <a class="header-anchor" href="#yarn" aria-label="Permalink to &quot;Yarn&quot;">​</a></h2><p>yarn 是在 2016.10.11 开源的，yarn 的出现是为了解决 npm v3 中的存在的一些问题，那时 npm v5 还没发布。yarn 被定义为快速、安全、可靠的依赖管理。</p><ul><li>快速：全局缓存、并行下载、离线模式</li><li>安全：安装包被执行前校验其完整性</li><li>可靠：lockfile文件、确定性算法</li></ul><p>yarn 生成的 node_modules 目录结构和 npm v5 是相同的，同时默认生成一个 yarn.lock 文件。</p><h2 id="pnmp" tabindex="-1">PNMP <a class="header-anchor" href="#pnmp" aria-label="Permalink to &quot;PNMP&quot;">​</a></h2><p>Performance NPM，即“高性能的node包管理器”</p><p>Pnpm 只是从全局存储中<strong>链接文件</strong>，而 yarn 从其缓存中<strong>复制文件</strong>。软件包版本永远不会在磁盘上多次保存。</p><p>pnpm 的算法没有使用扁平化的依赖树，这使得它更容易实现、维护，并且需要更少的计算。</p><p>这是 NPM 3 及更早版本中使用的方法，但嵌套存在问题，因此必须为每个<strong>依赖它们</strong>的包<strong>复制多次包</strong>。</p><p>与 NPM 相比，PNPM 通过<strong>硬链接</strong>和<strong>符号链接</strong>解决了上述问题。PNPM 按符号链接对所有依赖项进行分组，但保留所有依赖项。</p><p>与其他两个包管理器相比，PNPM 还可以<strong>节省大量空间</strong>。</p><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><p><a href="https://www.atatus.com/blog/npm-vs-yarn-vs-pnpm/" target="_blank" rel="noreferrer">https://www.atatus.com/blog/npm-vs-yarn-vs-pnpm/</a></p>',35),c=[t];function r(u,i,q,y,d,g){return n(),e("div",null,c)}const v=s(l,[["render",r]]);export{m as __pageData,v as default};
