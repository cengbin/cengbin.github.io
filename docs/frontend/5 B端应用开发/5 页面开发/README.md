# 管理后台 之 页面开发

管理后台通常都是表的增、删、改、查、数据展示，再简化一点就是读(查记录列表、查记录详情、查表数据详情)和写(增加、更新、删除)。 针对这些场景总结CRUD页面如何写。

## 1. 路由设计

假设有一个新的【营销活动管理】模块开发，通常要先在管理后台先配置【营销活动管理】菜单，然后再开发页面。

菜单配置可以有多种配置方式，介绍两种常见的方式。

**方式一：**

只配置一个页面`/tool/activity`，进入这个页面默认是搜索查询列表，增加、更新、删除是这个菜单中的一个状态。

路由设计：

* `/tool/activity`
* `/tool/activity/data`

**方式二：**

路由设计:

* `/tool/activity` 列表查询页
* `/tool/activity/create` 增加页面
* `/tool/activity/update` 更新页面
* `/tool/activity/detail` 详情页面

【营销活动管理】菜单路径指向`/tool/activity`，其他路径设置菜单隐藏。

不同的页面通过路由切换来展示，例如要跳转到创建`this.$rooter.push('/tool/activity/create')`,创建成功再通过`this.$rooter.push('basic_center/driver_manage')`跳回到列表查询页面。

## 2. 页面开发

1. 创建 types.ts 定义数据类型
2. 创建 constants.ts 定义常量
3. 创建 Zustand store
4. 创建 useTable.tsx 定义表格列
5. 创建 Table.tsx 表格组件
6. 创建 Create.tsx 创建/编辑表单
7. 创建 index.tsx 主页面

### 查询

[查询场景开发示例](https://best-chatai.tz12306.com/element-ui-best-doc/example/search.html)

### 新增/更新

[新增、更新场景开发示例](https://best-chatai.tz12306.com/element-ui-best-doc/example/create.html)

### 删除

[删除场景开发示例](https://best-chatai.tz12306.com/element-ui-best-doc/example/button-async.html)

## 3. 分层架构设计

这种重构的好处：

* 业务逻辑集中在一处维护，降低代码重复
* 组件更加轻量，关注点分离
* 组件更专注于UI和用户交互，职责更加单一
* 将来如果API调用逻辑需要改变，只需修改DetailPageContext
* 表单组件更专注于界面和交互，不再关心后端API的实现细节

这样的架构使得系统更易于维护和扩展，同时提高了代码的可测试性。

### 实现

react 项目分层开发

* 方式一：**状态提升** ，useReducer 与 useContext 结合使用 实现【状态提升】管理
* 方式二：**Zustand**