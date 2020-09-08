import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: {}
  },
  mutations: {
    mlogin(state,payload){
      state.info = payload
    }
  },
  actions: {
    login({commit},payload){
      commit('mlogin',{name: 'login'})
    }
  },
  modules: {
  }
})
