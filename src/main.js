import Vue from 'vue'
import App from './App.vue'
import EVueContextmenu from './../packages/index.js'

Vue.use(EVueContextmenu)
Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')
