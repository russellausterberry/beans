// app
import Vue from 'vue'
import App from './App'
require("./assets/main.scss")
Vue.config.productionTip = false

// state management
import VueCompositionApi from "@vue/composition-api"
Vue.use(VueCompositionApi)

// routing
import VueRouter from 'vue-router'
import { routes } from './routes'
Vue.use(VueRouter)
const router = new VueRouter({ routes })

// 'select' helpers
// import vSelect from 'vue-select'
// import VueSingleSelect from 'vue-single-select'
// import VueMultiSelect from 'vue-simple-multi-select'
import { CoolSelectPlugin } from 'vue-cool-select'
import 'vue-cool-select/dist/themes/material-design.css'
import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(CoolSelectPlugin)

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add( fas )

// date-time picker
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
Vue.component('datetime', Datetime)

// enable CORS requests


/* eslint-disable no-new */
// showtime!
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// create local & remote dbs for the group
// let CF_admin = new PouchDB('CF_admin')
// CF_admin.info()

// var CF_items            = new PouchDB('CF_items')
// var CF_members          = new PouchDB('CF_members')
// var CF_suppliers        = new PouchDB('CF_suppliers')
// var CF_orders           = new PouchDB('CF_orders')
// var CF_invoices         = new PouchDB('CF_invoices')

// var remote_CF_admin = new PouchDB(couchPath + 'CF_admin')
// var remote_CF_items     = couchPath + 'CF_items'
// var remote_CF_members   = couchPath + 'CF_members'
// var remote_CF_suppliers = couchPath + 'CF_suppliers'
// var remote_CR_orders    = couchPath + 'CF_orders'
// var remote_CF_invoices  = couchPath + 'CF_invoices'