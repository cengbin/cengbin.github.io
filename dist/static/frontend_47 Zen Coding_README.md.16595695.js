import{_ as t,o as s,c as l,Q as e}from"./chunks/framework.0f4e1e9e.js";const a="/static/20170427113622589.2526e583.jpeg",y=JSON.parse('{"title":"Zen Coding","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/47 Zen Coding/README.md","filePath":"frontend/47 Zen Coding/README.md"}'),n={name:"frontend/47 Zen Coding/README.md"},o=e(`<h1 id="zen-coding" tabindex="-1">Zen Coding <a class="header-anchor" href="#zen-coding" aria-label="Permalink to &quot;Zen Coding&quot;">​</a></h1><p>使用仿CSS选择器的语法来快速开发HTML和CSS ——由Sergey Chikuyonok开发。</p><p>Zen Coding由两个核心组件组成：一个缩写扩展器(缩写为像CSS一样的选择器)和上下文无关的HTML标签对匹配器。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">body&gt;(div#head&gt;div.title.title1&gt;p[title=&quot;hello world&quot;,v-for=&#39;item,idx in data&#39;,:key=idx]&gt;a{Click me})+(div#main&gt;(div.left&gt;div{hello $}*5)+(div.right))+(div#footer)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">body&gt;(div#head&gt;div.title.title1&gt;p[title=&quot;hello world&quot;,v-for=&#39;item,idx in data&#39;,:key=idx]&gt;a{Click me})+(div#main&gt;(div.left&gt;div{hello $}*5)+(div.right))+(div#footer)</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;div id=&quot;head&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	  &lt;div class=&quot;title title1&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	    &lt;p title=&quot;hello world&quot; v-for=&quot;item,idx in data&quot; :key=&quot;&quot;&gt;&lt;a href=&quot;&quot;&gt;Click me&lt;/a&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;div id=&quot;main&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	  &lt;div class=&quot;left&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	    &lt;div&gt;hello 1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	    &lt;div&gt;hello 2&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	    &lt;div&gt;hello 3&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	    &lt;div&gt;hello 4&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	    &lt;div&gt;hello 5&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;div id=&quot;footer&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/body&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;div id=&quot;head&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	  &lt;div class=&quot;title title1&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	    &lt;p title=&quot;hello world&quot; v-for=&quot;item,idx in data&quot; :key=&quot;&quot;&gt;&lt;a href=&quot;&quot;&gt;Click me&lt;/a&gt;&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292e;">	  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;div id=&quot;main&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	  &lt;div class=&quot;left&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	    &lt;div&gt;hello 1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	    &lt;div&gt;hello 2&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	    &lt;div&gt;hello 3&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	    &lt;div&gt;hello 4&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	    &lt;div&gt;hello 5&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	  &lt;div class=&quot;right&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;div id=&quot;footer&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/body&gt;</span></span></code></pre></div><p><img src="`+a+'" alt=""></p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://github.com/mattn/emmet-vim" target="_blank" rel="noreferrer">https://github.com/mattn/emmet-vim Github</a></li><li><a href="https://baike.baidu.com/item/Zen%20Coding/10219092?fr=aladdin" target="_blank" rel="noreferrer">https://baike.baidu.com/item/Zen%20Coding/10219092?fr=aladdin</a></li></ul>',8),i=[o];function p(d,c,r,g,v,u){return s(),l("div",null,i)}const q=t(n,[["render",p]]);export{y as __pageData,q as default};
