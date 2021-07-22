import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoadingVisible: false
  },
  mutations: {
    toggleLoading(state, loading = false) {
      state.isLoadingVisible = loading
    }
  },
  actions: {},
  modules: {}
})
