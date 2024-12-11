<template>
  <div class="Category">
    <h2>Category</h2>
    <div>{{ counter }}</div>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
  export default {
    name: "Category",
    data() {
      return {
        counter: 0
      }
    },
    unmounted() {
      console.log("组件已经被销毁")
    }
  }
</script>