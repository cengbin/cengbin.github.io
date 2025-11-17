# Stylelint 实践指南

## 📋 目录

- [简介](#简介)
- [安装与配置](#安装与配置)
- [快速开始](#快速开始)
- [配置说明](#配置说明)
- [WebStorm 集成](#webstorm-集成)
- [命令行使用](#命令行使用)
- [最佳实践](#最佳实践)
- [常见问题](#常见问题)

## 简介

Stylelint 是一个强大的 CSS/SCSS/Less 代码检查工具，可以帮助团队统一样式代码风格，提高代码质量。

### 项目配置

- **Stylelint 版本**: 14.6.0
- **配置规则集**: stylelint-config-standard@25.0.0
- **属性排序插件**: stylelint-order@5.0.0
- **SCSS 语法支持**: postcss-scss@4.0.9
- **Less 语法支持**: postcss-less@6.0.0

## 安装与配置

### 1. 依赖已安装

所有必要的依赖已在 `package.json` 中配置：

```json
{
  "devDependencies": {
    "stylelint": "14.6.0",
    "stylelint-config-standard": "25.0.0",
    "stylelint-order": "5.0.0",
    "postcss-scss": "^4.0.9",
    "postcss-less": "^6.0.0"
  }
}
```

### 2. 首次安装

```bash
# 安装所有依赖
pnpm install

# 或仅安装 stylelint 相关依赖
pnpm add -D stylelint@14.6.0 stylelint-config-standard@25.0.0 stylelint-order@5.0.0 postcss-scss postcss-less
```

### 3. 配置文件

项目已包含以下配置文件：

- `.stylelintrc.cjs` - Stylelint 主配置文件
- `.stylelintignore` - Stylelint 忽略文件列表

## 快速开始

### 检查样式文件

```bash
# 检查所有样式文件（不修改）
pnpm run stylelint:check

# 自动修复样式文件
pnpm run stylelint

# 检查特定文件
pnpm run stylelint:check src/pages/workorder/custom/detail/components/WorkOrderInfo.scss

# 自动修复特定文件
pnpm run stylelint src/pages/workorder/custom/detail/components/WorkOrderInfo.scss
```

### 在 WebStorm 中使用

保存 CSS/SCSS/Less 文件时会自动运行 stylelint 进行格式化。

## 配置说明

### .stylelintrc.cjs 配置详解

#### 1. 基础配置

```javascript
extends: ['stylelint-config-standard']
```

继承 stylelint 的标准规则集，包含：
- CSS 语法检查
- 选择器命名规范
- 属性值格式
- 注释规范

#### 2. 插件配置

```javascript
plugins: ['stylelint-order']
```

使用 `stylelint-order` 插件进行 CSS 属性排序。

#### 3. 语法覆盖配置

```javascript
overrides: [
  {
    files: ['**/*.scss'],
    customSyntax: 'postcss-scss',
  },
  {
    files: ['**/*.less'],
    customSyntax: 'postcss-less',
  },
]
```

为不同文件类型指定对应的语法解析器：
- SCSS 文件使用 `postcss-scss`
- Less 文件使用 `postcss-less`

#### 4. CSS 属性排序规则

按照以下顺序排列 CSS 属性：

```
位置相关 → 显示相关 → 尺寸相关 → 间距相关 → 边框相关 → 背景相关 → 文本相关 → 其他
```

具体顺序：

| 类别 | 属性 |
|------|------|
| **位置** | position, top, right, bottom, left, z-index |
| **显示** | display, flex, flex-direction, flex-wrap, justify-content, align-items, float, clear |
| **溢出** | overflow, overflow-x, overflow-y |
| **尺寸** | width, min-width, max-width, height, min-height, max-height |
| **间距** | margin, padding 及其各方向属性 |
| **边框** | border, border-radius 等 |
| **背景** | background, background-color, background-image 等 |
| **文本** | color, font, font-size, line-height, text-align 等 |
| **其他** | opacity, visibility, cursor, transition, transform |

#### 5. 兼容性规则

```javascript
// 允许 CSS Modules 伪类
selector-pseudo-class-no-unknown: [true, { ignorePseudoClasses: ['global', 'local', 'export'] }]

// 允许 Tailwind CSS 指令
at-rule-no-unknown: [true, { ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'] }]

// 允许 BEM 命名规范
selector-class-pattern: null

// 允许使用 !important
declaration-no-important: null
```

#### 6. 忽略文件

```javascript
ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', 'node_modules/**', 'dist/**', 'build/**']
```

### .stylelintignore 忽略规则

```
# 依赖目录
node_modules/

# 构建产物
dist/
build/
public/

# 临时文件
*.log
*.tmp

# 压缩文件
*.min.css
```

## WebStorm 集成

### 自动格式化配置

#### 方法一：File Watcher（推荐）

1. 打开 WebStorm 设置：`File → Settings → Tools → File Watchers`

2. 添加新的 File Watcher：

| 配置项 | 值 |
|------|-----|
| **Name** | stylelint |
| **File type** | CSS, SCSS, Less |
| **Scope** | Project Files |
| **Program** | `$ProjectFileDir$/node_modules/.bin/stylelint` |
| **Arguments** | `--fix $FilePath$` |
| **Output paths to refresh** | `$FileDir$` |
| **Working directory** | `$ProjectFileDir$` |
| **Immediate file synchronization** | ✓ |
| **Auto-save edited files** | ✓ |
| **Trigger on external changes** | ✓ |

3. 在 **File type** 中选择：CSS, SCSS, Less

4. 在 **Scope** 中选择：Project Files

5. 点击 **OK** 保存

#### 方法二：Actions on Save（WebStorm 2022+）

1. 打开设置：`File → Settings → Tools → Actions on Save`

2. 勾选 `Run stylelint --fix`

3. 重启 WebStorm

### 验证配置

1. 创建测试文件 `test.scss`：

```scss
body {
  color: red;
  display: flex;
  margin: 0;
}
```

2. 保存文件（`Ctrl+S`）

3. 文件应该自动格式化为：

```scss
body {
  display: flex;
  margin: 0;
  color: red;
}
```

## 命令行使用

### 基本命令

```bash
# 检查所有样式文件
pnpm run stylelint:check

# 自动修复所有样式文件
pnpm run stylelint

# 检查特定文件
pnpm run stylelint:check src/styles/main.scss

# 自动修复特定文件
pnpm run stylelint src/styles/main.scss

# 检查特定目录
pnpm run stylelint:check src/pages/

# 自动修复特定目录
pnpm run stylelint src/pages/
```

### 高级用法

```bash
# 显示详细输出
./node_modules/.bin/stylelint src/**/*.scss --verbose

# 输出为 JSON 格式
./node_modules/.bin/stylelint src/**/*.scss --formatter json

# 指定配置文件
./node_modules/.bin/stylelint src/**/*.scss --config .stylelintrc.cjs

# 忽略特定文件
./node_modules/.bin/stylelint src/**/*.scss --ignore-path .stylelintignore

# 最大警告数
./node_modules/.bin/stylelint src/**/*.scss --max-warnings 10
```

## 最佳实践

### 1. 属性排序规范

遵循配置中定义的属性顺序，提高代码可读性：

❌ **不推荐**
```scss
.button {
  color: white;
  display: inline-block;
  margin: 0;
  position: relative;
  padding: 10px 20px;
}
```

✅ **推荐**
```scss
.button {
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 10px 20px;
  color: white;
}
```

### 2. 命名规范

支持多种命名规范，推荐使用 BEM 或 kebab-case：

❌ **不推荐**
```scss
.ButtonPrimary {
  // ...
}

.button_primary {
  // ...
}
```

✅ **推荐**
```scss
.button-primary {
  // ...
}

.button--primary {
  // ...
}

.button__text {
  // ...
}
```

### 3. 使用 CSS 变量

充分利用 CSS 变量提高代码可维护性：

❌ **不推荐**
```scss
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
}

.link {
  color: #007bff;
}
```

✅ **推荐**
```scss
:root {
  --primary-color: #007bff;
  --button-padding: 10px 20px;
}

.button {
  background-color: var(--primary-color);
  color: white;
  padding: var(--button-padding);
}

.link {
  color: var(--primary-color);
}
```

### 4. 避免过度嵌套

SCSS 嵌套不要超过 3 层：

❌ **不推荐**
```scss
.container {
  .header {
    .nav {
      .item {
        .link {
          color: blue;
        }
      }
    }
  }
}
```

✅ **推荐**
```scss
.container {
  // ...
}

.header {
  // ...
}

.nav {
  // ...
}

.nav-item {
  // ...
}

.nav-link {
  color: blue;
}
```

### 5. 注释规范

使用清晰的注释说明样式的用途：

```scss
// 主按钮样式
.button-primary {
  background-color: var(--primary-color);
  color: white;
  
  // 悬停状态
  &:hover {
    background-color: darken(var(--primary-color), 10%);
  }
}
```

### 6. 提交前检查

在提交代码前运行 stylelint 检查：

```bash
# 检查所有样式文件
pnpm run stylelint:check

# 如果有错误，自动修复
pnpm run stylelint

# 然后提交
git add .
git commit -m "style: format styles with stylelint"
```

## 常见问题

### Q1: 保存时没有自动格式化？

**A:** 检查以下几点：

1. 确认 File Watcher 已启用
2. 检查 **对文件运行 ID** 是否包含 `**/*.{css,scss,less}`
3. 重启 WebStorm：`File → Invalidate Caches → Invalidate and Restart`
4. 检查 `.stylelintrc.cjs` 配置是否正确

### Q2: 报错 "customSyntax" 错误？

**A:** 确保已安装必要的依赖：

```bash
pnpm install postcss-scss postcss-less
```

### Q3: 与 Prettier 冲突？

**A:** Stylelint 和 Prettier 职责不同：
- **Prettier**: 处理代码格式（缩进、引号等）
- **Stylelint**: 处理样式规则（属性顺序、命名等）

两者可以共存，不会冲突。

### Q4: 如何禁用某个规则？

**A:** 在 `.stylelintrc.cjs` 中修改 `rules` 对象：

```javascript
rules: {
  'selector-class-pattern': null,  // 禁用
  'color-named': 'never',          // 修改规则
}
```

### Q5: 如何为特定文件禁用 stylelint？

**A:** 在文件顶部添加注释：

```scss
/* stylelint-disable */
.legacy-class {
  color: red;
  display: flex;
}
/* stylelint-enable */
```

或禁用特定规则：

```scss
/* stylelint-disable selector-class-pattern */
.MyClass {
  color: red;
}
/* stylelint-enable selector-class-pattern */
```

### Q6: 如何在 CI/CD 中使用 stylelint？

**A:** 在 CI 脚本中添加检查：

```bash
#!/bin/bash
pnpm run stylelint:check
if [ $? -ne 0 ]; then
  echo "Stylelint check failed!"
  exit 1
fi
```

### Q7: 如何更新 stylelint 版本？

**A:** 更新 `package.json` 中的版本号，然后重新安装：

```bash
pnpm install
```

## 相关资源

- [Stylelint 官方文档](https://stylelint.io/)
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [PostCSS SCSS](https://github.com/postcss/postcss-scss)
- [PostCSS Less](https://github.com/shellscape/postcss-less)

## 更新日志

### v1.0.0 (2025-11-17)

- ✅ 初始化 stylelint 配置
- ✅ 添加 SCSS 和 Less 语法支持
- ✅ 配置 CSS 属性排序规则
- ✅ 创建实践指南文档
- ✅ 集成 WebStorm File Watcher

---

**最后更新**: 2025-11-17  
**维护者**: 开发团队
