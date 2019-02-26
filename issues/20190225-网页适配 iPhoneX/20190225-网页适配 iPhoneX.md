# 网页适配 iPhoneX

## 适配之前需要了解的几个新知识
### 安全区域 

更详细说明:[参考文档：Human Interface Guidelines - iPhoneX](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/)

### viewport-fit

iOS11 新增特性，苹果公司为了适配 iPhoneX 对现有 viewport meta 标签的一个扩展，用于设置网页在可视窗口的布局方式，可设置三个值：

* contain: 可视窗口完全包含网页内容（左图）
* cover：网页内容完全覆盖可视窗口（右图）
* auto：默认值，跟 contain 表现一致

![](./iphonex_1.png)

>注意：网页默认不添加扩展的表现是 viewport-fit=contain，需要适配 iPhoneX 必须设置 viewport-fit=cover，这是适配的关键步骤。

更详细说明:[参考文档](https://www.w3.org/TR/css-round-display-1/#viewport-fit-descriptor)

### env() 和 constant()

iOS11 新增特性，Webkit 的一个 CSS 函数，用于设定安全区域与边界的距离，有四个预定义的变量：

* safe-area-inset-left：安全区域距离左边边界距离
* safe-area-inset-right：安全区域距离右边边界距离
* safe-area-inset-top：安全区域距离顶部边界距离
* safe-area-inset-bottom：安全区域距离底部边界距离

这里我们只需要关注 safe-area-inset-bottom 这个变量，因为它对应的就是小黑条的高度（横竖屏时值不一样）。

>注意：当 viewport-fit=contain 时 env() 是不起作用的，必须要配合 viewport-fit=cover 使用。对于不支持env() 的浏览器，浏览器将会忽略它。

在这之前，笔者使用的是 constant()，后来，官方文档加了这么一段注释（坑）：

>The env() function shipped in iOS 11 with the name constant(). Beginning with Safari Technology Preview 41 and the iOS 11.2 beta, constant() has been removed and replaced with env(). You can use the CSS fallback mechanism to support both versions, if necessary, but should prefer env() going forward.

这就意味着，之前使用的 constant() 在 iOS11.2 之后就不能使用的，但我们还是需要做向后兼容，像这样：

```
1 padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */  
2 padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
```


注意：env() 跟 constant() 需要同时存在，而且顺序不能换。

更详细说明，[参考文档：Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/?hmsr=funteas.com&utm_medium=funteas.com&utm_source=funteas.com)

## 如何适配

```
@media only screen and (min-device-height: 812px) {
    .bottom-bar {
      background-color:white;
      padding-bottom: constant(safe-area-inset-bottom);/* 兼容 iOS < 11.2 */
      padding-bottom: env(safe-area-inset-bottom);/* 兼容 iOS >= 11.2 */
    }
  }
```
最终效果

![](./rendering.jpg)