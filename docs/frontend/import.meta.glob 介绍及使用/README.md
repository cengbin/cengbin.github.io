# import.meta.glob 介绍及使用

## 概述

`import.meta.glob` 是 Vite 提供的一个特殊功能，用于在构建时动态导入多个文件模块。它允许你根据模式匹配（glob patterns）来批量导入文件，在构建阶段会被自动处理。

## 基本语法

```javascript
const modules = import.meta.glob('./dir/*.js')
```

## 核心特性

### 1. 基础使用 - 懒加载模块

默认情况下，`import.meta.glob` 返回一个对象，其键是文件路径，值是对应的动态导入函数：

```javascript
const modules = import.meta.glob('./dir/*.js')

// 返回结果示例：
// {
//   './dir/foo.js': () => import('./dir/foo.js'),
//   './dir/bar.js': () => import('./dir/bar.js')
// }

// 使用方式：按需加载
modules['./dir/foo.js']().then(module => {
  console.log(module) // 加载后的模块内容
})
```

**优点**：支持代码分割，只在需要时加载模块，减小初始包体积。

---

### 2. 同步导入 - eager: true

使用 `eager: true` 选项可以在构建时直接导入所有匹配的模块：

```javascript
const modules = import.meta.glob('./dir/*.js', { eager: true })

// 返回结果示例：
// {
//   './dir/foo.js': { default: fooModule, namedExport: value },
//   './dir/bar.js': { default: barModule, ... }
// }

// 直接使用模块内容
const fooDefault = modules['./dir/foo.js'].default
const namedExport = modules['./dir/foo.js'].namedExport
```

**适用场景**：需要在应用启动时就加载所有模块的场景。

---

### 3. 只导入特定导出 - import 选项

#### 3.1 只导入默认导出

```javascript
const modules = import.meta.glob('./dir/*.js', {
  import: 'default',
  eager: true
})

// 返回结果示例：
// {
//   './dir/foo.js': fooDefaultExport,
//   './dir/bar.js': barDefaultExport
// }
```

#### 3.2 导入特定具名导出

```javascript
const modules = import.meta.glob('./dir/*.js', {
  import: 'useStore',
  eager: true
})

// 返回结果示例：
// {
//   './dir/foo.js': fooUseStoreFunction,
//   './dir/bar.js': barUseStoreFunction
// }
```

#### 3.3 导入所有具名导出

```javascript
const modules = import.meta.glob('./dir/*.js', {
  import: '*',
  eager: true
})

// 返回结果示例：
// {
//   './dir/foo.js': { namedExport1: value1, namedExport2: value2 },
//   './dir/bar.js': { namedExport3: value3, namedExport4: value4 }
// }
```

---

### 4. 查询参数 - query 选项

通过 `query` 选项可以指定导入时的查询参数，用于导入原始内容、URL 等：

#### 4.1 导入原始文件内容

```javascript
const rawModules = import.meta.glob('./dir/*.txt', {
  query: '?raw',
  eager: true
})

// 每个模块的内容都是字符串形式
const content = rawModules['./dir/readme.txt']
```

#### 4.2 导入为 URL

```javascript
const urlModules = import.meta.glob('./dir/**/*.png', {
  query: '?url',
  eager: true
})

// 获取图片的 URL
const imageUrl = urlModules['./dir/logo.png']
```

#### 4.3 自定义查询

```javascript
const modules = import.meta.glob('./dir/**/*.scss', {
  query: '?inline',
  eager: true
})
```

---

### 5. 排除文件 - exclude 选项

使用 `exclude` 选项可以排除某些不需要的文件：

```javascript
const modules = import.meta.glob('./dir/**/*.js', {
  exclude: [
    './dir/ignored.js',
    './dir/test/*.test.js',
    './dir/**/*.spec.js'
  ],
  eager: true
})
```

---

### 6. 组合选项

可以同时使用多个选项来实现复杂的需求：

```javascript
const modules = import.meta.glob('./components/**/*.vue', {
  eager: true,
  import: 'default',
  exclude: ['./components/**/*.stories.vue']
})
```

---

