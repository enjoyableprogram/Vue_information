<template>
  <div class="app">
    <Provide></Provide>
  </div>
</template>

<script>
  import Provide from "./Provide.vue"
  export default {
    name: "ProvideInject",
    components: {
      Provide,
    },
    data(){
      return {
        name: "provideInject",
        age: 18
      }
    },
    // 开始实现我们的父组件依赖注入数据
    provide() {
      return {
        name: this.name,
        age: this.age
      }
    }
  }
</script>

<style scoped>

</style>