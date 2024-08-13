# StyleLint

## StyleLint 介绍

StyleLint 是一个强大的、现代化的 CSS 检测工具, 是通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误。

## StyleLint 使用

**安装** 

`npm install stylelint@14.6.0 stylint-config-standard@25.0.0 stylelint-order@5.0.0 --save-dev`

stylelint：规则检查工具
stylelint-config-standard：关于规范、风格约束的规则集，其中已经做了许多规则的配置
stylelint-order：对css属性进行排序的插件工具
stylelint-config-recess-order：社区提供的属性排序的规则集

**配置**

配置 `.stylelintrc.js` 文件

```
module.exports = {
	"extends": ["stylelint-config-standard"],
	"plugins": ["stylelint-order"],
	"rules": {
		// ...
	}
}
```

**属性排序的推荐设置**

```
{
  "extends": "stylelint-config-standard",
  "rules": {
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "display",
      "flex",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-items",
      "align-content",
      "margin",
      "padding",
      "width",
      "height",
      "color",
      "background",
      "border",
      "border-radius",
      "font",
      "text",
      "list",
      "animation"
    ]
  }
}
```

**忽略设置**

```
/* stylelint-disable-next-line selector-class-pattern */

/* stylelint-disable-next-line no-descending-specificity */
```

## 总结

* 团队协作统一编码风格：在多人开发的大型项目中，统一的编码风格能够显著降低因样式不一致带来的沟通成本和出错概率。
* 代码审查提高代码质量：自动化的属性排序和检查使得代码审查过程更加严格和高效，有助于维持代码质量。
* 避免常见错误：检测并报告 CSS 代码中的常见错误，比如拼写错误、无效的属性或值、未关闭的括号等。这有助于开发者在代码提交前及时发现并修复这些问题。
* 维护与重构提升工作效率：整齐划一的代码格式让后续的维护和重构工作变得更加轻松，新加入项目的开发者也能更快地理解现有代码，缩短适应代码库的时间。

### 参考

https://juejin.cn/post/7118294114734440455?searchId=2024031516574914DB2CF497493804EACC

https://blog.csdn.net/m0_60273757/article/details/125762025

https://juejin.cn/post/6844904112274800647?searchId=20240315165559E0A5D692FD025004FAA7

https://juejin.cn/post/6876367482412597262?searchId=2024031516574914DB2CF497493804EACC