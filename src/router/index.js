import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import OrgHome from '@/pages/orgHome/OrgHome'
import Login from '@/pages/login/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/orgHome',
      name: 'OrgHome',
      component: OrgHome
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
