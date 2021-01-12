import Vue from 'vue'
import './plugins/axios'

import router from './router'
import store from './store'
import mstore from 'store2'
import './assets/css/reset.css'
// import './assets/css/index.styl'
import { config } from './assets/config.js'
import leaflet from 'leaflet'
import './plugins/element.js'
import UmyUi from 'umy-ui'
import 'umy-ui/lib/theme-chalk/index.css';// 引入样式
Vue.config.productionTip = false

import App from './App.vue'
Vue.prototype.$mstore = mstore
Vue.prototype.L = leaflet
Vue.prototype.$config = config

Vue.use(UmyUi);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')