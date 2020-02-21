import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import VueRouter from 'vue-router'
import PouchDB from 'pouchdb-browser'
import App from './App.vue'
import { routes } from './routes'

Vue.config.productionTip = false

Vue.component('v-select', vSelect);
Vue.use(VueRouter);

let db = new PouchDB('drat');
console.log(db);

require("./assets/main.scss");

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
