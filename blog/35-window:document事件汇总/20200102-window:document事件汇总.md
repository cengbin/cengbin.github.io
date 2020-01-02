# window/document事件汇总

[Window](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)

* DOMContentLoaded / readystatechange
* load
* beforeunload
	* 当窗口即将被卸载（关闭）时,会触发该事件.此时页面文档依然可见,且该事件的默认动作可以被取消.
* unload
	* 当页面关闭后,会触发unload事件. 
* window.onpageshow
* window.onpagehide
	* 该pagehide事件被发送到一个Window当浏览器隐藏当前页面从会话历史呈现不同页面的过程。例如，当用户单击浏览器的“后退”按钮时，当前页面pagehide在显示上一页之前会收到一个事件。	

> 离开页面的情况：  
>	1. 点击标签页关闭按钮  
>	2. 点击标签页刷新按钮  
>	3. 点击标签页后退/前进按钮  
>	4. 直接关闭浏览器	
	
---

[Document](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)

* visibilitychange
	* 浏览器标签页被隐藏或显示的时候会触发visibilitychange事件.
	

	