import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './App.vue'
import 'easymde/dist/easymde.min.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 改变loader出现状态的拦截器
axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  store.commit('setError', { status: false, message: ' ' })
  return config
  // console.log(store.state)
})
axios.interceptors.response.use(config => {
  setTimeout(() => {
    store.commit('setLoading', false)
  }, 1000)
  return config
}, e => {
  if (e.response) {
    const { error } = e.response
    store.commit('setError', { status: true, message: error })
    store.commit('setLoading', false)
  }
  return Promise.reject(e.response)
})
axios.defaults.baseURL = 'https://www.mmdemagic.top'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.headers.token = store.state.token
const app = createApp(App)
// app.use(ElementPlus, { size: 'small', zIndex: 3000 })可以给全局使用的组件设置大小
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(store)
app.mount('#app')
