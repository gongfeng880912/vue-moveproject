<template>
  <div class="login-mask">
    <div class="login-header">
      <span class="cir"  @click="skip"></span>
      <img src="../img/lifevc.png"/>
    </div>
    <div class="login-bg">
      <h1>老用户登录</h1>
      <input type="text" placeholder="请输入手机号" class="big-input"/>
      <input type="button" value="获取验证码" class="button-right" v-show="isHide"/>
      <input type="text" :placeholder="password" class="big-input"/>
      <input type="button" value="忘记密码" class="button-right" v-show="isShow"/>
      <span @click="tab(isShow)">{{login}}</span>
      <input type="button" class="big-button  big-b" value="登录"/>

    <input type="button"  class="big-button big-u" value= "注册" @click="register" />
    </div>
  </div>
</template>
<script>
  export default {
      props:['cutShow','tabShow'],
    data () {
      return {
        login: '手机号快捷登录>',
        password: '请输入登录密码',
        isShow: true,
        isHide:false,
      }
    },
    methods: {
      tab (show) {
        this.isShow = !this.isShow
        this.isHide = !this.isHide
        this.password = show ? '请输入手机验证码' : '请输入登录密码'
        this.login = show ? '手机号快捷登录>' : '遇到问题？请联系客服账号密码登录>'
      },
      skip () {
          this.$router.go(-1)
      },
      register () {
          this.$router.replace('/usernameregister')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login-mask
    position: fixed
    z-index: 1000
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: white
    .login-header
      width: 100%
      height: 141px
      text-align: center
      img
        width: 120px
        height: 61.73px
        margin-top: 45px
      .cir
        display: inline-block
        border-radius: 50%
        width: 30px
        height: 30px
        border: 1px solid #037049
        color: #037049
        position: absolute
        left: 15px
        top: 45px
    .login-bg
      width: 100%
      height: 526px
      background-image: url('../img/login-bg.jpg')
      background-repeat: no-repeat
      background-size: 100% 526px
      position :relative
      h1
        width: 100%
        height: 84px
        text-align: center
        line-height: 84px
        color: #037049;
        font-size: 20px;
      .big-input
        outline: none
        background: transparent
        width: 337.5px
        height: 50px
        font-size: 16px;
        box-sizing: border-box;
        border-bottom: 1px solid #DEDEDE
        margin-left: 20px
      span
        float: right;
        margin-right: 10px;
        margin-top: 10px
        color: #7BC278
      .big-button
        width: 300px
        height: 50px
        border-radius: 10px
        margin: 20px 30px
        outline: none
      .big-b
        background: #41d326
      .big-u
        background: rgba(184, 184, 184, .5)
      .button-right
        position :absolute
        width :120px
        height :35px
        border-radius :8px
        border :1px solid #41d326
        font-size :20px
        color : #41d326
        right :5px
      .big-u
        margin-bottom :5px
</style>
