<template>
  <div class="app">
    <AppHeader></AppHeader>
    <AppContent></AppContent>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
 // 导入子组件
 import AppHeader from "./components/App/AppHeader.vue"
 import AppContent from "./components/App/AppContent.vue"
 import AppFooter from "./components/App/AppFooter.vue"

 export default {
   name: 'App',
   // 注册子组件
   components: {
     AppHeader,
     AppContent,
     AppFooter,
   },
   data() {
     return {

     }
   },
   methods: {},
   computed: {},
   watch: {}
 }
</script>

<style scoped>
  .app {
    width: 80%;
    margin: auto auto;
    text-align: center;
    border: 1px solid skyblue;
    box-sizing: border-box;
    background-color: rgba(255, 0, 0, .1);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>