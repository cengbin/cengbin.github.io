# Monorepo

## Monorepo 介绍

Monorepo 是一种项目代码管理方式，指单个仓库中管理多个项目，有助于简化代码共享、版本控制、构建和部署等方面的复杂性，并提供更好的可重用性和协作性。

## Monorepo 演进

一个简单的monorepo的目录结构类似这样：

├── packages
|   ├── pkg1
|   |   ├── package.json
|   ├── pkg2
|   |   ├── package.json
├── package.json
├── lerna.json

之所以应用monorepo，主要是解决以下问题：

* 代码复用的问题
* 开发流程统一
* 高效管理多项目/包

### 参考

https://mp.weixin.qq.com/s/kGfNh_yyzGy_F4OkxNlqeA