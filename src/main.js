// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from './components/loading'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import store from './store/'

Vue.config.productionTip = false
Vue.use(Loading)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/images/err.png'),
  loading: require('./assets/images/loading.gif'),
  attempt: 1,
  listenEvents: ['scroll']
})
// axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function (config) { // 配置发送请求的信息
  store.dispatch('showLoading')
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) { // 配置请求回来的信息
  store.dispatch('hideLoading')
  return response
}, function (error) {
  return Promise.reject(error)
})
// axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.baseURL = process.env.PORT
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
