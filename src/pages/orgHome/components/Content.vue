<template>
<div
		class="orgComb container" >
	    <van-list
	    	class="organize"
	    	v-if="showOrg"
	    	v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
	      >
		      <div
		        class="wrapperOut"
		        v-for="(item, index) of orgList"
		        :key="index"
            @click="getId(item)"
		        >
		        <div class="one">
		          <div class="introduce">
		            {{item.typeName}}
		          </div>
		          <img class="img" :src="item.orgIndexPic">
		        </div>
		        <div class="desc">
		          <div style="font-size: .3rem">
		            {{item.orgName}}
		          </div>
		          <div class="orgNum">{{item.comboNum}}项套餐<span class="orderNum">{{item.orgOrderCount + item.realOrderCount}}</span>人预约
		          </div>
		          <div class="location">
		            <span class="iconfont back-icon">&#xe685;</span>{{item.address}}
		          </div>
		        </div>
		      </div>
	    </van-list>
    	
  </div>
</template>
<script>
import Vue from 'vue'
import { List } from 'vant'
Vue.use(List)
import 'vant/lib/list/style'

import axios from 'axios'
import OrgDropChoice from './DropChoice'
export default {
  name: 'OrgContent',
  data () {
    return {
    	pageNo: '1',
    	pages: '',
      showOrg: true,
      showComb: false,
      orgList: [],
      touchStatus: false,

      list: [],
      loading: false,
      finished: false,
      obj: {
      	channel: "23",
				format: "JSON",
				gbCityCode: "330100",
				gbDistrictCode: "",
				oper: "127.0.0.1",
				orgType: "",
				pageNo: '',
				random: "1234",
				service: "ddyy.medical.org.list",
				sign: "3f52f63fad63c5dd209d28420977fb5d",
				sortWay: "1",
				spid: "1001",
			}
    }
  },
  props: {
    infoId: String,
    cityId: String,
  },
  methods: {
  	// ajax滚轮请求下一页
		scrollRequire (obj) {
			axios.post('https://ddys-book.diandianys.com/app', obj).then( res => {
				res = res.data
				this.pages = res.obj.pages
				if (this.pageNo == 1) {
  				this.orgList = res.obj.list
				}else{
					this.orgList=[...this.orgList,...res.obj.list]
				}
        // 加载状态结束
        this.loading = false
			})
		},
		onLoad() {
      // 异步更新数据
      setTimeout(() => {
      	if (this.pageNo < this.pages) {
      		// 改变this.obj.pageNo时因为每次请求下一页的时候，这个页数是变动的
          this.loading = true
      		this.pageNo++
          this.obj.pageNo = this.pageNo
	        // 加载状态结束
	        // this.loading = false
          this.scrollRequire(this.obj)
      	}else if (this.pageNo == this.pages) {
            this.loading = false
            this.finished = true
          }
      }, 1000)
    },
    getId (item) {
      this.$store.dispatch('changeId', item.id)
      this.$router.push('/OrgDetail/'+item.id)
      // console.log(item.id)
    }
  },
  mounted () {
    this.obj.gbCityCode = '330100'
  	this.scrollRequire(this.obj)
  },
  watch: {
  	infoId () {
  		this.pageNo = 1
      this.orgList = []
  		this.list = []
      this.obj.gbCityCode = this.cityId
  		this.obj.gbDistrictCode = this.infoId
      this.obj.pageNo = this.pageNo
      this.finished = false
  		this.scrollRequire(this.obj)
  	},
    cityId () {
      this.pageNo = 1
      this.orgList = []
      this.list = []
      this.obj.gbCityCode = this.cityId
      this.obj.gbDistrictCode = this.infoId
      this.obj.pageNo = this.pageNo
      this.finished = false
      this.scrollRequire(this.obj)
    },
  }
}
</script>

<style lang="stylus" scoped>
// styles是在webpack.base.conf.js定义的路径变量，在样式中引用样式，前面需要加波浪线
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
.orgComb
  >>>.van-tabs__nav
    display block
    text-align center
    .van-tab 
      margin 0 10px
      padding 0 10px
      display inline-block
    .van-tab--active
      color: $bgColor
  .organize
    padding-left: .3rem
    .wrapperOut
      display: flex
      height: 1.52rem
      padding: .3rem 0
      .one
        position: relative
        height: 1.52rem
        width: 2.2rem
        .img
          height: 1.52rem
          width: 2.2rem
          height: 1.5rem
        .introduce
          position: absolute
          bottom: 0
          width: 100%
          height: .4rem
          line-height: .4rem
          background: rgba(255, 125, 19, 0.8)
          text-align: center
          color: #fff
          font-size: .26rem
      .desc
        width: 4.4rem
        height: 1.52rem
        margin: 0 .3rem
        // background: red
        .orgNum
          color: #999
          margin: .2rem 0 .1rem 0
          padding: .15rem 0
          font-size: .28rem
          min-width: 0
          .orderNum
            margin: 0 0 0 .3rem
            color: $bgColor
        .location
          font-size: .24rem
          line-height: .3rem
          color: #999
          ellipsis()
  .border-bottom
    &:before
      position: absolute
      border-color: #ccc
      top: 110%
  .search
    height: .8rem
    line-height: .8rem
    text-align: center
    background-color: #f1f1f1
    color: #676767
</style>