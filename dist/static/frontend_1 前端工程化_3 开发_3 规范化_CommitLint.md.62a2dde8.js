import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const u=JSON.parse('{"title":"CommitLint","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/1 前端工程化/3 开发/3 规范化/CommitLint.md","filePath":"frontend/1 前端工程化/3 开发/3 规范化/CommitLint.md"}'),l={name:"frontend/1 前端工程化/3 开发/3 规范化/CommitLint.md"},t=e(`<h1 id="commitlint" tabindex="-1">CommitLint <a class="header-anchor" href="#commitlint" aria-label="Permalink to &quot;CommitLint&quot;">​</a></h1><h2 id="前沿" tabindex="-1">前沿 <a class="header-anchor" href="#前沿" aria-label="Permalink to &quot;前沿&quot;">​</a></h2><p>约定式提交（Conventional Commits）是一种用于代码版本控制的规范，旨在通过明确和标准化提交信息来提高代码协作质量和效率。 其基本原则是通过规定提交信息的结构和语义来提高代码版本控制的可读性、可维护性和自动化程度。</p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>「commitlint」是一个用于规范化提交消息的工具，它能够帮助团队在项目中统一和规范提交信息的格式和内容。 通过使用 commitlint，你可以确保提交消息遵循预定义的规则，提高代码提交的可读性和一致性。</p><h2 id="安装及使用" tabindex="-1">安装及使用 <a class="header-anchor" href="#安装及使用" aria-label="Permalink to &quot;安装及使用&quot;">​</a></h2><h3 id="安装-commitlint" tabindex="-1">安装 CommitLint <a class="header-anchor" href="#安装-commitlint" aria-label="Permalink to &quot;安装 CommitLint&quot;">​</a></h3><p><code>npm install @commitlint/cli @commitlint/config-conventional --save-dev</code></p><p>@commitlint/cli，它是 commitlint 的核心工具，用于执行提交消息的规范校验。</p><p>@commitlint/config-conventional，它是一个常用的规则配置，遵循了约定式提交规范（Conventional Commits）。</p><h3 id="配置-commitlint" tabindex="-1">配置 CommitLint <a class="header-anchor" href="#配置-commitlint" aria-label="Permalink to &quot;配置 CommitLint&quot;">​</a></h3><p>在项目根目录下创建<code>commitlint.config.js</code> 或 <code>.commitlintrc.js</code>文件，并编辑：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
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
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><h3 id="使用-commitlint" tabindex="-1">使用 CommitLint <a class="header-anchor" href="#使用-commitlint" aria-label="Permalink to &quot;使用 CommitLint&quot;">​</a></h3><h4 id="编辑-husky-commit-msg-sh-文件" tabindex="-1">编辑 <code>.husky/commit-msg.sh</code> 文件 <a class="header-anchor" href="#编辑-husky-commit-msg-sh-文件" aria-label="Permalink to &quot;编辑 \`.husky/commit-msg.sh\` 文件&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/sh</span></span>
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
<span class="line"><span style="color:#24292e;">&lt;footer&gt;</span></span></code></pre></div><p>注意：</p><blockquote><p>在Linux系统中，commit信息使用单引号&#39;&#39;包括，git commit -m ’project initialized‘。<br> 在windows系统，信息应该是双引号”“包括， 正确格式是git commit -m “project initalized”。</p></blockquote><p>Header</p><p>type用于说明 &#39;commit&#39; 的类别，主要包含以下类型</p><table><thead><tr><th>type</th><th>说明</th></tr></thead><tbody><tr><td>feat</td><td>新功能</td></tr><tr><td>fix</td><td>修复BUG</td></tr><tr><td>docs</td><td>文档更新</td></tr><tr><td>style</td><td>样式更新</td></tr><tr><td>refactor</td><td>重构</td></tr><tr><td>test</td><td>增加测试内容</td></tr><tr><td>chore</td><td>构建过程或辅助工具的变动</td></tr></tbody></table>`,28),p=[t];function o(i,c,r,m,d,y){return n(),a("div",null,p)}const g=s(l,[["render",o]]);export{u as __pageData,g as default};
