import Vue from 'vue'
import Router from 'vue-router'
import routerconf from './router.config'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scorllBehavior: () => ({
      y: 0
  }),
  routerconf
})
