console.log('\n我是文档完成解析后，触发 DOMContentLoaded 事件前执行的代码')
const a = document.querySelector('a');
console.log(a);
console.log(new Date().valueOf())