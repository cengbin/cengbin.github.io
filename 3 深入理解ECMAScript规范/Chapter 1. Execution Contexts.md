# Chapter 1. Execution Contexts

ECMA-262-5 词法环境:ECMA实现（一）--- 简介
https://blog.csdn.net/szengtal/article/details/78726143 

Definitions
定义

执行上下文(简称EC)是以ECMA-262规范为基准的抽象概念，用于区分执行代码。

理论上讲，执行上下文集合就像一个栈。栈底永远是Global context，顶部是当前活动执行上下文。当进入、退出各种执行上下文时，栈就会改变。

Types of executable code
可执行代码类型 

ECStack = [];

Global code
全局代码

Function code
方法代码 (方法上下文)

未catch异常可能会导致退出一个 或 多个执行上下文。

Eval code
Eval 代码

Conclusion
总结

这仅仅是对执行上下文做了简单的描述，是为以后章节打下基础，如：变量、作用域链。