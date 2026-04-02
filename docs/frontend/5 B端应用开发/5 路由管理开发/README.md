# 路由管理开发

## 一、什么是约定式路由

### 1.1 概念介绍

**约定式路由**（Convention-based Routing）是一种通过文件系统结构自动生成路由配置的开发模式。开发者只需按照约定的规则组织文件目录，框架会自动将文件路径映射为应用路由。

**核心思想：** 约定优于配置（Convention over Configuration）

### 1.2 与配置式路由的对比

| 特性 | 配置式路由 | 约定式路由 |
|------|-----------|-----------|
| 配置方式 | 手动编写路由配置文件 | 基于文件系统自动生成 |
| 开发效率 | 需要维护路由配置 | 创建文件即创建路由 |
| 可维护性 | 路由与组件分离，易混乱 | 文件结构即路由结构，清晰直观 |
| 灵活性 | 高度灵活 | 遵循约定，灵活性相对较低 |
| 学习成本 | 需要学习路由配置 | 学习文件命名规则即可 |

### 1.3 优势

- **减少配置代码**：无需手动维护路由配置文件
- **提高开发效率**：创建文件即创建路由，专注业务开发
- **易于维护**：文件结构清晰，路由关系一目了然
- **团队协作友好**：统一的文件组织规范，降低沟通成本
- **自动代码分割**：基于路由的懒加载优化

### 1.4 适用场景

- 中大型后台管理系统
- 规范化团队开发项目
- 快速原型开发
- 路由结构相对固定的应用

---

## 二、约定式路由规则

### 2.1 基础路由约定

#### 文件命名规则

```
pages/
├── index.tsx          # → /
├── about.tsx          # → /about
├── users.tsx          # → /users
└── contact.tsx        # → /contact
```

- `index.tsx` 映射为根路径 `/`
- 其他文件名直接映射为路径，如 `about.tsx` → `/about`

### 2.2 动态路由

#### 单个动态参数

```
pages/
├── users/
│   └── [id].tsx       # → /users/:id
```

- 使用 `[参数名]` 表示动态路由参数
- 在组件中通过 `useParams()` 获取参数

#### 多个动态参数

```
pages/
├── blog/
│   └── [category]/
│       └── [id].tsx   # → /blog/:category/:id
```

#### 通配符路由

```
pages/
└── [...slug].tsx      # → /* (捕获所有路径)
```

- 使用 `[...参数名]` 表示通配符路由
- 常用于 404 页面或多级路径捕获

### 2.3 嵌套路由

#### 布局文件约定

```
pages/
├── _layout.tsx        # 根布局
├── dashboard/
│   ├── _layout.tsx    # dashboard 布局
│   ├── index.tsx      # → /dashboard
│   ├── analytics.tsx  # → /dashboard/analytics
│   └── settings.tsx   # → /dashboard/settings
```

- `_layout.tsx` 作为布局组件，包含 `<Outlet />` 渲染子路由
- 子路由自动嵌套在布局组件内

### 2.4 特殊文件

- `_layout.tsx`：布局组件（不生成路由）
- `_component.tsx`：公共组件（不生成路由）
- `404.tsx` 或 `[...all].tsx`：404 页面

---

## 三、文件系统结构示例

### 3.1 典型目录结构

```
src/
├── pages/
│   ├── index.tsx                    # → /
│   ├── login.tsx                    # → /login
│   ├── _layout.tsx                  # 主布局
│   ├── dashboard/
│   │   ├── index.tsx               # → /dashboard
│   │   └── analytics.tsx           # → /dashboard/analytics
│   ├── users/
│   │   ├── index.tsx               # → /users
│   │   ├── [id].tsx                # → /users/:id
│   │   └── [id]/
│   │       └── edit.tsx            # → /users/:id/edit
│   ├── products/
│   │   ├── _layout.tsx             # products 布局
│   │   ├── index.tsx               # → /products
│   │   └── [id].tsx                # → /products/:id
│   └── [...all].tsx                 # → 404 页面
├── components/                      # 公共组件
├── hooks/                          # 自定义 Hooks
├── utils/                          # 工具函数
└── main.tsx                        # 入口文件
```

