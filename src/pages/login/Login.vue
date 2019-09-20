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
      <van-tabs v-model="tabIdx" @change="loginName = ''">
        <van-tab title="身份证登录"></van-tab>
        <van-tab title="手机号登录"></van-tab>
      </van-tabs>
    </div>
    <!-- input -->
    <div class="inputBox">
      <input 
        v-model="loginName"
        class="idnetyInput" 
        type="text" 
        :placeholder="tabIdx===0?'请输入身份证':'请输入手机号'" >
      <div class="pwdBox">
        <input class="pwdInput" type="password" placeholder="请输入验证码">
        <div class="code" @click="getCode">获取验证码</div>
        <!-- <span class="iconfont eye-icon
        ">&#xe6b1;</span> -->
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
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      tabIdx: 0,
      loginName: '',
    }
  },
  methods: {
    getCode () {
      if(this.tabIdx === 1){
        axios.post('https://api.xiaoyilan.com/api/message/getCode', {
          mobile: this.loginName,
          type: 'login',
        }).then(res => {
          console.log(res.data)
        })
        // console.log(this.loginName)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
// 引入样式公共变量
@import '../../assets/styles/varibles.styl'
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
    .idnetyInput
        height: .6rem
        width: 80%
        text-indent: .3rem
        margin: .5rem .72rem .1rem 
        background-color: #eee
        border-radius: .15rem
    .pwdBox
      display: flex
      .pwdInput
        height: .6rem
        width: 54%
        text-indent: .3rem
        margin: .5rem .2rem .1rem .72rem
        background-color: #eee
        border-radius: .15rem
      .code
        text-align: center
        height: .6rem
        line-height: .6rem
        width: 26%
        margin: .5rem .72rem .1rem  .5rem
        background-color: $bgColor
        border-radius: .15rem
    // .pwdBox
    //   position: relative
    //   .eye-icon
    //     position: absolute
    //     right: 13%
    //     top: 50%
  .button
    height: .8rem
    line-height: .8rem
    margin: .5rem .72rem .1rem
    background-color: $bgColor
    color: #fff
    text-align: center
    font-size: .4rem
    border-radius: .15rem
  .wrapper
    height: .76rem
    line-height: .76rem
    margin: .3rem .72rem
    .regis
      color: $bgColor
      float: left
    .forgetPwd
      color: $bgColor
      float: right
</style>