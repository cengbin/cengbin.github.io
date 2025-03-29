import{_ as n,o as a,c as l,O as p}from"./chunks/framework.d9e2f5d0.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/technical-documentation/中台子项目权限使用.md","filePath":"frontend/technical-documentation/中台子项目权限使用.md"}'),o={name:"frontend/technical-documentation/中台子项目权限使用.md"};function e(t,s,c,E,r,y){return a(),l("div",null,s[0]||(s[0]=[p(`<p><a name="4e800279"></a></p><h3 id="中台权限相关" tabindex="-1">中台权限相关 <a class="header-anchor" href="#中台权限相关" aria-label="Permalink to &quot;中台权限相关&quot;">​</a></h3><blockquote><p>路由配置表中meta字段新增auth字段，用于判断是否需要权限控制(白名单的路由除外)</p></blockquote><p><a name="0fea7c47"></a></p><h4 id="数据结构" tabindex="-1">数据结构 <a class="header-anchor" href="#数据结构" aria-label="Permalink to &quot;数据结构&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">xx路由</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 功能权限</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">buttons</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">xx</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// xx代表后台配置生成的拼音或中文</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 筛选权限</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">filters</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">xx</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// xx代表后台配置生成的拼音或中文</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 后台返回的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">response</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">     	</span><span style="color:#B392F0;">buttons</span><span style="color:#E1E4E8;">: [] </span><span style="color:#6A737D;">// 存储配置功能code,中文</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">filters</span><span style="color:#E1E4E8;">: [] </span><span style="color:#6A737D;">// 存储配置筛选项code,中文</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      tabOptions: [],  </span><span style="color:#6A737D;">// 页面默认的tabOptions配置</span></span>
<span class="line"><span style="color:#E1E4E8;">      tabMap: {} </span><span style="color:#6A737D;">// 页面默认的tabOptionMap key为name，值一直为true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// tab权限</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">tabs</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 有权限的tab</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">options</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {label: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">} </span><span style="color:#6A737D;">// label为页面中显示的tab文字,name对应的后台配置</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">map</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">xx</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// xx对应的后台配置</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setting</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">// 当前页面配置是否配置过功能权限</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">buttons</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">// 当前页面配置是否配置过tab权限</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">tabs</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#6A737D;">// 当前页面配置是否配置过筛选权限</span></span>
<span class="line"><span style="color:#E1E4E8;">       </span><span style="color:#B392F0;">filters</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">xx路由</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 功能权限</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">buttons</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">xx</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// xx代表后台配置生成的拼音或中文</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 筛选权限</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">filters</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">xx</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// xx代表后台配置生成的拼音或中文</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 后台返回的数据</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">response</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">     	</span><span style="color:#6F42C1;">buttons</span><span style="color:#24292E;">: [] </span><span style="color:#6A737D;">// 存储配置功能code,中文</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">filters</span><span style="color:#24292E;">: [] </span><span style="color:#6A737D;">// 存储配置筛选项code,中文</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      tabOptions: [],  </span><span style="color:#6A737D;">// 页面默认的tabOptions配置</span></span>
<span class="line"><span style="color:#24292E;">      tabMap: {} </span><span style="color:#6A737D;">// 页面默认的tabOptionMap key为name，值一直为true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// tab权限</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">tabs</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 有权限的tab</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">options</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {label: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, name: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">} </span><span style="color:#6A737D;">// label为页面中显示的tab文字,name对应的后台配置</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">map</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">xx</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// xx对应的后台配置</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setting</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">// 当前页面配置是否配置过功能权限</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">buttons</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">// 当前页面配置是否配置过tab权限</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">tabs</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6A737D;">// 当前页面配置是否配置过筛选权限</span></span>
<span class="line"><span style="color:#24292E;">       </span><span style="color:#6F42C1;">filters</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><a name="4a532e14"></a></p><h4 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h4><p><a name="d633859b"></a></p><h5 id="功能权限、筛选权限使用指令方式控制" tabindex="-1">功能权限、筛选权限使用指令方式控制 <a class="header-anchor" href="#功能权限、筛选权限使用指令方式控制" aria-label="Permalink to &quot;功能权限、筛选权限使用指令方式控制&quot;">​</a></h5><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">&lt;!--1.功能权限--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">&lt;!--此权限后台配置了，会根据当前用户是否拥有权限渲染--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-auth</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;shan_chu&#39;&quot;</span><span style="color:#E1E4E8;">&gt;删除&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">&lt;!--此权限后台无配置,则不控制权限--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-auth</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;custom&#39;&quot;</span><span style="color:#E1E4E8;">&gt;未配置权限&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">&lt;!--2. 筛选权限--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-auth:filter</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;fen_zu&#39;&quot;</span><span style="color:#E1E4E8;">&gt;分组&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">&lt;!--此权限后台无配置,则不控制权限--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-auth:filter</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;custom&#39;&quot;</span><span style="color:#E1E4E8;">&gt;未配置filter权限&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">&lt;!--3.筛选权限外层包裹着BaseQueryFormLayout组件--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#FDAEB7;font-style:italic;">BaseQueryFormLayout</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:spans</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[7, 6, 5, 6]&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">el-form-item</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;showAfChannel&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;测试&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">el-input</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">el-input</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  	&lt;/</span><span style="color:#85E89D;">el-form-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">BaseQueryFormLayout</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 筛选权限外层包裹着BaseQueryFormLayout组件使用示例</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { mapGetters } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vuex&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> get </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;lodash/get&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    computed: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">mapGetters</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;active_permissions&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">showAfChannel</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 数组的第二项为权限配置中配置的code</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.active_permissions, [</span><span style="color:#9ECBFF;">&#39;filter&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;af_channel&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">&lt;!--1.功能权限--&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">&lt;!--此权限后台配置了，会根据当前用户是否拥有权限渲染--&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-auth</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;shan_chu&#39;&quot;</span><span style="color:#24292E;">&gt;删除&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">&lt;!--此权限后台无配置,则不控制权限--&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-auth</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;custom&#39;&quot;</span><span style="color:#24292E;">&gt;未配置权限&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">&lt;!--2. 筛选权限--&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-auth:filter</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;fen_zu&#39;&quot;</span><span style="color:#24292E;">&gt;分组&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">&lt;!--此权限后台无配置,则不控制权限--&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-auth:filter</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;custom&#39;&quot;</span><span style="color:#24292E;">&gt;未配置filter权限&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">&lt;!--3.筛选权限外层包裹着BaseQueryFormLayout组件--&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#B31D28;font-style:italic;">BaseQueryFormLayout</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:spans</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[7, 6, 5, 6]&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">el-form-item</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;showAfChannel&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;测试&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">el-input</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">el-input</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  	&lt;/</span><span style="color:#22863A;">el-form-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">BaseQueryFormLayout</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 筛选权限外层包裹着BaseQueryFormLayout组件使用示例</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { mapGetters } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vuex&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> get </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;lodash/get&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    computed: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">mapGetters</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;active_permissions&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">showAfChannel</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 数组的第二项为权限配置中配置的code</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.active_permissions, [</span><span style="color:#032F62;">&#39;filter&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;af_channel&#39;</span><span style="color:#24292E;">], </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><a name="37f869ff"></a></p><h5 id="tab权限" tabindex="-1">tab权限 <a class="header-anchor" href="#tab权限" aria-label="Permalink to &quot;tab权限&quot;">​</a></h5><p><code>setting/defaultTab.js</code>配置相应的tab,结构如下</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 其中name必须为权限配置的code一致</span></span>
<span class="line"><span style="color:#6A737D;">// 渲染规则为 假如有A，B，C，三个Tab，如果只配置了A，B,则A，B会走权限控制，C则一直显示</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  activity: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;自定义tab&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;custom_tab&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;自定义tab2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;custom_tab2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;游戏活动管理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;activity_management&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;区域分组&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;area_grouping&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 其中name必须为权限配置的code一致</span></span>
<span class="line"><span style="color:#6A737D;">// 渲染规则为 假如有A，B，C，三个Tab，如果只配置了A，B,则A，B会走权限控制，C则一直显示</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  activity: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&#39;自定义tab&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;custom_tab&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&#39;自定义tab2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;custom_tab2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&#39;游戏活动管理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;activity_management&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&#39;区域分组&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;area_grouping&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><blockquote><p>tab情况分为2种。一种为卡片类，一种为非卡片类。</p></blockquote><ul><li></li></ul><p>非卡片类</p><blockquote><p><code>BasePermissionTab</code>组件内置默认插槽</p></blockquote><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">BasePermissionTab</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">on-change</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">handleTabChange</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">BasePermissionTab</span><span style="color:#24292E;"> @</span><span style="color:#6F42C1;">on-change</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">handleTabChange</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><ul><li></li></ul><p>卡片类</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// user 代表当前路由配置的tab的name</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-auth</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">tab</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;user&#39;&quot;</span><span style="color:#E1E4E8;">&gt;tab权限&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-auth</span><span style="color:#E1E4E8;">:</span><span style="color:#B392F0;">tab</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;custom&#39;&quot;</span><span style="color:#E1E4E8;">&gt;未配置tab权限&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// user 代表当前路由配置的tab的name</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-auth</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">tab</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;user&#39;&quot;</span><span style="color:#24292E;">&gt;tab权限&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-auth</span><span style="color:#24292E;">:</span><span style="color:#6F42C1;">tab</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;custom&#39;&quot;</span><span style="color:#24292E;">&gt;未配置tab权限&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><a name="702027c6"></a></p><h5 id="自定义控制权限" tabindex="-1">自定义控制权限 <a class="header-anchor" href="#自定义控制权限" aria-label="Permalink to &quot;自定义控制权限&quot;">​</a></h5><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">import { mapGetters } from &#39;vuex&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// active_permissions为当前路由的权限对象</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">...</span><span style="color:#B392F0;">mapGetters</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;active_permissions&#39;</span><span style="color:#E1E4E8;">]),</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">import { mapGetters } from &#39;vuex&#39;;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// active_permissions为当前路由的权限对象</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">...</span><span style="color:#6F42C1;">mapGetters</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;active_permissions&#39;</span><span style="color:#24292E;">]),</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,26)]))}const F=n(o,[["render",e]]);export{u as __pageData,F as default};
