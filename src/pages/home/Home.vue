<template>
  <div class="bg">
    <HomeSwiper :swiperList="swiperList"/>
    <HomeContent/>
    <HomeContentList :contentList="contentList"/>
  </div>
</template>

<script>
import HomeSwiper from './components/Swiper'
import HomeContent from './components/Content'
import HomeContentList from './components/ContentList'
// 导入axios
import axios from 'axios'
export default {
  name: 'Home',
  components: {
  	HomeSwiper,
  	HomeContent,
    HomeContentList
  },
  data () {
  	return {
  		swiperList: [],
      contentList: []
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
      // console.log(res)
  		if (res) {
  			this.swiperList = res.adSettingList
        // console.log(res.mTypeList.list[0])
        this.contentList = res.mTypeList.list
  		}
  	}
  },
  mounted () {
  	this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  // .bg
  //   background-color: #f1f1f1
  //   height: 100%
</style>