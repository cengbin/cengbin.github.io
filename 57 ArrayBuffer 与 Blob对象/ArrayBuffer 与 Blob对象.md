# ArrayBuffer 与 Blob对象

## 1、ArrayBuffer 对象

**ArrayBuffer** 对象是 ES6 才纳入正式 ECMAScript 规范，是 JavaScript **操作二进制数据**的一个接口。**ArrayBuffer** 对象是以数组的语法处理二进制数据，也称二进制数组。

### 1. 概念介绍
**ArrayBuffer** 对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（**TypedArray**视图和**DataView**视图）来读写，视图的作用是以指定格式解读二进制数据。

## 2、Blob对象

**Blob** 全称：Binary Large Object （二进制大型对象）。

### 1. 概念介绍

Blob 对象表示一个二进制文件的数据内容，通常用来读写文件，比如一个图片文件的内容就可以通过 Blob 对象读写。

与 ArrayBuffer 区别：

* Blob 用于操作二进制文件内容
* ArrayBuffer 用于操作内存