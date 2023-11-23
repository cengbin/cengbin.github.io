# 虚拟列表技术

虚拟列表是指对列表的“可视区域”进行渲染，对“非可见区域”不渲染或部分渲染，从而极大提高渲染性能的一种技术。

### 例子

要实现一个下拉选择商家组件，要在下拉列表中展示一万条商家数据。

### 实现思路

已知条件：

1. 有10000条数据。
2. 下拉的窗口宽高`100*400`。
2. 下拉项宽`100*50`。

思路：

监听视窗滚动事件，只渲染视窗可视区域的数据。为了避免出现滚动时数据闪现，上下分别多显示一条数据。

利用div的padding特性，当前内容区域的渲染总高度= 已渲染的高度 + 上边距 + 下边距

已渲染的高度浏览器自动计算，上边距=(startIndex - 0) * rowHeight，下边距= (this.data.length - endIndex) * rowHeight

计算startIndex： 等于滚动条的scrollTop除以每一行高度。startIndex = parseInt(scrollTop / rowHeight)
计算endIndex： 等于(startIndex + visibleCount)

计算当前渲染的数据：this.renderGoodsList = this.goodsList.slice(this.startIndex, this.endIndex)