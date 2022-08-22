# 虚拟列表

> 时间：2022.08.22  
> 作者：chuck

虚拟列表是指对列表的“可视区域”进行渲染，对“非可见区域”不渲染或部分渲染，从而极大提高渲染性能的一种技术。

### 背景

实现一个下拉选择商家组件，要在下拉列表中展示一万条商家数据。

### 实现思路

已知条件：

1. 有10000条数据。
2. 下拉的窗口宽高`100*400`。
2. 下拉项宽`100*50`。

思路：

监听视窗滚动事件，只渲染视窗可视区域的数据。为了避免出现滚动时数据闪现，上下分别多显示一条数据。

利用div的padding特性，当前内容区域的渲染总高度= 已渲染的高度 + 上边距 + 下边距

已渲染的高度浏览器自动计算，上边距=(startIndex - 0) * rowHeight，下边距= (this.data.length - endIndex) * rowHeight

### 代码实现

```
<div class="c-table-body" ref="tbody">
  <div class="c-table-content" :style="{padding}">
    <div class="c-table-tr" v-for="item,idx in renderData" :key="idx" :index="startIndex+idx">
      <div v-for="prop,idx in column" :key="idx">
        {{item[prop]}}
      </div>
    </div>
  </div>
</div>
```

```
computed: {
  padding() {
    if (!this.virtualized)
      return `0 0 0 0`

    let {startIndex, endIndex, rowHeight} = this

    let paddingTop = (startIndex - 0) * rowHeight
    let paddingBottom = (this.data.length - endIndex) * rowHeight

    return `${paddingTop}px 0 ${paddingBottom}px 0`
  }
},
methods: {
  tbodyScrollListener() {
    // console.group('scroll')
    let scrollTop = this.$refs['tbody'].scrollTop
    // console.log(`scrollTop:`, scrollTop)

    let buffer = 1
    let startIndex = parseInt(scrollTop / this.rowHeight)
    let endIndex = (startIndex + this.visibleCount)

    startIndex -= buffer
    if (startIndex < 0)
      startIndex = 0

    // console.log('+ 之前，endIndex:', endIndex)
    endIndex += buffer
    if (endIndex > this.data.length)
      endIndex = this.data.length
    // console.log('+ 之后，endIndex:', endIndex)

    this.startIndex = startIndex
    this.endIndex = endIndex
    this.renderData = this.data.slice(this.startIndex, this.endIndex)
    // console.log('start:', this.startIndex, ' end:', this.endIndex)
    // console.groupEnd()
  }
}
```