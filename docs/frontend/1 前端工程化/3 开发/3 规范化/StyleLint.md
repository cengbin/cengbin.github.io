# StyleLint

## StyleLint 介绍

StyleLint 是一个强大的、现代化的 CSS 检测工具, 是通过定义一系列的编码风格规则帮助我们避免在样式表中出现错误。

## StyleLint 使用

安装 `stylelint` `stylint-config-standard` `stylelint-order`

stylelint：规则检查工具
stylelint-config-standard：关于规范、风格约束的规则集，其中已经做了许多规则的配置
stylelint-order：对css属性进行排序的插件工具
stylelint-config-recess-order：社区提供的属性排序的规则集

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

### 参考

https://juejin.cn/post/7118294114734440455?searchId=2024031516574914DB2CF497493804EACC

https://blog.csdn.net/m0_60273757/article/details/125762025

https://juejin.cn/post/6844904112274800647?searchId=20240315165559E0A5D692FD025004FAA7

https://juejin.cn/post/6876367482412597262?searchId=2024031516574914DB2CF497493804EACC