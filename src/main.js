import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import EVueContextmenu from './../packages/index.js'

Vue.use(EVueContextmenu)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
