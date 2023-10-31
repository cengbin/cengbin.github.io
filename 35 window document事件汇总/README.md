# window、document 事件汇总

[Window](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)

|实践|描述|
|---|---|
|DOMContentLoaded / readystatechange|页面DOM构建起来后就会触发|
|window.onload|在文档装载完成后会触发  load 事件。此时，在文档中的所有对象都在DOM中，所有图片，脚本，链接以及子框都完成了装载|
|beforeunload|当窗口即将被卸载（关闭）时,会触发该事件.此时页面文档依然可见,且该事件的默认动作可以被取消.|
|unload|当页面关闭后,会触发unload事件. |
|window.onpageshow||
|window.onpagehide|该pagehide事件被发送到一个Window当浏览器隐藏当前页面从会话历史呈现不同页面的过程。例如，当用户单击浏览器的“后退”按钮时，当前页面pagehide在显示上一页之前会收到一个事件。|
|[window.onerror](https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror)|error事件的事件处理程序。针对各种目标的不同类型的错误触发了 Error 事件： 离开页面的情况：  1. 点击标签页关闭按钮  2. 点击标签页刷新按钮  3. 点击标签页后退/前进按钮  4. 直接关闭浏览器	|
|window.onpopstate|该事件可以监听如下操作：点击浏览器的前进按钮/后退按钮，执行js代码:history.go(n) / history.forward() /|
|window.onhashchange|当 一个窗口的 hash （URL 中 # 后面的部分）改变时就会触发 hashchange 事件（参见 location.hash）。|


[Document](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)

|事件|描述|
|---|---|
| visibilitychange |浏览器标签页被隐藏或显示的时候会触发visibilitychange事件.|

	