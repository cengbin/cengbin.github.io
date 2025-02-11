# 深入理解 JavaScript 闭包

## 1. 前言

面试的时候常常会有面试官会问：谈谈你对闭包的理解？

我觉得回答问题要有清晰的思路和逻辑顺序，如：

1. 描述实际问题是什么，以及问题产生的背景。
2. 问题是怎么解决。
3. 结果怎么样。

我觉得按这样的思路回答问题，比按[MDN](<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures>)
上的解释说一遍回答“闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合”要好。

接下来我将尝试按照这个思路回答【谈谈你对闭包的理解？】

1. 闭包产生的背景。（背景，及问题是什么）
2. 闭包的实现机制。（怎么解决的）
3. 闭包的应用场景。（带来了什么结果）

## 2. 闭包产生的背景

### 2.1 函数执行环境的问题

在传统的[面向堆栈的编程语言](http://en.wikipedia.org/wiki/Stack-oriented_programming_language)中，函数的局部变量都是保存在栈上的，每当函数激活的时候，这些变量和函数参数都会压入到该堆栈上。
当函数返回的时候，这些参数又会从栈中移除。这种模型对将函数作为**函数式值**使用的时候有很大的限制，特别是在以下场景：

- 函数作为返回值
- 函数作为参数传递
- 函数中包含自由变量

> 1. 在ECMAScript中，函数是可以封装在父函数中的，并**可以使用父函数上下文的变量**。  
> 2. **自由变量**是指**在函数中使用**的，但既**不是函数参数**也**不是函数的局部变量**的变量

### 2.2 Funarg 问题详解

Funarg（函数参数）问题是闭包概念产生的直接导火索，主要分为两类：

#### 2.2.1 向上引用的 Funarg 问题（Upward Funarg）

```javascript
function foo() {
    const x = 10;
    return function bar() {
        console.log(x); // 如何访问已经执行完毕的foo函数中的x？
    }
}

const fn = foo();
fn(); // 10
```

#### 2.2.2 向下引用的 Funarg 问题（Downward Funarg）

```javascript
const x = 10;

function foo() {
    console.log(x);
}

(function (funArg) {
    const x = 20;
    funArg(); // 如何找到x变量？应该输出10还是20？
})(foo);
```

为了解决上述问题，JavaScript 就引入了闭包的机制。

## 3. 闭包的实现机制

### 3.1 词法作用域（Lexical Scope）

JavaScript 采用静态（词法）作用域，这意味着函数的作用域在函数定义时就已确定，而非函数调用时。

**再次强调下：ECMAScript 只使用[静态（词法）作用域](https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping) 。**  (
而诸如Perl这样的语言，既可以使用静态作用域也可以使用动态作用域进行变量声明）。

### 3.2 作用域链与闭包

```
function foo(){}

// foo函数执行上下文
fooContext = {
    VO:{...}, // 变量对象
    this:thisValue, // this值是执行上下文一属性
    Scope, // 函数作用域链
}
```

foo函数创建时，会形成以下重要的内部属性：

- [[Scopes]] - 保存函数创建时的词法环境
- 作用域链（Scope Chain）- 函数执行上下文作用域链 fooContext.Scope = fooContext.AO + foo.[[Scopes]]

技术上说，创建foo函数的父级上下文的数据是保存在该函数的内部属性 [[Scopes]]中的。

但是 JS 引擎怎么知道它要用到哪些外部引用呢，需要做 AST 扫描，很多 JS 引擎会做 Lazy Parsing，这时候去 parse
函数，正好也能知道它用到了哪些外部引用，然后把这些外部用打包成 Closure 闭包，加到 [[scopes]] 中。

如下图：firstClosure函数在创建完成之后，函数内部引用的自由变量就已经打包成Closure闭包，挂到函数的[[Scopes]]上了。

![1.png](./1.jpg)

调用 firstClosure 函数的时候，JS 引擎 会取出 [[Scopes]] 中的打包的 Closure + Global 链，设置成新的作用域链，
这就是函数用到的所有外部环境了，有了外部环境，自然就可以运行了。

![2.jpg](2.jpg)

## 4. 闭包的应用场景

- 避免命名空间污染：模块要用多个变量，我们希望变量不影响全局，全局也不影响我们的变量。
- 模拟私有属性
- 有状态的函数

### 4.1 模块化模式

```javascript
const module = (function () {
    let privateData = [];

    function privateMethod() {
        // ...
    }

    return {
        publicMethod() {
            privateMethod();
        }
    }
})();
```

### 4.2 数据私有化

```javascript
function createPerson(name) {
    let _name = name;
    return {
        getName() {
            return _name;
        },
        setName(newName) {
            _name = newName;
        }
    }
}
```

### 4.3 函数工厂

```javascript
function multiply(x) {
    return function (y) {
        return x * y;
    }
}

const multiplyByTwo = multiply(2);
```

## 5. 闭包的性能考量

### 5.1 内存管理

- 如果一个变量被闭包对象 Closure 引用，无法被释放回收。
- 如果一个很大的对象被闭包对象 Closure 引用，本来函数调用结束就能销毁，但是现在引用却被通过闭包保存到了堆里，而且还一直用不到，那这块堆内存就一直没法使用，严重到一定程度就算是内存泄漏了。
- 闭包函数又在多个地方被引用，导致数据引用复杂，容易发生内存泄漏问题。

### 5.2 优化建议

1. 避免创建不必要的闭包（使用面向对象编程）
2. 及时清理不再使用的闭包
3. 在循环中创建闭包时要特别注意

至此通过清晰的回答，面试官会对你肯定刮目相看。

## 参考资料

- [JavaScript 的静态作用域链与“动态”闭包链](https://developers.weixin.qq.com/community/develop/article/doc/00066a46588a682cc21ca8a335b013)
- [闭包是什么？从为什么会有闭包讲起！](https://juejin.cn/post/7084549768067678245?share_token=81B8021F-F924-477C-AC49-47071C69927E)