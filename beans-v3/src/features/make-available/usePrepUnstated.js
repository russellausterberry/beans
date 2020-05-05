// prepState management pattern from vue-unstated documentation:
// https://www.npmjs.com/package/vue-unstated


import { reactive } from "@vue/composition-api"
import { createContainer } from 'vue-unstated'
import Papa from 'papaparse'

const usePrep = (initialState = {
    prep: {
            orderDate: '',
            chosenSupplier: '',
            chosenMethod: '',
            fileChosen: '',
            toMap: false
        },

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
                    prepState.prep.fileChosen = file.name
                }
            })
        }

        return { 
            prepState,
            readFile
        }
    }

    export const prepContainer = createContainer(usePrep)
