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
      <div class="content">
        <div class="content-text"
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
        // text-align: center
        float: left
        // display: flex
        .content-text
          margin: .1rem .07rem .1rem .15rem
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