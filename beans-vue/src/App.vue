<template>
  <div id="app">
    <Navbar></Navbar>
    <MakeAvailable></MakeAvailable>
  </div>
</template>

<script>
import Navbar from "./shared/Header";
import MakeAvailable from "./features/make-available/ma";
export default {
  name: "app",
  components: {
    Navbar,
    MakeAvailable
  }
};
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
