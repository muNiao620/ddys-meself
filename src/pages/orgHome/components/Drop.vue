<template>
	<div>
		<div class="drop">
			<!-- 上下箭头切换 -->
			<div
				class="content1"
				@click="change(1)"
				style="color: #000"
				:class="{'primary': index===1}"
				>
				<span class="regionText">所在地区</span>
				<span
					class="iconfont"
					v-show="index!==1">&#xe62e;</span>
				<span
					class="iconfont primary"
					v-show="index===1">&#xe62d;</span>
			</div>
			<div
				class="content2"
				@click="change(2)"
				:class="{'primary': index===2}">
				<span class="orgText">选择机构</span>
				<span
					class="iconfont"
					v-show="index!==2">&#xe62e;</span>
				<span
					class="iconfont primary"
					v-show="index===2">&#xe62d;</span>
			</div>
			<div
				class="content3"
				@click="change(3)">
				<span class="sortText">默认推荐</span>
				<span
					class="iconfont"
					v-show="index!==3">&#xe62e;</span>
				<span
					class="iconfont primary"
					v-show="index===3">&#xe62d;</span>
			</div>
			<!-- <div class="showBg" v-show="show"></div> -->
		</div>
		<!-- @touchmove.prevent是防止移动遮罩层时，下一层的页面会移动 -->
		<div class="showBg" v-show="show" @touchmove.prevent>
			<OrgDropChoice
				:cityInfoList="cityInfoList"
				:nameValue = "nameValue"
				:nameListIndex="nameListIndex"
				@changeRegionValue="changeRegionNmae"
				@changeOrgValue="changeOrgName"
				@changeSortValue="changeSortName"/>
		</div>
  </div>
</template>
<script>
import OrgDropChoice from './DropChoice'
export default {
  name: 'OrgDrop',
  props: {
  	cityInfoList: Array,
  },
  components: {
  	OrgDropChoice
  },
  data () {
  	return {
  		show: false,
  		changeIcon: false,
  		index: 0,
  		nameValue:false,
  		nameList: [
	  		{regionContent: false},
	  		{orgContent: false},
	  		{sortContent: false}
  		],
  		nameListIndex: null
  	}
  },
  methods: {
  	change (num) {
  		if (this.index == num) {
  			this.show = false
				this.index=0
				// 点击时字体颜色的改变
				document.getElementsByClassName('content'+[num])[0].style.color = '#000'
				this.nameList[num-1] = false
  		}else{
				this.index=num
				this.show = true
				document.getElementsByClassName('content'+[num])[0].style.color = '#ffa052'
				this.nameList[num-1] = true
				this.nameListIndex = num-1
				this.nameValue = this.nameList[num-1]
				// console.log(typeof(this.nameListIndex))
			}
  	},
  	// 点击区域改变文本和文本颜色
  	changeRegionNmae (info, regionId, cityId) {
  		this.$emit('regionId', regionId, cityId)
  		document.getElementsByClassName('regionText')[0].innerText = info
  		document.getElementsByClassName('content'+[this.index])[0].style.color = '#000'
  		// 隐藏和显示背景框
  		this.show = false
  		this.index=0
  	},
  	changeOrgName (info) {
  		// console.log(info)
  		document.getElementsByClassName('orgText')[0].innerText = info
  		document.getElementsByClassName('content'+[this.index])[0].style.color = '#000'
  		this.show = false
  		this.index=0
  	},
  	changeSortName (info) {
  		document.getElementsByClassName('sortText')[0].innerText = info
  		document.getElementsByClassName('content'+[this.index])[0].style.color = '#000'
  		this.show = false
  		this.index=0
  	}
  }
}
</script>

<style lang="stylus" scoped>
	.showBg
		position: fixed
		height: 100%
		width: 100%
		background-color: #00000080
		z-index: 1
	.drop
		position: relative
		display: flex
		height: .8rem
		text-align: center
		z-index: 2
		.content1,.content2,.content3
			flex: 1
			line-height: .8rem
			font-size: .3rem
</style>