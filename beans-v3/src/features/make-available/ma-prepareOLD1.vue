<template>
<div>
    <div class="columns has-text-left">
        <div class="column is-2"></div>
        <div class="column">

            <!-- choose order date -->
            <div class="columns">
                <p class="column is-half">Choose date for next order or packing night</p>
                <datetime v-model="orderDate" class="column is-half"></datetime>
                <br>                          
            </div>
        
            <!-- choose supplier -->
            <div v-if="orderDate" class="columns">
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

    <!-- show 'NEXT' icon -->
    <div v-if="chosenMethod === 'manually' || fileChosen">
        <br>
        <br>
        <hr>
        <br>
        <span><p class="subtitle">Next</p></span>
        <font-awesome-icon icon="arrow-circle-right"
            class="fa-2x nav-guide"/>
        <br>
        <br>
    </div>

</div>
</template>

<script >
import { prep } from './prepareAvailability'

export default {
    setup() {
        const {
            chosenSupplier,             // global
            supplierPreListIndex,
            orderDate,                  // global
            chosenMethod,
            fileChosen,
            fileData,
            toMap,
            isComplete,
            suppliers,                  // global
            mappedFields,
            setChosenSupplier,
            setSupplierPreListIndex,
            setOrderDate,
            setChosenMethod,
            setFileChosen,
            setFileData,
            setToMap,
            setIsComplete,
            setMappedField,
            clearMappedFields
        } = prep()

        function readFile() {
            var file = event.target.files[0];
            this.$papa.parse(file, {        // config object, containing callback
                header: true,
                complete: function (results) {    // callback to execute when parsing completed
                    const payload = {
                        fields: results.meta.fields,
                        all: results
                    }
                    setFileData(payload); 
                    setFileChosen(true)
                }
            });
        }

        return {
            chosenSupplier,
            supplierPreListIndex,
            orderDate,
            chosenMethod,
            fileChosen,
            fileData,
            toMap,
            isComplete,
            suppliers,
            mappedFields,
            setChosenSupplier,
            setSupplierPreListIndex,
            setOrderDate,
            setChosenMethod,
            setFileChosen,
            setFileData,
            setToMap,
            setIsComplete,
            setMappedField,
            clearMappedFields,
            readFile
        }
    }






    // watch: {
    //     chosenSupplier() {
    //         if (this.chosenSupplier) {
    //             // update supplier index

    //             let cs = this.chosenSupplier
    //             let p = this.supplierPreLists
    //             let index = this.supplierPreListIndex
    //             // find index
    //             p.some(function(v, i) {
    //                 if (v.supplierPreList.supplier === cs) {
    //                     index = i
    //                     return true
    //                 }
    //             })
    //             this.supplierPreListIndex = index

    //             // update supplier mapping 
    //             if (index > -1) {
    //                 let spl = this.supplierPreLists[index].supplierPreList.mapping
    //                 this.mappedFields = new Map(Object.entries(spl))                     
    //             }               

    //         } else {
    //             // clear supplier mapping
    //             this.supplierPreListIndex = -1
    //             this.clearMappedFields()
    //         }
    //     }
    // }
}
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
    
    .action {
        color: mediumseagreen;
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
