import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
import HelloWorld from "@/components/HelloWorld.vue";

// 实现的是分步骤进行挂载组件
const app = createApp(App)

app.component('HelloWorld', HelloWorld)  // 实现注册全局组件

app.mount('#app')