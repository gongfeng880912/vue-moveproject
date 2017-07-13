<template>
  <div class="aaa">
    <button @click="tan">按钮</button>
    <mt-popup
      v-model="popupVisible"
      position="right">
          弹出框
      </mt-popup>
  </div>
</template>
<script>
    export default {

      methods:{
        tan () {
            this.popupVisible = true
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .aaa
    width: 200px
    height: 200px
</style>
