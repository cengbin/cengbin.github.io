import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.0f4e1e9e.js";const _=JSON.parse('{"title":"语音唤醒","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/66 语音识别.md","filePath":"frontend/66 语音识别.md"}'),p={name:"frontend/66 语音识别.md"},l=a(`<h1 id="语音唤醒" tabindex="-1">语音唤醒 <a class="header-anchor" href="#语音唤醒" aria-label="Permalink to &quot;语音唤醒&quot;">​</a></h1><p>比如说“小爱同学”&quot;天猫精灵“”小度小度“，就能唤醒语音程序，然后就可以跟它沟通了。</p><p>要在浏览器端实现语音关键词唤醒，您可以使用Web Speech API和SpeechRecognition库。 以下是一个使用SpeechRecognition库实现语音唤醒的简单示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  const recognition = new SpeechRecognition();</span></span>
<span class="line"><span style="color:#e1e4e8;">  recognition.lang = &#39;zh-CN&#39;;</span></span>
<span class="line"><span style="color:#e1e4e8;">  recognition.interimResults = false;</span></span>
<span class="line"><span style="color:#e1e4e8;">  recognition.maxAlternatives = 1;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  const keywords = [&#39;小王&#39;, &#39;你好&#39;];</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  recognition.onresult = (event) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const transcript = event.results[0][0].transcript.trim().toLowerCase();</span></span>
<span class="line"><span style="color:#e1e4e8;">    if (keywords.some(keyword =&gt; transcript.includes(keyword))) {</span></span>
<span class="line"><span style="color:#e1e4e8;">      // 唤醒词被检测到，执行相关操作</span></span>
<span class="line"><span style="color:#e1e4e8;">      console.log(&#39;我被唤醒了!&#39;);</span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  recognition.onerror = (event) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    console.error(&#39;Recognition error:&#39;, event.error);</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  recognition.onend = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 在结束后重新开始语音识别以持续监听</span></span>
<span class="line"><span style="color:#e1e4e8;">    recognition.start();</span></span>
<span class="line"><span style="color:#e1e4e8;">  };</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  // 启动语音识别</span></span>
<span class="line"><span style="color:#e1e4e8;">  recognition.start();</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/script&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;script type=&quot;text/javascript&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  const recognition = new SpeechRecognition();</span></span>
<span class="line"><span style="color:#24292e;">  recognition.lang = &#39;zh-CN&#39;;</span></span>
<span class="line"><span style="color:#24292e;">  recognition.interimResults = false;</span></span>
<span class="line"><span style="color:#24292e;">  recognition.maxAlternatives = 1;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  const keywords = [&#39;小王&#39;, &#39;你好&#39;];</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  recognition.onresult = (event) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    const transcript = event.results[0][0].transcript.trim().toLowerCase();</span></span>
<span class="line"><span style="color:#24292e;">    if (keywords.some(keyword =&gt; transcript.includes(keyword))) {</span></span>
<span class="line"><span style="color:#24292e;">      // 唤醒词被检测到，执行相关操作</span></span>
<span class="line"><span style="color:#24292e;">      console.log(&#39;我被唤醒了!&#39;);</span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  recognition.onerror = (event) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    console.error(&#39;Recognition error:&#39;, event.error);</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  recognition.onend = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">    // 在结束后重新开始语音识别以持续监听</span></span>
<span class="line"><span style="color:#24292e;">    recognition.start();</span></span>
<span class="line"><span style="color:#24292e;">  };</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  // 启动语音识别</span></span>
<span class="line"><span style="color:#24292e;">  recognition.start();</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;/script&gt;</span></span></code></pre></div><p>这个例子中，我们创建了一个SpeechRecognition实例，并设置了识别语言，interimResults和maxAlternatives属性。然后，我们定义了一组可能的唤醒词，并在onresult处理程序中检查识别结果是否包含其中任何一个唤醒词。如果检测到唤醒词，则执行相应的操作。最后，在onend处理程序中，我们重新启动语音识别以持续监听。</p><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><p>MDN <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Speech_API" target="_blank" rel="noreferrer">Web Speech API</a></p><p><a href="https://wicg.github.io/speech-api/#dom-speechrecognitionresult-isfinal" target="_blank" rel="noreferrer">W3C 草案</a></p>`,8),o=[l];function t(c,r,i,y,g,d){return n(),e("div",null,o)}const u=s(p,[["render",t]]);export{_ as __pageData,u as default};
