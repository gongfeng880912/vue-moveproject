<template>
  <div>
    <ele-header></ele-header>
    <div class="wrapper">
      <ul class="tab">
        <router-link tag="li" class="tab-item" to="/homepage"><a>首页</a></router-link>
        <router-link tag="li" class="tab-item" to="/newP">新品</router-link>
        <router-link tag="li" class="tab-item" to="/home"><a>家务</a></router-link>
        <router-link tag="li" class="tab-item" to="/cook"><a>下厨</a></router-link>
        <router-link tag="li" class="tab-item" to="/coat"><a>家居服</a></router-link>
        <router-link tag="li" class="tab-item" to="/life"><a>生活</a></router-link>
        <router-link tag="li" class="tab-item" to="/soft"><a>软装</a></router-link>
        <router-link tag="li" class="tab-item" to="/bed"><a>床品</a></router-link>
        <router-link tag="li" class="tab-item" to="/worktravel"><a>工作和旅行</a></router-link>
        <li tag="li" class="tab-item" @click="pupop"><a>LifeVC</a></li>
      </ul>
    </div>
    <router-view></router-view>
    <mt-popup v-model="popupVisible" position="right">
        <div class="black11" @click="pupop">
          <p class="header-black11">了解lifeVC生活</p>
          <div class="black-j"></div>
        </div>
        <img src="../img/n1.jpg">
    </mt-popup>
  </div>
</template>
<script>
  import header from '../header/header.vue'
  export default {
    data () {
      return {
        popupVisible: false
      }
    },
    methods: {
      pupop () {
        this.popupVisible = !this.popupVisible
      }
    },
    components: {
      'ele-header': header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/minxis.styl'
  .wrapper
    overflow-x: scroll
    color: #333333
    &::-webkit-scrollbar
      width: 0
      height: 0
    .tab
      font-size: 0
      width: 100%
      text-align: center
      white-space: nowrap
      float: left
      background: #fff
      position: relative
      z-index: 1000
      .tab-item
        font-size: 14px
        width: 80px
        border-bottom: 2px solid #DDD
        height: 45.59px
        line-height: 45.59px
        display: inline-block
        background: #fff
        box-sizing: border-box
      .active
        border-bottom: 2px solid green
        .black11
          width: 100%
          height: 48px
          background: #89BE48
          text-align center
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
  </style>
