# Webpack 笔记

## Webpack4.x 指定打开浏览器时的导航页面和参数配置

查看webpack 打开浏览器默认带上参数的配置。

https://v4.webpack.docschina.org/configuration/dev-server/#devserver-openpage

```
devServer: {
  open: true,
  host: 'example.com',
  https: true,
  // 指定打开浏览器时的导航页面，并附带参数
  openPage: '/different/page?id=123&name=456'
},
```

## Webstrom 添加 Vue 项目的 Webpack 的配置的方法

1. 在项目根目录下添加 `webstrom.config.js` 文件。

2. 输入内容：

```
'use strict'
const webpackConfig = require('@vue/cli-service/webpack.config.js')
module.exports = webpackConfig
```

完整文件[点击这里](./webstrom.config.js)