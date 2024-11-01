import{_ as a,o as e,c as n,O as l}from"./chunks/framework.d9e2f5d0.js";const u=JSON.parse('{"title":"webpack打包优化","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/47 webpack打包优化/README.md","filePath":"frontend/47 webpack打包优化/README.md"}'),p={name:"frontend/47 webpack打包优化/README.md"};function o(c,s,t,r,i,d){return e(),n("div",null,s[0]||(s[0]=[l(`<h1 id="webpack打包优化" tabindex="-1">webpack打包优化 <a class="header-anchor" href="#webpack打包优化" aria-label="Permalink to &quot;webpack打包优化&quot;">​</a></h1><blockquote><p>时间：2020.01.10</p></blockquote><blockquote><p>作者：<code>ZB</code></p></blockquote><p>实现webpack打包优化，两个优化点：</p><ul><li>如何减少打包时间</li><li>如何减少打包大小</li></ul><h2 id="减少打包时间" tabindex="-1">减少打包时间 <a class="header-anchor" href="#减少打包时间" aria-label="Permalink to &quot;减少打包时间&quot;">​</a></h2><h3 id="_1-优化loadder" tabindex="-1">1. 优化loadder <a class="header-anchor" href="#_1-优化loadder" aria-label="Permalink to &quot;1. 优化loadder&quot;">​</a></h3><p>首先优化的是babel，babel会将代码转成字符串并生成AST，然后转成新的代码，转换代码越多，效率就越低。</p><p>首先优化Loader的搜索范围</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        rules: [</span></span>
<span class="line"><span style="color:#e1e4e8;">            test: /\\.js$/, // 对js文件使用babel</span></span>
<span class="line"><span style="color:#e1e4e8;">            loader: &#39;babel-loader?cacheDirectory=true&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">            include: [resolve(&#39;src&#39;)],// 只在src文件夹下查找</span></span>
<span class="line"><span style="color:#e1e4e8;">            // 不去查找的文件夹路径，node_modules下的代码是编译过得，没必要再去处理一遍</span></span>
<span class="line"><span style="color:#e1e4e8;">            exclude: /node_modules/ </span></span>
<span class="line"><span style="color:#e1e4e8;">        ]</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">    module: {</span></span>
<span class="line"><span style="color:#24292e;">        rules: [</span></span>
<span class="line"><span style="color:#24292e;">            test: /\\.js$/, // 对js文件使用babel</span></span>
<span class="line"><span style="color:#24292e;">            loader: &#39;babel-loader?cacheDirectory=true&#39;,</span></span>
<span class="line"><span style="color:#24292e;">            include: [resolve(&#39;src&#39;)],// 只在src文件夹下查找</span></span>
<span class="line"><span style="color:#24292e;">            // 不去查找的文件夹路径，node_modules下的代码是编译过得，没必要再去处理一遍</span></span>
<span class="line"><span style="color:#24292e;">            exclude: /node_modules/ </span></span>
<span class="line"><span style="color:#24292e;">        ]</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>另外可以将babel编译过文件缓存起来，以此加载打包时间，主要在于设置caheDirectory</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">loader: &#39;babel-loader?cacheDirectory=true&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">loader: &#39;babel-loader?cacheDirectory=true&#39;</span></span></code></pre></div><h3 id="_2-happypack" tabindex="-1">2. HappyPack <a class="header-anchor" href="#_2-happypack" aria-label="Permalink to &quot;2. HappyPack&quot;">​</a></h3><p>因为受限于Node的单线程运行，所以webpack的打包也是单线程的，<strong>使用HappyPack可以将Loader的同步执行转为并行</strong>，从而执行Loader时的编译等待时间。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    loaders: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        test: /\\.js$/,</span></span>
<span class="line"><span style="color:#e1e4e8;">        include: [resolve(&#39;src&#39;)],</span></span>
<span class="line"><span style="color:#e1e4e8;">        exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#e1e4e8;">        loader: &#39;happypack/loader?id=happybabel&#39; //id对应插件下的配置的id</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span>
<span class="line"><span style="color:#e1e4e8;">plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    new HappyPack({</span></span>
<span class="line"><span style="color:#e1e4e8;">        id: &#39;happybabel&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        loaders: [&#39;babel-loader?cacheDirectory&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">        threads: 4, // 线程开启数</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module: {</span></span>
<span class="line"><span style="color:#24292e;">    loaders: [</span></span>
<span class="line"><span style="color:#24292e;">        test: /\\.js$/,</span></span>
<span class="line"><span style="color:#24292e;">        include: [resolve(&#39;src&#39;)],</span></span>
<span class="line"><span style="color:#24292e;">        exclude: /node_modules/,</span></span>
<span class="line"><span style="color:#24292e;">        loader: &#39;happypack/loader?id=happybabel&#39; //id对应插件下的配置的id</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">},</span></span>
<span class="line"><span style="color:#24292e;">plugins: [</span></span>
<span class="line"><span style="color:#24292e;">    new HappyPack({</span></span>
<span class="line"><span style="color:#24292e;">        id: &#39;happybabel&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        loaders: [&#39;babel-loader?cacheDirectory&#39;],</span></span>
<span class="line"><span style="color:#24292e;">        threads: 4, // 线程开启数</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">]</span></span></code></pre></div><h3 id="_3-dllplugin" tabindex="-1">3.DllPlugin <a class="header-anchor" href="#_3-dllplugin" aria-label="Permalink to &quot;3.DllPlugin&quot;">​</a></h3><p><strong>该插件可以将特定的类库提前打包然后引入</strong>,这种方式可以极大的减少类库的打包次数，只有当类库有更新版本时才会重新打包，并且也实现了将公共代码抽离成单独文件的优化方案。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// webpack.dll.conf.js</span></span>
<span class="line"><span style="color:#e1e4e8;">const path = require(&#39;path&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">const webpack = require(&#39;webpack&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    entry: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        vendor: [&#39;react&#39;] // 需要统一打包的类库</span></span>
<span class="line"><span style="color:#e1e4e8;">    }，</span></span>
<span class="line"><span style="color:#e1e4e8;">    output: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      path: path.join(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">        filename: &#39;[name].dll.js&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        library: &#39;[name]-[hash]&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        new webpack.DllPlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">            name: &#39;[name]-[hash]&#39;, //name必须要和output.library一致</span></span>
<span class="line"><span style="color:#e1e4e8;">            context: __dirname, //注意与DllReferencePlugin的context匹配一致</span></span>
<span class="line"><span style="color:#e1e4e8;">            path: path.join(__dirname, &#39;dist&#39;, &#39;[name]-manifest.json&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// webpack.dll.conf.js</span></span>
<span class="line"><span style="color:#24292e;">const path = require(&#39;path&#39;)</span></span>
<span class="line"><span style="color:#24292e;">const webpack = require(&#39;webpack&#39;)</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">    entry: {</span></span>
<span class="line"><span style="color:#24292e;">        vendor: [&#39;react&#39;] // 需要统一打包的类库</span></span>
<span class="line"><span style="color:#24292e;">    }，</span></span>
<span class="line"><span style="color:#24292e;">    output: {</span></span>
<span class="line"><span style="color:#24292e;">      path: path.join(__dirname, &#39;dist&#39;),</span></span>
<span class="line"><span style="color:#24292e;">        filename: &#39;[name].dll.js&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        library: &#39;[name]-[hash]&#39;</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    plugins: [</span></span>
<span class="line"><span style="color:#24292e;">        new webpack.DllPlugin({</span></span>
<span class="line"><span style="color:#24292e;">            name: &#39;[name]-[hash]&#39;, //name必须要和output.library一致</span></span>
<span class="line"><span style="color:#24292e;">            context: __dirname, //注意与DllReferencePlugin的context匹配一致</span></span>
<span class="line"><span style="color:#24292e;">            path: path.join(__dirname, &#39;dist&#39;, &#39;[name]-manifest.json&#39;)</span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>然后在package.json文件中增加一个脚本</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&#39;dll&#39;: &#39;webpack --config webpack.dll.js --mode=development&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">//运行后会打包出react.dll.js和manifest.json两个依赖文件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&#39;dll&#39;: &#39;webpack --config webpack.dll.js --mode=development&#39;</span></span>
<span class="line"><span style="color:#24292e;">//运行后会打包出react.dll.js和manifest.json两个依赖文件</span></span></code></pre></div><p>最后使用DllReferencePlugin将刚生成的依赖文件引入项目中</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// webpack.conf.js</span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">    //...其他配置</span></span>
<span class="line"><span style="color:#e1e4e8;">    plugins: [</span></span>
<span class="line"><span style="color:#e1e4e8;">        new webpack.DllReferencePlugin({</span></span>
<span class="line"><span style="color:#e1e4e8;">            context: __dirname,</span></span>
<span class="line"><span style="color:#e1e4e8;">            manifest: require(&#39;./dist/vendor-manifest.json&#39;) //此即打包出来的json文件</span></span>
<span class="line"><span style="color:#e1e4e8;">        })</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// webpack.conf.js</span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">    //...其他配置</span></span>
<span class="line"><span style="color:#24292e;">    plugins: [</span></span>
<span class="line"><span style="color:#24292e;">        new webpack.DllReferencePlugin({</span></span>
<span class="line"><span style="color:#24292e;">            context: __dirname,</span></span>
<span class="line"><span style="color:#24292e;">            manifest: require(&#39;./dist/vendor-manifest.json&#39;) //此即打包出来的json文件</span></span>
<span class="line"><span style="color:#24292e;">        })</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://www.jianshu.com/p/e4c1a9c40a2e" target="_blank" rel="noreferrer">https://www.jianshu.com/p/e4c1a9c40a2e</a></li></ul>`,24)]))}const h=a(p,[["render",o]]);export{u as __pageData,h as default};
