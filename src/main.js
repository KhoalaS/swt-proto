import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../js/leaflet-providers.js";

import "./assets/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faCalendarDays,
  faCrosshairs,
  faEye,
  faEyeSlash,
  faRightLeft,
  faXmark,
  faRightLong,
  faCaretRight,
  faCaretDown,
  faSpinner,
  faBusSimple,
} from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
library.add([
  faCrosshairs,
  faRightLeft,
  faArrowLeft,
  faArrowRight,
  faCalendarDays,
  faBars,
  faXmark,
  faEye,
  faEyeSlash,
  faGoogle,
  faFacebook,
  faTwitter,
  faApple,
  faRightLong,
  faCaretRight,
  faCaretDown,
  faSpinner,
  faBusSimple
]);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
