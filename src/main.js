import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import Request from './plugins/request'

const app = createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .use(Request)

app.mount('#app')
