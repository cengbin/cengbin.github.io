import{_ as n,o as s,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const h=JSON.parse('{"title":"关于Array.apply(null,类数组对象)","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/27 Array.apply(null,类数组对象) 详解/README.md","filePath":"frontend/27 Array.apply(null,类数组对象) 详解/README.md"}'),l={name:"frontend/27 Array.apply(null,类数组对象) 详解/README.md"},p=e(`<h1 id="关于array-apply-null-类数组对象" tabindex="-1">关于Array.apply(null,类数组对象) <a class="header-anchor" href="#关于array-apply-null-类数组对象" aria-label="Permalink to &quot;关于Array.apply(null,类数组对象)&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let arr1 = new Array(2)</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(arr1) // [empty × 2], 注意此处输出的是[empty × 2],是因为数组虽然被创建，但是该数组的元素并没有被初始化。</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(arr1[0]); // undefined, 因为数组下标0还未初始化,访问不存在的属性返回undefined</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(arr1[1]);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/**</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 1、apply(),的第二个参数不光可以是数组还可以是个类数组对象（即包含length属性，且length属性值是个数字的对象），所有其实{length：2}也是一个类数组对象，只是没有进行初始化而已，取值的话返回undefined。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * 2、调用Array.apply(null,类数组对象），就是把数组对象初始化了，并返回了一个数组。</span></span>
<span class="line"><span style="color:#e1e4e8;"> * */</span></span>
<span class="line"><span style="color:#e1e4e8;">let arr2 = Array.apply(null, {length: 2})</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(arr2) // [undefined, undefined]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// map() 函数并不会遍历数组中没有初始化或者被delete的元素（有相同限制还有forEach, reduce方法）</span></span>
<span class="line"><span style="color:#e1e4e8;">var arr3 = Array.apply(null, {length: 2}).map((value,index)=&gt;index);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(arr3)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// fill() 方法用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为array.length）内的全部元素。它返回修改后的数组。</span></span>
<span class="line"><span style="color:#e1e4e8;">var arr4 = new Array(10).fill(null).map((value,index)=&gt;index);</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(arr4)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let arr1 = new Array(2)</span></span>
<span class="line"><span style="color:#24292e;">console.log(arr1) // [empty × 2], 注意此处输出的是[empty × 2],是因为数组虽然被创建，但是该数组的元素并没有被初始化。</span></span>
<span class="line"><span style="color:#24292e;">console.log(arr1[0]); // undefined, 因为数组下标0还未初始化,访问不存在的属性返回undefined</span></span>
<span class="line"><span style="color:#24292e;">console.log(arr1[1]);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/**</span></span>
<span class="line"><span style="color:#24292e;"> * 1、apply(),的第二个参数不光可以是数组还可以是个类数组对象（即包含length属性，且length属性值是个数字的对象），所有其实{length：2}也是一个类数组对象，只是没有进行初始化而已，取值的话返回undefined。</span></span>
<span class="line"><span style="color:#24292e;"> * 2、调用Array.apply(null,类数组对象），就是把数组对象初始化了，并返回了一个数组。</span></span>
<span class="line"><span style="color:#24292e;"> * */</span></span>
<span class="line"><span style="color:#24292e;">let arr2 = Array.apply(null, {length: 2})</span></span>
<span class="line"><span style="color:#24292e;">console.log(arr2) // [undefined, undefined]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// map() 函数并不会遍历数组中没有初始化或者被delete的元素（有相同限制还有forEach, reduce方法）</span></span>
<span class="line"><span style="color:#24292e;">var arr3 = Array.apply(null, {length: 2}).map((value,index)=&gt;index);</span></span>
<span class="line"><span style="color:#24292e;">console.log(arr3)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// fill() 方法用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为array.length）内的全部元素。它返回修改后的数组。</span></span>
<span class="line"><span style="color:#24292e;">var arr4 = new Array(10).fill(null).map((value,index)=&gt;index);</span></span>
<span class="line"><span style="color:#24292e;">console.log(arr4)</span></span></code></pre></div>`,2),r=[p];function o(c,t,i,y,d,u){return s(),a("div",null,r)}const f=n(l,[["render",o]]);export{h as __pageData,f as default};
