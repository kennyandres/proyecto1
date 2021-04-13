import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //token: null,eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDU2OWE5YjEyNDdjOTQxMjBiYjRhYjciLCJpYXQiOjE2MTgwOTI5NDEsImV4cCI6MTYxODEwNzM0MX0.Il_9bS8uABGneSFn-E8OLo8rIjVo3xplddm_XTSpCkM",
    usuario: null,
    showModelGlobal:false
  },
  mutations: {
    setToken(state, value) {
      state.token=value.token
      state.usuario=value.usuario
    },
    setShowModel(state,value){
      state.showModelGlobal=value
    }

  },
  actions: {
    setToken({ commit }, value) {
      commit('setToken', value)
    },
    setShowModel({commit},value){
      commit('setShowModel',value)
    }
  },
  modules: {
  }
})