### 3.2 生成的路由配置

上述文件结构会自动生成如下路由配置：

```typescript
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'dashboard/analytics', element: <DashboardAnalytics /> },
      {
        path: 'users',
        children: [
          { index: true, element: <Users /> },
          { path: ':id', element: <UserDetail /> },
          { path: ':id/edit', element: <UserEdit /> }
        ]
      },
      {
        path: 'products',
        element: <ProductsLayout />,
        children: [
          { index: true, element: <Products /> },
          { path: ':id', element: <ProductDetail /> }
        ]
      }
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '*', element: <NotFound /> }
]
```

---

## 四、实现约定式路由

### 4.1 技术选型

在 React 生态中，实现约定式路由的主流方案：

- **vite-plugin-pages**：Vite 插件，支持 React/Vue
- **Remix**：内置文件系统路由
- **Next.js**：App Router（文件系统路由）
- **Umi.js**：企业级 React 框架，内置约定式路由

本文使用 **Vite + vite-plugin-pages + React Router** 实现。

### 4.2 项目初始化

#### 创建 Vite 项目

```bash
npm create vite@latest my-admin -- --template react-ts
cd my-admin
npm install
```

#### 安装依赖

```bash
# 安装路由相关依赖
npm install react-router-dom

# 安装约定式路由插件
npm install -D vite-plugin-pages

# 安装类型支持
npm install -D @types/node
```

### 4.3 配置 Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages',           // 页面文件目录
      extensions: ['tsx', 'jsx'],  // 文件扩展名
      exclude: ['**/components/**', '**/_*.tsx'], // 排除文件
      importMode: 'async',         // 异步导入（懒加载）
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '~': resolve(__dirname, 'src')
    }
  }
})
```

### 4.4 配置 TypeScript

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "~/*": ["src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 4.5 创建路由入口

```typescript
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
```

```typescript
// src/App.tsx
import { useRoutes } from 'react-router-dom'
import routes from '~react-pages' // 自动生成的路由

function App() {
  return useRoutes(routes)
}

export default App
```

### 4.6 类型声明

```typescript
// src/vite-env.d.ts
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />
```

---

## 五、实战案例

### 8.1 后台管理系统路由设计

#### 项目结构

```
src/
├── pages/
│   ├── index.tsx                    # 首页（重定向到 dashboard）
│   ├── login.tsx                    # 登录页
│   ├── _layout.tsx                  # 主布局（包含侧边栏、顶栏）
│   ├── dashboard/
│   │   └── index.tsx               # 仪表盘
│   ├── system/
│   │   ├── user/
│   │   │   ├── index.tsx           # 用户列表
│   │   │   ├── [id].tsx            # 用户详情
│   │   │   └── create.tsx          # 创建用户
│   │   ├── role/
│   │   │   ├── index.tsx           # 角色管理
│   │   │   └── [id].tsx            # 角色详情
│   │   └── menu/
│   │       └── index.tsx           # 菜单管理
│   ├── content/
│   │   ├── article/
│   │   │   ├── index.tsx           # 文章列表
│   │   │   ├── [id].tsx            # 文章详情
│   │   │   └── [id]/
│   │   │       └── edit.tsx        # 编辑文章
│   │   └── category/
│   │       └── index.tsx           # 分类管理
│   └── [...all].tsx                 # 404 页面
├── components/
│   ├── Layout/
│   │   ├── Sidebar.tsx             # 侧边栏
│   │   ├── Header.tsx              # 顶栏
│   │   └── index.tsx
│   └── AuthGuard.tsx               # 权限守卫
├── hooks/
│   ├── useAuth.ts                  # 认证 Hook
│   └── usePermission.ts            # 权限 Hook
├── utils/
│   ├── request.ts                  # 请求封装
│   └── auth.ts                     # 认证工具
└── types/
    └── index.ts                    # 类型定义
