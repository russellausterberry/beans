<template>
<div>
    <div class="columns has-text-left">
        <div class="column is-2"></div>
        <div class="column">

            <!-- choose order date -->
            <div class="columns">
                <p class="column is-half">Choose date for next order or packing night</p>
                <datetime v-model="orderDate" class="column is-half"></datetime>
                <br>                          
            </div>
        
            <!-- choose supplier -->
            <div v-if="orderDate" class="columns">
                <p class="column is-half">Choose a supplier to set availability for</p>
                <vue-single-select v-model="chosenSupplier"
                    :options="suppliers"
                    class="column is-half">
                </vue-single-select>    
            </div>


            <!-- choose method -->
            <div v-if="chosenSupplier" class="columns">
                <p class="column is-half">Select how to set availability</p>
                <vue-single-select v-model="chosenMethod"
                    :options="['from csv', 'manually']"
                    class="column is-half">
                </vue-single-select>                
            </div>            

            <!-- choose file -->
            <div v-if="prep.chosenMethod=='from csv'" class="columns">
                <p class="column is-half">Choose a file to upload</p>
                <input type="file" @change="readFile" class="column is-half"/>
                <br>
            </div>

            <!-- choose whether to set up mapping -->
            <div v-if="prep.fileChosen" class="columns">
                <p class="column is-half">Set up file mapping?</p>
                <div class="column is-half">
                    <input type="checkbox" 
                        id="toMap"
                        v-model="prep.toMap">
                </div>
            </div>
        </div>
        <div class="column is-2"></div>                  
    </div>

    <!-- show 'NEXT' icon -->
    <div v-if="prep.chosenMethod === 'manually' || prep.fileChosen">
        <br>
        <br>
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
import { stepsContainer } from './useStepsUnstated'
import { prepContainer } from './usePrepUnstated'

export default {
    setup() {
        const { stepState, next } = stepsContainer.useContainer()
        const { prepState, readFile } = prepContainer.useContainer()

        return {
            orderDate: prepState.orderDate,
            chosenSupplier: prepState.chosenSupplier,
            chosenMethod: prepState.chosenMethod,
            toMap: prepState.toMap,
            suppliers: prepState.suppliers,
            readFile,
            currentStep: stepState.currentStep,
            next
        }
    }
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
