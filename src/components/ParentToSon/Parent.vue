<template>
  <div class="parent">
    <h2>我是父组件</h2>
    <Son name="juwenzhang" :age=18 :height=170 :active="true"></Son>
    <Son name="76433" :age=19 :height=170></Son>
    <Son name="水逆信封" :age=17 :height=170></Son>
    <Son name="433"></Son>

    <div>父组件中的数字为: {{ counter }}</div>
    <Son01 @changeNum="FBtnClick"></Son01>
  </div>
</template>

<script>
  import Son from "./Son.vue"
  import Son01 from "./Son01.vue"
  export default {
    name: "Parent",
    components: {
      Son,
      Son01
    },
    data() {
      return {
        counter: 0
      }
    },

    methods: {
      FBtnClick: function (count) {
        this.counter += count
      }
    }
  }
</script>

<style scoped>
  .parent {
    background: indianred;
    margin: 10px 0;
  }
</style>