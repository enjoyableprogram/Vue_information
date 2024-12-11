<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">
        默认内容是 left
      </slot>
    </div>

    <div class="center">
      <slot name="center">
        默认内容是 center
      </slot>
    </div>

    <div class="right">
      <slot name="right">
        默认内容是 right
      </slot>
    </div>
  </div>
</template>

<script>
 export default {
   name: 'slotComponentName',
 }
</script>

<style scoped>
  .nav-bar {
    display: flex;

    .left, .right {
      width: 200px;
      background: coral;
    }

    .center {
      flex: 1;
      background: #812424;
    }

    .left, .right, .center {
      height: 44px;
      line-height: 44px;
    }
  }
</style>