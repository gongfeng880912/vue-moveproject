<template>
  <div class="item-footer">
    <ul class="footer-ul">
      <li class="footer-li" @click="pupop">
        <div class="footer-pic"></div>
        <p>客服</p>
      </li>
      <router-link tag='li' class="footer-li" to="/page">
        <div class="footer-pic"></div>
        <p>首页</p>
      </router-link>
    </ul>
    <router-link tag="div" class="footer-car"  to="/car"></router-link>
    <button class="footer-button">加入购物车</button>
    <mt-popup v-model="popupVisible">
     <button @click="pupop">关闭</button>
      <div>
      <h1>请选择服务类型</h1>
      <p>客服电话8888888888</p>
      <p>在线客服</p>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  export default {
      data () {
          return {
            popupVisible:false
          }
      },
    methods:{
      pupop () {
          this.popupVisible = !this.popupVisible
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .item-footer
    background: #eee
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    height: 49px
    z-index: 1000
    .footer-li
      float :left
      width: 50px
      height: 25px
      text-align :center
    .cat-m
    .footer-pic
      display: inline-block
      width: 25px
      height: 25px
      background-image: url('../img/pagehome.png')
      background-repeat: no-repeat
      background-size: 20px 20px
  .footer-button
    width :168px
    height: 40px
    background: #009D42
    position :absolute
    right :10px
    top:5px
    border :none
    border-radius :6px
    color :white
    font-size :17px
  .footer-car
    width: 80px
    height: 40px
    border :1px solid  #009D42
    border-radius :10px
    background-image:url('../img/4.png')
    background-repeat :no-repeat
    background-position: 40%
    background-size:25px 25px
    position:absolute
    right :190px
    top:5px
</style>
