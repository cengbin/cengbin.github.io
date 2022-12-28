# 多列照片墙实现

## 属性

```
{
  // 列数（由总宽度与每列宽度计算得出）
  columnCount: 0,
  // 列默认宽度
  columnDefaultWidth: 250,
  // 每列宽度（PC端等于列默认宽度，移动端等于屏幕宽度）
  columnWidth: 0,
  // 设置列与列之间的间距
  columnGap: 5,
  // 所有列中最大高度
  columnMaxHeight: 0,
  // 记录列高度数组
  columnHeightArr: [],
  // 所有图片
  imageList: [],
}
```

## 原理

1、计算需要展示的列数、列宽、列与列之间的间隙。

```
function calculate() {
  let columnCount = 2
  let columnGap = 5
  let columnWidth = (window.innerWidth - 10 - columnGap) / 2

  columnCount = columnCount > 4
    ? 4
    : columnCount < 1
      ? 1
      : columnCount

  return {
    columnCount,
    columnGap,
    columnWidth
  }
}
```

2、加载图片判断当前图片应该显示在哪列，并重新计算当前列的高度以及列的最大高度。

```javascript
  async load(arr) {
    for (let i = 0; i < arr.length; i++) {
      let url = arr[i]
      let image = await asyncLoadImage(url).catch(err => {
        console.log('err 加载图片错误：', url, err)
      })

      if (!image) return

      let finalHeight = (this.columnWidth) / (image.width / image.height) + this.columnGap
      // console.log(image.width, image.height, finalHeight)

      let min = Math.min(...this.columnHeightArr)
      let minIndex = this.columnHeightArr.indexOf(min)

      let item = {
        url,
        image,
        top: min,
        left: minIndex * (this.columnWidth + this.columnGap),
      }

      this.columnHeightArr[minIndex] = min + finalHeight

      this.setState({
        columnMaxHeight: Math.max(...this.columnHeightArr),
        imageList: this.state.imageList.concat(item)
      })
    }
  }
```

```html
  render() {
    return (<div className="list" style={{height: this.state.columnMaxHeight + 'px'}}>
      {
        this.state.imageList.map((item, idx) => {
          return (<div className="list-item" style={{
            width: this.columnWidth + "px",
            left: item.left + 'px',
            top: item.top + 'px'
          }} key={idx}>
            <img src={item.url}/>
          </div>)
        })
      }
    </div>)
  }
```

2、如果图片下方还有文本，且长度不定，那就需要动态计算文本高度 + 图片的高度。

```
this.$nextTick(() => {
    if (title || desc) {
      let ele = this.$refs[imgItem.id][0];
      let bottomEle = ele.querySelectorAll('.bottom')[0];
      let {height} = bottomEle.getBoundingClientRect();
      imgItem.bottomHeight = height;
    }

    let w = this.columnWidth;
    let h = (w - 10) / (img.width / img.height);

    let minVal = Math.min(...this.columnHeightArr);
    let index = this.columnHeightArr.indexOf(minVal);

    let left = index * w;
    let top = minVal;

    imgItem.left = left;
    imgItem.top = top;
    imgItem.height = h;

    this.columnHeightArr[index] += (h + imgItem.bottomHeight + imgItem.padding);
    this.columnMaxHeight = Math.max(...this.columnHeightArr);
})
```