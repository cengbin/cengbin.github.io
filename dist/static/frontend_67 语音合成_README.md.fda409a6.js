import{_ as t,o as s,c as a,Q as n}from"./chunks/framework.0f4e1e9e.js";const e="/static/波.ea7a7010.jpg",l="/static/采样率.acd0eca1.jpg",p="/static/音频上下文.a7212d84.jpg",o="/static/音频可视化.9c1a3500.jpg",A=JSON.parse('{"title":"语音合成","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/67 语音合成/README.md","filePath":"frontend/67 语音合成/README.md"}'),r={name:"frontend/67 语音合成/README.md"},i=n('<h1 id="语音合成" tabindex="-1">语音合成 <a class="header-anchor" href="#语音合成" aria-label="Permalink to &quot;语音合成&quot;">​</a></h1><h2 id="音频基础知识了解-波、采样、采样率、采样位深度、声道、pcm" tabindex="-1">音频基础知识了解：波、采样、采样率、采样位深度、声道、PCM <a class="header-anchor" href="#音频基础知识了解-波、采样、采样率、采样位深度、声道、pcm" aria-label="Permalink to &quot;音频基础知识了解：波、采样、采样率、采样位深度、声道、PCM&quot;">​</a></h2><h3 id="波" tabindex="-1">波 <a class="header-anchor" href="#波" aria-label="Permalink to &quot;波&quot;">​</a></h3><p>中学物理有介绍过，声音是由物体振动产生的，这个振动经由介质传导到我们的耳朵中引起耳膜振动从而让我们听见声音。</p><p>我们可以用波形来描述振动，其中横轴是时间，纵轴是振动的位移，也就是离开原点的距离。</p><p>振动的两个关键属性是频率和振幅，频率是指一秒钟振动多少次，对应于音高，频率越高声音越尖锐刺耳。</p><p>振幅则表示最大的位移值，对应于音量，振幅越大声音越响。</p><p><img src="'+e+'" alt=""></p><p>图片来源：<a href="https://cjting.me/2021/08/07/fourier-transform-and-audio-visualization/" target="_blank" rel="noreferrer">https://cjting.me/2021/08/07/fourier-transform-and-audio-visualization/</a></p><p>波形 = 时间+位移</p><h3 id="采样" tabindex="-1">采样 <a class="header-anchor" href="#采样" aria-label="Permalink to &quot;采样&quot;">​</a></h3><p>因为声音是一个随时间变化的连续函数，任意一段间隔内都有无穷多个值，而无穷多的数据是没办法存储在计算机中的。</p><p>想要存储，我们就需要将它离散化变成离散序列，具体的方法就是采样，使用固定的间隔对函数进行求值。</p><p>通过采样，我们将一个无尽序列变成了一个有限序列，其中每一个值叫做样本，这样就可以方便地在计算机中存储了。</p><p>采样的关键参数有两个，分别是采样频率和采样深度。</p><h3 id="采样频率-采样率" tabindex="-1">采样频率（采样率） <a class="header-anchor" href="#采样频率-采样率" aria-label="Permalink to &quot;采样频率（采样率）&quot;">​</a></h3><p>采样率(sampleRate), 采样率就是每秒从连续信号中提取并组成离散信号的采样个数，它用赫兹（Hz）来表示，说的简单一点就是每秒在每个声道上采样的个数。</p><p><img src="'+l+`" alt=""></p><p>图片来源：<a href="https://blog.csdn.net/qq_41824928/article/details/108124382" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_41824928/article/details/108124382</a></p><p>蓝色代表模拟音频信号，红色的点代表采样得到的量化数值。采样频率越高，样本越多，红色的间隔就越密集，记录这一段音频信号所用的数据量就越大，同时音频质量也就越高，也更接近原始的声音。</p><p>根据奈奎斯特理论，采样频率只要不低于音频信号最高频率的两倍，就可以无损失地还原原始的声音。通常人耳能听到频率范围大约在20Hz～20kHz之间的声音，为了保证声音不失真，采样频率应在40kHz以上。常用的音频采样频率有：8kHz、11.025kHz、22.05kHz、16kHz、37.8kHz、44.1kHz、48kHz、96kHz、192kHz等。（8k=8000，44.1k=44100)</p><p>通常人耳能听到频率范围大约在20Hz～20kHz之间的声音，根据香农采样定理(也叫奈奎斯特采样定理)，理论上来说采样率大于40kHz的音频格式都可以称之为无损格式，为了保证声音不失真，采样频率应在40kHz以上。常用的音频采样频率有：8kHz、11.025kHz、22.05kHz、16kHz、37.8kHz、44.1kHz、48kHz、96kHz、192kHz等。</p><h3 id="采样位深度-采样大小值" tabindex="-1">采样位深度（采样大小值） <a class="header-anchor" href="#采样位深度-采样大小值" aria-label="Permalink to &quot;采样位深度（采样大小值）&quot;">​</a></h3><p>位深度，也叫位宽，量化精度，上图中，每一个红色的采样点，都需要用一个数值来表示大小，这个数值的数据类型大小可以是：4bit、8bit、16bit、32bit等等，位数越多，表示得就越精细，声音质量自然就越好，当然，数据量也会成倍增大。常见的位宽有：8bit 或者 16bit。</p><p>假设我们用 16bit 采样深度和 44100 的采样频率，那么一段一秒钟的声音就变成了一个 44100 长度的 int16 数组。</p><p>假如采样频率是 44100，一共有 10639873 个样本，使用 int16 进行存储，计算可知这首歌的时间是 10639873/44100 = 241.266 秒。</p><p>得到采样值数组以后，接下来如何存储这个数组就是编码的范畴了。我们可以直接存，也可以采用某种算法压缩以后再存。各种各样的办法，对应着各种各样的音频格式，比如 MP3, AAC, WAV 等。</p><h3 id="声道" tabindex="-1">声道 <a class="header-anchor" href="#声道" aria-label="Permalink to &quot;声道&quot;">​</a></h3><p>由于音频的采集和播放是可以叠加的，因此，可以同时从多个音频源采集声音，并分别输出到不同的扬声器，故声道数一般表示声音录制时的音源数量或回放时相应的扬声器数量。单声道（Mono）和双声道（Stereo）比较常见，顾名思义，前者的声道数为1，后者为2。</p><h3 id="pcm" tabindex="-1">PCM <a class="header-anchor" href="#pcm" aria-label="Permalink to &quot;PCM&quot;">​</a></h3><p>PCM 是指脉冲编码调制（Pulse Code Modulation）</p><p>把声音从模拟信号转化为数字信号的技术，即对声音进行采样、量化的过程，经过PCM处理后的数据，是最原始的音频数据，即未对音频数据进行任何的编码和压缩处理。</p><p>在计算机应用中，能够达到最高保真水平的就是PCM编码，被广泛用于素材保存及音乐欣赏，CD、DVD以及我们常见的 WAV文件中均有应用。因此，PCM约定俗成了无损编码，因为PCM代表了数字音频中最佳的保真水准，并不意味着PCM就能够确保信号绝对保真，PCM也只能做到最大程度的无限接近。</p><ul><li>单个音频采样用得较多位深度的是16位，当然也可以使用8位，24位，甚至32位。</li><li>声道就是同时采集音频的通道数，用的较多的是2声道，也有单声道，5.1声道,7.1声道等。</li><li>采样频率就是1秒钟采样的个数，一般用44.1kHz，也可以是8kHz,11.025kHz,48kHz,96kHz等。</li><li>一帧应该是指持续采样时间，这个是很灵活的可以使用20ms，也可是200ms，一般来说时间越短延时就越少。</li></ul><p>这样一帧的PCM数据大小就很容易计算出来：PCMBufferSize = 采样率<em>采样时间</em>采样位深/8*通道数</p><p>要算一个PCM音频流的码率是一件很轻松的事情，采样率值×采样大小值×声道数 bps。一个采样率为44.1KHz，采样大小为16bit，双声道的PCM编码的WAV文件，它的数据速率则为 44.1K×16×2 =1411.2 Kbps。</p><h3 id="傅里叶变换" tabindex="-1">傅里叶变换 <a class="header-anchor" href="#傅里叶变换" aria-label="Permalink to &quot;傅里叶变换&quot;">​</a></h3><p><a href="https://cjting.me/2021/08/07/fourier-transform-and-audio-visualization/" target="_blank" rel="noreferrer">https://cjting.me/2021/08/07/fourier-transform-and-audio-visualization/</a></p><h2 id="音频上下文-audiocontext-详解" tabindex="-1">音频上下文 AudioContext 详解 <a class="header-anchor" href="#音频上下文-audiocontext-详解" aria-label="Permalink to &quot;音频上下文 AudioContext 详解&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const audioContext = new AudioContext();</span></span>
<span class="line"><span style="color:#e1e4e8;">console.log(audioContext);</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// audioWorklet: AudioWorklet {}</span></span>
<span class="line"><span style="color:#e1e4e8;">// baseLatency: 0.005333333333333333</span></span>
<span class="line"><span style="color:#e1e4e8;">// currentTime: 1.5946666666666667</span></span>
<span class="line"><span style="color:#e1e4e8;">// destination: AudioDestinationNode {maxChannelCount: 2, context: AudioContext, numberOfInputs: 1, numberOfOutputs: 0, channelCount: 2, …}</span></span>
<span class="line"><span style="color:#e1e4e8;">// listener: AudioListener {positionX: AudioParam, positionY: AudioParam, positionZ: AudioParam, forwardX: AudioParam, forwardY: AudioParam, …}</span></span>
<span class="line"><span style="color:#e1e4e8;">// onstatechange: null</span></span>
<span class="line"><span style="color:#e1e4e8;">// sampleRate: 48000</span></span>
<span class="line"><span style="color:#e1e4e8;">// state: &quot;running&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const audioContext = new AudioContext();</span></span>
<span class="line"><span style="color:#24292e;">console.log(audioContext);</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// audioWorklet: AudioWorklet {}</span></span>
<span class="line"><span style="color:#24292e;">// baseLatency: 0.005333333333333333</span></span>
<span class="line"><span style="color:#24292e;">// currentTime: 1.5946666666666667</span></span>
<span class="line"><span style="color:#24292e;">// destination: AudioDestinationNode {maxChannelCount: 2, context: AudioContext, numberOfInputs: 1, numberOfOutputs: 0, channelCount: 2, …}</span></span>
<span class="line"><span style="color:#24292e;">// listener: AudioListener {positionX: AudioParam, positionY: AudioParam, positionZ: AudioParam, forwardX: AudioParam, forwardY: AudioParam, …}</span></span>
<span class="line"><span style="color:#24292e;">// onstatechange: null</span></span>
<span class="line"><span style="color:#24292e;">// sampleRate: 48000</span></span>
<span class="line"><span style="color:#24292e;">// state: &quot;running&quot;</span></span></code></pre></div><ul><li>baseLatency: 返回 AudioContext 将音频从 AudioDestinationNode 传递到音频子系统的处理延迟的秒数</li><li>sampleRate: 采样率</li><li>currentTime: 只读，从 0 开始，只增不减，以秒为单位</li><li>state: 表示当前的状态</li><li>suspended: 调用了audioContext.suspend()</li><li>running: 正常运行</li><li>closed: 调用了audioContext.close()</li><li>onstatechange: 状态改变事件监听</li><li>audioWorklet: AudioWorklet 和 AudioWorkletNode 有关（下面解释 TODO:）</li><li>destination: 返回 AudioDestinationNode 对象，表示 context 的最终节点，一般是音频渲染设备</li><li>listener: 返回 AudioListener 对象，可以用来实现 3D 音频空间化</li></ul><h3 id="source、audionode与destination" tabindex="-1">source、AudioNode与destination <a class="header-anchor" href="#source、audionode与destination" aria-label="Permalink to &quot;source、AudioNode与destination&quot;">​</a></h3><p><img src="`+p+`" alt=""></p><p>图片来源：<a href="https://juejin.cn/post/6844904049972609037" target="_blank" rel="noreferrer">https://juejin.cn/post/6844904049972609037</a></p><p>Web Audio是提供了很多Audio Node</p><ul><li>音频源Audio Node</li><li>处理音效的Audio Node</li><li>输出音频的Audio Node</li><li>数据分析类Audio Node</li><li>JS操纵音频 Audio Node</li></ul><h3 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h3><ul><li>audioContext.createBufferSource() 该节点代表音源，创建后需要往其buffer属性上挂载需要播放的数据。 <ul><li>loop: 是否为循环播放</li><li>loopStart/loopEnd: 如果设置了循环播放，那么就会在此区间内循环播放</li><li>playbackRate: 播放倍速，可以通过source.playbackRate.value = 2的方式来修改值，同时上还有minValue和maxValue来表示调整区间</li><li>play: play的参数 ([when][, offest][, duration]) <ul><li>when是何时被播放，如果when小于audioContext.currentTime或者是0，声音会被立即播放</li><li>duration播放的持续时间，如果没有设置就会播放到最后</li></ul></li><li>stop: 停止播放</li><li>onended: 播放结束事件</li></ul></li><li>audioContext.createMediaElementSource <ul><li>接收一个audio或者video元素</li></ul></li><li>audioContext.createMediaStreamSource <ul><li>接收一个MediaStream对象</li></ul></li><li>audioContext.createConstantSource</li></ul><h3 id="audionode" tabindex="-1">AudioNode <a class="header-anchor" href="#audionode" aria-label="Permalink to &quot;AudioNode&quot;">​</a></h3><ul><li>audioContext.createGain() <ul><li>该节点代表音量控制，可以通过设置gainNode.gain.value的值来设置音量，值的范围是 [0, 1]</li></ul></li><li>AudioContext.createAnalyser() <ul><li>可以用来获取音频时间和频率数据（时域和频域），以及实现数据可视化，它不对音频有任何修改作用，仅仅是分析。</li><li>分析器节点的功能通过（快速傅里叶变换[FFT]）将现实中的时域图变成频率图</li></ul></li></ul><h3 id="audiodestinationnode" tabindex="-1">AudioDestinationNode <a class="header-anchor" href="#audiodestinationnode" aria-label="Permalink to &quot;AudioDestinationNode&quot;">​</a></h3><ul><li>audioContext.createMediaStreamDestination() <ul><li>该节点代表声音输出，destinationNode在创建audioContext时会自动挂载到audioContext.destination上，所以一般不需要创建。</li></ul></li></ul><h2 id="音频播放与可视化" tabindex="-1">音频播放与可视化 <a class="header-anchor" href="#音频播放与可视化" aria-label="Permalink to &quot;音频播放与可视化&quot;">​</a></h2><p>文本转语音播放并可视化，实现流程：</p><p>ajax =&gt; 原始数据(ArrayBuffer) =&gt; 解码后数据(AudioBuffer) =&gt; AudioBufferSourceNode(把解码后的数据挂载到音源上) =&gt; 通过audioContext.destination交由硬件播放 <a href="https://juejin.cn/post/6962380242497306638" target="_blank" rel="noreferrer">https://juejin.cn/post/6962380242497306638</a></p><p>首先创建上下文，拿到音频源，音频源与分析器连接，分析器在与扬声器连接进行输出，这样就形成了一个音频源到扬声器的输出通路</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;!doctype html&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;title&gt;Title&lt;/title&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/head&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;button onclick=&quot;stop()&quot;&gt;停止&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;button onclick=&quot;play()&quot;&gt;播放&lt;/button&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;canvas&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;script src=&quot;./axios.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">			let data = {</span></span>
<span class="line"><span style="color:#e1e4e8;">				text: \`我花了 666 块住进了一个房号是 666 的房间。我觉得有 2-4 的把握，这场比分是 2-4。人要是行，干一行行一行，行行都行，要是不行，干一行不行一行，行行不行。\`</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">			// let data = { text: \`你好\` }</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			const audioContext = new (window.AudioContext || webkitAudioContext)()</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			function play() {</span></span>
<span class="line"><span style="color:#e1e4e8;">				axios({</span></span>
<span class="line"><span style="color:#e1e4e8;">					url: &#39;https://best-chatai.tz12306.com/newapi/person/tts/get&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">					method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">					responseType: &#39;arraybuffer&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">					data</span></span>
<span class="line"><span style="color:#e1e4e8;">				}).then(</span></span>
<span class="line"><span style="color:#e1e4e8;">					(response) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">						console.log({ response })</span></span>
<span class="line"><span style="color:#e1e4e8;">						var arraybuffer = response.data</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">						audioContext.decodeAudioData(arraybuffer, (audioBuffer) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">              var source = audioContext.createBufferSource()</span></span>
<span class="line"><span style="color:#e1e4e8;">							source.buffer = audioBuffer</span></span>
<span class="line"><span style="color:#e1e4e8;">							source.onended = () =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">								console.log(&#39;ended&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">							}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">							var gain = audioContext.createGain()</span></span>
<span class="line"><span style="color:#e1e4e8;">							gain.gain.value = 0.6</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">							var analyser = audioContext.createAnalyser()</span></span>
<span class="line"><span style="color:#e1e4e8;">							analyser.fftSize = 128</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">							source.connect(gain)</span></span>
<span class="line"><span style="color:#e1e4e8;">							gain.connect(analyser)</span></span>
<span class="line"><span style="color:#e1e4e8;">							analyser.connect(audioContext.destination)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">							source.start(0)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">							const cvs = document.querySelector(&#39;canvas&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;">							const ctx = cvs.getContext(&#39;2d&#39;)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">							function render() {</span></span>
<span class="line"><span style="color:#e1e4e8;">								const bufferLength = analyser.frequencyBinCount</span></span>
<span class="line"><span style="color:#e1e4e8;">								const dataArray = new Uint8Array(bufferLength)</span></span>
<span class="line"><span style="color:#e1e4e8;">								analyser.getByteFrequencyData(dataArray)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">								const { width, height } = cvs</span></span>
<span class="line"><span style="color:#e1e4e8;">								ctx.clearRect(0, 0, width, height)</span></span>
<span class="line"><span style="color:#e1e4e8;">								const len = dataArray.length / 1.5</span></span>
<span class="line"><span style="color:#e1e4e8;">								const barWidth = width / len</span></span>
<span class="line"><span style="color:#e1e4e8;">								ctx.fillStyle = &#39;#78c5F7&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">								for (let i = 0; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#e1e4e8;">									const data = dataArray[i]</span></span>
<span class="line"><span style="color:#e1e4e8;">									const barHeight = (data / 255) * height</span></span>
<span class="line"><span style="color:#e1e4e8;">									const x = i * barWidth</span></span>
<span class="line"><span style="color:#e1e4e8;">									const y = height - barHeight</span></span>
<span class="line"><span style="color:#e1e4e8;">									ctx.fillRect(x, y, barWidth - 2, barHeight)</span></span>
<span class="line"><span style="color:#e1e4e8;">								}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">								requestAnimationFrame(render)</span></span>
<span class="line"><span style="color:#e1e4e8;">							}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">							render()</span></span>
<span class="line"><span style="color:#e1e4e8;">						})</span></span>
<span class="line"><span style="color:#e1e4e8;">					},</span></span>
<span class="line"><span style="color:#e1e4e8;">					(err) =&gt; {</span></span>
<span class="line"><span style="color:#e1e4e8;">						console.log({ err })</span></span>
<span class="line"><span style="color:#e1e4e8;">					}</span></span>
<span class="line"><span style="color:#e1e4e8;">				)</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			function stop() {</span></span>
<span class="line"><span style="color:#e1e4e8;">				audioContext.suspend()</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">		&lt;/script&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">	&lt;/body&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/html&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;!doctype html&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;head&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;meta charset=&quot;UTF-8&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;title&gt;Title&lt;/title&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/head&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;body&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;button onclick=&quot;stop()&quot;&gt;停止&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;button onclick=&quot;play()&quot;&gt;播放&lt;/button&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;canvas&gt;&lt;/canvas&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;script src=&quot;./axios.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">		&lt;script&gt;</span></span>
<span class="line"><span style="color:#24292e;">			let data = {</span></span>
<span class="line"><span style="color:#24292e;">				text: \`我花了 666 块住进了一个房号是 666 的房间。我觉得有 2-4 的把握，这场比分是 2-4。人要是行，干一行行一行，行行都行，要是不行，干一行不行一行，行行不行。\`</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">			// let data = { text: \`你好\` }</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			const audioContext = new (window.AudioContext || webkitAudioContext)()</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			function play() {</span></span>
<span class="line"><span style="color:#24292e;">				axios({</span></span>
<span class="line"><span style="color:#24292e;">					url: &#39;https://best-chatai.tz12306.com/newapi/person/tts/get&#39;,</span></span>
<span class="line"><span style="color:#24292e;">					method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#24292e;">					responseType: &#39;arraybuffer&#39;,</span></span>
<span class="line"><span style="color:#24292e;">					data</span></span>
<span class="line"><span style="color:#24292e;">				}).then(</span></span>
<span class="line"><span style="color:#24292e;">					(response) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">						console.log({ response })</span></span>
<span class="line"><span style="color:#24292e;">						var arraybuffer = response.data</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">						audioContext.decodeAudioData(arraybuffer, (audioBuffer) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">              var source = audioContext.createBufferSource()</span></span>
<span class="line"><span style="color:#24292e;">							source.buffer = audioBuffer</span></span>
<span class="line"><span style="color:#24292e;">							source.onended = () =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">								console.log(&#39;ended&#39;)</span></span>
<span class="line"><span style="color:#24292e;">							}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">							var gain = audioContext.createGain()</span></span>
<span class="line"><span style="color:#24292e;">							gain.gain.value = 0.6</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">							var analyser = audioContext.createAnalyser()</span></span>
<span class="line"><span style="color:#24292e;">							analyser.fftSize = 128</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">							source.connect(gain)</span></span>
<span class="line"><span style="color:#24292e;">							gain.connect(analyser)</span></span>
<span class="line"><span style="color:#24292e;">							analyser.connect(audioContext.destination)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">							source.start(0)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">							const cvs = document.querySelector(&#39;canvas&#39;)</span></span>
<span class="line"><span style="color:#24292e;">							const ctx = cvs.getContext(&#39;2d&#39;)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">							function render() {</span></span>
<span class="line"><span style="color:#24292e;">								const bufferLength = analyser.frequencyBinCount</span></span>
<span class="line"><span style="color:#24292e;">								const dataArray = new Uint8Array(bufferLength)</span></span>
<span class="line"><span style="color:#24292e;">								analyser.getByteFrequencyData(dataArray)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">								const { width, height } = cvs</span></span>
<span class="line"><span style="color:#24292e;">								ctx.clearRect(0, 0, width, height)</span></span>
<span class="line"><span style="color:#24292e;">								const len = dataArray.length / 1.5</span></span>
<span class="line"><span style="color:#24292e;">								const barWidth = width / len</span></span>
<span class="line"><span style="color:#24292e;">								ctx.fillStyle = &#39;#78c5F7&#39;</span></span>
<span class="line"><span style="color:#24292e;">								for (let i = 0; i &lt; len; i++) {</span></span>
<span class="line"><span style="color:#24292e;">									const data = dataArray[i]</span></span>
<span class="line"><span style="color:#24292e;">									const barHeight = (data / 255) * height</span></span>
<span class="line"><span style="color:#24292e;">									const x = i * barWidth</span></span>
<span class="line"><span style="color:#24292e;">									const y = height - barHeight</span></span>
<span class="line"><span style="color:#24292e;">									ctx.fillRect(x, y, barWidth - 2, barHeight)</span></span>
<span class="line"><span style="color:#24292e;">								}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">								requestAnimationFrame(render)</span></span>
<span class="line"><span style="color:#24292e;">							}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">							render()</span></span>
<span class="line"><span style="color:#24292e;">						})</span></span>
<span class="line"><span style="color:#24292e;">					},</span></span>
<span class="line"><span style="color:#24292e;">					(err) =&gt; {</span></span>
<span class="line"><span style="color:#24292e;">						console.log({ err })</span></span>
<span class="line"><span style="color:#24292e;">					}</span></span>
<span class="line"><span style="color:#24292e;">				)</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			function stop() {</span></span>
<span class="line"><span style="color:#24292e;">				audioContext.suspend()</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">		&lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292e;">	&lt;/body&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/html&gt;</span></span></code></pre></div><p><strong>音频可视化</strong></p><h5 id="创建analysernode对象" tabindex="-1">创建AnalyserNode对象 <a class="header-anchor" href="#创建analysernode对象" aria-label="Permalink to &quot;创建AnalyserNode对象&quot;">​</a></h5><p><img src="`+o+`" alt=""></p><ul><li>AudioContext 的 createAnalyser（）方法能创建一个 AnalyserNode，可以用来获取音频时间和频率数据，以及实现数据可视化。</li></ul><p><code>const analyser = ctx.createAnalyser();</code></p><h5 id="设置-fftsize-属性" tabindex="-1">设置 fftSize 属性 <a class="header-anchor" href="#设置-fftsize-属性" aria-label="Permalink to &quot;设置 fftSize 属性&quot;">​</a></h5><ul><li>AnalyserNode 接口的 fftsize 属性的值是一个无符号长整型的值，表示（信号）样本的窗口大小。当执行快速傅里叶变换（Fast FourierTransfor （FFT））时，这些（信号）样本被用来获取频域数据。</li><li>fftSize 属性的值必须是从32到32768范围内的2的非零幂；其默认值为2048。</li></ul><p><code>analyser. fftSize = 512;</code></p><ul><li>定义一个8位无符号整型数组，他的长度为波形的一半，因为波形的前后一半和后一半是相同的，所以获取一半即可此处用的是analyser中的方法，便于理解也可以使用analyser.fftSize/2结果是一样的</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">const bufferLength = analyserNode.frequencyBinCount</span></span>
<span class="line"><span style="color:#e1e4e8;">const dataArray = new Uint8Array(bufferLength)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">const bufferLength = analyserNode.frequencyBinCount</span></span>
<span class="line"><span style="color:#24292e;">const dataArray = new Uint8Array(bufferLength)</span></span></code></pre></div><h5 id="获取数据绘制图形" tabindex="-1">获取数据绘制图形 <a class="header-anchor" href="#获取数据绘制图形" aria-label="Permalink to &quot;获取数据绘制图形&quot;">​</a></h5><p>然后使用requestAnimationFrame循环操作，通过getByteFrequencyData方法获取播放时分析器分析出的数据存入dataArray中，绘图柱状图即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">function render() {</span></span>
<span class="line"><span style="color:#e1e4e8;">	analyserNode.getByteFrequencyData(dataArray)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	requestAnimateFrameId = requestAnimationFrame(render)</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">render()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">function render() {</span></span>
<span class="line"><span style="color:#24292e;">	analyserNode.getByteFrequencyData(dataArray)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	requestAnimateFrameId = requestAnimationFrame(render)</span></span>
<span class="line"><span style="color:#24292e;">}</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">render()</span></span></code></pre></div><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h3><p><a href="https://segmentfault.com/a/1190000018605820" target="_blank" rel="noreferrer">AJAX 的进阶使用（Blob、ArrayBuffer、FormData、Document、JSON、Text）</a></p><p><a href="https://www.noxxxx.com/%E5%89%8D%E7%AB%AF%E9%9F%B3%E9%A2%91%E5%90%88%E6%88%90.html" target="_blank" rel="noreferrer">前端音频合成 连接一</a></p><p><a href="https://cloud.tencent.com/developer/article/2023232" target="_blank" rel="noreferrer">前端音频合成 连接二</a></p><p>我想问一下阿里语音AI语音合成功能，如果后端是流式返回二进制音频段，前端可以一边接收一边播放音频吗 <a href="https://developer.aliyun.com/ask/577562" target="_blank" rel="noreferrer">https://developer.aliyun.com/ask/577562</a></p><p>原生音频API将赋予前端新的能力，你能想到的音频处理都能实现【渡一教育】 <a href="https://www.bilibili.com/video/BV1JH4y1275k/?spm_id_from=333.880.my_history.page.click&amp;vd_source=7fcc9fcab35e85781576cd997ae41a88" target="_blank" rel="noreferrer">https://www.bilibili.com/video/BV1JH4y1275k/?spm_id_from=333.880.my_history.page.click&amp;vd_source=7fcc9fcab35e85781576cd997ae41a88</a></p><p>音频波形 制作参考。 <a href="https://github.com/HaloMartin/MCVoiceWave/tree/f6dc28975fbe0f7fc6cc4dbc2e61b0aa5574e9bc?tab=readme-ov-file" target="_blank" rel="noreferrer">https://github.com/HaloMartin/MCVoiceWave/tree/f6dc28975fbe0f7fc6cc4dbc2e61b0aa5574e9bc?tab=readme-ov-file</a></p><p>音频可视化：采样、频率和傅里叶变换 <a href="https://cjting.me/2021/08/07/fourier-transform-and-audio-visualization/" target="_blank" rel="noreferrer">https://cjting.me/2021/08/07/fourier-transform-and-audio-visualization/</a></p><p><a href="https://blog.csdn.net/qq_41824928/article/details/108124382" target="_blank" rel="noreferrer">https://blog.csdn.net/qq_41824928/article/details/108124382</a> 音频相关基础知识（采样率、位深度、通道数、PCM、AAC）</p><p>P5.js 实现音频可视化 <a href="https://www.youtube.com/watch?v=24JFvG50zkc" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=24JFvG50zkc</a><a href="https://www.youtube.com/watch?v=jEwAMgcCgOA&amp;t=65s" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=jEwAMgcCgOA&amp;t=65s</a></p><p><strong>其他</strong></p><p>深度解读 TTS 技术的原理及挑战 <a href="https://www.shenzhenware.com/articles/13355" target="_blank" rel="noreferrer">https://www.shenzhenware.com/articles/13355</a></p><p>p5.js 是个 JavaScript 创意编程程式库，其专注在让编程更易于使用及更加广泛的包容艺术家、设计师、教育家、初学者以及任何其他人！p5.js 是个免费及开源的软件因为我们相信所有人都应该能自由使用软件及用于学习软件的工具。 <a href="https://p5js.org/zh-Hans/" target="_blank" rel="noreferrer">https://p5js.org/zh-Hans/</a></p>`,83),c=[i];function d(u,y,h,f,g,b){return s(),a("div",null,c)}const k=t(r,[["render",d]]);export{A as __pageData,k as default};
