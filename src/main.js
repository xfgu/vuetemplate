import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import mstore from 'store2'
import './assets/css/reset.css'
import './assets/css/index.styl'
import './plugins/element.js'
Vue.config.productionTip = false
Vue.prototype.mstore = mstore
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')