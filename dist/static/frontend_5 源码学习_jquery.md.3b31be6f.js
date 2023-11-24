import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.0f4e1e9e.js";const Q=JSON.parse('{"title":"jquery.js 源码学习","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/5 源码学习/jquery.md","filePath":"frontend/5 源码学习/jquery.md"}'),l={name:"frontend/5 源码学习/jquery.md"},p=a(`<h1 id="jquery-js-源码学习" tabindex="-1">jquery.js 源码学习 <a class="header-anchor" href="#jquery-js-源码学习" aria-label="Permalink to &quot;jquery.js 源码学习&quot;">​</a></h1><p>如下极致精简版jquery.js代码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">(function (){</span></span>
<span class="line"><span style="color:#e1e4e8;">    function jQuery(){</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(字符串){</span></span>
<span class="line"><span style="color:#e1e4e8;">        return new JQuery();</span></span>
<span class="line"><span style="color:#e1e4e8;">        }else if(函数){</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    jQuery.fn = jQuery.prototype ={</span></span>
<span class="line"><span style="color:#e1e4e8;">        addClass(){},</span></span>
<span class="line"><span style="color:#e1e4e8;">        removeClass(){},</span></span>
<span class="line"><span style="color:#e1e4e8;">        width(){},</span></span>
<span class="line"><span style="color:#e1e4e8;">        ...</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">    jQuery.ajax = function(){}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    window.$ = window.jQuery = jQuery;</span></span>
<span class="line"><span style="color:#e1e4e8;">})(window)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">(function (){</span></span>
<span class="line"><span style="color:#24292e;">    function jQuery(){</span></span>
<span class="line"><span style="color:#24292e;">        if(字符串){</span></span>
<span class="line"><span style="color:#24292e;">        return new JQuery();</span></span>
<span class="line"><span style="color:#24292e;">        }else if(函数){</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    jQuery.fn = jQuery.prototype ={</span></span>
<span class="line"><span style="color:#24292e;">        addClass(){},</span></span>
<span class="line"><span style="color:#24292e;">        removeClass(){},</span></span>
<span class="line"><span style="color:#24292e;">        width(){},</span></span>
<span class="line"><span style="color:#24292e;">        ...</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">    jQuery.ajax = function(){}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    window.$ = window.jQuery = jQuery;</span></span>
<span class="line"><span style="color:#24292e;">})(window)</span></span></code></pre></div><ul><li><p>全局挂载了$和jquery变量。window.$ === window.jQuery 相等是一个对象, 指向一个函数。</p></li><li><p>jQuery.fn = jQuery.prototype ={} 。</p></li><li><p>jQuery.prototype 这个对象分别实现了addClass,removeClass,hasClass,width,height...等等的属性。所以可以通过扩展jQuery.fn 对象写jquery插件。</p></li><li><p>jQuery.ajax、jQuery.extend 等等这些属性，是作为$和jQqery对象的静态属性挂上去的。</p></li><li><p>调用这个$或jQuery函数根据参数的类型判断具体的返回。</p><ul><li>如果是一个函数，当DOMContentLoaded事件触发的时候会调用这个函数。</li><li>参数是一个字符串返回一个JQuery对象，这个对象的原型就是jQuery.prototype。</li><li>JQuery对象有length属性，对象中的0，1，2...属性分别记录了匹配到dom对象。</li></ul></li></ul>`,4),o=[p];function r(c,t,i,y,u,d){return n(),e("div",null,o)}const _=s(l,[["render",r]]);export{Q as __pageData,_ as default};
