<template>
  <div class="count">
    <div class="add">
      <button @click="btnClick(1)">+1</button>
      <button @click="btnClick(5)">+5</button>
      <button @click="btnClick(10)">+10</button>
    </div>
    <div class="sub">
      <button @click="btnClick(-1)">-1</button>
      <button @click="btnClick(-5)">-5</button>
      <button @click="btnClick(-10)">-10</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Son01",
    emits: {
      changeNum: function (count) {
        return count <= 10;
      }
    },
    methods: {
      // 开始实现定义我们的子组件中给父组件中触发的事件
      btnClick: function (count) {
        // 发送事件
        // 第一个参数是我们自定义的事件名称
        // 第二个参数时需要的参数
        this.$emit("changeNum", count);
      }
    }
  }
</script>

<style scoped>
  .count {
    background-color: silver;
  }
</style>