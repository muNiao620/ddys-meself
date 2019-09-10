<template>
  <div class="bg">
    <HomeSwiper :swiperList="swiperList"/>
    <HomeContent/>
    <HomeContentList :contentList="contentList"/>
    <HomeOrgComb
      :orgList="orgList"
      :comboList="comboList"/>
  </div>
</template>

<script>
import HomeSwiper from './components/Swiper'
import HomeContent from './components/Content'
import HomeContentList from './components/ContentList'
import HomeOrgComb from './components/OrgComb'
// 导入axios
import axios from 'axios'
export default {
  name: 'Home',
  components: {
  	HomeSwiper,
  	HomeContent,
    HomeContentList,
    HomeOrgComb
  },
  data () {
  	return {
  		swiperList: [],
      contentList: [],
      orgList: [],
      comboList: []
  	}
  },
  // 首页轮播图
  methods: {
  	getHomeInfo () {
      // 本地请求
  		// axios.get('/api/index.json')
  		// 	.then(this.getHomeInfoSucc)

      // post请求
      axios.post('https://ddys-book.diandianys.com/app', {
        channel: "23",
        format: "JSON",
        isRecommend: "1",
        oper: "127.0.0.1",
        random: "1234",
        service: "ddyy.medical.index.info",
        sign: "3f52f63fad63c5dd209d28420977fb5d",
        spid: "1001",
      }).then( res => {
        console.log(res)
          res = res.data
          if (res) {
            this.swiperList = res.adSettingList
            this.contentList = res.mTypeList.list
            this.orgList = res.orgVoList.list
            this.comboList = res.comboList.list
          }
        })
  	},
    // 本地请求
  	// getHomeInfoSucc (res) {
  	// 	res = res.data
   //    console.log(res)
  	// 	if (res) {
  	// 		this.swiperList = res.adSettingList
   //      // console.log(res.mTypeList.list[0])
   //      this.contentList = res.mTypeList.list
   //      this.orgList = res.orgVoList.list
   //      this.comboList = res.comboList.list
  	// 	}
  	// }
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