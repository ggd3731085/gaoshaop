import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    component: Home
  }, {
      path: '/catgory',
      component: Category
  }, {
      path: '/cart',
      component: Cart
  }, {
      path: '/search',
      component: SearchPage
  }, {
      path: '/mine',
      component: Mine
  }, {
      path: '/login',
      component: Login
  }, {
      path: '/register',
      component: Reg
  }, {
      path: '/catgory/:id',
      component: Category
  }, {
      path: '/detail/:id',
      component: GoodsDetail
  }, {
      path: '/',
      redirect: '/home'
  }, {
      path: '*',
      redirect: '/home'
  }]
})
