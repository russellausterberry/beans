import Vue from 'vue'
import VuePapaParse from 'vue-papa-parse'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'
import PouchDB from 'pouchdb'

// WORKING: create database, create document, update document, sync to server db
var db = new PouchDB('testator');
var remoteCouch = 'http://127.0.0.1:5984/testator';
console.log(db.name + " created ok");
console.log(remoteCouch + " .. is just a string");

db.put({
    _id: "item_1",      /* combo table name & ID */
    itemName: "banana",
    description: "long curved yellow delicious herb"
}).then(function (response) {
    console.log(response);
}).catch(function (err) {
    console.log(err);
});

db.get('item_1').then(function (doc) {
    console.log(doc);
}).catch(function (err) {
    console.log(err);
});

db.get('item_1').then(function(doc){
    return db.put({
        _id: 'item_1',
        _rev: doc._rev,
        description: "simply yummy'"
    });
}).then(function(response) {
    console.log(response);
}).catch(function(err) {
    console.log(err);
});

PouchDB.sync('testator', 'http://127.0.0.1:5984/testator', {
    live: true,
    retry: true
}).on('complete', function (info) {
    console.log(info);
}).on('error', function (err) {
    console.log(err);
});

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
  render: h => h(App),
}).$mount('#app')
