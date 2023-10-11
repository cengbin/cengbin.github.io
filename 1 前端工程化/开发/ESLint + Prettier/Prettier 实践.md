# Prettier 实践

## 简介

ESLint 用来进行代码质量的校验。例如：

```
// bad
console.log(a); // 在声明之前访问变量
var a = 1;
var b = 2;
console.log(d); // 引用了未声明的变量
```

```
// good
var a = 1;
console.log(a);
var b = 2;
console.log(b);
```

Prettier (adj. 更漂亮的)  用来进行代码风格的统一，统一的代码风格能保证代码的可读性。例如：

```
// bad
var a = {
    a:'1',b:'2',c:'3',
}
console.log(
    a
)
```

```
// good
var a = {
    a: '1',
    b: '2',
    c: '3',
}
console.log(a)
```

ESLint 与 Prettier 配合使用

## 安装

npm i --save-dev prettier

配合ESLint检测代码风格

npm i --save-dev eslint-plugin-prettier

eslint-plugin-prettier插件会调用prettier对你的代码风格进行检查，其原理是先使用prettier对你的代码进行格式化，然后与格式化之前的代码进行对比，如果过出现了不一致，这个地方就会被prettier进行标记。

接下来，我们需要在rules中添加，"prettier/prettier": "error"，表示被prettier标记的地方抛出错误信息。

如果与已存在的插件冲突怎么办 (解决 eslint 和 prettier 冲突)

npm i -D eslint-config-prettier

通过使用eslint-config-prettier配置，能够关闭一些不必要的或者是与prettier冲突的lint选项。这样我们就不会看到一些error同时出现两次。使用的时候需要确保，这个配置在extends的最后一项。

// .eslintrc.js
```
{
    extends: [
      'standard', //使用standard做代码规范
      "prettier",
    ],
}
```

// .prettierrc.js
```
module.exports = {
    "printWidth": 80, //一行的字符数，如果超过会进行换行，默认为80
    "tabWidth": 2, //一个tab代表几个空格数，默认为80
    "useTabs": true, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
    "singleQuote": true, //字符串是否使用单引号，默认为false，使用双引号
    "semi": false, //行位是否使用分号，默认为true
    "trailingComma": "none", //是否使用尾逗号，有三个可选值"<none|es5|all>"
    "bracketSpacing": true, //对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    "parser": "babylon" //代码的解析引擎，默认为babylon，与babel相同。
}
```

## 总结

我们统一使用prettier的风格是为了团队和睦，世界和平，我们做出的牺牲都是必要的。而且prettier的样式风格已经在很多大型开源项目中被采用，比如react、webpack、babel。

### 参考

使用ESLint+Prettier来统一前端代码风格
https://juejin.cn/post/6844903621805473800?searchId=2023101113021452187A2E209592665B00