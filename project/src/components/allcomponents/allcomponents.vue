<template>
  <div class="all-wrapper">
    <scroller>
    <div>
      <ul class="all-ul">
        <li class="all-li">
        <a href="http://localhost:8083/cook#/detail/:id">
          <img src="../img/all1.jpg" />
        </a>
          <dl>家居服</dl>
      </li>
        <li class="all-li">
          <a>
            <img src="../img/all2.jpg" />
          </a>
          <dl>家居服</dl>
        </li>
        <li class="all-li">
          <a>
            <img src="../img/all3.jpg" />
          </a>
          <dl>家居服</dl>
        </li>
        <li class="all-li">
          <a>
            <img src="../img/all4.jpg" />
          </a>
          <dl>家居服</dl>
        </li>
        <li class="all-li">
          <a>
            <img src="../img/all1.jpg" />
          </a>
          <dl>家居服</dl>
        </li>
        <li class="all-li">
          <a>
            <img src="../img/all6.jpg" />
          </a>
          <dl>家居服</dl>
        </li>
        <li class="all-li">
        <a>
          <img src="../img/all8.jpg" />
        </a>
        <dl>家居服</dl>
      </li>
        <li class="all-li">
          <a>
            <img src="../img/all7.jpg" />
          </a>
          <dl>家居服</dl>
        </li>
      </ul>
      <div class="all-text-img">
        <img src="../img/text.jpg"/>
      </div>
    </div>
    <new-p></new-p>
    </scroller>
  </div>
</template>
<script>
  import newP from '../new-p1/new-p1.vue'
    export default {
      components:{
          newP
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .all-wrapper
   background: #F2F2F2
   .all-ul
     margin-top :95px
     width:100%
     overflow :hidden
     background: #fff
     margin-bottom :22px
     .all-li
       width:25%
       height:99px
       float:left
       text-align :center
       padding: 10px 0
       img
         width: 75px
         height: 75px
        dl
          text-align :center
   .all-text-img
     img
       width: 100%
       height: 150px
</style>
