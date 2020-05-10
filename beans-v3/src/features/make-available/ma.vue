<template>
<!-- component housing shifting content related to each step of making supplier lists available -->

    <div>
        <transition name="steps" appear>
            <!-- 'Steps' bar tracks which step is currently active -->
            <Steps></Steps>
        </transition>

        <keep-alive>
            <!-- show relevant step -->
            <component v-if="currentComponent"
                :is="currentComponent">Now in component: {{ currentComponent }}</component>
            <!-- work-around for currentComponent being intially undefined -->    
            <component v-else
                :is="'Prepare'"></component>
        </keep-alive>
    </div>
</template>

<script>
// import components
// manual check: each component should match 'step name' in steps data
import Steps from "./ma-steps"
import Prepare from "./ma-prepare"
import Skip from "./ma-skip"
import Split from "./ma-split"
import Sift from "./ma-sift"
import Cull from "./ma-cull"

// import stores
import { stepsContainer } from '../../stores/make-available/steps'
import { computed } from '@vue/composition-api'

export default {
    components: {
        Steps,
        Prepare,
        Skip,
        Split,
        Sift,
        Cull
    },
    setup() {

        const { stepState } = stepsContainer.provide()

        return {
            currentComponent:   computed({
                get: () => stepState.currentComponent,
                set: newVal => { stepState.currentComponent = newVal }
            })
        }
    }
    

/* TODO - find how to get/set currentComponent & use in another method */

    // data: function() {
    //     return {
    //         currentComponent: "Prepare"
    //     }
    // }
}
</script>

<style scoped>
.steps-enter {
    opacity: 0;
}

.steps-enter-active {
    transition: opacity 1.5s;
}
</style>
