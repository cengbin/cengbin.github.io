# CommitLint

## 前沿

约定式提交（Conventional Commits）是一种用于代码版本控制的规范，旨在通过明确和标准化提交信息来提高代码协作质量和效率。
其基本原则是通过规定提交信息的结构和语义来提高代码版本控制的可读性、可维护性和自动化程度。

## 简介

「commitlint」是一个用于规范化提交消息的工具，它能够帮助团队在项目中统一和规范提交信息的格式和内容。
通过使用 commitlint，你可以确保提交消息遵循预定义的规则，提高代码提交的可读性和一致性。

## 安装及使用

### 安装 CommitLint

`npm install @commitlint/cli @commitlint/config-conventional --save-dev`

@commitlint/cli，它是 commitlint 的核心工具，用于执行提交消息的规范校验。

@commitlint/config-conventional，它是一个常用的规则配置，遵循了约定式提交规范（Conventional Commits）。

### 配置 CommitLint

在项目根目录下创建`commitlint.config.js`文件，并编辑：

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

### 使用 CommitLint

#### 编辑 `.husky/commit-msg.sh` 文件

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