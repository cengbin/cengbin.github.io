# 部署

安装代码管理 Gitlab

安装项目部署 Jenkins，Jenkins 安装 Gitlab 插件

![](./1.jpg)

### Jenkins 配置

1. New Item 
	1. Freestyle project
2. 进入项目 -> 
	1. 点击 Configure -> 进入General面板
	2. 配置 Source Code Management
	3. 配置 Build Triggers

![](./2.png)

### Gitlab 配置

1. 代码仓库需要 Maintainer 权限
2. 代码仓库
	1. 用户设置 
	2. Webhooks
	3. 输入URL、Secret Token
	4. 点击Add webhook
	5. 点击测试
	6. 点击 Push events
	7. 提示：Hook executed successfully: HTTP 200，表示成功了。

![](./3.png)

#### 参考

https://mp.weixin.qq.com/s/HOW-QqbPjhi4AglvQbyifA