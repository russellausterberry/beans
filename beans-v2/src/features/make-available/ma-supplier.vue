<template>
<div>
    <div class="columns">
        <div class="column"></div>
        <div class="column">
<!--             <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Select supplier to update availability for</p>
                </header>
                <div class="card-content control">
                    <v-select :options="suppliers" v-model="chosenSupplier"></v-select>
                </div>
            </div>
            <br>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Select how to update:</p>
                </header>
                <div class="card-content control">
                    <v-select :options="['from csv', 'manually']" v-model="chosenMethod"></v-select>
                </div>
            </div> -->
            <br>
            <br>
            <div><input type="file" @change="readFile" /> </div> 
            <br>
            <div>
                <h3>.csv fields:</h3>
                <ul>
                    <li
                        v-for="col in csvColumns"
                        :key="col.id"
                    >{{ col }} </li>
                </ul>
            </div>
            <br>
            <br>
            <div>
                <h3>.csv items:</h3>
                {{ csvItems }}
            </div>
    
        </div>
        <div class="column"></div>
    </div>

</div>
</template>

<script>
export default {
    data: function () {
        return {
            suppliers: [
                "Food Connect",
                "Sovereign Foods",
                "Mt Cotton Organic Farm",
                "Gabrielle Austerberry",
                "Carol Blight"
            ],
            availability: {},
            chosenSupplier: '',
            chosenMethod: '',
            showColumns: false,
            testColumns: ['A', 'B', 'C']
        };
    },
    methods: {
        // read the chosen .csv file into a JSON structure
        readFile() {
            var file = event.target.files[0];
            var self = this;
            
            this.$papa.parse(file, {    // config object, containing callback
                header: true,
                complete: function (results) {      // callback to execute when parsing completed
                    const payload = {
                        fields: results.meta.fields,
                        all: results
                    }

                    self.$store.dispatch('importCSV', payload); 

                    // update availability with results
                    // update columns with results.meta.fields
                    // display columns  
             
                }
            });
        }
    },
    computed: {
        csvItems () {
            return this.$store.state.csvItems;
        },
        csvColumns () {
            return this.$store.getters.csvColumns;
        }
    }
};
</script>

<style lang="">
</style>
