<template>
  <div>
    <Steps @currentStepChanged="currentComponent=$event"></Steps>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
  import Steps from "./ma-steps"
  import Supplier from "./ma-supplier"
  import Method from "./ma-method"
  import Map from "./ma-map"
  import Skip from "./ma-skip"
  import Split from "./ma-split"
  import Sift from "./ma-sift"
  import Cull from "./ma-cull"

  export default {
    data: function() {
      return {
        currentComponent: "Supplier"
      }
    },
    components: {
      Steps,
      Supplier,
      Method,
      Map,
      Skip,
      Split,
      Sift,
      Cull
    }
  };
</script>