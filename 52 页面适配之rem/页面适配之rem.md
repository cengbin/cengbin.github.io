# 页面适配之rem

> 时间：2020.10.16

> 作者：`啊彬`

```
<script>
  /**
   * @baseSize 基本字体大小
   * @baseWidth 设计图的基本宽度
   * */
  function setRemFontSize (baseSize, baseWidth) {
    baseSize = baseSize || 100;
    baseWidth = baseWidth || 720;
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    if (clientWidth >= 768) {
      clientWidth = 768;
    } else if (clientWidth <= 320) {
      clientWidth = 320;
    }
    document.getElementsByTagName('html')[0].style.fontSize = clientWidth * baseSize / baseWidth + 'px'
  }

  setRemFontSize();
  window.addEventListener("resize", function () {
    setTimeout(function () {setRemFontSize();}, 200)
  });
</script>
```

## 参考链接

* [http://wow.kuapp.com/markdown/ Markdown 语法说明](http://wow.kuapp.com/markdown/)