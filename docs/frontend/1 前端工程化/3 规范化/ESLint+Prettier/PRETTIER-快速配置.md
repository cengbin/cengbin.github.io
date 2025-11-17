# Prettier 快速配置（3 分钟搞定）

## ⚡ 快速步骤

### 1️⃣ 安装依赖（30 秒）

```bash
npm install
```

### 2️⃣ 配置 WebStorm（2 分钟）

#### 打开设置
`File` → `Settings` → `Languages & Frameworks` → `JavaScript` → `Prettier`

#### 配置以下选项：

```
✅ Automatic Prettier configuration
✅ Run on save
✅ On 'Reformat Code' action

Prettier package: 
  点击 [...] 选择 → 项目路径/node_modules/prettier

Run for files:
  {**/*,*}.{js,ts,jsx,tsx,json,css,scss,md}
```

#### 点击 `OK` 保存

### 3️⃣ 验证（30 秒）

打开任意 `.tsx` 文件，写入：
```typescript
const test={a:1,b:2}
```

按 `Ctrl + S` 保存，应该自动格式化为：
```typescript
const test = { a: 1, b: 2 };
```

---

## 🎯 完成！

现在你的 WebStorm 已经配置好 Prettier，每次保存文件都会自动格式化代码。

---

## 📌 常用命令

```bash
# 格式化所有代码
npm run format

# 检查代码格式
npm run format:check
```

---

## 🔗 详细文档

查看 [WebStorm-Prettier配置指南.md](./WebStorm-Prettier配置指南.md) 了解更多。
