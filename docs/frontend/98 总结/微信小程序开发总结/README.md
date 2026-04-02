# 微信小程序开发总结

## JSSDK 调用 wx.miniProgram.navigateTo 成功，但是没有返回指定的页面！

注意：wx.miniProgram.navigateTo({url}) 不能跳转到  tabbar 页面，检查url 是不是 tabbar页面。如果 url 是 tabbar 页面可以用 wx.miniProgram.switchTab 代替。
参考：
https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html
https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html

## 获取用户更精确位置

```
// type：'gcjo2' 获取到的位置精确度要高一些，不要用type:'wgs84'
wx.getLocation({
  type: 'gcj02',
  isHighAccuracy: true,
  success: (res) => {
    const {latitude, longitude} = res;
  },
  fail: (error) => {
    console.error('getLocation fail:', error)
  },
})
```

## 地图组件的坑

<cover-view/>元素的white-space: nowrap; 元素内文本不会换行，文本会在在同一行上继续。当文本过长的情况下文本会被裁切。设置：white-space：normal；空白会被浏览器忽略。

## 小程序第三方代发布整理

微信开放平台 https://open.weixin.qq.com/wxaopen/serviceprovider/AppList?token=d2a660f45c0b28c51e26927ec4f1d337a79aacea

## 微信小程序map组件总结

地图同时设置scale 与 moveToLocation 的情况下 莫名scale显示差距很大，比如初始设置了scale = 8.0028 与moveToLocation，再设置scale = 8.0069差距很大。
bindpolylinetap 在微信开发者工具中无法触发事件函数执行，只有在真机上才可以。
自定义显示marker文字显示不全
自定义显示marker文字层级显示不对
自定义显示marker 用CSS绘制三角形渲染有问题，用图片替换，坑坑坑！

## 外部打开微信小程序指定页面

**方式一：点击普通链接打开小程序**

应用场景：发短信，点击短信中的链接进入微信小程序指定页面

**示例:**
https://miniprograme-jump-link.example.cn/?path=/pages/refreshIndex/index&queryString=bizNo%3DCAR_INTERCITY%26orderNo%3D24041811240010792511%26source%3Dself-service%26redirect%3D%2Fpackages%2Funi-intercity%2FsubPackages%2Fintercity%2Fpages%2ForderDetail&token=123456

**参数介绍:**

```text
token // 打开哪个小程序
path // 小程序页面路径
queryString // 小程序页面参数（注意：值需要通过调用encodeURIComponent进行编码），encodeURIComponent('bizNo=CAR_INTERCITY&orderNo=24041811240010792511&source=self-service&redirect=/packages/uni-intercity/subPackages/intercity/pages/orderDetail')
```


#### 方式二：扫普通链接二维码打开小程序（微信后台配置的链接）

应用场景：普通链接生成二维码，微信扫二维码进入小程序指定页面

**示例：**
https://miniapp.example.cn/?accountNo=20180626190801&from=trial&redirect=/packages/user/eInvoice/index

方式二与方式一比较：
1. 相比方式一生成的二维码，这种方式不用点击确认就可以进入。
2. 这种方式需要在后台配置链接规则。扫码才能进入微信。后台配置地址： https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=1544835039&lang=zh_CN

**方式三：扫微信小程序码打开小程序**

**官方文档链接：**
https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/qrcode-link/qr-code/getQRCode.html

**参考链接：**
https://www.cnblogs.com/coco1s/p/5038412.html

## 获取元素高度

```
let query = wx.createSelectorQuery().in(this);
query.select('#netCarMap').boundingClientRect(rect=>{
  let height = rect.height;
  console.log({height});
}).exec();
```

## 打开【半屏小程序】

wx.openEmbeddedMiniProgram(Object object)

https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html

关于 wx.openEmbeddedMiniProgram 使用限制？
https://developers.weixin.qq.com/community/develop/doc/000e0661c68590c0a7ff5523856c00

## 小程序【登陆】流程

[小程序登录官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)

**1. 调用wx.login() 获取code**

```
wx.login({
    success:(res) => {
        if(res.code){
            success && success(res);
        }
    }
});
```

**2. 调用wx.request发送code，获取自定义登录状态（openId、unionId、userToken、phone）这些**

