<template>
  <div class="container">
    <div class="contents">
      <div
        class="content"
        v-for="(item, index) of contentList"
        :key="index">
        <div class="content-text"
          >{{item.typeName}}</div>
      </div>
      <div class="contentLast">
        <div class="content-text-last"
          >团体体检</div>
      </div>
    </div>
    <div class="space"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeContentList',
  props: {
    contentList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .container
    padding-top: .2rem
    .contents
      margin-top: .1rem
      height: 1.48rem
      .content
        width: 25%
        margin: .1rem 0
        text-align: center
        display: inline-block
        .content-text
          margin: 0 auto
          text-align: center
          height: .5rem
          line-height: .5rem
          border-radius: .3rem
          border: 1px solid rgb(255, 198, 155)
          width: 1.5rem
          background-color: rgb(255, 243, 235) 
          color: #ffa052
      .contentLast
        clear: both
        float: right
        width: 25%
        margin: .1rem 0
        text-align: center
        display: inline-block
        .content-text-last
          margin: 0 auto
          text-align: center
          height: .5rem
          line-height: .5rem
          border-radius: .3rem
          border: 1px solid rgb(255, 198, 155)
          width: 1.5rem
          background-color: rgb(255, 243, 235) 
          color: #ffa052
    .space
      height: .2rem
      background-color: #f1f1f1
      margin-top: .2rem
</style>