```

#### 完整代码实现

##### 1. 主布局组件

```typescript
// src/pages/_layout.tsx
import { Outlet, Navigate } from 'react-router-dom'
import { Sidebar } from '@/components/Layout/Sidebar'
import { Header } from '@/components/Layout/Header'
import { useAuth } from '@/hooks/useAuth'

export default function Layout() {
  const { isAuthenticated } = useAuth()

  // 未登录重定向到登录页
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 侧边栏 */}
      <Sidebar />
      
      {/* 主内容区 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶栏 */}
        <Header />
        
        {/* 页面内容 */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
```

##### 2. 首页（重定向）

```typescript
// src/pages/index.tsx
import { Navigate } from 'react-router-dom'

export default function Index() {
  return <Navigate to="/dashboard" replace />
}
```

##### 3. 登录页

```typescript
// src/pages/login.tsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await login(username, password)
      navigate('/dashboard')
    } catch (error) {
      console.error('登录失败:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="text-3xl font-bold text-center">后台管理系统</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              用户名
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              密码
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? '登录中...' : '登录'}
          </button>
        </form>
      </div>
    </div>
  )
}
```

##### 4. 仪表盘

```typescript
// src/pages/dashboard/index.tsx
import { useEffect, useState } from 'react'

interface Stats {
  users: number
  articles: number
  views: number
  revenue: number
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    users: 0,
    articles: 0,
    views: 0,
    revenue: 0
  })

  useEffect(() => {
    // 模拟获取统计数据
    setStats({
      users: 1234,
      articles: 567,
      views: 89012,
      revenue: 34567
    })
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">仪表盘</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="用户总数" value={stats.users} icon="👥" />
        <StatCard title="文章数量" value={stats.articles} icon="📝" />
        <StatCard title="总浏览量" value={stats.views} icon="👁️" />
        <StatCard title="总收入" value={`¥${stats.revenue}`} icon="💰" />
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string; value: string | number; icon: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  )
}
```

##### 5. 用户列表

```typescript
// src/pages/system/user/index.tsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟获取用户列表
    setTimeout(() => {
      setUsers([
        { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员', status: 'active' },
        { id: 2, name: '李四', email: 'lisi@example.com', role: '编辑', status: 'active' },
        { id: 3, name: '王五', email: 'wangwu@example.com', role: '用户', status: 'inactive' }
      ])
      setLoading(false)
    }, 500)
  }, [])

  if (loading) {
    return <div className="text-center py-10">加载中...</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">用户管理</h1>
        <Link
          to="/system/user/create"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          创建用户
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">姓名</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">邮箱</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">角色</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status === 'active' ? '激活' : '禁用'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Link
                    to={`/system/user/${user.id}`}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    查看
                  </Link>
                  <button className="text-red-600 hover:text-red-900">
                    删除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

##### 6. 用户详情

```typescript
// src/pages/system/user/[id].tsx
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

interface UserDetail {
  id: number
  name: string
  email: string
  role: string
  status: string
  createdAt: string
  lastLogin: string
}

export default function UserDetail() {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<UserDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 模拟获取用户详情
    setTimeout(() => {
      setUser({
        id: Number(id),
        name: '张三',
        email: 'zhangsan@example.com',
        role: '管理员',
        status: '激活',
        createdAt: '2024-01-01',
        lastLogin: '2024-04-02 16:30:00'
      })
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) {
    return <div className="text-center py-10">加载中...</div>
  }

  if (!user) {
    return <div className="text-center py-10">用户不存在</div>
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">用户详情</h1>
        <div className="space-x-4">
          <Link
            to="/system/user"
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
          >
            返回列表
          </Link>
          <Link
            to={`/system/user/${id}/edit`}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            编辑
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <dt className="text-sm font-medium text-gray-500">用户ID</dt>
            <dd className="mt-1 text-sm text-gray-900">{user.id}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">姓名</dt>
            <dd className="mt-1 text-sm text-gray-900">{user.name}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">邮箱</dt>
            <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">角色</dt>
            <dd className="mt-1 text-sm text-gray-900">{user.role}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">状态</dt>
            <dd className="mt-1 text-sm text-gray-900">{user.status}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">创建时间</dt>
            <dd className="mt-1 text-sm text-gray-900">{user.createdAt}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-gray-500">最后登录</dt>
            <dd className="mt-1 text-sm text-gray-900">{user.lastLogin}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
```

##### 7. 404 页面

```typescript
// src/pages/[...all].tsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">页面未找到</p>
        <p className="text-gray-500 mt-2">抱歉，您访问的页面不存在</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}
```

##### 8. 认证 Hook

```typescript
// src/hooks/useAuth.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  token: string | null
  user: { id: number; name: string; role: string } | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      
      login: async (username: string, password: string) => {
        // 模拟登录请求
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const mockToken = 'mock-jwt-token'
        const mockUser = { id: 1, name: username, role: 'admin' }
        
        set({
          token: mockToken,
          user: mockUser,
          isAuthenticated: true
        })
      },
      
      logout: () => {
        set({
          token: null,
          user: null,
          isAuthenticated: false
        })
      }
    }),
    {
      name: 'auth-storage'
    }
  )
)
```

##### 9. 侧边栏组件

```typescript
// src/components/Layout/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom'

interface MenuItem {
  path: string
  label: string
  icon: string
  children?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { path: '/dashboard', label: '仪表盘', icon: '📊' },
  {
    path: '/system',
    label: '系统管理',
    icon: '⚙️',
    children: [
      { path: '/system/user', label: '用户管理', icon: '👥' },
      { path: '/system/role', label: '角色管理', icon: '🔐' },
      { path: '/system/menu', label: '菜单管理', icon: '📋' }
    ]
  },
  {
    path: '/content',
    label: '内容管理',
    icon: '📝',
    children: [
      { path: '/content/article', label: '文章管理', icon: '📄' },
      { path: '/content/category', label: '分类管理', icon: '📁' }
    ]
  }
]

export function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        后台管理系统
      </div>
      
      <nav className="p-4">
        {menuItems.map((item) => (
          <MenuItem key={item.path} item={item} currentPath={location.pathname} />
        ))}
      </nav>
    </aside>
  )
}

function MenuItem({ item, currentPath }: { item: MenuItem; currentPath: string }) {
  const isActive = currentPath === item.path || currentPath.startsWith(item.path + '/')

  if (item.children) {
    return (
      <div className="mb-2">
        <div className="px-4 py-2 text-gray-400 text-sm font-semibold">
          {item.icon} {item.label}
        </div>
        <div className="ml-4">
          {item.children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className={`block px-4 py-2 rounded mb-1 ${
                currentPath.startsWith(child.path)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              {child.icon} {child.label}
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Link
      to={item.path}
      className={`block px-4 py-2 rounded mb-2 ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-300 hover:bg-gray-700'
      }`}
    >
      {item.icon} {item.label}
    </Link>
  )
}
```

##### 10. 顶栏组件

```typescript
// src/components/Layout/Header.tsx
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-semibold text-gray-800">
        欢迎回来，{user?.name}
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">
          🔔 通知
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          退出登录
        </button>
      </div>
    </header>
  )
}
```

#### 运行项目

```bash
# 安装依赖
npm install zustand

# 启动开发服务器
npm run dev
```

访问 `http://localhost:5173`，即可看到完整的后台管理系统。

---

## 总结

通过本文，我们学习了：

1. **约定式路由的概念**：基于文件系统自动生成路由
2. **路由规则**：文件命名、动态路由、嵌套路由等约定
3. **实现方式**：使用 Vite + vite-plugin-pages + React Router
4. **实战案例**：完整的后台管理系统路由设计与实现

约定式路由通过减少配置代码、统一开发规范，大幅提升了开发效率和代码可维护性，特别适合中大型后台管理系统的开发。
