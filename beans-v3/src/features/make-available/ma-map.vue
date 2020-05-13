<template>
<div>
    <h3>Map fields</h3>
    <!-- map fields to import -->

    <!-- display headings in following column layout: --> 
    <!-- |1 1|2 2|3 3 3 3 3 3|4 4| -->    
    <div class="columns has-text-left">
        <div class="column is-2"></div>
        <div class="column">
            <p class="subtitle">downloaded field/s mapped to...</p>
        </div>
        <div class="column is-2">
        </div>
        <div class="column is-2">
            <p class="subtitle">import fields</p>
        </div>
    </div>

    <!-- display mappings in following column layout: --> 
    <!-- |1 1|2 2 2 2 2|3|4 4|5 5| -->   
    <div v-for="(line) in initialFields"
        :key="line[0][0]"
        class="columns has-text-left">
        <div class="column is-2"></div>
        <div class="column is-1">
            <strong>{{ line[0][0] }}</strong>   
        </div>  
        <div class="column">
            <vue-multi-select
                placeholder="choose which imported column/s to map to field"
                v-model="line[1]"
                :options="csvColumns"
                class="column">
            </vue-multi-select>            
        </div>
        <div class="column is-2">
            <span v-for="item in line[1]"
                :key="item"
                class="tag">
                    {{ item }}
            </span>
        </div>       
    </div>
    <div class="column is-2">  
    </div> 
</div>
</template>

<script>
import { prepContainer } from '../../stores/make-available/prep'
import { computed } from '@vue/composition-api'
import VueMultiSelect from 'vue-simple-multi-select'

export default {
    components: { VueMultiSelect },
    setup() {
        const { prepState } = prepContainer.useContainer()

        return {
            initialFields: computed(() => prepState.initialFields),
            csvColumns: computed(() => prepState.fileData.cols)
        }
    }
}



/*     db.put({
        _id: "item_1",    
        itemName: "banana",
        description: "long curved yellow delicious herb"
    }).then(function (response) {
        console.log(response);
    }).catch(function (err) {
        console.log(err);
    });

    db.get('item_1').then(function (doc) {
        console.log(doc);
    }).catch(function (err) {
        console.log(err);
    });

    db.get('item_1').then(function(doc){
        return db.put({
            _id: 'item_1',
            _rev: doc._rev,
            description: "simply yummy'"
        });
    }).then(function(response) {
        console.log(response);
    }).catch(function(err) {
        console.log(err);
    });

    PouchDB.sync('testator', 'http://127.0.0.1:5984/testator', {
        live: true,
        retry: true
    }).on('complete', function (info) {
        console.log(info);
    }).on('error', function (err) {
        console.log(err);
    }); */
</script>

<style>
</style>