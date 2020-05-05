// prepState management pattern from vue-state-composer:
// https://www.npmjs.com/package/vue-state-composer


import { watch, toRefs } from "@vue/composition-api"
import { createStore } from 'vue-state-composer'

const prep = createStore ({
    name: 'Prep',
    setup({ createState }) {
        const state = createState({
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
        // move to next step
        const next = (position) => {
            if (position < state.steps.length) { // prevent over-stepping
                const i = position - 1           // translate 'position' to 0-based index for array
                state.steps[i].details.stepActive = false
                state.steps[i + 1].details.stepActive = true
                state.currentStep.value++
            }
        }
        // move to previous step
        const previous = (position) => {
            if (position > 1) {                  // prevent over-stepping
                const i = position - 1           // translate 'position' to 0-based index for array
                state.steps[i].details.stepActive = false
                state.steps[i - 1].details.stepActive = true
                state.currentStep.value--
            }
        }

        // watch pattern from documentation:
        // https://vue-composition-api-rfc.netlify.app/api.html#watch
        watch(() => state.steps.currentStep, () => {
            const i = state.currentStep - 1
            state.currentComponent = state.steps[i].stepName
        })

        return {
            ...toRefs(state),
            next,
            previous
        }
    }
})

