<template>
  <!-- 书写我们的主要内容部分-->
  <div class="content">
    <div class="banner"></div>
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
    </div>

    <ParentToSon></ParentToSon>

    <TabControl></TabControl>

    <show-message></show-message>

    <ProvideInject></ProvideInject>
  </div>
</template>

<script>
  import ParentToSon from "../ParentToSon/ParentToSon.vue"
  import TabControl from "../TabControl/TabControl.vue"
  import showMessage from "../showMessage/showMessage.vue";
  import ProvideInject from "../ProvideInject/ProvideInject.vue";
  export default {
    name: "AppContent",
    components: {
      ParentToSon,
      TabControl,
      showMessage,
      ProvideInject,
    }
  }
</script>

<style scoped>
  .content {
    background-color: skyblue;
    margin: 10px 0;
  }
</style>