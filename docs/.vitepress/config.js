const fs = require('fs')
const path = require('path')

const DEFAULT_SORT_VALUE = 9999

function resolvePath(dir) {
  return path.resolve(__dirname, '../../', dir)
}

const excludeList = fs
  .readFileSync('.docignore', 'utf-8')
  .split('\n')
  .map(line => line.trim())
  .filter(line => line)

const rootTree = {items: [], path: ''}

// 匹配文件名（支持带序号的文件名）
function matchFileName(searchName, realName) {
  if (searchName === realName) return true
  
  const cleanedSearchName = searchName.replace(/^\d+\s{1}/, '').trim()
  const cleanedActualName = realName.trim()
  
  return cleanedSearchName === cleanedActualName
}

/**
 * 递归读取目录，构建菜单树结构
 * 处理文件名格式："数字 名称" -> 提取数字作为排序值，显示名称去掉数字前缀
 */
function deepReadDirSync(dirPath, parent, depth = 0) {
  const files = fs.readdirSync(dirPath)
  
  files.forEach(fileName => {
    if (fileName.startsWith('.')) return
    
    // 检查是否在忽略列表中
    if (excludeList.some(item => matchFileName(fileName, item))) return

    const fileFullPath = `${dirPath}/${fileName}`
    const fileExt = path.extname(fileName)
    const fileBaseName = path.basename(fileName, fileExt)
    const stat = fs.lstatSync(fileFullPath)
    
    // 处理显示名称和排序值："1 前端" -> {sort: 1, text: "前端"}
    let displayName = stat.isFile() ? fileBaseName : fileName
    let sortValue = DEFAULT_SORT_VALUE
    
    const parts = displayName.split(' ')
    const firstPart = Number(parts[0])
    if (firstPart) {
      sortValue = firstPart
      displayName = parts.slice(1).join(' ')
    }

    if (stat.isFile()) {
      if (fileExt !== '.md') return

      if (!parent.items) parent.items = []
      parent.items.push({
        text: displayName,
        link: `${parent.path}/${fileBaseName}`,
        sort: sortValue
      })
    } else if (stat.isDirectory()) {
      const currentPath = `${parent.path}/${fileName}`
      const link = fs.existsSync(`${fileFullPath}/README.md`) ? `${currentPath}/README` : null

      if (!parent.items) parent.items = []
      parent.items.push({
        text: displayName,
        link,
        path: currentPath,
        sort: sortValue
      })
      
      deepReadDirSync(fileFullPath, parent.items[parent.items.length - 1], depth + 1)
    }
  })
  
  // 按 sort 字段排序
  if (parent.items?.length) {
    parent.items.sort((a, b) => a.sort - b.sort)
  }
}

deepReadDirSync(resolvePath('docs'), rootTree)

module.exports = {
  base: '/',
  outDir: '../dist',
  assetsDir: 'static',
  title: `彬彬的博客`,
  srcExclude: [
    'frontend/2 前端优化/页面性能优化/old/*.md',
    'frontend/51 面试/*.md',
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      {text: '首页', link: '/'},
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
          {text: '首页', link: '/backend/'},
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
          {text: '《哈利·波特与大红狗》', link: '/works/《哈利·波特与大红狗》.md'},
          {text: '《来客》', link: '/works/《来客》.md'},
          {text: '《推倒ta》', link: '/works/《推倒ta》.md'},
        ]
      },
      {text: 'VitePress', link: 'https://vitepress.dev/zh/reference/site-config'},
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/cengbin/cengbin.github.io'}
    ],
    sidebar: {
      '/backend/': rootTree.items.find(item => item.path === '/backend').items,
      '/frontend/': rootTree.items.find(item => item.path === '/frontend').items,
      '/server/': rootTree.items.find(item => item.path === '/server').items,
      '/works/': rootTree.items.find(item => item.path === '/works').items,
    },
    docFooter: {prev: '上一篇', next: '下一篇'},
    outlineTitle: '目录'
  }
}