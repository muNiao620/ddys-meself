<template>
  <div>
  	<div class="header">
  		<div class="wrapper">
  			<div class="organize">机构<span class="iconfont back-icon">&#xe612;</span>
		    </div>
		    <span class="iconfont location">&#xe651;</span>
		    <input class="organizeInput" placeholder="搜索机构、套餐">
		    </input>
		    <div class="cancle">取消</div>
  		</div>
	  </div>
	  <!-- vantui插件的使用 -->
	  <!-- <van-search
		  placeholder="请输入搜索关键词"
		  show-action
		  shape="round"
		>
  		<div slot="action">取消</div>
		</van-search> -->
  </div>
</template>
<script>
export default {
  name: 'SearchHeader'
}
</script>

<style lang="stylus" scoped>
	.header
		height: .96rem
		background-color: #fff
		padding: 0 .3rem
		.wrapper
			display: flex
			padding: .2rem 0
			.organize
				color: #ffa052
				line-height: .56rem
				border-radius: .3rem 0 0 .3rem
				background-color: #fff2e7
				padding: 0 .2rem
				font-size: .3rem
			.organizeInput
				flex: 1
				line-height: .56rem
				background-color: #ededed
				border-radius: 0 .3rem .3rem 0
				text-indent: .74rem
				font-size: .26rem
			.location
				position: absolute
				left: 1.9rem
				line-height: .56rem
				font-size: .26rem
			.cancle
				line-height: .56rem
				padding: 0 .2rem
				font-size: .3rem
				color: #ffa052
</style>