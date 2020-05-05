<template>
    <div>
        <div v-show="stepsVisible">
            <font-awesome-icon icon="chevron-up"
                class="fa-2x nav-guide"
                @click="stepsVisible=!stepsVisible" />
            <br>
        </div>
        <div v-show="!stepsVisible">
            <font-awesome-icon icon="chevron-down"
                class="fa-2x nav-guide"
                @click="stepsVisible=!stepsVisible" />
        </div>  

        <!-- 'make available' steps progress bar -->
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child is-1">
                    <font-awesome-icon icon="arrow-circle-left" 
                        class="fa-2x nav-guide"
                        :class="{ 'nav-dormant': currentStep == 1}"
                        @click="previous(currentStep)" />
                </div>

                <div class="tile is-child">
                    <ul class="steps has-content-centered tile is-parent">
                        <li v-bind:key="step.id"
                            v-for="step in steps"
                            class="steps-segment tile"
                            v-bind:class="{'is-active':step.details.stepActive}">
                            <span class="steps-marker">{{ step.details.stepMarker }}</span>
                            <div
                                class="steps-content">
                                <div v-show="stepsVisible">
                                    <p class="subtitle is-5"
                                        :class="{'has-text-grey-light':!step.details.stepActive}">
                                            {{ step.details.stepName }}</p>
                                    <p :class="{'is-size-7 has-text-grey-light':!step.details.stepActive}">
                                            {{ step.details.stepInfo }}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                
                </div>
                <div class="tile is-child is-1">
                    <font-awesome-icon icon="arrow-circle-right" 
                        class="fa-2x nav-guide"
                        :class="{ 'nav-dormant': currentStep == 5}"
                        @click="next(currentStep)" />                
                </div>
            </div>  
        </div>
        <hr>
    </div>
</template>



<script>
import stepsContainer from './useStepsUnstated'

export default {
    setup() {
        const {
            stepState,
            currentComponent,
            currentStep,
            stepsVisible,
            steps,
            next,
            previous
        } = stepsContainer.useContainer()

        return {
            stepState,
            currentComponent,
            currentStep,
            stepsVisible,
            steps,
            next,
            previous
        }
    }
}
</script>



<style scoped>
    .nav-guide {
        color: skyblue;
    }

    .nav-dormant {
        color: lightgrey;
    }

    hr {
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        margin-top: .5em;
        margin-bottom: 1em;
        border-style: inset;
        border-width: 1px;
        color: lightgray;
    }
</style>