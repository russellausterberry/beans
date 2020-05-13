// prepState management pattern from vue-unstated documentation:
// https://www.npmjs.com/package/vue-unstated


import { reactive, watch } from '@vue/composition-api'
import { createContainer } from 'vue-unstated'

const useSteps = (initialState = {

    // data for each step of updating supplier availabilities 
    currentStep: 1,                 // 1 correlates to step 1, etc
    currentComponent: 'Prepare',    // assume step name matches component name
    stepsVisible: true,             // controls visibility of entire steps component
    steps: [                        // data for each of the steps...
        {
            details: {
                stepMarker: 1,
                stepName: 'Prepare',
                stepActive: true,
                stepInfo: 'Prepare to make available from a supplier'
            }
        },
        {
            details: {
                stepMarker: 2,
                stepName: 'Skip',
                stepActive: false,
                stepInfo: 'If needed select which items to skip by default'
            }
        },
        {
            details: {
                stepMarker: 3,
                stepName: 'Split',
                stepActive: false,
                stepInfo: 'Drag the words of each item into relevant box'
            }
        },
        {
            details: {
                stepMarker: 4,
                stepName: 'Sift',
                stepActive: false,
                stepInfo: 'Add categories'
            }
        },
        {
            details: {
                stepMarker: 5,
                stepName: 'Cull',
                stepActive: false,
                stepInfo: 'Do a final comparison and uncheck any items you wish to cull'
            }
        }
    ]
}) => { 
    // encapsulate state
    const stepState = reactive(initialState) 

    // move to next step
    const next = (position) => {
        if (position < stepState.steps.length) { // prevent over-stepping
            const i = position - 1           // translate 'position' to 0-based index for array
            stepState.steps[i].details.stepActive = false
            stepState.steps[i + 1].details.stepActive = true
            stepState.currentComponent = stepState.steps[i + 1].details.stepName
            stepState.currentStep++
            
        }
    }
    // move to previous step
    const previous = (position) => {
        if (position > 1) {                  // prevent over-stepping
            const i = position - 1           // translate 'position' to 0-based index for array
            stepState.steps[i].details.stepActive = false
            stepState.steps[i - 1].details.stepActive = true
            stepState.currentComponent = stepState.steps[i - 1].details.stepName
            stepState.currentStep--
        }
    }

    const toggleStepsVisible = () => {
        stepState.stepsVisible = !stepState.stepsVisible
    }

    // watch pattern from documentation:
    // https://vue-composition-api-rfc.netlify.app/api.html#watch
    watch(() => stepState.steps.currentStep, () => {
        const i = stepState.currentStep - 1
        stepState.currentComponent = stepState.steps[i].stepName
    })

    return {
        stepState,
        next,
        previous,
        toggleStepsVisible
    }    
}

export const stepsContainer = createContainer(useSteps)