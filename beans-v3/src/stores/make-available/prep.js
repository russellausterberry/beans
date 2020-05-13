// prepState management pattern from vue-unstated documentation:
// https://www.npmjs.com/package/vue-unstated


import { reactive } from "@vue/composition-api"
import { createContainer } from 'vue-unstated'
import Papa from 'papaparse'

const usePrep = (initialState = {

        orderDate: 'May 15, 2020',
        chosenSupplier: 'Food Connect',
        chosenMethod: 'from csv',
        fileChosen: '',
        toMap: false,

        // column headers and all content of imported availability file
        fileData: {
            cols: [],
            all: {}
        },

        // TODO: currently hard coded; eventually fetch from db
        suppliers: [
            "Food Connect",
            "Sovereign Foods",
            "Mt Cotton Organic Farm",
            "Gabrielle Austerberry",
            "Carol Blight"
        ],
        initialFields: [
            [['product'], ['description', 'name']],
            [['unit'], []],
            [['unitPrice'], ['odious', 'monkey', 'breath']],
            [['gst'], ['unitPrice']],
            [['producer'], []]
        ]
    }) => {
        // encapsulate state
        const prepState = reactive(initialState)

        const readFile = () => {
            const file = event.target.files[0];
            Papa.parse(file, { // config object, containing callback
                header: true,
                complete: function (results) { // callback to execute when parsing completed
                    prepState.fileData.cols = results.meta.fields
                    prepState.fileData.all = results
                    prepState.fileChosen = file.name
                }
            })
        }

        // const clearMappings = () => {
        //     console.log('in clearMappings')
        //     const l = prepState.initialFields.length
        //     for(let i = 0; i < l; i++) {
        //         console.log('start: ' + prepState.initialFields[i][1])
        //         prepState.initialFields[i][1] = []
        //         console.log('end: ' + prepState.initialFields[i][1])
        //     }
        // }

        return { 
            prepState,
            readFile
        }
    }

    export const prepContainer = createContainer(usePrep)
