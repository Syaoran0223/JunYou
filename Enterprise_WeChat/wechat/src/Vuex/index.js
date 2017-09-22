import Vue from 'vue'
import Vuex from 'vuex'
//  引入 ajax
// import ajax from './tool/ajax'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // ajax 请求 path
        // path : 'http://www.linruoyu.top:8085',
        path : 'http://192.168.1.66:8086',
        // 获取 用户信息相关
        AccessToken: '' ,
        code : '',
        request:'',
        // 首页轮播图列表
        slideList: '',
        // 审查 点击发布弹窗
        alertShow: false,
        uploadShow: false,
    },
    mutations: {
        accessTokenSave(state, AccessToken) {
            state.AccessToken = AccessToken
        },
        codeSave(state, code) {
            state.code = code
        },
        requestSave(state, request) {
            state.request = request
        },
        slideListsave(state, slideList) {
            state.slideList = slideList
        },
        alertShowSave(state, alertShow) {
            state.alertShow = alertShow
        },
        uploadShowSave(state, uploadShow) {
            state.uploadShow = uploadShow
        }
    }
})
