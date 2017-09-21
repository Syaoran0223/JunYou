export default function(request) {
    let req = {
         url: request.url,
         // data 传对象
         data: JSON.stringify(request.data) || null,
         method: (request.method || 'POST').toUpperCase(),
         header: request.header || {},
         contentType: request.contentType || 'application/json',
         callback: request.callback,
     }
     let r = new XMLHttpRequest()
     let promise = new Promise(function(success, fail) {
         r.open(req.method, req.url, true)
         r.setRequestHeader('Content-Type', req.contentType)
         for (var key in req.header) {
             r.setRequestHeader(key, req.header[key])
         }
         r.onreadystatechange = function() {
             if (r.readyState === 4) {
                 let res = r.response
                 // 回调函数
                 if (typeof req.callback === 'function') {
                     req.callback(res)
                 }
                 // Promise 成功
                 success(res)
             }
         }
         r.onerror = function (err) {
             fail(err)
         }
         if (req.method === 'GET') {
             r.send()
         } else {
             // POST
             r.send(req.data)
         }
     })
     return promise
}
// export default Ajax
// var request = {
//     url : 'http://59.110.223.182:8085/weixin/AccessToken',
//     method: 'GET',
// }
// Ajax(request).then(res => {
//         console.log('res', res)
// })
