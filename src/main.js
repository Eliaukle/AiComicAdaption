import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from "naive-ui"; // 引入ui框架
import { createPinia } from "pinia"; // 引入pinia
import { router } from "./common/router"; // 引入路由

const app = createApp(App);

app.use(naive); // 引入ui框架
app.use(createPinia()); // 引入pinia

app.use(router); // 引入路由

app.mount("#app");
