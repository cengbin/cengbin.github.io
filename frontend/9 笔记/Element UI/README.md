# Element UI 笔记

```
Vue.use(Element, {
 size: 'small', // 修改组件的默认尺寸
 zIndex: 3000, // 设置弹框的初始 z-index
});
```

参考：https://element.eleme.cn/2.14/#/zh-CN/component/quickstart#quan-ju-pei-zhi

## `<el-table/>`

支持树类型的数据的显示。
当 row 中包含 children 字段时，被视为树形数据。
渲染树形数据时，必须要指定 row-key。支持子节点数据异步加载。
设置 Table 的 lazy 属性为 true 与加载函数 load 。
通过指定 row 中的 hasChildren 字段来指定哪些行是包含子节点。children 与 hasChildren 都可以通过 tree-props 配置。

## `<el-from/>`

Form 的 model 属性是给表单验证的时候用的，
调用From的validate 方法的时候，会通过FormItem 的 prop属性名 去model对象上取prop属性的值，然后进行FormItem的rules规则校验。

如果要调用resetFields方法，必须要在<form-item/>组件上设置prop属性。

当<el-from/>设置了size=‘small’的时候，<el-select/> <el-input/> 元素必须要放到<el-form-item/>下才能生效，否者只能在<el-select/>元素上单独设置size属性才能生效。

#### validator 自定义校验规则

https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze

```
rules: {
	settingName: [
		{required: true, message: "必填项"},
		{
			validator(rule, value, callback) {
				console.log({rule, value});
				if (value.length > 10) {
					return callback(new Error('名字最多不能超过10个字符'));
				}
				return callback()
			},
			trigger: 'blur'
		}
	],
	settingUri: [
		{required: true, message: '必填项'}
	],
},
```

## `<el-input/>`

* .number - 输入字符串转为有效的数字
* .trim - 输入首尾空格过滤

`<el-input v-model.trim.number="item.property.skill[0]”/>`

// 监听原生事件，可以拿到event对象，通过event.target可以获取到目标对象

`<el-input @change.native="onChangeInputNumber($event,item)"/>`

// 显示最大输入字符数量、监听input事件
```
<el-input v-model.trim="form.settingUri" maxlength="10"  show-word-limit placeholder="请输入" @input="onInputUri">
  <!--<template slot="prepend">Http://</template>-->
  <template slot="append">.merchant.tz12306.com</template>
</el-input>

onInputUri(value) {
  this.form.settingUri = value.replace(/[^A-z]/g, '')
},
```

## `<el-select/>`
```
// 备选项进行分组展示
<el-select v-model="value" placeholder="请选择">
    <el-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
```

## `<el-date-picker/>`
```
// 时间区间
<el-date-picker
  v-model="form.time"
  class="create-time"
  type="datetimerange"
  value-format="timestamp"
  placeholder="datetime"
  :clearable="false"
  :default-time="['00:00:00', '23:59:59']"
  range-separator="～"
  start-placeholder="开始日期"
  end-placeholder="结束日期"
/>
// time: [new Date(), new Date(new Date().valueOf() + 24 * 60 * 60 * 1000)],
```

## `<el-dropdown/>`

```
<el-dropdown
  split-button
  type="primary"
  trigger="click"
  @click="onClickTemplateOperation('email-template-list')"
  @command="onClickTemplateOperation"
>
  模板列表
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="email-template-create">新建模板</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
```


## `<el-button/>`
```
<el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
```

// 红色删除文本按钮
```
<el-button type="text" size="small" @click="onClickOperation('delete',scope.row)" class="red">删除</el-button>

.red {
  color: #f56c6c;
}
```

## Loading 加载

网络提交loading提示代码
```
this.$confirm('确认删除？').then(() => {
  const {activity_id} = row;
  const loading = this.$loading({lock: true});
  putSdkActivityManagerActivityDelete({activity_id}).then(({code, message}) => {
    if (code === 20000) {
      this.search();
      this.$message.success(message);
    } else {
      this.$message.error(message);
    }
  }).finally(() => {
    loading.close();
  });
}).catch(() => {
});
```