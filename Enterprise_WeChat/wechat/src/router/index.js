import Vue from 'vue'
import Router from 'vue-router'
import Defalut from '@/components/Defalut'
import Home from '@/components/Home/home'
import Server from '@/components/Server/server'
import Online from '@/components/Online/online'
import Phone from '@/components/Phone/phone'
import Customize from '@/components/Customize/customize'
import Review from '@/components/Review/review'
import Template from '@/components/Template/Template'
import Commission from '@/components/Commission/commission'
// 新闻
import News from '@/components/Home/newsInfo'
Vue.use(Router)
// const path = ''
const path = '/ccb/qiye'
export default new Router({
    mode:'hash',
  routes: [
    //   首页
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // 新闻
    {
      path: '/news',
      name: 'news',
      component: News,
    },
    // 服务记录
    {
      path: '/server',
      name: 'server',
      component: Server,
    },
    // 线上作训
    {
      path: '/online',
      name: 'online',
      component: Online,
    },
    // 电话咨询
    {
      path: '/phone',
      name: 'phone',
      component: Phone,
    },
    // 合同模板
    {
      path: '/template',
      name: 'template',
      component: Template,
    },
    // 合同定制
    {
      path: '/customize',
      name: 'customize',
      component: Customize,
    },
    // 合同审查
    {
      path: '/review',
      name: 'review',
      component: Review,
    },
    // 案件委托
    {
      path: '/commission',
      name: 'commission',
      component: Commission,
    },
  ]
})
