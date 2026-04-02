const fs = require('fs')
const path = require('path')

// 解析相对路径到绝对路径
function resolvePath(dir) {
  return path.resolve(__dirname, '../../', dir)
}

/**
 * 读取 .docignore 文件
 * 返回需要忽略的文件名列表
 */
function loadIgnoreList() {
  const ignorePath = resolvePath('.docignore')
  try {
    if (!fs.existsSync(ignorePath)) return []
    return fs.readFileSync(ignorePath, 'utf-8')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line)
  } catch {
    return []
  }
}

const excludeList = loadIgnoreList()

/**
 * 解析文件名，提取排序值和显示名
 * "1 前端" -> { sort: 1, displayName: "前端" }
 * "README" -> { sort: 9999, displayName: "README" }
 */
function parseName(name) {
  const parts = name.split(' ')
  const firstPart = Number(parts[0])
  if (firstPart) {
    return {sort: firstPart, displayName: parts.slice(1).join(' ')}
  }
  return {sort: 9999, displayName: name}
}

/**
 * 匹配文件名（支持带序号的文件名）
 * 用于 .docignore 的匹配
 */
function matchFileName(searchName, realName) {
  if (searchName === realName) return true

  const cleanedSearchName = searchName.replace(/^\d+\s{1}/, '').trim()
  const cleanedActualName = realName.trim()

  return cleanedSearchName === cleanedActualName
}

/**
 * 递归读取目录，构建菜单树
 * - 跳过隐藏文件（. 开头）
 * - 跳过 .docignore 中忽略的文件
 * - 只处理 .md 文件
 * - 按文件名前的数字排序
 */
function deepReadDirSync(dirPath, parent) {
  let files
  try {
    files = fs.readdirSync(dirPath)
  } catch {
    return
  }

  files.forEach(fileName => {
    // 跳过隐藏文件
    if (fileName.startsWith('.')) return
    // 跳过忽略列表中的文件
    if (excludeList.some(item => matchFileName(fileName, item))) return

    const fileFullPath = path.join(dirPath, fileName)
    const fileExt = path.extname(fileName)
    const fileBaseName = path.basename(fileName, fileExt)

    let stat
    try {
      stat = fs.lstatSync(fileFullPath)
    } catch {
      return
    }

    // 解析文件名，获取排序值和显示名
    const {sort: sortValue, displayName} = parseName(stat.isFile() ? fileBaseName : fileName)

    // 处理文件
    if (stat.isFile()) {
      if (fileExt !== '.md') return
      if (!parent.items) parent.items = []
      parent.items.push({text: displayName, link: `${parent.path}/${fileBaseName}`, sort: sortValue})
    } else if (stat.isDirectory()) {
      const currentPath = `${parent.path}/${fileName}`
      // 如果有 README.md，目录可点击
      const link = fs.existsSync(path.join(fileFullPath, 'README.md')) ? `${currentPath}/README` : null
      if (!parent.items) parent.items = []
      parent.items.push({text: displayName, link, path: currentPath, sort: sortValue})
      deepReadDirSync(fileFullPath, parent.items[parent.items.length - 1])
    }
  })

  // 按 sort 字段排序
  if (parent.items?.length) {
    parent.items.sort((a, b) => a.sort - b.sort)
  }
}

// 构建目录树
const rootTree = {items: [], path: ''}
deepReadDirSync(resolvePath('docs'), rootTree)

/**
 * 根据路径查找 sidebar 配置项
 */
function findSidebarItems(targetPath) {
  return rootTree.items.find(item => item.path === targetPath)?.items
}

// =====================================================
// VitePress 配置
// =====================================================

module.exports = {
  base: '/',
  outDir: '../dist',
  assetsDir: 'static',
  title: '彬彬的博客',
  srcExclude: [
    'frontend/2 前端优化/页面性能优化/old/*.md',
    'frontend/51 面试/*.md',
  ],
  themeConfig: {
    search: {provider: 'local'},
    nav: [
      {
        text: '前端',
        items: [
          {text: '首页', link: '/frontend/'},
          {
            text: '笔记',
            items: [
              {text: 'PIXI', link: 'frontend/98 笔记/PIXI 笔记/README'},
              {text: 'Axios', link: 'frontend/98 笔记/Axios 笔记'},
              {text: 'React', link: 'frontend/98 笔记/React 笔记'},
              {text: 'Vue', link: 'frontend/98 笔记/Vue 笔记/README'},
              {text: 'Element UI', link: 'frontend/98 笔记/Element UI 笔记'},
              {text: 'Webpack', link: 'frontend/98 笔记/Webpack 笔记'},
              {text: '代码片段', link: 'frontend/63 代码片段/README'},
            ]
          },
        ]
      },
      {
        text: '后端',
        items: [
          {text: '首页', link: '/backend/'}
        ]
      },
      {
        text: '服务器',
        items: [
          {text: 'Nginx', link: '/server/nginx/README'},
          {text: 'Tomcat', link: '/server/tomcat/README'},
        ]
      },
      {
        text: '作品集',
        items: [
          {text: '首页', link: '/works/'},
          {text: '《哈利·波特与大红狗》', link: '/works/《哈利·波特与大红狗》.md'},
          {text: '《来客》', link: '/works/《来客》.md'},
          {text: '《推倒 ta》', link: '/works/《推倒 ta》.md'},
        ]
      },
      {text: 'VitePress', link: 'https://vitepress.dev/zh/reference/site-config'},
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/cengbin/cengbin.github.io'}
    ],
    sidebar: {
      '/backend/': findSidebarItems('/backend'),
      '/frontend/': findSidebarItems('/frontend'),
      '/server/': findSidebarItems('/server'),
      '/works/': findSidebarItems('/works'),
    },
    docFooter: {prev: '上一篇', next: '下一篇'},
    outlineTitle: '目录'
  }
}
