import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView'
import SignupView from '@/views/SignupView'
import RestSignupView from '@/views/RestSignupView'
import RestLoginView from '@/views/RestLoginView'
import ClientProfile from '@/views/ClientProfile'
import ClientSettings from '@/views/ClientSettings'
import RestProfile from '@/views/RestProfile'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/rsignup',
    name: 'rsignup',
    component: RestSignupView
  },
  {
    path: '/rlogin',
    name: 'rlogin',
    component: RestLoginView
  },
  {
    path: '/cprofile',
    name: 'cprofile',
    component: ClientProfile
  },
  {
    path: '/csettings',
    name: 'csettings',
    component: ClientSettings
  },
  {
    path: '/rprofile',
    name: 'rprofile',
    component: RestProfile
  },
  

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

export const router = new VueRouter({
  routes
})

export default router
