<template>
  <div class="bg">
    <SearchHeader/>
  </div>
</template>

<script>
import SearchHeader from './components/Header'
export default {
  name: 'Search',
  components: {
    SearchHeader,
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