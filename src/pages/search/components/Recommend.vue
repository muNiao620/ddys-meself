<template>
  <div>
  	<div class="recommend">推荐机构</div>
  	<div class="wrapperOrg">
  		<div
  			class="recommendOrg"
  			v-for="(item, index) of orgList.list"
  			:key="index">
	  		{{item.orgShortName}}
	  	</div>
  	</div>
  	<div class="recommend">推荐套餐</div>
  	<div class="wrapperComb">
  		<div
  			class="recommendComb"
  			v-for="(item, index) of mTypeList.list"
  			:key="index">
	  		{{item.typeName}}
	  	</div>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'SearchRecommend',
  props: {
  	orgList: Object,
  	mTypeList: Object
  }
}
</script>

<style lang="stylus" scoped>
	.recommend
		margin: .2rem .3rem 
		font-size: .3rem
		color: #aaa
	.wrapperOrg, .wrapperComb
		margin: 0 .3rem
		.recommendOrg, .recommendComb
			width: fit-content
			text-align: center
			display: inline-block
			padding: 0 .3rem
			margin: .1rem .3rem .1rem 0
			background-color: #fff
			border-radius: .3rem
			line-height: .6rem
			font-size: .3rem
</style>