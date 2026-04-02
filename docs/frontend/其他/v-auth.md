### v-auth 指令


### 使⽤示例

功能权限、筛选权限使⽤指令⽅式控制

```
<template>
     <!--1.功能权限-->
     <!--此权限后台配置了，会根据当前⽤户是否拥有权限渲染-->
     <el-button v-auth="'shan_chu'">删除</el-button>
     <!--此权限后台⽆配置,则不控制权限-->
     <el-button v-auth="'custom'">未配置权限</el-button>
     
     <!--2. 筛选权限-->
    <el-button v-auth:filter="'fen_zu'">分组</el-button>
     <!--此权限后台⽆配置,则不控制权限-->
    <el-button v-auth:filter="'custom'">未配置filter权限</el-button>
     
     <!--3.筛选权限外层包裹着BaseQueryFormLayout组件-->
     <BaseQueryFormLayout :spans="[7, 6, 5, 6]"> <el-form-item v-if="showAfChannel" label="测试"> <el-input></el-input>
     </el-form-item>
    </BaseQueryFormLayout>
</template>
```
