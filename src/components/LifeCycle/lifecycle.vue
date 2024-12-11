<template>
  <div class="lifecycle">
    <h2>{{ counter }}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
 export default {
   name: "LifeCycle",
   data() {
     return {
       counter: 0,
     }
   },
   // 开始实现我们的声明周期函数的书写
   // 组件被创建之前的函数
   beforeCreate() {
     console.log("组件被创建之前~~~")
   },
   created() {
     console.log("组件被创建后~~~")
     console.log("开始发送网络请求获取数据~~~")
     console.log("监听数据变化，添加事件")
   },
   beforeMount() {
     console.log("组件准备挂载")
   },
   mounted() {
     console.log("组件成功被挂载")
     console.log("获取DOM 使用DOM")
   },
   beforeUpdate() {
     console.log("页面的数据被更新前")
   },
   updated() {
     console.log("DOM 以及数据已经被更新")
   },
   beforeUnmount() {
     console.log("准备卸载 DOM")
   },
   unmounted() {
     console.log("DOM 被卸载完成")
   }
 }
</script>

<style scoped>

</style>