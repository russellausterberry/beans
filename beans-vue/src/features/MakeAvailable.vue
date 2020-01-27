<template>
  <section class="section has-text-centered">
    <div v-show="stepsVisible">
      <div>
        <button class="subtitle" @click="stepsVisible=!stepsVisible">^</button>
      </div>
      <hr>
      <div class="columns">
        <a class="column has-text-centered has-text-grey" @click="previous(currentStep)">Previous</a>
        <a class="column subtitle" >Make Available</a>
        <a class="column has-text-centered has-text-grey" @click="next(currentStep)">Next</a>
      </div>
      <!-- without the following line the 'Previous' and 'Next' buttons don't work (!) -->
      <p v-show="false">{{ currentStep }}</p>


      <!-- 'make available' steps progress bar -->
      <ul class="steps has-content-centered">
        <li class="steps-segment" v-bind:class="{'is-active':stepsActive[0]}">
          <span class="steps-marker">1</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepsActive[0]}">Supplier</p>
            <p>Choose supplier to set availability for</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsActive[1]}">
          <span class="steps-marker">2</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepsActive[1]}">Method</p>
            <p>Choose how to set availability</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsActive[2]}">
          <span class="steps-marker">3</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepsActive[2]}">Map</p>
            <p>If needed match supplier fields to relevant import fields</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsActive[3]}">
          <span class="steps-marker">4</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepsActive[3]}">Skip</p>
            <p>If needed check which items to skip by default</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsActive[4]}">
          <span class="steps-marker">5</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepsActive[4]}">Split</p>
            <p>Assign each word of item to relevant field</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsActive[5]}">
          <span class="steps-marker">6</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepsActive[5]}">Sift</p>
            <p>Assign each item a category and optionally a packing category</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepsActive[6]}">
          <span class="steps-marker">7</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepsActive[6]}">Cull</p>
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
      currentStep: 1,
      stepsActive: [  // index 0 = step 1, etc
        true,
        false,
        false,
        false,
        false,
        false,
        false
      ],
      stepsVisible: true
    };
  },
  methods: {
    // assume position for step 1 to be 1 (not 0)
    next(position) {
      if (position < this.stepsActive.length) {
        this.currentStep++;
        this.stepsActive[position-1] = false; // reset current step
        this.stepsActive[position] = true;    // activate next step
      }
    },
    previous(position) {
      if (position > 1) {
        this.currentStep--;
        this.stepsActive[position-1] = false; // reset current step
        this.stepsActive[position-2] = true;  // activate previous step
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