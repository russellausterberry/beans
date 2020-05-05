import Vue from 'vue'
import Vuex from 'vuex'
import Papa from 'papaparse'
Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        // gather preparatory info for setting availability


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
    },
    actions: {
       readFile({ commit }) {
           commit("READ_FILE")
       } 
    },
    mutations: {
        READ_FILE(state) {
            const file = event.target.files[0];
            Papa.parse(file, { // config object, containing callback
                header: true,
                complete: function (results) { // callback to execute when parsing completed
                    const payload = {
                        fields: results.meta.fields,
                        all: results
                    }
                    state.fileData.cols = results.meta.fields
                    state.fileData.all = results
                    state.prep.fileChosen = file.name
                }
            })            
        }
    }
})