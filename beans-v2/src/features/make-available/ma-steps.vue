<template>
    <div>
        <div v-show="stepsVisible">
            <font-awesome-icon icon="chevron-up"
                class="fa-2x nav-guide"
                @click="stepsVisible=!stepsVisible" />
            <br>
        </div>
        <div v-show="!stepsVisible">
            <font-awesome-icon icon="chevron-down"
                class="fa-2x nav-guide"
                @click="stepsVisible=!stepsVisible" />
        </div>  

        <!-- 'make available' steps progress bar -->
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child is-1">
                    <font-awesome-icon icon="arrow-circle-left" 
                        class="fa-2x nav-guide"
                        :class="{ 'nav-dormant': currentStep == 1}"
                        @click="previous(currentStep)" />
                </div>

                <div class="tile is-child">
                    <ul class="steps has-content-centered tile is-parent">
                        <li v-bind:key="step.id"
                            v-for="step in steps"
                            class="steps-segment tile"
                            v-bind:class="{'is-active':step.details.stepActive}">
                            <span class="steps-marker">{{ step.details.stepMarker }}</span>
                            <div
                                class="steps-content">
                                <div v-show="stepsVisible">
                                    <p class="subtitle is-5"
                                        :class="{'has-text-grey-light':!step.details.stepActive}">
                                            {{ step.details.stepName }}</p>
                                    <p :class="{'is-size-7 has-text-grey-light':!step.details.stepActive}">
                                            {{ step.details.stepInfo }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                
                </div>
                <div class="tile is-child is-1">
                    <font-awesome-icon icon="arrow-circle-right" 
                        class="fa-2x nav-guide"
                        :class="{ 'nav-dormant': currentStep == 5}"
                        @click="next(currentStep)" />                
                </div>
            </div>  
        </div>
        <hr>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      // make available steps data
      currentStep: 1, // 1 correlates to step 1, etc
      stepsVisible: true, // controls visibility of entire steps component
      steps: [
        // data for each of the steps
        {
          details: {
            stepMarker: 1,
            stepName: "Prepare",
            stepActive: true,
            stepInfo: "Prepare to make available from a supplier"
          }
        },
        {
          details: {
            stepMarker: 2,
            stepName: "Skip",
            stepActive: false,
            stepInfo: "If needed select which items to skip by default"
          }
        },
        {
          details: {
            stepMarker: 3,
            stepName: "Split",
            stepActive: false,
            stepInfo: "Drag the words of each item into relevant box"
          }
        },
        {
          details: {
            stepMarker: 4,
            stepName: "Sift",
            stepActive: false,
            stepInfo: "Add categories"
          }
        },
        {
          details: {
            stepMarker: 5,
            stepName: "Cull",
            stepActive: false,
            stepInfo:
              "Do a final comparison and uncheck any items you wish to cull"
          }
        }
      ]
    };
  },
  methods: {
    next(pos) {
      if (pos < this.steps.length) {
        // translate 'pos' to 0-based index for array
        pos--;
        this.steps[pos].details.stepActive = false;
        this.steps[pos + 1].details.stepActive = true;
        this.currentStep++;
        this.$emit("currentStepChanged", this.steps[pos + 1].details.stepName);
      }
    },
    previous(pos) {
      if (pos > 1) {
        pos--;
        // translate 'pos' to 0-based index for array
        this.steps[pos].details.stepActive = false;
        this.steps[pos - 1].details.stepActive = true;
        this.currentStep--;
        this.$emit("currentStepChanged", this.steps[pos - 1].details.stepName);
      }
    }
  }
};
</script>

<style scoped>
    .nav-guide {
        color: skyblue;
    }

    .nav-dormant {
        color: lightgrey;
    }

    hr {
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        margin-top: .5em;
        margin-bottom: 1em;
        border-style: inset;
        border-width: 1px;
        color: lightgray;
    }
</style>