# 写CRUD页面总结

## 场景一：数据 新增、编辑

### 优化之前

```page.vue
<template>
	<page>
		<button>新增活动</button>
		<button>新增服务器</button>
		
		<el-dialog v-if="addActivityVisible" ref='add-activity'>...</el-dialog>
		<el-dialog v-if="addServiceVisible" ref='add-service'>...</el-dialog>
	<page>
</template>

export default {
	data(){
		return {
			addActivityVisible:false,
			addServiceVisible:false,
		}
	}
	onClickAddActivity(){
		this.addActivityVisible=true;
		...
	}
}
```

### 优化之后

```
<template>
	<page>
		<button>新增</button>
	
		<activity ref='activity'></activity>
	<page>
</template>

export default {
	onClickAddActivity(){
		this.$refs['activity'].show(type,data);
	}
}
```

## 场景二：列表 增加、删除
```

<div v-for="(reward,index) in info.rewards" :key="index" class="condition-group">
	<el-input v-model="reward.product_id"
	          placeholder="请输入奖励ID"
	          :disabled="server_opening"
	          style="width:160px;margin-right: 8px;"/>
	<el-input v-model="reward.amount" placeholder="请输入数值"
	          :disabled="server_opening"
	          style="width:160px;margin-right: 8px;"/>
	<el-button v-if="info.rewards.length>1 && !server_opening"
	           class="button-custom"
	           icon="el-icon-minus2"
	           @click="onClickReward('delete',index)"/>
	<el-button v-if="index===info.rewards.length-1 && !server_opening"
	           icon="el-icon-plus2"
	           class="button-custom"
	           @click="onClickReward('add',index)"/>
</div>

onClickReward(type, index) {
	if (type === 'add') {
		this.info.rewards.push({
			"product_id": null,
			"amount": null,
		})
	} else if (type === 'delete') {
		this.info.rewards.splice(index, 1)
	}
},
```

### 场景三：表单提交

##### 前端表单校验设计：

职责：前端做非空、录入格式等等基本格式校验。服务端对业务逻辑的正确性进行校验。

理由：考虑到如果有业务逻辑调整只需要服务端一端修改校验逻辑即可，前端不需要做业务逻辑校验调整。