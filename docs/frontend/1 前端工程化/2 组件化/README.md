# 前端开发「组件化」

## 组件化

组件化是将页面视作为一个容器，把页面各个独立的部分视作为组件，根据内容的需要，把相关组件拼装在一起即可组成完整的页面。

## 组件基础

组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。在实际应用中，组件常常被组织成层层嵌套的树状结构：

![](./components.png)

这和我们嵌套 HTML 元素的方式类似，Vue/React 均实现了自己的组件模型，我们可以在每个组件内封装自定义内容与逻辑。组件包含了模板（HTML）、样式（CSS）、脚本（JavaScript）三部分，其中样式、脚本可以由一个或多个模块组成。[参考](https://cn.vuejs.org/guide/essentials/component-basics.html)

## 组件封装

组件按类型可分：基础组件、业务组件。

### 基础组件库

市面上有很多优秀的基础组件库，例如：

* [Element](https://element.eleme.cn/#/zh-CN)
* [Ant Design](https://4x-ant-design.antgroup.com/index-cn)
* Vant
* Arco Design
* Taro UI
* Semi Design
* View Design
* [IKUN-UI](https://github.com/LAINE001/ikun-ui)

这些组件库都是封装的原子组件，在管理后台开发的时候通常都是增、删、改、查、数据展示的场景，针对这些相对固定的业务场景，应该有一套固定的UI规范和交互规范，基于规范去实现一套满足自己公司业务场景的统一UI/交互的组件库。从而达到视觉与交互一致性，提升用户体验，提高研发效率。

* [element-ui-best 组件库](https://best-chatai.tz12306.com/element-ui-best-doc/)

### 业务组件库

业务组件库是基于基础组件库做的封装，其包含了某些公司的特定的业务场景的封装。