## 实际应用场景

### 场景 1：自动注册全局组件

**目录结构：**
```
src/
├── components/
│   ├── Button.vue
│   ├── Input.vue
│   └── Modal.vue
└── main.js
```

**实现代码：**

```javascript
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 自动导入并注册所有组件
const componentModules = import.meta.glob('./components/*.vue', { 
  eager: true,
  import: 'default'
})

Object.entries(componentModules).forEach(([path, component]) => {
  // 从路径提取组件名：./components/Button.vue -> Button
  const componentName = path
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')
  
  // 转换为 PascalCase
  const pascalName = componentName.replace(/(^|_)(\w)/g, (_, __, c) => 
    c.toUpperCase()
  )
  
  app.component(pascalName, component)
})

app.mount('#app')
```

---

### 场景 2：动态路由配置

**目录结构：**
```
src/
├── pages/
│   ├── Home.vue
│   ├── About.vue
│   └── User/
│       ├── Profile.vue
│       └── Settings.vue
└── router/
    └── index.js
```

**实现代码：**

```javascript
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 自动导入所有页面组件
const pageModules = import.meta.glob('../pages/**/*.vue', { 
  eager: true,
  import: 'default'
})

// 将页面模块转换为路由配置
const routes = Object.entries(pageModules).map(([path, component]) => {
  // 从路径生成路由路径
  const routePath = path
    .replace(/^\.\.\/pages/, '')
    .replace(/\.vue$/, '')
    .toLowerCase()
  
  return {
    path: routePath === '/index' ? '/' : routePath,
    name: routePath.split('/').pop().toUpperCase(),
    component
  }
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

---

### 场景 3：批量导入工具函数

**目录结构：**
```
src/
├── utils/
│   ├── date.ts
│   ├── string.ts
│   └── validate.ts
└── utils-index.js
```

```typescript
// src/utils/date.ts
export function formatDate(date) { /* ... */ }
export function parseDate(str) { /* ... */ }

// src/utils/string.ts
export function capitalize(str) { /* ... */ }
export function truncate(str, length) { /* ... */ }

// src/utils/validate.ts
export function isEmail(str) { /* ... */ }
export function isPhone(str) { /* ... */ }
```

**实现代码：**

```javascript
// src/utils-index.js
const utilsModules = import.meta.glob('./utils/*.ts', { 
  eager: true,
  import: '*'
})

// 合并所有导出
export const utils = {}

Object.entries(utilsModules).forEach(([path, exports]) => {
  Object.assign(utils, exports)
})

// 使用方式
import { utils } from './utils-index'
utils.formatDate(new Date())
utils.isEmail('test@example.com')
```

---

### 场景 4：多语言文件加载

**目录结构：**
```
src/
├── locales/
│   ├── zh-CN.json
│   ├── en-US.json
│   └── ja-JP.json
└── i18n.js
```

**实现代码：**

```javascript
// src/i18n.js
import { createI18n } from 'vue-i18n'

// 导入所有语言文件
const localeModules = import.meta.glob('./locales/*.json', { 
  eager: true,
  import: 'default'
})

// 构建语言包对象
const messages = {}

Object.entries(localeModules).forEach(([path, content]) => {
  // 从路径提取语言标识：./locales/zh-CN.json -> zh-CN
  const locale = path
    .split('/')
    .pop()
    .replace('.json', '')
  
  messages[locale] = content
})

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'en-US',
  messages
})

export default i18n
```

---

### 场景 5：Markdown 博客文章处理

**目录结构：**
```
src/
├── posts/
│   ├── hello-world.md
│   └── vite-tutorial.md
└── posts-index.js
```

**实现代码：**

```javascript
// src/posts-index.js
import { marked } from 'marked'

// 导入所有 Markdown 文件的原始内容
const postModules = import.meta.glob('./posts/*.md', { 
  query: '?raw',
  eager: true
})

