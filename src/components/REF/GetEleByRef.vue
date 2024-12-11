<template>
  <div class="getRef">
    <h2 ref="title">hello world</h2>
    <button @click="changeTitle">修改我们的title</button>
  </div>
</template>

<script>
  export default {
    name: "GetEleByRef",
    methods: {
      changeTitle() {
        console.log(this.$refs.title)
        this.$refs.title.innerHTML = this.$refs.title.innerHTML === "hello vue" ? "hello world" : "hello vue"
        console.log(this.$parent)
        console.log(this.$root)
      }
    }
  }
</script>

<style scoped>

</style>