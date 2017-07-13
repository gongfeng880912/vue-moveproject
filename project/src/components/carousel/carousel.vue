<template>
  <div>
    <div class="carousel">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../img/p1.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../img/p2.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../img/p3.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../img/p4.jpg"/></mt-swipe-item>
        <mt-swipe-item><img src="../img/p5.jpg"/></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .carousel
    width: 100%
    height: 250px
    img
      width: 100%
      height: 250px
</style>
