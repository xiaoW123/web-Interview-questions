// 数组去重
// 1.使用filter-indexOf
let arr = [1, 2, 2, 33, 33, 1, 2, 32312, 123]
function unique1(arr) {
  return arr.filter((item, index) => {
    // 第一次出现的索引===元素索引
    return arr.indexOf(item, 0) === index
  })
}
// const newArr = unique1(arr)
// console.log(newArr);

// 2.使用Set
function unique2(arr) {
  return Array.from(new Set(arr))
}
// const newArr = unique2(arr)
// console.log(newArr);

// 3.for循环
function unique3(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}
// const newArr = unique3(arr)
// console.log(newArr);