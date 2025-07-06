# Tree Shaking

Tree-shaking (摇树) 是一个术语，通常指通过打包工具"摇"我们的代码，将未引用代码 (Dead Code) "摇" 掉。

在 Webpack 项目中，有一个入口文件，相当于一棵树的主干，入口文件有很多依赖的模块，相当于树枝，虽然依赖了某些模块，但其实只使用其中的某些方法，通过 Tree Shaking ，将没有使用的方法摇掉，这样来达到删除无用代码的目的。
 
参考：http://zoo.zhengcaiyun.cn/blog/article/treeshaking 