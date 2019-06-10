import Vue from 'vue'
import Vuex from 'vuex'
const fb = require('@/firebase.js')
Vue.use(Vuex)

// handle page reloads
fb.auth.onAuthStateChanged(user => {
    if (user) {
        store.commit('setCurrentUser', user)
    }
})

const store = new Vuex.Store({
  state: {
  	currentUser:null,
    loading:false
  },
  mutations: {
  	setCurrentUser(state, val) {
        state.currentUser = val
    },
    setLoading(state,val) {
        state.loading = val
    }
  },
  actions: {
  	clearData({ commit }){
      commit('setCurrentUser',null)
    }
  }
})

export default store