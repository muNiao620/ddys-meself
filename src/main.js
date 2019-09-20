// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 项目初始化
import 'styles/reset.css'
import 'styles/border.css'
import fastClick from 'fastClick'
// 导入轮播插件及css文件,github中搜索:surmon-china/vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//引入iconfont库
import 'styles/iconfont.css'
// 导入vantui插件
import { Tab, Tabs ,Search} from 'vant'
import { Sidebar, SidebarItem } from 'vant'
Vue.use(Tab).use(Tabs).use(Search).use(Sidebar).use(SidebarItem)
import 'vant/lib/tabs/style'
import 'vant/lib/tab/style'
import 'vant/lib/search/style'
import 'vant/lib/sidebar/style'
import 'vant/lib/sidebar-item/style'
// 导入公用数据
import store from './store'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
