import Vue from "vue";
import App from "./App.vue";
import setConfigs from "@gitlab/ui/dist/config";

setConfigs();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
