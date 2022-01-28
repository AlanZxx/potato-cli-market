import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/mall',
        name: 'mall',
        component: () => import('../views/mall')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('../views/other/pageOne.vue')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('../views/other/pageOne.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
