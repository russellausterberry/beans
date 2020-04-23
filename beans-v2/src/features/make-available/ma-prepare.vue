<template>
<div>
    <div class="columns has-text-left">
        <div class="column is-2"></div>
        <div class="column">

            <!-- choose order date -->
            <div class="columns">
                <p class="column is-half">Choose date for next order or packing night</p>
                <datetime v-model="deliveryDate" class="column is-half"></datetime>
                <br>                          
            </div>
        
            <!-- choose supplier -->
            <div v-if="deliveryDate" class="columns">
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
            <div v-if="chosenMethod=='from csv'" class="columns">
                <p class="column is-half">Choose a file to upload</p>
                <input type="file" @change="readFile" class="column is-half"/>
                <br>
            </div>

            <!-- choose whether to set up mapping -->
        </div>
        <div class="column is-2"></div>                  
    </div>

    <!-- map fields to import -->
    <div v-if="fileChosen">
        <div v-for="(field, index) in mappedFields"
            :key="field[0]">
            <vue-multi-select
                v-model="mappedFields[index][1]"
                :options="csvColumns">
            </vue-multi-select>
            <span>{{ field[0] }}</span>                            
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
            deliveryDate: '',
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
                'producer'
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
