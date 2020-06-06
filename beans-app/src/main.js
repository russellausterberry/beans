import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'

// routing
import VueRouter from 'vue-router'
import routes from './router/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
