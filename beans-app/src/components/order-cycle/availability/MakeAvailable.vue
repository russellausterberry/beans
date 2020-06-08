<template>
<!-- component housing shifting content related to each step of making supplier lists available -->

    <div>
        <transition name="steps" appear>
            <!-- 'Steps' bar tracks which step is currently active -->
            <Steps></Steps>
        </transition>

        <keep-alive>
            <!-- show relevant step -->
            <component :is="currentComponent">
                Now in component: {{ currentComponent }}
            </component>
        </keep-alive>
    </div>
</template>

<script>
// import components
// manual check: each component should match 'step name' in steps data
import Steps from './Steps'
import Prepare from './Prepare'
import Skip from './Skip'
import Split from './Split'
import Sift from './Sift'
import Cull from './Cull'

// import stores
import { currentComponent } from './store/steps'
// import { dbs } from '../../database'
// import { computed } from '@vue/composition-api'

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
        return { currentComponent }
    }



/*     setup() {

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
    } */
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
