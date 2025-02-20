好的，我已经完成了SVG图标的配置。让我总结一下所做的更改：

1. 安装了必要的依赖：
    * 添加了vite-plugin-svg-icons插件
2. 更新了vite.config.ts：
    * 配置了createSvgIconsPlugin插件
    * 设置了svg图标目录和symbolId格式
3. 完善了SvgIcon组件：
    * 添加了TypeScript类型定义
    * 实现了SVG图标的渲染逻辑
    * 添加了样式文件style.scss
4. 更新了src/icons/index.js：
    * 将Vue的实现改为React的实现
    * 使用Vite的import.meta.glob自动导入SVG图标
    * 导出svgIcons数组供组件使用
5. 更新了src/index.tsx：
    * 导入了svg图标相关的配置

使用方法：

* 将SVG图标文件放在src/icons/svg目录下
* 在组件中使用SvgIcon组件：

```js
import SvgIcon from '@/components/SvgIcon';

// 使用示例
<SvgIcon name="icon-name"/>
```

参数说明：

* name: SVG图标的名称（必填）
* prefix: 图标前缀，默认为'icon'
* color: 图标颜色，默认为'#333'
* className: 自定义类名

现在你可以在项目中使用SVG图标了。如果你需要添加新的图标，只需要将SVG文件放到src/icons/svg目录下即可自动导入。