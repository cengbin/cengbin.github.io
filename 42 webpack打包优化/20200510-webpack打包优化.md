# webpack打包优化

> 时间：2020.01.10

> 作者：`ZB`

实现webpack打包优化，两个优化点：

* 如何减少打包时间
* 如何减少打包大小

## 减少打包时间

### 1. 优化loadder

首先优化的是babel，babel会将代码转成字符串并生成AST，然后转成新的代码，转换代码越多，效率就越低。

首先优化Loader的搜索范围

```
module.exports = {
    module: {
        rules: [
            test: /\.js$/, // 对js文件使用babel
            loader: 'babel-loader?cacheDirectory=true',
            include: [resolve('src')],// 只在src文件夹下查找
            // 不去查找的文件夹路径，node_modules下的代码是编译过得，没必要再去处理一遍
            exclude: /node_modules/ 
        ]
    }
}
```
另外可以将babel编译过文件缓存起来，以此加载打包时间，主要在于设置caheDirectory

```
loader: 'babel-loader?cacheDirectory=true'
```

### 2. HappyPack

因为受限于Node的单线程运行，所以webpack的打包也是单线程的，__使用HappyPack可以将Loader的同步执行转为并行__，从而执行Loader时的编译等待时间。

```
module: {
    loaders: [
        test: /\.js$/,
        include: [resolve('src')],
        exclude: /node_modules/,
        loader: 'happypack/loader?id=happybabel' //id对应插件下的配置的id
    ]
},
plugins: [
    new HappyPack({
        id: 'happybabel',
        loaders: ['babel-loader?cacheDirectory'],
        threads: 4, // 线程开启数
    })
]
```

### 3.DllPlugin

__该插件可以将特定的类库提前打包然后引入__,这种方式可以极大的减少类库的打包次数，只有当类库有更新版本时才会重新打包，并且也实现了将公共代码抽离成单独文件的优化方案。

```
// webpack.dll.conf.js
const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: {
        vendor: ['react'] // 需要统一打包的类库
    }，
    output: {
      path: path.join(__dirname, 'dist'),
        filename: '[name].dll.js',
        library: '[name]-[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]-[hash]', //name必须要和output.library一致
            context: __dirname, //注意与DllReferencePlugin的context匹配一致
            path: path.join(__dirname, 'dist', '[name]-manifest.json')
        })
    ]
}
```

然后在package.json文件中增加一个脚本

```
'dll': 'webpack --config webpack.dll.js --mode=development'
//运行后会打包出react.dll.js和manifest.json两个依赖文件
```

最后使用DllReferencePlugin将刚生成的依赖文件引入项目中

```
// webpack.conf.js
module.exports = {
    //...其他配置
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/vendor-manifest.json') //此即打包出来的json文件
        })
    ]
}
```
## 参考链接

* [https://www.jianshu.com/p/e4c1a9c40a2e](https://www.jianshu.com/p/e4c1a9c40a2e)