# Web 前后端通信技术指南

## 了解 HTTP

HTTP（HyperText Transfer Protocol，超文本传输协议）是浏览器与服务器之间通信的应用层协议，采用请求-响应模型。
客户端发起请求，服务器返回响应。

**特点**

* 半双工协议：也就是说，在同一时刻流量只能单向流动，客户端向服务器发送请求(单向的)，然后服务器响应请求(单向的)。

### 方法（Methods）
- GET：获取资源（幂等）
- POST：创建/提交（非幂等）
- PUT：整体更新（幂等）
- PATCH：部分更新（非幂等）
- DELETE：删除资源（幂等）
- HEAD/OPTIONS：探测与预检

### 常见状态码（Status Codes）
- 2xx 成功：200 OK，201 Created，204 No Content
- 3xx 重定向：301/302，304 Not Modified
- 4xx 客户端错误：400，401，403，404，422
- 5xx 服务端错误：500，502，503

### 报文结构
- 请求：起始行（方法+URL+版本）/ Headers / Body
- 响应：起始行（版本+状态码）/ Headers / Body

### 常用头（Headers）
- Content-Type, Content-Length, Date, Connection
- Accept, Accept-Language, Accept-Encoding（gzip/br）
- Authorization（Bearer Token）, Cookie / Set-Cookie

### 缓存策略（Cache）
- 强缓存：Cache-Control: max-age=..., public/private；Expires
- 协商缓存：ETag/If-None-Match，Last-Modified/If-Modified-Since
- 建议：静态资源强缓存+指纹；API 使用协商缓存

### 安全与会话
- HTTPS：TLS 加密，防窃听与篡改
- Cookie 属性：HttpOnly、Secure、SameSite
- 认证：Bearer Token、Session、Basic（不建议明文）
- 幂等性：GET/PUT/DELETE/HEAD/OPTIONS 应幂等；POST 通常非幂等；可用 Idempotency-Key 防重复提交

### HTTP/2 与 HTTP/3 概览
- HTTP/2：多路复用、头部压缩、（服务器推送已较少使用）
- HTTP/3（QUIC/UDP）：更快建连，减少队首阻塞
- 语义仍为请求-响应；改进主要在传输层


### 深入理解：半双工 vs 全双工

#### 什么是半双工（Half-Duplex）

半双工是指同一条通信信道在同一时刻只能单向传输数据，通信双方虽然都能发送和接收，但必须**轮流说话**，不能同时进行。

**HTTP/1.x 的半双工特性**
- 客户端先发送完整的请求（起始行 + 头 + 可选请求体）
- 服务器再返回完整的响应（起始行 + 头 + 可选响应体）
- 请求体和响应体不能交错同时传输
- 同一连接上，同一时刻只有一方在说话

**现实类比**
- 对讲机：按下说话，松开接收（典型半双工）
- 电话：双方可同时说话（全双工）

**何时会踩坑**
- 上传大文件时，服务器通常要等你发完才开始下发响应
- 需要边上传边接收业务事件的强实时双向交互，纯 HTTP/1.x 难以胜任

#### 什么是全双工（Full-Duplex）

全双工是指通信双方可以在同一时刻同时发送和接收数据，彼此互不阻塞，消息可以交错进行。

**TCP 传输层的全双工**
- TCP 连接本身是全双工的：底层可同时收发数据
- 但 HTTP/1.x 在应用层语义上呈现为半双工（请求-响应轮流）

**WebSocket 的全双工**
- 建立连接后，客户端和服务器可随时互相发送消息
- 消息收发完全独立，不受请求-响应约束
- 真正的双向实时通信

**对比示例**
`
HTTP/1.x（半双工）：
客户端 ──请求──> 服务器
客户端 <──响应── 服务器
（轮流进行，不能同时）

WebSocket（全双工）：
客户端 ⇄ 服务器
（可同时双向发送消息）
`

#### HTTP/2 与 HTTP/3 的改进

- **传输层面更像全双工**：多路复用允许同一连接里并行多个流，收发交错进行，降低队首阻塞
- **语义仍是请求-响应**：单个请求流内依旧不能把请求体和响应体交错混发
- **实际效果**：虽然不是真正的全双工，但在高并发场景下接近全双工的性能

#### 选择建议

