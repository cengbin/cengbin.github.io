# Git 推送项目到 GitHub 流程总结

## 项目背景
- 项目名称：art-appreciation（艺术鉴赏项目）
- 本地已有 Git 仓库，但未关联远程 GitHub 仓库
- 目标：将本地代码推送到 GitHub

---

## 完整操作流程

### 步骤 1：检查远程仓库状态

```bash
git remote -v
```

**命令说明**：
- `git remote`：管理远程仓库
- `-v`（verbose）：显示详细信息，包括远程仓库的 URL

**作用**：查看当前是否已关联远程仓库

**预期结果**：
- 如果输出为空 → 未关联远程仓库，需要继续后续步骤
- 如果显示 URL → 已关联，可跳过步骤 3

---

### 步骤 2：在 GitHub 上创建仓库

**操作**：
1. 访问 https://github.com/new
2. 填写仓库信息：
   - Repository name: `art-appreciation`
   - Description: `艺术鉴赏项目`
   - 选择 Public 或 Private
3. ⚠️ **重要**：不要勾选 "Add a README file"（避免与本地仓库冲突）
4. 点击 "Create repository"

---

### 步骤 3：关联远程仓库

```bash
git remote add origin https://github.com/cengbin/art-appreciation.git
```

**命令说明**：
- `git remote add`：添加新的远程仓库
- `origin`：远程仓库的默认名称（约定俗成的命名）
- `<URL>`：GitHub 仓库的 HTTPS 地址

**作用**：建立本地仓库与 GitHub 仓库的连接关系

**注意**：将 URL 中的 `cengbin` 替换为您的 GitHub 用户名

---

### 步骤 4：统一分支名称

```bash
git branch -M main
```

**命令说明**：
- `git branch`：分支管理命令
- `-M`：强制重命名分支（Move/rename a branch, even if target exists）
- `main`：新的分支名称

**作用**：将当前分支重命名为 `main`

**背景**：
- 旧版 Git 默认分支名为 `master`
- GitHub 现在推荐使用 `main` 作为默认分支名
- 此步骤确保本地分支名与 GitHub 默认分支名一致

---

### 步骤 5：推送代码到 GitHub

```bash
git push -u origin main
```

**命令说明**：
- `git push`：推送代码到远程仓库
- `-u`（或 `--set-upstream`）：设置上游分支，建立本地与远程分支的跟踪关系
- `origin`：远程仓库名称
- `main`：要推送的本地分支名称

**作用**：
1. 将本地所有提交推送到 GitHub
2. 在远程仓库创建 `main` 分支
3. 建立本地 `main` 分支与远程 `origin/main` 的跟踪关系

**重要**：
- 首次推送必须使用 `-u` 参数
- 之后可以直接使用 `git push` 而无需指定远程和分支

---

### 步骤 6：验证推送结果

```bash
git status
```

**命令说明**：
- `git status`：查看工作区和暂存区的状态

**作用**：检查当前仓库状态，确认代码已成功推送

**预期输出**：
```
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

**说明**：
- `On branch main`：当前在 main 分支
- `up to date with 'origin/main'`：本地与远程同步
- `working tree clean`：没有未提交的修改

---

## 后续开发流程

完成首次推送后，日常开发的 Git 工作流程：

```bash
# 1. 修改代码后，查看修改状态
git status

# 2. 将修改添加到暂存区
git add .                    # 添加所有修改
# 或
git add <文件名>              # 添加指定文件

# 3. 提交到本地仓库
git commit -m "提交说明"

# 4. 推送到 GitHub（无需指定远程和分支）
git push
```

---

## 常用命令速查

| 命令 | 作用 |
|------|------|
| `git status` | 查看仓库状态 |
| `git remote -v` | 查看远程仓库信息 |
| `git add .` | 添加所有修改到暂存区 |
| `git commit -m "message"` | 提交到本地仓库 |
| `git push` | 推送到远程仓库 |
| `git pull` | 从远程仓库拉取更新 |
| `git log` | 查看提交历史 |
| `git branch` | 查看本地分支 |

---

## 常见问题

### Q1: 推送时提示 "Repository not found"
**原因**：GitHub 上还未创建仓库  
**解决**：先在 GitHub 网站上创建仓库（步骤 2）

### Q2: 推送时提示 "failed to push some refs"
**原因**：远程仓库有本地没有的提交  
**解决**：先执行 `git pull origin main --rebase`，再推送

### Q3: 如何修改远程仓库地址？
```bash
git remote set-url origin <新的URL>
```

### Q4: 如何删除远程仓库关联？
```bash
git remote remove origin
```

---

## 总结

### 核心要点
1. ✅ 远程仓库必须先在 GitHub 上创建
2. ✅ 使用 `git remote add` 建立本地与远程的连接
3. ✅ 使用 `git branch -M main` 统一分支名称
4. ✅ 首次推送使用 `-u` 参数建立跟踪关系
5. ✅ 使用 `git status` 随时检查仓库状态

### 一次性推送命令（仓库已创建）
```bash
git remote add origin https://github.com/用户名/仓库名.git
git branch -M main
git push -u origin main
```

---

**文档创建时间**：2026-04-03  
**项目**：art-appreciation  
**GitHub 仓库**：https://github.com/cengbin/art-appreciation
