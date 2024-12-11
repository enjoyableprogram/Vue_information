<template>
  <div class="Dynamics">
    <div class="Dynamics-group">
      <div v-for="(tab, index) in tabs" key="index"
           class="Dynamics-item">
        <button
            :class="{active: index === currentIndex}"
            @click="changeIndex(index)">
          {{ tab }}
        </button>
      </div>
    </div>

    <!-- 通过逻辑判断来实现我们的决定什么显示什么不显示 -->
    <div class="context">
      <template v-if="currentIndex === 0">
        <keep-alive>
          <Home></Home>
        </keep-alive>
      </template>

      <template v-if="currentIndex === 1">
        <keep-alive>
          <about></about>
        </keep-alive>
      </template>

      <template v-if="currentIndex === 2">
        <keep-alive>
          <category></category>
        </keep-alive>
      </template>
    </div>

    <!-- 开始实现我们的动态组件来实现判断显示什么组件 -->
    <div class="context">
      <!-- include 里面的名称来自于我们的在子组件中定义的时候对组件的命名 -->
      <!-- is 中实现定义的组件，来自于我们的导入的时候的组件命名 -->
      <keep-alive include="Home,about">
        <component :is="tabs[currentIndex]"></component>
      </keep-alive>
    </div>

  </div>
</template>

<script>
  import Home from "./views/Home.vue";
  import about from "./views/About.vue";
  import category from "./views/Category.vue";
  export default {
    name: 'Dynamics',
    components: {
      Home,
      category,
      about,
    },
    data() {
      return {
        tabs: ["home", "about", "category"],
        currentIndex: 0,
      }
    },
    methods: {
      changeIndex(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .Dynamics-group {
    width: 200px;
    border-top: 2px solid red;
    margin-top: 10px;
    display: flex;

    .Dynamics-item {
      flex: 1;
    }
    .active {
      background-color: deepskyblue;
    }
  }
</style>