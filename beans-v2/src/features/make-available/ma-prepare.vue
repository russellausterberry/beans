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
            <div v-if="fileChosen" class="columns">
                <p class="column is-half">Set up file mapping?</p>
                <div class="column is-half">
                    <input type="checkbox" 
                        id="toMap"
                        v-model="toMap">
                </div>
            </div>
        </div>
        <div class="column is-2"></div>                  
    </div>

    <!-- map fields to import -->
    <div v-if="toMap">
        <br>
        <br>
        <div class="columns has-text-left">
            <div class="column is-2"></div>
            <div class="column">
                <p class="subtitle">downloaded field/s mapped to...</p>
            </div>
            <div class="column is-2">
                <p class="subtitle">import fields</p>
                <font-awesome-icon icon="minus-circle"
                    class="warning"
                    @click="clearMappedFields()" />
                <span> Clear all mapped fields</span>
            </div>
            <div class="column is-2"></div>
        </div>
        <div v-for="(field, index) in mappedFields"
            :key="field[0]"
            class="columns has-text-left">
            <div class="column is-2"></div>   
            <vue-multi-select
                v-model="mappedFields[index][1]"
                :options="csvColumns"
                class="column">
            </vue-multi-select>
            <div class="column is-1">{{ field[0] }}</div>    
            <!-- TODO: add deletable tags for each item in mappedFields -->
            <div class="column is-2">
                <span v-for="item in field[1]"
                    :key="item"
                    class="tag">
                        {{ item }}
                </span>
            </div>
            <div class="column is-2"></div>        
        </div>
    </div>

    <!-- show 'NEXT' icon -->
    <div v-if="chosenMethod === 'manually' || fileChosen">
        <br>
        <br>
        <hr>
        <br>
        <span><p class="subtitle">Next</p></span>
        <font-awesome-icon icon="arrow-circle-right"
            class="fa-2x nav-guide"
            @click="next(currentStep)" />
    </div>

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
            chosenSupplier: '',
            deliveryDate: '',
            chosenMethod: '',
            fileChosen: false,
            toMap: false,
            isComplete: false,
            mappedFields: [

                ['product', ['name', 'description']],
                ['unit', []],
                ['unitPrice', []],
                ['gst', []],
                ['producer', []]
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
        clearMappedFields() {
            this.mappedFields = [
                ['product', []],
                ['unit', []],
                ['unitPrice', []],
                ['gst', []],
                ['producer', []]                
            ]
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
