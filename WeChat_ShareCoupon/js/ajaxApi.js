const log = console.log.bind(console, '***')
// const path = 'http://jysvn.ngrok.cc'
// const path = 'http://47.93.124.245:8080'
// const path = 'http://www.jy12348.com'
const path = 'http://192.168.1.101:8080/'

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

// 根据 openId 获取用户详情
var queryOpenId = function (openId, callback) {
    var url = path + '/law/if/v2/user/queryByOpenId'
    var sendData = {
        openId: openId
    }
    log('queryOpenId发送的 sendData', sendData)
    $.post(url, sendData, function(res){
        callback(res,sendData)
    })
}

// 绑定手机号
var bindOpenId = function(openId, tel,ress,newcouponId) {
    log('开始绑定手机号码','bindOpenId 接受到的',openId)
    var url = path + '/law/if/v2/user/bindOpenId'
    var sendData = {
        openId: openId.openId || openId,
        tel: tel,
    }
    log('bindOpenId sendData', sendData)
    $.post(url,sendData, function(res) {
        log('这是bindOpenId返回的数据',res.data,'这是couponId',newcouponId)
        if (res.data == null) {
            // 进入绑定页面
            // alert('您还没有注册1')
            log('用户没有绑定，进入到注册页面',res.data)
            showRegister()
        } else {
            // 进入领取页面
            log('已经注册成功进去到领取页面',res.data)
            // getCouponInfo(couponId
            var user = res.data
            log('领取页面user', user,'myPhone', user.myPhone)
            var tempPhone = `优惠券已经放入账号: ${user.myPhone}`
            document.querySelector('.coupon-info').innerHTML = tempPhone

            getCouponByOpenId(openId,newcouponId)
            showCoupon()

        }

    })
}

// 注册用户
var register = function(myPhone, password, relName,openId,couponId) {
    log('register 注册用户的openid', openId)
    var url = path +'/law/if/v2/user/register'
    var sendData = {
        myPhone: myPhone,
        password:  hex_md5(password).toUpperCase(),
        relName: relName
    }
    $.post(url, sendData, function(res) {
        log('register sendData', sendData,'返回了res', res)
        var t = `优惠券已经放入账号: ${sendData.myPhone}`
        var tel = sendData.myPhone
        bindOpenId(openId, tel,couponId)
        log('用户注册绑定 bindOpenId')
        document.querySelector('.coupon-info').innerHTML = t
        showCoupon()
        log('debug 重复测试')
        getCouponByOpenId(openId)
    })
}

// 通过 opeinId 获取优惠券
var getCouponByOpenId = function (openId, couponId) {
    var promotionalActivityId = splitUrl(location.href).id
    var url = path + '/law/if/v2/coupon/getCouponByOpenId'
    var sendData = {
        openId:  openId.openId || openId,
        promotionalActivityId: promotionalActivityId,
    }
    log('通过 getCouponByOpenId 发送的数据','sendData', sendData)
    $.post(url, sendData, function(res,openId){
        log('执行了重复2','您已经领取到优惠券了 返回值', res, 'sendData', sendData)
        // alert('您已经领取到优惠券了','openId',openId)

    })
}
