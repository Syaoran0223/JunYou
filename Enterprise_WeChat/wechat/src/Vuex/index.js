import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
//  引入 ajax
import ajax from '../tool/ajax'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    temp1: 1,
    temp2: 2,
    AccessToken: '' ,
    text:'text',
  },
})
