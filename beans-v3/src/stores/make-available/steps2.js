import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

import { reactive } from '@vue/composition-api'

const stepState = reactive({
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
    ],
});

const useSteps = reactive ({
    // getters & setters
    get currentStep() {
        return stepState.currentStep;
    },
    set currentStep(newStep) {
        stepState.currentStep = newStep;
    },
    get currentComponent() {
        return stepState.currentComponent;
    },
    set currentComponent(newComponent) {
        stepState.currentComponent = newComponent;
    },
    get stepsVisible() {
        return stepState.stepsVisible;
    },
    set stepsVisible(bool) {
        stepState.stepsVisible = bool;
    },

    toggleStepsVisble() {
        stepState.stepsVisible = !stepState.stepsVisible;
    },

    // move to next step
    next (position) {
        if (position < stepState.steps.length) { // prevent over-stepping
            const i = position - 1           // translate 'position' to 0-based index for array
            stepState.steps[i].details.stepActive = false
            stepState.steps[i + 1].details.stepActive = true
            stepState.currentComponent = stepState.steps[i + 1].details.stepName
            stepState.currentStep++
            
        }
    },

    // move to previous step
    previous (position) {
        if (position > 1) {                  // prevent over-stepping
            const i = position - 1           // translate 'position' to 0-based index for array
            stepState.steps[i].details.stepActive = false
            stepState.steps[i - 1].details.stepActive = true
            stepState.currentComponent = stepState.steps[i - 1].details.stepName
            stepState.currentStep--
        }
    }    
});

export { stepState, useSteps };