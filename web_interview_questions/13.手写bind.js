// bind在Function.prototype上
// function fn1(a, b, c) {
//   // this：{x:200} 经过下面bind改变this，本该this：window
//   console.log('fn1---', this);
//   console.log(a, b, c);
//   return 'this is fn1'
// }
// const fn2 = f1.bind({ x: 200 }, 10, 20, 30)
// const res = fn2()
// console.log('fn2---', res);

// 模拟 bind
Function.prototype.bind1 = function () {
  // 把参数列表转换为数组
  const args = Array.from(arguments)

  // 在原数组中删除这一项，返回删除的这一项
  const t = args.shift()

  // 谁调用的bind1，这个this就是谁的this
  const self = this

  // 调用bind返回一个改变this的函数
  return function () {
    // 类似 this.apply(t, args)
    // fn1的this指向了args的第一项，并调用
    return self.apply(t, args)
  }
}