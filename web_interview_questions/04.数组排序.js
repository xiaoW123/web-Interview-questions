// 数组排序
let arr = [1, 2, 5, 3, 6, 9, 8, 7]

// 冒泡排序
function sort1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}
sort1(arr)


// 快速排序
function sort2(arr) {
  if (arr.length == 1 || arr.length == 0) return arr
  const index = Math.floor(arr.length / 2)
  const currentItem = arr.splice(index, 1)
  let left = [], rigth = []
  arr.forEach(item => {
    if (item <= currentItem) {
      left.push(item)
    }
    if (item > currentItem) {
      rigth.push(item)
    }
  });
  return sort2(left).concat(currentItem).concat(sort2(rigth))
}

const newArr = sort2(arr)
console.log(newArr);