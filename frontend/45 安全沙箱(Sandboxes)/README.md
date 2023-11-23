```
function foo(){

}

// 执行上下文
fooContext = {
    VO:{...}, // 变量对象
    this:thisValue, // this值是执行上下文一属性
    Scope // 函数作用域链
}
```

函数在创建阶段会给foo函数创建[[Scopes]]属性

函数执行上下文作用域链：
fooContext.Scope = fooContext.AO + foo.[[Scopes]]

在ECMAScript规范中，有两种语法在代码执行阶段可以修改作用域链。with和catch语句。

他们都将语句中的对象添加到作用域链第一个，用于标示符查询。即他们其中任何一语句都会对作用域链产生如下修改：
fooContext.Scope = withObject|catchObject + AO|VO + foo.[[Scopes]]

究其原理，with在内部使用in运算符。

对于在with语句块内的每个自由变量访问，它都在沙盒条件下计算变量。

如果条件是 true，它将从沙盒中检索变量。否则，就在全局范围内查找变量。

但是 with 语句使程序在查找变量值时，都是先在指定的对象中查找。
所以对于那些本来不是这个对象的属性的变量，查找起来会很慢，对于有性能要求的程序不适合（JavaScript 引擎会在编译阶段进行数项的性能优化。其中有些优化依赖于能够根据代码的词法进行静态分析，并预先确定所有变量和函数的定义位置，才能在执行过程中快速找到标识符。）。
with 也会导致数据泄漏(在非严格模式下，会自动在全局作用域创建一个全局变量)

## Proxy/handler.has

Proxy/handler.has() 方法是针对 in 操作符的代理方法。

这个钩子可以拦截下面这些操作:
属性查询: foo in proxy
继承属性查询: foo in Object.create(proxy)
with 检查: with(proxy) { (foo); }
Reflect.has()
   
由于with语句内部执行是用的in运算符,所以handler.has 能够拦截到对象的属性访问。

## JavaScript 沙箱实现
我们大致可以把沙箱的实现总体分为两个部分：

构建一个闭包环境
模拟原生浏览器对象

```$xslt
let handler = {
    has(target, key) {
      if (key in target) {
        return target[key]
      } else {
        throw `无法访问属性或方法 ${key}, 详情请参考：https://www.google.com`
        // throw new Error(`无法访问属性或方法 ${key}, 详情请参考：https://www.google.com`)
        return undefined;
      }
    }
  }

  let target = {
    console: window.console,
    Math: window.Math,
    Date: window.Date,

    name: "i am module"
  }

  let proxy = new Proxy(target, handler)

  let moduleCode = `
        function foo(){
            console.log(name);

            function bar(){
                var b = 10;
                console.log("b: ",b);
                console.log(Math.random());
                console.log(new Date());
                // console.log(document.getElementById('p'));
                console.log(window);
            }

            bar();
        }

        foo()
    `

  let fun = new Function(`
        with(this){
            ${moduleCode}
        }
    `)

  fun.call(proxy)
```