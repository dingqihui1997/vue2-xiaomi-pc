import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lazyout from '../views/layout/layout.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../../src/views/login/login'),
    meta: {
      title: '登录',
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../../src/views/cart/cart'),
    meta: {
      title: '购物车',
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../../src/views/checkout/checkout'),
    meta: {
      title: '结算页',
    }
  },
  {
    path: '/',
    component: Lazyout,
    children: [{
      path: '',
      name: 'Home',
      component: Home,
      meta: {
        title: '首页',
      }
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../../src/views/details/details'),
      meta: {
        title: '详情',
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../../src/views/search/search'),
      meta: {
        title: '搜索',
      }
    },
    ]
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
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
  // let user = localStorage.getItem('username')//先获取储存的值 如果储存了
  // console.log(user);
  // if (user) { //如果储存的有值，表示用户已经登录,如果已经登录就直接下一步操作
  //   next()
  // } else { //没有储存值，就没有登录， 再判断是否在登录页面，在就直接下一步，没在就调登录
  //   if (to.path === '/signin') {
  //     next()
  //   } else {
  //     next('/signin')
  //   }
  // }
  // if (to.path === '/signin') {
  //   next()
  // } else {
  //   user ? next() : next('/signin')
  // }
})
export default router
