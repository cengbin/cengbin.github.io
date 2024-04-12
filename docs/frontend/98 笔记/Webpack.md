## 指定打开浏览器时的导航页面和参数配置

查看webpack 打开浏览器默认带上参数的配置。

https://v4.webpack.docschina.org/configuration/dev-server/#devserver-openpage

```
devServer: {
  open: true,
  host: 'example.com',
  hot: true,
  https: true,
  // 指定打开浏览器时的导航页面，并附带参数
  openPage: '/different/page?id=123&name=456'
},
```