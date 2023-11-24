// 冒泡排序
function bubble_sort(array) {
  let n = array.length;
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 1; j <= n - i; j++) {
      let prevItem = array[j - 1]
      let curItem = array[j]
      let prevValue = Number(prevItem.text.split(" ")[0])
      let curValue = Number(curItem.text.split(" ")[0])
      if (!isNaN(prevValue) && !isNaN(curValue)) {
        if (prevValue > curValue) {
          let temp = array[j - 1];
          array[j - 1] = array[j]
          array[j] = temp;
        }
      }
    }
  }
}

module.exports = {
  bubble_sort
}