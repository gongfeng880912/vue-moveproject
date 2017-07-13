<template>
  <div class="car-wrapper">
    <div class="black11">
      <p class="header-black11">购物车</p>
      <router-link to="/username"><div class="black-j"></div></router-link>
    </div>
    <div class="login">
      <a>登录</a>
      <span>你可以在登录后同步电脑与手机购物车中的商品</span>
    </div>
    <div class="input-wrapper">
      <input placeholder="礼品兑换处，请输兑换码" class="input-left" v-model="value"/>
      <button  class="input-right" @click="come">兑换</button>
    </div>
    <div class="car-img">
      <div class="img-w">
      <img src="../img/car.png" />
      </div>
      <p>你的购物车空荡荡的</p>
      <div class="a-w">
        <a href="#/page">感紧去逛逛</a>
      </div>
    </div>
    <div class="car-text">
      <p>Rico.S为你精心推荐</p>
    </div>
    <scrollX></scrollX>
  </div>

</template>
<script>
  import scrollX from '../scroll-x/scroll-x.vue'
  export default {
      data () {
          return {
              value:''
      }
      },
      methods:{
         come () {
             if(this.value === ''){
               alert('兑换码为空')
             }
             return
         }
      },
      components:{
        scrollX
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .black11
    width: 100%
    height: 48px
    background: #89BE48
    .header-black11
      text-align: center
      line-height: 48px
      width: 80%
      margin: 0 auto
      font-size: 20px
      color: white
      white-space: nowrap
      overflow: hidden
      text-overflow ellipsis
    .black-j
      width: 20px
      height:100%
      position :absolute
      top :0
      left:0
      background-image:url('../img/j.png')
      background-size :15px 20px
      background-repeat :no-repeat
      background-position : 10px 15px
  .login
    display :flex
    width:100%
    height: 40px
    background: #F0FAE6
    padding:4px
    text-align :center
    line-height :40px
  .input-wrapper
    height: 40px
    width:100%
    padding: 6px
    .input-left
      width: 285px
      height: 35.59px
      color:#E8E8E8
      text-align :center
      line-height :35px
      border :1px solid #eee
    .input-right
      width: 69.75px
      height: 34px
      border :1px solid green
      text-align :center
      line-height :34px
    a
      width: 70px
      height:30px
      display :block
      border :2px solid green
      background: white
      margin :5px
    span
      display :table-cell
      width:100%
      text-align :left
      font-size :15px
  .car-img
    background: #F2F2F2
    padding-bottom :10px
    .img-w
      wihth:100%
      height: 170px
      text-align :center
      img
        width: 160px
        height:160px
    p
      width:100%
      height: 27px
      text-align :center
      font-size :20px
    .a-w
      width:100%
      height:40px
      text-align :center
      a
       display :inline-block
       width:118px
       height:34px
       border :1px solid #6FBD00
       color:#6FBD00
       font-size :16px
       border-radius :6px
       line-height :34px
  .car-text
    width:100%
    height:44.19px
    border-bottom:2px solid #eee
    line-height :44.19px
    p
      width: 352.5px
      height: 24px
      font-size :18px
      margin: 0 auto

</style>
