<template>
<div>
    <h3>Map fields</h3>
    <!-- map fields to import -->
    <div v-if="toMap">
        <br>
        <br>

        <!-- display headings --> 
        <div class="columns has-text-left">
            <div class="column is-2"></div>
            <div class="column">
                <p class="subtitle">downloaded field/s mapped to...</p>
            </div>
            <div class="column is-2">
                <p class="subtitle">import fields</p>
                <div>
                    <font-awesome-icon icon="minus-circle"
                        class="warning"
                        @click="clearMappedFields()" />
                    <span> Clear all mapped fields</span>                    
                </div>
            </div>
            <div class="column is-2"></div>
        </div>

        <!-- display mappings -->
        <div v-for="line in mappedFields"
            :key="line"
            class="columns has-text-left">
            <div class="column is-2"></div>   
            <vue-multi-select
                v-model="line[1]"
                :options="csvColumns"
                class="column">
            </vue-multi-select>
            <div class="column is-1">{{ line[0] }}</div>    
            <div class="column is-2">
                <span v-for="item in line[1]"
                    :key="item"
                    class="tag">
                        {{ item }}
                </span>
            </div>
            <div class="column is-2"></div>        
        </div>

        <!-- button for 'save' -->
        <div class="columns has-text-left">
            <div class="column is-2"></div>
            <div class="column"></div>
            <div class="column is-2">
                <div>
                    <font-awesome-icon icon="save"
                        class="action" />
                    <span> Update mappings</span>                        
                </div>
            </div>
            <div class="column is-2"></div>
        </div>        
    </div>
</div>
</template>

<script>




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