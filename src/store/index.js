import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import {
  getters
} from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
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