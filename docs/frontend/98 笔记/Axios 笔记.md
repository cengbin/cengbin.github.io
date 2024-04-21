# Axios 笔记

ajax.js

```
/**
 * ajax模块是对axios的二次封装
 * @module ajax
 * */

import axios from 'axios'

const instance = axios.create({
  timeout: 10000,
  withCredentials: true
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use((response) => {
  return response
})

function ajax(data) {
  let {method, url, params, headers = {}} = data

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
        let {data} = value
        let {code, message} = data
        if (code !== 20000) {
          console.error('response :', value, message)
        }
        return data
      },
      (reason) => {
        return Promise.reject(reason)
      }
    )
    .finally(() => {
    })
}

ajax.get = function (config) {
  return ajax({method: 'get', ...config})
}

ajax.post = function (config) {
  return ajax({method: 'post', ...config})
}

ajax.put = function (config) {
  return ajax({method: 'put', ...config})
}

ajax.upload = function (config) {
  let {params} = config
  let formData = new FormData()
  for (let s in params) {
    formData.append(s, params[s])
  }

  return ajax({method: 'post', ...config, params: formData})
}

export default ajax
```