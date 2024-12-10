import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')


// 实现的是分步骤进行挂载组件
const app = createApp(App)
app.mount('#app')