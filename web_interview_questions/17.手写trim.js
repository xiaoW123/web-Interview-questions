let s = ' 123 123 asdas '
console.log(s);
function newTrim(str) {
  return str.replace(/^\s+/, '').replace(/\s+$/, '')
}

const s1 = newTrim(s)
console.log(s1);