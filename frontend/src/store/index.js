import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    usuario: null
  },
  mutations: {
    setToken(state, value) {
      state.token=value.token
      state.usuario=value.usuario
    }
  },
  actions: {
    setToken({ commit }, value) {
      commit('setToken', value)
    }
  },
  modules: {
  }
})
