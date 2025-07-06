# CMD 模块化

为了了解当年的前端前辈们是如何在浏览器进行代码模块化的

https://www.jb51.net/article/158904.htm 

seajs.config() 参数配置

// 该方法用来加载一个匿名模块
Module.use = function (ids, callback, uri) { //如果是通过seajs.use调用，uri是自动生成的

这个use方法一共做了三件事：
1.调用Module.get，进行Module实例化 2.为模块绑定回调函数 3.调用load，进行依赖模块的加载

这个Module为一个构造函数，里面挂载了所有与模块加载相关的方法，还有很多静态方法，比如实例化Module、转换模块id为uri、定义模块等等，废话不多说直接看代码。

实例化模块，一切的开端
首先use方法调用了get静态方法，这个方法是对Module进行实例化，并且将实例化的对象存入到全局对象cachedMods中进行缓存，并且以uri作为模块的标识，如果之后有其他模块加载该模块就能直接在缓存中获取。

this.dependencies = deps || [] 存当前模块依赖的模块

直接看load方法。
load方法会先把所有依赖的模块id转为uri，然后进行实例化，最后调用fetch方法，绑定模块加载成功或失败的回调，最后进行模块加载。

将模块id转为uri


// 调用resolve方法，将模块id转为uri。
 // 比如之前的"mian"，会在前面加上我们之前设置的base，然后在后面拼上js后缀
 // 最后变成: "http://qq.com/web/js/main.js"
 var uris = mod.resolve()

// uri 即模块的全路径

resolve方法实现可以稍微看下，基本上是把config里面的参数拿出来，进行拼接uri的处理。

主要看下parseAlias。如果这个id有定义过alias，将alias取出，比如id为"jquery"，之前在定义alias中又有定义jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery'，则将id转化为'https://cdn.bootcss.com/jquery/3.2.1/jquery'。

如何发起请求，下载其他依赖模块？
总的来说pass方法就是记录了remain的数值，接下来就是重头戏了，调用所有依赖项的fetch方法，然后进行依赖模块的加载。调用fetch方法的时候会传入一个requestCache对象，该对象用来缓存所有依赖模块的request方法。

经过fetch操作后，能够得到一个requestCache对象，该对象缓存了模块的加载方法，从上面代码就能看到，该方法最后调用的是seajs.request方法，并且传入了一个onRequest回调。

```
// 调用define定义的回调
// 传入commonjs相关三个参数: require, module.exports, module
 var exports = factory.call(mod.exports = {}, require, mod.exports, mod)
 if (exports === undefined) {
 exports = mod.exports //如果函数没有返回值，就取mod.exports
 }
 mod.exports = exports
 mod.status = STATUS.EXECUTED
```