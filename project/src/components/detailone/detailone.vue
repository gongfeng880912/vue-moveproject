<template>
  <div>
    <div class="add-wrapper">
      <div class="add-color">颜色:</div>
      <img src="../img/load.jpg"/>
      <img src="../img/load.jpg"/>
    </div>
    <div class="add-button">
      <span>数量:</span>
      <button @click="add(true)">+</button>
      <span class="add-input">{{num}}</span>
      <button @click="add(false)">-</button>
    </div>
  </div>
</template>
<script>
  export default {
      data () {
          return {
              num:1
          }
      },
    methods:{
          add (bool) {
              if(bool){
                  this.num++
              }else if(!bool){
                  if(this.num<=1){
                      return
                  }
                  this.num--
              }
          }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .add-wrapper
    width: 100%
    height: 83px
    margin-left: 10px
    margin-top: 15px
    font-size: 14px
    .add-color
      margin-bottom: 5px
    img
      width: 48px
      height: 48px
      border: 1px solid green
  .add-button
    width: 100%
    height: 42px
    margin-left: 10px
    font-size: 15px
    button
      width: 27px
      height: 27px
      line-height: 27px
    .add-input
      display: inline-block
      width: 38px
      height: 27px
      border: 1px solid #eee
      text-align: center
      line-height: 27px
      margin: 0

  .add-address
    width:100%
    height: 40px
    margin-left :10px
</style>
