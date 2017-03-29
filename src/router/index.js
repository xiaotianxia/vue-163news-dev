import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/page/recommend'
import Entertainment from '@/page/entertainment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/entertainment',
      name: 'Entertainment',
      component: Entertainment
    }
  ]
})
