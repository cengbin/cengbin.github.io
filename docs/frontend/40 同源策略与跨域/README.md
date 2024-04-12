# 同源策略与跨域

## 1、简介

### 1.1 什么是同源策略

## 2、解决方案

### 前端解决：

通过没有同源策略限制的`<script/>`、`<img/>`等等标签发起一个请求

#### JSONP

```
function jsonp(req) {
    var script = document.createElement('script');
    var url = req.url + '?callback=' + req.callback.name;
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

function hello(res){
    alert('hello ' + res.data);
}

jsonp({
    url : '',
    callback : hello 
});
```

### 后端解决：

CORS

### 服务器解决：

通过代理解决（Webpack、Vite、Nginx）