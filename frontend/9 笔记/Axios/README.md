# Axios 笔记

```
const instance = axios.create({
  headers: {
    'Content-Type': 'application/json;application/octet-stream',
    'version': '15.4',
  },
  timeout: 90000, // default is `0` (no timeout)
  withCredentials: false, // default
})

instance.interceptors.request.use(function (config) {
	return config
})

instance.interceptors.response.use(function (response) {
	return response
})
```