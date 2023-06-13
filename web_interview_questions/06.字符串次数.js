// 查找字符串中某字符出现的次数
let str = 'qweqweasdaeesfdsdfw'
let sum = 0
// for (let i = 0; i < str.length; i++) {
//   if (str[i] == 'q') {
//     sum++
//   }
// }
// console.log(sum);


// 求一个字符串中出现次数最多的字符及次数
const obj = {}
for (let j = 0; j < str.length; j++) {
  let strs = str[j]
  if (obj[strs]) {
    obj[strs]++
  } else {
    obj[strs] = 1
  }
}
console.log(obj);