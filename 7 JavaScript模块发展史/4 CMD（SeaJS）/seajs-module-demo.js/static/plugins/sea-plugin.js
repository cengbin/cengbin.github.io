(function () {
  var listener = {
    resolve (data) {
      console.log("resolve:", data);
    },
    load (data) {
      console.log("load:", data);
    },
    fetch (data) {
      console.log("fetch:", data);
    },
    request (data) {
      console.log("request:", data);
    },
    define (data) {
      console.log("define:", data);
    },
    exec (data) {
      console.log("exec:", data);
    },
    config (data) {
      console.log("config:", data);
    },
    error (data) {
      console.log("error:", data);
    }
  }

  seajs.on("resolve", listener.resolve);//       -- 将 id 解析成为 uri 时触发
  seajs.on("load", listener.load);//          -- 开始加载文件时触发
  seajs.on("fetch", listener.fetch);//         -- 具体获取某个 uri 时触发
  seajs.on("request", listener.request);//       -- 发送请求时触发
  seajs.on("define", listener.define);//         -- 执行 define 方法时触发
  seajs.on("exec", listener.exec);//         -- 执行 module.factory 时触发
  seajs.on("config", listener.config);//         -- 调用 seajs.config 时触发
  seajs.on("error", listener.error);//          -- 加载脚本文件出现 404 或其他错误时触发
}());


