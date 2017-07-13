<template>
  <div>
    <div class="header-t">
      <div class=" header-bg">
      </div>
      <a href="http://localhost:8083/#/allP" class="header-type"></a>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header-t
    position :relative
    width:100%
    height: 48px
    background: #88C13E
    z-index :1000
    .header-bg
      width: 100%
      height :100%
      background-image:url('../img/1 (7).png')
      background-repeat :no-repeat
      background-size :187px 24px
      background-position :94px  12px
    .header-type
      display: inline-block
      position :absolute
      right :0
      top:0
      width :43.98px
      height :43.98px
      background-image:url('../img/1 (8).png')
      background-repeat :no-repeat
      background-size :19px 19px
      background-position :14px 14px
</style>
