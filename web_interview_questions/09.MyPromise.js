/**
 * @description MyPromise
 * @author WL
 */
// const p = new MyPromise((reslove,reject)=>{})

class MyPromise {
  state = 'pending' // 状态：'pending' 'fulfilled' 'rejected'
  value = undefined // 成功后的值
  reason = undefined // 失败的原因

  resolveCallbacks = [] // 存储成功的回调（在pending状态下存储）
  rejectCallbacks = [] // 存储失败的回调（在pending状态下存储）

  constructor(fn) {
    // resolve方法
    const resolveHandler = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        // 当我们我fulfilled状态时，执行成功的回调
        this.resolveCallbacks.forEach(fn => fn(this.value))
      }
    }
    // reject方法
    const rejectHandler = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        // 当我们我rejected状态时，执行失败的回调
        this.rejectCallbacks.forEach(fn => fn(this.reason))
      }
    }
    try {
      // MyPromise 传入一个函数，函数两个参数也是函数
      fn(resolveHandler, rejectHandler)
    } catch (err) {
      rejectHandler(err)
    }
  }
  then(fn1, fn2) {
    // 这里我们不知道状态是fulfilled，还是rejected状态
    // fulfilled执行fn1，rejecte执行fn2
    // 所以我们先把fn1，fn2存储起来
    // .then就是每个状态返回一个Promise
    fn1 = typeof fn1 === 'function' ? fn1 : (v) => v  // 判断fn1是否为function
    fn2 = typeof fn2 === 'function' ? fn2 : (e) => e
    /* pending状态 */
    if (this.state === 'pending') {
      // 如果状态为pending时，存储fn1，fn2
      const p1 = new MyPromise((resolve, reject) => {
        // 存储fn1
        this.resolveCallbacks.push(() => {
          // 把一个函数push进去，当我们执行这个函数时，表示已经进入了fulfilled状态
          try {
            const newValue = fn1(this.value)
            resolve(newValue)
          } catch (err) {
            reject(err)
          }
        })
        // 存储fn2
        this.rejectCallbacks.push(() => {
          try {
            const newReason = fn2(this.reason)
            reject(newReason)
          }
          catch (err) {
            reject(err)
          }
        })
      })
      return p1
    }
    /* fulfilled状态 */
    if (this.state === 'fulfilled') {
      const p1 = new MyPromise((reslove, reject) => {
        try {
          // fn1执行正常，就把值reslove
          const newValue = fn1(this.value)
          reslove(newValue) // newValue给到了：p1.then()  
        } catch (err) {
          reject(err)
        }
      })
      return p1
    }
    /* rejected状态 */
    if (this.state === 'rejected') {
      const p1 = new MyPromise((resolve, reject) => {
        try {
          const newReason = fn2(this.reason)
          reject(newReason)
        } catch (err) {
          reject(err)
        }
      })
      return p1
    }
  }
  catch(fn) {
    return this.then(null, fn)
  }
}
// 静态方法
MyPromise.resolve = function (value) {
  return new MyPromise((reslove, reject) => reslove(value))
}
MyPromise.reject = function (reason) {
  return new MyPromise((reslove, reject) => reject(reason))
}
MyPromise.all = function (promiseList = []) {
  const p1 = new MyPromise((resolve, reject) => {
    const result = []  // 存储promiseList所有结果
    const length = promiseList.length
    let resolveCount = 0  // 计数

    promiseList.forEach(p => {
      p.then(data => {
        result.push(data)
        resolveCount++
        if (resolveCount == length) {
          // 表示执行完后、
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p1
}
MyPromise.race = function (promiseList = []) {
  let resolved = false // 标记
  const p1 = new MyPromise((resolv, reject) => {
    promiseList.forEach(p => {
      p.then(data => {
        // 只要第一个
        if (!resolved) {
          resolv(data)
          resolved = true
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
  return p1
}