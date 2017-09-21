
// 获取 openid
var getOpenID = function(callback){
    //截取code,获取openID
    var code = parseURL(location.href).params.code;
    // 获取活动id
    var couponId = splitUrl(location.href).id
    getCouponInfo(couponId)
    //  替换标题图标
    getCouponImg(couponId)
    if(!window.sessionStorage.getItem("openid")){
        $.ajax({
            url : "http://www.jy12348.com/law/if/ccborder/getOpenId",
            type : "post",
            dataType : "json",
            data : {
                code : code
            },
            success : function(res,couponId){
                var openId = res.data.openid
                var newcouponId = splitUrl(location.href).id
                log('getOpenid请求到的,openId', openId,'couponId',newcouponId)
                _initButton(openId,newcouponId)
                // 获取 openid 检查是否有手机号
                queryOpenId(openId, function(ress,openId) {
                    log('queryOpenId获取到的数据', ress,'openId', openId)
                    if (ress.data == null) {
                        // alert('queryOpenId null')
                        log('条件1，queryOpenId 返回 null,进入绑定页面，检查是否绑定')
                        showBindPhone()
                    } else if(ress != null && ress.data.myPhone == null){
                        // 返回null 进入绑定页面
                        log('条件2，返回了电话号码返回null进入绑定页面',ress)
                        // alert('您还没有注册')
                        showBindPhone()

                    } else if(ress.data != null && ress.data.myPhone) {
                        // log('手机号',tel,'判断是否绑定')
                        var tel = ress.data.myPhone
                        log('条件3，进入到领取页面','获取到的openId',openId,'couponId',newcouponId)
                        // 绑定用户手机号

                        bindOpenId(openId, tel, ress,newcouponId)
                        showCoupon()

                        // getCouponByOpenId(openId,newcouponId)
                    }

                })

            },
            error : function(XMLHttpRequest, textStatus, errorThrown) {
                alert("未知错误，请稍后重试");
            }
        });
    };
}

//  获取 标题 和 Banner 图片
var getCouponImg = function(couponId) {
    log('getCouponInfo里的 couponId', couponId)

    var url = path  + '/law/if/v2/promotionalActivity/promotionalActivityDetail'
    var sendData = {
        promotionalActivityId: couponId,
    }
    $.post(url, sendData,function(res) {
        console.log('获取到的标题和Banner', res.data)
        var img = res.data.notes
        log('img', img)
        document.querySelector('#id-banner-img').src = img
        // 这里是修改微信浏览器标题的套路
        var title = res.data.shareTitle + ''
        var $body = $('body');
        document.title = title
        var $iframe = $('<iframe src="/favicon.ico"></iframe>');
        $iframe.on('load',function() {
          setTimeout(function() {
              $iframe.off('load').remove();
          }, 0);
        }).appendTo($body);
    })
}

// 优惠券相关
//  获取优惠券信息
var getCouponInfo = function(couponId) {
    log('getCouponInfo里的 couponId', couponId)
        var url = path  + '/law/if/v2/promotionalActivity/promotionalActivityCouponList'
    var sendData = {
        promotionalActivityId: couponId,
    }
    $.post(url, sendData,function(res) {
        var info = res.data
        console.log('获取到的优惠券信息', res.data)
        var rule = info[0].notes
        ruleInfo = rule + '</br></br></br>'
        document.querySelector('.footer-info').innerHTML =  ruleInfo
        appenCoupon(info)
    })
}

// 转换时间戳
var timeChange = function(time) {
    log('time', time)
    var d = new Date(time)
    var nm = d.getFullYear()
    if (nm.length < 2) {
        nm = '0' + nm
    }
    var yt = d.getMonth() + 1
    if (yt.length < 2) {
        yt = '0' + yt
    }
    var ri = d.getDate()
    if (ri.length < 2) {
        ri = '0' + ri
    }
    var ui = d.getHours()
    if (ui.length < 2) {
        ui = '0' + ui
    }
    var ff = d.getMinutes()
    if (ff.length < 2) {
        ff = '0' + ff
    }
    var mc = d.getSeconds()
    if (mc.length < 2) {
        mc = '0' + mc
    }
    return `${nm}-${yt}-${ri}`
}

