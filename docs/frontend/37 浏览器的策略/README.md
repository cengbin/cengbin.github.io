# 浏览器的策略

## 1. 浏览器的同源策略

### 1.1 什么是同源策略

### 1.2 解决跨域

### 1.2.1前端解决

通过没有同源策略限制的`<script/>`、`<img/>`等等标签发起一个请求

#### JSONP

“JSON with Padding”(JSONP)是一种欺骗web浏览器的方法，它使用`<script>`标签来执行请求，该标签使用SRC属性来发出特殊的API请求。

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

### 1.2.2 后端解决

跨源资源共享（CORS，或通俗地译为跨域资源共享）是一种基于 HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其他源（域、协议或端口），使得浏览器允许这些源访问加载自己的资源。跨源资源共享还通过一种机制来检查服务器是否会允许要发送的真实请求，该机制通过浏览器发起一个到服务器托管的跨源资源的“预检”请求。在预检中，浏览器发送的头中标示有 HTTP 方法和真实请求中会用到的头。

服务端返回的 Access-Control-Allow-Origin 标头的 Access-Control-Allow-Origin: * 值表明，该资源可以被任意外源访问。

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS

### 1.2.3 服务器解决

通过代理解决（Nginx、Vite、Webpack）

#### Nginx

```
location ^~/vmss/ {
    proxy_pass http://vms.cn-huadong-1.xf-yun.com/;
    proxy_set_header Host $proxy_host;
    proxy_http_version 1.1;
}    
```

#### Vite

```
server: {
		open: '/index.html',
		hmr: false,
		host: true,
		port: 8891,
		https: false,
		cors: true,
		proxy: {
			'/newapi': {
				target: 'https://abc.com',
				changeOrigin: true
			},
			'/individuation': {
				target: 'https://def.com',
				changeOrigin: true
			}
		}
	},
```

## 2. Chrome将不再允许https://页面加载HTTP资源

Chrome 安全小组近日在一篇博客文章中表示，[计划使 https:// 页面不再加载 HTTP 子资源](https://security.googleblog.com/2019/10/no-more-mixed-messages-about-https_3.html)。

从官方发布的消息大致意思是：Chrome计划使 https:// 页面不再加载 HTTP 子资源。从2020 年 1 月，Chrome 80将会在https://页面里的不再加载HTTP 子资源，逐步阻止所有HTTP页面相关的混合内容。Chrome 80及以后更高的版本会将所有https:// 页面里的混合音频和视频HTTP子资源自动升级为HTTPS，如果无法通过 HTTPS 加载，则将自动被阻止。

文章参考：  
https://blog.csdn.net/mzl87/article/details/102136892  
https://lusongsong.com/blog/post/12288.html  

## 3. Chrome Cookie SameSite跨站限制

[完美解决Chrome Cookie SameSite跨站限制](https://juejin.cn/post/7073447264756170765)