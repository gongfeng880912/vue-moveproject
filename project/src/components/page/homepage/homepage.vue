<template>
  <div class="home-wrapper">
    <scroller class="scroll-w">
      <carousel></carousel>
      <div class="less-time">
        <img src="../../img/home.jpg" alt="无法显示此图像" usemap="#planetmap"/>
        <map id="planetmap" name="planetmap">
          <area shape="rect" coords="0,9,123,88"
                href="http://m.lifevc.com/h5/#/activity/promotionsnotime/App_DHHDsubject070803" alt="Sun"/>
          <area shape="rect" coords="123,9,251,90"
                href="http://m.lifevc.com/h5/#/inner/http:%2F%2Fm.lifevc.com%2Factivity%2FDrawShareGoods%23s=%7Bsession%7D"
                alt="Mercury"/>
          <area shape="rect" coords="251,9,375,89"
                href="http://m.lifevc.com/h5/#/inner/http:%2F%2Fm.lifevc.com%2Factivity%2FIntegralTimeOut%23s=%7Bsession%7D"
                alt="Venus"/>
        </map>
      </div>
      <div class="home-box">
        <img src="../../img/home1.jpg" alt="无法显示此图像" usemap="#planetmap1"/>
        <map id="planetmap1" name="planetmap1">
          <area shape="rect" coords="0,0,375,150" href="http://localhost:8083/#/allP" alt="Sun"/>
        </map>
      </div>
      <div class="long-img">
        <img src="../../img/long.jpg">
      </div>
      <div class="long-two">
        <img src="../../img/long-two.jpg">
      </div>
      <div class="long-food">
        <img src="../../img/food.jpg">
      </div>
      <div class="long-h">
        <img src="../../img/long-h.jpg">
      </div>
      <div class="long-home">
        <img src="../../img/long-home.jpg">
      </div>
      <div class="long-home">
        <img src="../../img/long-home.jpg">
      </div>
      <div class="very-long">
        <img src="../../img/very-long.jpg">
      </div>
      <div class="very-long">
        <img src="../../img/very-long.jpg">
      </div>
    </scroller>
  </div>
</template>
<script>
  import carousel from '../../carousel/carousel.vue'
  export default {
      data (){
          return {
              loading:false
          }
      } ,
      methods:{
        loadMore() {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
          },1000)

        }
      },
      components:{
        carousel

      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .home-wrapper
    width:100%
    .scroll-w
      margin-top :95px
    .less-time
      img
        width: 100%
        height: 90px
    .home-box
      margin-top :10px
      img
        width: 100%
        height: 150px
    .long-img
      margin-top :10px
      img
        width: 100%
        height: 925px
    .long-two
      margin-top :10px
      img
        width: 100%
        height:238px
    .long-food
      margin-top :10px
      img
        width :100%
        height:310px
    .long-h
      margin-top :10px
      img
       width:100%
       height:689px
    .long-home
      margin-top :10px
      img
        width:100%
        height:689px
    .very-long
      margin-top :10px
      img
        width:100%
        height:1079px
</style>
