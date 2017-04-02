import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/page/recommend'
import Entertainment from '@/page/entertainment'
import Pic from '@/page/pic'
import Joke from '@/page/joke'
import PE from '@/page/pe'
import Health from '@/page/health'
import Army from '@/page/army'

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
    },
    {
      path: '/pe',
      name: 'PE',
      component: PE
    },
    {
      path: '/health',
      name: 'Health',
      component: Health
    },
    {
      path: '/army',
      name: 'Army',
      component: Army
    }
  ]
})
