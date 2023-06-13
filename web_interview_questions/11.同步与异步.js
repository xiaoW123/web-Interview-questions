console.log(1)
console.log(2)
setTimeout(function () {
  console.log(3);
}, 1000)

setTimeout(function () {
  console.log(4);
}, 0)

console.log(1)