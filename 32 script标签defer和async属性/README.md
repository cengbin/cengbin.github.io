# script标签的async和defer属性

当浏览器解析DOM过程中遇到`<script> ... </script>`内部脚本标签，浏览器不会继续进行DOM解析，它会立刻执行此脚本。对于外部脚本 `<script src="..."></script>` 也是一样的：浏览器必须等脚本下载完，并执行结束，之后才能继续解析DOM。

这会导致两个重要的问题：

1. 脚本不能访问到位于它们下面的 DOM 元素，因此，脚本无法给它们添加处理程序等。
2. 如果页面顶部有一个笨重的脚本，它会“阻塞页面”。在该脚本下载并执行结束前，用户都不能看到页面内容：

幸运的是，这里有两个 <script> 特性（attribute）可以为我们解决这个问题：defer 和 async。

async和defer属性值为bool，它用来说明script脚本应该**如何执行**。 async和defer属性仅适用于script标签有src属性的情况。在script标签没有src属性的情况下，async和defer属性可以不指定值。

使用async/defer属性有三种模式可供选择:

1. `<script src="script.js"></script>`

如果async或defer都不存在，那么DOM解析会停止，浏览器会立即加载并执行指定的脚本。执行完成后再继续DOM解析。

2. `<script async src="script.js"></script>`

async 脚本会在后台加载，并在加载就绪时运行。DOM 和其他脚本不会等待它们，它们也不会等待其它的东西。async 脚本就是一个会在加载完成时执行的完全独立的脚本。

3. `<script defer src="script.js"></script>`

defer 特性告诉浏览器不要等待脚本加载和执行。浏览器将继续解析DOM。脚本会“在后台”下载，然后等 DOM 构建完成后，脚本才会执行。

换句话说：

具有 defer 特性的脚本不会阻塞页面。
具有 defer 特性的脚本总是要等到 DOM 解析完毕，但在 DOMContentLoaded 事件之前执行。

#### 具有 defer 特性的脚本保持其相对顺序，就像常规脚本一样。

假设，我们有两个具有 defer 特性的脚本：long.js 在前，small.js 在后。

```
<script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
<script defer src="https://javascript.info/article/script-async-defer/small.js"></script>
```

浏览器扫描页面寻找脚本，然后并行下载它们，以提高性能。因此，在上面的示例中，两个脚本是并行下载的。small.js 可能会先下载完成。

……但是，defer 特性除了告诉浏览器“不要阻塞页面”之外，还可以确保脚本执行的相对顺序。因此，即使 small.js 先加载完成，它也需要等到 long.js 执行结束才会被执行。

当我们需要先加载 JavaScript 库，然后再加载依赖于它的脚本时，这可能会很有用。

### 参考

* https://zh.javascript.info/script-async-defer
