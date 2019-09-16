<template>
  <div class="login">
    <!-- 返回 -->
    <div class="header border-bottom">
      <router-link
        to="/"
        class="iconfont back-icon">&#xe624;
      </router-link>
      <div class="text">登录</div>
    </div>
    <!-- logo -->
    <div class="logoBox">
      <img class="logo" src="../../images/ddys.png">
    </div>
    <!-- tab切换 -->
    <div >
      <van-tabs @click="change">
        <van-tab title="身份证登录" name="a"></van-tab>
        <van-tab title="手机号登录" name="b"></van-tab>
      </van-tabs>
    </div>
    <!-- input -->
    <div class="inputBox">
      <input class="idnetyInput" type="text" placeholder="请输入身份证号">
      <div class="pwdBox">
        <input class="pwdInput" type="password" placeholder="请输入密码">
        <span class="iconfont eye-icon
        ">&#xe6b1;</span>
      </div>
    </div>
    <!-- 登录按钮 -->
    <div class="button">登录</div>
    <!-- 新用户注册，忘记密码 -->
    <div class="wrapper">
      <div class="regis">新用户注册</div>
      <div class="forgetPwd">忘记密码?</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      activeName: 'a'
    }
  },
  methods: {
    change (e) {
      if (e == 'a') {
        document.getElementsByClassName('idnetyInput')[0].placeholder = '请输入身份证号'
      }else{
        document.getElementsByClassName('idnetyInput')[0].placeholder = '请输入手机号'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-bottom
    &:before
      background-color: #eee
  .header
    height: 1rem
    line-height: 1rem
    display: flex
    font-size: .36rem
    text-align: center
    .back-icon
      position: absolute
      font-size: .45rem
      padding-left: .2rem
      color: #666
    .text
      flex: 1
  .logoBox
    margin-top: .3rem
    padding: .3rem 0
    text-align : center
    .logo
      width: 1.2rem
      height: 1.2rem
  .van-tabs >>> .van-tabs__line
    background-color: #ffa052
  .inputBox
    text-align: center
    .idnetyInput, .pwdInput
      height: .6rem
      width: 80%
      text-indent: .3rem
      margin: .5rem .72rem .1rem 
      background-color: #eee
      border-radius: .15rem
    .pwdBox
      position: relative
      .eye-icon
        position: absolute
        right: 13%
        top: 50%
  .button
    height: .8rem
    line-height: .8rem
    margin: .5rem .72rem .1rem
    background-color: #ffa052
    color: #fff
    text-align: center
    font-size: .4rem
    border-radius: .15rem
  .wrapper
    height: .76rem
    line-height: .76rem
    margin: .3rem .72rem
    .regis
      color: #ffa052
      float: left
    .forgetPwd
      color: #ffa052
      float: right
</style>