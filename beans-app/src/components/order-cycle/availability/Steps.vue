<template>
    <div>
        <div v-show="stepsVisible">
            <unicon name="save" fill="limegreen"
                class="nav-guide"
                @click="toggleStepsVisible" />
            <br>
        </div>
        <div v-show="!stepsVisible">
            <unicon name="save" fill="limegreen"
                class="nav-guide"
                @click="toggleStepsVisible" />
        </div>  

        <!-- 'make available' steps progress bar -->
        <div class="tile is-ancestor">
            <div class="tile is-parent">
                <div class="tile is-child is-1">
                    <unicon name="arrow-left" fill="skyblue" 
                        class="nav-guide"
                        :class="{ 'nav-dormant': currentIndex === 0}"
                        @click="currentStep('previous')" />
                </div>

                <div class="tile is-child">
                    <ul class="steps has-content-centered tile is-parent">
                        <li v-bind:key="step.id"
                            v-for="step in steps"
                            class="steps-segment tile"
                            v-bind:class="{'is-active':step.details.stepActive}">
                            <!-- <span class="steps-marker">{{ step.details.stepMarker }}</span> -->
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
                    <unicon name="arrow-right" fill="limegreen"
                        class="nav-guide"
                        :class="{ 'nav-dormant': currentIndex === steps.length - 1}"
                        @click="currentStep('next')" />                
                </div>
            </div>  
        </div>
        <hr>
    </div>
</template>



<script>
import {
    currentIndex,
    currentComponent,
    stepsVisible,
    steps,
    toggleStepsVisible,
    shiftStep
} from './store/steps'

export default {
    setup() {
        return {
            currentIndex,
            currentComponent,
            stepsVisible,
            steps,
            toggleStepsVisible,
            shiftStep            
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