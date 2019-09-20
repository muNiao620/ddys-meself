<template>
  <div>
    <OrgHomeHeader/>
    <OrgDrop
      @regionId = "regionId"
      :cityInfoList="cityInfoList"
      />
    <OrgContent
      :infoId="infoId"
      :cityId="cityId"/>
  </div>
</template>

<script>
import axios from 'axios'
import OrgHomeHeader from './components/Header'
import OrgDrop from './components/Drop'
import OrgContent from './components/Content'

export default {
  name: 'OrgHome',
  data () {
    return {
      cityInfoList: [],
      showDrop: false,
      orgList: [],
      infoId: '',
      cityId: '',
    }
  },
  components: {
    OrgHomeHeader,
    OrgDrop,
    OrgContent
  },
  methods: {
    cityInfo () {
      axios.post('https://ddys-book.diandianys.com/app', {
        channel: "23",
        format: "JSON",
        oper: "127.0.0.1",
        random: "1234",
        service: "ddys.medical.area.citylist",
        sign: "3f52f63fad63c5dd209d28420977fb5d",
        spid: "1001",
      }).then( res => {
        res = res.data
        if (res) {
          this.cityInfoList = res.list
        }
      })
    },
    orgInfo () {
      axios.post('https://ddys-book.diandianys.com/app', {
        channel: "23",
        format: "JSON",
        gbCityCode: "330100",
        oper: "127.0.0.1",
        pageNo: 1,
        random: "1234",
        service: "ddyy.medical.org.list",
        sign: "3f52f63fad63c5dd209d28420977fb5d",
        sortWay: "1",
        spid: "1001",
      }).then( res => {
        res = res.data
        if (res) {
          this.orgList = res.obj.list
        }
      })
    },
    regionId (infoId, cityId) {
      this.infoId = infoId
      this.cityId = cityId
    }
  },
  mounted () {
    this.cityInfo()
    this.orgInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>