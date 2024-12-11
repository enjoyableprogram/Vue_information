<template>
  <div class="app">
    <lifecycle v-if="isUnmounted"></lifecycle>
    <button @click="isUnmounted = !isUnmounted">实现组件卸载操作</button>

    <GetEleByRef ref="GetEleByRef"></GetEleByRef>
    <button @click="getComponent">实现获取组件内容</button>

    <Dynamics></Dynamics>
  </div>
</template>

<script>
 import lifecycle from "./components/LifeCycle/lifecycle.vue"
 import GetEleByRef from "./components/REF/GetEleByRef.vue"
 import Dynamics from "./components/DynamicsComponent/Dynamics.vue";
 export default {
   name: "App",
   data() {
     return {
       isUnmounted: true
     }
   },
   components: {
     lifecycle,
     GetEleByRef,
     Dynamics
   },
   methods: {
     getComponent() {
       console.log(this.$refs.GetEleByRef)
       console.log(this.$refs.GetEleByRef.$el)
       this.$refs.GetEleByRef.changeTitle()
     }
   }
 }
</script>

<style scoped>

</style>