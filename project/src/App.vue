<template>
  <div>
    <router-view></router-view>
    <div class="footer-bottom">
      <ul class="tooter-ul">
        <li class="footer-item">
          <router-link to="/page">
            <div class="icon homepage" ></div>
            <span>首页</span>
          </router-link>
        </li>
        <li class="footer-item">
          <router-link to="/allP">
            <div class="icon all"></div>
            <span>全部产品</span>
          </router-link>
        </li>
        <li class="footer-item">
          <router-link to="/stroll">
            <div class="icon stroll"></div>
            <span>闲逛</span>
          </router-link>
        </li>
        <li class="footer-item">
          <router-link to="/car">
            <div class="icon car"></div>
            <span>购物车</span>
          </router-link>
        </li>
        <li class="footer-item">
          <router-link to="/username">
            <div class="icon username"></div>
            <span>账户中心</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer-bottom
    width :100%
    height :55px
    position :fixed
    bottom :0
    font-size :12px
    text-align :center
    background: #F8F8F8
    border-top :1px solid #DDDDDD
    .tooter-ul
      .footer-item
        width :20%
        float:left
        margin :0 auto
        .icon
          width:100%
          height :40px
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: 28%;
          margin-bottom :-4px
        .active
          color:green
        .homepage
          background-image :url('./components/img/pagehome.png')
        .all
          background-image :url('./components/img/2.png')
        .stroll
          background-image :url('./components/img/3.png')
        .car
          background-image :url('./components/img/4.png')
        .username
          background-image :url('./components/img/5.png')
      </style>
