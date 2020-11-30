import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    component: layout,
    children: [{
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/two',
        name: 'two',
        component: () => import('../views/two.vue')
      },
      {
        path: '/three',
        name: 'three',
        component: () => import('../views/three.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue')
      }
    ]
  },
  {
<<<<<<< HEAD
    path: '/two',
    name: 'two',
    component: () => import(/* webpackChunkName: "two" */ '../views/two.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/user.vue')
=======
    path: '*',
    component: () => import('../views/no.vue')
>>>>>>> 3ebe8de1f10b355a77acd8c75fd2690509531783
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router