// 解析 Markdown 文件
export const posts = Object.entries(postModules).map(([path, module]) => {
  const fileName = path.split('/').pop().replace('.md', '')
  const content = module.default || module
  
  // 提取 frontmatter（如果有的话）
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  
  let frontmatter = {}
  let markdownContent = content
  
  if (frontmatterMatch) {
    // 解析 YAML frontmatter
    const yaml = frontmatterMatch[1]
    markdownContent = frontmatterMatch[2]
    
    // 简单的 YAML 解析（生产环境建议使用 js-yaml 库）
    frontmatter = yaml.split('\n').reduce((acc, line) => {
      const [key, value] = line.split(': ')
      if (key && value) {
        acc[key.trim()] = value.trim()
      }
      return acc
    }, {})
  }
  
  return {
    slug: fileName,
    title: frontmatter.title || fileName,
    date: frontmatter.date,
    tags: frontmatter.tags?.split(',').map(t => t.trim()) || [],
    html: marked(markdownContent),
    rawContent: markdownContent
  }
})
```

---

### 场景 6：SVG 图标集合

**目录结构：**
```
src/
├── icons/
│   ├── home.svg
│   ├── user.svg
│   └── settings.svg
└── icons-index.js
```

**实现代码：**

```javascript
// src/icons-index.js
const iconModules = import.meta.glob('./icons/*.svg', { 
  query: '?raw',
  eager: true
})

export const icons = {}

Object.entries(iconModules).forEach(([path, module]) => {
  // 从路径提取图标名：./icons/home.svg -> home
  const iconName = path
    .split('/')
    .pop()
    .replace('.svg', '')
  
  icons[iconName] = module.default || module
})

// Vue 组件示例
// <template>
//   <span v-html="icons['home']"></span>
// </template>
// 
// <script setup>
// import { icons } from './icons-index'
// </script>
```

---

## Glob 模式匹配规则

`import.meta.glob` 支持标准的 glob 模式：

| 模式 | 说明 | 示例 |
|------|------|------|
| `*` | 匹配单个路径段中的任意字符 | `*.js` 匹配所有 JS 文件 |
| `**` | 递归匹配任意深度的路径 | `**/*.vue` 匹配所有子目录中的 Vue 文件 |
| `?` | 匹配单个字符 | `file?.js` 匹配 file1.js, fileA.js |
| `[abc]` | 匹配括号内的任意一个字符 | `*.[jt]s` 匹配 .js 或 .ts 文件 |
| `[!abc]` | 不匹配括号内的任意字符 | `*[!test].js` |

### 常用模式示例

```javascript
// 匹配当前目录下所有 .js 文件
import.meta.glob('./*.js')

// 递归匹配所有子目录中的 .vue 文件
import.meta.glob('./**/*.vue')

// 匹配特定前缀的文件
import.meta.glob('./components/Base*.vue')

// 匹配多种扩展名
import.meta.glob('./**/*.{vue,js,ts}')

// 排除测试文件
import.meta.glob('./src/**/*.ts', {
  exclude: ['./src/**/*.test.ts', './src/**/*.spec.ts']
})
```

---

## TypeScript 类型支持

在使用 TypeScript 时，需要确保类型定义正确。Vite 提供了内置的类型定义：

```typescript
/// <reference types="vite/client" />
```

通常在 `vite-env.d.ts` 文件中已经包含此引用。

### 类型示例

```typescript
// 懒加载模块类型
const modules = import.meta.glob('./dir/*.ts')
// 类型：Record<string, () => Promise<unknown>>

// 同步导入类型
const modules = import.meta.glob('./dir/*.ts', { eager: true })
// 类型：Record<string, unknown>

// 指定导入类型
const modules = import.meta.glob<ModuleType>('./dir/*.ts', { 
  eager: true,
  import: 'default'
})
// 类型：Record<string, ModuleType>
```

### 自定义类型声明

如果需要更精确的类型控制，可以添加自定义声明：

```typescript
// types/vite-glob.d.ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.md' {
  const content: string
  export default content
}
```

---

## 性能优化建议

### 1. 选择合适的加载策略

- **懒加载**（默认）：适合大型应用，按需加载模块
- **同步加载**（`eager: true`）：适合小型应用或必须预加载的模块

### 2. 精确匹配范围

```javascript
// ❌ 不推荐：匹配过多文件
import.meta.glob('./**/*')

