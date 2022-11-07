import { createApp } from "vue";
import Router from "./router/index.js";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);
app.use(Router);
app.mount("#app");
