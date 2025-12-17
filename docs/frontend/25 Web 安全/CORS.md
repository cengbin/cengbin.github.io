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

### 跨域（CORS）
- 预检：OPTIONS 请求
- 关键响应头：
    - Access-Control-Allow-Origin
    - Access-Control-Allow-Methods
    - Access-Control-Allow-Headers
    - Access-Control-Allow-Credentials

#### CORS 响应头详解

- **Access-Control-Allow-Origin**：指定哪些源（origin）可以访问资源
    - 值：具体源（如 https://example.com）或 * （允许所有源，不安全）
    - 示例：Access-Control-Allow-Origin: https://example.com
    - 注意：若设置为 *，则不能同时设置 Access-Control-Allow-Credentials: true

- **Access-Control-Allow-Methods**：指定允许的 HTTP 方法
    - 值：逗号分隔的方法列表（GET, POST, PUT, DELETE, PATCH 等）
    - 示例：Access-Control-Allow-Methods: GET, POST, PUT, DELETE
    - 作用：告诉浏览器该资源支持哪些请求方法

- **Access-Control-Allow-Headers**：指定允许的请求头
    - 值：逗号分隔的头名称列表（Content-Type, Authorization 等）
    - 示例：Access-Control-Allow-Headers: Content-Type, Authorization, X-Custom-Header
    - 作用：预检请求（OPTIONS）中浏览器会询问服务器允许哪些自定义头

- **Access-Control-Allow-Credentials**：指定是否允许发送凭证（Cookie、HTTP 认证等）
    - 值：true 或不设置（默认为 false）
    - 示例：Access-Control-Allow-Credentials: true
    - 注意：
        - 若设置为 true，Access-Control-Allow-Origin 不能为 *，必须指定具体源
        - 客户端请求时需设置 credentials: 'include'（Fetch API）或 withCredentials: true（XMLHttpRequest）

**常见 CORS 场景示例**

简单请求（不需要预检）：
`javascript
// 客户端
fetch('https://api.example.com/data', {
  method: 'GET',
  credentials: 'include'  // 发送 Cookie
})
`

复杂请求（需要预检）：
```javascript
// 客户端
fetch('https://api.example.com/data', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'X-Custom-Header': 'value'
},
credentials: 'include'
})

// 服务器响应头
// Access-Control-Allow-Origin: https://example.com
// Access-Control-Allow-Methods: GET, POST, PUT, DELETE
// Access-Control-Allow-Headers: Content-Type, X-Custom-Header
// Access-Control-Allow-Credentials: true
```