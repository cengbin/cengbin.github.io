# 后台管理系统 - 前端项目搭建

基于 React 技术栈

* React
* ant
* axios
* Umi
* Umi Max

## 创建项目

```shell
npx create-umi@latest
Need to install the following packages:
  create-umi@latest
Ok to proceed? (y) y
✔ Pick Umi App Template › Simple App
✔ Pick Npm Client › npm
✔ Pick Npm Registry › taobao
Write: .gitignore
Write: .npmrc
Write: .umirc.ts
Write: package.json
Copy:  src/assets/yay.jpg
Copy:  src/layouts/index.less
Write: src/layouts/index.tsx
Copy:  src/pages/docs.tsx
Copy:  src/pages/index.tsx
Write: tsconfig.json
Copy:  typings.d.ts

postinstall
umi setup
```

## 启动项目

```shell
npm run dev
        ╔═════════════════════════════════════════════════════╗
        ║ App listening at:                                   ║
        ║  >   Local: https://127.0.0.1:8000                  ║
ready - ║  > Network: https://192.168.1.1:8000                ║
        ║                                                     ║
        ║ Now you can open browser with the above addresses👆 ║
        ╚═════════════════════════════════════════════════════╝
event - compiled successfully in 1121 ms (388 modules)
event - MFSU compiled successfully in 1308 ms (875 modules)
```

## 发布项目

执行`npm run build`命令

```shell
npm run build
event - compiled successfully in 1179 ms (567 modules)
event - build index.html
```

## 部署项目

## 管理后台布局