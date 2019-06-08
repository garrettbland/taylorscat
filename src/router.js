import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Upload from './views/Upload.vue'
import Success from './views/Success.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/404',
      name: 'notfound',
      component: NotFound
    },
    {
      path: '*',
      redirect:'/404'
    }
  ]
})
