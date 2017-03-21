import Vue from 'vue'
import Router from 'vue-router'
import House from '@/components/House'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'House',
      component: House
    }
  ]
})
