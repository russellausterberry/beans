<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="home"></router-view>
    <router-view name="orderCycle"></router-view>
    <router-view name="makeAvailable"></router-view>
    <router-view name="orderSupplies"></router-view>
    <router-view name="printSheets"></router-view>
    <router-view name="adjustOrders"></router-view>
    <router-view name="enterPayments"></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
//   padding: 90px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>