const fs = require('fs')
const path = require('path')
const {bubble_sort} = require('./util')

function resolvePath(dir) {
  return path.resolve(__dirname, './', dir)
}

const content = fs.readFileSync('.docignore', 'utf-8');
const lines = content.split('\n');
const exclude = []
for (let line = 0; line < lines.length; line++) {
  const text = lines[line]
  if (text)
    exclude.push(text)
}

let rootTree = {text: '', items: [], path: '',}

function deepReadDirSync(dirPath, parent) {
  // console.log('dirPath:', dirPath)
  // 该文件夹下的所有文件名称 (文件夹 + 文件)
  let files = fs.readdirSync(dirPath)
  files.forEach(file => {
    if (file === 'README.md' || file === 'index.md') return;
    if (exclude.includes(file)) return;
    if (file.substring(0, 1) === '.') return;

    let filePath = `${dirPath}/${file}`
    let stat = fs.lstatSync(filePath)
    // console.log(file, " isFile=", stat.isFile(), " isDirectory=", stat.isDirectory())

    if (stat.isFile()) { // 是文件
      let ext = path.extname(file)
      let basename = path.basename(file, ext);
      // console.log("file=", file, " basename=", basename, " ext=", ext)

      if (ext === '.md') {
        let item = {
          text: basename,
          link: `${parent.path}/${basename}`,
        }
        if (!parent.items) parent.items = []
        parent.items.push(item)
      }
    } else if (stat.isDirectory()) { // 是文件夹
      let currentPath = `${parent.path}/${file}`
      let link = fs.existsSync(`${filePath}/README.md`) ? `${currentPath}/README` : null
      let item = {
        text: file,
        link,
        path: currentPath
      }
      // console.log('item:', item)

      if (!parent.items) parent.items = []
      parent.items.push(item)

      deepReadDirSync(filePath, item)
    }
  })
}

deepReadDirSync(resolvePath('../'), rootTree)

console.log(rootTree)

rootTree.items.forEach(item => {
  if (!item.items)
    return;

  bubble_sort(item.items)

  item.items.forEach(item => {
    let arr = item.text.split(" ")
    if (arr.length && Number(arr[0]))
      item.text = arr.slice(1).join(" ")
  })
})

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
          {text: '技术栈汇总', link: '/frontend/54 技术栈汇总.md'},
          {
            text: '笔记',
            items: [
              {text: 'Axios', link: 'frontend/98 笔记/Axios 笔记'},
              {text: 'React', link: 'frontend/98 笔记/React 笔记'},
              {text: 'Vue', link: 'frontend/98 笔记/Vue 笔记/README'},
              {text: 'Element UI', link: 'frontend/98 笔记/Element UI 笔记'},
              {text: 'Webpack', link: 'frontend/98 笔记/Webpack 笔记'},
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