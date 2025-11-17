# WebStorm Prettier 配置指南

## 📦 第一步：安装依赖

在项目根目录执行：

```bash
npm install
# 或
pnpm install
```

这会安装 `prettier@^3.4.2` 到 devDependencies。

---

## ⚙️ 第二步：配置 WebStorm

### 1. 启用 Prettier

**路径：** `File` → `Settings` → `Languages & Frameworks` → `JavaScript` → `Prettier`

**配置项：**
- ✅ 勾选 `Automatic Prettier configuration`（自动检测 Prettier 配置）
- **Prettier package:** 选择项目中的 `node_modules/prettier`
  - 点击右侧的 `...` 按钮，选择：`项目路径/node_modules/prettier`
- ✅ 勾选 `Run on save`（保存时自动格式化）
- ✅ 勾选 `On 'Reformat Code' action`（使用 Reformat Code 时应用 Prettier）

![WebStorm Prettier 设置](https://i.imgur.com/prettier-settings.png)

### 2. 设置文件类型

在同一设置页面：

**Run for files:** 设置为：
```
{**/*,*}.{js,ts,jsx,tsx,json,css,scss,md}
```

这样 Prettier 会处理所有支持的文件类型。

### 3. 配置快捷键（可选）

**路径：** `File` → `Settings` → `Keymap`

搜索 `Reformat Code with Prettier`，设置你喜欢的快捷键，例如：
- Windows/Linux: `Ctrl + Alt + Shift + P`
- macOS: `Cmd + Option + Shift + P`

---

## 🎯 第三步：验证配置

### 方法一：保存文件自动格式化

1. 打开任意 `.tsx` 或 `.ts` 文件
2. 故意写一些格式不规范的代码，例如：
   ```typescript
   const obj={name:"test",age:18}
   ```
3. 按 `Ctrl + S` 保存
4. 代码应该自动格式化为：
   ```typescript
   const obj = { name: 'test', age: 18 };
   ```

### 方法二：手动格式化

1. 打开任意文件
2. 按 `Ctrl + Alt + L`（默认格式化快捷键）
3. 或右键 → `Reformat Code with Prettier`

### 方法三：命令行验证

```bash
# 检查代码格式
npm run format:check

# 格式化所有代码
npm run format
```

---

## 📝 Prettier 配置说明

项目的 Prettier 配置文件：`.prettierrc.js`

```javascript
module.exports = {
  printWidth: 120,        // 每行最大 120 字符
  tabWidth: 2,            // 缩进 2 个空格
  useTabs: false,         // 使用空格而非 Tab
  semi: true,             // 语句末尾加分号
  singleQuote: true,      // 使用单引号
  trailingComma: 'es5',   // 对象/数组末尾加逗号
  bracketSpacing: true,   // 对象大括号内加空格 { foo: bar }
  arrowParens: 'avoid',   // 箭头函数单参数省略括号
  endOfLine: 'lf',        // 使用 LF 换行符
};
```

---

## 🚫 忽略文件

项目的 `.prettierignore` 文件已配置，以下文件/目录会被忽略：

- `node_modules`
- `dist`、`build` 等构建产物
- `*.min.js`、`*.min.css` 等压缩文件
- `.idea`、`.vscode` 等编辑器配置

---

## 💡 常用命令

```bash
# 格式化所有代码
npm run format

# 检查代码格式（不修改文件）
npm run format:check

# 格式化指定文件
npx prettier --write src/pages/system/user/index.tsx

# 检查指定文件
npx prettier --check src/pages/system/user/index.tsx
```

---

## ❓ 常见问题

### Q1: WebStorm 保存时没有自动格式化？

**A:** 检查以下配置：
1. 确认已勾选 `Run on save`
2. 确认文件类型在 `Run for files` 范围内
3. 重启 WebStorm

### Q2: 格式化后的代码和 Prettier 规则不一致？

**A:** 
1. 确认 WebStorm 使用的是项目中的 Prettier：`node_modules/prettier`
2. 确认 `.prettierrc.js` 配置文件存在
3. 清除 WebStorm 缓存：`File` → `Invalidate Caches` → `Invalidate and Restart`

### Q3: 如何禁用某些文件的格式化？

**A:** 在 `.prettierignore` 中添加文件路径或模式：
```
# 忽略特定文件
src/legacy/old-code.js

# 忽略整个目录
src/vendor/
```

### Q4: 格式化和 ESLint 冲突怎么办？

**A:** 
1. 安装 `eslint-config-prettier`：
   ```bash
   npm install -D eslint-config-prettier
   ```
2. 在 ESLint 配置中添加：
   ```json
   {
     "extends": ["prettier"]
   }
   ```

### Q5: 如何在代码中临时禁用 Prettier？

**A:** 使用注释：
```javascript
// prettier-ignore
const uglyCode={a:1,b:2}

/* prettier-ignore */
function foo() {
  return "不会被格式化"
}
```

---

## 🔧 团队协作建议

### 1. Git Hooks（推荐）

安装 `husky` 和 `lint-staged`，在提交前自动格式化：

```bash
npm install -D husky lint-staged
npx husky install
```

在 `package.json` 中添加：
```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx,json,css,scss,md}": [
      "prettier --write"
    ]
  }
}
```

### 2. CI/CD 检查

在 CI 流程中添加格式检查：
```yaml
- name: Check code format
  run: npm run format:check
```

### 3. 编辑器配置统一

建议团队成员都使用相同的 Prettier 配置，避免格式不一致。

---

## 📚 参考资料

- [Prettier 官方文档](https://prettier.io/)
- [WebStorm Prettier 集成](https://www.jetbrains.com/help/webstorm/prettier.html)
- [Prettier 配置选项](https://prettier.io/docs/en/options.html)

---

**最后更新：** 2025-11-13  
**维护者：** 曾伟斌
