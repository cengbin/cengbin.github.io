import{_ as e,o as n,c as a,O as l}from"./chunks/framework.d9e2f5d0.js";const p="/static/excel_template.aad90f74.png",o="/static/excel_detail.fee43f64.png",t="/static/excel_edit.922ee7ea.png",g=JSON.parse('{"title":"前端批量导入excel数据总结","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/technical-documentation/前端批量导入数据总结.md","filePath":"frontend/technical-documentation/前端批量导入数据总结.md"}'),c={name:"frontend/technical-documentation/前端批量导入数据总结.md"};function r(i,s,d,y,h,u){return n(),a("div",null,s[0]||(s[0]=[l('<h1 id="前端批量导入excel数据总结" tabindex="-1">前端批量导入excel数据总结 <a class="header-anchor" href="#前端批量导入excel数据总结" aria-label="Permalink to &quot;前端批量导入excel数据总结&quot;">​</a></h1><p>以批量导入【玩家+附件数据.xlsx】文件为例：</p><p><img src="'+p+`" alt=""></p><p>1、模板文件下载 与 读文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">if (command === &#39;download&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const a = document.createElement(&#39;a&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    a.href = &#39;http://p05-cdn.allstarunion.com/platform/20230619/20230619061802_数值管理导入.xlsx&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    a.click();</span></span>
<span class="line"><span style="color:#e1e4e8;">} else if (command === &#39;upload&#39;) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const input = document.createElement(&quot;input&quot;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    input.addEventListener(&#39;change&#39;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">      const files = event.target.files;</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;files:&#39;, files);</span></span>
<span class="line"><span style="color:#e1e4e8;">      if (!files.length || !files[0]) return;</span></span>
<span class="line"><span style="color:#e1e4e8;">    </span></span>
<span class="line"><span style="color:#e1e4e8;">      const file = files[0];</span></span>
<span class="line"><span style="color:#e1e4e8;">    })</span></span>
<span class="line"><span style="color:#e1e4e8;">    input.type = &#39;file&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    input.accept = &quot;.xlsx, .xls&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">    input.click();</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">if (command === &#39;download&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    const a = document.createElement(&#39;a&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    a.href = &#39;http://p05-cdn.allstarunion.com/platform/20230619/20230619061802_数值管理导入.xlsx&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    a.click();</span></span>
<span class="line"><span style="color:#24292e;">} else if (command === &#39;upload&#39;) {</span></span>
<span class="line"><span style="color:#24292e;">    const input = document.createElement(&quot;input&quot;);</span></span>
<span class="line"><span style="color:#24292e;">    input.addEventListener(&#39;change&#39;, (event) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">      const files = event.target.files;</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;files:&#39;, files);</span></span>
<span class="line"><span style="color:#24292e;">      if (!files.length || !files[0]) return;</span></span>
<span class="line"><span style="color:#24292e;">    </span></span>
<span class="line"><span style="color:#24292e;">      const file = files[0];</span></span>
<span class="line"><span style="color:#24292e;">    })</span></span>
<span class="line"><span style="color:#24292e;">    input.type = &#39;file&#39;;</span></span>
<span class="line"><span style="color:#24292e;">    input.accept = &quot;.xlsx, .xls&quot;;</span></span>
<span class="line"><span style="color:#24292e;">    input.click();</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>1.1、文件效验（文件格式、文件大小）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function isExcel(file) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return /\\.(xlsx|xls|csv)$/.test(file.name);</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">function maxLimit(file, size = 10) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  return (file.size / 1024 / 1024) &lt; size;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function isExcel(file) {</span></span>
<span class="line"><span style="color:#24292e;">  return /\\.(xlsx|xls|csv)$/.test(file.name);</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">function maxLimit(file, size = 10) {</span></span>
<span class="line"><span style="color:#24292e;">  return (file.size / 1024 / 1024) &lt; size;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre></div><p>2、解析文件（表头 header 、行数据 results）</p><p>2.1 服务端解析</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const params = new FormData();</span></span>
<span class="line"><span style="color:#e1e4e8;">params.append(&#39;file_key&#39;, &#39;file&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">params.append(&#39;file&#39;, file)</span></span>
<span class="line"><span style="color:#e1e4e8;">const loading = this.$loading({ lock: true });</span></span>
<span class="line"><span style="color:#e1e4e8;">ajax(params).then(({ code, data, message }) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (code === 20000) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;data:&#39;, data)</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.$message.success(message)</span></span>
<span class="line"><span style="color:#e1e4e8;">    } else {</span></span>
<span class="line"><span style="color:#e1e4e8;">      this.$message.error(message);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">}).finally(() =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    loading.close();</span></span>
<span class="line"><span style="color:#e1e4e8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const params = new FormData();</span></span>
<span class="line"><span style="color:#24292e;">params.append(&#39;file_key&#39;, &#39;file&#39;);</span></span>
<span class="line"><span style="color:#24292e;">params.append(&#39;file&#39;, file)</span></span>
<span class="line"><span style="color:#24292e;">const loading = this.$loading({ lock: true });</span></span>
<span class="line"><span style="color:#24292e;">ajax(params).then(({ code, data, message }) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    if (code === 20000) {</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;data:&#39;, data)</span></span>
<span class="line"><span style="color:#24292e;">      this.$message.success(message)</span></span>
<span class="line"><span style="color:#24292e;">    } else {</span></span>
<span class="line"><span style="color:#24292e;">      this.$message.error(message);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">}).finally(() =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    loading.close();</span></span>
<span class="line"><span style="color:#24292e;">});</span></span></code></pre></div><p>2.2 前端解析 2.2.1 前端效验行数是否符合规范（例如：小于1000行）<br> 2.2.2 前端效验列数据格式是否正确（例如：附件数量只能是数字）<br> 2.2.3 后端检测行数据是否配置合法（例如：玩家ID是否存在）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const reader = new FileReader();</span></span>
<span class="line"><span style="color:#e1e4e8;">reader.onload = (e) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const result = e.target.result;</span></span>
<span class="line"><span style="color:#e1e4e8;">  const workbook = XLSX.read(result, { type: &#39;array&#39; });</span></span>
<span class="line"><span style="color:#e1e4e8;">  const firstSheetName = workbook.SheetNames[0];</span></span>
<span class="line"><span style="color:#e1e4e8;">  const worksheet = workbook.Sheets[firstSheetName];</span></span>
<span class="line"><span style="color:#e1e4e8;">  const header = this.getHeaderRow(worksheet);</span></span>
<span class="line"><span style="color:#e1e4e8;">  const results = XLSX.utils.sheet_to_json(worksheet);</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;">reader.readAsArrayBuffer(file);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">getHeaderRow(sheet) {</span></span>
<span class="line"><span style="color:#e1e4e8;">  const headers = [];</span></span>
<span class="line"><span style="color:#e1e4e8;">  const range = XLSX.utils.decode_range(sheet[&#39;!ref&#39;]);</span></span>
<span class="line"><span style="color:#e1e4e8;">  let C;</span></span>
<span class="line"><span style="color:#e1e4e8;">  const R = range.s.r;</span></span>
<span class="line"><span style="color:#e1e4e8;">  /* start in the first row */</span></span>
<span class="line"><span style="color:#e1e4e8;">  for (C = range.s.c; C &lt;= range.e.c; ++C) {</span></span>
<span class="line"><span style="color:#e1e4e8;">    /* walk every column in the range */</span></span>
<span class="line"><span style="color:#e1e4e8;">    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];</span></span>
<span class="line"><span style="color:#e1e4e8;">    /* find the cell in the first row */</span></span>
<span class="line"><span style="color:#e1e4e8;">    let hdr = &#39;UNKNOWN &#39; + C; // &lt;-- replace with your desired default</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (cell &amp;&amp; cell.t) hdr = XLSX.utils.format_cell(cell);</span></span>
<span class="line"><span style="color:#e1e4e8;">    headers.push(hdr);</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">  return headers;</span></span>
<span class="line"><span style="color:#e1e4e8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const reader = new FileReader();</span></span>
<span class="line"><span style="color:#24292e;">reader.onload = (e) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">  const result = e.target.result;</span></span>
<span class="line"><span style="color:#24292e;">  const workbook = XLSX.read(result, { type: &#39;array&#39; });</span></span>
<span class="line"><span style="color:#24292e;">  const firstSheetName = workbook.SheetNames[0];</span></span>
<span class="line"><span style="color:#24292e;">  const worksheet = workbook.Sheets[firstSheetName];</span></span>
<span class="line"><span style="color:#24292e;">  const header = this.getHeaderRow(worksheet);</span></span>
<span class="line"><span style="color:#24292e;">  const results = XLSX.utils.sheet_to_json(worksheet);</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;">reader.readAsArrayBuffer(file);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">getHeaderRow(sheet) {</span></span>
<span class="line"><span style="color:#24292e;">  const headers = [];</span></span>
<span class="line"><span style="color:#24292e;">  const range = XLSX.utils.decode_range(sheet[&#39;!ref&#39;]);</span></span>
<span class="line"><span style="color:#24292e;">  let C;</span></span>
<span class="line"><span style="color:#24292e;">  const R = range.s.r;</span></span>
<span class="line"><span style="color:#24292e;">  /* start in the first row */</span></span>
<span class="line"><span style="color:#24292e;">  for (C = range.s.c; C &lt;= range.e.c; ++C) {</span></span>
<span class="line"><span style="color:#24292e;">    /* walk every column in the range */</span></span>
<span class="line"><span style="color:#24292e;">    const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];</span></span>
<span class="line"><span style="color:#24292e;">    /* find the cell in the first row */</span></span>
<span class="line"><span style="color:#24292e;">    let hdr = &#39;UNKNOWN &#39; + C; // &lt;-- replace with your desired default</span></span>
<span class="line"><span style="color:#24292e;">    if (cell &amp;&amp; cell.t) hdr = XLSX.utils.format_cell(cell);</span></span>
<span class="line"><span style="color:#24292e;">    headers.push(hdr);</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">  return headers;</span></span>
<span class="line"><span style="color:#24292e;">},</span></span></code></pre></div><p>3、展示文件详情</p><p><img src="`+o+'" alt=""></p><p>3.1 表单输入玩家ID进行搜索<br> 3.2 前端分页展示当前页+符合搜索条件的数据</p><p>4、支持表格中对行数据修改</p><p><img src="'+t+'" alt=""></p><p>4.1 点击编辑，编辑行数据<br> 4.2 点击确定，修改行数据<br> 4.3 修改后调用服务端验证数据是否正确<br> 4.4 效验成功更新本地缓存的数据</p>',18)]))}const m=e(c,[["render",r]]);export{g as __pageData,m as default};
