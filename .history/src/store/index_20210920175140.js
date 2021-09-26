import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    badge: localStorage.getItem('num'),//购物车的角标

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
