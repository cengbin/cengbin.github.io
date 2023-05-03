# 前端模块,以及发展过程

> 时间：2020.05.21  
> 作者：阿彬

#### 目录

* 一、前言
* 二、模块化的理解
* 三、模块化规范
* 四、参考链接

## 一、前言

在JavaScript发展初期就是为了实现简单的页面交互逻辑，寥寥数语即可；如今CPU、浏览器性能得到了极大的提升，很多页面逻辑迁移到了客户端（表单验证等），随着web2.0时代的到来，Ajax技术得到广泛应用，jQuery等前端库层出不穷，前端代码日益膨胀，此时在JS方面就会考虑使用模块化规范去管理。

## 二、模块化的理解
### 1.什么是模块？
* 将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起
* 块的内部数据与实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信

### 2.模块化的进化过程

* 全局function模式 : 将不同的功能封装成不同的全局函数

```
function m1(){
  //...
}
function m2(){
  //...
}
```

* namespace模式 : 简单对象封装

```
let myModule = {
  data: 'www.baidu.com',
  foo() {
    console.log(`foo() ${this.data}`)
  },
  bar() {
    console.log(`bar() ${this.data}`)
  }
}
myModule.data = 'other data' //能直接修改模块内部的数据
myModule.foo() // foo() other data
```

* IIFE模式：匿名函数自调用(闭包)

> IIFE 是缩写，全拼为’Imdiately Invoked Function Expression’。

> IIFE 表达式 是JavaScript中的一种‘立即执行函数’，也是“立即执行函数表达式”。

> JavaScript中的三大作用域：js上下执行文件（全局作用域）、函数体、IIFE函数表达式。

* IIFE模式增强 : 引入依赖

> 这就是现代模块实现的基石

__代码参考demo__

上例子通过jquery方法将页面的背景颜色改成红色，所以必须先引入jQuery库，就把这个库当作参数传入。这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。

### 3. 模块化的好处

* 避免命名冲突(减少命名空间污染)
* 更好的分离, 按需加载
* 更高复用性
* 高可维护性

### 4. 引入多个`<script>`后出现出现问题

* 请求过多
* 依赖模糊
* 难以维护

## 三、模块化规范

1. CommonJS模块规范 主要用于Node
2. AMD规范 (RequireJS是一个工具库，主要用于客户端的模块管理。它的模块管理遵守AMD规范，RequireJS的基本思想是，通过define方法，将代码定义为模块；通过require方法，实现代码的模块加载。)
3. CMD规范专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行。CMD规范整合了CommonJS和AMD规范的特点。在 Sea.js 中，所有 JavaScript 模块都遵循 CMD模块定义规范。
4. ES6模块化


## 四、参考链接

* [https://segmentfault.com/a/1190000017466120](https://segmentfault.com/a/1190000017466120)
