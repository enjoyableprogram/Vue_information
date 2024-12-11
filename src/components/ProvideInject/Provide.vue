<template>
  <div>
    <h2>我是Provide组件</h2>
    <Inject></Inject>
    <div>
      {{ name }}-{{ age }}
    </div>
  </div>
</template>

<script>
import Inject from "./Inject.vue"
 export default {
   name: 'Provide',
   components: {
     Inject
   },
   data() {
     return {

     }
   },
   inject: ["name", "age"]
 }
</script>

<style scoped></style>