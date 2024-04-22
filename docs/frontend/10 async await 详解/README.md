# 为什么会有async await 语法？

## ES6 Promise

ES6新增了Promise特性。它的出现是为了更好地解决JavaScript中异步编程的问题，传统的异步编程最大的特点就是地狱般的回调嵌套，一旦嵌套次数过多，就很容易使我们的代码难以理解和维护。
而Promise则可以让我们通过链式调用的方法去解决回调嵌套的问题，使我们的代码更容易理解和维护，而且Promise还增加了许多有用的特性，让我们处理异步编程得心应手。

## ES6 生成器(Generator)

ES6定义的生成器函数有别于普通的函数，生成器可以在执行当中暂停自身，可以立即恢复执行也可以过一段时间之后恢复执行。

最大的区别就是它并不像普通函数那样保证运行到完毕。还有一点就是，在执行当中每次暂停或恢复循环都提供了一个双向信息传递的机会，生成器可以返回一个值，恢复它的控制代码也可发回一个值。

### 生成器函数、生成器

```
function* generator(arr) {
    yield arr[0]
    yield arr[1]
    yield arr[2]
    return "success"
}

var gen = generator([1, 2, 3])
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
```

如上代码如果yield返回的是值、或对象调用看起来还OK。


```
  function* generator() {
    var res = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    })
    res = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res + 2)
      }, 1000)
    })
    res = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res + 3)
      }, 1000)
    })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("success" + res)
      }, 1000)
    })
  }

  /*var gen = generator()
  console.log("gen:", gen)
  var value1 = gen.next()
  console.log(value1)
  value1.value.then((value) => {
    console.log('Promise1 value:', value)

    gen.next(value).value.then((value) => {
      console.log('Promise2 value:', value)

      gen.next(value).value.then((value) => {
        console.log('Promise3 value:', value)

        gen.next(value).value.then((value) => {
          console.log('Promise4 value:', value)

        })
      })
    })
  })*/
```

如上代码如果yield返回的是Promise 就会出现回调地狱的问题。

### ES7 async await

async await 语法的出现就是为了解决这种回调地狱的问题。

### 总结

* 首先 async/await 是一种用于处理异步操作的语法糖，在ES2017中被引入，用于更简洁地编写基于Promise的链式回调代码。
* 使用 async/await 主要是避免了传统的回调函数或 Promise 链的嵌套。

#### 参考

https://juejin.cn/post/7281535380590559243?searchId=202310310948531CA24C843535DA63EB62