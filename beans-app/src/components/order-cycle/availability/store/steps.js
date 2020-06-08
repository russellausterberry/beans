import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import { reactive, computed } from '@vue/composition-api'
Vue.use(VueCompositionApi)

const stepsState = reactive({

    // data for each step of updating supplier availabilities 
    _currentIndex: 0,                 // 1 correlates to step 1, etc
    _currentComponent: 'Prepare',    // assume step name matches component name
    _stepsVisible: true,             // controls visibility of entire steps component
    _steps: [                        // data for each of the steps...
        {
            details: {
                stepName: 'Prepare',
                stepActive: true,
                stepInfo: 'Prepare to make available from a supplier'
            }
        },
        {
            details: {
                stepName: 'Skip',
                stepActive: false,
                stepInfo: 'If needed select which items to skip by default'
            }
        },
        {
            details: {
                stepName: 'Split',
                stepActive: false,
                stepInfo: 'Drag the words of each item into relevant box'
            }
        },
        {
            details: {
                stepName: 'Sift',
                stepActive: false,
                stepInfo: 'Add categories'
            }
        },
        {
            details: {
                stepName: 'Cull',
                stepActive: false,
                stepInfo: 'Do a final comparison and uncheck any items you wish to cull'
            }
        }
    ]
})

const currentIndex = computed({
    get: () => stepsState._steps.currentIndex,
    set: (newIndex) => stepsState._steps.currentIndex = newIndex
})

const currentComponent = computed({
    get: () => stepsState._steps.currentComponent,
    set: (newCmpt) => stepsState._steps.currentComponent = newCmpt
})

const stepsVisible = computed({
    get: () => stepsState._stepsVisible
})

const toggleStepsVisible = () => {
    stepsState._stepsVisible = !stepsState._stepsVisible
}

const shiftStep = (direction) => {

    let proceed = false
    let shift = 0
    const i = stepsState._currentIndex

    if (direction === 'next' && i < stepsState._steps.length - 1) {
        shift = 1
        proceed = true
    } else if (direction === 'previous' && i > 0) {
        shift = -1
        proceed = true
    }

    if (proceed) { 
        stepsState._steps[i].details.stepActive = false
        stepsState._steps[i + shift].details.stepActive = true
        currentIndex(i + shift)
        currentComponent(stepsState._steps[i + shift].details.stepName)
    }
}

export {  // export public functions which access private state
    currentIndex,
    currentComponent,
    stepsVisible,
    toggleStepsVisible,
    shiftStep
}