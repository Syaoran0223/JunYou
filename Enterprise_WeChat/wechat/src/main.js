// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Default from '@/components/Defalut'
import router from './router'
import store from './Vuex/'
import Ajax from '@/tool/ajax'
// 解决 300ms 点击延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)
// 引入 lib-flexble
import 'lib-flexible'
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Default/>',
  components: { Default }
})