- **HTTP/AJAX**：适合传统请求-响应，接受半双工的轮流模式
- **SSE**：单向推送，服务器→客户端，仍基于 HTTP 半双工
- **WebSocket**：需要真正的全双工实时双向通信时使用


### 示例

请求：
```http
GET /api/users/123 HTTP/1.1
Host: api.example.com
Accept: application/json
Authorization: Bearer <token>
`````

响应：
```http
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=60
ETag: u-123-v2

{id:123,name:Alice}
````

## 请求-响应模式（Request-Response）

请求-响应模式是指：网页发送一次请求给服务端，服务端返回一次响应。

**常见应用场景**

数据库操作（增、删、改、查）、表单提交、数据查询

### AJAX（Asynchronous JavaScript and XML）

**技术介绍**

AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。它通过在后台与服务器交换数据，并允许网页异步更新。这意味着你可以在不干扰用户当前与网页交互的情况下，从服务器请求数据或发送数据到服务器。

**优点**
- 无需刷新整个页面，用户体验好
- 减少网络传输，提高效率
- 支持异步操作，不阻塞用户交互

**缺点**
- 只能处理一对一的请求-响应模式
- 浏览器同源策略限制（需要 CORS 处理）
- 代码相对复杂（现代已用 Fetch API 或 Axios 替代）

**示例代码 - XMLHttpRequest**

```javascript
var xhr = new XMLHttpRequest();  
xhr.open("GET", "example.txt", true);  
xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {  
        // 请求已完成且响应已就绪  
        document.getElementById("demo").innerHTML = xhr.responseText;  
    }  
};  
xhr.send();
```

**示例代码 - Fetch API（现代推荐）**

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

**示例代码 - Axios（流行库）**

```javascript
axios.get('/api/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```


## 服务器推送（Server Push）

服务器推送是指：客户端建立一次连接，服务端可以多次主动向客户端推送数据。这是异步的单向推送模式。

**常见应用场景**

实时新闻推送、实时股票报价、ChatGPT 流式返回、数据流推送、实时日志等

### SSE（Server-Sent Events，服务器发送事件）

**技术介绍**

SSE 是一种允许服务器主动向客户端推送信息的技术。与传统的 HTTP 请求-响应模型不同，在 SSE 中，客户端向服务器发送一个 HTTP 请求，然后服务器保持连接打开，并随着时间的推移，服务器可以主动向客户端发送事件。

SSE 建立在 HTTP 协议上，使用基于文本的数据格式（通常是 JSON）进行通信。客户端通过创建一个 EventSource 对象来与服务器建立连接，然后可以监听服务器发送的事件。服务器端可以随时将事件推送给客户端，客户端通过监听事件来接收这些数据。

**优点**
- 基于 HTTP 协议，无需额外的协议支持
- 自动重连机制，连接断开时会自动重新连接
- 简单易用，API 简洁
- 适合单向推送场景（服务器 → 客户端）

**缺点**
- 只支持单向通信（服务器推送数据给客户端）
- 不支持二进制数据，只能传输文本
- 浏览器连接数限制（同域名最多 6 个连接）

**示例代码 - 客户端**

```javascript
var evtSource = new EventSource("server.php");  
  
evtSource.onmessage = function(e) {  
    console.log('接收到消息:', e.data);  
};  

// 监听自定义事件
evtSource.addEventListener('update', function(e) {
    console.log('接收到更新:', e.data);
});
  
evtSource.onerror = function(e) {  
    console.error("EventSource 连接失败:", e);  
    // 可以选择在这里重新连接  
};
```

**示例代码 - 服务器端（Node.js）**

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/stream') {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    });

    // 每秒发送一条消息
    const interval = setInterval(() => {
      res.write(`data: ${JSON.stringify({ time: new Date() })}\n\n`);
    }, 1000);

    req.on('close', () => {
      clearInterval(interval);
      res.end();
    });
  }
});

