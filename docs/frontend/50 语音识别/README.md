# 语音唤醒

比如说“小爱同学”"天猫精灵“”小度小度“，就能唤醒语音程序，然后就可以跟它沟通了。

要在浏览器端实现语音关键词唤醒，您可以使用Web Speech API和SpeechRecognition库。 以下是一个使用SpeechRecognition库实现语音唤醒的简单示例：

```
<script type="text/javascript">
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

  const recognition = new SpeechRecognition();
  recognition.lang = 'zh-CN';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const keywords = ['小王', '你好'];

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.trim().toLowerCase();
    if (keywords.some(keyword => transcript.includes(keyword))) {
      // 唤醒词被检测到，执行相关操作
      console.log('我被唤醒了!');
    }
  };

  recognition.onerror = (event) => {
    console.error('Recognition error:', event.error);
  };

  recognition.onend = () => {
    // 在结束后重新开始语音识别以持续监听
    recognition.start();
  };

  // 启动语音识别
  recognition.start();

</script>
```

这个例子中，我们创建了一个SpeechRecognition实例，并设置了识别语言，interimResults和maxAlternatives属性。然后，我们定义了一组可能的唤醒词，并在onresult处理程序中检查识别结果是否包含其中任何一个唤醒词。如果检测到唤醒词，则执行相应的操作。最后，在onend处理程序中，我们重新启动语音识别以持续监听。

### 参考

MDN [Web Speech API](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Speech_API)

[W3C 草案](https://wicg.github.io/speech-api/#dom-speechrecognitionresult-isfinal)