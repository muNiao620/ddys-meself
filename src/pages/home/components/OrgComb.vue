<template>
  <div class="orgComb container">
    <div style="margin: 0 auto; width: 80%;">
      <!-- tab标签页 -->
      <van-tabs @click="handleTab" v-model="activeName">
        <van-tab title="热门机构" name="a"></van-tab>
        <van-tab title="热门套餐" name="b"></van-tab>
      </van-tabs>
    </div>

    <!-- <p>{{activeName}}</p> -->
        <!-- <p class="one" v-if='showOrg'>hello</p>
        <p class="two" v-if='showComb'>world</p> -->
    <!-- 热门机构列表内容 -->
    <ul class="organize" v-if="showOrg">
      <li
        class="wrapper"
        v-for="(item, index) of orgList"
        :key="index"
        v-if='index<5'
        @click="getId(item)">
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
      </li>
    </ul>
    <!-- 热门套餐列表内容 -->
    <ul class="comb" v-if="showComb">
      <li
        class="wrapper border-bottom"
        v-for="(item, index) of comboList"
        :key="index"
        v-if='index<20'>
        <div class="combTitle">{{item.comboName}}</div>
        <div class="combPrice">{{item.preferentPrice}}元 {{(item.discount*10).toFixed(1)}}折 <span class="price">原价 {{item.realPrice}}元 预约量 {{item.comboOrderCount + item.realOrderCount}}</span></div>
        <div class="combOrg">体检机构: {{item.orgList[0].orgName}}</div>
        <div class="combLocation">
          <span class="iconfont back-icon">&#xe685;</span>
          {{item.orgList[0].address}}</div>
        <div class="combTag">
          <div
            class="tagContent"
            v-for='(type,index) of item.typeList' 
            :key= 'index'
            v-if='index<3'
            >{{type.typeName}}</div>
         </div>
      </li>
    </ul>
    <!-- 查看更多 -->
    <div class="search">
      <div class="searchMore">
        查看更多
      </div>
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeOrgComb',
  data () {
    return {
      activeName: '',
      showOrg: true,
      showComb: false,
      colors: ['#F9C738','#67C6FF','#92D66F']
    }
  },
  props: {
    orgList: Array,
    comboList: Array
  },
  methods: {
    handleTab (name) {
      if (name == "a") {
        this.showOrg = true,
        this.showComb = false
      }
      if (name == "b") {
        this.showOrg = false,
        this.showComb = true
      }
    },
    getId (item) {
      this.$store.dispatch('changeId', item.id)
      this.$router.push('/OrgDetail/'+item.id)
      // console.log(item.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
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
  .sort
    height: .82rem
    // background: red
    text-align: center
    // line-height: .82rem
    .sortContent
      display: inline-block
      font-size: .3rem
      margin: 0 .4rem
      padding: .26rem 0
  .organize
    padding-left: .3rem
    .wrapper
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
  .comb
    padding: .2rem 0
    .wrapper
      padding-left: .3rem
      margin-right: .2rem
      .combTitle
        font-size: .3rem
        color: #333
        // line-height: .6rem
        // margin-bottom: .2rem
      .combPrice
        font-size: .3rem
        color: #ff4136
        margin: .2rem 0
        line-height: .42rem
        .price
          font-size: .26rem
          color: #aaa
          margin-left: .2rem
      .combOrg
        font-size: .26rem
        color: #aaa
      .combLocation
        font-size: .26rem
        color: #aaa
        margin: .2rem 0
        ellipsis()
      .combTag
        margin-bottom: .6rem
        .tagContent
          display: inline-block
          color: #f9c738
          border-radius: .8em
          border: 1px solid #f9c738
          font-size: .24rem
          padding: 3.5px 6px
          margin-right: .2rem
  .search
    height: .84rem
    padding: .2rem 0 0 0
    text-align: center
    .searchMore
      height: .8rem
      line-height: .8rem
      margin: 0 auto
      width: 4.5rem
      border: .02rem solid #eee
      border-radius: .8rem
      color: #999
      font-size: .3rem
  .space
      height: .2rem
      background-color: #f1f1f1
      margin-top: .2rem
</style>