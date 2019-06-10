import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './tailwind.css'
const firebase = require('./firebase.js')

Vue.prototype.$firebase = firebase

Vue.config.productionTip = false

// make sure firebase is initialized for page reloads
let app
firebase.auth.onAuthStateChanged(user => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        })
    }
})