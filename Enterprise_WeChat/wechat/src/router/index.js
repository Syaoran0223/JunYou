import Vue from 'vue'
import Router from 'vue-router'
import Defalut from '@/components/Defalut'
import Home from '@/components/Home/home'
import Server from '@/components/Server/server'
import My from '@/components/My/my'
import MyTemp1 from '@/components/My/my-temp1'

Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/server',
      name: 'server',
      component: Server,
    },

    {
      path: '/my',
      component: My,
      children: [
          {
              path:'/my/child',
              component: MyTemp1,
          }
      ]
    },


  ]
})
