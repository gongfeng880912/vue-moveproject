<template>
  <div class="set-wrapper">
    <div class="boost">
      <div class="black">
        <p class="header-black">设置</p>
        <router-link to="/username">
          <div class="black-j"></div>
        </router-link>
      </div>
    </div>
    <div class="clear">
      <span>清理缓存</span>
    </div>
    <div class="clear">
      <span>关于lifeVC生活</span>
      <span class=“set-span”>平台: browser 版本：5.1.2 - 261</span>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.set-wrapper
  position :fixed
  left: 0
  right: 0
  bottom: 0
  top: 0
  background: #eee
  z-index :10
  .black
    width: 100%
    height: 48px
    background: #89BE48
    position: relative
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
    .black-j
      width: 20px
      height: 100%
      position: absolute
      top: 0
      left: 0
      background-image: url('../img/j.png')
      background-size: 15px 20px
      background-repeat: no-repeat
      background-position: 10px 15px
  .clear
    width: 100%
    height: 62px
    line-height :62px
    background: white
    margin-bottom :15px
    padding-left:20px
    .set-span
       margin-left :150px
       color: #eee
       font-size :-5px

</style>
