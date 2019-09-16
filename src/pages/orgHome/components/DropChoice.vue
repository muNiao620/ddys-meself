<template>
	<div>
		<!-- 地区列表 -->
		<div
			class="choiceList border-top"
			v-show="regionContent">
			<!-- 区域左边 -->
			<div class="cityList">
		  	<div
		  		class="content"
		  		v-for="(item, index) of cityInfoList"
		  		:key="index"
		  		:class="{changeStyle:changeSelectStyle == index}"
		  		@click="cityClick(index, item);changeStyle(index)">
		  		{{item.cityName}}
		  	</div>
		  </div>
		  <!-- 区域右边 -->
		  <div
		  	class="regionList">
		  	<div
		  		class="content"
		  		v-for="(item, index) of regionInfoList"
		  		:key="index"
		  		@click="regionClick(item)">
		  		{{item.regionName}}
		  	</div>
		  </div>
		</div>
		<!-- 机构列表 -->
		<div
			class="orgList border-top"
			v-show="orgContent">
	  	<div
	  		class="content"
	  		v-for="(item, index) of orgType"
	  		:key="index"
	  		@click="orgClick">
	  		{{item.typeName}}
	  	</div>
		</div>
		<!-- 推荐列表 -->
		<div
			class="sortList border-top"
			v-show="sortContent">
	  	<div
	  		class="content"
	  		v-for="(item, index) of sortWay"
	  		:key="index"
	  		@click="sortClick">
	  		{{item.sortName}}
	  	</div>
		</div>
  </div>
</template>
<script>
export default {
  name: 'OrgDropChoice',
  data () {
  	return {
  		cityIndex: 0,
  		regionInfoList: [],
  		changeSelectStyle:'',
  		regionContent: false,
  		orgContent: false,
  		sortContent: false,
  		cityId: '',
  		extraList: [
  			{cityId: "330100",regionId: "",regionName:"全部"},
  			{cityId: "330100",regionId: "330102",regionName:"上城区"},
  			{cityId: "330100",regionId: "330104",regionName:"江干区"},
  			{cityId: "330100",regionId: "330106",regionName:"西湖区"},
  			{cityId: "330100",regionId: "330103",regionName:"下城区"},
  			{cityId: "330100",regionId: "330108",regionName:"滨江区"},
  			{cityId: "330100",regionId: "330109",regionName:"萧山区"},
  			{cityId: "330100",regionId: "330105",regionName:"拱墅区"},
  			{cityId: "330100",regionId: "330110",regionName:"余杭区"},
  		],
  		orgType:[
				{typeId: 0,typeName:'全部'},
				{typeId: 1,typeName:'专业体检机构'},
				{typeId: 2,typeName:'公立医院'}
			],//机构类型
			sortWay:[
				{sortId: '1',sortName:'默认推荐'},
				{sortId: '2',sortName:'按距离近'},
				{sortId: '3',sortName:'按预约量'}
			]
  	}
  },
  props: {
  	cityInfoList: Array,
  	// regionInfoList: Array,
  	nameValue: Boolean,
  	nameListIndex: Number
  },
  // 点击渲染的区域
  methods: {
  	initial () {
  		this.cityId = '330100'
  	},
  	cityClick (index, item) {
  		this.cityId = item.cityId
			this.regionInfoList = this.cityInfoList[index].regionList
  	},
  	// 未点击渲染杭州区域
  	noClick () {
  		this.regionInfoList = this.extraList
  	},
  	// 在对应的点击元素，修改背景颜色
  	changeStyle (index) {
  		this.changeSelectStyle = index
  	},
  	regionClick (item) {
  		// console.log(item.regionId)
  		this.$emit('changeRegionValue', item.regionName, item.regionId , this.cityId)
  	},
  	orgClick (e) {
  		this.$emit('changeOrgValue', e.target.innerText)
  		// console.log(e)
  	},
  	sortClick (e) {
  		this.$emit('changeSortValue', e.target.innerText)
  	}
  },
  mounted () {
  	this.noClick()
  	this.initial()
  },
  watch: {
  	nameListIndex () {
  		if (this.nameListIndex == 0) {
  			this.regionContent = this.nameValue
  			this.orgContent = !this.nameValue
  			this.sortContent = !this.nameValue
  			// console.log(this.regionContent)
  		}
  		if (this.nameListIndex == 1) {
  			this.regionContent = !this.nameValue
  			this.orgContent = this.nameValue
  			this.sortContent = !this.nameValue
  		}
  		if (this.nameListIndex == 2) {
  			this.regionContent = !this.nameValue
  			this.orgContent = !this.nameValue
  			this.sortContent = this.nameValue
  		}
  	}
  }
}
</script>

<style lang="stylus" scoped>
.border-top
		&:before
			background-color: #eee
.choiceList
	display: flex
	position: relative
	z-index: 2
	.cityList
		height: 4rem
		width: 40%
		overflow-y: auto
		background-color: #eee
		.content
			text-align: center
			width: 100%
			padding: .2rem 0
			font-size: .3rem
			line-height: .4rem
		.changeStyle
			background-color: #fff
	.regionList
		height: 4rem
		flex: 1
		overflow-y: auto
		background-color: #fff
		.content
			text-align: center
			width: 100%
			padding: .2rem 0
			font-size: .3rem
			line-height: .4rem
.border-top
		&:before
			background-color: #eee
.orgList
		overflow-y: auto
		background-color: #fff
		.content
			text-align: center
			padding: .2rem 0
			font-size: .3rem
			line-height: .4rem
.border-top
		&:before
			background-color: #eee
.sortList
		overflow-y: auto
		background-color: #fff
		.content
			text-align: center
			padding: .2rem 0
			font-size: .3rem
			line-height: .4rem
</style>