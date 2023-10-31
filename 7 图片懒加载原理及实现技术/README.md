# 图片懒加载原理及实现

`<img src='default.jpg' data-src='https:xxx.com/a.jpg'>` 初始化img标签时src属性指向default.jpg默认图片，data-src属性指向真实的图片路径，当页面滚动到图片的显示区域的时候替换图片的src属性值为data-src的属性值