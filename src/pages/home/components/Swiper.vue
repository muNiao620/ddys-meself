<template>
	<div class="main">
		<div class="banner">
			<div class="wrapper">
				<swiper :options="swiperOption" v-if="showSwiper">
				    <swiper-slide
				    	v-for="(item, index) of swiperList"
				    	:key="index">
				    	<img
				    		:src="item.adImg"
				    		class="swiper-img">
				    </swiper-slide>
				    <div class="swiper-pagination"  slot="pagination"></div>
				</swiper>
			</div>
		</div>
		<router-link to="/Search">
			<div class="header">
				<div class="swiper-input">
					<span class="iconfont back-icon">&#xe651;</span>机构/套餐
				</div>
			</div>
		</router-link>
	</div>
  
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
  	swiperList: Array
  },
  // 判断请求数据数据是否传过来，没有就不显示swiper标签内容内容，有的话就显示传过来的第一页
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  },
  data () {
  	return {
  		swiperOption: {
  			pagination: ".swiper-pagination",
  			// 自动循环
  			loop: true,
  			// 自动播放
  			autoplay: 3000,
  		}
  	}
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
	background: $bgColors
.banner
	margin: .3rem
	.wrapper
		// 直接写宽高的具体大小，可能浏览器的兼容性有问题
		width: 100%
		height: 0
		padding-bottom: 46.9%
		border-radius: .2rem
		overflow: hidden
		// overflow-x: auto
		// white-space: nowrap
		.swiper-img
			width: 100%
			border-radius: .2rem
.header
	z-index: 1
	position: absolute
	display: flex
	height: .6rem
	width: 100%
	top: .3rem
	margin-top: .2rem
	color: #333
	.swiper-input
		background-color: rgba(255,255,255,0.6)
		width: 85%
		margin-left: 7.5%
		border-radius: 15px
		font-size: .3rem
		line-height: 30px
		text-indent: .23rem
		.back-icon
			margin-right: .25rem
</style>