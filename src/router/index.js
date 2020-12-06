import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Reg from '@/components/Reg.vue'
import Mine from '@/components/Mine.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scorllBehavior: () => ({
    y: 0
  }),
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/register',
    name: 'Reg',
    component: Reg
  }, {
    path: '/mine',
    name: 'Mine',
    component: Mine
  }]
})
