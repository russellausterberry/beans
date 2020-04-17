<template>
<div>
    <div class="columns">
        <div class="column"></div>
        <div class="column">

            <p>Choose a supplier to set availability for</p>
            <v-select
                label="chosenSupplier"
                :options="suppliers"
                v-model="chosenSupplier">
            </v-select>
            <br>

            <p>Select how to set availability</p>
            <v-select 
                :options="['from csv', 'manually']" 
                v-model="chosenMethod"
            >from csv</v-select>
            <br>
            
            <div v-if="chosenMethod=='from csv'">
                <p>Choose a file to upload</p>
                <input type="file" @change="readFile" />
                <br>
            </div>
         
            <!-- map fields to import -->
            <div v-if="fileChosen" class="columns">
                <div class="column">
                    <br>
                    <br>
                    <h3 class="subtitle">csv fields:</h3>
                    <ul>
                        <li
                            v-for="col in csvColumns"
                            :key="col.id"
                        >{{ col }} </li>
                    </ul>
                </div>

                <div class="column">
                    <br>
                    <br>
                    <h3 class="subtitle">fields to import to:</h3>
                    <ul>
                        <li
                            v-for="field in productFields"
                            :key="field.id"
                        > {{ field }}
                        </li>
                    </ul>
                </div>                
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
            fileChosen: false,
            productFields: [
                'product',
                'unit',
                'unitPrice',
                'gst',
                'producer',
                'supplier',
                'deliveryDate'
            ]
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
                    self.fileChosen = true;
             
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
