const obj1 = {
  name: 'wl',
  age: 12,
  address: {
    city: 'jx'
  }
}

const obj2 = deepClone(obj1)
obj2.address.city = 'zg'
console.log('1---', obj1.address.city);  // jx
console.log('2---', obj2.address.city);  // zg

function deepClone(obj = {}) {
  // obj是null或者不是对象和数组,不是的话说明是普通数据类型,直接返回
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    // hasOwnProperty() 方法返回一个布尔值，
    // 表示对象自有属性（而不是继承来的属性）中是否具有指定的属性。
    if (obj.hasOwnProperty(key)) {
      // result中添加属性与值，递归，如果值是null或者不是对象和数组就直接添加
      result[key] = deepClone(obj[key])
    }
  }
  // 返回结果
  return result
}

