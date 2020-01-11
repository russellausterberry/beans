<template>
  <div id="app">
    <app-header></app-header>
    <app-navbar></app-navbar>
    <app-body></app-body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './shared/Header'
import Navbar from './shared/Navbar'
import Body from './shared/Body'
import Footer from './shared/Footer'

export default {
  components: {
    'app-header': Header,
    'app-navbar': Navbar,
    'app-body': Body,
    'app-footer': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
