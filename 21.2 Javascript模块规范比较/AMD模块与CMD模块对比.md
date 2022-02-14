#  AMD模块 与 CMD模块对比

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出，CMD是SeaJS 在推广过程中被广泛认知。RequireJs出自dojo加载器的作者James Burke，SeaJs出自国内前端大师玉伯。

二者的区别，玉伯在12年[如是说](https://www.zhihu.com/question/20342350/answer/14828786)：  
RequireJS 和 SeaJS 都是很不错的模块加载器，两者区别如下：

1. 两者定位有差异。RequireJS 想成为浏览器端的模块加载器，同时也想成为 Rhino / Node 等环境的模块加载器。SeaJS 则专注于 Web 浏览器端，同时通过 Node 扩展的方式可以很方便跑在 Node 服务器端

2. 两者遵循的标准有差异。RequireJS 遵循的是 AMD（异步模块定义）规范，SeaJS 遵循的是 CMD （通用模块定义）规范。规范的不同，导致了两者API 的不同。SeaJS 更简洁优雅，更贴近 CommonJS Modules/1.1 和 Node Modules 规范。

3. 两者社区理念有差异。RequireJS 在尝试让第三方类库修改自身来支持 RequireJS，目前只有少数社区采纳。SeaJS 不强推，而采用自主封装的方式来“海纳百川”，目前已有较成熟的封装策略。

4. 两者代码质量有差异。RequireJS 是没有明显的 bug，SeaJS 是明显没有 bug。

5. 两者对调试等的支持有差异。SeaJS 通过插件，可以实现 Fiddler 中自动映射的功能，还可以实现自动 combo 等功能，非常方便便捷。RequireJS无这方面的支持。

6. 两者的插件机制有差异。RequireJS 采取的是在源码中预留接口的形式，源码中留有为插件而写的代码。SeaJS 采取的插件机制则与 Node 的方式一致开放自身，让插件开发者可直接访问或修改，从而非常灵活，可以实现各种类型的插件。

优点： 同样实现了浏览器端的模块化加载。 可以按需加载，依赖就近。  
缺点： 依赖SPM打包，模块的加载逻辑偏重。
