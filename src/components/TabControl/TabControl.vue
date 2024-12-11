<template>
  <div class="tabControl">
    <!-- 一共含有两个部分 导航栏 + 内容区 -->
    <tabBanner :arr="arr" @tab-item-click="tabClick">
      <template v-slot:default="props">
        <button>{{ props.item }}-{{ props.index + 1 }}</button>
      </template>
    </tabBanner>

    <tabContext :desc="desc" :currentIndex="currentIndex"></tabContext>
  </div>
</template>

<script>
 import tabBanner from "./tabBanner.vue"
 import tabContext from "./tabContext.vue"

 export default {
   name: "TabControl",
   components: {
     tabBanner,
     tabContext
   },

   data() {
     return {
       arr: ["商品一", "商品二", "商品三", "商品四"],
       desc: ["商品一详情信息", "商品二详情信息", "商品三详情信息", "商品四详情信息"],
       currentIndex: 0,
     }
   },

   methods: {
     tabClick(index) {
       this.currentIndex = index
     }
   }
 }
</script>

<style scoped>

</style>