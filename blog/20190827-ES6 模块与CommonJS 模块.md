# ES6 模块与CommonJS 模块

## ES6 模块

<label style='color:red;'>ES6的模块不是对象，import命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载</label>，所以无法实现条件加载。也正因为这个，使得静态分析成为可能。

## CommonJS 模块

<label style='color:red;'>CommonJS就是一个JavaScript模块化的规范</label>,是用在服务器端的node的模块规范，前端的webpack也是对CommonJS原生支持的。

## ES6 模块与commonJS模块的差异

>讨论 Node 加载 ES6 模块之前，必须了解 ES6 模块与 CommonJS 模块完全不同。

* CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
	* commonJS模块一旦输出一个值，模块内部的变化就影响不到这个值。
	* ES6模块如果使用import从一个模块加载变量，那些变量不会被缓存，而是成为一个指向被加载模块的引用，原始值变了，import加载的值也会跟着变。需要开发者自己保证，真正取值的时候能够取到值。
* CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
	* 因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。
	* 而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

