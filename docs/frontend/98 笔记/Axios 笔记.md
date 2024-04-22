# Axios 笔记

ajax.js

```
/**
 * ajax模块是对axios的二次封装
 * @module ajax
 * */

import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
import { removeToken } from './auth'

const errorCode = {
	401: '认证失败，无法访问系统资源',
	403: '当前操作没有权限',
	404: '访问资源不存在',
	default: '系统未知错误，请反馈给管理员'
}

// 创建axios实例
const instance = axios.create({
	// 请求URL公共部分
	baseURL: import.meta.env.VITE_APP_BASE_API,
	// 设置网络请求超时时间
	timeout: 10000,
	// 跨域请求否要携带cookie
	withCredentials: true,
	// 请求头设置
	headers: {
		'Content-Type': 'application/json;charset=utf-8'
	}
})

// 请求拦截器
instance.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		console.error(error)
		Promise.reject(error)
	}
)

// 响应拦截器
instance.interceptors.response.use(
	(res) => {
		// 获取状态信息
		let code = res.data.code || 200
		// 获取错误信息
		const msg = errorCode[code] || res.data.msg || errorCode['default']
		if (code === 401) {
			ElMessageBox.alert('无效的会话，或者会话已过期，请重新登录。', '系统提示', {
				confirmButtonText: '确定',
				type: 'warning'
			}).then(() => {
				removeToken()
				location.href = '/index'
			})
			return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
		} else if (code !== 200) {
			ElMessage({ message: msg, type: 'error' })
			return Promise.reject('error')
		} else {
			return Promise.resolve(res.data)
		}
	},
	(error) => {
		console.error('err' + error)
		let { message } = error
		if (message == 'Network Error') {
			message = '后端接口连接异常'
		} else if (message.includes('timeout')) {
			message = '系统接口请求超时'
		} else if (message.includes('Request failed with status code')) {
			message = '系统接口' + message.substr(message.length - 3) + '异常'
		}
		ElMessage({ message: message, type: 'error', duration: 5 * 1000 })
		return Promise.reject(error)
	}
)

function ajax(data) {
	let { method, url, params, headers = {} } = data

	let config = {
		url,
		method,
		headers: {
			...headers
		},
		params: method === 'get' ? params : null,
		data: method === 'post' || method === 'put' ? params : null
	}
	// console.log(config)

	return instance(config)
		.then(
			(value) => {
				let { data } = value
				let { code, message } = data
				if (code !== 20000) {
					console.error('response :', value, message)
				}
				return data
			},
			(reason) => {
				return Promise.reject(reason)
			}
		)
		.finally(() => {})
}

ajax.get = function (config) {
	return ajax({ method: 'get', ...config })
}

ajax.post = function (config) {
	return ajax({ method: 'post', ...config })
}

ajax.put = function (config) {
	return ajax({ method: 'put', ...config })
}

ajax.upload = function (config) {
	let { params } = config
	let formData = new FormData()
	for (let s in params) {
		formData.append(s, params[s])
	}

	return ajax({ method: 'post', ...config, params: formData })
}

export default ajax
```