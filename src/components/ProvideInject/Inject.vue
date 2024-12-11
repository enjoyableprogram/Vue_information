<template>
  <div>
    <h2>我是Inject组件</h2>
    <div>
      {{ name }}-{{ age }}
    </div>
  </div>
</template>

<script>
 export default {
   name: "Inject",
   // 开始导入我们的其他地方的数据
   data() {
     return {

     }
   },
   inject: ["name", "age"]
 }
</script>

<style scoped>

</style>