// ✅ 推荐：明确指定范围和类型
import.meta.glob('./components/**/*.vue')
```

### 3. 使用 exclude 排除不必要的文件

```javascript
import.meta.glob('./src/**/*.ts', {
  exclude: [
    './src/**/*.test.ts',
    './src/**/*.d.ts',
    './src/types/**'
  ]
})
```

### 4. 代码分割优化

```javascript
// 利用动态导入实现代码分割
const modules = import.meta.glob('./pages/*.vue')

// 在路由中按需加载
const routes = [
  {
    path: '/home',
    component: () => modules['./pages/Home.vue']()
  }
]
```

---

## 常见问题

### Q1: 为什么不能使用动态路径？

```javascript
// ❌ 错误：完全动态的路径
const path = getUserInput()
import.meta.glob(path)

// ✅ 正确：静态路径 + 通配符
import.meta.glob('./pages/*.vue')
```

**原因**：`import.meta.glob` 在构建时处理，Vite 需要知道确切的文件列表。

### Q2: 如何处理导入错误？

```javascript
const modules = import.meta.glob('./dir/*.js')

try {
  const module = await modules['./dir/not-exist.js']()
} catch (error) {
  console.error('模块加载失败:', error)
}
```

### Q3: 可以在条件语句中使用吗？

```javascript
// ✅ 可以，但 glob 模式本身必须是静态的
if (condition) {
  const modules = import.meta.glob('./dir/a/*.js', { eager: true })
} else {
  const modules = import.meta.glob('./dir/b/*.js', { eager: true })
}
```

### Q4: 如何处理循环依赖？

避免在模块之间创建循环依赖，可以通过：
- 提取公共依赖到独立模块
- 使用依赖注入模式
- 重新设计模块结构

---

## 与其他工具对比

| 特性 | import.meta.glob | require.context (Webpack) | 手动 import |
|------|-----------------|--------------------------|-------------|
| 打包工具 | Vite | Webpack | 通用 |
| 构建时处理 | ✅ | ✅ | ❌ |
| 热更新支持 | ✅ | ✅ | ❌ |
| TypeScript 支持 | ✅ | ⚠️ | ✅ |
| 语法简洁性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

---

## 最佳实践总结

1. **明确目的**：先确定需要同步加载还是异步加载
2. **精确匹配**：使用最具体的 glob 模式，避免导入不必要的文件
3. **合理组织**：按功能或类型组织文件，便于批量导入
4. **类型安全**：在 TypeScript 项目中提供完整的类型定义
5. **性能优先**：对于大型模块，优先考虑懒加载
6. **错误处理**：为动态导入添加适当的错误处理逻辑

---

## 示例项目结构

```
project/
├── src/
│   ├── components/         # 自动注册组件
│   │   ├── common/
│   │   │   ├── Button.vue
│   │   │   └── Input.vue
│   │   └── layout/
│   │       ├── Header.vue
│   │       └── Footer.vue
│   ├── views/             # 动态路由页面
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   └── User/
│   │       ├── List.vue
│   │       └── Detail.vue
│   ├── stores/            # Pinia store
│   │   ├── user.ts
│   │   └── app.ts
│   ├── utils/             # 工具函数
│   │   ├── format.ts
│   │   └── validate.ts
│   ├── locales/           # 国际化
│   │   ├── zh-CN.json
│   │   └── en-US.json
│   ├── styles/            # 样式文件
│   │   └── variables/
│   │       ├── colors.scss
│   │       └── spacing.scss
│   └── main.ts            # 入口文件
├── types/
│   └── vite-glob.d.ts     # 类型声明
├── vite.config.ts         # Vite 配置
└── tsconfig.json          # TS 配置
```

---

## 参考资源

- [Vite 官方文档 - import.meta.glob](https://vitejs.dev/guide/features.html#glob-import)
- [MDN - import.meta](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import.meta)
- [Glob 模式规范](https://git-scm.com/docs/gitignore#_pattern_format)

---

**最后更新**: 2026-03-16