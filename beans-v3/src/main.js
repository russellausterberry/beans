// import packages
import Vue from 'vue'
import VueCompositionApi from "@vue/composition-api"
import App from './App'
import VueRouter from 'vue-router'
import PouchDB from 'pouchdb'
import vSelect from 'vue-select'
import VueSingleSelect from 'vue-single-select'
import VueMultiSelect from 'vue-simple-multi-select'

// import files
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Datetime } from 'vue-datetime'
import { CoolSelectPlugin } from 'vue-cool-select'

// import css files
import 'vue-datetime/dist/vue-datetime.css'
import 'vue-cool-select/dist/themes/material-design.css'

library.add( fas )

import { routes } from './routes'
const couchPath = 'http://127.0.0.1:5984/'

/* eslint-disable */
// create local & remote dbs for the group
var CF_admin            = new PouchDB('CF-admin')
var CF_items            = new PouchDB('CF_items')
var CF_members          = new PouchDB('CF_members')
var CF_suppliers        = new PouchDB('CF_suppliers')
var CF_orders           = new PouchDB('CF_orders')
var CF_invoices         = new PouchDB('CF_invoices')

var remote_CF_admin     = couchPath + 'CF_admin'
var remote_CF_items     = couchPath + 'CF_items'
var remote_CF_members   = couchPath + 'CF_members'
var remote_CF_suppliers = couchPath + 'CF_suppliers'
var remote_CR_orders    = couchPath + 'CF_orders'
var remote_CF_invoices  = couchPath + 'CF_invoices'
/* eslint-enable */

Vue.config.productionTip = false

Vue.component('v-select', vSelect)
Vue.component('vue-single-select', VueSingleSelect)
Vue.component('vue-multi-select', VueMultiSelect)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('datetime', Datetime)

Vue.use(VueRouter)
Vue.use(VueCompositionApi)
Vue.use(CoolSelectPlugin)

require("./assets/main.scss")

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  router,
//   store,    /* inject store instance to all child components */
  render: h => h(App),
}).$mount('#app')
