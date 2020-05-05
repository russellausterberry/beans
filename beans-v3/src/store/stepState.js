import Vue from 'vue'
import { reactive, computed, watch } from '@vue/composition-api'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

// steps store (defined once)
const state = reactive({

    // data for each step of updating supplier availabilities 
    currentStep: 1,                 // 1 correlates to step 1, etc
    currentComponent: "Prepare",    // assume step name matches component name
    stepsVisible: true,             // controls visibility of entire steps component
    steps: [                        // data for each of the steps...
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
                stepInfo: "Do a final comparison and uncheck any items you wish to cull"
            }
        }
    ]
})

// update current component when current step changes
watch(state.currentStep, (newStep) => {
    const i = newStep - 1
    state.currentComponent = state.steps[i].details.stepName
})

// api for steps store
export default function useSteps() {

    function next (position) {
        if (position < state.steps.length) {// prevent over-stepping
            const i = position - 1          // translate 'position' to 0-based index for array
            state.steps[i].details.stepActive = false
            state.steps[i + 1].details.stepActive = true
            state.currentStep.value++
        }
    }

    function previous (position) {
        if (position > 1) {                 // prevent over-stepping
            const i = position - 1          // translate 'position' to 0-based index for array
            state.steps[i].details.stepActive = false
            state.steps[i - 1].details.stepActive = true
            state.currentStep.value--
        }
    }

    return {
        state: computed(() => state.value),
        currentComponent: computed(() => state.currentComponent),
        currentStep: computed(() => state.currentStep),
        stepsVisible: computed(() => state.stepsVisible),
        steps: computed(() => state.steps),
        next,
        previous
    } 
}