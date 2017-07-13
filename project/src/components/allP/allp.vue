<template>
  <div class="wrapper">
    <div class="boost">
      <div class="black">
        <p class="header-black">全部产品</p>
      </div>
      <div class="input-w">
        <div v-show="isShow" @click="search">
          <input class="show-button" placeholder="搜索商品"></input>
        </div>
        <div v-show="isHide">
          <input type="text" placeholder="搜索商品" class="search"/>
          <input class="exit" value="取消" @click="search"/>
        </div>
      </div>
    </div>
    <scroller>
      <div class="all-wrapper">
        <shoplist></shoplist>
      </div>
    </scroller>
  </div>
</template>
<script>
  import shoplist from '../shoplist/shoplist.vue'
  export default {
    data () {
      return {
        isShow: true,
        isHide: false
      }
    },
    methods: {
      //点击切换input的状态
      search () {
        this.isShow = !this.isShow
        this.isHide = !this.isHide
      }
    },
    components: {
      shoplist
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .boost
    position: relative
    z-index: 1000
    .black
      width: 100%
      height: 48px
      background: #89BE48
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
    .input-w
      box-sizing: border-box
      width: 100%
      height: 48px
      background: #F2F2F2
      padding: 6px 6px 3px 12px
      .search
        width: 270px
        height: 36px
        border-radius: 6px
        background-image: url('../img/search.png')
        background-repeat: no-repeat
        background-size: 26px 26px
        background-position: 6px 5px
        font-size: 16px
        padding-left: 38px
        margin-right: 5px
        outline: none
      .exit
        width: 12%
        height: 36px
        display: block
        float: right
        background: none
        background-color: transparent
        border: 0
        text-align: right
        font-size: 15px
        color: #83b842
        line-height: 36px
      .show-button
        text-align: center
        width: 352.5px
        height: 36px
        margin: 0 auto
        border-radius: 6px
        background-image: url('../img/search.png')
        background-repeat: no-repeat
        background-size: 26px 26px
        background-position: 35%
</style>
