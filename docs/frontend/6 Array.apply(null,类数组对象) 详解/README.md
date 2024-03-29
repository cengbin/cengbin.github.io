# 关于Array.apply(null,类数组对象)

```
let arr1 = new Array(2)
console.log(arr1) // [empty × 2], 注意此处输出的是[empty × 2],是因为数组虽然被创建，但是该数组的元素并没有被初始化。
console.log(arr1[0]); // undefined, 因为数组下标0还未初始化,访问不存在的属性返回undefined
console.log(arr1[1]);

/**
 * 1、apply(),的第二个参数不光可以是数组还可以是个类数组对象（即包含length属性，且length属性值是个数字的对象），所有其实{length：2}也是一个类数组对象，只是没有进行初始化而已，取值的话返回undefined。
 * 2、调用Array.apply(null,类数组对象），就是把数组对象初始化了，并返回了一个数组。
 * */
let arr2 = Array.apply(null, {length: 2})
console.log(arr2) // [undefined, undefined]

// map() 函数并不会遍历数组中没有初始化或者被delete的元素（有相同限制还有forEach, reduce方法）
var arr3 = Array.apply(null, {length: 2}).map((value,index)=>index);
console.log(arr3)

// fill() 方法用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为array.length）内的全部元素。它返回修改后的数组。
var arr4 = new Array(10).fill(null).map((value,index)=>index);
console.log(arr4)
```

