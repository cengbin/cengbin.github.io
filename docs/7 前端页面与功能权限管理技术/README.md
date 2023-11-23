# 前端页面与功能权限管理

## 1、页面权限

#### 页面路由设计

https://example.com/${布局}/${系统code}/${一级菜单code}/${二级菜单code}

例子：

https://example.com/index/system1/activity/read // 系统 -> 活动 ->活动查看页面

https://example.com/index/system1/activity/create // 系统 -> 活动 ->活动创建页面

https://example.com/index/system1/activity/update

https://example.com/index/system1/activity/delete

#### 实现

1. 第一步配置用户拥有的页面权限。
2. 第二步通过接口拿到系统与菜单权限code。
2. 第三步通过Vue动态注册路由，异步加载组件的形式挂载页面。

## 2、页面 -> 功能权限

#### 功能权限分类

按钮(button)权限

* 增
* 删
* 改
* 查

选项卡(tab)权限

其他权限

#### 实现

1. 第一步配置功能权限及功能权限所对应的接口。
2. 第二步接口拿功能权限。
3. 第三步页面中通过指令v-auth、v-if、v-show、render函数中动态节点的形式控制按钮是否显示。
