# 从输入URL到页面加载完成都发生了什么？

* 得到对应服务器的IP地址
	1. 浏览器会在本地的缓存中查找是否存在当前访问域名的缓存，如果有就返回数据，否则就继续第二步，通常情况下浏览器都会缓存网站的数据，为了就是加速访问；

	2. 查看当前操作系统的hosts文件是否写有IP和域名对应的关系，如果有则得到IP地址，否则继续第三步；

	3. 通过本地的Local DNS获取域名对应的IP地址，那么Local DNS其实就是我们的交换机或者路由器配置的DNS，通常情况下都有两个，一个主一个辅；

	4. Local DNS会先看缓存DNS中是否有这条记录，如果没有就继续往下走，否则就返回IP地址；

	5. Local DNS会继续请求根服务器(.)，根服务器全球只有十三台，根服务器也没有blog.ansheng.me域名的解析，但是根有.me域名的解析，然后根就会继续发起请求，当然只有在转发模式下才会这么做。

	6. 根服务器请求.me服务器有没有blog.ansheng.me域名的解析，.me服务器服务器没有对应的解析，但是我有ansheng.me域名的解析，然后由.me服务器继续发起请求；

	7. .meDNS服务器问ansheng.me DNS服务器有没有blog.ansheng.me域名的解析，ansheng.meDNS服务器说我有 blog.ansheng.me 域名的解析；

	8. ansheng.me DNS服务器把 blog.ansheng.me 域名解析的IP地址返回给，.meDNS服务器；

	9. .meDNS服务器把记录返回给根服务器；

	10. 根服务器把记录返回给Local DNS服务器

	11. Local DNS服务器会把记录还存在DNS

	12. Cache服务器上，并且把记录再次返回给浏览器；

	13. 浏览器得到了对应的IP地址后就建立TCP连接；

* 建立TCP连接（详见：第四章 TCP/IP概述 4.5 TCP/IP协议族共同工作实例）
	1. TCP三次握手建立连接

* 数据传送
	2. 发起HTTP请求
	3. HTTP请求响应
	
* 浏览器解析HTML内容，生成网页
	1. HTML代码转化成DOM树
	2. 如果有css，则CSS代码转化成CSSOM树
	3. 遇到`<script/>`加载js并且会阻碍解析，直到js执行完毕，继续解析html。
	4. 初始的HTML被完全解析后会触发DOMContentLoaded事件。
	5. DOM树和CSSOM树构，生成一棵渲染树
	6. 生成布局
	7. 将布局绘制在屏幕上

[https://mp.weixin.qq.com/s/PdIVyu-6edjm9So_av5UgA](https://mp.weixin.qq.com/s/PdIVyu-6edjm9So_av5UgA)
	[https://blog.ansheng.me/article/through-the-browser-to-access-a-site-behind-what-has-gone-through/](https://blog.ansheng.me/article/through-the-browser-to-access-a-site-behind-what-has-gone-through/)