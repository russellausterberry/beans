<template>
  <section class="section has-text-centered">
    <div v-show="stepsVisible">
      <div>
        <button class="subtitle" @click="stepsVisible=!stepsVisible">^</button>
      </div>
      <hr>

      <div class="columns">
        <div class="column">
          <button class="button has-text-grey" @click="previous(currentStep)">Previous</button>
        </div>
        <div class="column">Make Available</div>
        <div class="column">
          <button class="button has-text-grey" @click="next(currentStep)">Next</button>
        </div>
      </div>

      <!-- 'make available' steps progress bar -->
      <ul class="steps has-content-centered">
        <li 
          v-bind:key="step.id" 
          v-for="step in steps"
          class="steps-segment"
          v-bind:class="{'is-active':step.details.stepActive}"
          >
          <span class="steps-marker">{{ step.details.stepMarker }}</span>
          <div class="steps-content">
            <p class="subtitle is-5" v-bind:class="{'has-text-grey-light':!step.details.stepActive}">{{ step.details.stepName }}</p>
            <p v-bind:class="{'is-size-7 has-text-grey-light':!step.details.stepActive}">{{ step.details.stepInfo }}</p>
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
        currentStep: 1,      // 1 correlates to step 1, etc
        stepsVisible: true,  // controls visibility of entire steps component
        steps: [             // data for each of the steps
          { details: {
            stepMarker: 1,
            stepName: "Supplier",
            stepActive: true,
            stepInfo: "Choose supplier to set availability for"
            }
          },
          { details: {
            stepMarker: 2,
            stepName: "Method",
            stepActive: false,
            stepInfo: "Choose whether to import from supplier or change manually"            
            }
          },
          { details: {
            stepMarker: 3,
            stepName: "Map",
            stepActive: false,
            stepInfo: "If needed, map supplier fields to 'beans' fields"
            }
          },
          { details: {
            stepMarker: 4,
            stepName: "Skip",
            stepActive: false,
            stepInfo: "If needed select which items to skip by default"
            }
          },
          { details: {
            stepMarker: 5,
            stepName: "Split",
            stepActive: false,
            stepInfo: "Drag the words of each item into relevant box"
            }
          },
          { details: {
            stepMarker: 6,
            stepName: "Sift",
            stepActive: false,
            stepInfo: "Add categories"
            }
          },
          { details: {
            stepMarker: 7,
            stepName: "Cull",
            stepActive: false,
            stepInfo: "Do a final comparison and uncheck any items you wish to cull"
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
          this.steps[pos+1].details.stepActive = true;
          this.currentStep++;
          this.$emit('currentStepChanged', this.steps[pos+1].details.stepName); 
        }         
      },
      previous(pos) {
        if (pos > 1) { 
          pos--;
          // translate 'pos' to 0-based index for array              
          this.steps[pos].details.stepActive = false;
          this.steps[pos-1].details.stepActive = true;
          this.currentStep--;
          this.$emit('currentStepChanged', this.steps[pos-1].details.stepName); 
        }   
      }
    }    
  }
</script>

<style lang="" scoped>
  
</style>