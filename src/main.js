import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import mstore from 'store2'
import './assets/css/reset.css'
// import './assets/css/index.styl'
import { config } from './assets/config.js'
import './plugins/element.js'
import leaflet from 'leaflet'
Vue.config.productionTip = false

Vue.prototype.$mstore = mstore
Vue.prototype.L = leaflet
Vue.prototype.$config = config
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')