//  优惠券模板
var couponTemplate = function(couponInfo) {
    // 折扣        discountMoney
    // 优惠券名称   title
    // 有效期      endDate
    // 满xx可用    leastMoneyLimit
    var i = couponInfo
    // 有效期转换
    var obj = {
        discountMoney: i.discountMoney,
        title: i.title,
        endDate: timeChange(i.endDate),
        leastMoneyLimit : i.leastMoneyLimit ,
        // notes: i.notes + '\r\n\r\n\r\n'
    }
    log('截止日期',obj.endDate)
    var t = `
    <div class='coupon'>
        <div class="coupon-left">
            <span class="coupon-left-text">
                <img id="id-bg"src="./image/bg.png" alt="">
                <span class="coupon-left-top">优惠券</span>
                <span class="coupon-left-middle"><span class="money">￥</span>${obj.discountMoney}</span>
                <span class="line"></span>
                <span class="coupon-left-bottom">可 使 用</span>
            </span>
        </div>
        <div class="coupon-right">
            <span class="coupon-right-main">
            <span class="coupon-right-title">${obj.title}</span></br>
            <p class="coupon-right-info">有效期至 ${obj.endDate}</br>仅限用于${obj.title}</p>
            </span>
        </div>
    </div>`
    // 单独修改 活动规则
    // $('.footer-info').text(obj.notes)
    return t
}

// 页面中添加优惠券
var appenCoupon = function(arr) {
    var coupon = document.querySelector('.coupon-list')
    for (var i = 0; i < arr.length; i++) {
        var c = arr[i]
        var t = couponTemplate(c)
        coupon.insertAdjacentHTML('beforeend', t)
    }
}

/* 点击事件列表
 点击事件： 绑定用户手机号(点击领取) */
var bindButton = function(openId) {
    var button = document.querySelector('#bind-button-bind')
    button.addEventListener('click', function() {
        log('领取按钮执行次数')
        var tel = $('#bind-input-tel').val()
        // 判断手机号
        if (checkTelphone(tel)) {

            bindOpenId(openId, tel)
        } else {

            alert('请输入正确的手机号码')
        }
    })
}

// 点击事件： 发送验证码
var getVerificationCode = function() {
    $('#register-button-validae').on('click',function(){
        var url = 'http://www.jy12348.com/law/if/common/sms';
        var myphone = $('#register-input-tel').val();
        log('发送验证码前检验手机号是否正确', checkTelphone(myphone), myphone)
        if(checkTelphone(myphone)){
          $.ajax({
            url: url,
            type: 'GET',
            dataType: 'JSON',
            data: {
              myphone: myphone,
              status: 0,
              idcode: 1,
            },
            success: function(res){
                log('校对验证码返回值', res,res.data)
                if(res.resultcode === '0000'){
                alert("验证码 发送成功");
              }else{
                alert(res.resultdesc,'验证码发送错误');
              }
            }
          });
        }else{
          alert('请输入正确的手机号');
        }
      });
}

