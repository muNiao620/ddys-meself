import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import OrgHome from '@/pages/orgHome/OrgHome'
import Login from '@/pages/login/Login'
import OrgDetail from '@/pages/orgDetail/OrgDetail'
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
    {
      path: '/OrgDetail/:id',
      name: 'OrgDetail',
      component: OrgDetail
    },
  ],
  // vue-router的滚动行为，解决多页面滚动互相影响
  scrollBehavior (to, from, savedPosition) {
    // 表示每次新进页面的时候，始终回到最顶部
    return { x: 0, y: 0 }
  }
})
