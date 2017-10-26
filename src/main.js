// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'

sync(store, router)

Vue.config.productionTip = false

Vue.component('BigDisplay', () => import('@/components/BigDisplay'))
Vue.component('BigTitle', () => import('@/components/BigTitle'))
Vue.component('SubTitle', () => import('@/components/SubTitle'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
})
