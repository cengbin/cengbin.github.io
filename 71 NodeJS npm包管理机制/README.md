# NodeJS npm包管理机制

在 Node.js 中，模块是一个库或框架，也是一个 Node.js 项目。Node.js 项目遵循模块化的架构，当我们创建了一个 Node.js 项目，意味着创建了一个模块，这个模块必须有一个描述文件，即 package.json。

## 依赖配置

假设有一个NodeJS项目叫做helloworld，项目中的依赖配置可以有：
1. dependencies (项目运行时依赖的模块)
2. devDependencies (项目开发时依赖的模块)

举个例子：

"dependencies": {
"vue": "^2.6.11",
"vuex": "^3.4.0”,
“jquery”:1.0.0,
},
"devDependencies": {
"vue-template-compiler": "^2.6.11",
},

## 解析 npm install 原理

当执行npm install的时候会读取dependencies、devDependencies依赖的模块，然后拉取对应的模块+版本到当前项目的node_modules目录下。

开发项目的时候会同时安装 vue、vuex、vue-template-compliler模块。

## 依赖模块版本管理

假设helloworld项目依赖的jquery模块是1.0.0版本，同时vue-template-compiler模块也依赖jquery，但是vue-template-compiler模块依赖的jquery模块是2.0.0版本，这时是如何进行依赖安装的呢？

### 扁平结构

NPM 在 3.x 版本做了一次较大更新。其将早期的嵌套结构改为扁平结构：

* 安装模块时，不管其是直接依赖还是子依赖的依赖，优先将其安装在 node_modules 根目录。

当在helloworld项目根目录下执行npm install 的时候，会同时把jquery模块的1.0.0和2.0.0本都安装到node_modules目录下。然后会在helloworld项目的node_modules目录下生成一个指向jquery模块1.0.0版本目录的快捷方式。在vue-template-compiler模块的node_modules目录下生成一个指向jquery模块2.0.0版本目录的快捷方式。
