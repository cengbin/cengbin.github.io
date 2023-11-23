import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.2eebfdfc.js";const g=JSON.parse('{"title":"多列照片墙实现","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/7 多列照片墙实现技术/README.md","filePath":"frontend/7 多列照片墙实现技术/README.md"}'),p={name:"frontend/7 多列照片墙实现技术/README.md"},e=l(`<h1 id="多列照片墙实现" tabindex="-1">多列照片墙实现 <a class="header-anchor" href="#多列照片墙实现" aria-label="Permalink to &quot;多列照片墙实现&quot;">​</a></h1><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 列数（由总宽度与每列宽度计算得出）</span></span>
<span class="line"><span style="color:#e1e4e8;">  columnCount: 0,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 列默认宽度</span></span>
<span class="line"><span style="color:#e1e4e8;">  columnDefaultWidth: 250,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 每列宽度（PC端等于列默认宽度，移动端等于屏幕宽度）</span></span>
<span class="line"><span style="color:#e1e4e8;">  columnWidth: 0,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 设置列与列之间的间距</span></span>
<span class="line"><span style="color:#e1e4e8;">  columnGap: 5,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 所有列中最大高度</span></span>
<span class="line"><span style="color:#e1e4e8;">  columnMaxHeight: 0,</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 记录列高度数组</span></span>
<span class="line"><span style="color:#e1e4e8;">  columnHeightArr: [],</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 所有图片</span></span>
<span class="line"><span style="color:#e1e4e8;">  imageList: [],</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  // 列数（由总宽度与每列宽度计算得出）</span></span>
<span class="line"><span style="color:#24292e;">  columnCount: 0,</span></span>
<span class="line"><span style="color:#24292e;">  // 列默认宽度</span></span>
<span class="line"><span style="color:#24292e;">  columnDefaultWidth: 250,</span></span>
<span class="line"><span style="color:#24292e;">  // 每列宽度（PC端等于列默认宽度，移动端等于屏幕宽度）</span></span>
<span class="line"><span style="color:#24292e;">  columnWidth: 0,</span></span>
<span class="line"><span style="color:#24292e;">  // 设置列与列之间的间距</span></span>
<span class="line"><span style="color:#24292e;">  columnGap: 5,</span></span>
<span class="line"><span style="color:#24292e;">  // 所有列中最大高度</span></span>
<span class="line"><span style="color:#24292e;">  columnMaxHeight: 0,</span></span>
<span class="line"><span style="color:#24292e;">  // 记录列高度数组</span></span>
<span class="line"><span style="color:#24292e;">  columnHeightArr: [],</span></span>
<span class="line"><span style="color:#24292e;">  // 所有图片</span></span>
<span class="line"><span style="color:#24292e;">  imageList: [],</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><p>1、计算需要展示的列数、列宽、列与列之间的间隙。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function calculate() {</span></span>
<span class="line"><span style="color:#e1e4e8;">  let columnCount = 2</span></span>
<span class="line"><span style="color:#e1e4e8;">  let columnGap = 5</span></span>
<span class="line"><span style="color:#e1e4e8;">  let columnWidth = (window.innerWidth - 10 - columnGap) / 2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  columnCount = columnCount &gt; 4</span></span>
<span class="line"><span style="color:#e1e4e8;">    ? 4</span></span>
<span class="line"><span style="color:#e1e4e8;">    : columnCount &lt; 1</span></span>
<span class="line"><span style="color:#e1e4e8;">      ? 1</span></span>
<span class="line"><span style="color:#e1e4e8;">      : columnCount</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  return {</span></span>
<span class="line"><span style="color:#e1e4e8;">    columnCount,</span></span>
<span class="line"><span style="color:#e1e4e8;">    columnGap,</span></span>
<span class="line"><span style="color:#e1e4e8;">    columnWidth</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function calculate() {</span></span>
<span class="line"><span style="color:#24292e;">  let columnCount = 2</span></span>
<span class="line"><span style="color:#24292e;">  let columnGap = 5</span></span>
<span class="line"><span style="color:#24292e;">  let columnWidth = (window.innerWidth - 10 - columnGap) / 2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  columnCount = columnCount &gt; 4</span></span>
<span class="line"><span style="color:#24292e;">    ? 4</span></span>
<span class="line"><span style="color:#24292e;">    : columnCount &lt; 1</span></span>
<span class="line"><span style="color:#24292e;">      ? 1</span></span>
<span class="line"><span style="color:#24292e;">      : columnCount</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  return {</span></span>
<span class="line"><span style="color:#24292e;">    columnCount,</span></span>
<span class="line"><span style="color:#24292e;">    columnGap,</span></span>
<span class="line"><span style="color:#24292e;">    columnWidth</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>2、加载图片判断当前图片应该显示在哪列，并重新计算当前列的高度以及列的最大高度。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  async </span><span style="color:#B392F0;">load</span><span style="color:#E1E4E8;">(arr) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> i </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; i </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> arr.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; i</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> url </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> arr[i]</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> image </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">asyncLoadImage</span><span style="color:#E1E4E8;">(url).</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;err 加载图片错误：&#39;</span><span style="color:#E1E4E8;">, url, err)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">image) </span><span style="color:#F97583;">return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> finalHeight </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.columnWidth) </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> (image.width </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> image.height) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.columnGap</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// console.log(image.width, image.height, finalHeight)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Math.</span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.columnHeightArr)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> minIndex </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.columnHeightArr.</span><span style="color:#B392F0;">indexOf</span><span style="color:#E1E4E8;">(min)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> item </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        url,</span></span>
<span class="line"><span style="color:#E1E4E8;">        image,</span></span>
<span class="line"><span style="color:#E1E4E8;">        top: min,</span></span>
<span class="line"><span style="color:#E1E4E8;">        left: minIndex </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.columnWidth </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.columnGap),</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.columnHeightArr[minIndex] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> min </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> finalHeight</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setState</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        columnMaxHeight: Math.</span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">...</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.columnHeightArr),</span></span>
<span class="line"><span style="color:#E1E4E8;">        imageList: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.state.imageList.</span><span style="color:#B392F0;">concat</span><span style="color:#E1E4E8;">(item)</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  async </span><span style="color:#6F42C1;">load</span><span style="color:#24292E;">(arr) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> arr.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; i</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> url </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> arr[i]</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> image </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">asyncLoadImage</span><span style="color:#24292E;">(url).</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;err 加载图片错误：&#39;</span><span style="color:#24292E;">, url, err)</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">image) </span><span style="color:#D73A49;">return</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> finalHeight </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.columnWidth) </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> (image.width </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> image.height) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.columnGap</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// console.log(image.width, image.height, finalHeight)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> min </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Math.</span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.columnHeightArr)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> minIndex </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.columnHeightArr.</span><span style="color:#6F42C1;">indexOf</span><span style="color:#24292E;">(min)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> item </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        url,</span></span>
<span class="line"><span style="color:#24292E;">        image,</span></span>
<span class="line"><span style="color:#24292E;">        top: min,</span></span>
<span class="line"><span style="color:#24292E;">        left: minIndex </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.columnWidth </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.columnGap),</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.columnHeightArr[minIndex] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> min </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> finalHeight</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setState</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        columnMaxHeight: Math.</span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">...</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.columnHeightArr),</span></span>
<span class="line"><span style="color:#24292E;">        imageList: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.state.imageList.</span><span style="color:#6F42C1;">concat</span><span style="color:#24292E;">(item)</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  render() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return (&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">className</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">{{height:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">this.state.columnMaxHeight</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">&#39;px&#39;}}</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        this.state.imageList.map((item, idx) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">          return (&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">className</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;list-item&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">{{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">width:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">this.columnWidth</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">&quot;px&quot;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">left:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">item.left</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">&#39;px&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">top:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">item.top</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">}}</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">{idx}</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">{item.url}</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;)</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  render() {</span></span>
<span class="line"><span style="color:#24292E;">    return (&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">className</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">{{height:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">this.state.columnMaxHeight</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">+</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">&#39;px&#39;}}</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        this.state.imageList.map((item, idx) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">          return (&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">className</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;list-item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">{{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">width:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">this.columnWidth</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">+</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">&quot;px&quot;,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">left:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">item.left</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">+</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">&#39;px&#39;,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">top:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">item.top</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">+</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">&#39;px&#39;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">}}</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">{idx}</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">{item.url}</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;)</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div><p>2、如果图片下方还有文本，且长度不定，那就需要动态计算文本高度 + 图片的高度。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (title || desc) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      let ele = this.$refs[imgItem.id][0];</span></span>
<span class="line"><span style="color:#e1e4e8;">      let bottomEle = ele.querySelectorAll(&#39;.bottom&#39;)[0];</span></span>
<span class="line"><span style="color:#e1e4e8;">      let {height} = bottomEle.getBoundingClientRect();</span></span>
<span class="line"><span style="color:#e1e4e8;">      imgItem.bottomHeight = height;</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    let w = this.columnWidth;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let h = (w - 10) / (img.width / img.height);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    let minVal = Math.min(...this.columnHeightArr);</span></span>
<span class="line"><span style="color:#e1e4e8;">    let index = this.columnHeightArr.indexOf(minVal);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    let left = index * w;</span></span>
<span class="line"><span style="color:#e1e4e8;">    let top = minVal;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    imgItem.left = left;</span></span>
<span class="line"><span style="color:#e1e4e8;">    imgItem.top = top;</span></span>
<span class="line"><span style="color:#e1e4e8;">    imgItem.height = h;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    this.columnHeightArr[index] += (h + imgItem.bottomHeight + imgItem.padding);</span></span>
<span class="line"><span style="color:#e1e4e8;">    this.columnMaxHeight = Math.max(...this.columnHeightArr);</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">this.$nextTick(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    if (title || desc) {</span></span>
<span class="line"><span style="color:#24292e;">      let ele = this.$refs[imgItem.id][0];</span></span>
<span class="line"><span style="color:#24292e;">      let bottomEle = ele.querySelectorAll(&#39;.bottom&#39;)[0];</span></span>
<span class="line"><span style="color:#24292e;">      let {height} = bottomEle.getBoundingClientRect();</span></span>
<span class="line"><span style="color:#24292e;">      imgItem.bottomHeight = height;</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    let w = this.columnWidth;</span></span>
<span class="line"><span style="color:#24292e;">    let h = (w - 10) / (img.width / img.height);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    let minVal = Math.min(...this.columnHeightArr);</span></span>
<span class="line"><span style="color:#24292e;">    let index = this.columnHeightArr.indexOf(minVal);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    let left = index * w;</span></span>
<span class="line"><span style="color:#24292e;">    let top = minVal;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    imgItem.left = left;</span></span>
<span class="line"><span style="color:#24292e;">    imgItem.top = top;</span></span>
<span class="line"><span style="color:#24292e;">    imgItem.height = h;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    this.columnHeightArr[index] += (h + imgItem.bottomHeight + imgItem.padding);</span></span>
<span class="line"><span style="color:#24292e;">    this.columnMaxHeight = Math.max(...this.columnHeightArr);</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div>`,11),o=[e];function t(c,r,i,y,E,h){return n(),a("div",null,o)}const u=s(p,[["render",t]]);export{g as __pageData,u as default};
