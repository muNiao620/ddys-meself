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
		<div class="header">
			<div class="swiper-input">
				<span class="iconfont back-icon">&#xe651;</span>机构/套餐
			</div>
		</div>
	</div>
  
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
  	swiperList: Array
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  },
  data () {
  	return {
  		swiperOption: {
  			pagination: ".swiper-pagination",
  			loop: true
  		}
  	}
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
	background: #ffa052
.banner
	margin: .3rem
	.wrapper
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