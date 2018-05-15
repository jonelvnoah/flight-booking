import Vue from 'vue'
import Router from 'vue-router'
import Passengers from '@/components/Passengers'
import Services from '@/components/Services'
import confirm from '@/components/confirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/2',
      name: 'Passengers',
      component: Passengers
    },
    {
      path: '/3',
      name: 'Services',
      component: Services
    },
    {
      path: '/4',
      name: 'confirm',
      component: confirm
    }
  ]
})