```
wx.request({
    url:'users/authorizedWxMiniLogin'',
    method: "POST",
    data: {
        code
    },
    success(res) {
        const { openId,unionId,userToken,phone } = body;
        console.log({ openId,unionId,userToken,phone })
    }
})
```

**3. 自定义登录态存入storage**

```
wx.setStorageSync('openId', openId)
wx.setStorageSync('unionId', unionId)
wx.setStorageSync('userToken', userToken)
phone && wx.setStorageSync('phone', phone)
```

**4. wx.request() 携带自定义登录态（token），发起业务请求，返回业务数据**

```
wx.request({
    url:'/gateway/hire-biz/query/getLine',
    method: "POST",
    data: {
        userToken
    },
    success(res) {
        console.log(res)
    }
})
```

## 获取用户【手机号】

[手机号快速验证组件 官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)

**使用方法**

**步骤1**：需要将 button 组件 open-type 的值设置为 getPhoneNumber，当用户点击并同意之后，通过 bindgetphonenumber 事件获取回调信息；

**步骤2**：将 bindgetphonenumber 事件回调中的动态令牌code传到开发者后台，并在开发者后台调用微信后台提供的 phonenumber.getPhoneNumber 接口，消费code来换取用户手机号。每个code有效期为5分钟，且只能消费一次。

注：getPhoneNumber 返回的 code 与 wx.login 返回的 code 作用是不一样的，不能混用。

**代码示例**

```
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber"></button>
```

```
Page({
  getPhoneNumber (e) {
    console.log(e.detail.code)  // 动态令牌
    console.log(e.detail.errMsg) // 回调信息（成功失败都会返回）
    console.log(e.detail.errno)  // 错误码（失败时返回）
  }
})
```

> 动态令牌。可通过动态令牌换取用户手机号。使用方法详情 [phonenumber.getPhoneNumber](https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html) 接口。  
> 回调后应立即隐藏手机号按钮组件，或置为 disabled 状态，避免用户重复授权手机号产生额外费用。  
> 自2023年8月28日起，手机号快速验证组件将需要付费使用。标准单价为：每次组件调用成功，收费0.03元。  

**检查登录态是否过期**

```text
wx.checkSession(Object object)
```

## 地图

```
https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html

// 创建 map 上下文 MapContext 对象
this.map = wx.createMapContext("netCarMap", this) 

// 获取当前地图中心的经纬度。
this.map.getCenterLocation()

// 缩放视野展示所有经纬度
this.map.includePoints()

```

## 微信小程序中大型项目如何【拆分】与【管理】？

1. 拆分项目，代码管理方式。
    1. MultiRepo
        1. 抽离公共基础模块，封装成JavaScript SDK，发布到NPM。例如：lodash
    2. MonoRepo（推荐）
        1. 抽离公共业务逻辑，封装成包，在项目内使用。运用 pnpm-workspace 实现。
1. 通过小程序分包。
2. 通过写小程序组件库。
4. 通过uni-app 写公共组件。
5. 通过uni-app 写公共页面。
6. 通过 web-view 组件 ，把通用页面用 h5 的形式开发，比如协议页面、电子发票页面。

## 原生支持 TypeScript、less、sass

[官方链接](https://developers.weixin.qq.com/miniprogram/dev/devtools/compilets.html)

## 微信开发者工具构建npm时报错的解决方法。

message： 没有找到可以构建的 NPM 包，请确认需要参与构建的 npm 都在 `miniprogramRoot` 目录内，或配置 project.config.json 的 packNpmManually 和 packNpmRelationList 进行构建。

> 注意：亲测在Mac下要把"miniprogramNpmDistDir": "./"，然后再【构建 npm】才能成功。

参考：https://mp.weixin.qq.com/s/zy7ZiuGxNiCfEsguhmOBIg

## 小程序复制文本

```javascript
wx.setClipboardData({
    data: JSON.stringify(netCarSelectReq),
    success() {
      wx.showToast({
        title: '复制成功'
      })
    }
})
```

## 组件样式隔离

[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html#%E7%BB%84%E4%BB%B6%E6%A0%B7%E5%BC%8F%E9%9A%94%E7%A6%BB)