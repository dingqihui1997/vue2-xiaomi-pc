import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lazyout from '../../src/views/layout/layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Lazyout,
    children: [{
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页',
        index: '/',  //页面刷新时，使导航栏保持高亮效果
      }
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
