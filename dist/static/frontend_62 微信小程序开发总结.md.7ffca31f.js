import{_ as e,o as s,c as a,Q as n}from"./chunks/framework.0f4e1e9e.js";const y=JSON.parse('{"title":"微信小程序开发总结","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/62 微信小程序开发总结.md","filePath":"frontend/62 微信小程序开发总结.md"}'),l={name:"frontend/62 微信小程序开发总结.md"},p=n(`<h1 id="微信小程序开发总结" tabindex="-1">微信小程序开发总结 <a class="header-anchor" href="#微信小程序开发总结" aria-label="Permalink to &quot;微信小程序开发总结&quot;">​</a></h1><h1 id="_1、使用总结" tabindex="-1">1、使用总结 <a class="header-anchor" href="#_1、使用总结" aria-label="Permalink to &quot;1、使用总结&quot;">​</a></h1><h2 id="获取元素高度" tabindex="-1">获取元素高度 <a class="header-anchor" href="#获取元素高度" aria-label="Permalink to &quot;获取元素高度&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">let query = wx.createSelectorQuery().in(this);</span></span>
<span class="line"><span style="color:#e1e4e8;">query.select(&#39;#netCarMap&#39;).boundingClientRect(rect=&gt;{</span></span>
<span class="line"><span style="color:#e1e4e8;">  let height = rect.height;</span></span>
<span class="line"><span style="color:#e1e4e8;">  console.log({height});</span></span>
<span class="line"><span style="color:#e1e4e8;">}).exec();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">let query = wx.createSelectorQuery().in(this);</span></span>
<span class="line"><span style="color:#24292e;">query.select(&#39;#netCarMap&#39;).boundingClientRect(rect=&gt;{</span></span>
<span class="line"><span style="color:#24292e;">  let height = rect.height;</span></span>
<span class="line"><span style="color:#24292e;">  console.log({height});</span></span>
<span class="line"><span style="color:#24292e;">}).exec();</span></span></code></pre></div><h2 id="打开【半屏小程序】" tabindex="-1">打开【半屏小程序】 <a class="header-anchor" href="#打开【半屏小程序】" aria-label="Permalink to &quot;打开【半屏小程序】&quot;">​</a></h2><p>wx.openEmbeddedMiniProgram(Object object)</p><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html</a></p><p>关于 wx.openEmbeddedMiniProgram 使用限制？ <a href="https://developers.weixin.qq.com/community/develop/doc/000e0661c68590c0a7ff5523856c00" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/community/develop/doc/000e0661c68590c0a7ff5523856c00</a></p><h2 id="小程序【登陆】" tabindex="-1">小程序【登陆】 <a class="header-anchor" href="#小程序【登陆】" aria-label="Permalink to &quot;小程序【登陆】&quot;">​</a></h2><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html" target="_blank" rel="noreferrer">小程序登录官方文档</a></p><h3 id="_1-调用wx-login-获取code" tabindex="-1">1. 调用wx.login() 获取code <a class="header-anchor" href="#_1-调用wx-login-获取code" aria-label="Permalink to &quot;1. 调用wx.login() 获取code&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">wx.login({</span></span>
<span class="line"><span style="color:#e1e4e8;">    success:(res) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">        if(res.code){</span></span>
<span class="line"><span style="color:#e1e4e8;">            success &amp;&amp; success(res);</span></span>
<span class="line"><span style="color:#e1e4e8;">        }</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">wx.login({</span></span>
<span class="line"><span style="color:#24292e;">    success:(res) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">        if(res.code){</span></span>
<span class="line"><span style="color:#24292e;">            success &amp;&amp; success(res);</span></span>
<span class="line"><span style="color:#24292e;">        }</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><h3 id="_2-调用wx-request发送code-获取自定义登录状态-openid、unionid、usertoken、phone-这些" tabindex="-1">2. 调用wx.request发送code，获取自定义登录状态（openId、unionId、userToken、phone）这些 <a class="header-anchor" href="#_2-调用wx-request发送code-获取自定义登录状态-openid、unionid、usertoken、phone-这些" aria-label="Permalink to &quot;2. 调用wx.request发送code，获取自定义登录状态（openId、unionId、userToken、phone）这些&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">wx.request({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url:&#39;users/authorizedWxMiniLogin&#39;&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    method: &quot;POST&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    data: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        code</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    success(res) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        const { openId,unionId,userToken,phone } = body;</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log({ openId,unionId,userToken,phone })</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">wx.request({</span></span>
<span class="line"><span style="color:#24292e;">    url:&#39;users/authorizedWxMiniLogin&#39;&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    method: &quot;POST&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    data: {</span></span>
<span class="line"><span style="color:#24292e;">        code</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    success(res) {</span></span>
<span class="line"><span style="color:#24292e;">        const { openId,unionId,userToken,phone } = body;</span></span>
<span class="line"><span style="color:#24292e;">        console.log({ openId,unionId,userToken,phone })</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h3 id="_3-自定义登录态存入storage" tabindex="-1">3. 自定义登录态存入storage <a class="header-anchor" href="#_3-自定义登录态存入storage" aria-label="Permalink to &quot;3. 自定义登录态存入storage&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">wx.setStorageSync(&#39;openId&#39;, openId)</span></span>
<span class="line"><span style="color:#e1e4e8;">wx.setStorageSync(&#39;unionId&#39;, unionId)</span></span>
<span class="line"><span style="color:#e1e4e8;">wx.setStorageSync(&#39;userToken&#39;, userToken)</span></span>
<span class="line"><span style="color:#e1e4e8;">phone &amp;&amp; wx.setStorageSync(&#39;phone&#39;, phone)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">wx.setStorageSync(&#39;openId&#39;, openId)</span></span>
<span class="line"><span style="color:#24292e;">wx.setStorageSync(&#39;unionId&#39;, unionId)</span></span>
<span class="line"><span style="color:#24292e;">wx.setStorageSync(&#39;userToken&#39;, userToken)</span></span>
<span class="line"><span style="color:#24292e;">phone &amp;&amp; wx.setStorageSync(&#39;phone&#39;, phone)</span></span></code></pre></div><h3 id="_4-wx-request-携带自定义登录态-token-发起业务请求-返回业务数据" tabindex="-1">4. wx.request() 携带自定义登录态（token），发起业务请求，返回业务数据 <a class="header-anchor" href="#_4-wx-request-携带自定义登录态-token-发起业务请求-返回业务数据" aria-label="Permalink to &quot;4. wx.request() 携带自定义登录态（token），发起业务请求，返回业务数据&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">wx.request({</span></span>
<span class="line"><span style="color:#e1e4e8;">    url:&#39;/gateway/hire-biz/query/getLine&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    method: &quot;POST&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    data: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        userToken</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    success(res) {</span></span>
<span class="line"><span style="color:#e1e4e8;">        console.log(res)</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">wx.request({</span></span>
<span class="line"><span style="color:#24292e;">    url:&#39;/gateway/hire-biz/query/getLine&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    method: &quot;POST&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    data: {</span></span>
<span class="line"><span style="color:#24292e;">        userToken</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    success(res) {</span></span>
<span class="line"><span style="color:#24292e;">        console.log(res)</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="获取用户【手机号】" tabindex="-1">获取用户【手机号】 <a class="header-anchor" href="#获取用户【手机号】" aria-label="Permalink to &quot;获取用户【手机号】&quot;">​</a></h2><p><a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html" target="_blank" rel="noreferrer">手机号快速验证组件 官方文档</a></p><h4 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h4><p><strong>步骤1</strong>：需要将 button 组件 open-type 的值设置为 getPhoneNumber，当用户点击并同意之后，通过 bindgetphonenumber 事件获取回调信息；</p><p><strong>步骤2</strong>：将 bindgetphonenumber 事件回调中的动态令牌code传到开发者后台，并在开发者后台调用微信后台提供的 phonenumber.getPhoneNumber 接口，消费code来换取用户手机号。每个code有效期为5分钟，且只能消费一次。</p><p>注：getPhoneNumber 返回的 code 与 wx.login 返回的 code 作用是不一样的，不能混用。</p><h4 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;button open-type=&quot;getPhoneNumber&quot; bindgetphonenumber=&quot;getPhoneNumber&quot;&gt;&lt;/button&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;button open-type=&quot;getPhoneNumber&quot; bindgetphonenumber=&quot;getPhoneNumber&quot;&gt;&lt;/button&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Page({</span></span>
<span class="line"><span style="color:#e1e4e8;">  getPhoneNumber (e) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(e.detail.code)  // 动态令牌</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(e.detail.errMsg) // 回调信息（成功失败都会返回）</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.log(e.detail.errno)  // 错误码（失败时返回）</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Page({</span></span>
<span class="line"><span style="color:#24292e;">  getPhoneNumber (e) {</span></span>
<span class="line"><span style="color:#24292e;">    console.log(e.detail.code)  // 动态令牌</span></span>
<span class="line"><span style="color:#24292e;">    console.log(e.detail.errMsg) // 回调信息（成功失败都会返回）</span></span>
<span class="line"><span style="color:#24292e;">    console.log(e.detail.errno)  // 错误码（失败时返回）</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><blockquote><p>动态令牌。可通过动态令牌换取用户手机号。使用方法详情 <a href="https://developers.weixin.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html" target="_blank" rel="noreferrer">phonenumber.getPhoneNumber</a> 接口。<br> 回调后应立即隐藏手机号按钮组件，或置为 disabled 状态，避免用户重复授权手机号产生额外费用。<br> 自2023年8月28日起，手机号快速验证组件将需要付费使用。标准单价为：每次组件调用成功，收费0.03元。</p></blockquote><h3 id="_6-检查登录态是否过期。" tabindex="-1">6 检查登录态是否过期。 <a class="header-anchor" href="#_6-检查登录态是否过期。" aria-label="Permalink to &quot;6 检查登录态是否过期。&quot;">​</a></h3><p>wx.checkSession(Object object)</p><h2 id="地图" tabindex="-1">地图 <a class="header-anchor" href="#地图" aria-label="Permalink to &quot;地图&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 创建 map 上下文 MapContext 对象</span></span>
<span class="line"><span style="color:#e1e4e8;">this.map = wx.createMapContext(&quot;netCarMap&quot;, this) </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 获取当前地图中心的经纬度。</span></span>
<span class="line"><span style="color:#e1e4e8;">this.map.getCenterLocation()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// 缩放视野展示所有经纬度</span></span>
<span class="line"><span style="color:#e1e4e8;">this.map.includePoints()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">https://developers.weixin.qq.com/miniprogram/dev/api/media/map/wx.createMapContext.html</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 创建 map 上下文 MapContext 对象</span></span>
<span class="line"><span style="color:#24292e;">this.map = wx.createMapContext(&quot;netCarMap&quot;, this) </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 获取当前地图中心的经纬度。</span></span>
<span class="line"><span style="color:#24292e;">this.map.getCenterLocation()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// 缩放视野展示所有经纬度</span></span>
<span class="line"><span style="color:#24292e;">this.map.includePoints()</span></span></code></pre></div><h2 id="微信小程序中大型项目如何【拆分】与【管理】" tabindex="-1">微信小程序中大型项目如何【拆分】与【管理】？ <a class="header-anchor" href="#微信小程序中大型项目如何【拆分】与【管理】" aria-label="Permalink to &quot;微信小程序中大型项目如何【拆分】与【管理】？&quot;">​</a></h2><ol><li>拆分项目，代码管理方式。 <ol><li>MultiRepo <ol><li>抽离公共基础模块，封装成JavaScript SDK，发布到NPM。例如：lodash</li></ol></li><li>MonoRepo（推荐） <ol><li>抽离公共业务逻辑，封装成包，在项目内使用。运用 pnpm-workspace 实现。</li></ol></li></ol></li><li>通过小程序分包。</li><li>通过写小程序组件库。</li><li>通过uni-app 写公共组件。</li><li>通过uni-app 写公共页面。</li><li>通过 web-view 组件 ，把通用页面用 h5 的形式开发，比如协议页面、电子发票页面。</li></ol><h2 id="原生支持-typescript、less、sass" tabindex="-1">原生支持 TypeScript、less、sass <a class="header-anchor" href="#原生支持-typescript、less、sass" aria-label="Permalink to &quot;原生支持 TypeScript、less、sass&quot;">​</a></h2><p><a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/compilets.html" target="_blank" rel="noreferrer">官方链接</a></p><h2 id="_2、问题总结" tabindex="-1">2、问题总结 <a class="header-anchor" href="#_2、问题总结" aria-label="Permalink to &quot;2、问题总结&quot;">​</a></h2><h2 id="微信开发者工具构建npm时报错的解决方法。" tabindex="-1">微信开发者工具构建npm时报错的解决方法。 <a class="header-anchor" href="#微信开发者工具构建npm时报错的解决方法。" aria-label="Permalink to &quot;微信开发者工具构建npm时报错的解决方法。&quot;">​</a></h2><p>message： 没有找到可以构建的 NPM 包，请确认需要参与构建的 npm 都在 <code>miniprogramRoot</code> 目录内，或配置 project.config.json 的 packNpmManually 和 packNpmRelationList 进行构建。</p><blockquote><p>注意：亲测在Mac下要把&quot;miniprogramNpmDistDir&quot;: &quot;./&quot;，然后再【构建 npm】才能成功。</p></blockquote><p>参考：<a href="https://mp.weixin.qq.com/s/zy7ZiuGxNiCfEsguhmOBIg" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/zy7ZiuGxNiCfEsguhmOBIg</a></p>`,41),o=[p];function t(c,r,i,d,h,u){return s(),a("div",null,o)}const m=e(l,[["render",t]]);export{y as __pageData,m as default};
