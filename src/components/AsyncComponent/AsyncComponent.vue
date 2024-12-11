<template>
  <div class="async">
    <h2>
      <HomeAsync></HomeAsync>
    </h2>
  </div>
</template>

<script>
  import {defineAsyncComponent} from "vue"  // 导入我们的异步组件函数
  const HomeAsync = defineAsyncComponent(() => import("./home.vue"))  // 定义异步组件
  export default {
    name: "AsyncComponent",
    components: {
      HomeAsync,
    }
  }
</script>