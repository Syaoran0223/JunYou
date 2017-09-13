import Vue from 'vue'
import Vuex from 'vuex'
//  引入 ajax
// import ajax from './tool/ajax'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        AccessToken: '' ,
        test:'1',
        path : 'http://59.110.223.182:8085'
    },
    mutations: {
        accessTokenSave(state, AccessToken) {
            state.AccessToken = AccessToken
        }
    }
})
