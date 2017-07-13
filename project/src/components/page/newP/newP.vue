<template>
  <div class="new-p">
    <scroller>
        <div class="new-text">
          <router-link to="/detail/:id"> 最近一周新品</router-link>
        </div>
        <newp1></newp1>
    </scroller>
    <router-view></router-view>
  </div>
</template>
<script>
  import newp1 from '../../new-p1/new-p1.vue'
  export default {
      components:{
        newp1
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .new-p
    padding: 0 7.5px
    background: #eee
    /*margin-top :95px*/
    .new-text
      margin-top :95px
      width: 100%
      height: 38px
      text-align: center
      line-height: 38px
      font-size: 20px
      color: black

</style>
