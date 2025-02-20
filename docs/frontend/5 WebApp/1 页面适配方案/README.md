# 移动端适配之rem

rem单位是相对于`html`标签的font-size值。

## 介绍

```
<html style='font-size:50px'>
	<body>
		<p style='width:1rem;height:2rem;font-size:0.32rem;'>p element</p>
	</body>
</html>
```

此时p元素的宽为 `1*50=50px`，高为 `2*50=100px`，字体大小等于 `0.32*50=16px`。

从上面计算font-size的值来看，还是比较打脑阔....

为了方便写代码和方便设置想要的值，我们把html标签的font-size设置成100px。让1rem = 100px；

那么假设想要设置p标签的font-size为16px，则只需要设置font-size:0.16rem（100*0.16=16px）即可。

**举个例子🌰**

当设计稿宽度是750px时，html标签的font-size应该是100px。

那么html标签的font-size值计算公式为：(屏幕宽度/设计稿宽度) * 100

```
<script>
    function throttle(fn, interval) {
        let timer = null;
        let lastTime = 0;

        return function (...args) {
            const now = Date.now();

            if (lastTime && now < lastTime + interval) {
                if (timer) {
                    window.clearTimeout(timer);
                }
                timer = window.setTimeout(() => {
                    lastTime = now;
                    fn.apply(this, args);
                }, interval);
            } else {
                lastTime = now;
                fn.apply(this, args);
            }
        };
    }

    function setHtmlFontSize(baseSize, baseWidth) {
        baseSize = baseSize || 100
        baseWidth = baseWidth || 750
        var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
        var fontSize = 16;
        if (clientWidth >= 768) {
            window.isMobile = false
            window.isPc = true
            window.client = 'pc'
        } else if (clientWidth <= 320) {
            clientWidth = 320
            window.isMobile = true
            window.isPc = false
            window.client = 'mobile'
            fontSize = clientWidth / baseWidth * baseSize
        } else {
            window.isMobile = true
            window.isPc = false
            window.client = 'mobile'
            fontSize = clientWidth / baseWidth * baseSize
        }
        document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px'
    }

    setHtmlFontSize()

    var throttleSetRemFontSize = throttle(() => setHtmlFontSize(), 200)
    window.addEventListener("resize", throttleSetRemFontSize)
</script>
```

### 详细解释viewport meta标签的各个属性：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

这个meta标签用于控制移动设备上网页的显示，让我逐个解析其属性：

1. width=device-width
   * 设置视口宽度等于设备的屏幕宽度
   * 确保网页的宽度与设备屏幕宽度匹配
   * 防止移动设备自动缩放页面以适应更宽的视口
   * 例如：iPhone 12的设备宽度是390px，视口宽度就会被设置为390px
1. initial-scale=1.0
   * 设置页面的初始缩放比例为1.0（100%）
   * 确保页面以1:1的比例显示，不会自动放大或缩小
   * 防止某些移动浏览器在加载页面时自动调整缩放比例
   * 保证页面内容清晰可读
1. maximum-scale=1.0
   * 限制用户能够放大页面的最大比例为1.0
   * 防止用户通过手势（如双指缩放）放大页面
   * 有助于维持页面的设计布局
   * 特别适用于需要精确控制显示效果的响应式设计
1. user-scalable=no
   * 完全禁用用户手动缩放页面的功能
   * 禁止双指缩放、双击缩放等操作
   * 确保页面始终保持设定的显示比例
   * 防止用户意外缩放导致的布局问题

使用场景和注意事项：

1. 适用场景：
   * 响应式网站设计（RWD）
   * 移动端Web应用（WebApp）
   * 需要精确控制显示效果的页面
   * 防止表单输入时自动放大的场景
1. 优点：
   * 提供更好的移动端浏览体验
   * 防止布局被意外破坏
   * 确保内容清晰可读
   * 控制页面在不同设备上的一致性
1. 潜在问题：
   * 可能影响可访问性（accessibility）
   * 对视力不好的用户不够友好
   * 某些情况下用户可能需要放大查看细节
1. 最佳实践：
   * 确保文字大小合适，便于阅读
   * 提供足够的点击区域
   * 考虑使用响应式设计而不是完全禁用缩放
   * 在必要时允许用户控制缩放

在你的项目中，如果遇到iPad上的滚动问题，这个meta标签可以帮助：

1. 防止iOS设备自动调整页面大小
1. 确保页面宽度正确匹配设备宽度
1. 避免因为视口缩放导致的横向滚动

建议将这个meta标签放在HTML文件的head部分，确保它能在页面加载时立即生效。