server.listen(3000);
```

**参考**
- [逐句回答,流式返回,ChatGPT采用的Server-sent events](https://juejin.cn/post/7207798726382665785?searchId=20230912164949D11CFAFC832BECBE4592)


## 双向通信（Bidirectional Communication）

双向通信是指：客户端和服务端可以随时互相发送数据，建立全双工的实时通信连接.

**常见应用场景**

聊天应用、游戏应用、实时协作编辑、在线视频会议等

### WebSocket

**技术介绍**

WebSocket是一种在Web应用程序中实现全双工通信的协议。它在客户端和服务器之间建立一个持久的双向连接，允许双方随时发送数据，而无需等待对方的请求。WebSocket使用HTTP升级机制从HTTP连接升级到WebSocket连接。

**优点**
- 全双工通信，客户端和服务器可以随时互相发送数据
- 低延迟，建立连接后通信延迟很低
- 支持二进制数据和文本数据
- 连接复用，一个连接可以用于多个消息交互
- 更高效，减少HTTP头部开销

**缺点**
- 需要服务器支持WebSocket协议
- 连接管理复杂，需要处理连接状态和重连
- 某些网络环境（如代理、防火墙）可能不支持
- 需要手动实现心跳检测和重连机制

**示例代码 - 客户端**

```javascript
let chatWebSocket = null

function connectChatWebSocket(url) {
	let webSocket = null
    if ("WebSocket" in window) {
        webSocket = new WebSocket(url)
    } else if ("MozWebSocket" in window) {
        webSocket = new MozWebSocket(url)
    } else {
        alert("浏览器不支持WebSocket")
        return
    }
	webSocket.onopen = () => {
		console.log('WebSocket 连接已建立')
		// 可以在这里发送初始化消息
		webSocket.send(JSON.stringify({ type: 'init', data: 'client connected' }))
	}
	webSocket.onmessage = (event) => {
		console.log('接收到消息:', event.data)
		// 处理接收到的消息
		const message = JSON.parse(event.data)
		handleMessage(message)
	}
	webSocket.onerror = (event) => {
		console.error('WebSocket 错误:', event)
	}
	webSocket.onclose = (e) => {
		console.log('WebSocket 连接已关闭')
		console.log('关闭码:', e.code)
		console.log('关闭原因:', e.reason)
		console.log('是否正常关闭:', e.wasClean)
		// 可以在这里实现重连逻辑
		setTimeout(() => connectChatWebSocket(url), 3000)
	}
	chatWebSocket = webSocket
}

function sendMessage(message) {
	if (chatWebSocket && chatWebSocket.readyState === WebSocket.OPEN) {
		chatWebSocket.send(JSON.stringify(message))
	} else {
		console.warn('WebSocket 连接未建立')
	}
}

function disconnectChatWebSocket() {
	if (chatWebSocket) {
		chatWebSocket.close()
		chatWebSocket = null
	}
}
```

**示例代码 - 服务器端（Node.js + ws 库）**

```javascript
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('客户端已连接');

  // 接收客户端消息
  ws.on('message', (message) => {
    console.log('接收到消息:', message);
    
    // 广播给所有连接的客户端
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  // 处理错误
  ws.on('error', (error) => {
    console.error('WebSocket 错误:', error);
  });

  // 处理连接关闭
  ws.on('close', () => {
    console.log('客户端已断开连接');
  });

  // 发送欢迎消息
  ws.send(JSON.stringify({ type: 'welcome', message: '欢迎连接到服务器' }));
});

server.listen(8080, () => {
  console.log('WebSocket 服务器运行在 ws://localhost:8080');
});
```

## 技术对比

| 特性 | AJAX | SSE | WebSocket |
|------|------|-----|----------|
| **通信模式** | 请求-响应 | 服务器推送 | 双向通信 |
| **通信方向** | 单向（客户端→服务器） | 单向（服务器→客户端） | 双向（客户端↔服务器） |
| **协议** | HTTP | HTTP | WebSocket |
| **数据类型** | 文本/JSON | 文本 | 文本/二进制 |
| **延迟** | 中等 | 低 | 很低 |
| **连接方式** | 请求-响应 | 长连接 | 持久连接 |
| **自动重连** | 否 | 是 | 否（需手动实现） |
| **适用场景** | 数据查询/提交 | 服务器推送 | 实时双向通信 |
| **浏览器支持** | 所有浏览器 | 现代浏览器 | 现代浏览器 |
| **复杂度** | 低 | 中 | 高 |

## 选择建议

- **AJAX**：用于传统的请求-响应场景，如表单提交、数据查询、CRUD 操作
- **SSE**：用于服务器单向推送数据的场景，如实时通知、数据流、ChatGPT 流式输出
- **WebSocket**：用于需要实时双向通信的场景，如聊天、游戏、协作编辑、实时协议

