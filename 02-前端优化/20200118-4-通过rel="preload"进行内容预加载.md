# 通过rel="preload"进行内容预加载

 <link> 元素的 rel 属性的属性值preload能够让你在你的HTML页面中 <head>元素内部书写一些声明式的资源获取请求，可以指明哪些资源是在页面加载完成后即刻需要的。对于这种即刻需要的资源，你可能希望在页面加载的生命周期的早期阶段就开始获取，在浏览器的主渲染机制介入前就进行预加载。这一机制使得资源可以更早的得到加载并可用，且更不易阻塞页面的初步渲染，进而提升性能。本文提供了一个如何有效使用preload机制的基本说明。
 
 
### 参考
[https://developer.mozilla.org/zh-CN/docs/Web/HTML/Preloading_content](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Preloading_content)