
<template>
  <div>
    <ul class="login-ul">
      <li class="login-li">
        <a>
          <span class="bg-span"></span>
          <span>待支付</span>
        </a>
        |
      </li>
      <li class="login-li">
        <a>
          <span class="bg-span"></span>
          <span>待支付</span>
        </a>
        |
      </li>
      <li class="login-li">
        <a>
          <span class="bg-span"></span>
          <span>待支付</span>
        </a>
      </li>
      <li class="login-li">
        <a>
          <span class="bg-span"></span>
          <span>待支付</span>
        </a>
        |
      </li>
      <li class="login-li">
        <a>
          <span class="bg-span"></span>
          <span>待支付</span>
        </a>
        |
      </li>
      <li class="login-li">
        <a>
          <span class="bg-span"></span>
          <span>待支付</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .login-ul
    width: 100%
  .login-li
    width: 33.33%
    float: left
    height: 45px
    text-align: center
    padding :20px 0 0 0
    border-bottom : 1px solid #eee
    a
      margin-bottom :2px
      .bg-span
        display inline-block
        width: 42px
        height: 36px
        background-image:url('../img/l.png')
        background-size: 42px 36px
        background-repeat: no-repeat
        vertical-align :middle
</style>
