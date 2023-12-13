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

let rootTree = { text: 'web-blog', items: [], path: '', }

function deepReadDirSync(dirPath, parent) {
	console.log('dirPath:', dirPath)
	// 该文件夹下的所有文件名称 (文件夹 + 文件)
	let files = fs.readdirSync(dirPath)
	// console.log("files:", files)
	files.forEach(file => {
		if (exclude.includes(file))
			return

		if (file.substring(0, 1) === '.')
			return

		var stat = fs.lstatSync(dirPath + '/' + file)
		// 判断文件是否是文件夹
		if (stat.isDirectory()) {
			let link = null
			let readmePath = dirPath + '/' + file + '/' + 'README.md'
			// 判断路径是否存在
			let bo = fs.existsSync(readmePath)
			if (bo) {
				link = parent.path + `/${file}/README`
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
	outDir: 'dist',
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
			'/frontend/': rootTree.items[1].items,
			'/backend/': rootTree.items[0].items,
			'/server/': rootTree.items[2].items,
		}
	}
}