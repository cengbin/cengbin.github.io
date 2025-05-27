# 管理后台 之 页面开发

管理后台通常都是表的增、删、改、查、数据展示，再简化一点就是读(查记录列表、查记录详情、查表数据详情)和写(增加、更新、删除)。针对这些场景总结CRUD页面如何写。

## 场景一：【业务管理】菜单配置与页面开发

通常在管理后台要增加【某某某业务】管理，都会在管理后台先配置【某某某管理】菜单，比如【司机管理】、【车辆管理】，然后在页面中对某业务的增、删、改、查。

下面拿【基础数据】->【司机管理】举例做介绍。【司机管理】菜单配置可以有多种配置方式，介绍两种常见的方式。

**方式一：**

只配置一个页面`basic_center/driver_manage`，进入这个页面默认是搜索查询列表，增加、更新、删除是这个菜单中的一个状态，可以通过事件总线模式切换状态。

```
<template>
  <bst-page>
    <List ref="List"></List>
    <Create ref="Create"></Create>
  </div>
</template>

<script>
  import List from './list';
  import Create from "./create";

  export default {
    name: "index",
    components: {
      Create,
      List,
    },
    created() {
      this.$root.$on('message_template_cretea', this.onMessageTemplateListener)
      this.$root.$on('message_template_update', this.onMessageTemplateListener)
    },
    methods: {
      onMessageTemplateListener({type, data}) {
        switch (type) {
          case 'add':
            if(this.$refs.Create!==undefined) {
              this.$refs.Create.show().fill({action_type: 'add',action_data:data});
            }
            break;
          case 'update':
            if(this.$refs.Create!==undefined) {
              this.$refs.Create.show().fill({action_type: 'update',action_data:data});
            }
            break;
        }
      }
    }
  }
</script>
```

**方式二：**

配置多个页面路径
`basic_center/driver_manage`司机列表查询页， 
`basic_center/driver_manage/create`司机增加页面，
`basic_center/driver_manage/update`司机更新页面，
`basic_center/driver_manage/detail`司机详情页面，
【司机管理】菜单路径指向`basic_center/driver_manage`，其他路径设置菜单隐藏。

不同的页面通过路由切换来展示，例如要跳转到创建`this.$rooter.push('basic_center/driver_manage/create')`,创建成功再通过`this.$rooter.push('basic_center/driver_manage')`跳回到列表查询页面。

## 场景二：查询列表页面开发

[查询场景开发示例](https://best-chatai.tz12306.com/element-ui-best-doc/example/search.html)

## 场景三：新增、更新页面开发

[新增、更新场景开发示例](https://best-chatai.tz12306.com/element-ui-best-doc/example/create.html)

## 场景四：删除开发

[删除场景开发示例](https://best-chatai.tz12306.com/element-ui-best-doc/example/button-async.html)


## 分层架构设计

这种重构的好处：

* 业务逻辑集中在一处维护，降低代码重复
* 组件更加轻量，关注点分离
* 组件更专注于UI和用户交互，职责更加单一
* 将来如果API调用逻辑需要改变，只需修改DetailPageContext
* 表单组件更专注于界面和交互，不再关心后端API的实现细节

这样的架构使得系统更易于维护和扩展，同时提高了代码的可测试性。

### 实现

react 项目分层开发之 页面开发之【状态提升】管理 ，useReducer 与 useContext 结合使用 实现【状态提升】管理