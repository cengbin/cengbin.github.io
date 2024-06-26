# Web 安全

## 跨源资源共享 CORS

跨源资源共享 (CORS)（或通俗地译为跨域资源共享）是一种基于 HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其它 origin（域，协议和端口），使得浏览器允许这些 origin 访问加载自己的资源。

跨源HTTP请求的一个例子：运行在 https://domain-a.com 的 JavaScript 代码使用 XMLHttpRequest 来发起一个到 https://domain-b.com/data.json 的请求。

出于安全性，浏览器限制脚本内发起的跨源HTTP请求。 例如，XMLHttpRequest 和 Fetch API 遵循同源策略。这意味着使用这些 API 的 Web 应用程序只能从加载应用程序的同一个域请求 HTTP 资源，除非响应报文包含了正确 CORS 响应头。


```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml

[XML Data]
```

本例中，服务端返回的 Access-Control-Allow-Origin: * 表明，该资源可以被 任意 外域访问。

```
Access-Control-Allow-Origin: *
```

## 跨站脚本攻击 XSS

跨站脚本攻击（Cross-site scripting，XSS）是一种安全漏洞，攻击者可以利用这种漏洞在网站上注入恶意的客户端代码。当被攻击者登陆网站时就会自动运行这些恶意代码，从而，攻击者可以突破网站的访问权限，冒充受害者。根据开放式 Web 应用安全项目（OWASP），XSS 在 2017 年被认为 7 种最常见的 Web 应用程序漏洞之一。

本来缩写其应该是CSS，不过为了避免和CSS层叠样式表 （Cascading Style Sheets）重复，所以在安全领域叫做 XSS。

### 攻击方式

存储型 XSS

注入型脚本永久存储在目标服务器上。当浏览器请求数据时，脚本从服务器上传回并执行。

反射型 XSS

当用户点击一个恶意链接，或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。Web服务器将注入脚本，比如一个错误信息，搜索结果等 返回到用户的浏览器上。由于浏览器认为这个响应来自"可信任"的服务器，所以会执行这段脚本。

基于 DOM 的 XSS

通过修改原始的客户端代码，受害者浏览器的 DOM 环境改变，导致有效载荷的执行。也就是说，页面本身并没有变化，但由于DOM环境被恶意修改，有客户端代码被包含进了页面，并且意外执行。

### 防御方式

## 跨站请求伪造 CSRF

跨站请求伪造（Cross-site request forgery, CSRF）是一种冒充受信任用户，向服务器发送非预期请求的攻击方式。

### 攻击方式

例如，这些非预期请求可能是通过在跳转链接后的 URL 中加入恶意参数来完成:

```
<img src="https://www.example.com/index.php?action=delete&id=123">
```

对于在 https://www.example.com 有权限的用户，这个 <img> 标签会在他们根本注意不到的情况下对 https://www.example.com 执行这个操作，即使这个标签根本不在 https://www.example.com 内亦可。

### 防御方式



