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
    <div v-if="fileChosen" class="columns">
        <div class="column is-one-fifth">
            <br>
            <br>
            <h3 class="subtitle">csv fields:</h3>
            
            <!-- listing via v-for
            <ul>
                <li
                    v-for="col in csvColumns"
                    :key="col.id"
                >{{ col }} </li>
            </ul> -->

            <!-- drag'n'drop via VueDraggable -->
<!--                     <draggable
                v-model="csvColumns"
                group="lists"
                >
                    <div
                        v-for="field in csvColumns"
                        :key="field">
                            {{ field }}
                    </div>
            </draggable>     -->     

            <!-- drag-n-drop via VueDragDrop -->
            <div>
                <drag v-for="col in csvColumns"
                    :key="col"
                    :transfer-data="{ col }"
                    @dragstart="dragging = col"
                    @dragend="dragging = null"
                    class="card drop">
                        <span class="card-footer-item tag is-info">{{ col }}</span>
                </drag>
            </div>
        </div>

        <div class="column">
            <br>
            <br>
            <h3 class="subtitle">fields to import to:</h3>
            
            <!-- listing via v-for
            <ul>
                <li
                    v-for="(value, name) in productFields"
                    :key="name.id"
                > 
                    <span>
                        <span>{{ name }} : </span>
                        <span class="tag is-primary is-light">{{ value }}</span>
                    </span>
                    
                </li>
            </ul> -->

            <!-- drag-n-drop via VueDraggable -->
    <!--                     <draggable
                v-model="productFields" 
                group="lists"
                >
                    <div
                        v-for="field in productFields"
                        :key="field">
                        {{ field }}
                    </div>
            </draggable> -->

            <!-- drag-n-drop via VueDragDrop "-->
            <div class="card">
                <div v-for="field in mappedFields"
                    :key="field[0]"
                    ref="fields">
                    <span class="card-footer">
                        {{ field[0] }}
                        <drop class="drop card-footer-item"
                            @drop="handleDrop">
                            <span v-for="mapped in field[1]"
                                :key="mapped"
                                class="card-footer-item tag is-info">
                                    {{ mapped }}
                            </span>
                        </drop>                        
                    </span>
                    <!-- <span class="card-footer dropster">
                        <drop v-for="mapped in field[1]"
                            :key="mapped"
                            :class="{ allowed: dragging === mapped }
                            :class="{ over }"
                            @dragover="over = true"
                            @dragleave="over = false"
                            class="tag drop is-info"
                            @drop="handleDrop">
                                {{ mapped }}
                        </drop>   
                    </span> -->

                </div>  
            </div>
        </div>   
    </div> 
</div>
</template>

<script >
// import draggable from 'vuedraggable'

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
