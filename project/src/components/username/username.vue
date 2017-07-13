<template>
  <div class="user-wrapper">
    <div class="boost">
      <div class="black">
        <p class="header-black">账户中心</p>
        <a class="set" href="#/setting">设置</a>
      </div>
    </div>
    <div class="user-bg">
      <div class="user-w">
        <span class="user-text">你还未登录</span>
        <div class="user-login">
          <router-link to="/usernamelogin" tag="a" >登录</router-link>
          |
          <router-link to="/usernameregister" tag="a" >注册</router-link>

        </div>
      </div>
    </div>
    <username1></username1>
    <username2></username2>
  </div>
</template>
<script>
  import username1 from '../usernmae-1/username-1.vue'
  import username2 from '../username2/username2.vue'
  /*import usernamelogin from '../usernamelogin/usernamelogin.vue'
  import usernameregister from '../usernameregister/usernameregister.vue'*/
  export default {

      components:{
          username1,
          username2
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .black
    width: 100%
    height: 48px
    background: #89BE48
    position: relative
    .header-black
      text-align: center
      line-height: 48px
      width: 80%
      margin: 0 auto
      font-size: 20px
      color: white
      white-space: nowrap
      overflow: hidden
      text-overflow ellipsis
    .set
      display: inline-block
      font-size: 19px;
      color: #fff;
      line-height: 48px;
      margin-right: 2%;
      position: absolute;
      right: 2%;
      top: 0;
      z-index: 9;

  .user-bg
    width: 100%
    height: 103px
    background: #eee
    padding-top:5px
    .user-w
      width:100%
      height: 86px
      .user-text
        display inline-block
        width: 100%
        height: 36px
        text-align: center;
        font-size: 17px;
        line-height: 36px;
      .user-login
        height: 38px
        width:137.47px
        margin :0 auto
        border: 2px solid #63C28A
        border-radius :20px
        color:#63C28A
        font-size :16px
        text-align :center
        line-height :38px
        margin-top :6px
        a
         color:#63C28A
</style>
