<template>
  <!-- 头部的书写 -->
  <div class="header">
    <div class="top">top banner</div>
    <input type="text">
    <div class="nav">nav banner</div>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader',
  }
</script>

<style scoped>
  .header {
    background-color: orange;
    display: flex;
    text-align: center;
  }
  .top, input, .nav {
    flex: 1;
  }
</style>