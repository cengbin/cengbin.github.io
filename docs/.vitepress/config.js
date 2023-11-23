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
  let files = fs.readdirSync(dirPath) // 该文件夹下的所有文件名称 (文件夹 + 文件)
  // console.log("files:", files)
  files.forEach(file => {
    if (exclude.includes(file))
      return;

    if (file.substring(0, 1) !== '.') {
      var stat = fs.lstatSync(dirPath + '/' + file)
      if (stat.isDirectory()) {
        let item = {
          text: file,
          path: parent.path + `/${file}`
        }

        let readmePath = dirPath + '/' + file + '/' + 'README.md';
        let bo = fs.existsSync(readmePath)
        if (bo) {
          item.link = parent.path + `/${file}/README`
        }
        // console.log('item:', item)

        if (!parent.items) {
          parent.items = []
        }
        parent.items.push(item)

        deepReadDirSync(dirPath + '/' + file, item)
      }
    }
  })
}

deepReadDirSync(resolvePath('../'), menus)

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

sidebar.forEach(item=>{
  item.text = item.text.split(" ").slice(1).join(" ");
})

// console.log('menus:', menus)

module.exports = {
  base: '/web-blog',
  outDir: '../dist',
  title: '前端开发技术文档',
  themeConfig: {
    sidebar: menus.items
  }
};