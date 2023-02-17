# 移动端适配之rem

> rem单位是相对于`html`标签的font-size值。

例子

```
<html style='font-size:50px'>
	<body>
		<p style='width:1rem;height:2rem;font-size:0.32rem;'>p element</p>
	</body>
</html>
```

此时p元素的宽为 50*1=50px，高为 50*2=100px，字体大小等于 50*0.32=16px。

从上面计算font-size的值来看，还是比较打脑阔....

为了方便写代码和方便设置想要的值，我们把html标签的font-size设置成100px。让1rem = 100px；

那么假设想要设置p标签的font-size为16px，则只需要设置font-size:0.16rem（100*0.16=16px）即可。


举个例子🌰

当设计稿宽度是750px时，html标签的font-size应该是100px。

那么html标签的font-size值计算公式为：(屏幕宽度/设计稿宽度) * 100

```
<script>
  //参考链接 https://m.taobao.com/
  //浏览器默认的字体大小16px

  /**
   * @baseSize 基本字体大小
   * @baseWidth 设计图的基本宽度
   * */
  function setRemFontSize(baseSize, baseWidth) {
    baseSize = baseSize || 100
    baseWidth = baseWidth || 750
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth
    if (clientWidth >= 768) {
      clientWidth = 768
    } else if (clientWidth <= 320) {
      clientWidth = 320
    }

    document.getElementsByTagName('html')[0].style.fontSize = clientWidth / baseWidth * baseSize + 'px'
  }

  setRemFontSize()
  window.addEventListener("resize", function () {
    setTimeout(function () {setRemFontSize()}, 200)
  })
</script>
```