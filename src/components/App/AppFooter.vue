<template>
  <!-- 脚注书写 -->
  <div class="footer">
    <div>版权声明</div>
    <div>负责声明</div>
    <div>物流配送</div>
  </div>
</template>

<script>
  export default {
    name: "AppFooter"
  }
</script>

<style scoped>
  .footer {
    background-color: yellowgreen;
    display: flex;
    div {
      flex: 1;
    }
  }
</style>