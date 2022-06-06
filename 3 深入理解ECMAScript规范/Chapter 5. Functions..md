# Chapter 5. Functions.

## Introduction 
介绍

## Type of functions 
方法的类型

在ECMAScript中有三种不同特征的方法。

## Function Declaration（简称FD）
方法定义

方法的定义（简称FD）是：
* 必须拥有一个方法名
* 它是定位于源代码中的: 要么在程序级别中，要么在其他方法体中
* 在进入上下文阶段被创造
* 影响变量对象

这种类型的方法有个显著的特征：仅影响变量对象（在上下文中，他们被存放在VO中）

方法仅有可能在两个位置中申明(要不是在表达式中，要不在代码块中)

## Function Expression（简称FE）
方法表达式

方法表达式(简称FE)是：
* 在源代码中在表达式位置被定义
* 方法名是可选的
* 他的定义不会对变量对象产生影响
* 在代码执行阶段被创建

## Question “about surrounding parentheses”
关于括号的问题

"当我们需要在方法定义后立即调用它时，为什么要用括号将它括住"。这个问题的答案：表达式语句规则

根据规范,表达式不能以大括号开始 - {，避免与代码块混淆，
同时表达式语句不能以function关键词开始，避免和方法申明混淆。

## Implementations extension: Function Statement
实现扩展：方法申明

## Feature of Named Function Expression (NFE)
有名方法表达式(NFE)特性(区别于无名)

## Functions created via Function constructor
通过Function构造函数创建的方法

这中类型的方法对象和FD FE都不同，但是他有自己的特性。最重要的特性就是他的[[Scope]]属性只包含全局对象。
var x = 10;
  
  function foo() {
  
  var x = 20;
  var y = 30;
  
  var bar = new Function('alert(x); alert(y);');
  
  bar(); // 10, "y" is not defined
  
  }
  
  ##  `Algorithm of function creation`
  方法创建法则
  
