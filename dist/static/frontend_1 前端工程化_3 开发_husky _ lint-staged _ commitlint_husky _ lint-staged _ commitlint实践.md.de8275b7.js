import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.0f4e1e9e.js";const l="/static/GitHooks.d00a3d32.jpg",g=JSON.parse('{"title":"husky + lint-staged + commitlint 实现Git Commit提交规范自动化检查","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/1 前端工程化/3 开发/husky + lint-staged + commitlint/husky + lint-staged + commitlint实践.md","filePath":"frontend/1 前端工程化/3 开发/husky + lint-staged + commitlint/husky + lint-staged + commitlint实践.md"}'),p={name:"frontend/1 前端工程化/3 开发/husky + lint-staged + commitlint/husky + lint-staged + commitlint实践.md"},t=e('<h1 id="husky-lint-staged-commitlint-实现git-commit提交规范自动化检查" tabindex="-1">husky + lint-staged + commitlint 实现Git Commit提交规范自动化检查 <a class="header-anchor" href="#husky-lint-staged-commitlint-实现git-commit提交规范自动化检查" aria-label="Permalink to &quot;husky + lint-staged + commitlint 实现Git Commit提交规范自动化检查&quot;">​</a></h1><h2 id="husky" tabindex="-1">husky <a class="header-anchor" href="#husky" aria-label="Permalink to &quot;husky&quot;">​</a></h2><p>简单来说，husky是一个Git钩子（hook）工具，它能够在Git版本控制的不同阶段触发自定义的脚本。这意味着我们可以在代码提交、推送等操作前后执行特定的命令或脚本。</p><p>安装 husky</p><p>npm install husky --save-dev</p><p>npx husky-init</p><p>执行成功后，项目中生成一个 .husky 目录</p><p>常见钩子</p><p>以下是一些常见的 Husky 钩子以及它们的作用：</p><ul><li>pre-commit：在提交代码之前执行的钩子。可以用于运行代码格式化、代码质量检查、单元测试等操作，以确保提交的代码符合规范。</li><li>commit-msg：在提交信息（Commit Message）被创建之后、实际执行提交之前执行的钩子。可以用于对提交信息进行验证、校验和规范，以确保提交信息的格式正确且符合规范。</li><li>pre-push：在推送代码之前执行的钩子。可以用于运行集成测试、端到端测试等操作，以确保即将推送的代码通过了所有的测试。</li><li>prepare-commit-msg：在提交信息被编辑之后、实际执行提交之前执行的钩子。可以用于自动化地修改或添加提交信息，如添加一个统一的前缀或后缀。</li><li>post-merge：在代码合并（merge）之后执行的钩子。可以用于运行安装依赖、构建项目或其他必要的后续操作。</li><li>post-checkout：在切换分支（checkout）之后执行的钩子。可以用于执行特定分支下的必要任务，如安装依赖、清理缓存等。</li><li>post-rewrite：在使用 Git 命令改写提交历史（如使用 git commit --amend）之后执行的钩子。可以用于对改写后的提交进行必要的操作和验证。</li></ul><p><img src="'+l+`" alt=""></p><p>当你想新增钩子时可以使用命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npx husky add .husky/commit-msg &#39;npm test&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npx husky add .husky/commit-msg &#39;npm test&#39;</span></span></code></pre></div><h2 id="lint-staged" tabindex="-1">lint-staged <a class="header-anchor" href="#lint-staged" aria-label="Permalink to &quot;lint-staged&quot;">​</a></h2><p>简介</p><p>lint-staged 的主要功能是在 Git 暂存区中检查被修改的文件，只对这些文件进行 lint 操作，从而提高 lint 检查的效率。通常，我们并不需要对整个项目进行 lint 检查，而是希望只针对即将提交的代码进行检查，以避免不必要的耗时。</p><p>通过将 lint-staged 配置为 husky 的 pre-commit 钩子的一部分，可以在每次提交代码之前自动触发 lint-staged，对即将提交的文件进行 lint 检查。如果有任何 lint 错误或不符合规范的代码，lint-staged 将阻止提交，给出相应的错误信息，帮助开发者及时发现和解决问题。</p><p>安装及使用</p><p>npm install lint-staged --save-dev</p><p>配置 lint-staged</p><p>在 package.json 文件中添加以下配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">     // src/**/*.{js,jsx,ts,tsx} 校验暂存区、指定目录下的文件类型</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 校验命令，执行 npm run lint</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;src/**/*.{js,jsx,ts,tsx}&quot;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;npm run lint&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">    ]</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;lint-staged&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">     // src/**/*.{js,jsx,ts,tsx} 校验暂存区、指定目录下的文件类型</span></span>
<span class="line"><span style="color:#24292e;">    // 校验命令，执行 npm run lint</span></span>
<span class="line"><span style="color:#24292e;">    &quot;src/**/*.{js,jsx,ts,tsx}&quot;: [</span></span>
<span class="line"><span style="color:#24292e;">      &quot;npm run lint&quot;</span></span>
<span class="line"><span style="color:#24292e;">    ]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>使用 lint-staged</p><p>.husky/pre-commit.sh</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/sh</span></span>
<span class="line"><span style="color:#e1e4e8;">. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;husky pre-commit&quot; &amp;&amp; npx lint-staged</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/sh</span></span>
<span class="line"><span style="color:#24292e;">. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">echo &quot;husky pre-commit&quot; &amp;&amp; npx lint-staged</span></span></code></pre></div><h2 id="commitlint" tabindex="-1">commitlint <a class="header-anchor" href="#commitlint" aria-label="Permalink to &quot;commitlint&quot;">​</a></h2><p>简介</p><p>「commitlint」是一个用于规范化提交消息的工具，它能够帮助团队在项目中统一和规范提交信息的格式和内容。通过使用 commitlint，你可以确保提交消息遵循预定义的规则，提高代码提交的可读性和一致性。</p><p>安装 commitlint</p><p>npm install @commitlint/cli @commitlint/config-conventional --save-dev</p><p>在上述命令中，我们安装了 @commitlint/cli，它是 commitlint 的核心工具，用于执行提交消息的规范校验。同时，我们还安装了 @commitlint/config-conventional，它是一个常用的规则配置，遵循了约定式提交规范（Conventional Commits）。</p><p>配置 commitlint</p><p>commitlint.config.js</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
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
<span class="line"><span style="color:#e1e4e8;">    // &#39;scope-empty&#39;: [2, &#39;never&#39;], 作用域不为空</span></span>
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
<span class="line"><span style="color:#24292e;">    // &#39;scope-empty&#39;: [2, &#39;never&#39;], 作用域不为空</span></span>
<span class="line"><span style="color:#24292e;">    &#39;scope-case&#39;: [0],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;subject-full-stop&#39;: [0],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;subject-case&#39;: [0]</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>使用 commitlint</p><p>commit-msg.sh</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/bin/sh</span></span>
<span class="line"><span style="color:#e1e4e8;">. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">echo &quot;husky commit-msg&quot; &amp;&amp; npx --no-install commitlint --edit $1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/bin/sh</span></span>
<span class="line"><span style="color:#24292e;">. &quot;$(dirname &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">echo &quot;husky commit-msg&quot; &amp;&amp; npx --no-install commitlint --edit $1</span></span></code></pre></div><p>在 commit-msg 钩子内执行 npx --no-install commitlint --edit $1 的作用是调用 commitlint 来对提交消息进行校验并编辑。 具体作用如下：</p><ol><li>--no-install 参数告诉 npx 命令不要自动安装 commitlint，而是使用当前项目中已安装的 commitlint。</li><li>commitlint 是执行实际的 commitlint 命令，用于校验提交消息的规范性。</li><li>--edit 参数告诉 commitlint 打开文本编辑器，以便你可以在编辑器中查看和编辑提交消息。</li><li>$1 是 commit-msg 钩子的参数，将提交消息作为参数传递给 commitlint 进行校验。 综合起来，npx --no-install commitlint --edit $1 的目的是在 commit-msg 钩子中调用 commitlint，通过打开文本编辑器编辑提交消息，从而实现对提交消息的规范校验。这样，你可以在编辑器中查看和修改提交消息，确保其符合预定义的规范要求。</li></ol><p>提交格式规范</p><p>约定 commit的提交格式规范，包含Header，Body（可选） 和 Footer（可选）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 空一行</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 空一行</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;footer&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</span></span>
<span class="line"><span style="color:#24292e;">// 空一行</span></span>
<span class="line"><span style="color:#24292e;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">// 空一行</span></span>
<span class="line"><span style="color:#24292e;">&lt;footer&gt;</span></span></code></pre></div><p>Header</p><p>type用于说明 &#39;commit&#39; 的类别，主要包含以下类型</p><table><thead><tr><th>type</th><th>说明</th></tr></thead><tbody><tr><td>feat</td><td>新功能</td></tr><tr><td>fix</td><td>修复BUG</td></tr><tr><td>docs</td><td>文档更新</td></tr><tr><td>style</td><td>样式更新</td></tr><tr><td>refactor</td><td>重构</td></tr><tr><td>test</td><td>增加测试内容</td></tr><tr><td>chore</td><td>构建过程或辅助工具的变动</td></tr></tbody></table><p>参考：</p><p>规范你的前端团队！husky + lint-staged + commitlint 实现自动化规范检查 <a href="https://juejin.cn/post/7245674094493171770?searchId=20230926111219E4A65229265D9951EB52" target="_blank" rel="noreferrer">https://juejin.cn/post/7245674094493171770?searchId=20230926111219E4A65229265D9951EB52</a></p>`,47),o=[t];function i(c,r,m,d,y,u){return n(),a("div",null,o)}const k=s(p,[["render",i]]);export{g as __pageData,k as default};
