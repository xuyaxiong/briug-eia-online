export default {
  install: (app) => {
    app.config.globalProperties.request = (url, params) => {
      app.$store.commit('toggleLoading', true)
      return new Promise((resolve) => {
        setTimeout(() => {
          // app.$store.commit('toggleLoading', false)
          resolve({
            code: 200,
            msg: '操作成功'
          })
        }, 1000)
      })
    }
  }
}
