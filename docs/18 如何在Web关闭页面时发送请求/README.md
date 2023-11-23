# 如何在 Web 关闭页面时发送 Ajax 请求

## 1.事件监听

浏览器有两个事件可以用来监听页面关闭，beforeunload和unload

### beforeunload事件[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Events/beforeunload)
当浏览器窗口关闭或者刷新时，会触发beforeunload事件。当前页面不会直接关闭，可以点击确定按钮关闭或刷新，也可以取消关闭或刷新。

如果处理函数为Event对象的returnValue属性赋值非空字符串，浏览器会弹出一个对话框，来询问用户是否确定要离开当前页面（如下示例）。有些浏览器会将返回的字符串展示在弹框里，但有些其他浏览器只展示它们自定义的信息。没有赋值时，该事件不做任何响应。

><label style='background-color:#fff3d4'>注：为了避免不必要的弹窗，如果页面并没有发生交互浏览器可能不会展示在 beforeunload 事件中引发的弹框，甚至可能即使发生交互了也直接不显示。</label>

### unload事件[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Events/unload)
当文档或一个子资源正在被卸载时, 触发 unload事件。

它在下面两个事件后被触发:

1. beforeunload (可取消默认行为的事件)
2. pagehide


## 2.请求发送

### 方案1: 发送同步的ajax请求

```
var client = new XMLHttpRequest();
client.open("POST", "/log", false); // 第三个参数表明是同步的 xhr
client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
client.send(analyticsData);
```

这种方式虽然有效，但是用户需要等待请求结束才可以关闭页面。对用户的体验不好。

### 方案2：使用navigator.sendBeacon发送异步请求

根据[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon)的介绍：

>这个方法主要用于满足统计和诊断代码的需要，这些代码通常尝试在卸载（unload）文档之前向web服务器发送数据。过早的发送数据可能导致错过收集数据的机会。然而，对于开发者来说保证在文档卸载期间发送数据一直是一个困难。因为用户代理通常会忽略在 unload 事件处理器中产生的异步 XMLHttpRequest。

```
navigator.sendBeacon(url [, data]);
```

data 参数是将要发送的 ArrayBufferView 或 Blob, DOMString 或者 FormData 类型的数据。

注： 
>* 只能发送post请求
>* sendBeacon中Content-Type标头唯一允许的值是：
	* application/x-www-form-urlencoded 
	* multipart/form-data 
	* text/plain 	


我收集的是提取传输数据的内容类型，并将其设置为HTTP请求的Content-Type。

1. 如果发送Blob对象，则Content-Type将成为Blob的类型。
2. 如果发送FormData对象，则Content-Type将变为multipart / form-data
3. 如果发送了URLSearchParams对象，则Content-Type将变为application / x-www-form-urlencoded
4. 如果发送普通字符串，则Content-Type变为text / plain

[可以在此处找到](http://usefulangle.com/post/63/javascript-navigator-sendbeacon-set-form-http-header)实现不同对象的Javascript代码




```
var data = {
 name: 'test',
 uniqueId: Math.random()
};
var blob = new Blob([JSON.stringify(data)], {type : 'application/json'});
navigator.sendBeacon('http://example.in/data/post', blob);
```
报错：Uncaught DOMException: Failed to execute 'sendBeacon' on 'Navigator': sendBeacon() with a Blob whose type is not any of the CORS-safelisted values for the Content-Type request header is disabled temporarily. See [http://crbug.com/490015](http://crbug.com/490015) for details.  
Chrome [https://bugs.chromium.org/p/chromium/issues/detail?id=490015](https://bugs.chromium.org/p/chromium/issues/detail?id=490015)中的安全问题

解决：
最后我将数据发送为'text / plain; charset = UTF-8'并在服务器端读取流以获取json内容。

web：
```
const blob = new Blob([JSON.stringify(myData)], {type: 'text/plain; charset=UTF-8'});
navigator.sendBeacon(appData.ReleaseSessionUrl, blob); 
```

### 参考

如何在 Web 关闭页面时发送 Ajax 请求

https://juejin.im/post/5c7e541b6fb9a049e06415a5