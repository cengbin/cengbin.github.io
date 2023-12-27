const fs = require('fs')
const path = require('path')
const { bubble_sort } = require('./util')

function resolvePath(dir) {
	return path.resolve(__dirname, './', dir)
}

let exclude = [
	'node_modules',
	'dist',
	'public',

	'微前端',
	'5.前后端分离接口规范',
	'4 深入理解WebGL渲染原理',
	'10 源码学习',
	'51 面试',
	
	'1.开发流程规范.md',
	'2.项目目录与文件结构规范.md',
	'3.开发代码规范.md',
	'4.git commit规范.md',
	'JS沙箱隔离.md',
	'使用Node如何制作一个专业的命令行工具以及命令执行的原理.md',
	'README-old-20230409.md',
	'Request Header里Cache-Control的取值.md',
	'浏览器缓存机制详解-20211019.md',
	'讲讲从输入URL到页面加载完成都发生了什么.md',
	'AMD模块与CMD模块对比.md',
	'ES6模块与CommonJS模块对比.md',
	'ESLint+Prettier',
	'husky+lint-staged+commitlint',
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

// 排序
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
		'frontend/2 前端优化/页面性能优化/1 基础篇/old/*.md',
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
				text: '后端',
				items: [
					{ text: 'Spring', link: 'https://spring.io/' },
				]
			},
			{
				text: '数据库',
				items: [
					{ text: 'MySQL', link: 'https://www.baidu.com' },
				]
			},
			{
				text: '服务器',
				items: [
					{ text: 'Nginx', link: '/server/nginx/README' },
					{ text: 'Tomcat', link: '/server/tomcat/README' },
				]
			},
			{
				text: '开发环境',
				items: [
					{ text: 'Windows', link: 'https://www.google.com' },
					{ text: 'Mac OS', link: 'https://www.google.com' },
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