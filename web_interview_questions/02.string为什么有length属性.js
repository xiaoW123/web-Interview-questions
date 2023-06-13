let str = 'wlnb'
console.log(str);
// console.log(str.length);  // 4
// js 内部进行了包装
let oldStr = new String('wlnb')
str = oldStr
console.log(str);
console.log(str.length);
oldStr = null // 销毁
