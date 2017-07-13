<template>
  <div class="login-mask">
    <div class="login-header">
      <span @click="skip" class="cir" ></span>
      <img src="../img/lifevc.png"/>
    </div>
    <div class="login-bg">
      <h1>新用户注册</h1>
      <input type="text" placeholder="请输入手机号" class="big-input"/>
      <input type="text" placeholder="请设置6-20位密码,包含字母、数字或符号" class="big-input"/>
      <input type="text" placeholder="请输入图形验证码" class="big-input"/>
      <input type="text" placeholder="请输入手机验证码" class="big-input"/>
      <span>遇到问题？请<a>联系客服</a></span>
      <input type="button" class="big-button big-b" value="注册"/>
      <input  type="button"  class="big-button  big-u" value="登录" @click="register" />
    </div>
  </div>
</template>
<script>
    export default {
        methods:{
            skip () {
                this.$router.go(-1)
            },
          register () {
                this.$router.replace('/usernamelogin')
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
        margin-right: 100px;
        margin-top: 10px
      .big-button
        width: 300px
        height: 50px
        border-radius: 10px
        margin: 10px 30px
        outline: none
      .big-b
        background: #41d326
      .big-u
        background: rgba(184,184, 184, .5)
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
