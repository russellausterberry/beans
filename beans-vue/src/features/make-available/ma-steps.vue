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
        <li class="steps-segment" v-bind:class="{'is-active':stepActive[0]}">
          <span class="steps-marker">1</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepActive[0]}">Supplier</p>
            <p v-bind:class="{'is-size-7 has-text-grey-light':!stepActive[0]}">Choose supplier to set availability for</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepActive[1]}">
          <span class="steps-marker">2</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepActive[1]}">Method</p>
            <p v-bind:class="{'is-size-7 has-text-grey-light':!stepActive[1]}">Choose how to set availability</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepActive[2]}">
          <span class="steps-marker">3</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepActive[2]}">Map</p>
            <p v-bind:class="{'is-size-7 has-text-grey-light':!stepActive[2]}">If needed match supplier fields to import fields</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepActive[3]}">
          <span class="steps-marker">4</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepActive[3]}">Skip</p>
            <p v-bind:class="{'is-size-7 has-text-grey-light':!stepActive[3]}">If needed check which items to skip by default</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepActive[4]}">
          <span class="steps-marker">5</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepActive[4]}">Split</p>
            <p v-bind:class="{'is-size-7 has-text-grey-light':!stepActive[4]}">Assign each word of item to relevant field</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepActive[5]}">
          <span class="steps-marker">6</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepActive[5]}">Sift</p>
            <p v-bind:class="{'is-size-7 has-text-grey-light':!stepActive[5]}">Assign each item a category and optionally a packing category</p>
          </div>
        </li>
        <li class="steps-segment" v-bind:class="{'is-active':stepActive[6]}">
          <span class="steps-marker">7</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!stepActive[6]}">Cull</p>
            <p v-bind:class="{'is-size-7 has-text-grey-light':!stepActive[6]}">Uncheck any items you do NOT wish to make available</p>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <a class="button subtitle is-5" v-show="!stepsVisible" @click="stepsVisible=!stepsVisible">⬇️</a>
    </div>

  </section>
</template>

<script>
  export default {
    data: function() {
      return {
        currentStep: 1,   // 1 correlates to step 1, etc
        stepActive: [     // index 0 correlates to step 1, etc
          true,
          false,
          false,
          false,
          false,
          false,
          false
        ],
        componentList: [  // index 0 correlates to step 1 component ("Supplier"), etc
          "Supplier",
          "Method",
          "Map",
          "Skip",
          "Split",
          "Sift",
          "Cull"
        ],
        stepsVisible: true  //controls visibility of entire steps component
      };
    },
    methods: {
      next(pos) {
        if (pos < this.stepActive.length) { 
          pos--;                            // convert to 0-based array index
          this.stepActive[pos] = false;     // reset current step
          this.stepActive[pos+1] = true;    // activate next step
          this.currentStep++;               // increment
          this.$emit('currentStepChanged', this.componentList[pos+1]);
        }
      },
      previous(pos) {
        if (pos > 1) {                      
          pos--;                            // convert to 0-based array index
          this.stepActive[pos] = false;     // reset current step
          this.stepActive[pos-1] = true;    // activate previous step
          this.currentStep--;               // decrement
          this.$emit('currentStepChanged', this.componentList[pos-1]);
        }
      }
    }    
  }
</script>

<style lang="" scoped>
  
</style>