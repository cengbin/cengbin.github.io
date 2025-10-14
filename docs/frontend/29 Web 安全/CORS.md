# 跨源资源共享 CORS

跨源资源共享 (Cross-Origin Resource Sharing，CORS)（或通俗地译为跨域资源共享）是一种基于 HTTP 头的机制，该机制通过允许服务器标示除了它自己以外的其它
origin（域，协议和端口），使得浏览器允许这些 origin 访问加载自己的资源。

跨源HTTP请求的一个例子：运行在 https://domain-a.com 的 JavaScript 代码使用 XMLHttpRequest
来发起一个到 https://domain-b.com/data.json 的请求。

出于安全性，浏览器限制脚本内发起的跨源HTTP请求。 例如，XMLHttpRequest 和 Fetch API 遵循同源策略。这意味着使用这些 API 的 Web
应用程序只能从加载应用程序的同一个域请求 HTTP 资源，除非响应报文包含了正确 CORS 响应头。

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