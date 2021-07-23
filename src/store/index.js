import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoadingVisible: false,
    navLabelList: []
  },
  mutations: {
    toggleLoading(state, loading = false) {
      state.isLoadingVisible = loading
    },
    setNavLabelList(state, navLabelList) {
      state.navLabelList = navLabelList
    }
  },
  actions: {},
  modules: {}
})
