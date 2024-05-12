# Web 前后端通信

## 1 对 1 响应

一对一响应是指：网页发送一次消息给服务端，服务端只需要返回一次数据给网页。

* 常见应用场景：数据库 增 删 改 查

##### 技术：Ajax（Async JavaScript and XML, AJAX)

##### 示例代码



## 1 对 多 响应

一对多响应是指：客户端发送一次问题，服务端多次给网页推送数据。1 N 流式输出。

##### 常见应用场景：ChatGPT的逐句回答,流式返回功能

##### 技术：SSE

Server-sent events（SSE）是一种用于实现服务器到客户端的单向通信的协议。使用SSE，服务器可以向客户端推送实时数据，而无需客户端发出请求。

SSE建立在HTTP协议上，使用基于文本的数据格式（通常是JSON）进行通信。客户端通过创建一个EventSource对象来与服务器建立连接，然后可以监听服务器发送的事件。服务器端可以随时将事件推送给客户端，客户端通过监听事件来接收这些数据。

参考：https://juejin.cn/post/7207798726382665785?searchId=20230912164949D11CFAFC832BECBE4592

##### 示例代码：


## 多 对 多 响应

多对多响应是指：网页可能多次消息给服务端，服务端也可能随时给客户端推动消息。

##### 常见应用场景：聊天应用、游戏应用

##### 技术：WebSocket

##### 示例代码

```
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
		// console.log('chatWebSocket ===>  onopen')
	}
	webSocket.onmessage = (event) => {
		// console.log('chatWebSocket ===>  onmessage ', event.data)
	}
	webSocket.onerror = (event) => {
		console.log('chatWebSocket ===>  onerror ', event)
	}
	webSocket.onclose = (e) => {
		console.log('chatWebSocket ===>  onclose', e)
		console.log('chatWebSocket ===> e.code', e.code)
		console.log('chatWebSocket ===> e.reason', e.reason)
		console.log('chatWebSocket ===> e.wasClean', e.wasClean)
	}
	chatWebSocket = webSocket
}

function disconnectChatWebSocket() {
	if (chatWebSocket) {
		chatWebSocket.close()
		chatWebSocket = null
	}
}
```