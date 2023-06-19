/**
 * 
 * @param {*} element - 绑定在哪个DOM上
 * @param {*} type - 事件类型
 * @param {*} selector - 事件代理this
 * @param {*} fn - 事件回调函数
 */

function bindEvent(element, type, selector, fn) {
  // 如果没有传入代理对象
  if (fn == null) {
    fn = selector
    selector = null
  }
  element.addEventListener(type, e => {
    let target
    if (selector) {
      target = e.target
      if (target.matches(selector)) {
        fn.call(target, e)
      }
    } else {
      fn(e)
    }
  })
}