<template>
  <div>
    <div class="black11">
      <p class="header-black11">闲逛</p>
    </div>
    <scroller>
    <div class="wrapper-w">
      <div class="wrapper1 icon-img">
        <div class="for-item">
          <img src="../img/x.jpg" alt="无法显示此图像" usemap ="#planetmap"/>
          <map id ="planetmap" name="planetmap">
            <area shape ="rect" coords ="0,0,60,60" href ="http://localhost:8083/#/homepage" alt="Sun" />
          </map>
          <a>分类整理收纳箱</a>
          <div>
          <span class="s-1">￥<em>49</em></span>
          <span class="s-2">月销4082</span>
          </div>
        </div>
        <div class="for-item">
          <img src="../img/x1.jpg"/>
          <a>分类整理收纳箱</a>
          <div>
            <span class="s-1">￥<em>49</em></span>
            <span class="s-2">月销4082</span>
          </div>
        </div>
        <div class="for-item">
          <img src="../img/x2.jpg"/>
          <a>分类整理收纳箱</a>
          <div>
            <span class="s-1">￥<em>49</em></span>
            <span class="s-2">月销4082</span>
          </div>
        </div>
        <div class="for-item">
          <img src="../img/x3.jpg"/>
          <a>分类整理收纳箱</a>
          <div>
            <span class="s-1">￥<em>49</em></span>
            <span class="s-2">月销4082</span>
          </div>
        </div>
        <div class="for-item">
          <img src="../img/x.jpg"/>
          <a>分类整理收纳箱</a>
          <div>
            <span class="s-1">￥<em>49</em></span>
            <span class="s-2">月销4082</span>
          </div>
        </div>
      </div>
      <div class="wrapper2 icon-img">
        <div class="header-right">
          <div><span>49元包1年</span></div>
          <div><span>新品上新</span></div>
          <div><span>送500元积分</span></div>
          <div><span>金币</span></div>
        </div>
        <div class="for-item">
          <img src="../img/x2.jpg"/>
          <a>分类整理收纳箱</a>
          <div>
            <span class="s-1">￥<em>49</em></span>
            <span class="s-2">月销4082</span>
          </div>
        </div>
        <div class="for-item">
          <img src="../img/x.jpg"/>
          <a>分类整理收纳箱</a>
          <div>
            <span class="s-1">￥<em>49</em></span>
            <span class="s-2">月销4082</span>
          </div>
        </div>
        <div class="for-item">
          <img src="../img/x.jpg"/>
          <a>分类整理收纳箱</a>
          <div>
            <span class="s-1">￥<em>49</em></span>
            <span class="s-2">月销4082</span>
          </div>
        </div>
        <div class="for-item">
          <img src="../img/x.jpg"/>
          <a>分类整理收纳箱</a>
          <div>
            <span class="s-1">￥<em>49</em></span>
            <span class="s-2">月销4082</span>
          </div>
        </div>
      </div>
    </div>
    </scroller>
    </div>
</template>
<script>
  import Bscroll from 'better-scroll'
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .black11
    width: 100%
    height: 48px
    background: #89BE48
    position :relative
    z-index :10000
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
  .wrapper-w
    display: flex
   /* overflow-y :scroll
    &::-webkit-scrollbar
      width:0
      height:0*/
    .wrapper1
      flex: 1
    .wrapper2
      flex: 1
    .icon-img
     .header-right
       width:172.75px
       height:124.44
       margin:10px
       font-size :12px
       div
         width :80px
         height:56px
         border-radius :10px
         background: #EAEAEA
         text-align :center
         line-height :58.78px
         float :left
         margin :2px
     .for-item
      margin :8px
      img
        width: 172.75px
        height:223.55px
        border-radius :6px
      a
        color: #333;
        text-decoration: none;
        font-size: 14px;
      .s-1
        font-size: 20px;
        line-height: 18px;
        display: inline-block;
        color: #ff475d;
        font-weight: 400;
        overflow: hidden;
        text-align: left;
        width: auto;
        margin: 2px 0
      .s-2
        font-size: 16px;
        line-height: 18px;
        width: auto;
        max-width: none;
        overflow: hidden;
        float: right;
        display: inline-block;
        text-align: right;
        color: #999;
        white-space: nowrap;
        word-break: keep-all;
        text-overflow: ellipsis;
</style>
