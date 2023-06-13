const arr = [1, 2, 2, 4, 5, 6, 5, 5, 5, 3, 2, 2, 1]
function unique(arr) {
  // 返回元素第一次出现的索引的元素
  return arr.filter((item, index) => {
    return arr.indexOf(item, 0) === index
  })
}
console.log(unique(arr));

function uniaue2(arr) {
  // 利用Set去重，再把其转换为真的数组
  return Array.from(new Set(arr))
}
console.log(uniaue2(arr));

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
console.log(unique3(arr));