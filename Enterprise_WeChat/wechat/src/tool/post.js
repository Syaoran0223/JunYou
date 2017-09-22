export default function(request) {
    let promise = new Promise(function(resolve, reject) {
        $.post(request.url, request.data, e=> {
            resolve(e)
        })
    });
    return  promise
}
