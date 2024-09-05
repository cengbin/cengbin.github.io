# Web 前后端通信方案

## 一对一响应

一对一响应是指：网页发送一次消息给服务端，服务端只需要返回一次数据给网页。

**常见应用场景**

数据库：增 删 改 查

**技术**

AJAX（Asynchronous JavaScript and XML）是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。它通过在后台与服务器交换数据，并允许网页异步更新。这意味着你可以在不干扰用户当前与网页交互的情况下，从服务器请求数据或发送数据到服务器。

**示例代码**

```
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


## 一对多响应

一对多响应是指：客户端发送一次问题，服务端多次给网页推送数据。1 N 流式输出。

**常见应用场景**

SSE不仅仅可以实现ChatGPT的流式返回功能，SSE在Web应用程序中的使用场景非常广泛，例如实时的新闻推送、实时股票报价、在线游戏等等，比起轮询和长轮询，SSE更加高效，因为只有在有新数据到达时才会发送；

**技术**

SSE（Server-Sent Events，服务器发送事件）是一种允许服务器主动向客户端推送信息的技术。与传统的HTTP请求-响应模型不同，在SSE中，客户端向服务器发送一个HTTP请求，然后服务器保持连接打开，并随着时间的推移，服务器可以主动向客户端发送事件。

SSE建立在HTTP协议上，使用基于文本的数据格式（通常是JSON）进行通信。客户端通过创建一个EventSource对象来与服务器建立连接，然后可以监听服务器发送的事件。服务器端可以随时将事件推送给客户端，客户端通过监听事件来接收这些数据。

**示例代码**

```
var evtSource = new EventSource("server.php");  
  
evtSource.onmessage = function(e) {  
    console.log(e.data);  
};  
  
evtSource.onerror = function(e) {  
    console.error("EventSource failed:", e);  
    // 可以选择在这里重新连接  
};
```

**参考**

* [逐句回答,流式返回,ChatGPT采用的Server-sent events](https://juejin.cn/post/7207798726382665785?searchId=20230912164949D11CFAFC832BECBE4592)

## 多对多响应

多对多响应是指：网页可能多次消息给服务端，服务端也可能随时给客户端推动消息。

**常见应用场景**

聊天应用、游戏应用

**技术**

WebSocket是一种在Web应用程序中实现全双工通信的协议。

**示例代码**

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