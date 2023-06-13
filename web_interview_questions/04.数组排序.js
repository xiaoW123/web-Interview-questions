let arr = [2, 3, 4, 5, 1, 21, 34]
function mp(arr) {
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

console.log(mp(arr), arr);

// 快速排序
// 原理：随机取一个元素对数组进行比较，小的放左边，大的放右边
function kspx(arr) {
  if (arr.length == 1 || arr.length == 0) {
    return arr
  }

  let index = Math.floor(arr.length / 2) // 获取中间元素的索引
  let currentItem = arr.splice(index, 1) // 取出这个元素，该数组中就没有该元素了
  let left = [], right = []
  // 遍历数组，小于等于的元素放左边
  arr.forEach(item => {
    if (item <= currentItem) {
      left.push(item)
    } else {
      right.push(item)
    }
  })
  // 第1轮比较完毕后，再用递归比较left与right中的数组，直到left，right为 [ ]
  // 比较完后拼接
  return kspx(left).concat(currentItem).concat(kspx(right))
}
console.log(kspx(arr));