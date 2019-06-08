import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './tailwind.css'
const firebase = require('./firebase.js')

Vue.prototype.$firebase = firebase

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
