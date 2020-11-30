import Vue from 'vue'
import Vuex from 'vuex'
import {
  getters
} from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  getters,
  mutations: {
    mlogin(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    login({
      commit
    }, payload) {
      commit('mlogin', {
        name: 'login'
      })
    }
  },
  modules: {}
})