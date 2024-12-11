<template>
  <div class="about">
    <h2>about</h2>
    <div>{{ counter }}</div>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
  export default {
    name: 'About',
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