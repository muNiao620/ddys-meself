<template>
  <div>
    <HomeSwiper :swiperList="swiperList"/>
    <HomeContent/>
  </div>
</template>

<script>
import HomeSwiper from './components/Swiper'
import HomeContent from './components/Content'
// 导入axios
import axios from 'axios'
export default {
  name: 'Home',
  components: {
  	HomeSwiper,
  	HomeContent
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