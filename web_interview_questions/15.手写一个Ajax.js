function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.send(null)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(new Error('请求发生异常'))
      }
    }
  })
}


// Get
const xhr = new XMLHttpRequest()
xhr.open('GET', url, true) // true表示异步请求
xhr.send(null)  // 发送请求数据
// 调用onreadystatechange事件
// readyState === 4 表示Ajax请求完成 
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // xhr.responseText 响应的数据,数据是JSON字符串
      console.log(xhr.responseText);
    }
  }
}



// POST
const postData = {
  userName: 'wl',
  password: 'xxx'
}

const xhr = new XMLHttpRequest()
xhr.open('POST', url, true)
xhr.send(JSON.stringify(postData))  // 发送请求数据 JSON数据
// 调用onreadystatechange事件
// readyState === 4 表示Ajax请求完成 
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // xhr.responseText 响应的数据,数据是JSON字符串
      console.log(xhr.responseText);
    }
  }
}

// POST以查询字符串请求数据
// 添加以下两句
// 1.设置Content-Type属性，固定写法
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urrlencoded');
// 2.调用 send函数，传入参数字符串（必须以查询字符串的方式），发起Ajax请求  
xhr.send('id=1&name=wl');   