import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.0f4e1e9e.js";const p="/static/a.0ec79bd9.jpg",f=JSON.parse('{"title":"CSS matrix 详解","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/详解 之 CSS matrix /README.md","filePath":"frontend/详解 之 CSS matrix /README.md"}'),l={name:"frontend/详解 之 CSS matrix /README.md"},o=e(`<h1 id="css-matrix-详解" tabindex="-1">CSS matrix 详解 <a class="header-anchor" href="#css-matrix-详解" aria-label="Permalink to &quot;CSS matrix 详解&quot;">​</a></h1><p>一个元素渲染后就可以得到一张位图，然后对这个位图上每一点进行变换，就可以得到新的一张位图，从而产生了视觉上的平移translate、旋转rotate、缩放scale、拉伸skew 等效果。这一切都是变换矩阵的功劳。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">selector {</span></span>
<span class="line"><span style="color:#e1e4e8;">    transform: matrix(a, b, c, d, e, f);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">selector {</span></span>
<span class="line"><span style="color:#24292e;">    transform: matrix(a, b, c, d, e, f);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><img src="`+p+`" alt=""></p><p>2D 的转换是由一个 3*3 的矩阵表示的，前两行代表转换的值，分别是 a b c d e f，要注意是竖着排的，第一行代表 x 轴发生的变化，第二行代表 y 轴发生的变化，第三行代表 z 轴发生的变化，因为这里是 2D 不涉及 z 轴，所以这里是 0 0 1。</p><h3 id="缩放" tabindex="-1">缩放 <a class="header-anchor" href="#缩放" aria-label="Permalink to &quot;缩放&quot;">​</a></h3><p>缩放对应的是矩阵中的 a 和 d，x 轴的缩放比例对应 a，y 轴的缩放比例对应 d。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">transform: scale(1.5, 1.2);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">a=1.5 </span></span>
<span class="line"><span style="color:#e1e4e8;">d=1.2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">transform: matrix(1.5, 0, 0, 2, 0, 0);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">transform: scale(1.5, 1.2);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">a=1.5 </span></span>
<span class="line"><span style="color:#24292e;">d=1.2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">transform: matrix(1.5, 0, 0, 2, 0, 0);</span></span></code></pre></div><h3 id="平移" tabindex="-1">平移 <a class="header-anchor" href="#平移" aria-label="Permalink to &quot;平移&quot;">​</a></h3><p>平移对应的是矩阵中的 e 和 f，平移的 x 和 y 分别对应 e 和 f。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">transform: translate(10, 20)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">e=10</span></span>
<span class="line"><span style="color:#e1e4e8;">f=20</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">transform: matrix(a, b, c, d, 10, 20);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">transform: translate(10, 20)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">e=10</span></span>
<span class="line"><span style="color:#24292e;">f=20</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">transform: matrix(a, b, c, d, 10, 20);</span></span></code></pre></div><h3 id="旋转" tabindex="-1">旋转 <a class="header-anchor" href="#旋转" aria-label="Permalink to &quot;旋转&quot;">​</a></h3><p>旋转影响的是a/b/c/d四个值，分别是什么呢？</p><p>a=cosθ b=sinθ c=-sinθ d=cosθ</p><p>如果要计算 30° 的sin值：</p><p>// 弧度和角度的转换公式：弧度=π/180×角度</p><p>const radian = Math.PI / 180 * 30 // 算出弧度</p><p>const sin = Math.sin(radian) // 计算 sinθ const cos = Math.cos(radian) // 计算 cosθ</p><p>console.log(sin, cos) // 输出 ≈ 0.5, 0.866</p><p>如果我们不考虑缩放和偏移，只旋转30°，矩阵应该表示为</p><p>transform: rotate(30deg)</p><p>a=0.866 b=0.5 c=-0.5 d=0.866</p><p>transform: matrix(0.866, 0.5, -0.5, 0.866, 0, 0);</p><h3 id="拉伸" tabindex="-1">拉伸 <a class="header-anchor" href="#拉伸" aria-label="Permalink to &quot;拉伸&quot;">​</a></h3><p>拉伸也是由两个参数组成，x 轴和 y 轴，分别对应矩阵中的 c 和 b。 是 x 对应 c，y 对应 b， 这个对应并不是相等，需要对 skew 的 x 值 和 y 值进行 tan 运算。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">transform: skew(20deg, 30deg);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">b=tan30°</span></span>
<span class="line"><span style="color:#e1e4e8;">c=tan20°</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 先创建一个方法，直接返回角度的tan值 </span></span>
<span class="line"><span style="color:#e1e4e8;">function tan (deg) { const radian = Math.PI / 180 * deg return Math.tan(radian) } </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const b = tan(30) </span></span>
<span class="line"><span style="color:#e1e4e8;">const c = tan(20) </span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(b, c) // 输出 ≈ 0.577, 0.364</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">b=0.577 c=0.364</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">transform: matrix(1, 0.577, 0.364, 1, 0, 0)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">transform: skew(20deg, 30deg);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">b=tan30°</span></span>
<span class="line"><span style="color:#24292e;">c=tan20°</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 先创建一个方法，直接返回角度的tan值 </span></span>
<span class="line"><span style="color:#24292e;">function tan (deg) { const radian = Math.PI / 180 * deg return Math.tan(radian) } </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const b = tan(30) </span></span>
<span class="line"><span style="color:#24292e;">const c = tan(20) </span></span>
<span class="line"><span style="color:#24292e;">console.log(b, c) // 输出 ≈ 0.577, 0.364</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">b=0.577 c=0.364</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">transform: matrix(1, 0.577, 0.364, 1, 0, 0)</span></span></code></pre></div><p>矩阵可以对向量进行转换?</p><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><ul><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function</a></p></li><li><p><a href="https://juejin.cn/post/6844903616629719054" target="_blank" rel="noreferrer">理解 CSS3 transform 中的 matrix</a></p></li></ul>`,29),t=[o];function c(r,i,d,h,y,m){return a(),n("div",null,t)}const g=s(l,[["render",c]]);export{f as __pageData,g as default};
