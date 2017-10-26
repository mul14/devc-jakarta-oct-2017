import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/Home'),
    },
    {
      path: '/WhatIsVue',
      name: 'WhatIsVue',
      component: () => import('@/pages/WhatIsVue'),
    },
    {
      path: '/CurrentState',
      name: 'CurrentState',
      component: () => import('@/pages/CurrentState'),
    },
    {
      path: '/Why',
      name: 'Why',
      component: () => import('@/pages/Why'),
    },
    {
      path: '/Concise',
      name: 'Concise',
      component: () => import('@/pages/Concise'),
    },
    {
      path: '/Freedom',
      name: 'Freedom',
      component: () => import('@/pages/Freedom'),
    },
    {
      path: '/Docs',
      name: 'Docs',
      component: () => import('@/pages/Docs'),
    },
    {
      path: '/Fin',
      name: 'Fin',
      component: () => import('@/pages/Fin'),
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/404'),
    },
  ],
})
