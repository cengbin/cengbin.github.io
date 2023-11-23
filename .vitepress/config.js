const fs = require('fs')
const path = require('path')

function resolvePath(dir) {
  return path.resolve(__dirname, './', dir)
}

let menus = {
  text: '',
  items: [],
  path: '',
}

let exclude = [
  'node_modules',
  'dist',
  '51 面试',
  'ESLint + Prettier',
  'husky + lint-staged + commitlint',
  '其他',
  'html-examples',
  'image',
  'old',
  'test',
  'demo',
  'demo1',
  'demo2',
  'demo3',
  'picture-lazy-loading',
  'img',
  'seajs-module-demo.js',
  'es6-module-demo',
  'render',
  '1 IIFE-module-demo',
  '2 CommonJS（Node.js）',
  '3 AMD（RequireJS）',
  '4 CMD（SeaJS）',
  '5 UMD',
  '6 ES6 Module',
]

function deepReadDirSync(dirPath, parent) {
  console.log('dirPath:', dirPath)
  // 该文件夹下的所有文件名称 (文件夹 + 文件)
  let files = fs.readdirSync(dirPath)
  // console.log("files:", files)
  files.forEach(file => {
    if (exclude.includes(file))
      return;

    if (file.substring(0, 1) === '.')
      return;

    var stat = fs.lstatSync(dirPath + '/' + file)
    // 判断文件是否是文件夹
    if (stat.isDirectory()) {
      let link = null;
      let readmePath = dirPath + '/' + file + '/' + 'README.md';
      // 判断路径是否存在
      let bo = fs.existsSync(readmePath)
      if (bo) {
        link = '/frontend/' + parent.path + `/${file}/README`
      }

      let item = {
        text: file,
        path: parent.path + `/${file}`,
        link
      }

      if (!parent.items) {
        parent.items = []
      }
      parent.items.push(item)

      // console.log('item:', item)

      deepReadDirSync(dirPath + '/' + file, item)
    }
  })
}

deepReadDirSync(resolvePath('../frontend'), menus)

// 排序
let sidebar = menus.items;
let n = sidebar.length;
for (let i = 1; i <= n - 1; i++) {
  for (let j = 1; j <= n - i; j++) {
    let prevItem = sidebar[j - 1]
    let curItem = sidebar[j]
    let prevValue = Number(prevItem.text.split(" ")[0])
    let curValue = Number(curItem.text.split(" ")[0])
    if (!isNaN(prevValue) && !isNaN(curValue)) {
      if (prevValue > curValue) {
        let temp = sidebar[j - 1];
        sidebar[j - 1] = sidebar[j]
        sidebar[j] = temp;
      }
    }
  }
}

module.exports = {
  base: '/web-blog/',
  outDir: 'dist',
  assetsDir: 'assets',
  title: '我的知识库',
  srcExclude: [
    'frontend/2 前端优化/页面性能优化/1 基础篇/old/*.md',
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
          {text: '前端工程化', link: '/frontend/1 前端工程化/README'},
          {text: '前端优化', link: '/frontend/2 前端优化/README'},
        ]
      },
      {
        text: '后端',
        items: [
          {text: '微服务', link: 'https://www.baidu.com'},
        ]
      },
      {
        text: '数据库',
        items: [
          {text: '微服务', link: 'https://www.baidu.com'},
        ]
      },
      {
        text: '服务器',
        items: [
          {text: '微服务', link: 'https://www.baidu.com'},
        ]
      },
      {
        text: '开发环境',
        items: [
          {text: 'Windows', link: 'https://www.google.com'},
          {text: 'Mac OS', link: 'https://www.google.com'},
        ]
      },
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/cengbin/web-blog'}
    ],
    sidebar: {
      '/frontend/': sidebar,
      '/backend/': [],
      '/database/': [],
    }
  }
};