// 点击事件： 注册用户
var registerButton = function(openId) {
    log('registerButton opeinId',openId)
    var o = openId
    log('test1 oo', o)
    var url1 = 'http://www.jy12348.com/law/if/common/sms';
    var url2 = 'http://www.jy12348.com/law/if/user/register';
    // 判断手机号不为空
    $('#id-button-register').on('click', function(event,openId) {
        // 获取 input 值
        var relName = $('#register-input-tel').val()
        var myPhone = $('#register-input-tel').val()
        var password =$('#register-input-password').val()
        // 验证码
        log('点击到了 用户登录 按钮','relName', relName,'myPhone', myPhone, 'password', password)
        if (relName == '' || myPhone =='') {
            return alert('请填写手机号和密码')
        } else {
            if (checkTelphone(myPhone)) {
            // 密码不为空
                log('手机号码正确')
                if (password != '' && password.length >= 6) {
                    log('密码正确')
                    var validate = $('#register-input-shild').val()
                    // 判断验证码
                    if (validate != '') {
                        log('验证码正确，不为空')
                        $.ajax({
                            url: url1,
                            type: 'GET',
                            dataType: 'JSON',
                            async: false,
                            data: {
                              myphone: myPhone,
                              smsnum: validate
                            },
                            success: function(res, openId){
                                log('验证结果',res)
                                if(res.resultcode === '0000'){
                               // 验证通过后发送数据到后端注册
                                    log('验证码正确，发送注册ajax,接受到的 openId',openId)
                                    log('test2 oo', o)
                                    register(myPhone, password, relName,o)
                                    bindOpenId(o, myPhone,couponId)

                                } else {
                                    alert('验证码错误')
                                }
                            }
                        })
                    } else {
                        alert('没有输入验证码')
                    }
                } else {
                alert('密码长度不少于6位')
            }
        } else {
            alert('手机号错误')
        }
        }
    })
}

// 点击事件：领取优惠券 （暂时不使用，进入页面后直接获取）
var getCoupon = function(openId,couponId) {
    $('#coupon-button-coupon').on('click', function() {
        log('点击到了立即使用')
        getCouponByOpenId(openId,couponId)
    })
}

//  点击事件： 立即使用 ，点击转跳新页面
var jumpPageButton = function() {
    $('#coupon-button-coupon').on('click', function() {
        // location.href = 'http://www.jy12348.com/ccb/coupon/test.html'
        log('点击到了')
        browserRedirect()
    })
}

// 解析字符串 分解成 object
var splitUrl = function(url) {
    log('url', url)
    url = url.split('?')[1].split('&')
    var obj = {}
    url.map((e) => {
        var [k,v] = e.split('=')
        obj[k] = v
    })
    log('splitUrl', obj,'id',obj.id)
    return obj
}

// 初始化
var _initButton = function(openId,couponId) {
    log('initButton openId',openId )
    // 点击事件
    registerButton(openId)
    bindButton(openId)
    getVerificationCode(openId)
    // 跳转页面
    jumpPageButton()
    // getCoupon(openId)
}

// 显示领券界面
var showCoupon = function() {
    $('.bindphone').hide()
    $('.register').hide()
    $('.coupon-bg').show()
}

// 显示注册界面
var showRegister = function() {
    alert('您还没有注册')
    $('.bindphone').hide()
    $('.register').show()
    $('.coupon-bg').hide()
}

// 显示绑定界面
var showBindPhone = function() {
    $('.bindphone').show()
    $('.register').hide()
    $('.coupon-bg').hide()
}

// 页面读取完成后执行
var hiddenAll = function() {
    $('.bindphone').hide()
    $('.register').hide()
    $('.coupon-bg').hide()
}

// 判断手机打开appid
let browserRedirect = function () {
        let sUserAgent = navigator.userAgent.toLowerCase();
        let bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        let bIsMidp = sUserAgent.match(/midp/i) == "midp";
        let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        let bIsAndroid = sUserAgent.match(/android/i) == "android";
        let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        // let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        // document.writeln("您的浏览设备为：");
        if (bIsIpad || bIsIphoneOs ) {
                // window.location.href = "ydjyLawWirelessVersion://"
                // window.setTimeout(function() {
                window.location.href ="https://itunes.apple.com/cn/app/id1061528563"
                // }, 2000)
        } else if (bIsAndroid){
            // alert('是安卓')
                // window.location.href = "lvshitongxing://";//android app协议
                // window.setTimeout(function() {
                window.location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.fjjy.lawapp";//android 下载地址
            // }, 2000)
        }
}

// 刷新页面的时候隐藏所有
hiddenAll()
log('页面隐藏了')
$(document).ready(function(){
    if(isWechat()) {
        getOpenID(function(data) {
        })
    } else {
        hiddenAll()
        alert('不是在微信')

    }
});
