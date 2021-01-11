# 英寸、DPI、像素之间的关系

> 时间：2021.01.04  
> 作者：`啊彬`

## 名词解释

### 英寸（Inches）

绝对长度单位。

### 分辨率（resolution）

分辨率，又称解析度、解像度，可以细分为显示分辨率、打印分辨率和扫描分辨率等。

### PPI（pixels per inch 像素每英寸）

> PPI用于显示器，一个像素一个格子，“每英寸像素”，表示一行一英寸长有几个格子。

### DPI（dots per inch 点每英寸）

> DPI用于打印机，“每英寸墨点”。

DPI 表示每平方英寸上所含“点”的数目，它决定了一副图像在细节上到底有多细（尽管并不依赖于你的视觉感受）。

但是，什么是“点”？

“点”是一个模糊不清的术语。点可以指的是像素、画笔的一“点”或者是一个油墨印迹。
当你置身于一座体育场馆并放言全场之时，场内的任何一名观众都可以被试做是一个“点”。

“点”最通用的两个定义是：像素点（当你使用电脑屏幕的时候），喷墨点（当打印或印刷东西的时候）。

如果是 1 DPI，你就会在每平方英尺上看见一个1*1的，单色的小方格。

如果是100 DPI，这就意味着水平方向和竖直方向上各100个小方格。这就意味着，在1平方英尺上，一共有10000个小方格。

那么：英寸 * DPI = 点数

如果你能看到的小点越多，说明图像的细节就刻画得越真实。

### 像素（pixel）

> 只对显示器有效

目前绝大部分显示器都是基于点阵的，也就是说，通过一系列的小点排成一个大矩形，每个小点显示不同的颜色来形成图像，我们把每个小点称为一个像素 (pixel)。

## 英寸、DPI和像素如何相互关联？

当你要设计一副印刷在纸张上的图片的时候，毫无疑问，很多工作你都必须借助电脑和显示器才能完成，那么，像素、英寸和 Dpi 如何相互关联？

### 像素大小

比如说，我想打印一副8英寸*10英寸，300 Dpi 的图片，那么怎样设置图像的像素长宽度呢？你只要简单地把这两者相乘就可以了，如果用方程表示，就是：

像素 = 英寸 * Dpi 

> 1in = 2.54 cm = 25.4 mm

像素= (毫米 / 25.4) * DPI

所以，对于上面的情况:  
宽度 = 8英寸 * 300 Dpi  
高度 = 10英寸*300 Dpi 

所以，这就应该是一副宽2400像素，高3000像素的图片。

使用这个简单的公式，只要你有想要的尺寸和 Dpi ，就可以换算出对应的像素大小。

### 英寸大小

在上面那个公式，只要你知道了两个已知量，肯定就能求出未知量。

英寸 = 像素 / Dpi

比如说，有一副图片900*600像素，如果我想知道它在150 Dpi 下有多大，我就可以进行如下的换算：

高度 = 900像素 / 150Dpi  
宽度 = 600像素 / 150Dpi  

经过计算我就可以知道它应该是6英寸高，4英寸宽。

### 图像质量

大多数时候，计算像素或者是英寸，前提是你得知道 Dpi 是多少，但有时候你需要在已知英寸和像素的情况下来计算Dpi。

比如，我这有一个3600 *3600的纹理素材，我想打印成12 * 12英寸大小，现在我需要知道这样弄的话打印成果会有多清楚，那我就需要计算 Dpi。

现在我就知道3600像素的图片，打印成12英寸的尺寸，不会造成细节的损失了。

如果我打印成6英寸见方，细节就会更丰富，因为Dpi上升到了600。

注意，人眼的视觉上限是300 Dpi，我们无法分辨过于靠近的两个像素点，所以你在600 Dpi 下和1200 Dpi 下看到额都不会有分别，除非你使用放大镜……


### WEB 案例

```
function getDPI () {
  var arrDPI = new Array;
  if (window.screen.deviceXDPI) { // ie 9
    arrDPI[0] = window.screen.deviceXDPI;
    arrDPI[1] = window.screen.deviceYDPI;
  } else {// chrome firefox
    var tmpNode = document.createElement("DIV");
    tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
    document.body.appendChild(tmpNode);
    arrDPI[0] = parseInt(tmpNode.offsetWidth);
    arrDPI[1] = parseInt(tmpNode.offsetHeight);
    tmpNode.parentNode.removeChild(tmpNode);
  }
  return arrDPI;
};

export let dpi = getDPI()[0]

export function px2mm (val, digits = 0) {
  var inch = val / dpi;
  val = inch * 25.4;

  return Number(val.toFixed(digits));
}

export function mm2px (val, digits = 0) {
  var inch = val / 25.4;
  val = inch * dpi;

  return Number(val.toFixed(digits));
}
```

## 参考链接

* [http://www.woshipm.com/ucd/110772.html](http://www.woshipm.com/ucd/110772.html)