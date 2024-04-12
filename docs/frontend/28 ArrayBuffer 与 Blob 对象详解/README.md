# ArrayBuffer 与 Blob对象

## 1、ArrayBuffer 对象

**ArrayBuffer** 对象是 ES6 才纳入正式 ECMAScript 规范，是 JavaScript **操作二进制数据**的一个接口。**ArrayBuffer** 对象是以数组的语法处理二进制数据，也称二进制数组。

### 1. 概念介绍
**ArrayBuffer** 对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（**TypedArray**视图和**DataView**视图）来读写，视图的作用是以指定格式解读二进制数据。

## 2、Blob对象

**Blob** 全称：Binary Large Object （二进制大型对象）。

### 1. 概念介绍

Blob 对象表示一个二进制文件的数据内容，通常用来读写文件，比如一个图片文件的内容就可以通过 Blob 对象读写。

与 ArrayBuffer 区别：

* Blob 用于操作二进制文件内容
* ArrayBuffer 用于操作内存

### 2.应用场景

#### 2.1 获取文件信息
File 实例对象是一个特殊的 Blob 实例，增加了 name 和 lastModifiedDate 属性。

```
// HTML 代码如下
// <input type="file" accept="image/*" multiple onchange="fileinfo(this.files)"/>

function fileinfo(files) {
  for (let i = 0; i < files.length; i++) {
    let f = files[i];
    console.log(
      f.name, // 文件名，不含路径
      f.size, // 文件大小，Blob 实例属性
      f.type, // 文件类型，Blob 实例属性
      f.lastModifiedDate // 文件的最后修改时间
    );
  }
}
```

#### 2.2 下载文件

在 AJAX 请求中，指定 responseType 属性为 blob ，皆可以下下载一个 Blob 对象。

```
function getBlob(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    callback(xhr.response);
  }
  xhr.send(null);
}
```

然后，xhr.response 拿到的就是一个 Blob 对象。

#### 2.3 生成 URL

浏览器允许使用 URL.createObjectURL() 方法，针对 Blob 对象生成一个临时URL，以便于某些 API 使用。

如作为图片预览的 URL。

这个 URL 以 blob:// 开头，表明对应一个 Blob 对象，协议头后面是一个识别符，用来唯一对应内存里面的 Blob 对象。这一点与 data://URL（URL 包含实际数据）和 file://URL（本地文件系统里面的文件）都不一样。

```
const droptarget = document.getElementById('droptarget');

droptarget.ondrop = function (e) {
  const files = e.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    let type = files[i].type;
    if (type.substring(0,6) !== 'image/')
      continue;
    let img = document.createElement('img');
    img.src = URL.createObjectURL(files[i]);
    img.onload = function () {
      this.width = 100;
      document.body.appendChild(this);
      URL.revokeObjectURL(this.src);
    }
  }
}
```

#### 2.4 读取文件

取得 Blob 对象以后，可以通过 FileReader 对象，读取 Blob 对象的内容，即文件内容。

FileReader 对象提供四个方法。将 Blob 对象作为参数传入，然后以指定的格式返回。

* FileReader.readAsText()：返回文本，需要指定文本编码，默认为 UTF-8。
* FileReader.readAsArrayBuffer()：返回 ArrayBuffer 对象。
* FileReader.readAsDataURL()：返回 Data URL。
* FileReader.readAsBinaryString()：返回原始的二进制字符串。

下面是 FileReader.readAsText() 方法的例子，用来读取文本文件：

```
// HTML 代码如下
// <input type='file' onchange='readfile(this.files[0])'></input>
// <pre id='output'></pre>
function readfile(f) {
  let reader = new FileReader();
  reader.readAsText(f);
  reader.onload = function () {
    let text = reader.result;
    let out = document.getElementById('output');
    out.innerHTML = '';
    out.appendChild(document.createTextNode(text));
  }
  reader.onerror = function(e) {
    console.log('Error', e);
  };
}
```

下面是 FileReader.readAsArrayBuffer() 方法的例子，用于读取二进制文件：

```
// HTML 代码如下
// <input type="file" onchange="typefile(this.files[0])"></input>
function typefile(file) {
  // 文件开头的四个字节，生成一个 Blob 对象
  let slice = file.slice(0, 4);
  let reader = new FileReader();
  // 读取这四个字节
  reader.readAsArrayBuffer(slice);
  reader.onload = function (e) {
    let buffer = reader.result;
    // 将这四个字节的内容，视作一个32位整数
    let view = new DataView(buffer);
    let magic = view.getUint32(0, false);
    // 根据文件的前四个字节，判断它的类型
    switch(magic) {
      case 0x89504E47: file.verified_type = 'image/png'; break;
      case 0x47494638: file.verified_type = 'image/gif'; break;
      case 0x25504446: file.verified_type = 'application/pdf'; break;
      case 0x504b0304: file.verified_type = 'application/zip'; break;
    }
    console.log(file.name, file.verified_type);
  };
}
```

### 参考

[https://juejin.cn/post/6844904022206332941](https://juejin.cn/post/6844904022206332941)
