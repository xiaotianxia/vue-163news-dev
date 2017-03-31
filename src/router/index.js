import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/page/recommend'
import Entertainment from '@/page/entertainment'
import Pic from '@/page/pic'
import Joke from '@/page/joke'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
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
    },
    {
      path: '/pic',
      name: 'Pic',
      component: Pic
    },
    {
      path: '/joke',
      name: 'Joke',
      component: Joke
    }
  ]
})
