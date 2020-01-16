<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from "./shared/Header.vue";

export default {
  name: "app",
  components: {
    Header
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
  // 6. add '@import "~bulma/css/bulma.css";' to this <style> tag
  // 7. add html with Bulma classes to confirm working
  // 5. remove this <style> tag, add 'main.scss' to assets folder, with line 'import "~bulma/bulma"
  // 6. in main.js add line 'require("./assets/main.scss")
  // 10. confirm Bulma still works
  //
</style>
