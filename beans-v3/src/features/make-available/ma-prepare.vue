<template>
<div>
    <div class="columns has-text-left">
        <div class="column is-2"></div>
        <div class="column">

            <!-- choose order date -->
            <div class="columns">
                <p class="column is-half">Next order date</p>
                <datetime v-model="orderDate" class="column is-half"></datetime>
                <br>                          
            </div>
        
            <!-- choose supplier -->
            <div v-if="orderDate" class="columns">
                <p class="column is-half">Choose supplier</p>

                <cool-select v-model="chosenSupplier"
                    :items="suppliers"
                    class="column is-half">
                </cool-select>    
            </div>


            <!-- choose method -->
            <div v-if="chosenSupplier" class="columns">
                <p class="column is-half">Select method</p>
                <cool-select v-model="chosenMethod"
                    :items="['from csv', 'manually']"
                    class="column is-half">
                </cool-select>                
            </div>            

            <!-- choose file -->
            <div v-if="chosenMethod=='from csv'" class="columns">
                <p class="column is-half">Choose a file</p>
                <input type="file" @change="readFile" class="column is-half"/>
                <br>
            </div>

            <!-- choose whether to set up mapping -->
            <div v-if="fileChosen" class="columns">
                <p class="column is-half">Set up mapping?</p>
                <div class="column is-half">
                    <input type="checkbox" 
                        id="toMap"
                        v-model="toMap">
                </div>
            </div>
        </div>
        <div class="column is-2"></div>                  
    </div>


    <!-- set up mapping -->
    <div v-if="toMap === true">
        <hr>
        <mapping></mapping>
    </div>

    <!-- show 'NEXT' icon -->
    <div v-if="chosenMethod === 'manually' || fileChosen">
        <hr>
        <br>
        <span><p class="subtitle">Next</p></span>
        <font-awesome-icon icon="arrow-circle-right"
            class="fa-2x nav-guide"
            @click="next(currentStep)"/>
        <br>
        <br>
    </div>
</div>
</template>

<script>
// import stores
import { stepsContainer } from '../../stores/make-available/steps'
import { prepContainer } from '../../stores/make-available/prep'
import { computed } from '@vue/composition-api'
import { CoolSelect } from 'vue-cool-select'
import Mapping from './ma-map'

export default {
    components: { CoolSelect, Mapping },
    setup() {
        const { next, stepState } = stepsContainer.useContainer()
        const { prepState, readFile } = prepContainer.provide()

        return {
            orderDate:          computed({
                get: () => prepState.orderDate,
                set: newVal => { prepState.orderDate = newVal}
            }),
            chosenSupplier:     computed({
                get: () => prepState.chosenSupplier,
                set: newVal => { prepState.chosenSupplier = newVal}
            }),
            chosenMethod:       computed({
                get: () => prepState.chosenMethod,
                set: newVal => { prepState.chosenMethod = newVal}
            }),
            fileChosen:         computed({
                get: () => prepState.fileChosen,
                set: newVal => { prepState.fileChosen = newVal}
            }),
            toMap:              computed({
                get: () => prepState.toMap,
                set: newVal => { prepState.toMap = newVal}
            }),
            currentStep:        computed({
                get: () => stepState.currentStep,
                set: newVal => { stepState.currentStep = newVal}
            }),
            currentComponent:   computed({
                get: () => stepState.currentComponent,
                set: newVal => { stepState.currentComponent = newVal }
            }),
            suppliers:          computed(() => prepState.suppliers),
            next,
            readFile
        }
    },

}

</script>

<style scoped>
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
    
    .action {
        color: mediumseagreen;
    }

    .dropster {
        width: 60%;
    }

    .drop.over {
        border-color: #aaa;
        background: #ccc;
    }

    .nav-guide {
        color: skyblue;
    }

    .nav-dormant {
        color: lightgrey;
    }

    .to-map {
        text-align: left;
        font-weight: bold;
    }

    .warning {
        color: tomato;
    }
  
</style>
