import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.0f4e1e9e.js";const h=JSON.parse('{"title":"StyleLint","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/1 前端工程化/3 规范化/StyleLint.md","filePath":"frontend/1 前端工程化/3 规范化/StyleLint.md"}'),l={name:"frontend/1 前端工程化/3 规范化/StyleLint.md"},t=a(`<h1 id="stylelint" tabindex="-1">StyleLint <a class="header-anchor" href="#stylelint" aria-label="Permalink to &quot;StyleLint&quot;">​</a></h1><h2 id="stylelint-介绍" tabindex="-1">StyleLint 介绍 <a class="header-anchor" href="#stylelint-介绍" aria-label="Permalink to &quot;StyleLint 介绍&quot;">​</a></h2><p>StyleLint 是一个强大的、现代化的 CSS 检测工具, 是通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误。</p><h2 id="stylelint-使用" tabindex="-1">StyleLint 使用 <a class="header-anchor" href="#stylelint-使用" aria-label="Permalink to &quot;StyleLint 使用&quot;">​</a></h2><p><strong>安装</strong></p><p><code>npm install stylelint@14.6.0 stylint-config-standard@25.0.0 stylelint-order@5.0.0 --save-dev</code></p><p>stylelint：规则检查工具 stylelint-config-standard：关于规范、风格约束的规则集，其中已经做了许多规则的配置 stylelint-order：对css属性进行排序的插件工具 stylelint-config-recess-order：社区提供的属性排序的规则集</p><p><strong>配置</strong></p><p>配置 <code>.stylelintrc.js</code> 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;extends&quot;: [&quot;stylelint-config-standard&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;plugins&quot;: [&quot;stylelint-order&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;rules&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		// ...</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">	&quot;extends&quot;: [&quot;stylelint-config-standard&quot;],</span></span>
<span class="line"><span style="color:#24292e;">	&quot;plugins&quot;: [&quot;stylelint-order&quot;],</span></span>
<span class="line"><span style="color:#24292e;">	&quot;rules&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">		// ...</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>属性排序的推荐设置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;extends&quot;: &quot;stylelint-config-standard&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;rules&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;order/properties-order&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;position&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;top&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;right&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;bottom&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;left&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;display&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;flex&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;flex-direction&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;flex-wrap&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;justify-content&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;align-items&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;align-content&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;margin&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;padding&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;width&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;height&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;color&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;background&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;border&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;border-radius&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;font&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;text&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;list&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;animation&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;extends&quot;: &quot;stylelint-config-standard&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;rules&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;order/properties-order&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">      &quot;position&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;top&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;right&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;bottom&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;left&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;display&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;flex&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;flex-direction&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;flex-wrap&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;justify-content&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;align-items&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;align-content&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;margin&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;padding&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;width&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;height&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;color&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;background&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;border&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;border-radius&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;font&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;text&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;list&quot;,</span></span>
<span class="line"><span style="color:#24292e;">      &quot;animation&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>忽略设置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/* stylelint-disable-next-line selector-class-pattern */</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/* stylelint-disable-next-line no-descending-specificity */</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/* stylelint-disable-next-line selector-class-pattern */</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/* stylelint-disable-next-line no-descending-specificity */</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>团队协作统一编码风格：在多人开发的大型项目中，统一的编码风格能够显著降低因样式不一致带来的沟通成本和出错概率。</li><li>代码审查提高代码质量：自动化的属性排序和检查使得代码审查过程更加严格和高效，有助于维持代码质量。</li><li>避免常见错误：检测并报告 CSS 代码中的常见错误，比如拼写错误、无效的属性或值、未关闭的括号等。这有助于开发者在代码提交前及时发现并修复这些问题。</li><li>维护与重构提升工作效率：整齐划一的代码格式让后续的维护和重构工作变得更加轻松，新加入项目的开发者也能更快地理解现有代码，缩短适应代码库的时间。</li></ul><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><p><a href="https://juejin.cn/post/7118294114734440455?searchId=2024031516574914DB2CF497493804EACC" target="_blank" rel="noreferrer">https://juejin.cn/post/7118294114734440455?searchId=2024031516574914DB2CF497493804EACC</a></p><p><a href="https://blog.csdn.net/m0_60273757/article/details/125762025" target="_blank" rel="noreferrer">https://blog.csdn.net/m0_60273757/article/details/125762025</a></p><p><a href="https://juejin.cn/post/6844904112274800647?searchId=20240315165559E0A5D692FD025004FAA7" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904112274800647?searchId=20240315165559E0A5D692FD025004FAA7</a></p><p><a href="https://juejin.cn/post/6876367482412597262?searchId=2024031516574914DB2CF497493804EACC" target="_blank" rel="noreferrer">https://juejin.cn/post/6876367482412597262?searchId=2024031516574914DB2CF497493804EACC</a></p>`,21),o=[t];function p(c,i,r,u,q,d){return n(),e("div",null,o)}const g=s(l,[["render",p]]);export{h as __pageData,g as default};
