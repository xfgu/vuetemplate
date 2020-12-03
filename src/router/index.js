import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout.vue'
import store from '../store'
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
    path: '/two',
    name: 'two',
    component: () => import( /* webpackChunkName: "two" */ '../views/two.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import( /* webpackChunkName: "user" */ '../views/user.vue')
  },
  {
    path: '*',
    name: 'no',
    component: () => import( /* webpackChunkName: "no" */ '../views/no.vue')
  }
]

export const dyroute = () => {
  if (store.getters.ismanage) {
    router.options.routes[2].children=[...router.options.routes[2].children,dy]
    router.addRoutes(router.options.routes)
  }
  // console.log(router.options.routes[2].children)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login' && !store.getters.islogin) {
//     next('/login');
//   }
//   next();
// });
export default router