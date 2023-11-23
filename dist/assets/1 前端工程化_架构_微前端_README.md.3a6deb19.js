import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.0bd140f3.js";const l="/web-blog/assets/图2.59a5a621.png",q=JSON.parse('{"title":"微前端","description":"","frontmatter":{},"headers":[],"relativePath":"1 前端工程化/架构/微前端/README.md","filePath":"1 前端工程化/架构/微前端/README.md"}'),t={name:"1 前端工程化/架构/微前端/README.md"},p=a('<h1 id="微前端" tabindex="-1">微前端 <a class="header-anchor" href="#微前端" aria-label="Permalink to &quot;微前端&quot;">​</a></h1><h4 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h4><ol><li>前言</li><li>什么是微前端</li><li>微前端的好处</li><li>微前端的实现方式</li><li>微前端的落地实现</li></ol><h2 id="_1、前言" tabindex="-1">1、前言 <a class="header-anchor" href="#_1、前言" aria-label="Permalink to &quot;1、前言&quot;">​</a></h2><p>分享内容的均是基于我自己的理解和认识，如果有什么不对的地方大家随时给我我纠正。</p><h2 id="_2、什么是微前端" tabindex="-1">2、什么是微前端 <a class="header-anchor" href="#_2、什么是微前端" aria-label="Permalink to &quot;2、什么是微前端&quot;">​</a></h2><p>首先我们聊一下就是什么是微前端。为什么出现微前端？</p><p>近些年来，后端微服务爆炸式地流行起来，许多组织使用这种体系结构风格来避免大型、单片的后端限制。用这种风格来开发后端项目。虽然关于这种构建服务器端软件的风格已经比较成熟，但是前端却没有太多。</p><p>有时我们想构建一个渐进的或响应性的web应用程序，但是找不到一个容易的地方开始将这些新特性集成到现有代码中。也许我们想开始使用新的JavaScript语言特性(或者可以编译成JavaScript的多种语言中的一种)，但是我们还是无法将必要的构建工具融入现有的构建过程。或者有时只是想要扩展您的开发，以便多个团队可以同时处理单个产品，但是现有整体中的耦合性和复杂性意味着每个人都在踩着彼此的脚。这些都是真正的问题，会对有效地提供高质量项目产生负面影响。</p><p>带着这些问题，越来越多的人开始关注复杂的现代web开发所必需的整体架构和组织结构。我们也看到了一些模式出现，它们将前端巨石项目分解成更小、更简单的块，这些块可以独立开发、测试和部署，同时在客户看来仍然是一个单一的内聚产品。我们称之为微前沿技术。</p><p>我们将其定义为:</p><blockquote><p>“将独立可交付的前端应用程序组成一个更大的整体的架构风格” 与技术无关，做到技术隔离。</p></blockquote><h2 id="_3、微前端的好处" tabindex="-1">3、微前端的好处 <a class="header-anchor" href="#_3、微前端的好处" aria-label="Permalink to &quot;3、微前端的好处&quot;">​</a></h2><h4 id="独立部署" tabindex="-1">独立部署 <a class="header-anchor" href="#独立部署" aria-label="Permalink to &quot;独立部署&quot;">​</a></h4><p>与微服务一样，微前端的独立可部署性是关键。这减少了给定部署的范围，从而减少了相关的风险。不管前端代码在哪里托管的，每个微前端都应该有自己的连续交付管道，在生产过程中构建、测试和部署它。我们应该能够在部署每个微前端项目时，很少考虑到其他代码库当前状态。不管旧的，还是隔壁老王的团队将一个半成品或过时的特性推到他们的主分支中，这都不重要。因为各自的项目可以独立部署，这个该由构建和维护它的团队来决定。而不是别的开发人员或开发团队。</p><p>就像下面这张图，每个团队项目拥有自己的项目仓库，可以对项目构建，测试，部署，并且最终发布组成一个大的应用程序。</p><p><img src="'+l+`" alt="每个微型前端都独立部署到生产中"></p><h4 id="增量升级" tabindex="-1">增量升级 <a class="header-anchor" href="#增量升级" aria-label="Permalink to &quot;增量升级&quot;">​</a></h4><p>在我们的项目中正在使用那些旧的过时的技术，或者是在交付压力下编写的代码所拖累，而现在已经到了完全要重写的时候了。为了避免完全重写的危险，我们更愿意一点一点地扼杀旧的应用程序，同时可以继续交付高质量的项目并使用新特性，而不被这个庞然大物的项目压垮。</p><h4 id="简单并且解耦的代码库" tabindex="-1">简单并且解耦的代码库 <a class="header-anchor" href="#简单并且解耦的代码库" aria-label="Permalink to &quot;简单并且解耦的代码库&quot;">​</a></h4><p>每个单独的微前端的源代码都比单个整体前端的源代码小得多。对于我们开发人员来说，这些较小的代码库往往更简单、更容易使用。特别是，我们避免了组件之间不应该相互了解的非故意和不适当耦合所带来的复杂性。</p><p>就比如说A团队有一块和B团队有一块的需求差不多，但是B团队要对A团队的代码上做一些处理才能满足B团队的需求。要嘛高度抽象出公共业务组件，要嘛就在项目内开发。避免像蜘蛛网一样的项目之间引用。</p><h4 id="自治团队" tabindex="-1">自治团队 <a class="header-anchor" href="#自治团队" aria-label="Permalink to &quot;自治团队&quot;">​</a></h4><p>作为将我们的代码库和发布周期解耦的好处，就是我们可以拥有完全独立的团队开发，他们可以拥有产品的一部分，从构思到生产，甚至更远。这使得团队能够快速有效地行动。为了实现这一点，我们的团队只需要围绕业务功能的垂直部分去开发，而不是围绕技术能力。一种简单的方法是根据最终用户将看到的内容划分产品，因此每个微前端封装应用程序的单个页面，并由单个团队端到端拥有。</p><h2 id="_4、微前端的实现方式" tabindex="-1">4、微前端的实现方式 <a class="header-anchor" href="#_4、微前端的实现方式" aria-label="Permalink to &quot;4、微前端的实现方式&quot;">​</a></h2><h4 id="通过构建时集成" tabindex="-1">通过构建时集成 <a class="header-anchor" href="#通过构建时集成" aria-label="Permalink to &quot;通过构建时集成&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;name&quot;: &quot;@feed-me/container&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;description&quot;: &quot;A food delivery web app&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;@feed-me/browse-restaurants&quot;: &quot;^1.2.3&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;@feed-me/order-food&quot;: &quot;^4.5.6&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;@feed-me/user-profile&quot;: &quot;^7.8.9&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;name&quot;: &quot;@feed-me/container&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;version&quot;: &quot;1.0.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;description&quot;: &quot;A food delivery web app&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;dependencies&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;@feed-me/browse-restaurants&quot;: &quot;^1.2.3&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;@feed-me/order-food&quot;: &quot;^4.5.6&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;@feed-me/user-profile&quot;: &quot;^7.8.9&quot;</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>从上面可以看到browse项目由一个团队开发，order项目由一个团队开发，user项目又由另一个团队开发，最终会在一个统一的项目中去打包发布项目。</p><p>这种方法意味着我们必须重新编译和发布每一个微前端，以便更新对产品任何单独部分的更改。就像微服务一样，我们已经看到了这种同步发布过程所带来的痛苦，因此我们强烈建议不要在微前端中沿使用这种方法。</p><p>在将应用程序划分为可独立开发和测试的离散代码库时遇到的所有麻烦之后，我们不要在发布阶段重新引入所有耦合。我们应该找到一种方法在运行时集成我们的微前端，而不是在构建时集成。</p><h4 id="通过iframe进行运行时集成" tabindex="-1">通过iframe进行运行时集成 <a class="header-anchor" href="#通过iframe进行运行时集成" aria-label="Permalink to &quot;通过iframe进行运行时集成&quot;">​</a></h4><p>在浏览器中组合应用程序的最简单方法之一是iframe。从本质上讲，iframe使的独立的子页面构建变得很容易。它们还在样式化和全局变量之间提供了良好的隔离，不会相互干扰。只要我们谨慎地划分应用程序和组建团队，iframes就很适合。</p><p>但是也有一些不好的地方，比如全局loading，跨应用之间通信，子应用路由管理，历史记录等等问题。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Feed me!&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;h1&gt;Welcome to Feed me!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;iframe id=&quot;micro-frontend-container&quot;&gt;&lt;/iframe&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      const microFrontendsByRoute = {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;/&#39;: &#39;https://browse.example.com/index.html&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;/order-food&#39;: &#39;https://order.example.com/index.html&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;/user-profile&#39;: &#39;https://profile.example.com/index.html&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      const iframe = document.getElementById(&#39;micro-frontend-container&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">      iframe.src = microFrontendsByRoute[window.location.pathname];</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Feed me!&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;h1&gt;Welcome to Feed me!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;iframe id=&quot;micro-frontend-container&quot;&gt;&lt;/iframe&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">      const microFrontendsByRoute = {</span></span>
<span class="line"><span style="color:#24292e;">        &#39;/&#39;: &#39;https://browse.example.com/index.html&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;/order-food&#39;: &#39;https://order.example.com/index.html&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;/user-profile&#39;: &#39;https://profile.example.com/index.html&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      const iframe = document.getElementById(&#39;micro-frontend-container&#39;);</span></span>
<span class="line"><span style="color:#24292e;">      iframe.src = microFrontendsByRoute[window.location.pathname];</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><h4 id="通过javascript运行时集成" tabindex="-1">通过JavaScript运行时集成 <a class="header-anchor" href="#通过javascript运行时集成" aria-label="Permalink to &quot;通过JavaScript运行时集成&quot;">​</a></h4><p>下面是一个简单的例子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Feed me!&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;h1&gt;Welcome to Feed me!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!-- 这些脚本不会立即渲染任何东西 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;!-- 相反，它们将入口点函数附加到窗口上 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;https://browse.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;https://order.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;https://profile.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div id=&quot;micro-frontend-root&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 这些全局函数通过上面的脚本附加到window上</span></span>
<span class="line"><span style="color:#e1e4e8;">      const microFrontendsByRoute = {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;/&#39;: window.renderBrowseRestaurants,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;/order-food&#39;: window.renderOrderFood,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;/user-profile&#39;: window.renderUserProfile,</span></span>
<span class="line"><span style="color:#e1e4e8;">      };</span></span>
<span class="line"><span style="color:#e1e4e8;">      const renderFunction = microFrontendsByRoute[window.location.pathname];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      // 确定了入口函数后，我们现在称它为，</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 给它应该呈现自身的元素ID</span></span>
<span class="line"><span style="color:#e1e4e8;">      renderFunction(&#39;micro-frontend-root&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Feed me!&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;h1&gt;Welcome to Feed me!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;!-- 这些脚本不会立即渲染任何东西 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;!-- 相反，它们将入口点函数附加到窗口上 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;https://browse.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;https://order.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;https://profile.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;micro-frontend-root&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">      // 这些全局函数通过上面的脚本附加到window上</span></span>
<span class="line"><span style="color:#24292e;">      const microFrontendsByRoute = {</span></span>
<span class="line"><span style="color:#24292e;">        &#39;/&#39;: window.renderBrowseRestaurants,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;/order-food&#39;: window.renderOrderFood,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;/user-profile&#39;: window.renderUserProfile,</span></span>
<span class="line"><span style="color:#24292e;">      };</span></span>
<span class="line"><span style="color:#24292e;">      const renderFunction = microFrontendsByRoute[window.location.pathname];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      // 确定了入口函数后，我们现在称它为，</span></span>
<span class="line"><span style="color:#24292e;">      // 给它应该呈现自身的元素ID</span></span>
<span class="line"><span style="color:#24292e;">      renderFunction(&#39;micro-frontend-root&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p>假设每个微前端应用都使用<code>&lt;script&gt;</code>包含在页面上，加载时公开一个全局函数作为它的入口点。主应用程序然后决定应该安装哪个微前端，并调用相关的函数来告诉微前端何时何地渲染自己。</p><p>那这种形式就更升级一点，但是这种形式就牵扯出一些问题：比如样式污染和全局变量污染，等等问题。但是这些都可以解决。</p><p>上面这块儿不应该是上来就把所有的<code>script</code>都加载进来，本来浏览器的优势就在说可以实现增量下载。所以真正实现的时候应该是做到增量下载。</p><h4 id="通过web组件进行运行时集成" tabindex="-1">通过Web组件进行运行时集成 <a class="header-anchor" href="#通过web组件进行运行时集成" aria-label="Permalink to &quot;通过Web组件进行运行时集成&quot;">​</a></h4><p>与上一种方法不同的是，每个微前端项目都为主应用容器 实例化自定义的HTML元素，而不是为主应用容器定义要调用的全局函数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;title&gt;Feed me!&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;h1&gt;Welcome to Feed me!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;https://browse.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;https://order.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script src=&quot;https://profile.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;div id=&quot;micro-frontend-root&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">      const webComponentsByRoute = {</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;/&#39;: &#39;micro-frontend-browse-restaurants&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;/order-food&#39;: &#39;micro-frontend-order-food&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;/user-profile&#39;: &#39;micro-frontend-user-profile&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      };</span></span>
<span class="line"><span style="color:#e1e4e8;">      </span></span>
<span class="line"><span style="color:#e1e4e8;">      // 通过路由获取应该挂载的组件</span></span>
<span class="line"><span style="color:#e1e4e8;">      const webComponentType = webComponentsByRoute[window.location.pathname];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      const root = document.getElementById(&#39;micro-frontend-root&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">      const webComponent = document.createElement(webComponentType);</span></span>
<span class="line"><span style="color:#e1e4e8;">      root.appendChild(webComponent);</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;html&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;title&gt;Feed me!&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;h1&gt;Welcome to Feed me!&lt;/h1&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;https://browse.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;https://order.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;script src=&quot;https://profile.example.com/bundle.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;div id=&quot;micro-frontend-root&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    &lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">      const webComponentsByRoute = {</span></span>
<span class="line"><span style="color:#24292e;">        &#39;/&#39;: &#39;micro-frontend-browse-restaurants&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;/order-food&#39;: &#39;micro-frontend-order-food&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;/user-profile&#39;: &#39;micro-frontend-user-profile&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      };</span></span>
<span class="line"><span style="color:#24292e;">      </span></span>
<span class="line"><span style="color:#24292e;">      // 通过路由获取应该挂载的组件</span></span>
<span class="line"><span style="color:#24292e;">      const webComponentType = webComponentsByRoute[window.location.pathname];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      const root = document.getElementById(&#39;micro-frontend-root&#39;);</span></span>
<span class="line"><span style="color:#24292e;">      const webComponent = document.createElement(webComponentType);</span></span>
<span class="line"><span style="color:#24292e;">      root.appendChild(webComponent);</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><h2 id="_5、微前端的落地实现" tabindex="-1">5、微前端的落地实现 <a class="header-anchor" href="#_5、微前端的落地实现" aria-label="Permalink to &quot;5、微前端的落地实现&quot;">​</a></h2><p>通过JavaScript运行时集成的实现原理：拦截路由，根据不同路由规则渲染对应的子应用。</p><p>核心要做的事情：</p><ol><li>路由管理</li><li>增量加载子应用</li><li>应用间运行时隔离</li><li>应用间通信</li></ol><h3 id="路由管理" tabindex="-1">路由管理 <a class="header-anchor" href="#路由管理" aria-label="Permalink to &quot;路由管理&quot;">​</a></h3><p>前端路由管理实现方法主要有两种方法：location.hash和window.history</p><h4 id="hash" tabindex="-1">Hash <a class="header-anchor" href="#hash" aria-label="Permalink to &quot;Hash&quot;">​</a></h4><p>hash（“#”）符号的本来作用是加在URL中指示网页中的位置(<a href="http://www.example.com/index.html#print" target="_blank" rel="noreferrer">http://www.example.com/index.html#print</a>)。<code>#</code>符号本身以及它后面的字符称之为hash，它具有如下特点：</p><p>hash虽然出现在URL中，但不会被包括在HTTP请求中。它是用来指导浏览器动作的，对服务器端完全无用，因此，改变hash不会重新加载页面,可以为hash的改变添加监听事件：</p><blockquote><p>window.addEventListener(&quot;hashchange&quot;, funcRef, false)</p></blockquote><p>每一次改变hash（window.location.hash），都会在浏览器的访问历史中增加一个记录，利用hash的以上特点，就可以来实现前端路由“更新视图但不重新请求页面”的功能了。</p><h4 id="history" tabindex="-1">History <a class="header-anchor" href="#history" aria-label="Permalink to &quot;History&quot;">​</a></h4><p>History接口 是浏览器历史记录栈提供的接口，通过back(), forward(), go()等方法，我们可以读取浏览器历史记录栈的信息，进行各种跳转操作。</p><p>从HTML5开始，History interface提供了两个新的方法：pushState(), replaceState()使得我们可以对浏览器历史记录栈进行修改：</p><blockquote><p>window.history.pushState(stateObject, title, URL)<br> window.history.replaceState(stateObject, title, URL)</p></blockquote><blockquote><p>window.addEventListener(&#39;popstate&#39;, funcRef, false)</p></blockquote><p>stateObject: 当浏览器跳转到新的状态时，将触发popState事件</p><p>这两个方法有个共同的特点：当调用他们修改浏览器历史记录栈后，虽然当前URL改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。</p><h3 id="增量加载子应用" tabindex="-1">增量加载子应用 <a class="header-anchor" href="#增量加载子应用" aria-label="Permalink to &quot;增量加载子应用&quot;">​</a></h3><p>sea.js提供了异步加载模块的方式<code>require.async(id, callback?)</code>去实现增量下载子应用。</p><h3 id="应用间运行时隔离" tabindex="-1">应用间运行时隔离 <a class="header-anchor" href="#应用间运行时隔离" aria-label="Permalink to &quot;应用间运行时隔离&quot;">​</a></h3><h3 id="应用间通信" tabindex="-1">应用间通信 <a class="header-anchor" href="#应用间通信" aria-label="Permalink to &quot;应用间通信&quot;">​</a></h3><h4 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h4><ol><li><a href="https://martinfowler.com/articles/micro-frontends.html" target="_blank" rel="noreferrer">微前端</a></li><li><a href="https://juejin.cn/post/6896643767353212935" target="_blank" rel="noreferrer">解密微前端：从qiankun看沙箱隔离</a></li></ol>`,67),o=[p];function c(r,i,d,h,y,u){return e(),n("div",null,o)}const g=s(t,[["render",c]]);export{q as __pageData,g as default};
