import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // data for each step of updating supplier availabilities 
        currentStep: 1,                 // 1 correlates to step 1, etc
        currentComponent: "Prepare",    // assume step name matches component name
        stepsVisible: true,             // controls visibility of entire steps component
        steps: [ // data for each of the steps...
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
    },
    actions: {
        next({ commit }, payload) {
            commit("NEXT", payload)
        },
        previous({ commit }, payload) {
            commit("PREVIOUS", payload)
        },
        setCurrentComponent({ commit }, payload) {
            commit("SET_CURRENT_COMPONENT", payload)
        }        
    },
    mutations: {
        NEXT(state, payload) {
            if (payload.position < state.steps.length) { // prevent over-stepping
                const i = payload.position - 1 // translate 'position' to 0-based index for array
                state.steps[i].details.stepActive = false
                state.steps[i + 1].details.stepActive = true
                state.currentStep.value++
            }
        },
        PREVIOUS(state, payload) {
            if (payload.position > 1) { // prevent over-stepping
                const i = payload.position - 1 // translate 'position' to 0-based index for array
                state.steps[i].details.stepActive = false
                state.steps[i - 1].details.stepActive = true
                state.currentStep.value--
            }
        },
        SET_CURRENT_COMPONENT(state, payload) {
            const i = payload.marker - 1
            state.currentComponent = state.steps[i].details.stepName
        }
    },
    getters: {
        currentComponent(state) {
            return state.currentComponent
        },
        currentStep(state) {
            return state.currentStep
        },
        stepsVisible(state) {
            return state.stepsVisible
        },
        step(state) {
            return state.step
        }
    }    
})