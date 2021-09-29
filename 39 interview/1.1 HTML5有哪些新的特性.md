### 1.表单相关：
* input元素种类：[参考地址https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input)
    >search：与text文本框类似，用于搜索；
    >tel： 与text文本框类似，用于电话；
    >url： 与text文本框类似，用于url格式的地址；
    >email： 与text文本框类似，用于email格式的地址；
    >number： 与text文本框类似，用于数值；
    >range： 只允许输入一段范围内的数值，通过min和max属性来设置范围；
    >color： 颜色文本框，“#000000”格式的文字；
    >file： 文件选择文本框，HTML5中通过multiple属性可以多选；
    >datetime、date、month、week、time、datetime-local 各种日期与时间输入的文本框；
    >output： 定义不同类型的输出；

* 表单验证相关：
    >required属性：具有该属性的元素，如果其内容为空则不允许提交，并给出相应的提示。

    >pattern属性：具有该属性的元素，如果内容不为空则把内容与pattern的值进行正则匹配，匹配不成功则不通过并提示。

    >min属性和max属性：它们是值类型和日期类型的input元素专用属性，限制了输入的范围。

    >step属性：控制元素的值增加或减少的步幅，如输入1-100之间的数字，且步幅是5，那么只能输入1、6、11....。

### 2.增强的页面元素
* `<head>`
* `<nav>`
* `<main>`
* `<section>`
* `<article>`
* `<footer>`
* `<figure>`
* `<figcaption>`
* `<video>`
* `<audio>`

作用：

1. 页面语义话，便于阅读。
2. 利于搜索引擎分析页面。

### 3.增加浏览器数据存储Local Storage、Session Storage。

### 4.History interface提供了两个新的方法：pushState(), replaceState()使得我们可以对浏览器历史记录栈进行修改。