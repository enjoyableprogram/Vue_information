<template>
  <div class="son">
    <h2>我是子组件</h2>
    <div v-bind="$attrs">
      <div>父组件传递的信息姓名为: {{ name }}</div>
      <div>父组件传递的信息年纪为: {{ age }}</div>
      <div>父组件传递的信息身高为: {{ height }}</div>
      {{friend}}{{hobbies}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Son",
    // props: ["name", "age", "height"]
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default Name",
        required: true
      },

      age: {
        type: Number,
        default: 0
      },

      height: {
        type: Number,
        default: 0
      },

      friend: {
        type: Object,
        default: () => ({ name: "jj" })
      },

      hobbies: {
        type: Array,
        default: () => ["111", "222"]
      },
    }
  }
</script>

<style scoped>
  .son {
    background: coral;
  }
</style>