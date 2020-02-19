import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

require("./assets/main.scss");

var PouchDB = require('pouchdb');

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
