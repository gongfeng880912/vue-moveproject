<template>
  <div>
    <div class="black2">
      <a href="#" class="a-left"><</a>
      <p class="header-black2">商品介绍</p>
    </div>
    <scroller class="scroll-wrapper">
      <carousel></carousel>
      <div class="item-price">
        <div class="title">超柔卫生马桶垫（2套装）</div>
        <p>随手一贴，养成如厕好习惯</p>
        <em class="em-text">￥</em>
        <em>9</em>
        <img src="../img/new.png"/>
      </div>
      <div class="red-tab">
        <span class="span1">优惠</span>
        <router-link to="/usernamelogin" tag="span">登录查看你的积分优惠卷</router-link>
      </div>
      <deatilone></deatilone>
      <deatiltwo></deatiltwo>
    </scroller>
    <detailfooter></detailfooter>
  </div>
</template>
<script>
  import carousel from '../carousel/carousel.vue'
  import deatilone from '../detailone/detailone.vue'
  import deatiltwo from '../detailtwo/detailtwo.vue'
  import detailfooter from '../detailfooter/detailfooter.vue'
  export default {
    components: {
      carousel,
      deatilone,
      deatiltwo,
      detailfooter
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .scroll-wrapper
    margin-top: 47px
    height:250px
  .black2
    width: 100%
    height: 48px
    background: #89BE48
    position: relative
    z-index: 10000
    .header-black2
      text-align: center
      line-height: 43px
      width: 80%
      margin: 0 auto
      font-size: 20px
      color: white
      white-space: nowrap
      overflow: hidden
      text-overflow ellipsis
    .a-left
      display : inline-block
      color :white
      font-size :20px
      position :absolute
      left :10px
      top:11px
  .item-price
   width:100%
   height:100px
   padding: 15px 0
   .title
     padding: 0
     text-align: center
     font-size: 20px
     color: #000
     height: 20px
     line-height:20px
   p
     text-align: center;
     font-size: 10;
     color: #999;
     height: 10px;
     line-height: 10px;
     margin-top: 10px;
     margin-bottom :5%
   .em-text
     font-size :100%
     margin-left :40%
   img
     width: 12px
     height:12px
     vertical-align: baseline;
     margin-left:3px
  .red-tab
    width:100%
    height: 38px
    border-bottom :1px solid #eee
    border-top :1px solid #eee
    line-height :38px
    margin-left: 10px
    sapn
      font-size :6px
    .span1
      background: red
      color:white
</style>
