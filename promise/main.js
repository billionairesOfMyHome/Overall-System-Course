ajax = (method, url, options)=>{
  const {success, fail} = options // 析构赋值，别再问
  const request = new XMLHttpRequest()
  request.open(method, url)
  request.onreadystatechange = ()=>{
    // throw new Error('当前时间为偶数无法执行任务')
    if(request.readyState === 4){
      // 成功就调用 success，失败就调用 fail
      if(request.status < 400){
        success.call(null, request.response)
      }else if(request.status >= 400){
        throw new Error('当前时间为偶数无法执行任务')
        fail.call(null, request, request.status)
      }
    }
  }
  request.send()
}

getJSON.onclick = () => {
  console.log('getJSON clicked');
  ajax('get', '/5.json', { 
    success(response){
      console.log('success');
      console.log(response);
    }, 
    fail: (request, status)=>{
      console.log('fail');
      console.log(request);
    } 
  }) // 左边是 function 缩写，右边是箭头函数，记下来别再问
}
