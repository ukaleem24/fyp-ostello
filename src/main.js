import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from "./components/ui/BaseButton.vue";
import TheHeader from "./components/nav/TheHeader.vue";
import TheFooter from "./components/nav/TheFooter.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/stylesheets/style.css";
import "./assets/stylesheets/responsive.css";

const app = createApp(App);

app.component("BaseButton", BaseButton);
app.component("TheHeader", TheHeader);
app.component("TheFooter", TheFooter);

app.use(store).use(router).mount("#app");
