import { createApp } from "vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import vue3StarRatings from "vue3-star-ratings";

import auth from "@websanova/vue-auth/src/v3";

import TheHeader from "./components/nav/TheHeader.vue";
import TheFooter from "./components/nav/TheFooter.vue";
import LoadingAnimation from "./components/ui/LoadingAnimation.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/stylesheets/style.css";
import "./assets/stylesheets/responsive.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("vue3-star-ratings", vue3StarRatings);
app.component("TheHeader", TheHeader);
app.component("TheFooter", TheFooter);
app.component("LoadingAnimation", LoadingAnimation);

app.use(VueAxios, axios);

app.use(auth);
app.provide("axios", app.config.globalProperties.axios);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC2R8Dd5E4Y7zyBcTucoM39UDWksTC1zD8",
    libraries: "places",
  },
});

app.use(store).use(router).mount("#app");
