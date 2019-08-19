import Vue from "vue";
import AutoResponsive from "autoresponsive-vue";

import { store } from "./store/index";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(AutoResponsive);

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
