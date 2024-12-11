<template>
  <div class="tabContext">
    <h2 class="tab-context-item">{{ detailInfo }}</h2>
  </div>
</template>

<script>
 export default {
   name: "tabContext",

   props: {
     desc: {
       type: Array,
       required: true
     },
     currentIndex: {
       type: Number,
       required: true
     }
   },

   computed: {
     detailInfo: function () {
       return this.desc[this.currentIndex]
     }
   }
 }
</script>

<style scoped>
  .tab-context-item {
    color: red
  }
</style>