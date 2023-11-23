# UMD模块

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