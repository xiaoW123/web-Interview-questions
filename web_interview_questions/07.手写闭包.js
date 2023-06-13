// function fn() {
//   let num = 10
//   function fun() {
//     console.log(num);
//   }
//   return fun
// }

// let f = fn()
// f() // 10,访问到了内部的num变量

// // 函数作为返回值
// function create() {
//   let a = 100
//   return function () {
//     console.log(a);
//   }
// }

// let fn = create()
// const a = 200
// fn()  // 100

// 函数作为参数被传递
function print(fn) {
  let a = 200
  fn()
}
let a = 100
function fn() {
  console.log(a); // 100
}
print(fn)