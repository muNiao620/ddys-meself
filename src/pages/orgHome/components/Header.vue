<template>
  <div>
		<div class="header border-bottom"
		@touchmove.prevent>
			<router-link
				to="/"
				class="iconfont back-icon">&#xe624;
			</router-link>
			<router-link 
				to="/Search"
				class="swiper-input">
				<span class="iconfont serach-icon
				">&#xe651;</span>机构/套餐
			</router-link>
		</div>
  </div>
</template>
<script>
export default {
  name: 'OrgHomeHeader'
}
</script>

<style lang="stylus" scoped>
	.header
		z-index: 1
		display: flex
		padding: .2rem .3rem
	.border-bottom
		&:before
			background-color: #eee
		.back-icon
			line-height: 30px
			font-size: .45rem
			padding: 0 .1rem 0 0
			color: #777 
		.swiper-input
			flex: 1
			border-radius: 15px
			font-size: .3rem
			line-height: 30px
			text-indent: .23rem
			border: 1px solid #eee
			color: #777
			.serach-icon
				margin-right: .25rem
</style>