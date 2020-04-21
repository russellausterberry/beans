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
        </div>
        <div class="column"></div>                  
    </div>

    <!-- map fields to import -->
    <div v-if="fileChosen">
        <div v-for="(field, index) in mappedFields"
            :key="field[0]">
            <span>{{ field[0] }}: {{ field[1] }}</span>
            <vue-multi-select
                v-model="mappedFields[index][1]"
                :options="csvColumns">
            </vue-multi-select>                
        </div>

    </div>


    <br>
    <br>


</div>
</template>

<script >

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
            dragging: null,
            over: false,
            productFields: [

                'product',
                'unit',
                'unitPrice',
                'gst',
                'producer',
                'supplier',
                'deliveryDate'
            ],
            mappedFields: [

                ['product', []],
                ['unit', ['french fries', 'potato chips']],
                ['unitPrice', ['unify']],
                ['gst', []],
                ['producer', []],
                ['supplier', []],
                ['deliveryDate', []]
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
        },
        handleDrop(data) {
            console.log('data ' + JSON.stringify(data.col))
        }
    },
    computed: {
        csvItems () {
            return this.$store.state.csvItems;
        },
        csvColumns: {
            get() {
                return this.$store.getters.csvColumns;
            },
            set(value) {
                this.$store.dispatch('updateCsvColumns', value)
            }            
        }
    },
    components: {
        // draggable
    }
};
</script>

<style scoped>
    .to-map {
        text-align: left;
        font-weight: bold;
    }

    .dropster {
        width: 60%;
    }

    .drop.over {
        border-color: #aaa;
        background: #ccc;
    }
</style>
