import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:8082/production/'
axios.defaults.baseURL = 'http://112.74.51.188:8080/production/'
// 允许携带cookie
axios.defaults.withCredentials = true
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
