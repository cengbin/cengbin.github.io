# lint-staged

## 简介

lint-staged 的主要功能是在 Git 暂存区中检查被修改的文件，只对这些文件进行 lint 操作，从而提高 lint 检查的效率。通常，我们并不需要对整个项目进行 lint 检查，而是希望只针对即将提交的代码进行检查，以避免不必要的耗时。

通过将 lint-staged 配置为 husky 的 pre-commit 钩子的一部分，可以在每次提交代码之前自动触发 lint-staged，对即将提交的文件进行 lint 检查。如果有任何 lint 错误或不符合规范的代码，lint-staged 将阻止提交，给出相应的错误信息，帮助开发者及时发现和解决问题。

## 安装及使用

#### 安装

`npm install lint-staged --save-dev`

#### 配置 lint-staged

在 package.json 文件中添加以下配置：

```
{
  "lint-staged": {
    // src/**/*.{js,jsx,ts,tsx} 校验暂存区、指定目录下的文件类型
    // 校验命令，执行 npm run lint
    "src/**/*.{js,jsx,ts,tsx}": [
      "npm run lint"
    ]
  }
}
```

#### 使用 lint-staged

编辑 `.husky/pre-commit.sh` 文件

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "husky pre-commit" && npx lint-staged
```