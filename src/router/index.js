import Vue from 'vue'
import Router from 'vue-router'
import DatabaseDock from '@/components/DatabaseDock'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DatabaseDock',
      component: DatabaseDock
    }
  ]
})
