# Zen Coding

使用仿CSS选择器的语法来快速开发HTML和CSS ——由Sergey Chikuyonok开发。

Zen Coding由两个核心组件组成：一个缩写扩展器(缩写为像CSS一样的选择器)和上下文无关的HTML标签对匹配器。

```
body>(div#head>div.title.title1>p[title="hello world",v-for='item,idx in data',:key=idx]>a{Click me})+(div#main>(div.left>div{hello $}*5)+(div.right))+(div#footer)
```

```
<body>
	<div id="head">
	  <div class="title title1">
	    <p title="hello world" v-for="item,idx in data" :key=""><a href="">Click me</a></p>
	  </div>
	</div>
	<div id="main">
	  <div class="left">
	    <div>hello 1</div>
	    <div>hello 2</div>
	    <div>hello 3</div>
	    <div>hello 4</div>
	    <div>hello 5</div>
	  </div>
	  <div class="right"></div>
	</div>
	<div id="footer"></div>
</body>
```

![](./20170427113622589.jpeg)

## 参考链接

* [https://github.com/mattn/emmet-vim Github](https://github.com/mattn/emmet-vim)
* [https://baike.baidu.com/item/Zen%20Coding/10219092?fr=aladdin](https://baike.baidu.com/item/Zen%20Coding/10219092?fr=aladdin)