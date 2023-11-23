# Element-ui el-dialog组件应用总结

## 场景一

需求：

实现活动：新增、查询、编辑、删除。

实现服务器：新增、查询、编辑、删除。

新增活动需要选择对应的服务器。

```
<page>
	<module>
		<form type='search'>
		</form>
	</module>
	
	<module>
		<table>
			<table-header>
				<button>新增活动</button>
				<button>新增服务器</button>
			</table-header>
		</table>
	</module>
	
	<el-dialog ref='add-activity'></el-dialog>
	
	<el-dialog ref='add-service'></el-dialog>
<page>
```

## 优化之后

```
<page>
	<module>
		<form type='search'>
		</form>
	</module>

	<module>
		<table>
			<table-header>
				<button>新增</button>
			</table-header>
		</table>
	</module>

	<activity ref='activity'></activity>

	<service ref='service'></service>
<page>
```

```
this.$refs['activity'].show(type,data);
```