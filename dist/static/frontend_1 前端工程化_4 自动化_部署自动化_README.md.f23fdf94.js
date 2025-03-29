import{_ as a,o as n,c as e,O as l}from"./chunks/framework.d9e2f5d0.js";const p="/static/CI.6aed3d1c.png",i="/static/CD.827c1f66.png",t="/static/CD2.0b84e0f3.png",o="/static/1.fe48f854.jpg",r="/static/2.f3354467.png",c="/static/3.02d32006.png",d="/static/jenkins9.bbfa2e52.png",h="/static/jenkins10.d6d23c70.png",x=JSON.parse('{"title":"部署自动化","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/1 前端工程化/4 自动化/部署自动化/README.md","filePath":"frontend/1 前端工程化/4 自动化/部署自动化/README.md"}'),u={name:"frontend/1 前端工程化/4 自动化/部署自动化/README.md"};function g(y,s,b,m,f,k){return n(),e("div",null,s[0]||(s[0]=[l('<h1 id="部署自动化" tabindex="-1">部署自动化 <a class="header-anchor" href="#部署自动化" aria-label="Permalink to &quot;部署自动化&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>传统项目部署流程：手动打包、上传代码到git、部署项目。这个过程虽然简单，但往往是重复性强且浪费时间还容易出错，尤其是当项目规模较大时，整个流程会变得非常耗时和繁琐。</p><p>为了解决这个问题我们有必要为项目配置 CI/CD 流程。</p><h2 id="名词解释" tabindex="-1">名词解释 <a class="header-anchor" href="#名词解释" aria-label="Permalink to &quot;名词解释&quot;">​</a></h2><h3 id="ci" tabindex="-1">CI <a class="header-anchor" href="#ci" aria-label="Permalink to &quot;CI&quot;">​</a></h3><p>持续集成(Continuous Integration, CI)。</p><p>试想软件在开发过程中，需要不断的提交，合并进行单元测试和发布测试版本等等，这一过程是痛苦的。<strong>持续集成CI是在源代码变更后自动检测、拉取、构建的过程。</strong></p><p><img src="'+p+'" alt=""></p><h3 id="cd" tabindex="-1">CD <a class="header-anchor" href="#cd" aria-label="Permalink to &quot;CD&quot;">​</a></h3><p>CD 对应两个概念 持续交付Continuous Delivery 持续部署Continuous Deployment</p><p><strong>持续交付</strong></p><p>提交交付顾名思义是要拿出点东西的。在 CI 的自动化流程阶段后，运维团队可以快速、轻松地将应用部署到生产环境中或发布给最终使用的用户。</p><p>从前端的角度考虑，在某些情况下肯定是不能直接通过自动化的方式将最终的 build 结果直接扔到生产机的。持续交互就是可持续性交付供生产使用的的最终 build。最后通过运维或者后端小伙伴进行部署。</p><p><img src="'+i+'" alt=""></p><p><strong>持续部署</strong></p><p>作为持续交付的延伸，持续部署可以自动将应用发布到生产环境。</p><p><img src="'+t+'" alt=""></p><h2 id="思路" tabindex="-1">思路 <a class="header-anchor" href="#思路" aria-label="Permalink to &quot;思路&quot;">​</a></h2><p>手动部署一个前端项目的步骤包括：</p><ol><li>写完代码执行<code>npm run build</code>打包前端项目。</li><li>把代码推送到gitlab仓库。</li><li>通过Jenkins执行项目build。</li><li>发布最新版本。</li></ol><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><h3 id="环境安装" tabindex="-1">环境安装 <a class="header-anchor" href="#环境安装" aria-label="Permalink to &quot;环境安装&quot;">​</a></h3><ol><li>代码管理 Gitlab 安装</li><li>Jenkins 安装，Jenkins 安装 Gitlab 插件</li></ol><p><img src="'+o+'" alt=""></p><h3 id="jenkins-freestyle-任务构建" tabindex="-1">Jenkins Freestyle 任务构建 <a class="header-anchor" href="#jenkins-freestyle-任务构建" aria-label="Permalink to &quot;Jenkins Freestyle 任务构建&quot;">​</a></h3><ol><li>New Item <ol><li>Freestyle project</li></ol></li><li>进入项目 -&gt; <ol><li>点击 Configure -&gt; 进入General面板</li><li>配置 Source Code Management</li><li>配置 Build Triggers</li></ol></li></ol><p><img src="'+r+`" alt=""></p><h3 id="部署到本机" tabindex="-1">部署到本机 <a class="header-anchor" href="#部署到本机" aria-label="Permalink to &quot;部署到本机&quot;">​</a></h3><p>在 构建 中选择 增加构建步骤 -&gt; 执行 shell 输入打包发布相关的命令。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 安装yarn</span></span>
<span class="line"><span style="color:#e1e4e8;">npm install yarn -g</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装项目依赖</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn install</span></span>
<span class="line"><span style="color:#e1e4e8;"># 打包项目</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn build</span></span>
<span class="line"><span style="color:#e1e4e8;"># 打包 build 后的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">tar -zcvf dist.tar.gz dist/</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除 build 后的文件</span></span>
<span class="line"><span style="color:#e1e4e8;">rm -rf dist/</span></span>
<span class="line"><span style="color:#e1e4e8;"># 移动 build 后的压缩包到 nginx 托管目录下。</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo mv dist.tar.gz /usr/share/nginx/html</span></span>
<span class="line"><span style="color:#e1e4e8;"># 进入托管目录下</span></span>
<span class="line"><span style="color:#e1e4e8;">cd /usr/share/nginx/html</span></span>
<span class="line"><span style="color:#e1e4e8;"># 解压</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo tar -zxcf dist.tar.gz</span></span>
<span class="line"><span style="color:#e1e4e8;"># 删除压缩包</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo rm -rf dist.tar.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 安装yarn</span></span>
<span class="line"><span style="color:#24292e;">npm install yarn -g</span></span>
<span class="line"><span style="color:#24292e;"># 安装项目依赖</span></span>
<span class="line"><span style="color:#24292e;">yarn install</span></span>
<span class="line"><span style="color:#24292e;"># 打包项目</span></span>
<span class="line"><span style="color:#24292e;">yarn build</span></span>
<span class="line"><span style="color:#24292e;"># 打包 build 后的文件</span></span>
<span class="line"><span style="color:#24292e;">tar -zcvf dist.tar.gz dist/</span></span>
<span class="line"><span style="color:#24292e;"># 删除 build 后的文件</span></span>
<span class="line"><span style="color:#24292e;">rm -rf dist/</span></span>
<span class="line"><span style="color:#24292e;"># 移动 build 后的压缩包到 nginx 托管目录下。</span></span>
<span class="line"><span style="color:#24292e;">sudo mv dist.tar.gz /usr/share/nginx/html</span></span>
<span class="line"><span style="color:#24292e;"># 进入托管目录下</span></span>
<span class="line"><span style="color:#24292e;">cd /usr/share/nginx/html</span></span>
<span class="line"><span style="color:#24292e;"># 解压</span></span>
<span class="line"><span style="color:#24292e;">sudo tar -zxcf dist.tar.gz</span></span>
<span class="line"><span style="color:#24292e;"># 删除压缩包</span></span>
<span class="line"><span style="color:#24292e;">sudo rm -rf dist.tar.gz</span></span></code></pre></div><h3 id="侦听-git-提交到指定分支进行构建" tabindex="-1">侦听 git 提交到指定分支进行构建 <a class="header-anchor" href="#侦听-git-提交到指定分支进行构建" aria-label="Permalink to &quot;侦听 git 提交到指定分支进行构建&quot;">​</a></h3><h5 id="gitlab-配置" tabindex="-1">Gitlab 配置 <a class="header-anchor" href="#gitlab-配置" aria-label="Permalink to &quot;Gitlab 配置&quot;">​</a></h5><ol><li>代码仓库需要 Maintainer 权限</li><li>代码仓库 <ol><li>用户设置</li><li>Webhooks</li><li>输入URL、Secret Token</li><li>点击Add webhook</li><li>点击测试</li><li>点击 Push events</li><li>提示：Hook executed successfully: HTTP 200，表示成功了。</li></ol></li></ol><p><img src="`+c+'" alt=""></p><h5 id="jenkins-配置" tabindex="-1">Jenkins 配置 <a class="header-anchor" href="#jenkins-配置" aria-label="Permalink to &quot;Jenkins 配置&quot;">​</a></h5><p>1, 修改 Jenkins 任务配置 构建触发器中选择 GitHub hook trigger for GITScm polling</p><p><img src="'+d+`" alt=""></p><p>2, 由于在上面的源码管理中已经指定了main分支，此时如果这个分支的代码有改动就会触发自动构建。</p><h3 id="部署到目标主机" tabindex="-1">部署到目标主机 <a class="header-anchor" href="#部署到目标主机" aria-label="Permalink to &quot;部署到目标主机&quot;">​</a></h3><blockquote><p>在真实的开发场景中，Jenkins 几乎不会和前端资源放到一个服务器。大多数情况下 Jenkins 所处的服务器环境就是一个工具用的服务器，放置了一些公司中常用的工具。因此构建到指定的服务器也至关重要。</p></blockquote><p>1, 先修改原有的构建脚本。因为要发布到远程，所以原有的发布命令要进行去除。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 安装yarn</span></span>
<span class="line"><span style="color:#e1e4e8;">npm install yarn -g</span></span>
<span class="line"><span style="color:#e1e4e8;"># 安装项目依赖</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn install</span></span>
<span class="line"><span style="color:#e1e4e8;"># 打包项目</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn build</span></span>
<span class="line"><span style="color:#e1e4e8;"># 只打包，然后删除文件夹。</span></span>
<span class="line"><span style="color:#e1e4e8;">tar -zcvf dist.tar.gz dist/</span></span>
<span class="line"><span style="color:#e1e4e8;">rm -rf dist/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 安装yarn</span></span>
<span class="line"><span style="color:#24292e;">npm install yarn -g</span></span>
<span class="line"><span style="color:#24292e;"># 安装项目依赖</span></span>
<span class="line"><span style="color:#24292e;">yarn install</span></span>
<span class="line"><span style="color:#24292e;"># 打包项目</span></span>
<span class="line"><span style="color:#24292e;">yarn build</span></span>
<span class="line"><span style="color:#24292e;"># 只打包，然后删除文件夹。</span></span>
<span class="line"><span style="color:#24292e;">tar -zcvf dist.tar.gz dist/</span></span>
<span class="line"><span style="color:#24292e;">rm -rf dist/</span></span></code></pre></div><p>2, 选择构建后操作 -&gt; Send build artifacts over SSH</p><p><img src="`+h+'" alt=""></p><h3 id="钉钉机器人通知" tabindex="-1">钉钉机器人通知 <a class="header-anchor" href="#钉钉机器人通知" aria-label="Permalink to &quot;钉钉机器人通知&quot;">​</a></h3><p>1，系统管理 -&gt; 插件管理 搜索 DingTalk 进行安装。</p><p>2，钉钉群创建机器人。钉钉群 -&gt; 只能群助手 -&gt; 添加机器人 -&gt; 自定义</p><h4 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h4><ul><li><a href="https://mp.weixin.qq.com/s/HOW-QqbPjhi4AglvQbyifA" target="_blank" rel="noreferrer">前端工程化：保姆级教学 Jenkins 部署前端项目</a></li><li><a href="https://mp.weixin.qq.com/s/qbLc2WQGhzO3ngE8JogryA" target="_blank" rel="noreferrer">自动化部署脚本教程：前端项目的自动打包、上传与部署</a></li></ul>',50)]))}const _=a(u,[["render",g]]);export{x as __pageData,_ as default};
