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
import { dbs } from '../../database'
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
        var cf_Suppliers = dbs.cf_Suppliers
        var cfr_Suppliers = dbs.cfr_Suppliers

        cf_Suppliers.put({
                _id: '0044',
                title: 'Hedonic'
            }).then(function (response) {
                console.log('success ' + response)
            }).catch(function (err) {
                console.log('error ' + err);
            })
        
        cf_Suppliers.sync(cfr_Suppliers)
        console.log('just synced - did that work?')

        // cfr_Suppliers.get('mydoc').then(function (doc) {
        //     console.log(doc)
        // }). catch(function(err) {
        //     console.log(err)
        // })
    

        return {
            currentComponent:   computed({
                get: () => stepState.currentComponent,
                set: newVal => { stepState.currentComponent = newVal }
            })
        }
    }
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
