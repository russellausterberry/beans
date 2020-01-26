<template>
  <section class="section has-text-centered">
    <div v-show="stepsVisible">
      <a class="button is-size-4 is-white">⬅️</a>
      <a class="button subtitle is-5" @click="stepsVisible=!stepsVisible">Make Available</a>
      <a class="button is-size-4 is-white">➡️</a>
      <!-- 'make available' steps progress bar -->
      <ul class="steps has-content-centered">
        <li class="steps-segment" v-bind:class="{'is-active':stepsSupplier}">
          <span class="steps-marker"></span>
          <div class="steps-content">
            <p class="subtitle is-5">Supplier</p>
            <p>Choose supplier to set availability for</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsMethod}">
          <span class="steps-marker"></span>
          <div class="steps-content">
            <p class="subtitle is-5">Method</p>
            <p>Choose how to set availability</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsMap}">
          <span class="steps-marker"></span>
          <div class="steps-content">
            <p class="subtitle is-">Map</p>
            <p>If needed match supplier fields to relevant import fields</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsSkip}">
          <span class="steps-marker"></span>
          <div class="steps-content">
            <p class="subtitle is-5">Skip</p>
            <p>If needed check which items to skip by default</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsSplit}">
          <span class="steps-marker"></span>
          <div class="steps-content">
            <p class="subtitle is-5">Split</p>
            <p>Assign each word of item to relevant field</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsSift}">
          <span class="steps-marker"></span>
          <div class="steps-content">
            <p class="subtitle is-5">Sift</p>
            <p>Assign each item a category and optionally a packing category</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsCull}">
          <span class="steps-marker"></span>
          <div class="steps-content">
            <p class="subtitle is-5">Cull</p>
            <p>Uncheck any items you do NOT wish to make available</p>
          </div>
        </li>
      </ul>
    </div>
    
    <div>
      <a class="button subtitle is-5" v-show="!stepsVisible" @click="stepsVisible=!stepsVisible">⬇️</a>
    </div>

    <SelectSupplier></SelectSupplier>
    <MapFields></MapFields>
    <SkipItems></SkipItems>
    <SplitItems></SplitItems>
    <AddCategories></AddCategories>
    <CullSelection></CullSelection>
  </section>
</template>

<script>
// import SelectSupplier from "./SelectSupplier"
// import MapFields from "./MapFields"
// import SkipItems from "./SkipItems"
// import SplitItems from "./SplitItems"
// import AddCategories from "./AddCategories"
// import CullSelection from "./CullSelection"
export default {
  data: function() {
    return {
      stepsStatus: [
        { supplier: false },
        { method: false },
        { map: false },
        { skip: false },
        { split: false },
        { sift: false },
        { cull: false }
      ],
      stepsVisible: true
    };
  },
  methods: {
    navigateSteps(name, direction) {
      // set current class to !is-active
      if (direction === "next") {
        // set next element to is-active
      } else {
        // set previous element to is-active
      }
    }
  }
  //   components: {
  //     SelectSupplier,
  //     MapFields,
  //     SkipItems,
  //     SplitItems,
  //     AddCategories,
  //     CullSelection
  //   }
};
</script>