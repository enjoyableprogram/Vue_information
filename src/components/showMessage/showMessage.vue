<template>
  <slot-component title="我是插槽">
    <button>我是按钮元素</button>
  </slot-component>
  <slot-component title="我是插槽">
    <a href="#">百度一下</a>
  </slot-component>
  <slot-component title="我是插槽">
    <img src="../../../public/img01.png" alt="">
  </slot-component>
  <slot-component title="我是插槽">
  </slot-component>

  <slot-component-name>
    <template v-slot:left>
      <button>返回首页</button>
    </template>

    <template v-slot:center>
      <span>主要内容</span>
    </template>

    <template v-slot:right>
      <a href="#">登录/退出</a>
    </template>
  </slot-component-name>
</template>

<script>
 import slotComponent from "./slotComponent.vue"
 import slotComponentName from "./slotComponentName.vue"
 export default {
   name: 'ShowMessage',
   components: {
     slotComponent,
     slotComponentName,
   }
 }
</script>

<style scoped>

</style>