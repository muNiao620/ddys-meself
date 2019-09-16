<template>
	<div class="content">
		<div
			class="content-img"
			v-for="(item, index) of items"
			:key="index"
			@click="junmpTo(index)">
			<div class="icon">
				<img
					class="img" 
					:src="item.typePic">
			</div>
			<div class="content-text">
				{{item.typeName}}
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'HomeContent',
  data () {
  	return {
  		items:[
				{typePic: require('../../../images/jg.png'),typeName:'找机构'},
				{typePic: require('../../../images/tc.png'),typeName:'找套餐'},
				{typePic:require('../../../images/jkbk.png'),typeName:'健康自测'},
				{typePic:require('../../../images/people.png'),typeName:'我的体检'}
			],
  	}
  },
  methods: {
  	junmpTo (index) {
  		if (index == 0) {
  			this.$router.push('/OrgHome')
  		}
  		if (index == 2) {
  			window.location.href="https://ddys-wechat.diandianys.com/WeChat/jkbk/#/test?test=1"
  		}
  		if (index == 3) {
  			this.$router.push('/Login')
  		}
  		console.log(index)
  	}
  }
}
</script>

<style lang="stylus" scoped>
	.content
		width: 100%
		height: 2.02rem
		.content-img
			float: left
			width: 25%
			height: 1.82rem
			// background: red
			text-align: center
			padding-bottom: .2rem
			.icon
				height: 1rem
				line-height: 1rem
				margin: .17rem 0 .3rem
				.img
					width: .8rem
					// height: .8rem
					line-height: 1rem
			.content-text
				font-size: .3rem
				text-align: center
</style>