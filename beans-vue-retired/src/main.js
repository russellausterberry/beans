// import packages
import Vue from 'vue'
import VueRouter from 'vue-router'
import PouchDB from 'pouchdb'
import VuePapaParse from 'vue-papa-parse'
import vSelect from 'vue-select'

// import files
import App from './App.vue'
import { routes } from './routes'
import store from './store/store'
import 'vue-select/dist/vue-select.css'

const couchPath = 'http://127.0.0.1:5984/';

/* eslint-disable */
// create local & remote dbs for the group
var CF_admin            = new PouchDB('CF-admin');
var CF_items            = new PouchDB('CF_items');
var CF_members          = new PouchDB('CF_members');
var CF_suppliers        = new PouchDB('CF_suppliers');
var CF_orders           = new PouchDB('CF_orders');
var CF_invoices         = new PouchDB('CF_invoices');

var remote_CF_admin     = couchPath + 'CF_admin';
var remote_CF_items     = couchPath + 'CF_items';
var remote_CF_members   = couchPath + 'CF_members';
var remote_CF_suppliers = couchPath + 'CF_suppliers';
var remote_CR_orders    = couchPath + 'CF_orders';
var remote_CF_invoices  = couchPath + 'CF_invoices';
/* eslint-enable */

Vue.config.productionTip = false

Vue.component('v-select', vSelect)
Vue.use(VuePapaParse)
Vue.use(VueRouter)

require("./assets/main.scss");

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  store,    /* inject store instance to all child components */
  render: h => h(App),
}).$mount('#app')
