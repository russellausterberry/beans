<template>
<!-- component housing shifting content related to each step of making supplier lists available -->

    <div>
        <transition name="steps" appear>
            <!-- 'Steps' bar tracks which step is currently active -->
            <Steps @currentStepChanged="currentComponent=$event"></Steps>
        </transition>

        <keep-alive>
            <!-- show relevant step -->
            <component :is="currentComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
import { stepsContainer } from './useStepsUnstated'

// manual check: each component should match 'step name' in steps data
import Steps from "./ma-steps"
import Prepare from "./ma-prepare"
import Skip from "./ma-skip"
import Split from "./ma-split"
import Sift from "./ma-sift"
import Cull from "./ma-cull"

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
            currentComponent: stepState.currentComponent
        }
    }
};
</script>

<style scoped>
.steps-enter {
    opacity: 0;
}

.steps-enter-active {
    transition: opacity 1.5s;
}
</style>
