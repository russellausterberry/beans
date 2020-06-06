<template>
  <div id="app">
    <!-- register named router views -->
    <router-view name="header"></router-view>
    <router-view name="home"></router-view>

    <router-view name="orderCycle"></router-view>
    <router-view name="availablility"></router-view>
    <router-view name="ordering"></router-view>
    <router-view name="printing"></router-view>
    <router-view name="adjusting"></router-view>
    <router-view name="payments"></router-view>
    
    <router-view name="admin"></router-view>
    <router-view name="manage-db"></router-view>
    <router-view name="orders"></router-view>
    <router-view name="stock"></router-view>
    <router-view name="suppliers"></router-view>
    <router-view name="members"></router-view>
    <router-view name="reports"></router-view>
    <router-view name="settings"></router-view>

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
