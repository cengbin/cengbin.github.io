const fs = require('fs')
const path = require('path')
const { bubble_sort } = require('./util')

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

let rootTree = { text: '', items: [], path: '', }

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

rootTree.items.forEach(item => {
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
	title: `彬彬'技术博客`,
  srcExclude: [
    'frontend/2 前端优化/页面性能优化/old/*.md',
    'frontend/51 面试/*.md',
  ],
  themeConfig: {
		search: {
			provider: 'local'
		},
		nav: [
			{ text: '首页', link: '/' },
			{
				text: '前端',
				items: [
					{ text: '前端工程化', link: '/frontend/1 前端工程化/README' },
					{ text: '前端优化', link: '/frontend/2 前端优化/README' },
				]
			},
			{
				text: '服务器',
				items: [
					{ text: 'Nginx', link: '/server/nginx/README' },
					{ text: 'Tomcat', link: '/server/tomcat/README' },
				]
			},
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/cengbin/cengbin.github.io' }
		],
		sidebar: {
			'/backend/': rootTree.items[0].items,
			'/frontend/': rootTree.items[1].items,
			'/server/': rootTree.items[2].items,
		},
		docFooter: { prev: '上一篇', next: '下一篇' },
		outlineTitle: '目录'
	}
}