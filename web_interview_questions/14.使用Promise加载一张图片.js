function loadimg(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img') // 创建img标签
    // 当src赋值img成功加载时，resolve(img)
    img.onload = () => {
      resolve(img)
    }
    // 当图片加载失败时
    img.onerror = () => {
      reject(new Error(`图片加载失败 ${src} `))
    }
    img.src = src   // 赋值src属性
  })
}