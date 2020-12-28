# vue-rouuter源码解析

> 时间：2020.12.21  

> 作者：`啊彬`

#### 目录

1. 路由知识
  * 路由的概念
2. 前端路由的实现方式
3. vue-router 的实现方式

## 1.路由知识

### 路由的概念

路由这个概念最开始是在后端出现的，以前使用模板引擎开发页面的时候经常会看到这样的路径：

`http://hometown.xxx.edu.cn/bbs/forum.php`

有时还会有带.asp 或.html 的路径，这就是所谓的 SSR(Server Side Render)，通过服务端渲染，直接返回页面。

其响应过程是这样的:

1. 浏览器发出请求
2. 服务器监听到 80 端口（或 443）有请求过来，并解析 url 路径
3. 根据服务器的路由配置，返回相应信息（可以是 html 字串，也可以是 json 数据，图片等）
4. 浏览器根据数据包的 Content-Type 来决定如何解析数据

简单来说路由就是用来跟后端服务器进行交互的一种方式，通过不同的路径，来请求不同的资源，请求不同的页面是路由的其中一种功能。

就像路由器在网络层中扮演的角色一样，肩负着将数据包正确导向目的地址的重任，只不过在这里变成了客户端浏览器的指路人，所谓的前端路由，指的是一种能力，即：

> 不依赖于服务器，根据不同的 URL 渲染不同的页面

## 2.前端路由的实现方式
前端路由其实只要解决两个问题：

* 在页面不刷新的前提下实现 url 变化
* 捕捉到 url 的变化，以便执行页面替换逻辑

在 2014 年之前，大家是通过 hash 来实现路由，url hash 就是类似于：

`http://www.xxx.com/#/login`

这种 #。后面 hash 值的变化，并不会导致浏览器向服务器发出请求，浏览器不发出请求，也就不会刷新页面。另外每次 hash 值的变化，还会触发 hashchange 这个事件，通过这个事件我们就可以知道 hash 值发生了哪些变化。然后我们便可以监听 hashchange 来实现更新页面部分内容的操作：

```
function matchAndUpdate () {
  // todo 匹配 hash 做 dom 更新操作
}

window.addEventListener('hashchange', matchAndUpdate)
```

后来，因为 HTML5 标准发布。多了两个 API，pushState 和 replaceState，通过这两个 API 可以改变 url 地址且不会发送请求。同时还有 popstate 事件。

通过这些就能用另一种方式来实现前端路由了，但原理都是跟 hash 实现相同的。用了 HTML5 的实现，单页路由的 url 就不会多出一个#，变得更加美观。但因为没有 # 号，所以当用户刷新页面之类的操作时，浏览器还是会给服务器发送请求。为了避免出现这种情况，所以这个实现需要服务器的支持，需要把所有路由都重定向到根页面：

```
function matchAndUpdate () {
   // todo 匹配路径 做 dom 更新操作
}
window.addEventListener('popstate', matchAndUpdate)
```

## vue-router 的实现方式

### 参考

[链接](https://liyucang-git.github.io/2019/08/15/vue-router%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/)