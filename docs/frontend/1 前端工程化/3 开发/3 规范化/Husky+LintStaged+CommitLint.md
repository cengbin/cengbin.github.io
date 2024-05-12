# Husky + LintStaged + CommitLint

**环境准备**  

node@16.13.1

**安装**

npm install --save-dev husky@8.0.0  
npm install --save-dev lint-staged@12.0.0  
npm install --save-dev @commitlint/cli@17.7.1  
npm install --save-dev @commitlint/config-conventional@17.7.0  

## 1、Husky

Husky是一个Git Hook 工具，[husky官网](https://typicode.github.io/husky/)。

### 前沿

在实际的团队协作开发中，你是否曾经遇到过这样的问题：当你在本地执行拉取（pull）操作，获取到团队成员的代码时，却发现他们的代码并未经过格式化，或者存在一些语法错误，甚至遗漏了某个文件的提交。而此时，那位同事却恰好处于休假状态。你只能先着手解决这些报错问题，才能顺利地在本地运行代码。而如果你也修改了那些未经格式化的代码，并在推送（push）之后，同事休假回来，他们对代码进行了格式化处理，并添加了新的功能，当他们提交时，就会产生大量的冲突，而再去解决这些不必要的冲突，又需要消耗你大量的精力。所以规范git提交操作，在git提交时进行eslint静态代码检查，以及格式化代码，这是必要的。

### 安装 husky

> 最新husky版本是9.0.11，需要node: '>=18'  
> 我本机node版本是16.13.1，需要安装husky@8.0.0才支持

`npm install husky --save-dev`

`npx husky-init`

执行成功后，项目中生成一个 .husky 目录

### 常见钩子

以下是一些常见的 Husky 钩子以及它们的作用：

* pre-commit：在提交代码之前执行的钩子。可以用于运行代码格式化、代码质量检查、单元测试等操作，以确保提交的代码符合规范。 
* commit-msg：在提交信息（Commit Message）被创建之后、实际执行提交之前执行的钩子。可以用于对提交信息进行验证、校验和规范，以确保提交信息的格式正确且符合规范。 
* pre-push：在推送代码之前执行的钩子。可以用于运行集成测试、端到端测试等操作，以确保即将推送的代码通过了所有的测试。 
* prepare-commit-msg：在提交信息被编辑之后、实际执行提交之前执行的钩子。可以用于自动化地修改或添加提交信息，如添加一个统一的前缀或后缀。 
* post-merge：在代码合并（merge）之后执行的钩子。可以用于运行安装依赖、构建项目或其他必要的后续操作。 
* post-checkout：在切换分支（checkout）之后执行的钩子。可以用于执行特定分支下的必要任务，如安装依赖、清理缓存等。 
* post-rewrite：在使用 Git 命令改写提交历史（如使用 git commit --amend）之后执行的钩子。可以用于对改写后的提交进行必要的操作和验证。

![](./assets/image/GitHooks.jpg)

当你想新增钩子时可以使用命令：

```
npx husky add .husky/commit-msg 'npm test'
```

## 2、lint-staged

### 简介

lint-staged 的主要功能是在 Git 暂存区中检查被修改的文件，只对这些文件进行 lint 操作，从而提高 lint 检查的效率。通常，我们并不需要对整个项目进行 lint 检查，而是希望只针对即将提交的代码进行检查，以避免不必要的耗时。

通过将 lint-staged 配置为 husky 的 pre-commit 钩子的一部分，可以在每次提交代码之前自动触发 lint-staged，对即将提交的文件进行 lint 检查。如果有任何 lint 错误或不符合规范的代码，lint-staged 将阻止提交，给出相应的错误信息，帮助开发者及时发现和解决问题。

### 安装

`npm install lint-staged --save-dev`

### 配置 lint-staged

[配置方法官网介绍](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration)

#### 方法一

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

#### 方法二

在项目根目录下创建.lintstagedrc.json文件，添加一下配置：

```
{
	"src/**/*.{js,vue,css,scss,json,md}": ["npm run eslint"],
	"src/*.{js,vue,css,scss,json,md}": ["npm run eslint"]
}
```

### 使用 lint-staged

编辑 `.husky/pre-commit.sh` 文件

```
#!/usr/bin/env sh

. "$(dirname -- "$0")/_/husky.sh"

echo "husky ===> 执行 pre-commit 钩子"

npx lint-staged
```

## 3、CommitLint

### 前沿

约定式提交（Conventional Commits）是一种用于代码版本控制的规范，旨在通过明确和标准化提交信息来提高代码协作质量和效率。
其基本原则是通过规定提交信息的结构和语义来提高代码版本控制的可读性、可维护性和自动化程度。

### 简介

「commitlint」是一个用于规范化提交消息的工具，它能够帮助团队在项目中统一和规范提交信息的格式和内容。
通过使用 commitlint，你可以确保提交消息遵循预定义的规则，提高代码提交的可读性和一致性。

### 安装及使用

#### 安装 CommitLint

`npm install @commitlint/cli @commitlint/config-conventional --save-dev`

@commitlint/cli，它是 commitlint 的核心工具，用于执行提交消息的规范校验。

@commitlint/config-conventional，它是一个常用的规则配置，遵循了约定式提交规范（Conventional Commits）。

#### 配置 CommitLint

在项目根目录下创建`commitlint.config.js` 或 `.commitlintrc.js`文件，并编辑：

```
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
      'feat',       // 新增功能
      'update',     // 更新功能
      'ui',         // 样式改动
      'fix',        // 修复功能bug
      'merge',      // 合并分支
      'refactor',   // 重构功能
      'perf',       // 性能优化
      'revert',     // 回退提交
      'style',      // 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等)
      'build',      // 修改项目构建工具(例如 glup，webpack，rollup 的配置等)的提交
      'docs',       // 文档新增、改动
      'test',       // 增加测试、修改测试
      'chore'      // 不修改src或者test的其余修改，例如构建过程或辅助工具的变动
    ]],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0],
    'subject-case': [0]
  }
}
```

#### 使用 CommitLint

##### 编辑 `.husky/commit-msg.sh` 文件

```
#!/bin/sh

. "$(dirname "$0")/_/husky.sh"

echo "husky commit-msg" && npx --no-install commitlint --edit $1
```

在 commit-msg 钩子内执行 npx --no-install commitlint --edit $1 的作用是调用 commitlint 来对提交消息进行校验并编辑。

具体作用如下：

1. --no-install 参数告诉 npx 命令不要自动安装 commitlint，而是使用当前项目中已安装的 commitlint。
2. commitlint 是执行实际的 commitlint 命令，用于校验提交消息的规范性。
3. --edit 参数告诉 commitlint 打开文本编辑器，以便你可以在编辑器中查看和编辑提交消息。
4. $1 是 commit-msg 钩子的参数，将提交消息作为参数传递给 commitlint 进行校验。

综合起来，npx --no-install commitlint --edit $1 的目的是在 commit-msg 钩子中调用 commitlint，通过打开文本编辑器编辑提交消息，从而实现对提交消息的规范校验。
这样，你可以在编辑器中查看和修改提交消息，确保其符合预定义的规范要求。

#### 提交格式规范

约定 commit的提交格式规范，包含Header，Body（可选） 和 Footer（可选）。

```
<type>(<scope>): <subject>
<空行>
<body>
<空行>
<footer>
```

注意：
> 在Linux系统中，commit信息使用单引号''包括，git commit -m ’project initialized‘。  
> 在windows系统，信息应该是双引号”“包括， 正确格式是git commit -m “project initalized”。

Header

type用于说明 'commit' 的类别，主要包含以下类型

|type|	说明|
|---|---|
|feat|	新功能|
|fix|	修复BUG|
|docs|	文档更新|
|style|	样式更新|
|refactor|	重构|
|test|	增加测试内容|
|chore|	构建过程或辅助工具的变动|