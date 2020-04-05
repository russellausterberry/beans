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

<script>
</script>

<style lang="scss">
  // ===================== Regarding Bulma ====================
  //
  // to make Bulma (css framework) play well with Vue:
  // 1. install vue
  // 2. "vue create [project name]"
  // 3. cli preferences: Babel, linter, CSS Pre-processors (SCSS/SASS), dedicated files
  // 4. "npm install bulma"
  // 5. "npm run serve" (check project is up)
  // 7. add html with Bulma classes to confirm working
  // 5. remove this <style> tag, add 'main.scss' to assets folder, with line 'import "~bulma/bulma"
  // 6. in main.js add line 'require("./assets/main.scss")
  // 10. confirm Bulma still works
  //
</style>
