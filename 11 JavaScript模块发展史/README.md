# JavaScript模块及发展过程

> 时间：2020.05.21  
> 作者：阿彬

#### 目录

* 前言
* 模块化的理解
* 模块化规范
* 参考链接

## 前言

在JavaScript发展初期就是为了实现简单的页面交互逻辑，寥寥数语即可；如今CPU、浏览器性能得到了极大的提升，很多页面逻辑迁移到了客户端（表单验证等），随着web2.0时代的到来，Ajax技术得到广泛应用，jQuery等前端库层出不穷，前端代码日益膨胀，此时在JS方面就会考虑使用模块化规范去管理。

## 一、模块化的理解

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

## 二、模块化规范

1. CommonJS 模块化规范

CommonJS是一种模块化规范，最初是为Node.js设计的。

2. AMD 模块化规范

异步模块定义（Asynchronous Module Definition, AMD）

RequireJS是一个工具库，主要用于客户端的模块管理。它的模块管理遵守AMD规范，RequireJS的基本思想是，通过define方法，将代码定义为模块；通过require方法，实现代码的模块加载。
 
3. CMD 模块化规范

通用模块定义 (Common Module Definition, CMD)，[CMD 模块定义规范](https://github.com/cmdjs/specification/blob/master/draft/module.md)专门用于浏览器端，模块的加载是异步的，模块使用时才会加载执行。CMD规范整合了CommonJS和AMD规范的特点。

在 Sea.js 中，所有 JavaScript 模块都遵循 CMD模块定义规范。

[sea.js JavaScript模块](https://github.com/seajs/seajs/issues/242)

SeaJS 具有以下核心特性：

* 简单一致的模块格式。
* 依赖的自动管理。
* 脚本的异步并行加载。
* 丰富的插件。
* 友好的调试。

4. UMD

UMD (Universal Module Definition)就是一种javascript通用模块定义规范，让你的模块能在javascript所有运行环境（Node环境、浏览器环境）中发挥作用。

NodeJS环境javascript遵循的是：CommonJS模块规范  
浏览器环境javascript遵循的是：AMD模块规范、CMD模块规范、IIFE模式  


实现一个UMD模块，就要考虑现有的主流javascript模块规范了，如CommonJS, AMD, CMD等。那么如何才能同时满足这几种规范呢？

首先要想到，模块最终是要导出一个对象，函数，或者变量。

而不同的模块规范，关于模块导出这部分的定义是完全不一样的。

因此，我们需要一种过渡机制。

首先，我们需要一个factory，也就是工厂函数，它只负责返回你需要导出的内容（对象，函数，变量等）。

我们从导出一个简单的对象开始。

```
function factory() {
    return {
        name: '我是一个umd模块'
    }
}
```

```
(function(root, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        console.log('是commonjs模块规范，nodejs环境')
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        console.log('是AMD模块规范，如require.js')
        define(factory)
    } else if (typeof define === 'function' && define.cmd) {
        console.log('是CMD模块规范，如sea.js')
        define(function(require, exports, module) {
            module.exports = factory()
        })
    } else {
        console.log('没有模块环境，直接挂载在全局对象上')
        root.umdModule = factory();
    }
}(this, function() {
    return {
        name: '我是一个umd模块'
    }
}))
```
参考链接：https://juejin.cn/post/6844903927104667662


5. ES6模块化


## 四、参考链接

* [https://segmentfault.com/a/1190000017466120](https://segmentfault.com/a/1190000017466120)
* [https://juejin.cn/post/6844903961128861704](https://juejin.cn/post/6844903961128861704)