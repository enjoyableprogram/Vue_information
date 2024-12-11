<template>
  <div class="content">
    <slot>
      <h2>{{ title }}</h2>
      <h2>我是默认内容</h2>
    </slot>
  </div>
</template>

<script>
 export default {
   name: 'slotComponent',
   props: {
     title: {
       type: String,
       default: "default slot"
     }
   }
 }
</script>