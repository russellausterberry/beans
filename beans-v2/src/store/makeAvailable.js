/* eslint-disable */

const state = {
    deliveryDate: '',
    currentSupplier: '',
    csvItems: {},
    csvColumns: ['one', 'two', 'three'],
    supplierPreLists: [
        {
            supplierPreList: {
                supplier: 'Food Connect',
                mapping: {
                    product: ['name', 'descrption'],
                    unit: ['unit'],
                    unitPrice: ['unitPrice'],
                    gst: [],
                    producer: [],
                }
            }
        },{
            supplierPreList: {
                supplier: 'Sovereign Foods',
                mapping: {
                    product: [],
                    unit: [],
                    unitPrice: [],
                    gst: [],
                    producer: [],
                }
            },
        },
    ],
}

const mutations = {
    // set supplier and udpate method
    'SET_METHOD' (state, currentSupplier, updateMethod) {
        state.currentSupplier = currentSupplier;
        state.updateMethod = updateMethod;
    },
    // import array of column names, and the .csv object
    'IMPORT_CSV' (state, payload) {
        state.csvColumns = payload.fields;
        state.csvItems = payload.all;
    },
    // reset all
    'CLEAR_CSV_IMPORT' (state) {
        state.currentSupplier = '';
        state.csvColumns = [];
        state.itemsToImport = {};
    },
    'UPDATE_CSV_COLUMNS' (state, payload) {
        state.csvColumns=payload;
    },
    'UPDATE_PRE_LISTS' (state, payload) {
        // check for supplier mapping, then add or update
        let i = state.supplierPreLists.findIndex(obj => obj.supplierPreList.supplier === payload.supplier)
        if (i === 'undefined') {
            state.supplierPreLists.push(payload)
        } else {
            state.supplierPreLists.splice(i,1,payload)
        }
    }
};
// actions may be asynchronous
const actions = {
    setMethod: ({commit}) => {
        commit('SET_METHOD', payload);
    },
    importCSV: ({commit}, payload) => {
        commit('IMPORT_CSV', payload);
    },
    clearCsvImport: ({commit}) => {
        commit('CLEAR_CSV_IMPORT');
    },
    updateCsvColumns: ({commit}, payload) => {
        commit('UPDATE_CSV_COLUMNS', payload);
    },
    updatePreLists: ({commit}, payload) => {
        commit('UPDATE_PRE_LISTS', payload)
    },
};

// derived state based on store state eg filtering list & counting items
// or simply functions used to return values from the store
const getters = {
    csvColumns: state => {
        return state.csvColumns
    },

    supplierPreLists: state => {
        return state.supplierPreLists
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}