# 关于 Scheme 协议

## Scheme 协议

Scheme协议，又称为schemes或URL schemes，是一种在Web开发中广泛使用的协议，用于定义和描述URL的结构，使浏览器或应用程序能够正确地解析和处理不同类型的资源。在前端开发中，Scheme协议的灵活性和可扩展性使其成为处理多样化资源的理想选择。

Scheme协议是通过url的形式进行跳转的，所以我们H5也可以通过这个url去跳转到app内指定页面，这就是H5打开app的原理。

Scheme的URL格式类似：[scheme]://[host]/[path]?[query]

alipay://platformapi/startapp?saId=10000007

## 自定义Scheme的应用应用场景

在前端开发中，自定义Scheme的应用非常广泛，它们提供了一种灵活的方式来处理特定类型的资源或交互。以下是一些常见的自定义Scheme应用场景：

#### a. 应用内导航

许多移动应用使用自定义Scheme来实现应用内导航。通过定义类似于myapp://page1的Scheme，应用可以在不离开当前应用的情况下导航到特定页面，提供更流畅的用户体验。

```html
<a href="myapp://page1">进入页面1</a>
```

#### b. 自定义协议处理

一些前端框架或库会定义自己的Scheme，以处理特定类型的操作或资源。例如，某个JavaScript库可能定义了awesome://用于加载自定义组件或模块。

```html
<script src="awesome://loadModule"></script>
```

URL Scheme

Link Scheme