<template>
  <div class="tabBanner">
    <div
        class="tabBanner-item"
        :class="{active: index === currentIndex}"
        v-for="(item, index) in arr"
        @click="itemClick(index)"
        key="index">
      <slot :item="item" :index="index">
        <span>{{ item }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
 export default {
   name: "tabBanner",

   props: {
     arr: {
       type: Array,
       default: () => ([1, 2, 3, 4])
     }
   },

   data() {
     return {
       currentIndex: 0
     }
   },

   emits:["tabItemClick"],
   methods: {
     itemClick(index) {
       this.currentIndex = index
       this.$emit("tabItemClick", index)
     }
   }
 }
</script>

<style scoped>

 .tabBanner {
   display: flex;
   height: 44px;
   line-height: 44px;
   text-align: center;

   .tabBanner-item {
     flex: 1;
   }

   .active span {
     color: red;
     font-weight: bold;
     border-bottom: 3px solid red;
     cursor: pointer;
   }

   :hover span{
     color: blue;
     font-weight: bold;
     border-bottom: 2px solid blue;
     cursor: pointer;
   }
 }

</style>