import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    addCounter (state, val) {
      state.counter += val
    }
  },
  getters: {
    getCounter (state) {
      return state.counter
    }
  },
  actions: {
  },
  modules: {
  }
})
