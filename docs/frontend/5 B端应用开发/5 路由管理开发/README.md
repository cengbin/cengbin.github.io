# 路由管理开发

## 路由系统

约定式路由

约定式策略来实现路由已经被相当广泛的应用了，比如Nextis，简单说就是文件结构决定路由数据。

那么为了实现这个策略，那就需要把路由数据拆分清晰，这样，才能保证约定的准确执行

## 举个🌰

有【司机管理】菜单，页面路径配置如下

basic_center/driver_manage 司机列表查询页， 
basic_center/driver_manage/create 司机增加页面， 
basic_center/driver_manage/update 司机更新页面， 
basic_center/driver_manage/detail 司机详情页面， 

【司机管理】菜单路径指向basic_center/driver_manage，其他路径设置菜单隐藏。

不同的页面通过路由切换来展示，例如要跳转到创建this.$rooter.push('basic_center/driver_manage/create'),创建成功再通过this.$rooter.push('basic_center/driver_manage')跳回到列表查询页面。

### 参考

[五年React手，竟被一个用Ruoyi的Java佬给秒了，这不完了么](https://juejin.cn/post/7378891290809090085?searchId=20250216113809B42D7C90EB857333C1D0)
