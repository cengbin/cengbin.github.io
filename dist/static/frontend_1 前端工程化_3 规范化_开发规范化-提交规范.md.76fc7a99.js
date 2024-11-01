import{_ as n,o as a,c as e,O as l}from"./chunks/framework.d9e2f5d0.js";const t="/static/GitHooks.d00a3d32.jpg",h=JSON.parse('{"title":"Husky + LintStaged + CommitLint 实现Git Commit提交规范自动化检查","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/1 前端工程化/3 规范化/开发规范化-提交规范.md","filePath":"frontend/1 前端工程化/3 规范化/开发规范化-提交规范.md"}'),p={name:"frontend/1 前端工程化/3 规范化/开发规范化-提交规范.md"};function o(i,s,c,r,d,m){return a(),e("div",null,s[0]||(s[0]=[l(`<h1 id="husky-lintstaged-commitlint-实现git-commit提交规范自动化检查" tabindex="-1">Husky + LintStaged + CommitLint 实现Git Commit提交规范自动化检查 <a class="header-anchor" href="#husky-lintstaged-commitlint-实现git-commit提交规范自动化检查" aria-label="Permalink to &quot;Husky + LintStaged + CommitLint 实现Git Commit提交规范自动化检查&quot;">​</a></h1><p><strong>环境准备</strong></p><p>node@16.13.1</p><p><strong>安装</strong></p><p>npm install --save-dev husky@8.0.0<br> npm install --save-dev lint-staged@12.0.0<br> npm install --save-dev @commitlint/cli@17.7.1<br> npm install --save-dev @commitlint/config-conventional@17.7.0</p><h2 id="_1、husky" tabindex="-1">1、Husky <a class="header-anchor" href="#_1、husky" aria-label="Permalink to &quot;1、Husky&quot;">​</a></h2><p>Husky是一个Git Hook 工具，<a href="https://typicode.github.io/husky/" target="_blank" rel="noreferrer">husky官网</a>。</p><p><strong>前沿</strong></p><p>在实际的团队协作开发中，你是否曾经遇到过这样的问题：当你在本地执行拉取（pull）操作，获取到团队成员的代码时，却发现他们的代码并未经过格式化，或者存在一些语法错误，甚至遗漏了某个文件的提交。而此时，那位同事却恰好处于休假状态。你只能先着手解决这些报错问题，才能顺利地在本地运行代码。而如果你也修改了那些未经格式化的代码，并在推送（push）之后，同事休假回来，他们对代码进行了格式化处理，并添加了新的功能，当他们提交时，就会产生大量的冲突，而再去解决这些不必要的冲突，又需要消耗你大量的精力。所以规范git提交操作，在git提交时进行eslint静态代码检查，以及格式化代码，这是必要的。</p><p><strong>安装</strong></p><blockquote><p>最新husky版本是9.0.11，需要node: &#39;&gt;=18&#39;<br> 我本机node版本是16.13.1，需要安装husky@8.0.0才支持</p></blockquote><p>执行：</p><p><code>npm install husky --save-dev</code></p><p>安装依赖后，配置下husky初始化</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// package.json 添加以下命令，每次安装依赖都会初始化husky</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">		&quot;prepare&quot;: &quot;husky install&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">	}</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// package.json 添加以下命令，每次安装依赖都会初始化husky</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">		&quot;prepare&quot;: &quot;husky install&quot;</span></span>
<span class="line"><span style="color:#24292e;">	}</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p><strong>使用</strong></p><p>执行：</p><p><code>npx husky-init</code></p><p>执行成功后，项目中生成一个 .husky 目录</p><p><strong>常见钩子</strong></p><p>以下是一些常见的 Husky 钩子以及它们的作用：</p><ul><li>pre-commit：在提交代码之前执行的钩子。可以用于运行代码格式化、代码质量检查、单元测试等操作，以确保提交的代码符合规范。</li><li>commit-msg：在提交信息（Commit Message）被创建之后、实际执行提交之前执行的钩子。可以用于对提交信息进行验证、校验和规范，以确保提交信息的格式正确且符合规范。</li><li>pre-push：在推送代码之前执行的钩子。可以用于运行集成测试、端到端测试等操作，以确保即将推送的代码通过了所有的测试。</li><li>prepare-commit-msg：在提交信息被编辑之后、实际执行提交之前执行的钩子。可以用于自动化地修改或添加提交信息，如添加一个统一的前缀或后缀。</li><li>post-merge：在代码合并（merge）之后执行的钩子。可以用于运行安装依赖、构建项目或其他必要的后续操作。</li><li>post-checkout：在切换分支（checkout）之后执行的钩子。可以用于执行特定分支下的必要任务，如安装依赖、清理缓存等。</li><li>post-rewrite：在使用 Git 命令改写提交历史（如使用 git commit --amend）之后执行的钩子。可以用于对改写后的提交进行必要的操作和验证。</li></ul><p><img src="`+t+`" alt=""></p><p>当你想新增钩子时可以使用命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npx husky add .husky/commit-msg &#39;npm test&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npx husky add .husky/commit-msg &#39;npm test&#39;</span></span></code></pre></div><h2 id="_2、lint-staged" tabindex="-1">2、lint-staged <a class="header-anchor" href="#_2、lint-staged" aria-label="Permalink to &quot;2、lint-staged&quot;">​</a></h2><h3 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h3><p>lint-staged 的主要功能是在 Git 暂存区中检查被修改的文件，只对这些文件进行 lint 操作，从而提高 lint 检查的效率。通常，我们并不需要对整个项目进行 lint 检查，而是希望只针对即将提交的代码进行检查，以避免不必要的耗时。</p><p>通过将 lint-staged 配置为 husky 的 pre-commit 钩子的一部分，可以在每次提交代码之前自动触发 lint-staged，对即将提交的文件进行 lint 检查。如果有任何 lint 错误或不符合规范的代码，lint-staged 将阻止提交，给出相应的错误信息，帮助开发者及时发现和解决问题。</p><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p><code>npm install lint-staged --save-dev</code></p><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p>配置 lint-staged，<a href="https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration" target="_blank" rel="noreferrer">配置方法官网介绍</a></p><p>方法一</p><p>在 package.json 文件中添加以下配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // src/**/*.{js,jsx,ts,tsx} 校验暂存区、指定目录下的文件类型</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 校验命令，执行 npm run lint</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;src/**/*.{js,jsx,ts,tsx}&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;npm run lint&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    // src/**/*.{js,jsx,ts,tsx} 校验暂存区、指定目录下的文件类型</span></span>
<span class="line"><span style="color:#24292e;">    // 校验命令，执行 npm run lint</span></span>
<span class="line"><span style="color:#24292e;">    &quot;src/**/*.{js,jsx,ts,tsx}&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">      &quot;npm run lint&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>方法二</p><p>在项目根目录下创建.lintstagedrc.json文件，添加一下配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;src/**/*.{js,vue,css,scss,json,md}&quot;: [&quot;npm run eslint&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;src/*.{js,vue,css,scss,json,md}&quot;: [&quot;npm run eslint&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">	&quot;src/**/*.{js,vue,css,scss,json,md}&quot;: [&quot;npm run eslint&quot;],</span></span>
<span class="line"><span style="color:#24292e;">	&quot;src/*.{js,vue,css,scss,json,md}&quot;: [&quot;npm run eslint&quot;]</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><p>编辑 <code>.husky/pre-commit.sh</code> 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;husky ===&gt; 执行 pre-commit 钩子&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">npx lint-staged</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">echo &quot;husky ===&gt; 执行 pre-commit 钩子&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">npx lint-staged</span></span></code></pre></div><h2 id="_3、commitlint" tabindex="-1">3、CommitLint <a class="header-anchor" href="#_3、commitlint" aria-label="Permalink to &quot;3、CommitLint&quot;">​</a></h2><h4 id="前沿" tabindex="-1">前沿 <a class="header-anchor" href="#前沿" aria-label="Permalink to &quot;前沿&quot;">​</a></h4><p>约定式提交（Conventional Commits）是一种用于代码版本控制的规范，旨在通过明确和标准化提交信息来提高代码协作质量和效率。 其基本原则是通过规定提交信息的结构和语义来提高代码版本控制的可读性、可维护性和自动化程度。</p><h4 id="简介-1" tabindex="-1">简介 <a class="header-anchor" href="#简介-1" aria-label="Permalink to &quot;简介&quot;">​</a></h4><p>「commitlint」是一个用于规范化提交消息的工具，它能够帮助团队在项目中统一和规范提交信息的格式和内容。 通过使用 commitlint，你可以确保提交消息遵循预定义的规则，提高代码提交的可读性和一致性。</p><h4 id="安装-commitlint" tabindex="-1">安装 CommitLint <a class="header-anchor" href="#安装-commitlint" aria-label="Permalink to &quot;安装 CommitLint&quot;">​</a></h4><p><code>npm install @commitlint/cli @commitlint/config-conventional --save-dev</code></p><p>@commitlint/cli，它是 commitlint 的核心工具，用于执行提交消息的规范校验。</p><p>@commitlint/config-conventional，它是一个常用的规则配置，遵循了约定式提交规范（Conventional Commits）。</p><h4 id="配置-commitlint" tabindex="-1">配置 CommitLint <a class="header-anchor" href="#配置-commitlint" aria-label="Permalink to &quot;配置 CommitLint&quot;">​</a></h4><p>在项目根目录下创建<code>commitlint.config.js</code> 或 <code>.commitlintrc.js</code>文件，并编辑：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">  rules: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;type-enum&#39;: [2, &#39;always&#39;, [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;feat&#39;,       // 新增功能</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;update&#39;,     // 更新功能</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;ui&#39;,         // 样式改动</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;fix&#39;,        // 修复功能bug</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;merge&#39;,      // 合并分支</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;refactor&#39;,   // 重构功能</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;perf&#39;,       // 性能优化</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;revert&#39;,     // 回退提交</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;style&#39;,      // 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等)</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;build&#39;,      // 修改项目构建工具(例如 glup，webpack，rollup 的配置等)的提交</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;docs&#39;,       // 文档新增、改动</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;test&#39;,       // 增加测试、修改测试</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;chore&#39;      // 不修改src或者test的其余修改，例如构建过程或辅助工具的变动</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;scope-empty&#39;: [0],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;scope-case&#39;: [0],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;subject-full-stop&#39;: [0],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;subject-case&#39;: [0]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  rules: {</span></span>
<span class="line"><span style="color:#24292e;">    &#39;type-enum&#39;: [2, &#39;always&#39;, [</span></span>
<span class="line"><span style="color:#24292e;">      &#39;feat&#39;,       // 新增功能</span></span>
<span class="line"><span style="color:#24292e;">      &#39;update&#39;,     // 更新功能</span></span>
<span class="line"><span style="color:#24292e;">      &#39;ui&#39;,         // 样式改动</span></span>
<span class="line"><span style="color:#24292e;">      &#39;fix&#39;,        // 修复功能bug</span></span>
<span class="line"><span style="color:#24292e;">      &#39;merge&#39;,      // 合并分支</span></span>
<span class="line"><span style="color:#24292e;">      &#39;refactor&#39;,   // 重构功能</span></span>
<span class="line"><span style="color:#24292e;">      &#39;perf&#39;,       // 性能优化</span></span>
<span class="line"><span style="color:#24292e;">      &#39;revert&#39;,     // 回退提交</span></span>
<span class="line"><span style="color:#24292e;">      &#39;style&#39;,      // 不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等)</span></span>
<span class="line"><span style="color:#24292e;">      &#39;build&#39;,      // 修改项目构建工具(例如 glup，webpack，rollup 的配置等)的提交</span></span>
<span class="line"><span style="color:#24292e;">      &#39;docs&#39;,       // 文档新增、改动</span></span>
<span class="line"><span style="color:#24292e;">      &#39;test&#39;,       // 增加测试、修改测试</span></span>
<span class="line"><span style="color:#24292e;">      &#39;chore&#39;      // 不修改src或者test的其余修改，例如构建过程或辅助工具的变动</span></span>
<span class="line"><span style="color:#24292e;">    ]],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;scope-empty&#39;: [0],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;scope-case&#39;: [0],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;subject-full-stop&#39;: [0],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;subject-case&#39;: [0]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h4 id="使用-commitlint" tabindex="-1">使用 CommitLint <a class="header-anchor" href="#使用-commitlint" aria-label="Permalink to &quot;使用 CommitLint&quot;">​</a></h4><h5 id="编辑-husky-commit-msg-sh-文件" tabindex="-1">编辑 <code>.husky/commit-msg.sh</code> 文件 <a class="header-anchor" href="#编辑-husky-commit-msg-sh-文件" aria-label="Permalink to &quot;编辑 \`.husky/commit-msg.sh\` 文件&quot;">​</a></h5><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/sh</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;husky commit-msg&quot; &amp;&amp; npx --no-install commitlint --edit $1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/sh</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">echo &quot;husky commit-msg&quot; &amp;&amp; npx --no-install commitlint --edit $1</span></span></code></pre></div><p>在 commit-msg 钩子内执行 npx --no-install commitlint --edit $1 的作用是调用 commitlint 来对提交消息进行校验并编辑。</p><p>具体作用如下：</p><ol><li>--no-install 参数告诉 npx 命令不要自动安装 commitlint，而是使用当前项目中已安装的 commitlint。</li><li>commitlint 是执行实际的 commitlint 命令，用于校验提交消息的规范性。</li><li>--edit 参数告诉 commitlint 打开文本编辑器，以便你可以在编辑器中查看和编辑提交消息。</li><li>$1 是 commit-msg 钩子的参数，将提交消息作为参数传递给 commitlint 进行校验。</li></ol><p>综合起来，npx --no-install commitlint --edit $1 的目的是在 commit-msg 钩子中调用 commitlint，通过打开文本编辑器编辑提交消息，从而实现对提交消息的规范校验。 这样，你可以在编辑器中查看和修改提交消息，确保其符合预定义的规范要求。</p><h4 id="提交格式规范" tabindex="-1">提交格式规范 <a class="header-anchor" href="#提交格式规范" aria-label="Permalink to &quot;提交格式规范&quot;">​</a></h4><p>约定 commit的提交格式规范，包含Header，Body（可选） 和 Footer（可选）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;空行&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;空行&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;footer&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;空行&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;空行&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;footer&gt;</span></span></code></pre></div><p>注意：</p><blockquote><p>在Linux系统中，commit信息使用单引号&#39;&#39;包括，git commit -m ’project initialized‘。<br> 在windows系统，信息应该是双引号”“包括， 正确格式是git commit -m “project initalized”。</p></blockquote><p>Header</p><p>type用于说明 &#39;commit&#39; 的类别，主要包含以下类型</p><table><thead><tr><th>type</th><th>说明</th></tr></thead><tbody><tr><td>feat</td><td>新功能</td></tr><tr><td>fix</td><td>修复BUG</td></tr><tr><td>docs</td><td>文档更新</td></tr><tr><td>style</td><td>样式更新</td></tr><tr><td>refactor</td><td>重构</td></tr><tr><td>test</td><td>增加测试内容</td></tr><tr><td>chore</td><td>构建过程或辅助工具的变动</td></tr></tbody></table><h3 id="参考" tabindex="-1">参考： <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考：&quot;">​</a></h3><p>规范你的前端团队！husky + lint-staged + commitlint 实现自动化规范检查 <a href="https://juejin.cn/post/7245674094493171770?searchId=20230926111219E4A65229265D9951EB52" target="_blank" rel="noreferrer">https://juejin.cn/post/7245674094493171770?searchId=20230926111219E4A65229265D9951EB52</a></p>`,71)]))}const y=n(p,[["render",o]]);export{h as __pageData,y as default};
