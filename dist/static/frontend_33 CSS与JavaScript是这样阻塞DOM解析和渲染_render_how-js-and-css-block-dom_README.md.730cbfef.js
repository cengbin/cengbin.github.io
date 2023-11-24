import{_ as e,o,c,Q as t}from"./chunks/framework.0f4e1e9e.js";const u=JSON.parse('{"title":"原来 CSS 与 JS 是这样阻塞 DOM 解析和渲染的","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/33 CSS与JavaScript是这样阻塞DOM解析和渲染/render/how-js-and-css-block-dom/README.md","filePath":"frontend/33 CSS与JavaScript是这样阻塞DOM解析和渲染/render/how-js-and-css-block-dom/README.md"}'),s={name:"frontend/33 CSS与JavaScript是这样阻塞DOM解析和渲染/render/how-js-and-css-block-dom/README.md"},d=t(`<h1 id="原来-css-与-js-是这样阻塞-dom-解析和渲染的" tabindex="-1">原来 CSS 与 JS 是这样阻塞 DOM 解析和渲染的 <a class="header-anchor" href="#原来-css-与-js-是这样阻塞-dom-解析和渲染的" aria-label="Permalink to &quot;原来 CSS 与 JS 是这样阻塞 DOM 解析和渲染的&quot;">​</a></h1><p>hello~各位亲爱的看官老爷们大家好。估计大家都听过，尽量将<code>CSS</code>放头部，<code>JS</code>放底部，这样可以提高页面的性能。然而，为什么呢？大家有考虑过么？很长一段时间，我都是知其然而不知其所以然，强行背下来应付考核当然可以，但实际应用中必然一塌糊涂。因此洗（wang）心（yang）革（bu）面（lao），小结一下最近玩出来的成果。</p><p>友情提示，本文也是小白向为主，如果直接想看结论可以拉到最下面看的~</p><hr><p>由于关系到文件的读取，那是肯定需要服务器的，我会把全部的文件放在<a href="https://github.com/ljf0113/how-js-and-css-block-dom" target="_blank" rel="noreferrer">github</a>上，给我点个 <strong>star</strong> 我会开心！掘金上再给我点个 <strong>赞</strong> 我就更开心了~</p><p><code>node</code>端唯一需要解释一下的是这个函数：</p><pre><code>function sleep(time) {
  return new Promise(function(res) {
    setTimeout(() =&gt; {
      res()
    }, time);
  })
}
</code></pre><p>嗯！其实就延时啦。如果<code>CSS</code>或者<code>JS</code>文件名有<code>sleep3000</code>之类的前缀时，意思就是延迟3000毫秒才会返回这文件。</p><p>下文使用的<code>HTML</code>文件是长这样的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">    &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    	&lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    	&lt;title&gt;Title&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    	&lt;style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    		div {</span></span>
<span class="line"><span style="color:#e1e4e8;">    			width: 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    			height: 100px;</span></span>
<span class="line"><span style="color:#e1e4e8;">    			background: lightgreen;</span></span>
<span class="line"><span style="color:#e1e4e8;">    		}</span></span>
<span class="line"><span style="color:#e1e4e8;">    	&lt;/style&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    	&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    &lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">    &lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    	&lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    	&lt;title&gt;Title&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">    	&lt;style&gt;</span></span>
<span class="line"><span style="color:#24292e;">    		div {</span></span>
<span class="line"><span style="color:#24292e;">    			width: 100px;</span></span>
<span class="line"><span style="color:#24292e;">    			height: 100px;</span></span>
<span class="line"><span style="color:#24292e;">    			background: lightgreen;</span></span>
<span class="line"><span style="color:#24292e;">    		}</span></span>
<span class="line"><span style="color:#24292e;">    	&lt;/style&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    	&lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">    &lt;/html&gt;</span></span></code></pre></div><p>我会在其中插入不同的<code>JS</code>和<code>CSS</code>。</p><p>而使用的<code>common.css</code>，不论有没有前缀，内容都是这样的：</p><pre><code>div {
  background: red;
}
</code></pre><p>好了，话不多数，开始正文！</p><h2 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h2><p>关于<code>CSS</code>，大家肯定都知道的是<code>&lt;link&gt;</code>标签放在头部性能会高一点，少一点人知道如果<code>&lt;script&gt;</code>与<code>&lt;link&gt;</code>同时在头部的话，<code>&lt;script&gt;</code>在上可能会更好。这是为什么呢？下面我们一起来看一下<code>CSS</code>对<code>DOM</code>的影响是什么。</p><h3 id="css-不会阻塞-dom-的解析" tabindex="-1"><code>CSS</code> 不会阻塞 <code>DOM</code> 的解析 <a class="header-anchor" href="#css-不会阻塞-dom-的解析" aria-label="Permalink to &quot;\`CSS\` 不会阻塞 \`DOM\` 的解析&quot;">​</a></h3><p>注意哦！这里说的是<code>DOM</code> 解析，证明的例子如下，首先在头部插入<code>&lt;script defer src=&quot;/js/logDiv.js&quot;&gt;&lt;/script&gt;</code>，<code>JS</code>文件的内容是：</p><pre><code>const div = document.querySelecot(&#39;div&#39;);
console.log(div);
</code></pre><p><code>defer</code>属性相信大家也很熟悉了，<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script" target="_blank" rel="noreferrer">MDN</a>对此的描述是用来通知浏览器该脚本将在文档完成解析后，触发 DOMContentLoaded 事件前执行。设置这个属性，能保证<code>DOM</code>解析后马上打印出<code>div</code>。</p><p>之后将<code>&lt;link rel=&quot;stylesheet&quot; href=&quot;/css/sleep3000-common.css&quot;&gt;</code>插入<code>HTML</code>文件的任一位置，打开浏览器，可以看到是首先打印出<code>div</code>这个<code>DOM</code>节点，过3s左右之后才渲染出一个浅蓝色的<code>div</code>。这就证明了<code>CSS</code> 是不会阻塞 <code>DOM</code> 的解析的，尽管<code>CSS</code>下载需要3s，但这个过程中，浏览器不会傻等着<code>CSS</code>下载完，而是会解析<code>DOM</code>的。</p><p>这里简单说一下，浏览器是解析<code>DOM</code>生成<code>DOM Tree</code>，结合<code>CSS</code>生成的<code>CSS Tree</code>，最终组成<code>render tree</code>，再渲染页面。由此可见，在此过程中<code>CSS</code>完全无法影响<code>DOM Tree</code>，因而无需阻塞<code>DOM</code>解析。然而，<code>DOM Tree</code>和<code>CSS Tree</code>会组合成<code>render tree</code>，那<code>CSS</code>会不会页面阻塞渲染呢？</p><h3 id="css-阻塞页面渲染" tabindex="-1"><code>CSS</code> 阻塞页面渲染 <a class="header-anchor" href="#css-阻塞页面渲染" aria-label="Permalink to &quot;\`CSS\` 阻塞页面渲染&quot;">​</a></h3><p>其实这一点，刚才的例子已经说明了，如果<code>CSS</code> 不会阻塞页面阻塞渲染，那么<code>CSS</code>文件下载之前，浏览器就会渲染出一个浅绿色的<code>div</code>，之后再变成浅蓝色。浏览器的这个策略其实很明智的，想象一下，如果没有这个策略，页面首先会呈现出一个原始的模样，待<code>CSS</code>下载完之后又突然变了一个模样。用户体验可谓极差，而且渲染是有成本的。</p><p>因此，基于性能与用户体验的考虑，浏览器会尽量减少渲染的次数，<code>CSS</code>顺理成章地阻塞页面渲染。</p><p>然而，事情总有奇怪的，请看这例子，<code>HTML</code>头部结构如下：</p><pre><code>&lt;header&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;/css/sleep3000-common.css&quot;&gt;
    &lt;script src=&quot;/js/logDiv.js&quot;&gt;&lt;/script&gt;
&lt;/header&gt;
</code></pre><p>但思考一下这会产生什么结果呢？</p><p>答案是浏览器会转圈圈三秒，但此过程中不会打印任何东西，之后呈现出一个浅蓝色的<code>div</code>，再打印出<code>null</code>。结果好像是<code>CSS</code>不单阻塞了页面渲染，还阻塞了<code>DOM</code> 的解析啊！稍等，在你打算掀桌子疯狂吐槽我之前，请先思考一下是什么阻塞了<code>DOM</code> 的解析，刚才已经证明了<code>CSS</code>是不会阻塞的，那么阻塞了页面解析其实是<code>JS</code>！但明明<code>JS</code>的代码如此简单，肯定不会阻塞这么久，那就是<code>JS</code>在等待<code>CSS</code>的下载，这是为什么呢？</p><p>仔细思考一下，其实这样做是有道理的，如果脚本的内容是获取元素的样式，宽高等<code>CSS</code>控制的属性，浏览器是需要计算的，也就是依赖于<code>CSS</code>。浏览器也无法感知脚本内容到底是什么，为避免样式获取，因而只好等前面所有的样式下载完后，再执行<code>JS</code>。因而造成了之前例子的情况。</p><p>所以，看官大人明白为何<code>&lt;script&gt;</code>与<code>&lt;link&gt;</code>同时在头部的话，<code>&lt;script&gt;</code>在上可能会更好了么？之所以是可能，是因为如果<code>&lt;link&gt;</code>的内容下载更快的话，是没影响的，但反过来的话，<code>JS</code>就要等待了，然而这些等待的时间是完全不必要的。</p><h2 id="js" tabindex="-1">JS <a class="header-anchor" href="#js" aria-label="Permalink to &quot;JS&quot;">​</a></h2><p><code>JS</code>，也就是<code>&lt;script&gt;</code>标签，估计大家都很熟悉了，不就是阻塞<code>DOM</code>解析和渲染么。然而，其中其实还是有一点细节可以考究一下的，我们一起来好好看看。</p><h3 id="js-阻塞-dom-解析" tabindex="-1"><code>JS</code> 阻塞 <code>DOM</code> 解析 <a class="header-anchor" href="#js-阻塞-dom-解析" aria-label="Permalink to &quot;\`JS\` 阻塞 \`DOM\` 解析&quot;">​</a></h3><p>首先我们需要一个新的<code>JS</code>文件名为<code>blok.js</code>，内容如下：</p><pre><code>const arr = [];
for (let i = 0; i &lt; 10000000; i++) {
  arr.push(i);
  arr.splice(i % 3, i % 7, i % 5);
}
const div = document.querySelector(&#39;div&#39;);
console.log(div);
</code></pre><p>其实那个数组操作时没意义的，只是为了让这个<code>JS</code>文件多花执行时间而已。之后把这个文件插入头部，浏览器跑一下。</p><p>结果估计大家也能想象得到，浏览器转圈圈一会，这过程中不会有任何东西出现。之后打印出<code>null</code>，再出现一个浅绿色的<code>div</code>。现象就足以说明<code>JS</code> 阻塞 <code>DOM</code> 解析了。其实原因也很好理解，浏览器并不知道脚本的内容是什么，如果先行解析下面的<code>DOM</code>，万一脚本内全删了后面的<code>DOM</code>，浏览器就白干活了。更别谈丧心病狂的<code>document.write</code>。浏览器无法预估里面的内容，那就干脆全部停住，等脚本执行完再干活就好了。</p><p>对此的优化其实也很显而易见，具体分为两类。如果<code>JS</code>文件体积太大，同时你确定没必要阻塞<code>DOM</code>解析的话，不妨按需要加上<code>defer</code>或者<code>async</code>属性，此时脚本下载的过程中是不会阻塞<code>DOM</code>解析的。</p><p>而如果是文件执行时间太长，不妨分拆一下代码，不用立即执行的代码，可以使用一下以前的黑科技：<code>setTimeout()</code>。当然，现代的浏览器很聪明，它会“偷看”之后的<code>DOM</code>内容，碰到如<code>&lt;link&gt;</code>、<code>&lt;script&gt;</code>和<code>&lt;img&gt;</code>等标签时，它会帮助我们先行下载里面的资源，不会傻等到解析到那里时才下载。</p><h3 id="浏览器遇到-script-标签时-会触发页面渲染" tabindex="-1">浏览器遇到 <code>&lt;script&gt;</code> 标签时，会触发页面渲染 <a class="header-anchor" href="#浏览器遇到-script-标签时-会触发页面渲染" aria-label="Permalink to &quot;浏览器遇到 \`&lt;script&gt;\` 标签时，会触发页面渲染&quot;">​</a></h3><p>这个细节可能不少看官大人并不清楚，其实这才是解释上面为何<code>JS</code>执行会等待<code>CSS</code>下载的原因。先上例子,<code>HTML</code>内<code>body</code>的结构如下：</p><pre><code>&lt;body&gt;
	&lt;div&gt;&lt;/div&gt;
	&lt;script src=&quot;/js/sleep3000-logDiv.js&quot;&gt;&lt;/script&gt;
	&lt;style&gt;
		div {
			background: lightgrey;
		}
	&lt;/style&gt;
	&lt;script src=&quot;/js/sleep5000-logDiv.js&quot;&gt;&lt;/script&gt;
	&lt;link rel=&quot;stylesheet&quot; href=&quot;/css/common.css&quot;&gt;
&lt;/body&gt;
</code></pre><p>这个例子也是很极端的例子，但不妨碍它透露给我们很多重要的信息。想象一下，页面会怎样呢？</p><p>答案是先浅绿色，再浅灰色，最后浅蓝色。由此可见，每次碰到<code>&lt;script&gt;</code>标签时，浏览器都会渲染一次页面。这是基于同样的理由，浏览器不知道脚本的内容，因而碰到脚本时，只好先渲染页面，确保脚本能获取到最新的<code>DOM</code>元素信息，尽管脚本可能不需要这些信息。</p><h2 id="小结" tabindex="-1">小结 <a class="header-anchor" href="#小结" aria-label="Permalink to &quot;小结&quot;">​</a></h2><p>综上所述，我们得出这样的结论：</p><ul><li><code>CSS</code> 不会阻塞 <code>DOM</code> 的解析，但会阻塞 <code>DOM</code> 渲染。</li><li><code>JS</code> 阻塞 <code>DOM</code> 解析，但浏览器会&quot;偷看&quot;<code>DOM</code>，预先下载相关资源。</li><li>浏览器遇到 <code>&lt;script&gt;</code>且没有<code>defer</code>或<code>async</code>属性的 标签时，会触发页面渲染，因而如果前面<code>CSS</code>资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本。</li></ul><p>所以，你现在明白为何<code>&lt;script&gt;</code>最好放底部，<code>&lt;link&gt;</code>最好放头部，如果头部同时有<code>&lt;script&gt;</code>与<code>&lt;link&gt;</code>的情况下，最好将<code>&lt;script&gt;</code>放在<code>&lt;link&gt;</code>上面了吗？</p><p>感谢各位看官大人看到这里，希望本文对你有所帮助，有不同或更好意见的大佬，还望不吝赐教！谢谢~</p>`,50),n=[d];function l(a,p,r,i,g,S){return o(),c("div",null,n)}const y=e(s,[["render",l]]);export{u as __pageData,y as default};
