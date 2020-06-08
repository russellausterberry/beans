import Vue from 'vue'
import { reactive } from '@vue/composition-api'

const stepsState = reactive({

    // data for each step of updating supplier availabilities 
    #currentStep: 1,                 // 1 correlates to step 1, etc
    #currentComponent: 'Prepare',    // assume step name matches component name
    #stepsVisible: true,             // controls visibility of entire steps component
    #steps: [                        // data for each of the steps...
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
})

const getters = toRefs(reactive({
    currentStep: () => stepState.#currentStep,
    currentComponent: () => stepState.#currentComponent,
    stepsVisible: () => stepState.#stepsVisible,
    steps: () => stepState.#steps
}))

const mutations = toRefs(reactive({
    setCurrentStep: (newStep) => stepsState.#currentStep = newStep,
    setCurrentComponent: (newComp) => stepsState.#currentComponent = newComp,
}))

const actions = toRefs(reactive({
    next: (position) => {
        if (position < stepState.#steps.length) { // prevent over-stepping
            const i = position - 1           // translate 'position' to 0-based index for array
            stepState.#steps[i].details.stepActive = false
            stepState.#steps[i + 1].details.stepActive = true
            setCurrentComponent(stepState.#steps[i + 1].details.stepName)
            stepState.#currentStep++
            
        }
    },

    previous: (position) => {
        if (position > 1) {                  // prevent over-stepping
            const i = position - 1           // translate 'position' to 0-based index for array
            stepState.#steps[i].details.stepActive = false
            stepState.#steps[i - 1].details.stepActive = true
            setCurrentComponent(stepState.#steps[i - 1].details.stepName)
            stepState.#currentStep--
        }
    },
    
    toggleStepsVisible: () => {
        stepState.#stepsVisible = !stepState.#stepsVisible
    }
}))

export { getters, mutations, actions }