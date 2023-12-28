# Vue 笔记

## Vue computed 还可以返回函数

```
computed: {
  isEnable() {
    return function (keyName) {
      return this.contentForm[keyName] === '1'
    }
  },
},
```

使用

```
<el-table
  v-if="isEnable('enableInteraction')"
  class="page-table"
>
```

## 关闭 vue cli 中的 eslint 检查工具

```
// vue.config.js
module.exports = {
  lintOnSave:false //关闭eslint检查
  devServer: {
    overlay: {
      warnings: false, //不显示警告
      errors: false	//不显示错误
    }
  },
}
```

## Vue 深度选择器 :v-deep

```
.area {

  .col-jjje ::v-deep .el-input-group__append {
    padding: 0 10px !important;
  }

  ::v-deep .citySelect-box {
    width: 100% !important;
    padding-right: 10px;
  }
}
```

## Vue 80端口无法使用，直接运行到1024问题

[在mac os中，非root用户是无法使用小于1024的常用端口的。如果开发中需要用到80端口, 就要设置端口转发。](https://blog.csdn.net/samuelandkevin/article/details/80279773)

![](./781589-20210819154746534-814249557.png)