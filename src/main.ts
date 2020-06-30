import Vue from "vue";

import App from "./App.vue";
import router from "@plugins/router";
import store from "@plugins/store";
import vuetify from "@plugins/vuetify";
import Database from "@api/db";
import config from "@config";


Vue.config.productionTip = false;
Vue.prototype.$api = new Database(config.DB_NAME, config.DB_VERSION, config.DB_DESC);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
