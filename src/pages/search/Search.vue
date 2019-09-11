<template>
  <div class="bg">
    <SearchHeader/>
    <SearchRecommend
      :orgList="orgList"
      :mTypeList="mTypeList"/>
  </div>
</template>

<script>
import SearchHeader from './components/Header'
import SearchRecommend from './components/Recommend'
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      orgList: {},
      mTypeList: {}
    }
  },
  components: {
    SearchHeader,
    SearchRecommend
  },
  methods: {
    getSearchInfo () {
      axios.post('https://ddys-book.diandianys.com/app', {
        channel: "23",
        format: "JSON",
        isRecommend: "1",
        oper: "127.0.0.1",
        random: "1234",
        service: "ddyy.medical.recommend.list",
        sign: "3f52f63fad63c5dd209d28420977fb5d",
        spid: "1001",
      })
      .then(res => {
        // console.log(res)
        res = res.data
        console.log(res)
        if (res) {
          this.orgList = res.orgList
          this.mTypeList = res.mTypeList
        }
      })
    }
  },
  mounted () {
    this.getSearchInfo()
  }
}
</script>

<style lang="stylus" scoped>
// 设置整个屏幕高的背景色
  .bg
    position: fixed
    height: 100%
    width: 100%
    background-color: #f1f1f1
</style>