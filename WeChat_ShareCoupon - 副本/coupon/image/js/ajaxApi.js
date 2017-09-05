const log = console.log.bind(console, '***')
const path = 'http://jysvn.ngrok.cc'
// const path = 'http://www.jy12348.com'
// var tel = $('#id-input-tel').val()
// var shild = $('#id-input-shild').val()
// var password = $('#id-input-password').val()

// 检查名字
var checkName = function(name){
    var re_name = /^[\u2E80-\uFE4F]{2,}$/;
    return re_name.test(name);
};

//检查电话后
var checkTelphone = function(tel){
    var re_tel = /^1[3|4|5|7|8][0-9]{9}$/;
    return re_tel.test(tel);
};

// 判断是否是微信浏览器
function isWechat(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger"){
        return true;
    }else{
        return false;
    }
}

//解析url
function parseURL(url) {
   var a =  document.createElement('a');
   a.href = url;
   return {
       source: url,
       protocol: a.protocol.replace(':',''),
       host: a.hostname,
       port: a.port,
       query: a.search,
       params: (function(){
           var ret = {},
               seg = a.search.replace(/^\?/,'').split('&'),
               len = seg.length, i = 0, s;
           for (;i<len;i++) {
               if (!seg[i]) { continue; }
               s = seg[i].split('=');
               ret[s[0]] = s[1];
           }
           return ret;
       })(),
       file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
       hash: a.hash.replace('#',''),
       path: a.pathname.replace(/^([^\/])/,'/$1'),
       relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
       segments: a.pathname.replace(/^\//,'').split('/')
   };
}

// 获取 openid
// var getOpenID = function(callback){
//     //截取code,获取openID
//     var code = parseURL(location.href).params.code;
//     if(!window.sessionStorage.getItem("openid")){
//         $.ajax({
//             url : "http://www.jy12348.com/law/if/ccborder/getOpenId",
//             type : "post",
//             dataType : "json",
//             data : {
//                 code : code
//             },
//             success : function(res){
//                 log('code', code, 'res', res)
//                 // var openId = res.data.openId
//                 // log('更新了文件 openId', openId)
//                 // callback(openId)
//                 // getCouponByOpenId(openId)
//                 // var result = openId
//                 // return openId
//             },
//             error : function(XMLHttpRequest, textStatus, errorThrown) {
//                 alert("未知错误，请稍后重试");
//             }
//         });
//     };
// }

// 根据 openId 获取用户详情
var queryOpenId = function (openId, callback) {
    var url = path + '/law/if/v2/user/queryByOpenId'
    var sendData = {
        openId: openId
    }
    // log('queryByOpenId 发送的 sendData', sendData)
    $.post(url, sendData, function(res){
        // log('queryByOpenId的返回值', res)
        callback(res)
    })
}

// 绑定手机号
var bindOpenId = function(openId, tel) {
    var url = path + '/law/if/v2/user/bindOpenId'
    // var tel = $('#id-input-tel').val()
    var sendData = {
        openId: openId,
        tel: tel,
    }
    log('sendData', sendData)
    $.post(url,sendData, function(res) {
        log('bindOpenId 返回值', res.data)
    })
}

// 注册用户
var register = function(myPhone, password, relName) {
    var url = path +'/law/if/v2/user/register'
    var sendData = {
        myPhone: myPhone,
        password:  hex_md5(password).toUpperCase(),
        relName: relName
    }
    $.post(url, sendData, function(res) {
        log('register sendData', sendData,'返回了res', res)
        $('.register').hide()
        log('执行了隐藏')
        $('.coupon-bg').show()
        var t = `优惠券已经放入账号: ${myPhone}`
        document.querySelector('.coupon-info').innerHTML = t
    })
}

// 用户领取优惠券
var getCoupon = function(userId, promotionalActivityId) {
    var url = path + '/law/if/v2/coupon/getCoupon'
    var sendData = {
        userId: userId,
        promotionalActivityId: promotionalActivityId
    }
    $.post(url, sendData, function(res) {
        log('getCoupon res', res.data)
    })
}

// 通过 opeinId 获取优惠券
var getCouponByOpenId = function (openId) {
    var url = path + '/law/if/v2/coupon/getCouponByOpenId'
    var sendData = {
        openId: openId,
        promotionalActivityId: 2
    }
    $.post(url, sendData, function(res){
        log('成功获取验证码，返回值', res.data, 'sendData', sendData)
    })
}

// 查询个人中心优惠列表
var userCenterCouponList = function(pageNo, pageSize, userId) {
    var url = path + '/law/if/v2/coupon/userCenterCouponList'
    var sendData = {
        pageNo: pageNo,
        pageSize: pageSize,
        userId: userId,
    }
    $.post(url, sendData, function(res) {
        log('res', res.data)
    })
}

var queryByOpenId
