```

```
>大多数情况下，height和width 被设定为auto的绝对定位元素，按其内容大小调整尺寸。但是，被绝对定位的元素可以通过指定top和bottom ，保留height未指定（即auto），来填充可用的垂直空间。它们同样可以通过指定left 和 right并将width 指定为auto来填充可用的水平空间。


>除了刚刚描述的情况（绝对定位元素填充可用空间）：
>如果top和bottom都被指定（技术上，而不是auto），top 胜出。
>如果指定了left 和right两侧，则在direction为ltr（英语，水平日语等）时left 赢，并且在direction为rtl时right赢（阿拉伯文，希伯来文等）。
