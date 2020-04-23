<template>
<div>
    <transition name="steps" appear>
        <Steps @currentStepChanged="currentComponent=$event"></Steps>
    </transition>

    <keep-alive>
        <!-- show relevant step -->
        <component :is="currentComponent"></component>
    </keep-alive>
</div>
</template>

<script>
import Steps from "./ma-steps"
import Prepare from "./ma-prepare"
import Skip from "./ma-skip"
import Split from "./ma-split"
import Sift from "./ma-sift"
import Cull from "./ma-cull"

export default {
    data: function () {
        return {
            currentComponent: "Prepare"
        }
    },
    components: {
        Steps,
        Prepare,
        Skip,
        Split,
        Sift,
        Cull
    },
    created() {
       
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
