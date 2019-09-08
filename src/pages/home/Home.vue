<template>
  <div>
    <HomeSwiper :swiperList="swiperList"/>
  </div>
</template>

<script>
import HomeSwiper from './components/Swiper'
// 导入axios
import axios from 'axios'
export default {
  name: 'Home',
  components: {
  	HomeSwiper
  },
  data () {
  	return {
  		swiperList: []
  	}
  },
  // 首页轮播图
  methods: {
  	getHomeInfo () {
  		axios.get('/api/index.json')
  			.then(this.getHomeInfoSucc)
  	},
  	getHomeInfoSucc (res) {
  		res = res.data
  		if (res) {
  			this.swiperList = res.adSettingList
  		}
  	}
  },
  mounted () {
  	this.getHomeInfo()
  }
}
</script>

<style>

</style>