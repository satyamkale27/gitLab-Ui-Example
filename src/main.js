import Vue from "vue";
import App from "./App.vue";
import setConfigs from "@gitlab/ui/dist/config";
import "@gitlab/ui/dist/index.css";

setConfigs();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
