<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <img class="headImg" :src="orgDetailList.orgIndexPic">
      <div class="headDes">
        <div class="des">机构名称: {{orgDetailList.orgName}}</div>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <div class="contentPos border-bottom">地址: {{orgDetailList.address}}</div>
      <div class="contentCall border-bottom">咨询客服: 0571-85890223 <span class="iconfont phone">&#xe608;</span></div>
      <div class="contentTime border-bottom">体检时间:  
        <span
          class="days"
          v-for="(item, index) of workDay"
          :key="index">{{item}}</span>
      </div>
      <div class="imgBorder"><img class="contentImg" src="../../images/procedure.png"></div>
    </div>
    <!-- 套餐区域 -->
    <van-tabs v-model="activeName">
      <van-tab title="体检套餐" name="a"></van-tab>
      <van-tab title="机构介绍" name="b"></van-tab>
      <van-tab title="体检须知" name="c"></van-tab>
    </van-tabs>
    <ul class="comb">
      <li
        class="wrapper border-bottom"
        v-for="(item, index) of orgDetailList.comboList"
        :key="index">
        <div class="combTitle">{{item.comboName}}</div>
        <div class="combPrice">{{item.preferentPrice}}元 {{(item.discount*10).toFixed(1)}}折 <span class="price">原价 {{item.realPrice}}元 预约量 {{item.comboOrderCount + item.realOrderCount}}</span></div>
        <div class="combTag">
          <div
            class="tagContent"
            v-for='(type,index) of item.typeList'
            :key="index"
            v-if='index<3'
            >{{type.typeName}}</div>
        </div>
        <div class="combOrg">适用人群: {{item.applyCrowd}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { invertWeeek } from '../../assets/common/getDay.js'
export default {
  name: 'OrgHome',
  data () {
    return {
      activeName: '',
      showOrg: true,
      showComb: false,
      colors: ['#F9C738','#67C6FF','#92D66F'],
      orgDetailList: {},
      ImgAddress: '',
      workDay: {},
      orgId : this.$store.state.orgId
      // initialObj: {
      //   channel: "23",
      //   format: "JSON",
      //   id: "9",
      //   oper: "127.0.0.1",
      //   random: "1234",
      //   service: "ddyy.medical.org.detail",
      //   sign: "3f52f63fad63c5dd209d28420977fb5d",
      //   spid: "1001",
      // }
    }
  },
  methods: {
    getOrgInfo () {
      // console.log(this.$store.state.orgId)
      axios.post('https://ddys-book.diandianys.com/app',{
        // obj
          channel: "23",
        format: "JSON",
        id: this.orgId,
        oper: "127.0.0.1",
        random: "1234",
        service: "ddyy.medical.org.detail",
        sign: "3f52f63fad63c5dd209d28420977fb5d",
        spid: "1001",
      }).then(res => {
        res = res.data
        this.orgDetailList = res.obj
        // invertWeeek是封装的方法
        this.workDay = invertWeeek(res.obj.restWeek)
        // console.log(this.orgDetailList)
      })
    }
  },
  // 计算vuex中的数据是否发生改变
  computed: {
    changeId () {
      return this.$store.state.orgId
    }
  },
  mounted () {
    this.getOrgInfo()
    // console.log(this.$store.state.orgId)
  },
  // 监听vuex中的数据是否发生改变
  watch: {
    changeId () {
      this.orgId = this.$store.state.orgId
      this.getOrgInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
.head
  position: relative
  .headImg
    // display: block
    width: 100%
  .headDes
    position: absolute
    background: #ffffff4d
    width: 100%
    bottom: 0
    .des
      font-size: .3rem
      padding: .2rem .3rem
      height: .42rem
      line-height: .42rem
.content
  .border-bottom
    &:before
      background-color: #eee
  .contentPos, .contentCall
    font-size: .3rem
    padding: .26rem .3rem
    .phone
      float: right
      font-size: .4rem
  .contentTime
    font-size: .26rem
    color: #666
    padding: .26rem .3rem
    .days
      margin: 0 .1rem 0 0
  .imgBorder
    border-bottom: 10px solid #eee
    .contentImg
      width: 100%
.comb
  padding: .2rem 0 0
  .border-bottom
    &:before
      border: 1px solid #eee
  .wrapper
    padding-left: .3rem
    // margin-right: .2rem
    .combTitle
      font-size: .3rem
      color: #333
      margin: .12rem 0 0
    .combPrice
      font-size: .3rem
      color: #ff4136
      margin: .2rem 0
      line-height: .42rem
      .price
        font-size: .26rem
        color: #aaa
        margin-left: .2rem
    .combLocation
      font-size: .26rem
      color: #aaa
      margin: .2rem 0
    .combTag
      margin-bottom: .2rem
      .tagContent
        display: inline-block
        color: #f9c738
        border-radius: .8em
        border: 1px solid #f9c738
        font-size: .3rem
        padding: 3.5px 6px
        margin-right: .2rem
    .combOrg
      font-size: .26rem
      color: #aaa
      padding: .15rem 0 .3rem
      line-height: .4rem
</style>