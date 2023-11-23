## Request Header里Cache-Control的取值


### Cache-Control:max-age=0

这个值表示，这个请求按照协商缓存的规则走，一定会发出真实的请求。这里和响应头里的max-age=0有不同

### Cache-Control:no-cache

这个值一般会附带Pragma: no-cache，是为了兼容http1.0。表示这次请求不会读缓存资源，即便缓存没有过期，或者资源并没有修改，这样的请求不会有返回304的可能。这一点和响应头里的Cache-Control:no-cache是有区别的。
Request Header里Cache-Control只有这两个值可取，设置其他的值无效，比如设置Cache-Control:no-store是没有用的，这一点要和响应头里的Cache-Control区分开。
Request Header里的Cache-Control只有在浏览器刷新，硬性重新加载。这两种浏览器自己的行为中会被添加。
如果是一个常规的，设置了协商缓存（响应头里Cache-Control:no-cache），和不缓存（响应头里Cache-Control:no-cache）的请求，它在正常的，通过上文方式1访问时，是不会在请求头里添加Cache-Control值的。
