import store from '../store'
export default {
  install: (app) => {
    app.config.globalProperties.request = (url, params) => {
      store.commit('toggleLoading', true)
      return new Promise((resolve) => {
        setTimeout(() => {
          store.commit('toggleLoading', false)
          resolve({
            code: 200,
            msg: '操作成功'
          })
        }, 1000)
      })
    }
  }
}
