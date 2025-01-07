# 后台管理系统 之 接口开发

新建`api`目录，然后在`api`目录下创建`index.js`文件,并统一导出所有的接口。

```javascript
export * from './modules/login';
export * from './modules/member';
export * from './modules/message';
export * from './modules/visitor';
```

为了方便管理把所有的接口模块都放到`modules`目录下，如下展示：`login`模块示例。

```javascript
import {get, post} from '../request';

export const getOauthUrl = () => get('/api/url', null, false);

export const getOauthToken = (params: any) => get(`/api/authorize`, params, false);

export const getUserInfo = () => get(`/api/user`);
```